# libreria-minerva

- **Found:** 2026-08-28 (Municipio I/II historic-shops registry
  research)
- **Address:** Piazza Fiume, 57, 00198 Roma
- **Phone:** 06 8553043
- **Email:** info@minervalibreria.it
- **Facebook:** https://www.facebook.com/p/Libreria-Minerva-Roma-1923-100063628328103/
  (found via Turismo Roma's official listing, real, not fetchable for
  photos per CLAUDE.md)
- **Current website:** minervalibreria.it redirects to
  shop.minervalibreria.it, an e-commerce site that is reachable but
  genuinely broken: unrendered template code visible on-page
  ("<!--#4DTEXT...", "Error # 59"), legacy server tech from roughly the
  late 1990s/early 2000s. Confirmed one of the worst sites found in this
  project so far, per README's prior note. `libreriatombolini.it`-style
  DNS failure does NOT apply here, the domain resolves and loads, it is
  just badly broken.
- **Sources:** Roma Capitale/Turismo Roma official listing (history,
  contact info, official historic-shop recognition, no photos) -> web
  search (Franco Oddi's 1970 takeover, the shop's pioneering
  computerized inventory system) -> piuculture.it feature article
  (2021, comparative piece on two Rome bookshops, more history detail,
  no Minerva-specific photos) -> roma2pass.it and cralconsip.it
  (partner/discount listings, no real photos) -> the shop's own
  e-commerce site (real logo files found in `/miner/images/`, but only
  book-cover thumbnails otherwise, no storefront/interior photos).
- **Status:** outreach-sent (email sent 2026-08-31 to info@minervalibreria.it — Gmail message ID `1a0563171164729e`)
- **Demo URL:** https://nikolaifissenko.github.io/web-design-/clients/libreria-minerva/ (verified live, 200)
- **Response:** no reply yet
- **Sold:** no
- **Notes:**
  - **Real photo sources actually exhausted before touching stock**, per
    CLAUDE.md: own site (reachable but broken, only book-cover thumbnails
    from the catalog system, no shop photos), Turismo Roma (listing
    only), illibraio.it, bibliotechediroma.it (blocked, HTTP 403 to
    automated fetch), cralconsip.it and roma2pass.it (partner listings,
    the only image on either page was a generic site banner, not a shop
    photo), piuculture.it's dedicated feature article (rich history text
    but the only real photos in it were for a different bookshop,
    Booklet, not Minerva), Instagram/Facebook (client-rendered, confirmed
    dead end per CLAUDE.md). No real interior/storefront photo of this
    specific shop turned up anywhere reachable.
  - **A real logo did turn up, though**, on the shop's own e-commerce
    site (unlike the photos, this held up): `/miner/images/logo-header.png`,
    a wordmark "LIBRERIA MINERVA" with a maroon open-book/"M" icon
    between the two words, plus the tagline "INDIPENDENTE DAL 1923 -
    NEGOZIO STORICO".
  - **Story**: open since 1923 in Piazza Fiume. In 1970 Franco Oddi, at
    the time just a shop clerk, took over management and turned it into
    the general-interest ("varia") bookshop it still is, dropping the
    school-textbook section and changing how books were displayed and
    sold. Notably, it was reportedly among the first bookshops in Italy
    to computerize its inventory in the 1970s, before the ISBN barcode
    even existed (source: roma2pass.it). In 2014 the shop took over
    management of the adjacent pedestrian underpass (which holds Roman
    archaeological remains) from the Comune, expanding its floor space.
    Split across a street-level room and a basement level reached by
    stairs. Recognized as a "bottega storica" by Comune decree no. 733,
    28 April 2017.
  - **Logo:** the real wordmark is wide and text-heavy, so it does not
    crop cleanly into the 40x40 circular slot. The open-book/"M" icon
    portion alone is roughly square, but the source PNG is only 60px
    tall, far too low-resolution to enlarge cleanly. Per
    `branding-extraction.md`, redesigned a clean SVG in the same spirit
    (open-book "wings" forming an M-shape, with a bold M monogram on
    top), colored with values pixel-sampled directly from the real PNG,
    not invented: `#99042f` (the real maroon) and `#c3bcb2` (the real
    warm taupe-gray).
  - **Colors:** primary `#99042f` is the real sampled maroon. The real
    taupe `#c3bcb2` was too light to work as a UI accent (buttons,
    background fills need real contrast), so it was darkened to `#3d332e`,
    keeping the same warm-neutral hue rather than picking an unrelated
    dark color.
  - **Photos: all stock** (Unsplash, free license), used only after the
    real-source search above came up empty for any usable shop photo.
    Chosen for thematic fit with a general-interest neighborhood
    bookshop rather than for any specific resemblance to Piazza Fiume:
    `hero.jpg` (a tall bookshelf aisle with a ladder), `about.jpg` (an
    antique cash register, picked deliberately as a visual counterpoint
    to the real story of Minerva computerizing early, in the 1970s),
    `gallery-1.jpg` (an open illuminated book), `gallery-2.jpg` (a
    packed bookshelf).
  - Mood: **boutique** (spacious, restrained, Cormorant Garamond), fits
    a modern-minded, community-oriented general bookshop better
    than the more scholarly "editorial" mood used for Tombolini in this
    same batch, keeping the two bookshop demos visually distinct.
  - Hours: found only "open 7 days a week continuously" (roma2pass.it),
    no specific times; `config.js` reflects that directly rather than
    inventing hours.

## Outreach email (sent 2026-08-31)

No real personal visit to this shop was confirmed with Nikolai, so this
draft doesn't claim one.

> Gentile Libreria Minerva,
>
> mi chiamo Nikolai, progetto siti web, e vi scrivo perché mi sono
> imbattuto nella vostra storia cercando le librerie storiche di Roma.
> Più di cent'anni in Piazza Fiume sono già di per sé notevoli, ma mi ha
> colpito soprattutto sapere che foste tra le prime librerie in Italia
> ad informatizzare il magazzino, negli anni '70, prima ancora del
> codice a barre. Non è il tipo di dettaglio che ci si aspetta da una
> libreria di quartiere, ed è il genere di storia che merita di essere
> raccontata bene online.
>
> Ho preparato una bozza di sito partendo dal poco che sono riuscito a
> trovare di voi in giro. La trovate qui, senza alcun impegno:
> https://nikolaifissenko.github.io/web-design-/clients/libreria-minerva/
>
> Mi occupo anche di gestione dei social media: se in futuro vi
> interessasse anche far crescere quanto siete visibili online, potremmo
> parlarne con calma. Penso che una libreria con una storia così meriti
> di farsi conoscere da molte più persone.
>
> Se vi va di darle un'occhiata e farmi sapere cosa ne pensate, mi
> farebbe piacere. Altrimenti nessun problema.
>
> Un saluto,
> Nikolai
