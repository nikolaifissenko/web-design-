# autofficina-pisino

- **Found:** 2026-08-25
- **Address:** Via Pisino, 115, 00177 Roma
- **Phone:** 06 51601974 (landline) / 333 470 8369 (mobile, used as WhatsApp in demo)
- **Email:** novacarservicepisino@gmail.com
- **Current website:** autofficinapisino.com — exists but dated (mid-2010s design), basic layout. Legal name appears to be "Novacar Service Pisino S.R.L." per DEKRA/revisioni listings; trades as "Autofficina Pisino."  Counts as a "bad website" lead, not missing.
- **Facebook:** https://www.facebook.com/autofficinapisino/
- **Instagram:** none found
- **Sources:** autofficinapisino.com (services, hours, contact); DEKRA revisione centri listing and Virgilio business directory (confirms Novacar Service Pisino S.R.L. name, also offers car rental per a Facebook post).
- **Status:** outreach-sent (email sent 2026-08-26 to novacarservicepisino@gmail.com — Gmail message ID `1a03c23762875a7d`)
- **Demo URL:** https://nikolaifissenko.github.io/web-design-/clients/autofficina-pisino/
- **Response:** no reply yet (re-checked 2026-08-29, ~72h after sending)
- **Sold:** no
- **Notes:**
  - Has a real email — outreach can go by email using `scripts/pitch_template.md`.
  - Hours confirmed from their current site: Mon-Fri 08:00-19:30, Sat 08:00-13:00, Sun closed.
  - Service prices not published — left blank in `js/config.js`.
  - **2026-08-26 branding pass:** checked their live site for reusable real assets (see `scripts/branding-extraction.md` for the standard process). Their real CSS brand color, teal `#68ccd1` (deepened slightly to `#3a9ca3` for text contrast), replaced the previously invented red theme.
  - **2026-08-26, logo redesigned rather than dropped.** Their real logo (stylized car silhouette + "AUTOFFICINA PISINO" wordmark, black + mustard-yellow `#dcd221`) has icon and text touching with no clean square crop anywhere (checked pixel-by-pixel) — a first pass here skipped `logoImage` entirely for that reason. On review that was the wrong call: a professional wouldn't drop the logo just because the source file doesn't fit the slot, they'd adapt it. Redesigned a clean icon-only mark from scratch — a simple flat-style car silhouette using the same real brand colors (black body, mustard-yellow `#dcd221` wheel accent) — sized for the template's circular avatar. Saved as `images/logo.png`, now wired up as `logoImage`.
  - **2026-08-26, per Nikolai:** `hero.jpg` and `about.jpg` now use the same two photos actually displayed on their live site (mechanic checking a wheel with a clipboard; a close-up wheel/tool detail) — stylistically these read as licensed agency/stock photography rather than a candid shot of this specific garage, but they ARE the visual identity the business itself currently uses, so the demo now mirrors their real site rather than an unrelated Unsplash pick. `gallery-1/2/3.jpg` remain the original Unsplash stock (Free License, no attribution required — IDs `photo-1645445522156-9ac06bc7a767` / `photo-1543618208-03ccf87da0ef` / `photo-1477333183135-292dd5b3910f`). Swap everything for real garage photos if/when the client buys.

## Outreach draft — personal story angle (recommended, per Nikolai)

Same approach as the other three — leads with the real "new web designer chasing a passion" story instead of a straight sales pitch.

Subject: Un sito rifatto per Autofficina Pisino (giusto per farvi vedere)

> Buongiorno,
>
> Mi chiamo Nikolai. Di recente ho scoperto una vera passione per il web design — è una cosa nuova per me, ma ci sto mettendo il cuore perché spero un giorno di riuscire a farne il mio lavoro e lasciare il mio impiego attuale.
>
> Per fare pratica, ho scelto alcune attività di Roma e ho provato a rifare i loro siti, solo per esercitarmi e imparare. Ho visto il sito di Autofficina Pisino e ve ne ho preparato una versione più moderna e ottimizzata per smartphone, giusto per farvi vedere come potrebbe apparire: https://nikolaifissenko.github.io/web-design-/clients/autofficina-pisino/
>
> Non c'è nessun obbligo, l'ho fatto principalmente per esercitarmi. Ma se vi piace il risultato, sarei felicissimo di completarlo con foto reali dell'officina e renderlo operativo per voi (500€, con hosting e gestione social disponibili come opzione mensile se interessa). Resto a disposizione per qualsiasi domanda.
>
> Grazie mille per il vostro tempo,
> Nikolai

## Outreach draft — business pitch angle (alternate)

Subject: Proposta di rinnovo sito per Autofficina Pisino

> Buongiorno,
>
> Ho notato il sito di Autofficina Pisino e ho preparato una versione rinnovata, più moderna e ottimizzata per smartphone, per mostrarvi come potrebbe apparire online: https://nikolaifissenko.github.io/web-design-/clients/autofficina-pisino/
>
> Se l'idea vi piace, posso completarla con foto reali dell'officina e renderla operativa per 500€, con hosting e gestione social disponibili come opzione mensile.
>
> Resto a disposizione per qualsiasi domanda.
>
> Cordiali saluti,
> Nikolai

Note: same as Tinto Lavanderia — their current site isn't broken, just dated, so both drafts lean on "modern/mobile-optimized upgrade" rather than "yours is bad."
