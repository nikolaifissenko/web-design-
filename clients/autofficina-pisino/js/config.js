// Demo per Autofficina Pisino (Novacar Service Pisino Srl) — dati
// verificati: nome, indirizzo, telefono, email, orari, servizi (dal sito
// attuale autofficinapisino.com e schede DEKRA/Virgilio).
// LOGO: il loro logo reale (icona auto stilizzata + scritta "AUTOFFICINA
// PISINO" in nero/giallo-senape, 477x290) non ha un punto di taglio pulito
// tra icona e testo — qualsiasi ritaglio rettangolare nel cerchio-logo
// 40x40 del template mostra un pezzo di testo tranciato (verificato
// pixel per pixel: nessuna colonna è "solo icona"). Invece di rinunciare
// al logo, ridisegnata una versione icon-only: una silhouette di auto
// pulita in stile flat, stessi colori reali del marchio (nero `#1a1818`
// carrozzeria, cerchi ruota nel giallo-senape reale `#dcd221` preso dal
// loro logo) — non una foto/ritaglio ma un'icona ridisegnata da zero
// apposta per lo spazio circolare, come farebbe un designer con un
// marchio che non si adatta al formato richiesto. File: images/logo.png.
// COLORE
// reale ripreso dal CSS del loro sito: teal/ciano #68ccd1 (qui leggermente
// scurito per contrasto testo) e il carbone/nero del logo come accent —
// non inventati. FOTO hero/about: le stesse foto presenti sul loro sito
// reale (meccanico sotto il ponte sollevatore, dettaglio ruota) — per
// stile sono fotografia da agenzia/stock, non scatti dell'officina reale,
// ma sono letteralmente le immagini che il cliente ha scelto per
// rappresentarsi online, quindi riprese qui su indicazione di Nikolai
// (coerenza con la loro identità visiva attuale). Gallery resta stock
// (Unsplash, licenza libera) — sostituire tutto con foto vere se/quando
// il cliente compra il sito (vedi _lead.md per i crediti fonte). Prezzi
// non pubblicati online: confermare in officina.

const SITE_CONFIG = {
  business: {
    name: "Autofficina Pisino",
    tagline: "Officina meccanica ed elettrauto a Roma, zona Collatina",
    logoText: "AP",
    logoImage: "images/logo.png",
  },

  theme: {
    primary: "#3a9ca3",
    accent: "#242220",
    font: "'Poppins', sans-serif",
  },

  hero: {
    heading: "Benvenuti da {{business.name}}",
    subheading: "Diagnosi elettronica, riparazioni meccaniche, gomme e revisioni in zona Collatina",
    backgroundImage: "images/hero.jpg",
    ctaText: "Prenota un intervento",
    ctaLink: "#contact",
  },

  about: {
    heading: "Chi siamo",
    text: "Autofficina Pisino (Novacar Service Pisino) è un'officina storica del quartiere Collatino, con diagnosi elettronica e computerizzata, riparazione e manutenzione di impianti GPL, servizio gommista, revisioni e noleggio auto.",
    image: "images/about.jpg",
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
    images: ["images/gallery-1.jpg", "images/gallery-2.jpg", "images/gallery-3.jpg"],
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
