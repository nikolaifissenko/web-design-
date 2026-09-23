# fratelli-paiano

- **Found:** 2026-09-23 (independent web search, "passamaneria storica
  Roma bottega famiglia sito email contatti")
- **Address:** Via Montebuono 18/A, 00199 Roma (Trieste Salario)
- **Phone:** 06 8621 2646
- **Email:** fratellipaiano@gmail.com, found directly on their own site's
  Contatti page (chiusurelampofratellipaiano.it/contatti), confirmed via
  curl, not just a third-party directory listing.
- **Facebook:** https://www.facebook.com/Chiusure-Lampo-Fratelli-Paiano-1506808439550944/
  (found via independent search; per CLAUDE.md, Facebook is a
  client-rendered app not reachable by automated fetch, so activity not
  independently verified). No Instagram found in any source checked.
- **Current website:** chiusurelampofratellipaiano.it. Confirmed dal
  vivo via curl: a Duda/Italiaonline site-builder site (SiteType decodes
  to "DUDAONE"), published July 2024. Every photo on the site is generic
  Unsplash stock, the image paths literally contain "unsplash" and
  filenames like "photo-1584061634739-..." — zero real photos of the
  actual shop, product, or owner anywhere on their own site.
- **Sources:** independent web search -> the business's own site
  (chiusurelampofratellipaiano.it), fetched directly for the real email
  and to confirm the site's own use of stock photography -> press/blog
  search for real shop photos (none found, category not well covered by
  food/press blogs or review aggregators like Tripadvisor/Yelp, which
  are restaurant-oriented) -> Facebook confirmed to exist but unreachable
  per the standing technical block.
- **Status:** outreach-sent (email sent 2026-09-23 to
  fratellipaiano@gmail.com, Gmail message ID `1a0cd1f3bf2af912`)
- **Response:** no reply yet
- **Demo URL:** https://nikolaifissenko.github.io/web-design-/clients/fratelli-paiano/
- **Sold:** no
- **Notes:**
  - **History is real, summarized honestly from independent sources, not
    invented.** Since 1951 the Paiano family has run this shop in the
    Trieste Salario neighborhood. Owner Antonio Paiano is known locally
    as "il re delle cerniere di Roma" (Rome's king of zippers): in over
    fifty years he has made kilometers of zippers of every type and
    size, for camping tents, gazebos, diving wetsuits, and vintage car
    convertible tops. The shop is officially recognized as a historic
    bottega by the Comune di Roma.
  - **Photos: honest, well-documented stock, not real photos of this
    specific shop.** Real photos were genuinely exhausted first, per
    CLAUDE.md: the business's own site (checked directly, itself only
    stock), press/food blogs (checked, this category isn't covered by
    that kind of source), review aggregators like Tripadvisor/Yelp
    (checked, not applicable to a haberdashery), and Instagram/Facebook
    (Facebook exists but is the standing, documented unreachable-by-
    fetch case; no Instagram found at all). Given that, stock was used,
    but chosen to represent their actual trade honestly rather than
    generically: `hero.jpg` is a vintage wooden haberdashery cabinet
    with ribbon spools (Unsplash, "assorted threads on rack" by Annie
    Spratt, photo nWAlCB1tyvc), cropped to remove another shop's own
    tag ("The Squash Court") visible in the original, since that tag
    belongs to a real different business and would misattribute their
    branding. `about.jpg` is scissors, thread spools, a tailor's tape
    measure and a zipper (Unsplash, "threads with spools beside
    scissors" by Darling Arias, photo tX62O5F3AfU). `gallery-1.jpg` is a
    row of colorful zippers (Unsplash, "colorful zippers arranged in a
    row" by Michelle Goggins, photo jjX3SAA74uk), chosen specifically
    because zippers are this shop's actual specialty. `gallery-2.jpg` is
    a pile of colorful buttons (Unsplash, "a collection of colorful
    buttons" by Olga Safronova, photo JExGIWryHUs). All confirmed free
    under the standard Unsplash License, not Unsplash+.
  - **Logo: no real logo exists anywhere.** Checked their own site (none),
    directory listings (none). Text initials "FP" used, per CLAUDE.md,
    since there's no real mark to adapt.
  - **Colors:** red `#a3352a` and wood/brass `#8c6a3d`, chosen to match
    the real materials of the trade (zippers/ribbons, and the wooden
    haberdashery drawers in the hero photo), explicitly not sampled from
    any real logo or branding since none exists.
  - Mood: **vintage** (1950s-60s Italian haberdashery), a precise fit for
    a bottega dal 1951, per the professional-web-design skill's guidance.
  - No prices published anywhere for individual services (custom zipper
    work, priced per job), left blank in `config.js`.
  - Hours not confirmed in any source checked, left as "da confermare,"
    worth a phone call to verify before a sale.
  - Smoke-tested with Playwright: no console errors beyond the known
    sandbox restriction (Google Fonts/Maps blocked network-side, not a
    real bug). 11 elements reached `.reveal.in-view` on scroll. Gallery
    lightbox opens on click. Mobile nav toggle present and opens the nav
    (`nav open` class confirmed at 390x844 viewport).

## Outreach email (sent 2026-09-23)

No personal visit to this shop confirmed with Nikolai, so this draft
doesn't claim one. The concrete, verifiable hook is the site's own
100% stock photography for a shop with a genuine 70+ year, officially
recognized history and a real specialty (zippers) that's rare in Rome
now. No price mentioned, no em dashes, plain punctuation, tone warm and
respectful given the real history, lighter than a big institution pitch
since this is a small neighborhood shop, not a luxury heritage brand.

> Buongiorno, sono Nikolai, web designer freelance qui a Roma.
>
> Le ho preparato gratuitamente una versione nuova del sito per Fratelli
> Paiano:
>
> https://nikolaifissenko.github.io/web-design-/clients/fratelli-paiano/
>
> L'ho fatto perché il vostro sito attuale usa solo foto generiche, e mi
> sembrava un peccato per una bottega che il Comune di Roma riconosce
> come storica, con più di settant'anni di lavoro e una vera
> specializzazione nelle cerniere che pochi hanno più a Roma.
>
> Nessun obbligo. Se il risultato le piace, mi farebbe piacere parlarne.
> Resto a disposizione anche solo per un parere sincero, o mi può
> chiamare direttamente.
>
> Grazie mille per il suo tempo,
> Nikolai
> 349 101 6416
