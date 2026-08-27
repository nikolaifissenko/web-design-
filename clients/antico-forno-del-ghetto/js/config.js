// Demo per Antico Forno del Ghetto (Urbani) — nessun sito proprio esiste
// (verificato: solo listing/recensioni). Dati verificati tramite più
// fonti indipendenti: Touring Club Italiano, 50 Top Pizza, Gambero
// Rosso (listing), ricerca web incrociata. Gestito da Mauro Urbani;
// forno kosher, con i forni accesi ogni mattina dal rabbino e nessun
// prodotto animale nell'impasto (adatto anche a vegetariani/vegani) —
// dettaglio confermato su più fonti indipendenti.
// LOGO: nessun logo/insegna trovato in nessuna fonte — bottega storica
// senza marchio grafico proprio, iniziali testuali usate per lo stesso
// motivo di Pasticceria Boccione (vedi _lead.md).
// COLORI: terracotta #b46a45 e marrone crosta #3d2a1a campionati a mano
// dall'unica foto reale trovata, non inventati.
// FOTO: **una sola foto reale trovata** nonostante una ricerca estesa
// (sito proprio: assente; Instagram: irraggiungibile da fetch, come
// sempre; Tripadvisor, Gambero Rosso, Foursquare: bloccati da
// protezioni anti-bot; Touring Club: la foto associata al listing era
// in realtà una foto stock generica di un'agenzia viaggi, scartata
// perché non pertinente; La Pecora Nera, Wanderlog: nessuna foto reale
// disponibile). L'unica foto trovata (da moondo.info, un articolo food
// dedicato al forno) è comunque forte: il banco vetrina pieno di pane
// fresco e una teglia di pizza rossa appena tagliata. Usata come hero;
// niente per about/gallery — lasciati vuoti piuttosto che riempirli con
// stock generico, come da regola del progetto.

const SITE_CONFIG = {
  business: {
    name: "Antico Forno del Ghetto",
    tagline: "Pane fresco e pizza kosher nel cuore del Ghetto di Roma dal 1927",
    logoText: "AF",
    logoImage: "",
  },

  theme: {
    primary: "#b46a45",
    accent: "#3d2a1a",
    font: "'Poppins', sans-serif",
    headingFont: "'Cinzel', serif",
    mood: "imperial",
  },

  hero: {
    heading: "Benvenuti da {{business.name}}",
    subheading: "Pane, pizza bianca e pizza rossa sfornati più volte al giorno, nel Ghetto di Roma dal 1927",
    backgroundImage: "images/hero.jpg",
    ctaText: "Vieni a Trovarci",
    ctaLink: "#contact",
  },

  about: {
    heading: "Un Forno del Ghetto",
    text: "Aperto nel 1927, l'Antico Forno del Ghetto è oggi guidato da Mauro Urbani, che porta avanti oltre vent'anni di gestione della stessa famiglia. Il pane viene preparato secondo le regole della cucina kosher: i forni vengono accesi ogni mattina dal rabbino, e nell'impasto non entra alcun prodotto animale. Filoni, pagnotte, rosette e i classici \"ossi\" escono dal forno più volte al giorno, insieme alla pizza bianca e rossa che i romani vengono a cercare fin dal mattino.",
    image: "",
  },

  offerings: {
    heading: "Cosa Sforniamo",
    items: [
      { name: "Pizza bianca", description: "Croccante e fragrante, sfornata calda più volte al giorno", price: "" },
      { name: "Pizza rossa", description: "Con pomodoro, la classica delle panetterie romane", price: "" },
      { name: "Pane del giorno", description: "Filoni, pagnotte, rosette e panini, tutti freschi di giornata", price: "" },
      { name: "Ossi e biscotti", description: "I classici \"ossi\" e biscotteria da forno della tradizione", price: "" },
    ],
  },

  gallery: {
    heading: "Galleria",
    images: [],
  },

  hours: {
    heading: "Orari",
    schedule: [
      { day: "Lunedì - Venerdì", hours: "07:30 - 14:30, 16:00 - 19:00" },
      { day: "Sabato", hours: "Chiuso" },
      { day: "Domenica", hours: "09:00 - 13:30" },
    ],
  },

  contact: {
    heading: "Vieni a Trovarci",
    address: "Piazza Costaguti, 30-32, 00186 Roma",
    phone: "06 6880 3012",
    whatsapp: "",
    email: "",
  },

  map: {
    embedSrc: "https://www.google.com/maps?q=Piazza+Costaguti+30+Roma&output=embed",
  },

  socials: {
    instagram: "",
    facebook: "",
    tiktok: "",
    website: "",
  },

  footer: {
    text: "Antico Forno del Ghetto — Panificio Urbani, Roma dal 1927.",
  },
};
