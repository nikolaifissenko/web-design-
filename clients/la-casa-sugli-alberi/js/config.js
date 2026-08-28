// Demo per "La Casa sugli Alberi" B&B — dati verificati: nome, indirizzo
// (PagineBianche, Tripadvisor: Via Ginori 7, 00153 Roma, Testaccio).
// NESSUN sito ufficiale trovato: solo directory/aggregatori. Dettagli
// interni (arredamento, numero camere) non confermati — testo tenuto
// generico, il nome stesso ("la casa sugli alberi" = "the treehouse")
// è già un buon angolo narrativo.
// FOTO: stock (Unsplash, licenza libera), non della struttura reale —
// sostituire con foto vere se/quando il cliente compra il sito.

const SITE_CONFIG = {
  business: {
    name: "La Casa sugli Alberi",
    tagline: "Un rifugio accogliente nel cuore di Testaccio",
    logoText: "CA",
    logoImage: "",
  },

  theme: {
    primary: "#3f5d3a",
    accent: "#5a4632",
    font: "'Poppins', sans-serif",
    headingFont: "'Cormorant Garamond', serif",
    mood: "boutique",
  },

  hero: {
    heading: "Benvenuti a {{business.name}}",
    subheading: "Un B&B che porta il nome di un rifugio — tranquillo, accogliente, nel cuore di Testaccio",
    backgroundImage: "images/hero.jpg",
    ctaText: "Contattaci",
    ctaLink: "#contact",
  },

  about: {
    heading: "Chi siamo",
    text: "La Casa sugli Alberi si trova a Testaccio, tra i quartieri più autentici e vivaci di Roma, famoso per il mercato, i ristoranti storici e la vita notturna. Un piccolo B&B pensato per chi cerca un soggiorno tranquillo ma vicino a tutto.",
    image: "images/about.jpg",
  },

  offerings: {
    heading: "Le Camere",
    items: [
      { name: "Camera Standard", description: "Accogliente e silenziosa", price: "" },
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
    address: "Via Ginori 7, Testaccio, 00153 Roma",
    phone: "06 8550128",
    whatsapp: "",
    email: "",
  },

  map: {
    embedSrc: "https://www.google.com/maps?q=Via+Ginori+7+Roma&output=embed",
  },

  socials: {
    instagram: "",
    facebook: "",
    tiktok: "",
    website: "",
  },

  footer: {
    text: "La Casa sugli Alberi — Testaccio, Roma",
  },
};
