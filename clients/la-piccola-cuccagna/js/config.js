// Demo per La Piccola Cuccagna — nessun sito proprio trovato (verificato
// via ricerca mirata). Presenza social reale e consistente: Instagram
// @piccolacuccagna (35mila follower) e Facebook facebook.com/
// piccolacuccagna confermati via ricerca, email lapiccolacuccagna@
// gmail.com trovata su più fonti indipendenti. Hostaria dal 1950
// (>70 anni), a due passi da Piazza Navona.
// LOGO: nessun logo digitale trovato. Usato logoText — non un redesign,
// perché non esiste alcun file/immagine sorgente da cui partire, solo
// il nome scritto a mano sul cartello del menu (vedi sotto).
// FOTO: Instagram/Facebook irraggiungibili da fetch automatico (SPA
// lato client, conferma ulteriore del blocco già noto). Controllato
// piatti.menu (aggregatore con foto "La Piccola Cuccagna Cibo") ma
// SCARTATO come fonte inaffidabile per questo locale: le foto taggate
// con quel nome mostravano chiaramente altri posti (una sala da pranzo
// a tema nautico con timone, noodles cinesi, un pub in stile birreria)
// — un problema di qualità dei dati sull'aggregatore stesso, non un
// errore di scraping. Tripadvisor/Yelp/RestaurantGuru irraggiungibili
// (403/503, blocco noto). UNICHE foto reali trovate e verificabili:
// due scatti dello stesso menu cartaceo con l'intestazione originale
// "Hostaria La Piccola Cuccagna dal 1950" ben leggibile — prova diretta
// del nome/branding reale, tovaglia a quadretti rosso/bianco visibile.
// about.jpg = il menu aperto sul tavolo (tovaglia a quadretti reale);
// gallery-1.jpg = il cartello menu plastificato esposto fuori, con sullo
// sfondo una fontana/statua in stile berniniano (coerente con la zona
// Navona). hero.jpg = STOCK (Unsplash, Element5 Digital) — una
// carbonara su tovaglia a quadretti rosso/bianco, scelta apposta per
// coerenza visiva con la tovaglia reale vista nelle due foto sopra, ma
// dichiaratamente non una foto del locale. Fonti stampa (RomaToday e
// simili) cercate ma nessun articolo dedicato trovato per questo
// specifico locale.

const SITE_CONFIG = {
  business: {
    name: "La Piccola Cuccagna",
    tagline: "Hostaria romana dal 1950, a due passi da Piazza Navona",
    logoText: "PC",
    logoImage: "",
  },

  theme: {
    primary: "#a3231f",
    accent: "#2b2b2b",
    font: "'Poppins', sans-serif",
    headingFont: "'Cormorant Garamond', serif",
    mood: "rustic",
  },

  hero: {
    heading: "Benvenuti da {{business.name}}",
    subheading: "Cucina romana genuina dal 1950, carbonara e tiramisù tra i piatti più amati",
    backgroundImage: "images/hero.jpg",
    ctaText: "Prenota un tavolo",
    ctaLink: "#contact",
  },

  about: {
    heading: "Chi siamo",
    text: "La Piccola Cuccagna è un'hostaria romana accogliente a pochi passi da Piazza Navona, attiva dal 1950. Da oltre 70 anni propone piatti tipici della tradizione capitolina, dalla carbonara alla coda alla vaccinara, in un ambiente informale e genuino.",
    image: "images/about.jpg",
  },

  offerings: {
    heading: "Menu",
    items: [
      { name: "Spaghetti alla carbonara", description: "Uova, guanciale e pecorino romano", price: "" },
      { name: "Bucatino all'amatriciana", description: "Guanciale, pomodoro e pecorino DOP", price: "" },
      { name: "Tonnarello cacio e pepe", description: "Tonnarello con pepe nero e pecorino DOP", price: "" },
      { name: "Trippa fritta con fonduta cacio e pepe", description: "Una specialità della casa", price: "" },
      { name: "Mousse al pistacchio", description: "Dessert della casa", price: "" },
    ],
  },

  gallery: {
    heading: "Galleria",
    images: ["images/gallery-1.jpg"],
  },

  hours: {
    heading: "Orari",
    schedule: [
      { day: "Tutti i giorni", hours: "10:00 - 01:00" },
    ],
  },

  contact: {
    heading: "Contattaci",
    address: "Via della Cuccagna, 14, 00186 Roma",
    phone: "06 686 1920",
    whatsapp: "",
    email: "lapiccolacuccagna@gmail.com",
  },

  map: {
    embedSrc: "https://www.google.com/maps?q=Via+della+Cuccagna+14+Roma&output=embed",
  },

  socials: {
    instagram: "https://www.instagram.com/piccolacuccagna/",
    facebook: "https://www.facebook.com/piccolacuccagna/",
    tiktok: "",
    website: "",
  },

  footer: {
    text: "La Piccola Cuccagna — Hostaria romana a Roma dal 1950.",
  },
};
