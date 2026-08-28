// Demo per Bottega Mortet. Dati verificati: indirizzo (Via dei
// Portoghesi 18), email, storia (Turismo Roma, La Voce di New York,
// il sito storico stesso). Sito reale (bottegamortet.com) confermato
// datato: menu di navigazione a immagini GIF, tecnologia inizio anni
// 2000. Logo reale (MORTET_LOGO_WEB_MINI_2011.jpg) trovato sul sito
// storico, quasi quadrato, usato direttamente come logoImage, nessun
// ridisegno necessario. Colori (rosso/nero) presi dal vero logo e dal
// sito. Foto TUTTE reali, scaricate dal sito storico stesso (basse
// risoluzioni originali, ~170px, limite del materiale disponibile,
// non stock): hero/gallery-3 = la mano in bronzo del progetto "Mano
// Artigiana" di Dante Mortet, about = collage di ritratti e laboratorio,
// gallery-1 = collage di strumenti/lavorazione a cesello, gallery-2 =
// il palazzo storico dove si trova la bottega. Nessuna foto stock.

const SITE_CONFIG = {
  business: {
    name: "Bottega Mortet",
    tagline: "Laboratorio di cesello e oreficeria a Roma dal 1890",
    logoText: "BM",
    logoImage: "images/logo.png",
  },

  theme: {
    primary: "#8f1f1f",
    accent: "#1a1a1a",
    font: "'Poppins', sans-serif",
    headingFont: "'Playfair Display', serif",
    mood: "editorial",
  },

  hero: {
    heading: "Benvenuti alla {{business.name}}",
    subheading: "Cinque generazioni di cesellatori e orafi nel cuore di Roma, dal 1890",
    backgroundImage: "images/hero.jpg",
    ctaText: "Contattaci",
    ctaLink: "#contact",
  },

  about: {
    heading: "Chi siamo",
    text: "La Bottega Mortet lavora a cesello e oreficeria a Via dei Portoghesi dal 1890, oggi guidata da Dante e Andrea Mortet. Un'attività che ha avuto tra i suoi committenti la Santa Sede e la Presidenza della Repubblica, e che continua la tradizione delle botteghe rinascimentali romane.",
    image: "images/about.jpg",
  },

  offerings: {
    heading: "Lavorazioni",
    items: [
      { name: "Cesello su metalli preziosi", description: "Lavorazione artigianale su commissione", price: "" },
      { name: "Oreficeria e argenteria", description: "Creazioni e restauri su misura", price: "" },
      { name: "Bronzi artistici", description: "Fusione e rifinitura a mano", price: "" },
      { name: "Restauro di opere storiche", description: "Interventi su pezzi antichi e d'epoca", price: "" },
    ],
  },

  gallery: {
    heading: "Galleria",
    images: ["images/gallery-1.jpg", "images/gallery-2.jpg", "images/gallery-3.jpg"],
  },

  hours: {
    heading: "Orari",
    schedule: [
      { day: "Lunedì", hours: "09:30 - 13:00, 15:30 - 19:00" },
      { day: "Martedì", hours: "09:30 - 13:00, 15:30 - 19:00" },
      { day: "Mercoledì", hours: "09:30 - 13:00, 15:30 - 19:00" },
      { day: "Giovedì", hours: "09:30 - 13:00, 15:30 - 19:00" },
      { day: "Venerdì", hours: "09:30 - 13:00, 15:30 - 19:00" },
      { day: "Sabato", hours: "Su appuntamento" },
      { day: "Domenica", hours: "Chiuso" },
    ],
  },

  contact: {
    heading: "Contattaci",
    address: "Via dei Portoghesi 18, 00186 Roma",
    phone: "06 6861629",
    whatsapp: "",
    email: "info@bottegamortet.com",
  },

  map: {
    embedSrc: "https://www.google.com/maps?q=Via+dei+Portoghesi+18+Roma&output=embed",
  },

  socials: {
    instagram: "",
    facebook: "https://www.facebook.com/BottegaMortetdiRoma1889diDanteMorteteAndreaMortet/",
    tiktok: "",
    website: "https://www.bottegamortet.com/",
  },

  footer: {
    text: "Bottega Mortet — Roma, dal 1890",
  },
};
