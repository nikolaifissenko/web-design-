# antico-forno-del-ghetto

- **Found:** 2026-08-27 (centro storico research round, see README "Round 9")
- **Address:** Piazza Costaguti, 30-32, 00186 Roma (Ghetto)
- **Phone:** 06 6880 3012
- **Email:** none found.
- **Current website:** none — confirmed no independent domain, only
  directory listings and press mentions.
- **Sources:** Touring Club Italiano, 50 Top Pizza, Gambero Rosso
  (listing text only — full article blocked, see below), moondo.info
  (one dedicated food article, 2019), cross-checked web search for the
  Urbani family / kosher-bakery detail.
- **Status:** not yet contacted.
- **Demo URL:** https://nikolaifissenko.github.io/web-design-/clients/antico-forno-del-ghetto/
- **Response:** n/a
- **Sold:** no
- **Notes:**
  - **Everything on this demo is real — zero stock**, but this one was
    genuinely photo-poor. Checked, in order: their own site (none),
    Instagram (unreachable by fetch, as always), Tripadvisor (403,
    anti-bot), Gambero Rosso (403, anti-bot), Foursquare (empty SPA
    shell), 50 Top Pizza (real photos exist but are Instagram-CDN-hosted
    and return 403 to direct fetch), La Pecora Nera and Wanderlog (no
    real photos, only ad banners/map assets), Touring Club Italiano
    (had an image, but it turned out to be a **generic unrelated stock
    photo of a travel-agency office** used as their listing placeholder
    — caught and discarded, not used anywhere in this demo).
  - **The one real photo that did turn up** (moondo.info, a dedicated
    2019 food-blog article) is strong: a full bread case with pizza
    rossa freshly cut and a bread knife — used as `hero.jpg`.
  - **About/gallery were left without images** rather than filling them
    with generic stock — consistent with CLAUDE.md's rule that stock is
    only acceptable "for whichever image slots still have nothing real"
    after actually checking, and only as a last resort. This one
    slot legitimately has nothing real available.
  - This exposed a real template bug: `about.image: ""` left the
    about-grid at its default two-column layout with a blank gap where
    the image would have been. Fixed in the shared template
    (`template/css/style.css`, a `:has(> img.hidden)` rule collapsing to
    a single centered column) — harmless for every other client since
    none of them currently omit the about image.
  - **Logo:** none found anywhere — same legitimate "nothing exists"
    case as Pasticceria Boccione. Text initials ("AF") used.
  - **Colors:** `#b46a45` (terracotta/pizza-rossa) and `#3d2a1a` (crust
    brown), hand-sampled from the one real photo.
  - **Story, confirmed across multiple independent sources**: opened
    1927, run by the Urbani family for 20+ years, currently managed by
    Mauro Urbani. Bakes kosher: the ovens are lit by a rabbi every
    morning, and the dough uses no animal products at all (pareve —
    suitable for vegetarians/vegans too), a detail repeated identically
    across 50 Top Pizza and independent web search results, so treated
    as solid. Known for pizza bianca/rossa, filoni, pagnotte, rosette,
    and the classic "ossi."
  - **Hours**: found on a directory listing (Mon-Fri 07:30-14:30 /
    16:00-19:00, closed Saturday, Sunday 09:00-13:30) — not
    cross-confirmed on a second source the way Boccione's were, worth a
    phone check before relying on it fully.
  - No Instagram/Facebook account confirmed as belonging to the shop
    itself (it appears *in* other people's posts, per 50 Top Pizza, but
    no owned account found). Phone is the only outreach channel.

## Outreach script (phone/in-person — not yet used; Claude cannot make calls)

Rewritten a fourth time 2026-08-27: no em dashes anywhere (standing
repo rule now, see CLAUDE.md), and the personal connection is stated
outright. Still no price, still the real confirmed detail (Nikolai is a
regular, buys pizza rossa there), still heritage-respectful.

> Buongiorno,
>
> conosco bene il forno perché vengo spesso a comprare la pizza rossa da
> voi, ed è uno dei piaceri semplici che mi sono rimasti di questo
> quartiere. Dal 1927 sfornate pane e pizza secondo la tradizione, ed è
> un punto fermo per chiunque viva o passi dal Ghetto.
>
> Mi chiamo Nikolai, progetto siti web, e ho preparato una versione del
> vostro sito che raccontasse questa storia in modo semplice e moderno:
> https://nikolaifissenko.github.io/web-design-/clients/antico-forno-del-ghetto/
>
> Non c'è alcun impegno: è un'idea che vi propongo. Se avete altre foto
> del forno da condividere, il sito potrebbe venire ancora meglio, e in
> ogni caso un vostro parere sincero mi farebbe piacere.
>
> Con stima,
> Nikolai
