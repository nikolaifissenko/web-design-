// Demo per Osteria Moscatelli (Trattoria Moscatelli), Via Nomentana 944,
// zona Ponte Mammolo, Roma. Attiva dal 1936 (dato confermato su
// PagineGialle: "Ristorante Moscatelli dal 1936", e sull'account
// Instagram ufficiale). Indirizzo e telefono (06 8274778) confermati su
// turismoroma.it, Virgilio Aziende, PagineGialle, incrociati tra loro.
// Nessun sito proprio trovato: solo pagine su piattaforme terze
// (TheFork, Yelp, Sluurpy, piatti.menu). Instagram confermato e reale,
// account gestito dal locale (@osteriamoscatelli, bio con entrambi i
// numeri di telefono). Facebook confermato e reale ("Osteria Moscatelli",
// Roma). Nessuna email indipendentemente confermata.
//
// FOTO: tutte reali, nessuna stock. Fonte: galleria fotografica pubblica
// su Sluurpy (menu.sluurpy.it), foto genuine caricate dagli utenti,
// verificate come JPEG reali (non pagine di blocco), nessun watermark.
// hero.jpg = un vero carciofo alla giudia con carne alla griglia sullo
// sfondo. about.jpg = un vero tagliere di salumi e prosciutto.
// gallery-1.jpg = una vera zuppa di fagioli con crostini. gallery-2.jpg
// = un vero piatto di rigatoni al sugo. gallery-3.jpg = un vero piatto
// di rigatoni alla gricia/amatriciana con guanciale e pecorino.
//
// LOGO: nessun logo grafico trovato, solo il nome scritto per esteso.
// Instagram/Facebook non fetchabili in automatico (app client-rendered,
// per prassi di branding-extraction.md). Fallback legittimo a logoText
// ("OM"), stesso caso di altre piccole trattorie familiari.
//
// COLORI: campionati pixel per pixel dalle foto reali con PIL: marrone
// scuro/bruciato del carciofo alla giudia (~#3a1710) come primary, rosa
// caldo del prosciutto (~#7d523f) come accent. Non inventati.
//
// Prezzi non pubblicati per singolo piatto online (solo una fascia di
// prezzo medio aggregata, ~20-30 euro, non un prezzo per piatto):
// lasciati vuoti, da confermare in loco.

const SITE_CONFIG = {
  business: {
    name: "Osteria Moscatelli",
    tagline: "Cucina romana a Ponte Mammolo dal 1936",
    logoText: "OM",
    logoImage: "",
  },

  theme: {
    primary: "#3a1710",
    accent: "#7d523f",
    font: "'Poppins', sans-serif",
    headingFont: "'Cormorant Garamond', serif",
    mood: "rustic",
  },

  hero: {
    heading: "Benvenuti da {{business.name}}",
    subheading: "Cucina romana genuina a Ponte Mammolo, la stessa insegna dal 1936",
    backgroundImage: "images/hero.jpg",
    ctaText: "Prenota un tavolo",
    ctaLink: "#contact",
  },

  about: {
    heading: "Chi siamo",
    text: "Osteria Moscatelli serve cucina romana e di mare a Ponte Mammolo dal 1936. Sale accoglienti e più ambienti per un pasto in famiglia o tra amici, con griglia, pesce e i grandi classici della tradizione capitolina, dal carciofo alla giudia ai taglieri di salumi.",
    image: "images/about.jpg",
  },

  offerings: {
    heading: "Menu",
    items: [
      { name: "Carciofo alla giudia", description: "Fritto secondo la tradizione romana", price: "" },
      { name: "Rigatoni all'amatriciana", description: "Guanciale, pomodoro e pecorino romano", price: "" },
      { name: "Zuppa di fagioli", description: "Con crostini di pane casereccio", price: "" },
      { name: "Tagliere di salumi", description: "Selezione di salumi e prosciutto", price: "" },
      { name: "Fritto misto", description: "Di pesce e verdure", price: "" },
      { name: "Grigliata di carne", description: "Alla brace, tagli misti", price: "" },
    ],
  },

  gallery: {
    heading: "Galleria",
    images: ["images/gallery-1.jpg", "images/gallery-2.jpg", "images/gallery-3.jpg"],
  },

  hours: {
    heading: "Orari",
    schedule: [
      { day: "Martedì - Domenica", hours: "12:30 - 14:30, 19:30 - 22:30" },
      { day: "Lunedì", hours: "Chiuso" },
    ],
  },

  contact: {
    heading: "Contattaci",
    address: "Via Nomentana 944, 00137 Roma",
    phone: "06 8274778",
    whatsapp: "",
    email: "",
  },

  map: {
    embedSrc: "https://www.google.com/maps?q=Via+Nomentana+944+Roma&output=embed",
  },

  socials: {
    instagram: "https://www.instagram.com/osteriamoscatelli/",
    facebook: "https://www.facebook.com/p/Osteria-Moscatelli-61566384107319/",
    tiktok: "",
    website: "",
  },

  footer: {
    text: "Osteria Moscatelli: cucina romana a Ponte Mammolo dal 1936, Roma.",
  },
};
