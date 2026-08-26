// Demo per Tanto pè Magnà — dati verificati: nome, indirizzo, telefono
// (PagineBianche/PagineGialle), storia/stile (RomaToday, Groupon,
// Luciano Pignataro Wine Blog), Facebook.
// Sito attuale (tantopemagna.it) risulta MORTO — il dominio non si
// risolve più (verificato via DNS/curl). Peggio che non averne uno.
// Logo e palette (nero/bianco) presi dal vero profilo Instagram — vedi
// _lead.md. Instagram stesso resta irraggiungibile da fetch automatico
// (SPA lato client, nessuna foto statica nell'HTML) — confermato di
// nuovo. TUTTE le foto sono ora reali (nessuna foto stock rimasta):
// hero.jpg = esterno vero della trattoria (insegna "TRATTORIA", tavoli
// all'aperto), about.jpg = piatto da un articolo RomaToday dedicato al
// locale, gallery-1/2 = foto reali di clienti (cacio e pepe, polpette)
// da piatti.menu, gallery-3 = tavolo con la tovaglietta di carta
// stampata "TANTO PE MAGNA" ben visibile. Tutte scaricate da fonti
// pubbliche (recensioni/aggregatori), non da Instagram direttamente.
// Prezzi non pubblicati online: confermare in loco.

const SITE_CONFIG = {
  business: {
    name: "Tanto pè Magnà",
    tagline: "Cucina romana tradizionale nel cuore della Garbatella",
    logoText: "TM",
    logoImage: "images/logo.jpg",
  },

  theme: {
    primary: "#161616",
    accent: "#2b2b2b",
    font: "'Poppins', sans-serif",
    headingFont: "'Permanent Marker', cursive",
  },

  hero: {
    heading: "Benvenuti da {{business.name}}",
    subheading: "Piatti della tradizione romana a prezzi genuini, nel cuore della Garbatella",
    backgroundImage: "images/hero.jpg",
    ctaText: "Prenota un tavolo",
    ctaLink: "#contact",
  },

  about: {
    heading: "Chi siamo",
    text: "Tanto pè Magnà è una trattoria a conduzione familiare nel cuore della Garbatella, dove si mangia la vera cucina romana in un'atmosfera semplice e genuina, a prezzi onesti.",
    image: "images/about.jpg",
  },

  offerings: {
    heading: "Menu",
    items: [
      { name: "Cacio e pepe", description: "Il classico della tradizione romana", price: "" },
      { name: "Amatriciana", description: "Guanciale, pomodoro e pecorino", price: "" },
      { name: "Carbonara", description: "Uova, guanciale e pecorino romano", price: "" },
      { name: "Coda alla vaccinara", description: "Piatto storico della cucina romana", price: "" },
      { name: "Trippa alla romana", description: "Un grande classico del quinto quarto", price: "" },
    ],
  },

  gallery: {
    heading: "Galleria",
    images: ["images/gallery-1.jpg", "images/gallery-2.jpg", "images/gallery-3.jpg"],
  },

  hours: {
    heading: "Orari",
    schedule: [
      { day: "Lunedì", hours: "12:45 - 14:30, 19:45 - 22:30" },
      { day: "Martedì", hours: "12:45 - 14:30, 19:45 - 22:30" },
      { day: "Mercoledì", hours: "12:45 - 14:30, 19:45 - 22:30" },
      { day: "Giovedì", hours: "12:45 - 14:30, 19:45 - 22:30" },
      { day: "Venerdì", hours: "12:45 - 14:30, 19:45 - 22:30" },
      { day: "Sabato", hours: "12:45 - 14:30, 19:45 - 22:30" },
      { day: "Domenica", hours: "Chiuso" },
    ],
  },

  contact: {
    heading: "Contattaci",
    address: "Via Giustino de Jacobis, 9/15, Garbatella, 00154 Roma",
    phone: "06 5160 7422",
    whatsapp: "",
    email: "",
  },

  map: {
    embedSrc: "https://www.google.com/maps?q=Via+Giustino+de+Jacobis+9+Roma&output=embed",
  },

  socials: {
    instagram: "",
    facebook: "https://www.facebook.com/146635089389434",
    tiktok: "",
    website: "",
  },

  footer: {
    text: "Tanto pè Magnà — Garbatella, Roma",
  },
};
