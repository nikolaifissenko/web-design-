# trattoria-memmo

- **Found:** 2026-09-06 (research pass following up on a candidate
  flagged but not built in Round 12's "not built, real leads found"
  list).
- **Address:** Piazza Cavour, 14-15, 00193 Roma (Prati, a due passi da
  Castel Sant'Angelo e dal Museo dell'Ara Pacis).
- **Phone:** 06 6880 6602.
- **Email:** none independently confirmed. One address
  (studiotorretti@alice.it) turned up in the technical/registration data
  behind the eatbu.com micro-site, but the name reads as an accounting
  firm ("studio Torretti"), not the restaurant itself, so it was not
  used, not worth risking writing to the wrong person.
- **Instagram:** none with an actual managed handle, only
  automatically-generated Instagram "location" tag pages, which aren't
  a real profile. **Facebook:** confirmed real and active,
  facebook.com/TrattoriaMemmoDal1930/.
- **Current website:** trattoria-memmo-srl.eatbu.com, a generic
  templated micro-site from a reservation provider (DISH Digital
  Solutions GmbH, footer credit visible), no real photos, no logo, only
  standard promotional boilerplate text. Confirmed via direct fetch.
- **Historic recognition:** officially listed as a Roma Capitale
  "bottega storica" (historic shop), decree D.D. n. 863 of 2010-03-17,
  per turismoroma.it. Founded 1930.
- **Sources:** turismoroma.it (address, phone, historic decree) ->
  independent cross-check on PagineGialle/Virgilio Aziende (address,
  phone match) -> eatbu.com micro-site (confirmed bad-website status) ->
  Sluurpy public photo gallery (real photos) -> Facebook search
  (confirmed real, active business page).
- **Status:** demo-built, **not yet contacted** (per Nikolai's
  instruction on 2026-09-06: today is research/build only, outreach
  goes out tomorrow).
- **Demo URL:** https://nikolaifissenko.github.io/web-design-/clients/trattoria-memmo/
  (not live yet, pending merge to `main`)
- **Sold:** no
- **Notes:**
  - **All photos are real, zero stock.** Source: Sluurpy's public photo
    gallery for this business (`menu.sluurpy.it`), fetched directly with
    a browser user-agent, verified as genuine JPEGs (not block pages).
    `hero.jpg` = the real dining room (exposed brick, framed print of
    Rome, set tables, view to the street entrance). `about.jpg` = the
    real wine shelf/cantina area. `gallery-1.jpg` = a real plate of
    cacio e pepe. `gallery-2.jpg` = a real vegetable soup. `gallery-3.jpg`
    = a real pizza with an aperitivo, table service outside.
  - **Logo:** no graphic mark exists anywhere, only the business name
    written out in full ("Trattoria Memmo dal 1930"). Facebook is
    confirmed unreachable by automated fetch (redirects to a login
    wall), consistent with the standing limitation in CLAUDE.md.
    Legitimate `logoText` fallback ("TM"), not a shortcut around an
    awkward crop.
  - **Colors are real**, sampled pixel-by-pixel with PIL from the actual
    photos: warm chestnut/brick tone of the dining room walls
    (`#5c4934`, primary) and a muted bordeaux detail visible in the
    dining room (`#663b3f`, accent).
  - Mood: **rustic** (classic historic Roman trattoria, matches
    `da-enzo-prati`'s treatment).
  - Menu items and prices: no prices published anywhere online. Dishes
    listed (cacio e pepe, gricia, amatriciana, carbonara, agnello
    scottadito, pizza quattro formaggi) come from aggregator reviews
    (Sluurpy) naming actual dishes served, not invented; a third-party
    "average meal ~€25" estimate exists but that's not a per-dish price,
    so left blank per house rule, to confirm in person.
  - Hours (daily 12:00-00:00) per Sluurpy, single source, not
    independently cross-checked with a second source, worth confirming
    by phone before relying on it fully.
  - **Outreach channel for tomorrow:** Facebook message (no confirmed
    email, no real Instagram profile). Draft not written yet, to be done
    tomorrow alongside the actual send per Nikolai's instruction.
