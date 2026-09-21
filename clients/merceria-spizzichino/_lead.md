# merceria-spizzichino

- **Found:** 2026-09-16 (web search for Rome historic haberdashery
  shops)
- **Address:** Via Alessandria, 82, 00198 Roma
- **Phone:** 06 44240621
- **Email:** marspiz@tiscali.it, confirmed consistently across multiple
  independent directory sources tied to this exact business's name,
  address and phone, not a single unverified guess (same standard used
  for other registry-sourced emails on this repo).
- **Social:** Checked directly before building, per the standing rule
  (not just "no website"): no Instagram or Facebook account found
  anywhere for this business despite a real search.
- **Current website:** none exists. Confirmed by search: only
  third-party directory listings (PagineGialle, Virgilio, Yelp, etc.),
  no owned domain anywhere.
- **Sources:** web search -> independent press interview (larotta.it,
  "Roma, viaggio nelle mercerie storiche: a tu per tu con Marcello
  Spizzichino") for history -> multiple independent directories,
  cross-checked, for the confirmed email.
- **Status:** outreach-sent (email sent 2026-09-16 to
  marspiz@tiscali.it, Gmail message ID `1a0aa00feb42554b`)
- **Response:** no reply yet. Follow-up sent 2026-09-21 (Gmail message ID `1a0c2cd7fe8ced2b`)
- **Demo URL:** https://nikolaifissenko.github.io/web-design-/clients/merceria-spizzichino/
- **Sold:** no
- **Notes:**
  - A family haberdashery shop that has operated from the same
    location on Via Alessandria since 1 October 1923, never changing
    address or trade. Now run by Marcello Spizzichino, described in
    independent press as the last member of this historic Roman family
    still in the haberdashery trade (the family originates from
    Bolsena). Summarized honestly from an independent press interview,
    not invented.
  - **No real photos exist anywhere checked.** No website to pull from
    (none exists). The one dedicated press feature (larotta.it)
    returned HTTP 503 on every attempt this session (tried twice).
    Instagram and Facebook were searched directly and confirmed to not
    exist for this business, so there was nothing to (unsuccessfully)
    try to fetch there either. Per the standing rule, this is the
    legitimate case for stock: every real source was actually checked,
    not skipped. `hero.jpg`, `about.jpg`, `gallery-1.jpg`, and
    `gallery-2.jpg` are all honest Unsplash stock (colorful thread
    spools, a sewing machine needle, wooden drawers, and rolled floral
    fabric), chosen to be clearly on-theme for a haberdashery, with no
    third-party branding or insignia visible in any frame. One early
    candidate stock photo (a pile of pinback buttons with gender-symbol
    designs) was caught and discarded before use: it matched the search
    term "buttons" but was not remotely a sewing button, the exact kind
    of mismatch worth double-checking for, not just trusting a search
    snippet's title.
  - **Logo: `logoText` used, no `logoImage`.** This is the legitimate
    case for that fallback per the standing rule: no website, no found
    signage photo, nothing real anywhere to adapt into an icon, unlike
    every other lead this round.
  - **Colors:** navy `#052443` and red `#b30008`, chosen to coordinate
    with the selected stock photography, explicitly **not** claimed as
    real brand colors anywhere (documented plainly in `config.js`
    itself), since no real branding is documented for this business
    anywhere.
  - Mood: **vintage**, a reasonable fit for a business genuinely
    unchanged since 1923, though with less certainty than other leads
    since no real photo material exists to confirm the shop's actual
    current look.
  - No prices published anywhere, left blank in `config.js`.
  - **Hours: not confirmed anywhere checked**, left the schedule empty
    (the "Orari" section still shows since the Google Maps embed is
    set).
  - Smoke-tested with Playwright: no real console errors (only the
    known sandbox Google Fonts cert error). All 11 `.reveal` elements
    correctly gain `.in-view` on scroll. Gallery lightbox opens on
    click.

## Outreach email (sent 2026-09-16)

No personal visit to this shop confirmed with Nikolai, so this draft
doesn't claim one. The concrete, verifiable hook: no website exists at
all for a shop that has been in the same family, at the same address,
for over a century, paired with genuine respect for that rare
continuity. No price mentioned, no em dashes, plain punctuation. Given
the demo uses stock photography (documented above), the email doesn't
claim "your real photos", unlike the other leads this round; it simply
doesn't mention photo sourcing at all, which is honest by omission
rather than a false claim.

> Buongiorno, sono Nikolai, web designer freelance qui a Roma.
>
> Le ho preparato gratuitamente una versione nuova del sito di
> Merceria Spizzichino:
>
> https://nikolaifissenko.github.io/web-design-/clients/merceria-spizzichino/
>
> L'ho fatto perché non avete un sito online, e per una merceria nello
> stesso locale dal 1923, sempre nella stessa famiglia, mi sembrava un
> peccato non avere almeno una vetrina che lo raccontasse.
>
> Nessun obbligo. Se il risultato le piace, mi farebbe davvero piacere
> parlarne. Resto a disposizione anche solo per un parere sincero, o mi
> può chiamare direttamente.
>
> Grazie mille per il suo tempo,
> Nikolai
> 349 101 6416
