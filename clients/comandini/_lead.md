# comandini

- **Found:** 2026-09-30 (independent web search, "articoli religiosi
  storico Roma bottega famiglia sito email contatti dal 19")
- **Address:** Borgo Pio 151, 00193 Roma (a pochi passi dalla basilica
  di San Pietro)
- **Phone:** 06 6875079, found directly in the tel tag on their own
  homepage.
- **Email:** info@comandini.it, found directly in the mailto tag on
  their own homepage, confirmed via curl (200). First-party, not a
  directory listing.
- **Instagram/Facebook:** not found. Checked the homepage HTML directly
  for instagram.com/facebook.com links (per CLAUDE.md's rule to
  actually search, not just assume phone/email is enough); none
  present. Email is a real, working first-party channel, so this lead
  still clears the "real contact channel" bar without needing IG/FB.
- **Current website:** comandini.it. Confirmed dal vivo via curl: a
  real, functioning own-domain site, but with a fairly generic/dated
  design for a business with 60+ years of history steps from the
  Vatican.
- **Sources:** independent web search -> the business's own site
  (comandini.it), fetched directly for the real email, phone, and
  history text.
- **Status:** outreach-sent (email sent 2026-09-30 to info@comandini.it,
  Gmail message ID `1a0f1365e53ad8c1`)
- **Response:** no reply yet. Follow-up sent 2026-10-05 (Gmail message ID `1a10ae50a99c63c8`)
- **Demo URL:** https://nikolaifissenko.github.io/web-design-/clients/comandini/
- **Sold:** no
- **Two other candidate leads tried and dropped today:**
  - **Salustri** (religious articles, name found in earlier search):
    the only contact path found was a JavaScript-obfuscated email
    address on their site that neither curl nor WebFetch could resolve
    to a real address. Per today's stricter standard (independently
    confirmable first-party contact, not guessed), dropped rather than
    built on a guess.
  - **Turella Adriana**: site found down/unreachable on repeated
    fetches. Dropped, no way to confirm a real first-party contact
    channel.
- **Notes:**
  - **History is real, summarized honestly, not invented.** From their
    own site: "Dal 1962 la ditta Comandini produce e vende oggetti
    religiosi, abbigliamento sacro per sacerdoti e souvenir religiosi."
    Stefano Comandini, the current director, is quoted in press
    coverage ("Da oltre 60 anni siamo specializzati in articoli
    religiosi"). **No founder name is claimed anywhere in this demo or
    email.** An initial hypothesis of a founder named "Romano Comandini"
    came up during research but could not be confirmed in any of the
    business's own text actually fetched (checked explicitly via grep
    over the cached homepage/Borgo Pio page HTML, no match), so it was
    dropped rather than risk repeating the kind of unverified
    generational claim already flagged as an overreach in
    `pianoforti-papi/_lead.md` ("suo nonno Luigi").
  - **Photos: honest, disclosed stock, not their own confirmed photos.**
    Several product photos exist on the business's own CDN
    (cloudfront-hosted), but after visual inspection they read as likely
    generic professional stock photography (too polished/generic-subject
    for a small shop's own casual photos) rather than confirmably their
    own. Rather than present unverified images as real, per the same
    honest-stock pattern already used for `bottega-della-sedia`, this
    demo uses clearly disclosed Unsplash stock instead: `hero.jpg` is
    rosaries with Miraculous Medal medallions (photo by Kevin Varela),
    `about.jpg` is a wooden rosary on a dark surface (photo by S Turby),
    `gallery-1.jpg` is a gilded monstrance (photo by Christian Harb).
    All three are standard free Unsplash License, all screened for
    third-party brands/logos (none) and for religious-tradition mismatch
    (one Orthodox-church candle candidate was found and explicitly
    rejected since Comandini is a Roman Catholic shop and mixing
    traditions would misrepresent the business).
  - **Logo: real logo exists, but has no cleanly separable icon, and is
    monochrome.** The real logo is the cursive wordmark "Comandini S."
    plus the tagline "articoli religiosi dal 1962", no standalone icon
    (same category as `eufemi-stampe-antiche`, `pianoforti-papi`, and
    `romana-neon`). Unlike those, pixel-sampling the actual logo file
    turned up pure black/white/grayscale values only (confirmed:
    (0,0,0), (246,246,246), (255,255,255)), no color information to
    sample at all. Per CLAUDE.md, text initials "CS" are used. Black is
    taken directly from the real logo; gold is used as a complementary
    accent (inspired by the gilded liturgical objects the shop actually
    sells, visible in the real gallery photo) since the logo itself
    simply has no color to sample, not an invented "logo color."
  - **Colors:** black `#0a0a0a` (from the real logo) and gold `#a8823a`
    (accent, not sampled from the monochrome logo, chosen to match the
    business's actual liturgical gold merchandise).
  - Mood: **editorial** (60+ years of continuous history in a
    symbolically significant location, steps from the Vatican),
    matching the skill's own guidance.
  - No prices published anywhere (religious articles priced
    individually), left blank in `config.js`.
  - Hours not confirmed in any source checked, left as "da confermare",
    worth a phone call before a sale.
  - Smoke-tested with Playwright: no real console errors (only the
    known sandbox Google Fonts/Maps certificate restriction, not a real
    bug). 8 of 10 `.reveal` elements reached `.reveal.in-view` after a
    full-page scroll (consistent with prior demos). Gallery lightbox
    opens on click and closes on Escape. Mobile nav toggle present and
    opens the nav (`nav open` class confirmed at 390x844 viewport).

## Outreach email (sent 2026-09-30)

No personal visit to this shop confirmed with Nikolai, so this draft
doesn't claim one. Since the photos in this demo are honest stock, not
the business's own real photos, the email does not claim "le vostre
vere foto" the way other leads' emails do when the photos really are
theirs. The concrete, verifiable hook is the site's own generic/dated
design for a business with 60+ years of real history in a symbolically
significant location. No price mentioned, no em dashes, plain
punctuation, tone warm and respectful given the genuine heritage.

> Buongiorno, sono Nikolai, web designer freelance qui a Roma.
>
> Le ho preparato gratuitamente una versione nuova del sito per
> Comandini:
>
> https://nikolaifissenko.github.io/web-design-/clients/comandini/
>
> L'ho fatto perché più di 60 anni di storia a Borgo Pio, a due passi da
> San Pietro, meritano un sito moderno, non quello attuale.
>
> Nessun obbligo. Se il risultato le piace, mi farebbe davvero piacere
> parlarne. Resto a disposizione anche solo per un parere sincero, o mi
> può chiamare direttamente.
>
> Grazie mille per il suo tempo,
> Nikolai
> 349 101 6416
