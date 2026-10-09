# troncarelli

- **Found:** 2026-10-06 (independent web search, "bottega storica Roma
  famiglia cornici OR guanti OR ombrelli OR tessuti sito email
  contatti dal 19")
- **Address:** Via della Cuccagna 15, 00186 Roma (a due passi da
  Piazza Navona)
- **Phone:** 06 6879320, found directly on their own Contatti page.
- **Email:** info@troncarelli.it, found directly in the mailto tag of
  their own Contatti page, confirmed via curl (200). First-party, not
  a directory listing.
- **Facebook:** https://www.facebook.com/troncarelli.it (linked from
  their own site).
- **Current website:** troncarelli.it redirects (301) to
  cappellitroncarelli.it, a real WordPress/WooCommerce site. Their own
  "Chi Siamo" page has a real, verified broken widget: the Instagram
  feed shows literal "Errore: Nessun feed trovato" text, confirmed
  directly in the HTML, not just a subjective "looks old."
- **Sources:** independent web search -> the business's own site
  (cappellitroncarelli.it) -> independent press confirmation of the
  generational history, since the "Chi Siamo" page content needed a
  real browser-like fetch (curl alone returned only nav/footer on the
  first domain, full text came through on the redirect target).
- **Status:** outreach-sent (email sent 2026-10-06 to
  info@troncarelli.it, Gmail message ID `1a11011e18af7cb5`)
- **Response:** no reply yet. Follow-up sent 2026-10-09 (Gmail message
  ID `1a1203608b2fe25e`)
- **Demo URL:** https://nikolaifissenko.github.io/web-design-/clients/troncarelli/
- **Sold:** no
- **Notes:**
  - **History is real, confirmed directly in the business's own text,
    not invented.** From their own "Chi Siamo" page: "Cinque
    generazioni per una tradizione che supera il tempo... Attualmente
    gestita da Andrea Troncarelli, figlio di Fulvio Troncarelli il
    quale rilanciò il negozio dal dopoguerra ai giorni nostri." Five
    generations, and the exact father-son chain (Andrea is confirmed
    as Fulvio's son), both stated directly, not inferred. Founded 1857
    (169 years), confirmed in the page title and independently via a
    web search of press coverage. This is a stronger case than
    `pianoforti-papi`'s "suo nonno Luigi" overreach: here the exact
    generational claim actually is stated in the source text.
  - **Photos: one real historic photo of the family, two honest
    disclosed stock.** `hero.jpg` is a real photo of Fulvio and Andrea
    Troncarelli themselves in their shop, found on their own "Chi
    Siamo" page, cropped to exclude a third-party brand sign visible
    in the original photo's background (the same third-party-brand
    caution already applied to `massoni` and `stilo-fetti`, since
    Troncarelli is also an official dealer for Borsalino, Stetson,
    Lock & Co Hatters and others). Two candidate product photos on
    their own site (category tiles for "Uomo"/"Donna") were visually
    assessed as generic professional stock photography of models, not
    genuine shop photos, so not used. No press photos of the shop
    interior were found either. `about.jpg` and `gallery-1.jpg` are
    therefore honest, disclosed Unsplash stock of hat-shop interiors
    (photographers Fumiaki Hayashi and Ahnaf Piash, both standard free
    Unsplash License), screened for visible branding (none).
  - **Logo: real, pure wordmark with no separable icon, but has real
    color** (unlike several recent leads where the logo was
    monochrome). "Antica Cappelleria TRONCARELLI dal 1857" in brown/
    gold and black. Per CLAUDE.md, text initials "AT" are used, in the
    real colors sampled pixel-by-pixel directly from the logo file.
  - **Colors:** brown/gold `#7a4f0a` and black `#000000`, both
    sampled pixel-by-pixel from the real logo file.
  - Mood: **editorial** (169 years of continuous, documented history
    across five generations), matching the skill's own guidance.
  - No prices published in this demo (hats priced individually by
    brand/model), left blank in `config.js`.
  - Hours not confirmed in any source checked, left as "da
    confermare", worth a call before a sale.
  - Smoke-tested with Playwright: no real console errors (only the
    known sandbox Google Fonts/Maps certificate restriction, not a
    real bug). 8 of 10 `.reveal` elements reached `.reveal.in-view`
    after a full-page scroll (consistent with prior demos). Gallery
    lightbox opens on click and closes on Escape. Mobile nav toggle
    present and opens the nav (`nav open` class confirmed at 390x844
    viewport).

## Outreach email (sent 2026-10-06)

No personal visit to this shop confirmed with Nikolai, so this draft
doesn't claim one. The email says "una vostra foto storica vera"
(singular, specific) rather than the usual "le vostre vere foto",
since only one of the three images is genuinely theirs. The concrete,
verifiable hook is the real, documented 169-year, five-generation
history deserving a site that matches it, not one with a broken
Instagram widget. No price mentioned, no em dashes, plain punctuation,
tone warm and respectful given the genuine heritage.

> Buongiorno, sono Nikolai, web designer freelance qui a Roma.
>
> Le ho preparato gratuitamente una versione nuova del sito per Antica
> Cappelleria Troncarelli, con una vostra foto storica vera:
>
> https://nikolaifissenko.github.io/web-design-/clients/troncarelli/
>
> L'ho fatto perché 169 anni di storia e cinque generazioni della
> stessa famiglia meritano un sito moderno, non quello attuale.
>
> Nessun obbligo. Se il risultato le piace, mi farebbe davvero piacere
> parlarne. Resto a disposizione anche solo per un parere sincero, o mi
> può chiamare direttamente.
>
> Grazie mille per il suo tempo,
> Nikolai
> 349 101 6416
