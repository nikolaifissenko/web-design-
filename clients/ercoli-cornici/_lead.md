# ercoli-cornici

- **Found:** 2026-09-12 (independent web search, "bottega storica Roma
  corniciaio", not the historic-shops registry search this time)
- **Address:** Corso Vittorio Emanuele II, 205, 00186 Roma (between
  Piazza Navona and Piazza della Chiesa Nuova)
- **Phone:** 06 6880 2526
- **Email:** paolaercoli@me.com, found directly on their own site: a
  `mailto:` link in the header of every page, with a pre-filled subject
  and body for quote requests. Not a directory guess, their own site.
- **Current website:** ercolicornici.it. Confirmed dated directly:
  table-based HTML layout (6 `<table>` elements on the homepage alone),
  built on a "Vetrine.net" template CMS last touched 2011/2026-vintage
  footer string, no modern CSS framework. Functional (galleries and
  contact links work), but reads as clearly early-2000s for a business
  that supplies architects, art galleries, and embassies.
- **Sources:** independent web search -> the business's own site
  (ercolicornici.it and its /azienda and /galleria subpages), fetched
  directly for real history text and real photos.
- **Status:** outreach-sent (email sent 2026-09-12 to
  paolaercoli@me.com, Gmail message ID `1a09479c9775e24a`)
- **Response:** no reply yet
- **Demo URL:** https://nikolaifissenko.github.io/web-design-/clients/ercoli-cornici/
- **Sold:** no
- **Notes:**
  - **Everything on this demo is real, zero stock.** The business began
    in 1935 as a branch of the family's main Via Arenula location,
    itself active since the late 1800s. The frame catalog grew over
    time to more than 600 models spanning antique, baroque, liberty,
    deco, and contemporary styles. For 33 years the company has been
    entirely woman-led, under Paola Ercoli, working with artists,
    photographers, architects, interior designers, antique dealers, art
    galleries, embassies, and public institutions, recognized with a
    "Maestri dell'Artigianato" (Master Craftsmanship) award. Summarized
    honestly from the real "Azienda" page on their own site, not
    invented.
  - **Photos, all real, all from their own site.** `hero.jpg` and
    `gallery-4.jpg` are two genuine wide interior photos of the actual
    shop (vaulted ceiling, original patterned tile floor, walls covered
    in real frames and old photographs), pulled from their homepage.
    `about.jpg` is a real (not stock) photo of the "Maestri
    dell'Artigianato" award ceremony, showing Paola Ercoli receiving the
    recognition, with the on-screen award panel behind her independently
    confirming the same company history (family business since the
    1800s, 600+ frame models). `gallery-1.jpg` is the real shop window
    display on Corso Vittorio Emanuele II, full of genuine antiques and
    frames. `gallery-2.jpg` is another real interior workshop photo.
    `gallery-3.jpg` is a real wall of frame samples and mirrors for
    sale. `gallery-5.jpg` shows real shelves stacked with frame moulding
    samples.
  - **One real photo deliberately discarded**: the homepage also uses a
    sepia-toned historic photo (`home/01.png`) of an old shop storefront,
    but it is clearly labeled "Cappelleria" (a hat shop, "Cappelleria
    Pratesi"), not Ercoli Cornici at all, an unrelated business used as
    decorative filler. Discarded on principle rather than used as if it
    were this business's own history: exactly the photo-misattribution
    trap CLAUDE.md warns about (the Torrefazione Foroni incident and the
    piatti.menu cross-contamination cases).
  - **Logo: no clean real logo exists, redesigned rather than
    defaulted to initials.** The one real logo file found
    (`images/logo01.jpg`) is low-resolution and visibly cropped in the
    source file itself (it reads "RCOLI" instead of "ERCOLI", the "E" is
    cut off by the image's own edge), and the site's favicon is just an
    unlabeled fragment of the same gold frame shape with no legible
    text. This is a genuine "no usable logo exists" case, not "the real
    one was inconvenient to crop." Per `branding-extraction.md` and
    CLAUDE.md, designed a new clean mark instead of falling back to
    initials: a simple stylized double picture-frame icon (the literal
    subject of their trade), in the same gold sampled pixel-by-pixel
    from their real logo file (refined to `#b8912a` for text contrast
    from the raw brighter `#fadc28`), inside a ring of the same gold.
  - **Colors:** gold `#b8912a` sampled from the real logo. Dark walnut
    brown `#4a3728` as the secondary color, drawn from the actual wood
    tones visible throughout their real shop photos, not invented with
    no connection to the business.
  - Mood: **editorial** (asymmetric, magazine-style, framed image with a
    border accent, doubly fitting for an actual frame shop), matching
    the skill's own guidance: "heritage artisans with a strong founder
    story (tailors, bookbinders, restorers)." A frame-maker/gilder with
    a documented three-generation, 90-year history is a clean fit.
  - No prices published anywhere for individual frames (bespoke,
    made-to-measure work, not unusual), left blank in `config.js`.
  - Weekday hours confirmed directly on their site (10:00-13:00,
    16:30-19:30). Saturday/Sunday hours were inconsistent between the
    site's footer schedule and its structured data, left as "da
    confermare" rather than guessing.
  - Smoke-tested with Playwright: no console errors beyond the known
    sandbox restrictions (Google Fonts CSS request, Google Maps embed,
    both blocked network-side in this environment, not a real site bug).
    Gallery lightbox opens and navigates correctly across all 5 real
    photos. Mobile nav toggle present and functional.

## Outreach email (sent 2026-09-12)

No personal visit to this shop confirmed with Nikolai, so this draft
doesn't claim one. The concrete, verifiable hook is the dated
table-based site for a business with genuinely elegant, gallery-grade
craftsmanship to show. No price mentioned, no em dashes, plain
punctuation, follows the current `pitch_template.md` structure (link
right after the greeting), tone warm and respectful given the real
90-year, three-generation heritage.

> Buongiorno, sono Nikolai, web designer freelance qui a Roma.
>
> Le ho preparato gratuitamente una versione nuova del sito di Ercoli
> Cornici, con le vostre vere foto:
>
> https://nikolaifissenko.github.io/web-design-/clients/ercoli-cornici/
>
> L'ho fatto perché il vostro sito attuale è rimasto tecnicamente
> indietro di molti anni, e mi sembrava un peccato per una bottega con
> quasi novant'anni di storia e lavori così curati da mostrare:
> meritano una vetrina online che li faccia davvero risaltare.
>
> Nessun obbligo. Se il risultato le piace, mi farebbe davvero piacere
> parlarne. Resto a disposizione anche solo per un parere sincero, o mi
> può chiamare direttamente.
>
> Grazie mille per il suo tempo,
> Nikolai
> 349 101 6416
