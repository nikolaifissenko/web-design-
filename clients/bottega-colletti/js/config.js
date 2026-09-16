// Demo per Bottega Colletti: restauro metalli a Roma dal 1920, Borgo
// Vittorio 4, a due passi da San Pietro. Attività individuale
// artigiana di Riccardo Colletti. Sito attuale (bottegacolletti.it)
// confermato dal vivo: tecnicamente funzionante ma con un impianto
// visivo piuttosto anonimo per una bottega con 100+ anni di storia e
// clienti come il Reggimento Corazzieri.
// STORIA: attività di argentatura, doratura e restauro metalli attiva
// dal 1920, festeggiati i 100 anni nel 2020 (badge "100 ANNI 1920-2020"
// presente sul loro stesso sito). Lavorano su argenteria, oggetti
// sacri per chiese (arte sacra) ed equipaggiamento cerimoniale del
// Reggimento Corazzieri (la guardia d'onore del Presidente della
// Repubblica). Testo tradotto e riassunto onestamente dalle pagine
// reali del loro sito, non inventato.
// EMAIL: info@bottegacolletti.it, trovata direttamente sul loro sito
// (footer di ogni pagina, oltre a un indirizzo PEC separato). Non è
// una fonte terza, è il loro stesso sito.
// FOTO: tutte reali, nessuna stock, tutte scaricate direttamente dal
// loro sito. hero.jpg mostra un vero artigiano al lavoro con un
// cannello, con la vecchia insegna smaltata originale "ARGENTATURA
// DORATURA NICHELATURA A. COLLETTI" visibile sullo sfondo. about.jpg
// mostra due veri artigiani (probabilmente due generazioni della
// famiglia) sotto la vera insegna del negozio con gli orari, con un
// diploma di artigianato visibile alle spalle. gallery-1.jpg è un vero
// elmo cerimoniale del Reggimento Corazzieri in fase di restauro/
// lucidatura. gallery-2.jpg mostra un vero artigiano che lucida una
// spada/sciabola cerimoniale antica su una mola. gallery-3.jpg mostra
// vere mani che lucidano una teiera d'argento antica. gallery-4.jpg è
// la vera immagine di copertina della sezione "Arte Sacra" del loro
// sito (un altare di chiesa), usata per rappresentare quella linea di
// servizio, non necessariamente un singolo restauro specifico.
// LOGO: reale, un sigillo circolare pulito ("BOTTEGA COLLETTI 1920"
// con un artigiano al banco disegnato al centro), già naturalmente
// circolare e con un bordo netto: si adatta perfettamente allo slot
// circolare del template con un semplice ritaglio, senza bisogno di
// ridisegnarlo (a differenza di altri casi recenti su questo repo).
// COLORI: blu/grigio ardesia `#3d3d5c` campionato dalla vecchia insegna
// smaltata originale visibile in hero.jpg, e oro `#b8863f` campionato
// dalle vere dorature dell'elmo dei Corazzieri in gallery-1.jpg, non
// inventati.

const SITE_CONFIG = {
  business: {
    name: "Bottega Colletti",
    tagline: "Restauro metalli, argentatura e doratura a Roma dal 1920",
    logoText: "BC",
    logoImage: "images/logo.png",
  },

  theme: {
    primary: "#3d3d5c",
    accent: "#b8863f",
    font: "'Poppins', sans-serif",
    headingFont: "'Playfair Display', serif",
    mood: "editorial",
  },

  hero: {
    heading: "Benvenuti da {{business.name}}",
    subheading: "Argentatura, doratura e restauro metalli a Roma dal 1920",
    backgroundImage: "images/hero.jpg",
    ctaText: "Scopri la bottega",
    ctaLink: "#contact",
  },

  about: {
    heading: "Chi siamo",
    text: "Bottega Colletti restaura, argenta e dora metalli a Roma dal 1920, a Borgo Vittorio, a due passi da San Pietro. Nel 2020 l'attività ha festeggiato cento anni di storia. Lavoriamo su argenteria antica, oggetti sacri per le chiese, ed equipaggiamento cerimoniale, incluso quello del Reggimento Corazzieri, la guardia d'onore del Presidente della Repubblica. Ogni pezzo viene restaurato a mano, con le stesse tecniche artigianali di sempre.",
    image: "images/about.jpg",
  },

  offerings: {
    heading: "Le nostre lavorazioni",
    items: [
      { name: "Argentatura e doratura", description: "Trattamenti artigianali su metalli antichi e moderni", price: "" },
      { name: "Restauro", description: "Restauro e lucidatura di argenteria, oggetti sacri ed equipaggiamento cerimoniale", price: "" },
      { name: "Arte sacra", description: "Restauro di oggetti sacri e arredi per chiese", price: "" },
    ],
  },

  gallery: {
    heading: "Galleria",
    images: [
      "images/gallery-1.jpg",
      "images/gallery-2.jpg",
      "images/gallery-3.jpg",
      "images/gallery-4.jpg",
    ],
  },

  hours: {
    heading: "Orari",
    schedule: [
      { day: "Martedì - Venerdì", hours: "9:00 - 13:00, 14:00 - 18:00" },
      { day: "Lunedì, Sabato e Domenica", hours: "Chiuso" },
    ],
  },

  contact: {
    heading: "Contattaci",
    address: "Borgo Vittorio, 4, 00193 Roma",
    phone: "06 6879574",
    whatsapp: "393 001 3676",
    email: "info@bottegacolletti.it",
  },

  map: {
    embedSrc: "https://www.google.com/maps?q=Borgo+Vittorio+4+Roma&output=embed",
  },

  socials: {
    instagram: "",
    facebook: "",
    tiktok: "",
    website: "https://www.bottegacolletti.it/",
  },

  footer: {
    text: "Bottega Colletti: restauro metalli a Roma dal 1920.",
  },
};
