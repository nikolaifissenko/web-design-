// Demo per Vetrate d'Arte Giuliani — dati verificati: indirizzo,
// telefono, email, storia (Fondazione Cologni dei Mestieri d'Arte,
// Turismo Roma). Sito reale (vetrategiuliani.com) risultato HTTP 503
// (irraggiungibile) a ogni verifica in questa sessione — da riverificare,
// ma un problema serio comunque.
// Nessun logo reale trovato (nessuna pagina con un marchio isolabile,
// Instagram/Facebook irraggiungibili da fetch automatico come da prassi
// consolidata) — disegnata un'icona a rosone/vetrata (PIL, non IA
// generativa d'immagine) usando i colori reali presi dalle foto vere
// del laboratorio, non una palette inventata.
// Foto TUTTE reali, dall'intervista Fondazione Cologni dei Mestieri
// d'Arte (fotografia professionale, servizio dedicato): hero = interno
// del laboratorio con le vetrate appese, about = l'artigiana al lavoro
// sul tavolo luminoso, gallery-1/2 = dettagli di lavorazione e una
// vetrata finita raffigurante una figura sacra. Nessuna foto stock.

const SITE_CONFIG = {
  business: {
    name: "Vetrate d'Arte Giuliani",
    tagline: "Vetrate artistiche e restauro a Roma dal 1900",
    logoText: "VG",
    logoImage: "images/logo.png",
  },

  theme: {
    primary: "#7a2e2e",
    accent: "#2e5f6b",
    font: "'Poppins', sans-serif",
    headingFont: "'Playfair Display', serif",
    mood: "editorial",
  },

  hero: {
    heading: "Benvenuti da {{business.name}}",
    subheading: "Vetrate artistiche, restauro e decorazioni in vetro a Trastevere dal 1900",
    backgroundImage: "images/hero.jpg",
    ctaText: "Contattaci",
    ctaLink: "#contact",
  },

  about: {
    heading: "Chi siamo",
    text: "Vetrate d'Arte Giuliani lavora il vetro artistico e restaura vetrate storiche dal 1900, fondata da Giulio Cesare Giuliani e oggi guidata da Elsa Nocentini. Un laboratorio che ha realizzato vetrate anche per la Città del Vaticano, con clientela italiana e internazionale.",
    image: "images/about.jpg",
  },

  offerings: {
    heading: "Lavorazioni",
    items: [
      { name: "Vetrate artistiche su misura", description: "Creazioni originali per case e locali", price: "" },
      { name: "Restauro di vetrate storiche", description: "Interventi su vetrate d'epoca e religiose", price: "" },
      { name: "Decorazioni Tiffany", description: "Complementi d'arredo in vetro colorato", price: "" },
      { name: "Vetrate religiose", description: "Realizzazioni per chiese e istituzioni", price: "" },
    ],
  },

  gallery: {
    heading: "Galleria",
    images: ["images/gallery-1.jpg", "images/gallery-2.jpg", "images/gallery-3.jpg"],
  },

  hours: {
    heading: "Orari",
    schedule: [
      { day: "Lunedì", hours: "10:00 - 13:00, 14:30 - 18:00" },
      { day: "Martedì", hours: "10:00 - 13:00, 14:30 - 18:00" },
      { day: "Mercoledì", hours: "10:00 - 13:00, 14:30 - 18:00" },
      { day: "Giovedì", hours: "10:00 - 13:00, 14:30 - 18:00" },
      { day: "Venerdì", hours: "10:00 - 13:00, 14:30 - 18:00" },
      { day: "Sabato", hours: "Su appuntamento" },
      { day: "Domenica", hours: "Chiuso" },
    ],
  },

  contact: {
    heading: "Contattaci",
    address: "Via Garibaldi 55/A, Trastevere, 00153 Roma",
    phone: "06 5809051",
    whatsapp: "",
    email: "info@vetrategiuliani.com",
  },

  map: {
    embedSrc: "https://www.google.com/maps?q=Via+Garibaldi+55+Roma&output=embed",
  },

  socials: {
    instagram: "",
    facebook: "https://www.facebook.com/artedellavetrata/",
    tiktok: "",
    website: "https://www.vetrategiuliani.com/",
  },

  footer: {
    text: "Vetrate d'Arte Giuliani — Trastevere, Roma, dal 1900",
  },
};
