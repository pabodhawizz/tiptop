#!/usr/bin/env python3
"""Lint blog-src/ before building. Exits non-zero on any error.

  python3 tools/check_blog.py

Checks every article for: filled-in front matter, no leftover placeholders,
no <h1>, allowed HTML tags only, tables with a header row, internal links that
resolve, no unexpected external links, AED amounts limited to the published
homepage prices, word count, and duplicate titles/descriptions.
"""
import json, re, sys
from html.parser import HTMLParser
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
SRC = ROOT / "blog-src"
FRONT = re.compile(r"^\s*<!--\s*(\{.*?\})\s*-->\s*", re.S)
ALLOWED_TAGS = {"p", "h2", "h3", "ul", "ol", "li", "strong", "em", "a", "table", "thead",
                "tbody", "tr", "th", "td", "div", "br"}
HOME_ANCHORS = {"/", "/#services", "/#pets", "/#villa", "/#assessment", "/#faq", "/#why",
                "/#process", "/#projects", "/blog/"}
# Prices published on the homepage FAQ. Anything else is an invented number.
ALLOWED_AED = {"199", "299", "599", "999"}
EXTERNAL_OK = ("https://shjmun.gov.ae/", "https://gulfnews.com/", "https://www.gulftoday.ae/",
               "https://wa.me/971527515144", "mailto:info@tiptopfm.com")
MIN_WORDS, MAX_WORDS = 600, 1300


class Scan(HTMLParser):
    def __init__(self):
        super().__init__()
        self.tags, self.links, self.bad_attrs = [], [], []
        self.tables, self._in_table, self._table_has_head = 0, False, False
        self.tables_without_head = 0

    def handle_starttag(self, tag, attrs):
        self.tags.append(tag)
        a = dict(attrs)
        if tag == "a":
            self.links.append(a.get("href", ""))
        for k, v in attrs:
            if k == "style" or k.startswith("on"):
                self.bad_attrs.append(f"{tag}[{k}]")
            if k == "class" and not (tag == "div" and v == "tt-note") and not (tag == "p" and v == "tt-sources"):
                self.bad_attrs.append(f"{tag}.{v}")
        if tag == "table":
            self.tables += 1
            self._in_table, self._table_has_head = True, False
        if tag == "thead" and self._in_table:
            self._table_has_head = True

    def handle_endtag(self, tag):
        if tag == "table":
            if not self._table_has_head:
                self.tables_without_head += 1
            self._in_table = False


def main():
    files = sorted(SRC.glob("*.html"))
    slugs = {f.stem for f in files}
    errors, warnings, titles, descs = [], [], {}, {}
    for f in files:
        text = f.read_text(encoding="utf-8")
        m = FRONT.match(text)
        if not m:
            errors.append(f"{f.stem}: no front matter")
            continue
        try:
            meta = json.loads(m.group(1))
        except json.JSONDecodeError as e:
            errors.append(f"{f.stem}: front matter is not valid JSON ({e})")
            continue
        body = text[m.end():]
        e = lambda msg: errors.append(f"{f.stem}: {msg}")
        d = meta.get("description", "")
        if not d or d == "TODO":
            e("description not filled in")
        elif not 110 <= len(d) <= 175:
            warnings.append(f"{f.stem}: description is {len(d)} chars (aim 140-160)")
        if "<!-- BODY -->" in body or "TODO" in body:
            e("placeholder left in body")
        titles.setdefault(meta.get("title"), []).append(f.stem)
        descs.setdefault(d, []).append(f.stem)
        for r in meta.get("related", []):
            if r not in slugs:
                e(f"related slug does not exist: {r}")
        s = Scan()
        s.feed(body)
        if "h1" in s.tags:
            e("contains <h1>")
        bad = sorted(set(s.tags) - ALLOWED_TAGS)
        if bad:
            e(f"disallowed tags: {bad}")
        if s.bad_attrs:
            e(f"disallowed attributes/classes: {sorted(set(s.bad_attrs))}")
        if s.tables_without_head:
            e(f"{s.tables_without_head} table(s) without <thead>")
        for href in s.links:
            if href.startswith("/blog/"):
                slug = href[len("/blog/"):].split("#")[0].strip("/")
                if slug and slug not in slugs:
                    e(f"broken internal link: {href}")
            elif href.startswith("/"):
                if href not in HOME_ANCHORS:
                    e(f"unexpected site link: {href}")
            elif not href.startswith(EXTERNAL_OK):
                e(f"external link not on allow-list: {href}")
        if not any(h.startswith("/blog/") for h in s.links):
            warnings.append(f"{f.stem}: no links to other articles")
        plain = re.sub(r"<[^>]+>", " ", body)
        # the "AED 15/hour cleaners" article discusses that search term itself
        ok_aed = ALLOWED_AED | ({"15", "20"} if f.stem.startswith("15-dhs") else set())
        for amt in re.findall(r"AED\s*([\d,]+)", plain):
            if amt.replace(",", "") not in ok_aed:
                e(f"AED amount not on the homepage: AED {amt}")
        for amt in re.findall(r"([\d,]+)\s*(?:AED|dirhams?|dhs)\b", plain, re.I):
            if amt.replace(",", "") not in ok_aed:
                e(f"price not on the homepage: {amt}")
        words = len(plain.split())
        if not MIN_WORDS <= words <= MAX_WORDS:
            warnings.append(f"{f.stem}: {words} words")
    for t, ss in titles.items():
        if len(ss) > 1:
            errors.append(f"duplicate title {t!r}: {ss}")
    for d, ss in descs.items():
        if len(ss) > 1 and d not in ("", "TODO"):
            errors.append(f"duplicate description: {ss}")
    for w in warnings:
        print("warn ", w)
    for x in errors:
        print("ERROR", x)
    print(f"{len(files)} articles checked: {len(errors)} errors, {len(warnings)} warnings")
    sys.exit(1 if errors else 0)


if __name__ == "__main__":
    main()
