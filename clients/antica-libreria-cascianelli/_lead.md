# antica-libreria-cascianelli

- **Found:** 2026-09-16 (web search for Rome antiquarian bookshops,
  cross-checked against independent press coverage since the shop's
  own site was unreachable)
- **Address:** Largo Febo, 14/16, 00186 Roma (behind Piazza Navona)
- **Phone:** Not published anywhere for the shop itself. Three
  individual staff mobile numbers are listed on directory pages
  (Valentina, Alfio, Alessandro), but none is clearly "the" shop line,
  so none was used rather than guess. Left blank in `config.js`.
- **Email:** libreriacascianelli@gmail.com, confirmed consistently
  across multiple independent directory sources tied to the shop's own
  address and staff names, not a single unverified guess.
- **Social:** Instagram instagram.com/libreriacascianelli and Facebook
  facebook.com/AnticaLibreriaCascianelli, both confirmed before
  building, per the standing real-contact-channel rule.
- **Current website:** anticalibreriacascianelli.com. Confirmed
  genuinely unreachable by automated fetch: every attempt this session
  (plain `curl`, `WebFetch`, a full headless Chromium via Playwright,
  and the Wayback Machine, itself blocked by this sandbox's own egress
  policy) hit an anti-bot challenge page (`robot-suspicion.svg`, HTTP
  202 with no real content) or couldn't be reached at all. **Important:
  this only proves automated tools are blocked, not that real human
  visitors are** (bot walls like this typically target scrapers, not
  browsers). Since there's no way to actually confirm what a real
  visitor sees, the outreach email below does not claim their current
  site is bad or hard to use, that would be an unverified claim. It
  pitches purely on the positive: the free demo itself, with their real
  photos and story, no criticism of what they have now.
- **Sources:** independent web search -> press coverage (roma.com,
  rocaille.it) describing and photographing the same shop, cross-checked
  against Turismo Roma and directory listings for the address/contacts.
- **Status:** outreach-sent (email sent 2026-09-16 to
  libreriacascianelli@gmail.com, Gmail message ID `1a0a9f4386a4d795`)
- **Response:** no reply yet
- **Demo URL:** https://nikolaifissenko.github.io/web-design-/clients/antica-libreria-cascianelli/
- **Sold:** no
- **Notes:**
  - One of Rome's most celebrated antiquarian bookshops, a genuine
    wunderkammer. The space was originally an ecclesiastical tailoring
    shop from 1835, converted into a bookshop by the Cascianelli family
    in 1909, and has kept its early-19th-century fittings largely
    unchanged since: sliding glass display cases on their original
    rails, boiserie, and a hidden door leading to a secret room. Now
    curated by Valentina La Rocca (a former theatre set designer), with
    monthly themed window displays. Real, notable visitors mentioned
    across independent press: Aristotle Onassis, Greta Garbo, Pope John
    XXIII, Leonardo Sciascia, Keanu Reeves; Alessandro Michele shot
    Gucci's Pre-Fall 2017 campaign here. Summarized honestly from
    independent press (roma.com, rocaille.it), not invented.
  - **Photos: all real, zero stock.** Since the shop's own site was
    unreachable (anti-bot block, see above), photos were sourced from
    an independent press feature (roma.com, "L'Antica Libreria
    Cascianelli, un vero paradiso per i collezionisti," 2022) that
    photographs this exact shop, not a different one, cross-verified
    against the same address and description found via Turismo Roma
    and other press. `hero.jpg` is the real shopfront window with
    "Antica Libreria" hand-painted on the glass. `about.jpg` is the
    real arched wooden bookshelf interior. `gallery-1.jpg` shows a real
    19th-century portrait on an easel amid the shelves. `gallery-2.jpg`
    shows the real cluttered antique desk covered in curiosities,
    frames and books. `gallery-3.jpg` shows a real "wunderkammer"
    display case of naturalia and curios. All 5 downloaded images were
    checked for watermarks (none) before use; all resized/compressed
    for web (originals were 5-6MB each).
  - **Logo: no real standalone logo file could be checked** (the
    official site's anti-bot block prevented inspecting its assets for
    a logo/favicon). Rather than default to text initials, an
    open-book icon was designed for the template's circular slot, in
    the spirit of the real hand-painted glass signage visible in
    `hero.jpg`, using colors sampled directly from the real photos: dark
    wood brown from the interior shelving, antique gold matching the
    painted glass lettering.
  - **Colors:** primary `#25160c` (sampled dark wood), accent `#b08c4a`
    (antique gold, sampled tone family from the real hero photo), not
    invented.
  - Mood: **editorial** (asymmetric, magazine-style, framed images with
    a border accent), a strong fit per the skill's own guidance for a
    heritage business with a genuine founder/curator story.
  - No prices published anywhere (antiquarian/collector items, priced
    per piece), left blank in `config.js`.
  - **Hours: not confirmed anywhere checked**, left the schedule empty
    rather than guessed.
  - Smoke-tested with Playwright: no real console errors (only the
    known sandbox Google Fonts cert error). All 12 `.reveal` elements
    correctly gain `.in-view` on scroll. Gallery lightbox opens on
    click.

## Outreach email (sent 2026-09-16)

No personal visit to this shop confirmed with Nikolai, so this draft
doesn't claim one. Deliberately does not assert their current site is
bad, dated, or broken: the anti-bot block only proves automated tools
can't see it, not that a real customer can't, so criticizing it would
be an unverified claim. Instead the pitch leans entirely on the
positive: a free demo built around their own real story and photos, no
obligation. No price mentioned, no em dashes, plain punctuation.

> Buongiorno, sono Nikolai, web designer freelance qui a Roma.
>
> Le ho preparato gratuitamente una versione nuova del sito della
> Libreria Cascianelli, con le vostre vere foto:
>
> https://nikolaifissenko.github.io/web-design-/clients/antica-libreria-cascianelli/
>
> L'ho fatto perché siete una delle librerie più affascinanti di Roma,
> con una storia che parte dal 1835 e una collezione che merita davvero
> una vetrina online curata quanto il negozio stesso.
>
> Nessun obbligo. Se il risultato le piace, mi farebbe davvero piacere
> parlarne. Resto a disposizione anche solo per un parere sincero, o mi
> può chiamare direttamente.
>
> Grazie mille per il suo tempo,
> Nikolai
> 349 101 6416
