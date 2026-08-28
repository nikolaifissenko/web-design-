// Demo per Trattoria Da Lucia. Dati verificati: indirizzo, telefono, storia
// (Touring Club Italiano, Luciano Pignataro Wine Blog). Sito attuale
// (trattoriadalucia.com) risulta MORTO, il dominio non si risolve più.
// Non accetta carte di credito, altro segnale di scarsa presenza digitale.
// Nessun logo reale trovato (piccola trattoria familiare), logoText di
// fallback, caso legittimo, non un accorciamento di comodo.
// Foto TUTTE reali, da un articolo dedicato del Luciano Pignataro Wine
// Blog (2019): hero/about = interno vero (pentole di rame, foto storiche
// alle pareti, proprio come descritto nelle recensioni), gallery-1 =
// amatriciana vera, gallery-2 = carbonara vera, gallery-3 = il muro di
// foto storiche di famiglia. Nessuna foto stock su questo cliente.
// Menu/prezzi non pubblicati online: confermare in loco.

const SITE_CONFIG = {
  business: {
    name: "Trattoria Da Lucia",
    tagline: "Cucina romana tradizionale a Trastevere dal 1938",
    logoText: "DL",
    logoImage: "",
  },

  theme: {
    primary: "#7a2e1f",
    accent: "#2b2320",
    font: "'Poppins', sans-serif",
    headingFont: "'Permanent Marker', cursive",
    mood: "rustic",
  },

  hero: {
    heading: "Benvenuti da {{business.name}}",
    subheading: "Un'istituzione di Trastevere dal 1938, tra pentole di rame e vecchie fotografie di famiglia",
    backgroundImage: "images/hero.jpg",
    ctaText: "Prenota un tavolo",
    ctaLink: "#contact",
  },

  about: {
    heading: "Chi siamo",
    text: "Trattoria Da Lucia è un'istituzione di Trastevere dal 1938, oggi portata avanti dalla quarta generazione della famiglia. Cucina romana autentica in un ambiente rimasto autentico nel tempo, tra pentole di rame e fotografie storiche alle pareti.",
    image: "images/about.jpg",
  },

  offerings: {
    heading: "Menu",
    items: [
      { name: "Spaghetti cacio e pepe", description: "Il grande classico romano", price: "" },
      { name: "Bucatini all'amatriciana", description: "Guanciale, pomodoro e pecorino", price: "" },
      { name: "Carbonara", description: "Uova, guanciale e pecorino romano", price: "" },
      { name: "Involtini al sugo", description: "Ricetta tradizionale della casa", price: "" },
      { name: "Coda alla vaccinara", description: "Piatto storico del quinto quarto", price: "" },
      { name: "Trippa alla romana", description: "Un altro grande classico romano", price: "" },
    ],
  },

  gallery: {
    heading: "Galleria",
    images: ["images/gallery-1.jpg", "images/gallery-2.jpg", "images/gallery-3.jpg"],
  },

  hours: {
    heading: "Orari",
    schedule: [
      { day: "Lunedì", hours: "Chiuso" },
      { day: "Martedì", hours: "12:30 - 15:30, 19:30 - 24:00" },
      { day: "Mercoledì", hours: "12:30 - 15:30, 19:30 - 24:00" },
      { day: "Giovedì", hours: "12:30 - 15:30, 19:30 - 24:00" },
      { day: "Venerdì", hours: "12:30 - 15:30, 19:30 - 24:00" },
      { day: "Sabato", hours: "12:30 - 15:30, 19:30 - 24:00" },
      { day: "Domenica", hours: "12:30 - 15:30" },
    ],
  },

  contact: {
    heading: "Contattaci",
    address: "Vicolo del Mattonato 2B, Trastevere, 00153 Roma",
    phone: "06 5803601",
    whatsapp: "",
    email: "dalucia1938@gmail.com",
  },

  map: {
    embedSrc: "https://www.google.com/maps?q=Vicolo+del+Mattonato+2B+Roma&output=embed",
  },

  socials: {
    instagram: "https://www.instagram.com/dalucia1938/",
    facebook: "https://www.facebook.com/trattoriadalucia1938/",
    tiktok: "",
    website: "",
  },

  footer: {
    text: "Trattoria Da Lucia — Trastevere, Roma, dal 1938",
  },
};
