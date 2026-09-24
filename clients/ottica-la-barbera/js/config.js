// Demo per Ottica La Barbera 1837: ottica storica, fondata a Napoli
// nel 1837, un tempo fornitrice ufficiale della Real Casa. Sede
// verificata: Via Cassia 925, zona Cassia/Tomba di Nerone, Roma.
// STORIA riassunta onestamente da fonti indipendenti (ricerca web),
// non inventata.
// EMAIL: info@otticalabarbera1837.it, trovata direttamente sulla
// pagina Contatti del loro sito (otticalabarbera1837.it/contatti),
// confermata via curl diretto (200, tag mailto presente).
// ATTENZIONE INDIRIZZO: esiste anche un'altra sede/entità con lo
// stesso nome storico "Ottica F. La Barbera 1837" in Via Barberini 74
// (telefono, email e sito .eu diversi, confermati da fonti di stampa
// indipendenti: blogabr.it e 1000lenti.it). Le due sedi hanno contatti
// diversi e NON sono state confuse: questo demo usa solo indirizzo,
// telefono ed email della sede di Via Cassia 925 (otticalabarbera1837.it,
// verificata via curl diretto), lo stesso sito da cui proviene il logo.
// Le foto reali trovate per Via Barberini non sono state usate qui
// apposta, per non attribuire alla sede di Via Cassia foto di un
// negozio diverso (il caso di misattribuzione che CLAUDE.md chiede di
// evitare, analogo al precedente ristorante-panzirone).
// SITO ATTUALE (Via Cassia): confermato dal vivo, sito Duda/
// Italiaonline. Ha un vero logo (vedi sotto) ma le foto del corpo
// pagina sono stock generiche (persone/modelli generici con occhiali,
// un bambino con tabella optometrica), non foto reali del negozio.
// FOTO: dato che nessuna foto reale della sede di Via Cassia è stata
// trovata (sito proprio solo stock, nessuna copertura stampa per
// questa sede specifica, Instagram non trovato, Facebook esistente ma
// irraggiungibile via fetch automatico come da prassi CLAUDE.md), qui
// sono usate foto stock oneste, scelte per rappresentare fedelmente il
// mestiere (occhiali in esposizione), controllate una per una per
// escludere marchi di terzi visibili: hero.jpg = parete di occhiali in
// esposizione con luce calda (Unsplash, foto 1544177586-c9b9fb1f45c2).
// about.jpg = montature in metallo in esposizione su schedario
// (Unsplash, foto 1615468822882-4828d2602857). gallery-1.jpg = fila di
// montature colorate in esposizione (Unsplash, foto
// 1486250944723-86bca2b15b06). Tutte licenza Unsplash gratuita. Una
// quarta foto candidata (montature con cartellini "JINS" e prezzi in
// RMB visibili) è stata scartata di proposito per marchio di terzi
// visibile, esattamente il caso descritto in CLAUDE.md.
// LOGO: reale, trovato sul sito otticalabarbera1837.it (variante oro
// su fondo scuro). Ritagliato al solo monogramma circolare "LB" (senza
// il wordmark a fianco), adattandosi perfettamente allo slot circolare
// del template senza bisogno di redesign.
// COLORI: oro `#966f34`, campionato pixel-per-pixel dal vero logo
// (media di due punti sul cerchio dorato). Blu notte `#1e2a38` scelto
// come accento elegante in contrasto con l'oro, per il tono da
// istituzione storica, non campionato dal logo (che è monocromatico
// oro/bianco).
// MOOD: editorial (bottega storica con una storia di fondazione forte
// e documentata, 1837), per la linea guida della skill
// professional-web-design.

const SITE_CONFIG = {
  business: {
    name: "Ottica La Barbera 1837",
    tagline: "Ottica storica a Roma, dal 1837",
    logoText: "LB",
    logoImage: "images/logo.png",
  },

  theme: {
    primary: "#966f34",
    accent: "#1e2a38",
    font: "'Poppins', sans-serif",
    headingFont: "'Playfair Display', serif",
    mood: "editorial",
  },

  hero: {
    heading: "Benvenuti da {{business.name}}",
    subheading: "Ottica storica a Roma, un tempo fornitrice della Real Casa, dal 1837",
    backgroundImage: "images/hero.jpg",
    ctaText: "Contattaci",
    ctaLink: "#contact",
  },

  about: {
    heading: "Chi siamo",
    text: "Fondata nel 1837, Ottica La Barbera fu un tempo fornitrice ufficiale della Real Casa. Da generazioni la famiglia porta avanti la stessa tradizione: esame della vista, laboratorio interno per lenti e montature, e una selezione di occhiali da vista e da sole per ogni esigenza.",
    image: "images/about.jpg",
  },

  offerings: {
    heading: "Cosa offriamo",
    items: [
      { name: "Esame della vista", description: "Controllo optometrico completo con strumentazione moderna", price: "" },
      { name: "Laboratorio interno", description: "Montaggio e preparazione lenti in tempo reale", price: "" },
      { name: "Occhiali su misura", description: "Montature da vista e da sole per ogni esigenza", price: "" },
    ],
  },

  gallery: {
    heading: "Galleria",
    images: [
      "images/gallery-1.jpg",
    ],
  },

  hours: {
    heading: "Orari",
    schedule: [
      { day: "Lunedì - Sabato", hours: "09:30 - 13:00, 15:30 - 19:30" },
      { day: "Domenica", hours: "Chiuso" },
    ],
  },

  contact: {
    heading: "Contattaci",
    address: "Via Cassia 925, 00189 Roma",
    phone: "06 6992 4939",
    whatsapp: "339 878 4325",
    email: "info@otticalabarbera1837.it",
  },

  map: {
    embedSrc: "https://www.google.com/maps?q=Via+Cassia+925+Roma&output=embed",
  },

  socials: {
    instagram: "",
    facebook: "",
    tiktok: "",
    website: "https://www.otticalabarbera1837.it/",
  },

  footer: {
    text: "Ottica La Barbera 1837: ottica storica a Roma, dal 1837.",
  },
};
