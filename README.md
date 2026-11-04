# Tip Top — Homepage

Static homepage for Tip Top (cleaning & pet care, Sharjah). Deployed on Vercel;
every push to `main` redeploys automatically.

## Structure

| Path | What it is |
|---|---|
| `index.html` | Page shell, composes all sections |
| `SiteChrome.jsx` | Nav, Footer, sticky WhatsApp button, shared icons |
| `HeroSections.jsx` | Hero, trust bar, positioning statement |
| `ServiceSections.jsx` | Services index, pet care, pillars, villa feature |
| `ProofSections.jsx` | Before/after projects, process, standards, testimonials |
| `ConvertSections.jsx` | Assessment form, coverage, FAQ, final CTA |
| `_ds_bundle.js` | Design-system primitives (Button, Badge, Input, Accordion…) |
| `styles.css` + `tokens/` | Design tokens: colour, type, spacing, effects |
| `site.css` | Responsive collapses for the inline-styled grids |
| `assets/` | Logo and the 13 photographs the homepage uses |

## Editing

Section content lives in the `.jsx` files. Edit directly on GitHub for copy
changes, or clone and push for anything larger. No build step — files are served
as-is.

## Known issues — worth fixing

This is the design-system preview build, deployed as-is to get live quickly.
These things should be addressed before this carries real traffic:

1. **Browser-side transpiling.** `index.html` loads React's *development* builds
   from unpkg and runs Babel Standalone to compile the JSX on every page load.
   Slow first paint, console warnings, and an external dependency on unpkg.
   Fix: precompile the JSX and switch to production React.
2. ~~**Image weight.**~~ Done: the PNGs were re-encoded as 1920px progressive
   JPEGs (61.6MB → 2.9MB) and below-the-fold images lazy-load. The full-size
   originals are in git history (before commit "Audit fixes").
3. ~~**No meta tags.**~~ Done: description, canonical, Open Graph, favicon and
   LocalBusiness JSON-LD are in `index.html`; `robots.txt` and `sitemap.xml`
   are at the root. Update `sitemap.xml` `lastmod` when content changes.
