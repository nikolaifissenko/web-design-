// Demo per "A Testaccio da Max" B&B — dati verificati: nome, indirizzo,
// telefono (bed-and-breakfast.it, Expedia, Tripadvisor). NESSUN sito
// ufficiale trovato: solo pagine di rivenditori/aggregatori di hotel
// (italyromehotels.net, it-romehotels.com), non un sito proprio del B&B.
// Dettagli camere (3 camere, wifi cablato, cucina, balcone/patio,
// colazione con caffè/torte/yogurt, pick-up gratuito in stazione)
// confermati da Expedia/Tripadvisor.
// FOTO: stock (Unsplash, licenza libera), non della struttura reale —
// sostituire con foto vere se/quando il cliente compra il sito.

const SITE_CONFIG = {
  business: {
    name: "A Testaccio da Max",
    tagline: "Bed & Breakfast familiare a due passi dal Tevere, a Testaccio",
    logoText: "M",
    logoImage: "",
  },

  theme: {
    primary: "#8a6d1f",
    accent: "#2f3a2a",
    font: "'Poppins', sans-serif",
    headingFont: "'Cormorant Garamond', serif",
  },

  hero: {
    heading: "Benvenuti {{business.name}}",
    subheading: "Camere accoglienti con cucina e balcone, nel quartiere più genuino di Roma",
    backgroundImage: "images/hero.jpg",
    ctaText: "Contattaci",
    ctaLink: "#contact",
  },

  about: {
    heading: "Chi siamo",
    text: "A Testaccio da Max è un piccolo B&B a conduzione familiare, in un quartiere caratteristico sul Tevere, a un passo da Bocca della Verità, Circo Massimo e Foro Romano. Colazione fatta in casa ogni mattina, con caffè buono, torte e yogurt.",
    image: "images/about.jpg",
  },

  offerings: {
    heading: "Le Camere",
    items: [
      { name: "Camera con balcone", description: "Wifi cablato, cucina, balcone o patio privato", price: "" },
      { name: "Camera standard", description: "Comoda e silenziosa, ideale per un soggiorno breve", price: "" },
      { name: "Colazione inclusa", description: "Caffè, torte fatte in casa e yogurt ogni mattina", price: "" },
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
      { day: "Pick-up stazione", hours: "gratuito, su richiesta" },
    ],
  },

  contact: {
    heading: "Contattaci",
    address: "Via Antinori Orazio 7, Testaccio, 00153 Roma",
    phone: "349 2696017",
    whatsapp: "+39 349 2696017",
    email: "",
  },

  map: {
    embedSrc: "https://www.google.com/maps?q=Via+Antinori+Orazio+7+Roma&output=embed",
  },

  socials: {
    instagram: "",
    facebook: "",
    tiktok: "",
    website: "",
  },

  footer: {
    text: "A Testaccio da Max — Testaccio, Roma",
  },
};
