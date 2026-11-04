# Tip Top blog content plan: 100 articles

Research and planning only. No articles have been written yet. The full plan is in
[`content-plan.csv`](content-plan.csv): one row per article, with its target keyword,
secondary keywords, metrics, priority and batch.

## Market and data source

| | |
|---|---|
| Data source | **Ubersuggest** (connected, tier 2 account), pulled on 4 Nov 2026 |
| Market | United Arab Emirates (`locId 2784`), language `en` |
| Tools used | `keyword_suggestions` (the 10 seed terms), `match_keywords` (UAE-wide service and question expansions), `google_suggestions` (country `ae`; 15 seeds produced 9,241 autocomplete phrases and 1,659 question-style ones), `keyword_overview` (metrics for 34 question keywords picked from autocomplete) |
| Metrics | `volume` = monthly searches in the UAE. `sd` = Ubersuggest SEO difficulty (0–100). `cpc` = USD |
| Intent | Taken from Ubersuggest where it returned one. Marked **"(inferred)"** where Ubersuggest returned no intent and I classified the query by its wording (price/service → commercial; how/what/checklist → informational). |

No numbers come from web search or estimates. A volume of **0 or 10** is what
Ubersuggest reports for very long-tail UAE queries. Those rows are there for the
question they answer, not for their raw volume.

**Note on volumes:** Sharjah-specific searches are small in Ubersuggest's UAE data.
Most long-tails return 0–10. The large numbers are in a handful of head terms
(`cleaning services sharjah` 3,600, `house cleaning services sharjah` 2,900,
`maid service sharjah` 2,900, `pest control sharjah` 2,900). The plan puts those
first, then builds clusters of question articles around them that link back.

## How priorities were set

- **Priority 1 (46 articles):** SD under 25, commercial or transactional intent, and
  local demand. "Local" means either a Sharjah/UAE place name in the keyword, or a
  service query from the UAE market where the searcher wants a provider
  (e.g. `move out cleaning`, `mattress cleaning`); the article then targets Sharjah
  in its title and copy. Enforced in the build script: every P1 row has SD < 25 and
  commercial/transactional intent.
- **Priority 2 (39):** buying-adjacent informational topics (cost, price, checklist,
  how often, "is it worth it", X vs Y), plus commercial terms with SD 25+.
- **Priority 3 (15):** educational articles that build topical authority and link
  into the service clusters (dust mites, German cockroaches, ticks on dogs, hard water).
- **Batches:** 1–6, 17/17/17/17/16/16 articles. They're sorted by priority, then by an
  opportunity score (`volume × (CPC + 1) ÷ (SD + 5)`). Batches 1–2 are all P1, batch 3
  finishes P1, and batches 4–6 are P2 and P3.
- **One target keyword per article:** checked by script. No two rows share a target,
  and no row's target appears as another row's secondary keyword.

## Top 10 opportunities

Chosen from the Priority 1 rows by volume, CPC (what advertisers pay, a proxy for booking value), SD and how closely the keyword matches a Tip Top service in Sharjah.

| # | Target keyword | Vol | SD | CPC | Why |
|---|---|---|---|---|---|
| 1 | `cleaning services sharjah` | 3,600 | 17 | $3.64 | Highest-volume Sharjah term in the data, with low difficulty |
| 2 | `house cleaning services sharjah` | 2,900 | 10 | $4.08 | Near-top volume at the lowest SD of any big Sharjah term, so the easiest big win |
| 3 | `pest control sharjah` | 2,900 | 15 | $4.49 | Big local demand, low SD, and advertisers pay $4.49 a click, so it's a valuable lead |
| 4 | `pest control sharjah municipality` | 2,900 | 15 | $4.47 | Same volume. People comparing the municipality service with private firms are a ready audience for a comparison article |
| 5 | `maid service sharjah` | 2,900 | 21 | $4.09 | High volume. Answering "maid or cleaning company?" captures these searchers for Tip Top's model |
| 6 | `ac duct cleaning` | 2,400 | 23 | $11.72 | Highest CPC in the plan. Still under SD 25 and in heavy demand UAE-wide |
| 7 | `move out cleaning` | 1,000 | 8 | $10.40 | SD 8 and a $10.40 CPC: cheap to rank for and a high-value booking |
| 8 | `dog grooming` | 880 | 12 | $5.90 | Pet care is Tip Top's differentiator. Low SD, solid volume, home-service angle |
| 9 | `mattress cleaning` | 590 | 13 | $4.55 | Transactional intent and SD 13. Pairs naturally with sofa and carpet upsells |
| 10 | `deep cleaning services sharjah` | 480 | 15 | $3.62 | Exact match for Tip Top's core service, Sharjah-specific, low SD |

Honourable mentions: `sofa cleaning sharjah` (480 / SD 13), `carpet cleaning sharjah`
(320 / SD 13), `ac duct cleaning sharjah` (170 / SD 11), `marble polishing services`
(170 / SD 6), `facade cleaning services` (260 / SD 5).

> These head terms are things people search for when they want to book now. A blog
> post can rank for them, but a dedicated **service page** (e.g. `/pest-control-sharjah/`)
> usually ranks better. Consider service pages for the top 5 and point the blog
> articles at them, so the blog and the service page don't compete for the same keyword.

## Clusters

| Cluster | Articles | Service section on the homepage |
|---|---|---|
| Home & deep cleaning | 18 | Services 01 · Residential deep cleaning |
| Pet care | 16 | Pet Care (`#pets`) · grooming, sitting, walking, odour |
| Sofa, carpet & upholstery | 15 | Services 02 · Upholstery & specialised |
| Pest control | 14 | Services 07 · AC, pest control & building care |
| AC duct & coil | 13 | Services 07 · AC duct & coil |
| Move-in/out & post-construction | 9 | Services 04 |
| Building care & sanitisation | 9 | Services 05 and 07 · water tank, marble, facade, windows, disinfection |
| Office & commercial | 4 | Services 03 |
| Villa cleaning | 2 | Villas & Residences (`#villa`) |
| **Total** | **100** | |

## What was skipped and why

There's no `/blog/` folder in the repo, so no existing articles needed skipping.
Services were checked against what the page renders (`index.html` composes the
sections; the service list lives in `ServiceSections.jsx` and the form options in
`ConvertSections.jsx`).

| Skipped | Examples from the data | Reason |
|---|---|---|
| Car cleaning | `car deep cleaning` 590, `car interior deep cleaning` 320, `deep cleaning for car` 480 | Not a Tip Top service (your rule) |
| Dental / face | `deep cleaning vs scaling`, `deep cleaning face` 210, `facial deep cleaning` 170 | Not cleaning services (your rule) |
| Grease trap, fuel injector | (filtered out of all lists) | Your rule |
| Competitor brands | `marhaba pest control sharjah` 210, `lulu pest control sharjah` 210, `al hind pest control sharjah` 70, `justlife sofa cleaning` 50, `my shield deep cleaning…` 260 | Your rule; branded searches convert for the brand, not for Tip Top |
| Jobs, courses, business | `office cleaning jobs` 90, `pet sitter dubai job` 50, `pet sitting employment` 50, `how to become a pet sitter` | Your rule |
| Products, machines, DIY kits | `sofa cleaning machine` 480, `carpet cleaning machines` 1,000, `cockroach killer` 5,400, `advion cockroach gel` 6,600 | Shoppers looking for products, not services. No booking intent |
| Other emirates as the target | `deep cleaning company dubai` 5,400, `house cleaning abu dhabi` 5,400, `villa deep cleaning services dubai` 590 | Tip Top serves Sharjah. A Dubai-targeted article would bring the wrong traffic. (Some Dubai terms appear in the data only as background.) |
| "Near me" phrases | `carpet cleaning near me` 1,000, `ac duct cleaning near me` 320 | Google answers these with the map pack and Google Business Profile, not blog posts. Better handled by the GBP listing |
| Laundry / dry-cleaning | `deep cleaning laundry` 480, `golden city laundry…` 170 | Not offered |
| Live-in maid / visas | `can a maid cancel contract`, `maid agency` | Tip Top is a cleaning company, not a domestic-worker agency. The `maid service sharjah` article is a fair comparison of the two options, not an agency page |
| Unrelated "cockroach" noise | `cockroach janata party` 6,600, `oggy and the cockroach` 1,600 | Pop-culture and politics, not pests |
| Weak or duplicate topics | `how to remove pet hair from sofa`, `leather sofa cleaning` (SD 43), `ants in kitchen` (SD 41), `office cleaning checklist` (SD 44) | Cut to stay at 100, or merged as secondary keywords into a stronger article so they don't compete |

**Before publishing, please confirm these services are offered:**
termite control (id 56, P2), rodent control (id 51, P2) and mosquito control (id 92, P3). All three
are pest control, but they often need specific licensing. If any isn't offered, swap in
another P3 topic.

## Suggested publishing pace

Don't publish all 100 at once. A sudden flood of thin pages from a new blog looks
low-quality, and quality is what earns rankings.

| Phase | Weeks | Pace | What |
|---|---|---|---|
| 0 · Foundations | before week 1 | — | Add a `/blog/` index and article template (crawlable HTML, not client-rendered; see the audit PR's issue 2). Add articles to `sitemap.xml` as they go live. Consider the 5 service pages above |
| 1 | weeks 1–6 | **3 per week** | Batch 1 (17), the highest-value P1s |
| 2 | weeks 7–12 | 3 per week | Batch 2 (17) |
| 3 | weeks 13–18 | 3 per week | Batch 3 (17); P1 complete |
| Review | week 18 | — | Check Search Console: which clusters get impressions? Rebalance batches 4–6 toward them |
| 4 | weeks 19–30 | **2 per week** | Batches 4–6 (49), P2 and P3 support articles |

That's about **30 weeks (7 months)** for all 100. If the team can only manage 1–2 a
week, keep the order and stretch the timeline. Order matters more than speed.

Every article should:
- link to its matching service section and to its cluster's head article
- end with the WhatsApp booking CTA (+971 52 751 5144)
- reuse the site's published prices only where they match the FAQ, so the blog never disagrees with the homepage
