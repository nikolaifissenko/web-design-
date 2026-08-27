// Demo per Barbagianni — dati verificati: nome, indirizzo, telefono, orari,
// Instagram/Facebook (RomaToday, Pigneto.it, Instagram/Facebook ufficiali).
// FOTO hero/about: reali (non stock) — da un servizio di RomaToday su Ali
// Can/Barbagianni (barbagianni-barbiere-curdo-pigneto.html): hero = l'ingresso
// vero del negozio con l'insegna a bandiera, about = un ritratto reale di
// Ali Can seduto dentro al negozio (le pareti verde/senape sullo sfondo sono
// le vere pareti del locale). Gallery resta stock (Unsplash, licenza
// libera) — nessun'altra foto verificabile trovata. Sostituire tutto con
// foto vere se/quando il cliente compra il sito (vedi _lead.md per i
// crediti fonte). Prezzi dei servizi non pubblicati online: confermare in
// negozio prima di pubblicarli.
// Logo e palette (nero/bianco) presi dal vero profilo Instagram
// @barbagianni_haircuts_shaves_ — vedi _lead.md.

const SITE_CONFIG = {
  business: {
    name: "Barbagianni",
    tagline: "Barbiere e parrucchiere nel cuore del Pigneto",
    logoText: "BG",
    logoImage: "images/logo.jpg",
  },

  theme: {
    primary: "#161616",
    accent: "#2e2b28",
    font: "'Poppins', sans-serif",
    headingFont: "'Oswald', sans-serif",
    mood: "bold",
  },

  hero: {
    heading: "Benvenuti da {{business.name}}",
    subheading: "Taglio, barba e tanto altro a due passi dall'isola pedonale del Pigneto",
    backgroundImage: "images/hero.jpg",
    ctaText: "Prenota un taglio",
    ctaLink: "#contact",
  },

  about: {
    heading: "La nostra storia",
    text: "Barbagianni è la barberia di Alì Can, rifugiato politico curdo che da anni vive nel quartiere Pigneto. Insieme a un altro giovane barbiere curdo, taglia capelli e barbe per uomini e donne. Con il tempo il negozio è diventato un punto di ritrovo per il quartiere, tra eventi e iniziative di comunità.",
    image: "images/about.jpg",
  },

  offerings: {
    heading: "Servizi",
    items: [
      { name: "Taglio uomo", description: "Taglio classico o moderno, sfumature comprese", price: "" },
      { name: "Taglio + barba", description: "Taglio e rifinitura barba in un unico servizio", price: "" },
      { name: "Barba", description: "Rifinitura o rasatura completa", price: "" },
      { name: "Taglio donna", description: "Taglio e piega", price: "" },
    ],
  },

  gallery: {
    heading: "Galleria",
    images: ["images/gallery-1.jpg", "images/gallery-2.jpg", "images/gallery-3.jpg"],
  },

  hours: {
    heading: "Orari",
    schedule: [
      { day: "Lunedì", hours: "09:00 - 20:00" },
      { day: "Martedì", hours: "09:00 - 20:00" },
      { day: "Mercoledì", hours: "09:00 - 20:00" },
      { day: "Giovedì", hours: "09:00 - 20:00" },
      { day: "Venerdì", hours: "09:00 - 20:00" },
      { day: "Sabato", hours: "09:00 - 20:00" },
      { day: "Domenica", hours: "Chiuso" },
    ],
  },

  contact: {
    heading: "Contattaci",
    address: "Via del Pigneto, 91, 00176 Roma",
    phone: "06 86 144 767",
    whatsapp: "350 805 4891",
    email: "",
  },

  map: {
    embedSrc: "https://www.google.com/maps?q=Via+del+Pigneto+91+Roma&output=embed",
  },

  socials: {
    instagram: "https://www.instagram.com/barbagianni_haircuts_shaves_/",
    facebook: "https://www.facebook.com/61562796640435/",
    tiktok: "",
    website: "",
  },

  footer: {
    text: "Barbagianni — Pigneto, Roma",
  },
};
