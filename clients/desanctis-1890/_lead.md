# desanctis-1890

- **Found:** 2026-10-02 (independent web search, "negozio storico
  artigiano Roma famiglia dal 19 email contatti sito datato")
- **Address:** Via della Scrofa 90, 00186 Roma
- **Phone:** 06 6880 6810, found directly in the tel tag and footer
  text of their own Contatti page.
- **Email:** info@desanctis1890.com, found directly in the mailto tag
  of their own Contatti page, confirmed via curl (200). First-party,
  not a directory listing. (An earlier search result surfaced an
  outdated "Piazza Navona 84" address, not used: the real address was
  confirmed directly on their own current Contatti page as Via della
  Scrofa 90.)
- **Instagram/Facebook:** checked directly in the homepage and
  Contatti page HTML; the social icons shown (Facebook, Twitter,
  YouTube, Instagram) have no actual links behind them, consistent
  with the unfinished state of the rest of the site. Email is a real,
  working first-party channel, so this lead still clears the "real
  contact channel" bar without needing IG/FB.
- **Current website:** desanctis1890.com. Confirmed dal vivo via curl:
  a modern WordPress/WooCommerce/Elementor stack, but concretely
  unfinished, not just old-looking. Found directly in the live HTML:
  literal "Lorem ipsum dolor sit amet, consectetur adipiscing elit..."
  placeholder text still live in a real FAQ section, and a fake
  "Flat 50% OFF, Hurry up before the stock ends" dummy promo banner.
  Different case from `emiliozzi` (checked and dropped 2026-10-01):
  that one was genuinely well-maintained; this one runs a modern
  framework but was never actually finished.
- **Sources:** independent web search -> the business's own site
  (desanctis1890.com), fetched directly for the real email, phone,
  history text, logo, and real product photos from their own catalog.
- **Status:** outreach-sent (email sent 2026-10-02 to
  info@desanctis1890.com, Gmail message ID `1a0fcf5c46e3af1d`)
- **Response:** no reply yet
- **Demo URL:** https://nikolaifissenko.github.io/web-design-/clients/desanctis-1890/
- **Sold:** no
- **Notes:**
  - **History is real, confirmed directly in the business's own text,
    not invented.** From their own "Chi Siamo" page: "Lo storico
    negozio della famiglia DE SANCTIS. Fondato nel 1890 ed immerso nel
    cuore di Roma, dopo più di un secolo continua a proporre una vasta
    selezione delle migliori ceramiche artigianali italiane prodotte e
    dipinte completamente a mano... Negli arredi originali dell'epoca."
    136 years, same family, stated directly by the business itself.
  - **Photos: all real, zero stock, from their own product catalog.**
    `hero.jpg` is a real "Ricco Deruta" plate, the classic cobalt-blue
    and gold hand-painted pattern. `about.jpg` is a real Caltagirone
    ceramic head ("testa di moro" style), a characteristic piece of
    their craft. `gallery-1.jpg` is a real hand-painted decorative
    "Pizza" plate. All downloaded directly from their own
    wp-content/uploads catalog, none carry any third-party branding.
  - **Logo: real, but a pure wordmark with no separable icon, and
    monochrome.** The real logo is "CERAMICHE ITALIANE / De Sanctis
    dal 1890" in plain white text, no standalone icon (same category
    as `comandini`, `eufemi-stampe-antiche`, `pianoforti-papi`,
    `romana-neon`). Pixel-sampling the actual logo file confirmed it
    has no color of its own (pure white on transparent). Per CLAUDE.md,
    text initials "DS" are used. The accent colors are not from the
    logo (which has none), but sampled pixel-by-pixel from a real
    product photo instead (the "Ricco Deruta" plate used as
    `hero.jpg`), the same honest approach already used for
    `comandini`'s gold accent: a real color from their real work, not
    an invented one.
  - **Colors:** cobalt blue `#28367d` and gold/ochre `#c99444`, both
    sampled pixel-by-pixel from the real "Ricco Deruta" plate photo.
  - Mood: **editorial** (136 years of continuous, documented family
    history), matching the skill's own guidance.
  - No prices published in this demo (their real site does show prices
    per product, but individual piece pricing varies too much to list
    generically), left blank in `config.js`.
  - Hours not confirmed in any source checked, left as "da confermare",
    worth a call before a sale.
  - Smoke-tested with Playwright: no real console errors (only the
    known sandbox Google Fonts/Maps certificate restriction, not a
    real bug). 8 of 10 `.reveal` elements reached `.reveal.in-view`
    after a full-page scroll (consistent with prior demos). Gallery
    lightbox opens on click and closes on Escape. Mobile nav toggle
    present and opens the nav (`nav open` class confirmed at 390x844
    viewport).

## Outreach email (sent 2026-10-02)

No personal visit to this shop confirmed with Nikolai, so this draft
doesn't claim one. Since the photos really are the business's own
(from their own product catalog), the email does say "le vostre vere
foto." The concrete, verifiable hook is the real, documented 136-year
family history deserving a site that matches the quality of the work
itself, not an unfinished one with placeholder text still showing. No
price mentioned, no em dashes, plain punctuation, tone warm and
respectful given the genuine heritage.

> Buongiorno, sono Nikolai, web designer freelance qui a Roma.
>
> Le ho preparato gratuitamente una versione nuova del sito per De
> Sanctis 1890, con le vostre vere foto:
>
> https://nikolaifissenko.github.io/web-design-/clients/desanctis-1890/
>
> L'ho fatto perché 136 anni di storia della stessa famiglia e
> ceramiche così belle meritano un sito all'altezza, non quello
> attuale.
>
> Nessun obbligo. Se il risultato le piace, mi farebbe davvero piacere
> parlarne. Resto a disposizione anche solo per un parere sincero, o mi
> può chiamare direttamente.
>
> Grazie mille per il suo tempo,
> Nikolai
> 349 101 6416
