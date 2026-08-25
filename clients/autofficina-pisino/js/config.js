// Demo per Autofficina Pisino (Novacar Service Pisino Srl) — dati
// verificati: nome, indirizzo, telefono, email, orari, servizi (dal sito
// attuale autofficinapisino.com e schede DEKRA/Virgilio).
// PLACEHOLDER: nessuna foto reale disponibile — le immagini in images/ sono
// segnaposto (etichettate "FOTO REALE QUI"). Sostituire prima di inviare il
// link al cliente. Prezzi non pubblicati online: confermare in officina
// (vedi _lead.md).

const SITE_CONFIG = {
  business: {
    name: "Autofficina Pisino",
    tagline: "Officina meccanica ed elettrauto a Roma, zona Collatina",
    logoText: "AP",
    logoImage: "",
  },

  theme: {
    primary: "#c0392b",
    accent: "#20242b",
    font: "'Poppins', sans-serif",
  },

  hero: {
    heading: "Benvenuti da {{business.name}}",
    subheading: "Diagnosi elettronica, riparazioni meccaniche, gomme e revisioni in zona Collatina",
    backgroundImage: "images/hero-placeholder.svg",
    ctaText: "Prenota un intervento",
    ctaLink: "#contact",
  },

  about: {
    heading: "Chi siamo",
    text: "Autofficina Pisino (Novacar Service Pisino) è un'officina storica del quartiere Collatino, con diagnosi elettronica e computerizzata, riparazione e manutenzione di impianti GPL, servizio gommista, revisioni e noleggio auto.",
    image: "images/about-placeholder.svg",
  },

  offerings: {
    heading: "Servizi",
    items: [
      { name: "Diagnosi elettronica", description: "Diagnosi computerizzata di ogni impianto", price: "" },
      { name: "Riparazioni meccaniche", description: "Manutenzione ordinaria e straordinaria", price: "" },
      { name: "Impianti GPL", description: "Riparazione e manutenzione", price: "" },
      { name: "Gommista", description: "Cambio e riparazione gomme", price: "" },
      { name: "Revisioni", description: "Centro autorizzato", price: "" },
      { name: "Noleggio auto", description: "Servizio di noleggio disponibile", price: "" },
    ],
  },

  gallery: {
    heading: "Galleria",
    images: ["images/gallery-1.svg", "images/gallery-2.svg", "images/gallery-3.svg"],
  },

  hours: {
    heading: "Orari",
    schedule: [
      { day: "Lunedì", hours: "08:00 - 19:30" },
      { day: "Martedì", hours: "08:00 - 19:30" },
      { day: "Mercoledì", hours: "08:00 - 19:30" },
      { day: "Giovedì", hours: "08:00 - 19:30" },
      { day: "Venerdì", hours: "08:00 - 19:30" },
      { day: "Sabato", hours: "08:00 - 13:00" },
      { day: "Domenica", hours: "Chiuso" },
    ],
  },

  contact: {
    heading: "Contattaci",
    address: "Via Pisino, 115, 00177 Roma",
    phone: "06 51601974",
    whatsapp: "333 470 8369",
    email: "novacarservicepisino@gmail.com",
  },

  map: {
    embedSrc: "https://www.google.com/maps?q=Via+Pisino+115+Roma&output=embed",
  },

  socials: {
    instagram: "",
    facebook: "https://www.facebook.com/autofficinapisino/",
    tiktok: "",
    website: "",
  },

  footer: {
    text: "Autofficina Pisino — Roma",
  },
};
