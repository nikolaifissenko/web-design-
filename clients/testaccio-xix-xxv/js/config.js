// Demo per Testaccio XIX-XXV B&B — dati verificati: nome, indirizzo, telefono
// (bed-and-breakfast.it, PagineBianche). Il sito attuale (testaccio19-25.com)
// ha restituito HTTP 503 (Service Unavailable) su due tentativi separati —
// il dominio esiste ma il server non risponde. Anche peggio di un sito
// datato: chi cerca il B&B online oggi non riesce proprio a vedere il sito.
// FOTO: stock (Unsplash, licenza libera), non della struttura reale —
// sostituire con foto vere se/quando il cliente compra il sito.
// Numero di camere e dettagli interni non confermati: testo tenuto
// generico, da confermare col titolare.

const SITE_CONFIG = {
  business: {
    name: "Testaccio XIX-XXV B&B",
    tagline: "Un B&B a conduzione familiare nel cuore autentico di Testaccio",
    logoText: "TX",
    logoImage: "",
  },

  theme: {
    primary: "#b3541e",
    accent: "#2b2320",
    font: "'Poppins', sans-serif",
    headingFont: "'Cormorant Garamond', serif",
  },

  hero: {
    heading: "Benvenuti a {{business.name}}",
    subheading: "Un soggiorno accogliente nel quartiere più genuino di Roma, tra il mercato di Testaccio e il Tevere",
    backgroundImage: "images/hero.jpg",
    ctaText: "Contattaci",
    ctaLink: "#contact",
  },

  about: {
    heading: "Chi siamo",
    text: "Testaccio XIX-XXV B&B si trova in uno dei quartieri più autentici di Roma, lontano dal caos turistico ma a pochi passi dalla Piramide, dal mercato di Testaccio e dai migliori ristoranti della zona. Un punto d'appoggio ideale per chi vuole vivere Roma come un romano.",
    image: "images/about.jpg",
  },

  offerings: {
    heading: "Le Camere",
    items: [
      { name: "Camera Standard", description: "Confortevole e luminosa, ideale per un soggiorno tranquillo", price: "" },
      { name: "Camera Matrimoniale", description: "Spaziosa, con bagno privato", price: "" },
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
      { day: "Reception", hours: "su appuntamento" },
    ],
  },

  contact: {
    heading: "Contattaci",
    address: "Via Nicola Zabaglia 3, Testaccio, 00153 Roma",
    phone: "06 57285417",
    whatsapp: "+39 351 3772230",
    email: "info@testaccio19-25.com",
  },

  map: {
    embedSrc: "https://www.google.com/maps?q=Via+Nicola+Zabaglia+3+Roma&output=embed",
  },

  socials: {
    instagram: "",
    facebook: "",
    tiktok: "",
    website: "",
  },

  footer: {
    text: "Testaccio XIX-XXV B&B — Testaccio, Roma",
  },
};
