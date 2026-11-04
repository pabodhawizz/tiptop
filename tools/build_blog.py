#!/usr/bin/env python3
"""Build the static Tip Top blog.

Each article lives in blog-src/<slug>.html: a JSON front-matter block inside a
leading HTML comment, then the article body as plain HTML. This script wraps
each one in the shared template and writes:

  blog/<slug>/index.html   one page per article
  blog/index.html          the article list
  sitemap.xml              homepage + blog + every article

The output is plain HTML, so search engines and link previews can read it
without running JavaScript. Run it after adding or editing an article:

  python3 tools/build_blog.py
"""
import html, json, re, sys
from datetime import date
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
SRC, OUT = ROOT / "blog-src", ROOT / "blog"
SITE = "https://tiptopfm.com"
WA = "https://wa.me/971527515144"
PHONE_DISPLAY = "+971 52 751 5144"

FRONT = re.compile(r"^\s*<!--\s*(\{.*?\})\s*-->\s*", re.S)
REQUIRED = {"title", "description", "target_keyword", "label", "image", "image_alt",
            "image_w", "image_h", "date", "service_link", "service_label"}


def esc(s):
    return html.escape(s, quote=True)


def load():
    posts = []
    for f in sorted(SRC.glob("*.html")):
        text = f.read_text(encoding="utf-8")
        m = FRONT.match(text)
        if not m:
            sys.exit(f"{f.name}: missing JSON front matter")
        meta = json.loads(m.group(1))
        missing = REQUIRED - meta.keys()
        if missing:
            sys.exit(f"{f.name}: missing {sorted(missing)}")
        meta["slug"] = f.stem
        meta["body"] = text[m.end():].strip()
        words = len(re.sub(r"<[^>]+>", " ", meta["body"]).split())
        meta["minutes"] = max(1, round(words / 220))
        meta["url"] = f"{SITE}/blog/{f.stem}/"
        posts.append(meta)
    posts.sort(key=lambda p: (p["date"], p.get("order", 0)))
    return posts


HEAD = """<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>{title}</title>
<meta name="description" content="{description}">
<link rel="canonical" href="{url}">
<link rel="icon" href="/assets/logo.svg" type="image/svg+xml">
<meta property="og:type" content="{og_type}">
<meta property="og:site_name" content="Tip Top">
<meta property="og:title" content="{og_title}">
<meta property="og:description" content="{description}">
<meta property="og:url" content="{url}">
<meta property="og:image" content="{image}">
<meta property="og:locale" content="en_AE">
<meta name="twitter:card" content="summary_large_image">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link rel="stylesheet" href="/styles.css">
<link rel="stylesheet" href="/blog/blog.css">
{jsonld}
</head>
<body>
<a href="#main" class="tt-skip">Skip to content</a>
<header class="tt-header">
  <div class="tt-wrap tt-header-row">
    <a href="/" class="tt-logo" aria-label="Tip Top home"><img src="/assets/logo.svg" alt="tip top fm" width="60" height="26"></a>
    <nav aria-label="Main" class="tt-nav">
      <a href="/#services">Services</a>
      <a href="/#pets">Pet Care</a>
      <a href="/blog/">Blog</a>
      <a href="/#assessment" class="tt-btn tt-btn-sm">Book an Assessment</a>
    </nav>
  </div>
</header>
"""

FOOT = """<footer class="tt-footer">
  <div class="tt-wrap tt-footer-row">
    <div>
      <a href="/" class="tt-footer-brand">Tip Top</a>
      <p>Cleaning &amp; pet care for Sharjah homes. Mon – Sat, 8AM – 6PM.</p>
    </div>
    <div class="tt-footer-links">
      <a href="{wa}">WhatsApp {phone}</a>
      <a href="mailto:info@tiptopfm.com">info@tiptopfm.com</a>
      <a href="/#assessment">Book an assessment</a>
      <a href="/blog/">All articles</a>
    </div>
  </div>
  <p class="tt-wrap tt-copy">© {year} Tip Top Facility Management. All rights reserved.</p>
</footer>
</body>
</html>
"""


def jsonld(objs):
    return "\n".join(
        '<script type="application/ld+json">\n' + json.dumps(o, ensure_ascii=False, indent=1) + "\n</script>"
        for o in objs)


def cta(p):
    return f"""<aside class="tt-cta" aria-label="Book with Tip Top">
  <h2>Want this done for you?</h2>
  <p>Tip Top offers {esc(p['service_label'])} across Sharjah, with a free assessment and a clear price before we start.</p>
  <div class="tt-cta-row">
    <a class="tt-btn" href="{WA}">Message us on WhatsApp</a>
    <a class="tt-btn tt-btn-ghost" href="/#assessment">Request a free assessment</a>
  </div>
</aside>"""


def article(p, posts):
    by_slug = {q["slug"]: q for q in posts}
    related = [by_slug[s] for s in p.get("related", []) if s in by_slug][:3]
    img = f"{SITE}/assets/photography/{p['image']}"
    ld = [
        {"@context": "https://schema.org", "@type": "BlogPosting",
         "headline": p["title"], "description": p["description"],
         "image": img, "datePublished": p["date"], "dateModified": p.get("updated", p["date"]),
         "author": {"@type": "Organization", "name": "Tip Top Facility Management", "url": SITE + "/"},
         "publisher": {"@type": "Organization", "name": "Tip Top Facility Management",
                       "logo": {"@type": "ImageObject", "url": SITE + "/assets/logo.svg"}},
         "mainEntityOfPage": p["url"], "keywords": p["target_keyword"]},
        {"@context": "https://schema.org", "@type": "BreadcrumbList", "itemListElement": [
            {"@type": "ListItem", "position": 1, "name": "Home", "item": SITE + "/"},
            {"@type": "ListItem", "position": 2, "name": "Blog", "item": SITE + "/blog/"},
            {"@type": "ListItem", "position": 3, "name": p["title"], "item": p["url"]}]},
    ]
    rel_html = ""
    if related:
        items = "\n".join(
            f'    <li><a href="/blog/{r["slug"]}/"><span class="tt-label">{esc(r["label"])}</span>{esc(r["title"])}</a></li>'
            for r in related)
        rel_html = f'<section class="tt-related" aria-labelledby="related-h"><h2 id="related-h">Keep reading</h2>\n  <ul>\n{items}\n  </ul>\n</section>'
    pretty = date.fromisoformat(p["date"]).strftime("%-d %B %Y")
    page = HEAD.format(title=esc(p["title"]) + " | Tip Top", description=esc(p["description"]),
                       url=p["url"], og_type="article", og_title=esc(p["title"]), image=img,
                       jsonld=jsonld(ld))
    page += f"""<main id="main" tabindex="-1">
<article class="tt-article">
  <div class="tt-wrap tt-narrow">
    <nav aria-label="Breadcrumb" class="tt-crumbs"><a href="/">Home</a> / <a href="/blog/">Blog</a></nav>
    <p class="tt-label">{esc(p['label'])}</p>
    <h1>{esc(p['title'])}</h1>
    <p class="tt-meta"><time datetime="{p['date']}">{pretty}</time> · {p['minutes']} min read · By the Tip Top team</p>
  </div>
  <figure class="tt-wrap tt-hero">
    <img src="/assets/photography/{p['image']}" alt="{esc(p['image_alt'])}" width="{p['image_w']}" height="{p['image_h']}" fetchpriority="high">
  </figure>
  <div class="tt-wrap tt-narrow tt-body">
{p['body']}
{cta(p)}
  </div>
</article>
<div class="tt-wrap tt-narrow">
{rel_html}
</div>
</main>
"""
    page += FOOT.format(wa=WA, phone=PHONE_DISPLAY, year=date.today().year)
    return page


def index(posts):
    url = SITE + "/blog/"
    ld = [{"@context": "https://schema.org", "@type": "Blog", "name": "Tip Top Blog", "url": url,
           "publisher": {"@type": "Organization", "name": "Tip Top Facility Management", "url": SITE + "/"},
           "blogPost": [{"@type": "BlogPosting", "headline": p["title"], "url": p["url"],
                         "datePublished": p["date"]} for p in posts]}]
    cards = "\n".join(f"""  <li class="tt-card">
    <a href="/blog/{p['slug']}/">
      <img src="/assets/photography/{p['image']}" alt="" width="{p['image_w']}" height="{p['image_h']}" loading="lazy" decoding="async">
      <span class="tt-label">{esc(p['label'])}</span>
      <span class="tt-card-title">{esc(p['title'])}</span>
      <span class="tt-card-desc">{esc(p['description'])}</span>
    </a>
  </li>""" for p in sorted(posts, key=lambda p: (-date.fromisoformat(p['date']).toordinal(), p.get('order', 0))))
    desc = "Practical guides to cleaning, pest control, AC care and pet care for homes in Sharjah, from the Tip Top team."
    page = HEAD.format(title="Cleaning &amp; Pet Care Guides for Sharjah Homes | Tip Top Blog",
                       description=esc(desc), url=url, og_type="website",
                       og_title="Tip Top Blog", image=SITE + "/assets/photography/brand-hero-cleaner.jpg",
                       jsonld=jsonld(ld))
    page += f"""<main id="main" tabindex="-1">
<div class="tt-wrap">
  <header class="tt-blog-head">
    <p class="tt-label">Tip Top Blog</p>
    <h1>Cleaning &amp; pet care guides for Sharjah homes</h1>
    <p>{esc(desc)}</p>
  </header>
  <ul class="tt-grid">
{cards}
  </ul>
</div>
</main>
"""
    page += FOOT.format(wa=WA, phone=PHONE_DISPLAY, year=date.today().year)
    return page


def sitemap(posts):
    rows = [(SITE + "/", None), (SITE + "/blog/", max(p.get("updated", p["date"]) for p in posts))]
    rows += [(p["url"], p.get("updated", p["date"])) for p in posts]
    body = "\n".join(
        f"  <url>\n    <loc>{u}</loc>\n" + (f"    <lastmod>{d}</lastmod>\n" if d else "") + "  </url>"
        for u, d in rows)
    return f'<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n{body}\n</urlset>\n'


def main():
    import subprocess
    if subprocess.run([sys.executable, str(ROOT / "tools" / "check_blog.py")]).returncode:
        sys.exit("check_blog.py found errors; fix them before building")
    posts = load()
    for p in posts:
        d = OUT / p["slug"]
        d.mkdir(parents=True, exist_ok=True)
        (d / "index.html").write_text(article(p, posts), encoding="utf-8")
    (OUT / "index.html").write_text(index(posts), encoding="utf-8")
    # keep the homepage's existing lastmod
    old = (ROOT / "sitemap.xml").read_text(encoding="utf-8")
    home_mod = re.search(r"<loc>https://tiptopfm.com/</loc>\s*<lastmod>([^<]+)</lastmod>", old)
    sm = sitemap(posts)
    if home_mod:
        sm = sm.replace(f"<loc>{SITE}/</loc>\n", f"<loc>{SITE}/</loc>\n    <lastmod>{home_mod.group(1)}</lastmod>\n", 1)
    (ROOT / "sitemap.xml").write_text(sm, encoding="utf-8")
    print(f"built {len(posts)} articles + blog index + sitemap")


if __name__ == "__main__":
    main()
