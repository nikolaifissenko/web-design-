// Demo per Antica Trattoria da Carlone — dati verificati: nome, indirizzo,
// telefono, orari (RomaToday, TrovaAperto, Tripadvisor/Yelp), Instagram.
// Sito attuale (dacarlonetrastevere.it) risulta MORTO — il dominio non
// si risolve più (verificato via DNS/curl). Peggio che non averne uno.
// FOTO: reali (non stock). Instagram è irraggiungibile da fetch
// automatico (SPA lato client, conferma ulteriore del blocco già noto),
// quindi trovate tramite un servizio editoriale dedicato a questo
// locale (flawless.life — foto scattate con Canon EOS, EXIF verificato):
// hero = tavoli all'aperto in Via della Luce, about = pasta saltata in
// padella, gallery-1 = cacio e pepe impiattata. Vedi _lead.md per URL
// sorgente. Prezzi non pubblicati online: confermare in loco.

const SITE_CONFIG = {
  business: {
    name: "Antica Trattoria da Carlone",
    tagline: "Cucina romana casereccia nel cuore di Trastevere da oltre 20 anni",
    logoText: "DC",
    logoImage: "",
  },

  theme: {
    primary: "#8f2f22",
    accent: "#26201b",
    font: "'Poppins', sans-serif",
    headingFont: "'Cormorant Garamond', serif",
    mood: "rustic",
  },

  hero: {
    heading: "Benvenuti da {{business.name}}",
    subheading: "Carbonara, amatriciana e la vera cucina casereccia capitolina, nel cuore di Trastevere",
    backgroundImage: "images/hero.jpg",
    ctaText: "Prenota un tavolo",
    ctaLink: "#contact",
  },

  about: {
    heading: "Chi siamo",
    text: "L'Antica Trattoria da Carlone è gestita dalla stessa famiglia da oltre 20 anni nel cuore di Trastevere. Un posto caratteristico e genuino, dove si respira la vera cucina casereccia romana.",
    image: "images/about.jpg",
  },

  offerings: {
    heading: "Menu",
    items: [
      { name: "Carbonara", description: "Uova, guanciale e pecorino romano", price: "" },
      { name: "Amatriciana", description: "Guanciale, pomodoro e pecorino", price: "" },
      { name: "Cacio e pepe", description: "Il classico della tradizione romana", price: "" },
      { name: "Saltimbocca alla romana", description: "Vitello, prosciutto e salvia", price: "" },
      { name: "Trippa alla romana", description: "Un grande classico del quinto quarto", price: "" },
    ],
  },

  gallery: {
    heading: "Galleria",
    images: ["images/gallery-1.jpg"],
  },

  hours: {
    heading: "Orari",
    schedule: [
      { day: "Lunedì", hours: "Chiuso" },
      { day: "Martedì", hours: "12:00 - 23:00" },
      { day: "Mercoledì", hours: "12:00 - 23:00" },
      { day: "Giovedì", hours: "12:00 - 23:00" },
      { day: "Venerdì", hours: "12:00 - 23:00" },
      { day: "Sabato", hours: "12:00 - 23:00" },
      { day: "Domenica", hours: "12:00 - 23:00" },
    ],
  },

  contact: {
    heading: "Contattaci",
    address: "Via della Luce, 5, Trastevere, 00153 Roma",
    phone: "06 5800039",
    whatsapp: "",
    email: "",
  },

  map: {
    embedSrc: "https://www.google.com/maps?q=Via+della+Luce+5+Roma&output=embed",
  },

  socials: {
    instagram: "https://www.instagram.com/anticatrattoriadacarlone/",
    facebook: "",
    tiktok: "",
    website: "",
  },

  footer: {
    text: "Antica Trattoria da Carlone — Trastevere, Roma",
  },
};
