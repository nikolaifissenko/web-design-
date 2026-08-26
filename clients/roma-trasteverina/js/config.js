// Demo per Roma Trasteverina B&B — dati verificati: nome, indirizzo
// (bed-and-breakfast.it). La pagina Contatti del sito attuale
// (romatrasteverina.com/Contacts.aspx) restituisce HTTP 500 — rotta.
// Sito costruito in ASP.NET WebForms (tecnologia abbandonata da anni),
// nessun tag viewport (non responsive), prenotazioni reindirizzate a
// booking.expert invece di gestirle sul proprio sito.
// COLORI ripresi dal CSS del sito reale (rt_style.css): rosso scuro
// #801c1e e arancio #e78827 — sono il loro vero brand, non inventati.
// FOTO: reali, scaricate dal loro sito (images/slide2_en.jpg,
// slide3_en.jpg, rooms_en.jpg, location_en.jpg) e ritagliate per
// rimuovere le scritte "Comfort & Relax at Rome" / "Rooms" / "Location"
// sovrapposte nell'originale — sono le vere camere e la vera vista sul
// Tevere della struttura, non stock. Logo reale (images/logo.png) è una
// scritta larga "B&B" con ampersand arancio: non riutilizzabile nel
// cerchio-logo del template (verrebbe tagliata a metà), quindi non usato
// come logoImage — il colore/font del brand è comunque ripreso nel tema.

const SITE_CONFIG = {
  business: {
    name: "Roma Trasteverina B&B",
    tagline: "Comfort & Relax a Trastevere, nel cuore di Roma",
    logoText: "RT",
    logoImage: "",
  },

  theme: {
    primary: "#801c1e",
    accent: "#e78827",
    font: "'Poppins', sans-serif",
    headingFont: "'Cormorant Garamond', serif",
  },

  hero: {
    heading: "Benvenuti a {{business.name}}",
    subheading: "Comfort & Relax a Trastevere, a due passi dal Tevere e dal cuore antico di Roma",
    backgroundImage: "images/hero.jpg",
    ctaText: "Contattaci",
    ctaLink: "#contact",
  },

  about: {
    heading: "Chi siamo",
    text: "Roma Trasteverina B&B si trova nel cuore di Trastevere, uno dei quartieri più amati di Roma, a pochi passi dal Tevere, da Piazza Trilussa e dai vicoli caratteristici del rione. Camere curate nei dettagli, per un soggiorno all'insegna del comfort.",
    image: "images/about.jpg",
  },

  offerings: {
    heading: "Le Camere",
    items: [
      { name: "Camera Blu", description: "Con tende in tessuto blu e testiera in tinta", price: "" },
      { name: "Camera Arancio", description: "Calda e accogliente, con tende e biancheria color ambra", price: "" },
    ],
  },

  gallery: {
    heading: "Galleria",
    images: ["images/gallery-1.jpg", "images/gallery-2.jpg"],
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
    address: "Via Luigi Santini 21, Trastevere, 00153 Roma",
    phone: "",
    whatsapp: "",
    email: "",
  },

  map: {
    embedSrc: "https://www.google.com/maps?q=Via+Luigi+Santini+21+Roma&output=embed",
  },

  socials: {
    instagram: "",
    facebook: "",
    tiktok: "",
    website: "",
  },

  footer: {
    text: "Roma Trasteverina B&B — Trastevere, Roma",
  },
};
