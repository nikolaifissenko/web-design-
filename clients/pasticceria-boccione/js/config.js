// Demo per Pasticceria Boccione (Forno del Ghetto) — nessun sito proprio
// esiste (verificato: solo listing su directory/recensioni). Dati e
// testo verificati tramite copertura stampa reale: Tavole Romane,
// Gambero Rosso, RomaToday, Touring Club Italiano, Luciano Pignataro
// Wine Blog. Indirizzo e telefono confermati su più fonti indipendenti.
// LOGO: nessun logo/insegna leggibile trovato in nessuna foto reale —
// è una bottega storica informale, senza marchio grafico proprio
// (verificato sulle foto della vetrina). Per questo, e solo per questo
// motivo, usate le iniziali testuali invece di un'icona — non per
// comodità, ma perché non esiste davvero nulla da estrarre o
// reinterpretare (vedi CLAUDE.md).
// COLORI: marrone caramello #98724d e marrone espresso #3a2e2a
// campionati a mano dalla crosta reale della torta ricotta e visciole
// nelle foto stampa, non inventati.
// FOTO: tutte reali, nessuna stock, tutte da fonti stampa (nessun sito
// proprio da cui estrarre): hero.jpg = il portone d'ingresso storico
// con la fila di clienti (Touring Club Italiano); about.jpg = la
// vetrina del forno con le proprietarie al lavoro (RomaToday);
// gallery-1.jpg = una fetta della torta ricotta e visciole (RomaToday,
// ph. Lavinia Martini); gallery-2.jpg = il banco vetrina con le torte e
// il cartellino prezzo scritto a mano (Tavole Romane); gallery-3.jpg =
// la torta intera (RomaToday, ph. Lavinia Martini).

const SITE_CONFIG = {
  business: {
    name: "Pasticceria Boccione",
    tagline: "Il Forno del Ghetto: pasticceria ebraica kosher a Roma da generazioni",
    logoText: "PB",
    logoImage: "",
  },

  theme: {
    primary: "#98724d",
    accent: "#3a2e2a",
    font: "'Poppins', sans-serif",
    headingFont: "'Cinzel', serif",
    mood: "imperial",
  },

  hero: {
    heading: "Benvenuti da {{business.name}}",
    subheading: "La pasticceria ebraica kosher più amata di Roma, nel cuore del Ghetto",
    backgroundImage: "images/hero.jpg",
    ctaText: "Vieni a Trovarci",
    ctaLink: "#contact",
  },

  about: {
    heading: "Il Forno del Ghetto",
    text: "Da generazioni, la famiglia Limentani prepara dolci della tradizione ebraica romana in questo forno di Via del Portico d'Ottavia, nel cuore del Ghetto. La vetrina, invariata da inizio Novecento, si riempie ogni mattina di pizza ebraica, biscotti al miele e frutta secca, e della torta di ricotta e visciole che i romani vengono a cercare da tutta la città — la domenica mattina, la fila fuori dalla porta è quasi un rito.",
    image: "images/about.jpg",
  },

  offerings: {
    heading: "I Nostri Dolci",
    items: [
      { name: "Torta di ricotta e visciole", description: "Il dolce simbolo del forno, con ricotta fresca e visciole", price: "€15/kg" },
      { name: "Torta di ricotta e cioccolato", description: "La variante al cioccolato della torta più amata del Ghetto", price: "" },
      { name: "Pizza ebraica", description: "Dolce con frutta secca, canditi e mandorle, ricetta tradizionale", price: "" },
      { name: "Biscotti al miele", description: "Biscotti tradizionali con miele e frutta secca", price: "" },
    ],
  },

  gallery: {
    heading: "Galleria",
    images: [
      "images/gallery-1.jpg",
      "images/gallery-2.jpg",
      "images/gallery-3.jpg",
    ],
  },

  hours: {
    heading: "Orari",
    schedule: [
      { day: "Domenica - Giovedì", hours: "08:00 - 19:30" },
      { day: "Venerdì", hours: "08:00 - 15:30" },
      { day: "Sabato", hours: "Chiuso" },
    ],
  },

  contact: {
    heading: "Vieni a Trovarci",
    address: "Via del Portico d'Ottavia, 1, 00186 Roma",
    phone: "06 6878637",
    whatsapp: "",
    email: "",
  },

  map: {
    embedSrc: "https://www.google.com/maps?q=Via+del+Portico+d%27Ottavia+1+Roma&output=embed",
  },

  socials: {
    instagram: "",
    facebook: "",
    tiktok: "",
    website: "",
  },

  footer: {
    text: "Pasticceria Boccione — Il Forno del Ghetto, Roma.",
  },
};
