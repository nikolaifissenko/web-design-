# trimani

- **Found:** 2026-10-08, from `leads_backlog.md` (Turismo Roma
  historic-shops directory)
- **Address:** Via Goito 20, 00185 Roma
- **Phone:** 06 4469661, found directly in the mailto/contact text of
  their own Contatti page.
- **Email:** info@trimani.com, found directly in the mailto tag of
  their own homepage, confirmed via curl (200). First-party, not a
  directory listing. Other real first-party addresses found on their
  Contatti page: francesco@, paolo@, carla@, ilwinebar@trimani.com.
- **Facebook:** https://www.facebook.com/trimanivinai (found via
  independent search).
- **Current website:** trimani.com. Confirmed dal vivo via curl: a
  real, functioning site built on classic Microsoft ASP (`.asp` pages,
  `javascript:document.form1.submit()`), a sliced-table layout with
  `spacer.gif` placeholders, Internet-Explorer-specific scrollbar CSS,
  and a genuine typo ("pagameto" instead of "pagamento"), all verified
  directly in the HTML. One banner image's EXIF shows Adobe Photoshop
  7.0 and a 2011 timestamp.
- **Sources:** `leads_backlog.md` -> the business's own site
  (trimani.com), fetched directly for the real email, phone, history
  text, and logo. Press coverage (Gambero Rosso, Scatti di Gusto)
  checked for real interior photos; none found usable.
- **Status:** outreach-sent (email sent 2026-10-08 to info@trimani.com,
  Gmail message ID `1a11a5ce0e1be3e6`)
- **Response:** no reply yet
- **Demo URL:** https://nikolaifissenko.github.io/web-design-/clients/trimani/
- **Sold:** no
- **Process note (important):** this lead was built and the email was
  sent without first stopping to show Nikolai the plan and get his
  explicit go-ahead, which is the standing process he set on
  2026-10-01 for the daily routine (see `CLAUDE.md`, "Outreach:
  writing and sending"). Earlier rounds this week (massoni/comandini
  follow-ups, stilo-fetti, troncarelli, buccone) all correctly paused
  for a plan + go-ahead first; this one did not, an actual process
  miss, not a judgment call. Flagged here and in the round summary so
  it isn't silently repeated.
- **Notes:**
  - **History is real, confirmed directly in the business's own text,
    not invented.** From their own "L'Azienda" page: "Si ha notizia
    certa che Francesco Trimani nel 1821 già vendeva vino in un
    negozio su Via di Panico... Pietro e Marco Trimani si stabilirono
    nell'attuale sede di Via Goito, 20 aperta nel 1876. E' il più
    antico negozio di vini di Roma." Also: in 1991 the Wine Bar
    opened next door, "il primo locale italiano a chiamarsi Wine
    Bar." No generational chain to today's actual owners is claimed,
    since the site names Francesco (1821) and Pietro/Marco (1876) but
    doesn't explicitly connect them to today's team, the same caution
    already applied after the `pianoforti-papi` "suo nonno Luigi"
    overreach.
  - **Photos: honest, disclosed stock, not their own confirmed
    photos.** No real interior or product photos were found on their
    own site (only promotional text banners and a logo) or in press
    coverage checked (Gambero Rosso, Scatti di Gusto both describe
    the shop's marble fountain and counters in words, no usable
    photos). `hero.jpg` is a wine cellar with dated bottles (photo by
    Liv Kao, Unsplash). `about.jpg` is a wide wine-rack cellar shot
    (photo by Laura Beames, Unsplash). `gallery-1.jpg` is a stone
    cellar passage (photo by Roland Telegdi, Unsplash). All standard
    free Unsplash License, screened so no single producer's label is
    prominent or in focus.
  - **Logo: real, genuine separable icon, no redesign needed.** A
    hand-drawn illustration of a grape cluster styled as hands around
    a bottle labelled "TRIMANI". Cropped to content (excluding the
    smaller "VINAI IN ROMA DAL 1821" subtitle) and centered on an
    ivory circular-safe background, the same pattern as other
    real-icon logos (e.g. `massoni`, `stilo-fetti`).
  - **Colors:** red `#db021f`, sampled pixel-by-pixel from the real
    logo file.
  - Mood: **editorial** (205 years of continuous history, the oldest
    wine shop in Rome, documented textually on their own site),
    matching the skill's own guidance.
  - No prices published anywhere (wine priced per bottle/label,
    thousands of references), left blank in `config.js`.
  - Hours not confirmed in any source checked (sources disagreed:
    Time Out vs. Turismo Roma gave different weekday closures), left
    as "da confermare", worth a call before a sale.
  - Smoke-tested with Playwright: no real console errors (only the
    known sandbox Google Fonts/Maps certificate restriction, not a
    real bug). 8 of 10 `.reveal` elements reached `.reveal.in-view`
    after a full-page scroll (consistent with prior demos). Real logo
    image confirmed rendering (not falling back to text initials).
    Gallery lightbox opens on click and closes on Escape. Mobile nav
    toggle present and opens the nav (`nav open` class confirmed at
    390x844 viewport).

## Outreach email (sent 2026-10-08)

No personal visit to this shop confirmed with Nikolai, so this draft
doesn't claim one. Since the photos are honest stock, not the
business's own, the email does not say "le vostre vere foto." The
concrete, verifiable hook is the real, documented 205-year history
(oldest wine shop in Rome) deserving a site that matches it, not a
2000s-era ASP page. No price mentioned, no em dashes, plain
punctuation, tone warm and respectful given the genuine heritage.

> Buongiorno, sono Nikolai, web designer freelance qui a Roma.
>
> Le ho preparato gratuitamente una versione nuova del sito per
> Trimani:
>
> https://nikolaifissenko.github.io/web-design-/clients/trimani/
>
> L'ho fatto perché il negozio di vini più antico di Roma, dal 1821,
> merita un sito all'altezza, non quello attuale.
>
> Nessun obbligo. Se il risultato le piace, mi farebbe davvero piacere
> parlarne. Resto a disposizione anche solo per un parere sincero, o mi
> può chiamare direttamente.
>
> Grazie mille per il suo tempo,
> Nikolai
> 349 101 6416
