#!/usr/bin/env python3
"""Download each article's header photo and point the article at it.

tools/blog-images.json maps slug -> {url, alt}. For each entry this script:
  1. downloads the image (skipped if assets/blog/<slug>.jpg already exists)
  2. resizes it to 1600px wide and saves an optimised progressive JPEG
  3. sets image / image_alt / image_w / image_h in blog-src/<slug>.html

Then run tools/build_blog.py. Needs Pillow (pip install pillow) and network
access to the image host.
"""
import io, json, re, sys, urllib.request
from pathlib import Path
from PIL import Image

ROOT = Path(__file__).resolve().parent.parent
OUT = ROOT / "assets" / "blog"
FRONT = re.compile(r"^(\s*<!--\s*)(\{.*?\})(\s*-->)", re.S)
WIDTH = 1600


def main():
    data = json.loads((ROOT / "tools" / "blog-images.json").read_text())
    OUT.mkdir(parents=True, exist_ok=True)
    failed = []
    for slug, info in data.items():
        dest = OUT / f"{slug}.jpg"
        if not dest.exists():
            try:
                with urllib.request.urlopen(info["url"], timeout=60) as r:
                    im = Image.open(io.BytesIO(r.read())).convert("RGB")
            except Exception as e:  # keep going; report at the end
                failed.append(f"{slug}: {e}")
                continue
            if im.width > WIDTH:
                im = im.resize((WIDTH, round(im.height * WIDTH / im.width)), Image.LANCZOS)
            im.save(dest, "JPEG", quality=80, optimize=True, progressive=True)
        w, h = Image.open(dest).size
        src = ROOT / "blog-src" / f"{slug}.html"
        text = src.read_text(encoding="utf-8")
        m = FRONT.match(text)
        meta = json.loads(m.group(2))
        meta.update(image=f"blog/{slug}.jpg", image_alt=info["alt"], image_w=w, image_h=h)
        text = m.group(1) + json.dumps(meta, ensure_ascii=False, indent=1) + m.group(3) + text[m.end():]
        src.write_text(text, encoding="utf-8")
    if failed:
        print("could not download:\n  " + "\n  ".join(failed))
        sys.exit(1)
    print(f"{len(data)} images ready in assets/blog/")


if __name__ == "__main__":
    main()
