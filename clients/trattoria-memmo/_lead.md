# trattoria-memmo

- **Found:** 2026-09-08 (manual web search, "bottega storica" registry follow-up from a prior session's queued note)
- **Address:** Piazza Cavour, 14/15, 00193 Roma (Prati)
- **Phone:** 06 68806602
- **Email:** none found. Real search done (Turismo Roma listing, Facebook page, piatti.menu, paginegialle, restaurantguru), genuinely not published anywhere.
- **Facebook:** https://www.facebook.com/TrattoriaMemmoDal1930/ (real, confirmed linked from the official Turismo Roma listing)
- **Instagram:** none found.
- **Current website:** none. Only third-party listings (Turismo Roma, TripAdvisor, Yelp, TheFork, piatti.menu). Confirmed via direct search and by fetching the Turismo Roma page, which lists no official site.
- **Status:** demo-built, outreach drafted for Nikolai to send via Facebook DM (Claude has no channel to send this)
- **Demo URL:** https://nikolaifissenko.github.io/web-design-/clients/trattoria-memmo/
- **Sold:** no
- **Notes:**
  - Trattoria romana classica dal 1930, riconosciuta "Negozio Storico" da Roma Capitale, a Piazza Cavour nel quartiere Prati, vicino al Museo dell'Ara Pacis.
  - **Menu reale, non inventato.** Trovato un PDF menù strutturato pubblicato su piatti.menu (indirizzo e telefono nel PDF combaciano esattamente con le fonti ufficiali, quindi i dati testuali sono attendibili anche se le foto della stessa pagina non lo erano, vedi sotto). 7 piatti rappresentativi selezionati per il sito con i prezzi reali del PDF.
  - **Nessuna foto reale trovata, dopo verifica seria e in buona fede.** La galleria fotografica sulla stessa pagina piatti.menu è risultata **contaminata con foto di altri locali**: tra le immagini proposte per questo ristorante c'era l'insegna di un ristorante cinese ("Dragon & Phoenix Chinese Restaurant") e un piatto con il logo di un altro locale ("Osteria da Fortunata") stampato sul bordo. Stesso rischio di misattribuzione già capitato una volta con Torrefazione Foroni (vedi CLAUDE.md), quindi **scartate tutte le foto di quella pagina per sicurezza**, non solo quelle palesemente sbagliate. Altre fonti provate e bloccate: Yelp (403), TheFork (403), restaurantguru (503), Turismo Roma (nessuna foto del locale in pagina), Facebook (irraggiungibile da fetch automatico, come da regola nota in `branding-extraction.md`).
  - **Foto stock oneste usate al posto delle reali**, scelte con cura per il mood (nessun logo di terzi visibile, licenza Unsplash libera): hero = sala con tovaglia a quadretti rossi, about = spaghetti alla carbonara, gallery-1 = calice di vino versato. Vedi commento in cima a `js/config.js` per i credit fotografici esatti.
  - **Colori scelti a mano** (rosso trattoria + crema), non estratti da un sito/logo reale (nessuno dei due esiste). Dichiarato onestamente, non presentato come "vero".
  - Orari presi dal PDF menù (tutti i giorni 12:00-01:00), orario lungo e uguale ogni giorno, potrebbe essere un default della piattaforma piuttosto che l'orario reale: **verificare per telefono prima di usarlo in produzione** se il cliente compra.

## Outreach draft: Facebook DM (Nikolai to send, real historic institution, warmer tone)

Trattoria Memmo is a genuine ~95-year-old Roman institution (Negozio Storico
recognition), so this leans warmer/more respectful than the casual
"practicing student" framing, per CLAUDE.md's tone rule for businesses with
real documented history, while staying modern, not stiff. No price stated,
no invented personal visit (Nikolai has not confirmed going here).

Send via Facebook DM to https://www.facebook.com/TrattoriaMemmoDal1930/:

> Buongiorno, mi chiamo Nikolai, sono un web designer qui a Roma. Ho notato che Trattoria Memmo, pur essendo un Negozio Storico dal 1930, non ha un sito web proprio. Mi è sembrato un peccato per un locale con una storia così radicata nel quartiere, quindi vi ho preparato gratuitamente una demo di come potrebbe essere:
>
> https://nikolaifissenko.github.io/web-design-/clients/trattoria-memmo/
>
> Nessun obbligo, l'ho fatto per il gusto di farlo. Se vi piace il risultato e volete parlarne, sono a disposizione, anche solo per un parere sincero.
>
> Grazie mille per il vostro tempo,
> Nikolai
> 349 101 6416
