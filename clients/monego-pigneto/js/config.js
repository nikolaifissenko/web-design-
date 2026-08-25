// Demo per Monego Pigneto — dati verificati: nome, indirizzo, telefono,
// orari, elenco trattamenti, Instagram/Facebook ufficiali (Treatwell,
// EsteticaELavoro, directory locali).
// PLACEHOLDER: nessuna foto reale disponibile — le immagini in images/ sono
// segnaposto (etichettate "FOTO REALE QUI"). Sostituire prima di inviare il
// link al cliente. Prezzi trattamenti non pubblicati online: confermare in
// negozio (vedi _lead.md).

const SITE_CONFIG = {
  business: {
    name: "Monego Pigneto",
    tagline: "Centro estetico nel cuore del Pigneto",
    logoText: "MP",
    logoImage: "",
  },

  theme: {
    primary: "#8a3f5c",
    accent: "#2e2230",
    font: "'Poppins', sans-serif",
  },

  hero: {
    heading: "Benvenuti da {{business.name}}",
    subheading: "Trattamenti viso, corpo e benessere nel quartiere Pigneto",
    backgroundImage: "images/hero-placeholder.svg",
    ctaText: "Prenota un trattamento",
    ctaLink: "#contact",
  },

  about: {
    heading: "Chi siamo",
    text: "Monego Pigneto è un centro estetico di riferimento nel quartiere, con trattamenti viso e corpo, manicure, pedicure e solarium, pensati per la cura e il benessere di ogni cliente.",
    image: "images/about-placeholder.svg",
  },

  offerings: {
    heading: "Trattamenti",
    items: [
      { name: "Trattamenti viso", description: "Pulizia, trattamenti anti-età e per ogni tipo di pelle", price: "" },
      { name: "Trattamenti corpo", description: "Percorsi benessere e rimodellanti", price: "" },
      { name: "Manicure e pedicure", description: "Cura e bellezza di mani e piedi", price: "" },
      { name: "Solarium", description: "Abbronzatura tutto l'anno", price: "" },
    ],
  },

  gallery: {
    heading: "Galleria",
    images: ["images/gallery-1.svg", "images/gallery-2.svg", "images/gallery-3.svg"],
  },

  hours: {
    heading: "Orari",
    schedule: [
      { day: "Lunedì", hours: "09:30 - 20:30" },
      { day: "Martedì", hours: "09:30 - 20:30" },
      { day: "Mercoledì", hours: "09:30 - 20:30" },
      { day: "Giovedì", hours: "09:30 - 20:30" },
      { day: "Venerdì", hours: "09:30 - 20:30" },
      { day: "Sabato", hours: "09:30 - 20:30" },
      { day: "Domenica", hours: "Chiuso" },
    ],
  },

  contact: {
    heading: "Contattaci",
    address: "Via Erasmo Gattamelata, 100, Roma",
    phone: "06 27801246",
    whatsapp: "324 605 0090",
    email: "",
  },

  map: {
    embedSrc: "https://www.google.com/maps?q=Via+Erasmo+Gattamelata+100+Roma&output=embed",
  },

  socials: {
    instagram: "https://www.instagram.com/monegopigneto/",
    facebook: "https://www.facebook.com/monegopigneto/",
    tiktok: "",
    website: "",
  },

  footer: {
    text: "Monego Pigneto — Roma",
  },
};
