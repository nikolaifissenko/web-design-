// Demo per "Una Finestra su Monti" B&B — dati verificati: nome, indirizzo
// (bbromamonti.com/it/hotel-rione-monti-roma/), telefono 06 4817640,
// email info@bbromamonti.com. Sito attuale eyeballato in una sessione
// precedente: layout statico e ripetitivo, bottoni social per Google+
// (chiuso dal 2019), testo placeholder "You can add any HTML here"
// ancora visibile sulla pagina live.
// COLORE ripreso dal CSS del sito reale (colore dominante del tema
// WordPress): oro/senape #edb52f — è il loro vero brand, non inventato.
// FOTO: reali, scaricate direttamente dal loro sito (slide-superior.jpg,
// camera-suite, camera-superior, camera-doppia, piazza-navona) — sono le
// vere camere della struttura e una foto reale di Piazza Navona usata
// dal B&B stesso nella loro pagina "location", non stock.
// Logo reale (logo-bb-monti1.png) è una scritta larga "Una finestra su
// Monti" tra virgolette: non riutilizzabile nel cerchio-logo del
// template (verrebbe tagliata a metà), quindi non usato come logoImage.

const SITE_CONFIG = {
  business: {
    name: "Una Finestra su Monti",
    tagline: "B&B nel cuore del rione Monti, a due passi da via Nazionale",
    logoText: "FM",
    logoImage: "",
  },

  theme: {
    primary: "#c9971f",
    accent: "#2c2620",
    font: "'Poppins', sans-serif",
    headingFont: "'Cormorant Garamond', serif",
  },

  hero: {
    heading: "Benvenuti a {{business.name}}",
    subheading: "Un B&B in un palazzo storico nel cuore del rione Monti, il quartiere più antico di Roma",
    backgroundImage: "images/hero.jpg",
    ctaText: "Contattaci",
    ctaLink: "#contact",
  },

  about: {
    heading: "Chi siamo",
    text: "\"Una finestra su Monti\" si trova in un palazzo storico nel cuore del rione Monti, il quartiere più antico di Roma, a pochi passi da via Nazionale e dalla stazione Termini. Camere curate, in un contesto autentico e centralissimo.",
    image: "images/about.jpg",
  },

  offerings: {
    heading: "Le Camere",
    items: [
      { name: "Camera Superior", description: "Elegante e moderna, con testiera imbottita", price: "" },
      { name: "Camera Suite", description: "Ampia e luminosa, con biancheria di qualità", price: "" },
      { name: "Camera Doppia / Uso Singola", description: "Ideale per un soggiorno breve o in solitaria", price: "" },
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
    address: "Rione Monti, vicino Via Nazionale, 00184 Roma",
    phone: "06 4817640",
    whatsapp: "",
    email: "info@bbromamonti.com",
  },

  map: {
    embedSrc: "https://www.google.com/maps?q=Via+Nazionale+Roma+Monti&output=embed",
  },

  socials: {
    instagram: "",
    facebook: "",
    tiktok: "",
    website: "",
  },

  footer: {
    text: "Una Finestra su Monti — Rione Monti, Roma",
  },
};
