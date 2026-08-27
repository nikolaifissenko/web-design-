// Demo per Trastevereinbed — dati verificati: nome, indirizzo, telefono,
// email (bed-and-breakfast.it). Sito attuale (trastevereinbed.com) è
// letteralmente un'unica immagine-mappa del 2010 (no HTML/CSS moderno),
// con testo placeholder mai completato visibile nell'immagine stessa
// ("Copyright information Goes Here") e link a "Web Agency Pluma Studio"
// ancora presenti. Colore di sfondo reale del sito: #4F0000 (bordeaux
// scuro) — ripreso qui come colore principale per coerenza col loro
// brand esistente.
// FOTO: nessuna foto reale reperibile sul sito attuale (l'unico file
// immagine oltre al logo, bg.jpg, restituisce 404 — rimosso dal server).
// Uso lo stesso set di foto stock (Unsplash, licenza libera) delle altre
// demo B&B di questo batch. Il "logo" del sito attuale non è riutilizzabile:
// è un'unica immagine con menu di navigazione e testo di copyright
// incorporati, non un marchio isolato — non adatto al cerchio logo del
// template.

const SITE_CONFIG = {
  business: {
    name: "Trastevere in Bed",
    tagline: "Bed & Breakfast a due passi dalla stazione Trastevere",
    logoText: "TB",
    logoImage: "",
  },

  theme: {
    primary: "#4f0000",
    accent: "#2b1a1a",
    font: "'Poppins', sans-serif",
    headingFont: "'Cormorant Garamond', serif",
    mood: "boutique",
  },

  hero: {
    heading: "Benvenuti a {{business.name}}",
    subheading: "A circa 300 metri dalla stazione di Roma Trastevere, comodo per Termini, San Pietro e Fiumicino",
    backgroundImage: "images/hero.jpg",
    ctaText: "Contattaci",
    ctaLink: "#contact",
  },

  about: {
    heading: "Chi siamo",
    text: "Trastevere in Bed si trova a pochi passi dalla stazione ferroviaria di Roma Trastevere, comoda per raggiungere Termini, l'aeroporto di Fiumicino, San Pietro e la stazione Tiburtina. Un punto d'appoggio pratico per esplorare Roma.",
    image: "images/about.jpg",
  },

  offerings: {
    heading: "Le Camere",
    items: [
      { name: "Camera Standard", description: "Comoda e ben collegata, a due passi dalla stazione", price: "" },
      { name: "Camera Matrimoniale", description: "Spaziosa, ideale per coppie", price: "" },
    ],
  },

  gallery: {
    heading: "Galleria",
    images: ["images/gallery-1.jpg", "images/gallery-2.jpg", "images/gallery-3.jpg"],
  },

  hours: {
    heading: "Check-in / Check-out",
    schedule: [
      { day: "Check-in", hours: "da confermare" },
      { day: "Check-out", hours: "da confermare" },
    ],
  },

  contact: {
    heading: "Contattaci",
    address: "Via Angelo Bellani 45, Trastevere, 00153 Roma",
    phone: "+39 392 0156246",
    whatsapp: "+39 392 0156246",
    email: "trastevereinbed@hotmail.com",
  },

  map: {
    embedSrc: "https://www.google.com/maps?q=Via+Angelo+Bellani+45+Roma&output=embed",
  },

  socials: {
    instagram: "",
    facebook: "",
    tiktok: "",
    website: "",
  },

  footer: {
    text: "Trastevere in Bed — Trastevere, Roma",
  },
};
