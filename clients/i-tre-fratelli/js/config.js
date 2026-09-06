// Demo per Ristorante I Tre Fratelli, Piazza Giovanni da Triora 2,
// Garbatella, Roma. Aperto dal 1996, gestito dai tre fratelli Franco,
// Mario e Attilio (oggi con lo chef Mario Pepe). Indirizzo e telefono
// (06 5110604) confermati su TheFork, PagineGialle, Sluurpy,
// incrociati tra loro. Il vecchio sito proprio
// (ristoranteitrefratelli.it) ha **zero risoluzione DNS**, confermato
// con `getent hosts`: dominio morto, non solo trascurato. Email reale
// confermata: itrefratelli.garbatella@gmail.com (trovata su Mycia.it,
// coerente con il nome del quartiere). Instagram confermato e reale,
// gestito dal locale: @ristoranteitrefratelli (3.603 follower, bio con
// lo stesso numero di telefono). Facebook confermato e reale
// ("I Tre Fratelli", Garbatella).
//
// FOTO: tutte reali, nessuna stock. Fonte: galleria fotografica
// pubblica su Sluurpy (menu.sluurpy.it), foto genuine caricate dagli
// utenti, verificate come JPEG reali, nessun watermark. hero.jpg = una
// vera pizza su tovaglia a quadri rossi, il classico trattoria romana.
// about.jpg = un vero supplì fritto. gallery-1.jpg = vere polpette al
// sugo con birra. gallery-2.jpg = veri spaghetti con le cozze.
// gallery-3.jpg = una vera coda alla vaccinara/spezzatino.
//
// LOGO: nessun logo grafico trovato, solo il nome scritto per esteso.
// Instagram/Facebook non fetchabili in automatico (app client-rendered,
// per prassi di branding-extraction.md). Fallback legittimo a logoText
// ("TF"), stesso caso di altre piccole trattorie familiari.
//
// COLORI: campionati pixel per pixel dalle foto reali con PIL: marrone
// dorato della crosta della pizza (~#7c655c) come primary, rosso-bruno
// del sugo delle polpette (~#98603c) come accent. Non inventati.
//
// Prezzi non pubblicati per singolo piatto online (solo una fascia di
// prezzo medio aggregata, ~20-30 euro, e una recensione che cita 14
// euro per una cacio e pepe, non un listino completo): lasciati vuoti,
// da confermare in loco.

const SITE_CONFIG = {
  business: {
    name: "I Tre Fratelli",
    tagline: "Trattoria e pizzeria romana alla Garbatella dal 1996",
    logoText: "TF",
    logoImage: "",
  },

  theme: {
    primary: "#7c655c",
    accent: "#98603c",
    font: "'Poppins', sans-serif",
    headingFont: "'Cormorant Garamond', serif",
    mood: "rustic",
  },

  hero: {
    heading: "Benvenuti da {{business.name}}",
    subheading: "Cucina romana e pizza al forno a legna nel cuore della Garbatella, dal 1996",
    backgroundImage: "images/hero.jpg",
    ctaText: "Prenota un tavolo",
    ctaLink: "#contact",
  },

  about: {
    heading: "Chi siamo",
    text: "I Tre Fratelli è una trattoria e pizzeria a conduzione familiare nel cuore della Garbatella, aperta dal 1996. Cucina romana della tradizione, dalla carbonara alla coda alla vaccinara, insieme a una pizza cotta nel forno a legna, in un ambiente accogliente e informale.",
    image: "images/about.jpg",
  },

  offerings: {
    heading: "Menu",
    items: [
      { name: "Polpette al sugo", description: "La ricetta di casa", price: "" },
      { name: "Spaghetti alle cozze", description: "Con pomodoro fresco", price: "" },
      { name: "Coda alla vaccinara", description: "Il grande classico romano", price: "" },
      { name: "Cacio e pepe", description: "Essenziale, alla romana", price: "" },
      { name: "Supplì", description: "Fritti, croccanti fuori e filanti dentro", price: "" },
      { name: "Pizza al forno a legna", description: "Impasto classico, cotta a legna", price: "" },
    ],
  },

  gallery: {
    heading: "Galleria",
    images: ["images/gallery-1.jpg", "images/gallery-2.jpg", "images/gallery-3.jpg"],
  },

  hours: {
    heading: "Orari",
    schedule: [
      { day: "Lun, Mar, Gio - Dom", hours: "12:30 - 14:45, 19:30 - 23:00" },
      { day: "Mercoledì", hours: "Chiuso" },
    ],
  },

  contact: {
    heading: "Contattaci",
    address: "Piazza Giovanni da Triora 2, 00154 Roma",
    phone: "06 5110604",
    whatsapp: "",
    email: "itrefratelli.garbatella@gmail.com",
  },

  map: {
    embedSrc: "https://www.google.com/maps?q=Piazza+Giovanni+da+Triora+2+Roma&output=embed",
  },

  socials: {
    instagram: "https://www.instagram.com/ristoranteitrefratelli/",
    facebook: "https://www.facebook.com/ristoranteitrefratelliroma/",
    tiktok: "",
    website: "",
  },

  footer: {
    text: "I Tre Fratelli: trattoria e pizzeria romana alla Garbatella dal 1996.",
  },
};
