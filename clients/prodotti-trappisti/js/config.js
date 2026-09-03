// Demo per La Bottega degli Sfizi / I Prodotti Trappisti (Via Appia
// Nuova 522/c, Roma). Il loro dominio storico (prodottitrappisti.it) è
// scaduto e ora fa un redirect 301 verso un sito medico completamente
// estraneo: la loro presenza online reale non esiste più. Email reale
// confermata su due fonti indipendenti (PagineBianche e un secondo
// elenco aggregatore): iprodottitrappisti@gmail.com.
//
// FOTO: tutte reali, nessuna stock. hero.jpg è la vetrina reale del
// negozio in Via Appia Nuova, con l'insegna "Prodotti Trappisti -
// Vendita Diretta" chiaramente leggibile, conferma diretta che è il
// loro negozio. Le altre foto (about, gallery-1..4) mostrano prodotti
// e interni reali del negozio, fonte: Yelp (recensioni con foto reali
// di clienti).
//
// LOGO: nessun logo pulito trovato. Per questo è stata disegnata da
// zero un'icona a forma di vasetto (miele/confetture, prodotti tipici
// dei monasteri), non generata da IA, con colori caldi ispirati alla
// vetrina reale (ambra, bordeaux, crema). Vedi images/logo.svg.

const SITE_CONFIG = {
  business: {
    name: "Prodotti Trappisti",
    tagline: "Prodotti monastici a Roma: miele, liquori, confetture e dolci dei monaci",
    logoText: "PT",
    logoImage: "images/logo.svg",
  },

  theme: {
    primary: "#6e2f28",
    accent: "#cf9a2e",
    font: "'Poppins', sans-serif",
    headingFont: "'Yeseva One', serif",
    mood: "vintage",
  },

  hero: {
    heading: "Benvenuti da {{business.name}}",
    subheading: "Vendita diretta di prodotti monastici, dal 1970 circa nel quartiere",
    backgroundImage: "images/hero.jpg",
    ctaText: "Vieni a trovarci",
    ctaLink: "#contact",
  },

  about: {
    heading: "Chi siamo",
    text: "La Bottega degli Sfizi, conosciuta da tutti come I Prodotti Trappisti, vende da decenni prodotti realizzati nei monasteri: miele, liquori, confetture, cioccolato e cosmetici di produzione trappista, cistercense e benedettina. Una selezione curata, segnalata anche dalla guida Gambero Rosso, in un negozio di quartiere sull'Appia Nuova.",
    image: "images/about.jpg",
  },

  offerings: {
    heading: "I nostri prodotti",
    items: [
      { name: "Miele e confetture monastiche", description: "Prodotti realizzati nei monasteri trappisti e benedettini", price: "" },
      { name: "Liquori dei monaci", description: "Una selezione di liquori di produzione monastica", price: "" },
      { name: "Cioccolato e dolci", description: "Specialità dolciarie di origine monastica", price: "" },
      { name: "Cosmetici naturali", description: "Prodotti per la cura della persona di produzione monastica", price: "" },
    ],
  },

  gallery: {
    heading: "Galleria",
    images: ["images/gallery-1.jpg", "images/gallery-2.jpg", "images/gallery-3.jpg", "images/gallery-4.jpg"],
  },

  hours: {
    heading: "Orari",
    schedule: [
      { day: "Lunedì - Sabato", hours: "9:00 - 13:00, 16:00 - 20:00" },
      { day: "Domenica", hours: "Chiuso" },
    ],
  },

  contact: {
    heading: "Contattaci",
    address: "Via Appia Nuova, 522/c, 00179 Roma",
    phone: "06 9970 4755",
    whatsapp: "",
    email: "iprodottitrappisti@gmail.com",
  },

  map: {
    embedSrc: "https://www.google.com/maps?q=Via+Appia+Nuova+522+Roma&output=embed",
  },

  socials: {
    instagram: "https://www.instagram.com/iprodottitrappisti/",
    facebook: "",
    tiktok: "",
    website: "",
  },

  footer: {
    text: "Prodotti Trappisti: vendita diretta di prodotti monastici a Roma.",
  },
};
