// Demo per Terracromata, studio d'arte ceramica (Via Tembien 9-13, Roma,
// zona Nomentano). Fondato nel 1984 da Cinzia Catena insieme a Speranza
// Neri, oggi ditta individuale portata avanti da Cinzia Catena dal 2014.
// Il loro sito reale (terracromata.it) è vivo ma datato: tema WordPress
// "Themify Ultra" del 2018, nessuna cura di impaginazione, solo 3 foto
// caricate sulla home in mezzo a testo segnaposto.
//
// FOTO: tutte reali, nessuna stock. Fonte: pagine interne del loro
// stesso sito (chi-siamo, restauro, contatti), fetchate direttamente.
// hero.jpg e gallery-4.jpg sono foto panoramiche reali del laboratorio e
// della vetrina in Via Tembien (insegna "STUDIO D'ARTE CERAMICA" visibile
// nella seconda). about.jpg e gallery-3.jpg ritraggono Cinzia Catena al
// tornio nel suo laboratorio. gallery-1.jpg e gallery-2.jpg sono due
// ceramiche maiolicate reali fotografate durante un restauro (una
// giara e una brocca, entrambe con crepe visibili in fase di
// ricomposizione, a riprova del lavoro di restauro che svolgono).
//
// LOGO: esiste già un logo reale e riusabile. Il loro sito usa un
// wordmark orizzontale "Terracromata" troppo largo per lo slot
// circolare, ma a sinistra del wordmark c'è un'icona a spirale
// autonoma, già quadrata, in un vero gradiente cotto-turchese-viola.
// Ritagliata direttamente dal file PNG originale del loro sito
// (logo-multicolore.png), non ridisegnata: un ritaglio pulito, non
// un redesign, perché l'icona era già perfettamente riusabile da sola.
// Vedi images/logo.png. Colori tema campionati pixel per pixel dalla
// stessa icona: turchese ~#2c6f8e, terracotta ~#a85a2e.

const SITE_CONFIG = {
  business: {
    name: "Terracromata",
    tagline: "Studio d'arte ceramica a Roma dal 1984",
    logoText: "T",
    logoImage: "images/logo.png",
  },

  theme: {
    primary: "#2c6f8e",
    accent: "#a85a2e",
    font: "'Poppins', sans-serif",
    headingFont: "'Playfair Display', serif",
    mood: "editorial",
  },

  hero: {
    heading: "Benvenuti da {{business.name}}",
    subheading: "Laboratorio e scuola di ceramica artistica nel cuore di Roma, dal 1984",
    backgroundImage: "images/hero.jpg",
    ctaText: "Vieni a trovarci",
    ctaLink: "#contact",
  },

  about: {
    heading: "Chi siamo",
    text: "Terracromata nasce nel 1984 a Roma per volontà di Cinzia Catena e Speranza Neri, unite dalla passione per la lavorazione della ceramica. Da oltre quarant'anni il laboratorio in Via Tembien unisce ricerca artistica e tecnica artigianale, tra pezzi unici, restauri e corsi per ogni livello. Oggi lo studio è portato avanti da Cinzia Catena, che lavora ancora ogni giorno al tornio insieme ai suoi allievi.",
    image: "images/about.jpg",
  },

  offerings: {
    heading: "I nostri servizi",
    items: [
      { name: "Corsi di ceramica", description: "Lezioni individuali e di gruppo, per principianti e livelli avanzati", price: "" },
      { name: "Produzione artistica", description: "Pezzi unici e oggetti su commissione, dal tornio alla decorazione", price: "" },
      { name: "Restauro ceramiche", description: "Ricomposizione e restauro di maioliche e ceramiche antiche", price: "" },
      { name: "Spedizioni", description: "Le opere realizzate in laboratorio possono essere spedite in tutta Italia", price: "" },
    ],
  },

  gallery: {
    heading: "Galleria",
    images: ["images/gallery-1.jpg", "images/gallery-2.jpg", "images/gallery-3.jpg", "images/gallery-4.jpg"],
  },

  hours: {
    heading: "Orari",
    schedule: [
      { day: "Lunedì", hours: "16:00 - 19:30" },
      { day: "Martedì - Venerdì", hours: "10:00 - 13:00, 16:00 - 19:30" },
      { day: "Sabato", hours: "10:00 - 13:00" },
      { day: "Domenica", hours: "Chiuso" },
    ],
  },

  contact: {
    heading: "Contattaci",
    address: "Via Tembien, 9-13, 00199 Roma",
    phone: "06 8607116",
    whatsapp: "",
    email: "info@terracromata.it",
  },

  map: {
    embedSrc: "https://www.google.com/maps?q=Via+Tembien+9+Roma&output=embed",
  },

  socials: {
    instagram: "",
    facebook: "",
    tiktok: "",
    website: "",
  },

  footer: {
    text: "Terracromata: studio d'arte ceramica a Roma, dal 1984.",
  },
};
