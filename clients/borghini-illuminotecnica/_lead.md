# borghini-illuminotecnica

- **Found:** 2026-10-09, from `leads_backlog.md` (Turismo Roma
  historic-shops directory)
- **Address:** Via Belsiana 87-89, 00187 Roma (zona Piazza di Spagna)
- **Phone:** 06 6790629, found directly on their own Contattaci page.
  Whatsapp: 3803667565, also found directly on the same page.
- **Email:** borghiniilluminotecnica@gmail.com, found directly in their
  own site, twice: in the homepage `<title>` tag and in the plain text
  of their Contattaci page ("E-mail: borghiniilluminotecnica@gmail.com").
  First-party, not a directory listing. (Turismo Roma's directory lists
  a different, older address, borghinisrl@tiscali.it, not used here.)
- **Current website:** borghinisrl.it, confirmed dal vivo via curl: a
  real CubeCart e-commerce store. The homepage's own `<title>` tag has
  been repurposed into an improvised announcement ("Per ordinare i
  nostri prodotti in offerta, mandarci una richiesta alla nostra
  email...") instead of a real page title, the header logo image has a
  broken `src="/"`, and the basket permanently shows "Il tuo Carello è
  vuoto" (a real typo, "Carello" instead of "Carrello"), all verified
  directly in the HTML, not just a subjective "looks old."
- **Sources:** `leads_backlog.md` -> the business's own site
  (borghinisrl.it), fetched directly for the real email, phone, history
  text, logo, and real product/storefront photos.
- **Status:** outreach-sent (email sent 2026-10-09 to
  borghiniilluminotecnica@gmail.com)
- **Response:** no reply yet
- **Demo URL:** https://nikolaifissenko.github.io/web-design-/clients/borghini-illuminotecnica/
- **Sold:** no
- **Notes:**
  - **History is real, confirmed directly in the business's own text,
    not invented.** From their own "Chi Siamo" page: "Borghini, presente
    dal 1927, è distributore privilegiato di marchi leader di
    conduttori di gomma e PVC, materiale elettrico e civile,
    illuminazione, condizionamento e sistemi di sicurezza." 99 years of
    continuous trade, stated directly, not inferred. Also recognized as
    a bottega storica by Turismo Roma (D.D. n. 1274 del 31/10/2001).
  - **Photos: all real, zero stock, no third-party brand shown.**
    `hero.jpg` is a real photo of the shop's own storefront on Via
    Belsiana (the "BORGHINI ILLUMINOTECNICA" sign visible above the
    door), found on their own site (`images/source/bilbelsiana.jpg`),
    EXIF-confirmed: Samsung SM-G925F, 2 October 2017. `about.jpg` is a
    cropped real photo of a lit floor lamp and spotlight fixtures in
    their own showroom (`sitlamp1.jpg`, cropped to drop the excess pole/
    floor and keep the lit lampshade), `gallery-1.jpg` and
    `gallery-2.jpg` are two more real showroom photos
    (`sitlamp3.jpg`, `sitllamp4.jpg`), all EXIF-confirmed: Sony E5603,
    same day. A fourth image found on their site (`BEGH.jpg`) shows
    light bulbs with the "Beghelli" brand name clearly printed on each
    one and was **not used**, the same third-party-brand screening
    already applied to massoni/stilo-fetti/troncarelli.
  - **Logo: real, genuine separable icon, cropped from a larger
    graphic.** Their real logo (`LOGOBANDBASSE.jpg`) is three triangles
    (white, blue, white) above the wordmark "BORGHINI ILLUMINOTECNICA
    SRL" on a charcoal background. The wordmark is too long and thin
    for the circular 40x40 avatar slot, so only the triangle icon was
    cropped out (excluding the text) and centered on a square canvas in
    the same charcoal background color as the original, the same
    pattern as other real-icon logos that needed isolating from a
    bigger graphic (e.g. `trimani`).
  - **Colors:** blue `#4966e6` and charcoal `#414141`, both sampled
    pixel-by-pixel directly from the real logo file.
  - Mood: **vintage** (99 years of continuous trade from a genuinely
    old shop on a historic central street, not an artisan with a
    narrated founder story and not a modern business, so "vintage" fits
    better than "editorial" or "bold" here), matching the skill's own
    guidance. `headingFont` set to Yeseva One per the other vintage-mood
    clients in this repo.
  - No prices published anywhere (electrical/lighting products priced
    individually, catalog has thousands of SKUs), left blank in
    `config.js`.
  - Hours not found in any source checked (their own site doesn't
    publish them, Turismo Roma's listing just says to call), left as
    "da confermare", worth a call before a sale.
  - No Instagram or Facebook found for this business specifically (a
    web search only surfaced a sister gallery, Borghini Arte
    Contemporanea, a different entity at a different address), so
    socials are left blank except the real website link.
  - Smoke-tested with Playwright: no real console errors (only the
    known sandbox Google Fonts/Maps certificate restriction, not a
    real bug). Scroll-reveal fired on scroll. Real logo image confirmed
    rendering (not falling back to text initials). Gallery lightbox
    opens on click and closes on Escape. Mobile nav toggle present and
    opens the nav (`nav open` class confirmed at 390x844 viewport).

## Outreach email (sent 2026-10-09)

No personal visit to this shop confirmed with Nikolai, so this draft
doesn't claim one. Since the photos are the business's own real
storefront and showroom, the email says "le vostre vere foto." The
concrete, verifiable hook is the real, documented 99-year history on a
historic central street deserving a site that matches it, not an old
e-commerce page with a broken cart. No price mentioned, no em dashes,
plain punctuation, tone warm and respectful given the genuine heritage.

> Buongiorno, sono Nikolai, web designer freelance qui a Roma.
>
> Le ho preparato gratuitamente una versione nuova del sito per Borghini
> Illuminotecnica, con le vostre vere foto:
>
> https://nikolaifissenko.github.io/web-design-/clients/borghini-illuminotecnica/
>
> L'ho fatto perché quasi 100 anni di storia in Via Belsiana meritano un
> sito all'altezza, non quello attuale.
>
> Nessun obbligo. Se il risultato le piace, mi farebbe davvero piacere
> parlarne. Resto a disposizione anche solo per un parere sincero, o mi
> può chiamare direttamente.
>
> Grazie mille per il suo tempo,
> Nikolai
> 349 101 6416
