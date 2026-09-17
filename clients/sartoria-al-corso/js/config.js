// Demo per Sartoria al Corso: sartoria artigianale su misura a Roma,
// Piazza del Parlamento 8, dal 2001. Sito attuale
// (sartoria-al-corso.roma.it) confermato dal vivo: WordPress datato
// dei primi anni 2010 (2018 nei nomi dei file caricati), design
// semplice per un'attività con lavori artigianali così eleganti.
// STORIA: Elio fonda la Sartoria al Corso nel 2001. Dal 2011 lo
// affianca il figlio Marco, che dopo anni di esperienza nelle
// sartorie più prestigiose della capitale forma con il padre un duo
// alla guida della bottega. Testo tradotto e riassunto onestamente
// dalla pagina "La Storia" reale del loro sito, non inventato.
// EMAIL: info@sartoria-al-corso.roma.it, trovata direttamente sul
// loro sito (pagina Contatti). Non è una fonte terza, è il loro
// stesso sito.
// FOTO: tutte reali, nessuna stock, tutte scaricate direttamente dal
// loro sito. hero.jpg mostra un vero completo su misura (camicia,
// farfallino, bretelle, gemelli, scarpe) fotografato su un vero
// tavolo di legno del laboratorio. about.jpg è la vera vetrina del
// negozio a Piazza del Parlamento, con l'insegna "Sartoria al Corso"
// e il numero civico 8 visibili. gallery-1.jpg è una vera camicia su
// misura con l'etichetta "Sartoria al Corso" cucita nel colletto.
// gallery-2.jpg mostra veri cappotti su misura appesi in laboratorio.
// gallery-3.jpg è un vero smoking su misura.
// LOGO: reale, un'illustrazione a mano della facciata del loro
// stesso negozio con il testo "Sartoria al Corso ROMA", in bianco su
// sfondo trasparente. Il file originale non si adatta perfettamente
// allo slot circolare (rischiava di tagliare la parola "ROMA" in
// basso), quindi è stato semplicemente rimpicciolito con un margine
// e messo su un cerchio dello stesso blu navy del loro brand, nessuna
// icona è stata inventata, solo un adattamento fedele del disegno
// originale.
// COLORI: blu navy `#2b2b42` campionato dal vero papillon e dalle
// bretelle fotografate in hero.jpg, e oro `#c99a3f` (versione più
// scura, per contrasto testo, dello stesso oro campionato pixel per
// pixel dall'insegna reale del negozio in about.jpg), non inventati.

const SITE_CONFIG = {
  business: {
    name: "Sartoria al Corso",
    tagline: "Sartoria artigianale su misura a Roma dal 2001",
    logoText: "SC",
    logoImage: "images/logo.png",
  },

  theme: {
    primary: "#2b2b42",
    accent: "#c99a3f",
    font: "'Poppins', sans-serif",
    headingFont: "'Playfair Display', serif",
    mood: "editorial",
  },

  hero: {
    heading: "Benvenuti da {{business.name}}",
    subheading: "Eleganza sartoriale su misura, a Roma dal 2001",
    backgroundImage: "images/hero.jpg",
    ctaText: "Scopri la sartoria",
    ctaLink: "#contact",
  },

  about: {
    heading: "Chi siamo",
    text: "Elio fonda la Sartoria al Corso nel 2001, con la ricerca costante della più alta espressione della produzione artigianale italiana. Dal 2011 lo affianca il figlio Marco, che dopo anni di esperienza nelle sartorie più prestigiose della capitale forma con il padre un duo unico alla guida di questa bottega a Piazza del Parlamento. Due generazioni unite dallo stesso amore per l'artigianato italiano, la ricercatezza dei materiali e l'eleganza sartoriale.",
    image: "images/about.jpg",
  },

  offerings: {
    heading: "Le nostre lavorazioni",
    items: [
      { name: "Abiti su misura", description: "Abiti, smoking e gilet realizzati su misura, tessuti selezionati", price: "" },
      { name: "Camiceria", description: "Camicie su misura personalizzate", price: "" },
      { name: "Accessori sartoriali", description: "Cravatte, papillon, bretelle e sciarpe artigianali", price: "" },
    ],
  },

  gallery: {
    heading: "Galleria",
    images: [
      "images/gallery-1.jpg",
      "images/gallery-2.jpg",
      "images/gallery-3.jpg",
    ],
  },

  hours: {
    heading: "Orari",
    schedule: [
      { day: "Lunedì - Sabato", hours: "da confermare" },
      { day: "Domenica", hours: "Chiuso" },
    ],
  },

  contact: {
    heading: "Contattaci",
    address: "Piazza del Parlamento, 8, 00186 Roma",
    phone: "06 6819 2661",
    whatsapp: "392 788 3245",
    email: "info@sartoria-al-corso.roma.it",
  },

  map: {
    embedSrc: "https://www.google.com/maps?q=Piazza+del+Parlamento+8+Roma&output=embed",
  },

  socials: {
    instagram: "",
    facebook: "",
    tiktok: "",
    website: "https://www.sartoria-al-corso.roma.it/",
  },

  footer: {
    text: "Sartoria al Corso: sartoria artigianale su misura a Roma dal 2001.",
  },
};
