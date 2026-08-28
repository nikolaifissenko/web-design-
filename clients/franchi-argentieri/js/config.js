// Demo per Franchi Argentieri — dati verificati dal loro sito attuale
// (franchiargentieri.it, un sito jQuery/FlexSlider circa 2010-2012, non
// responsive, senza HTTPS interno alle pagine interne — mai aggiornato
// da allora, verificato sul markup). Indirizzo, telefono, storia e
// descrizioni prese direttamente da lì (pagine Laboratorio, Restauro,
// Gioielli, Contatti). Nessuna email trovata sul sito reale (solo un
// form di contatto) — outreach quindi solo per telefono/WhatsApp.
// LOGO: reale (logo-franchi.png), ma lo stemma dell'orso è fuso col
// carattere "F" del wordmark — nessun taglio pulito possibile nello slot
// circolare del template (stesso problema descritto in
// scripts/branding-extraction.md). Ridisegnato un'icona pulita
// dell'orso-in-cornice (images/logo.svg) nello stesso rosso mattone
// (#8f332d) campionato a mano dal PNG originale — non un'icona inventata,
// la stessa forma e colore del marchio reale, solo isolata dal testo.
// FOTO: tutte reali, nessuna stock — scaricate direttamente dal sito
// (hero.jpg = anelli in oro/argento lavorati a mano; about.jpg = un
// vassoio d'argento di scuola napoletana del '700 durante un restauro,
// EXIF Olympus confermato; gallery = orecchini, anello con castone
// sfaccettato, ciotoline in argento sbalzato "Bosco Reale", anello con
// pietre colorate "Metalli e Gemme").
// COLORI: neri/antracite (#151516, #1d1e20) e rosso mattone (#8f332d)
// presi dal CSS reale del sito, non inventati.

const SITE_CONFIG = {
  business: {
    name: "Franchi Argentieri",
    tagline: "Bottega orafa e argentiera a due passi da Piazza Navona, dal 1944",
    logoText: "FA",
    logoImage: "images/logo.svg",
  },

  theme: {
    primary: "#8f332d",
    accent: "#232020",
    font: "'Poppins', sans-serif",
    headingFont: "'Cormorant Garamond', serif",
    mood: "boutique",
  },

  hero: {
    heading: "Benvenuti da {{business.name}}",
    subheading: "Gioielli, argenteria e restauro d'arte nel cuore di Roma, tra Piazza Navona e Castel Sant'Angelo",
    backgroundImage: "images/hero.jpg",
    ctaText: "Contattaci",
    ctaLink: "#contact",
  },

  about: {
    heading: "La nostra storia",
    text: "Tutto inizia nella bottega settecentesca di Luigi Valadier, la cui eredità passa ai Pocaterra e poi ai Vitali. Nel 1944, un giovanissimo Adolfo Franchi, appena dieci anni, entra in quella officina e ne eredita i segreti della Scuola Orafa e Argentiera Romana. Oggi i suoi figli, Claudio e Roberto, portano avanti la stessa arte: gioielli originali e restauro di argenti, bronzi e oggetti sacri per collezioni private, musei diocesani e chiese di Roma.",
    image: "images/about.jpg",
  },

  offerings: {
    heading: "Cosa Facciamo",
    items: [
      { name: "Gioielli su disegno", description: "Anelli, orecchini e collezioni originali in oro e argento, disegnati e realizzati in laboratorio", price: "" },
      { name: "Restauro argenti e bronzi", description: "Restauro di argenteria antica, bronzi e oggetti liturgici per collezioni private e istituzioni", price: "" },
      { name: "Restauro oggetti sacri", description: "Reliquiari, croci astili e arredi da chiesa, con interventi anche per musei diocesani", price: "" },
      { name: "Collezioni", description: "Linee originali come Bosco Reale, Faber, Geometrie e Riflessi", price: "" },
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
      { day: "Lunedì", hours: "da confermare" },
      { day: "Martedì - Venerdì", hours: "da confermare" },
      { day: "Sabato", hours: "da confermare" },
      { day: "Domenica", hours: "Chiuso" },
    ],
  },

  contact: {
    heading: "Contattaci",
    address: "Via di Tor di Nona, 60, 00186 Roma",
    phone: "06 6813 6305",
    whatsapp: "+39 348 7291619",
    email: "",
  },

  map: {
    embedSrc: "https://www.google.com/maps?q=Via+di+Tor+di+Nona+60+Roma&output=embed",
  },

  socials: {
    instagram: "https://www.instagram.com/franchiargentieri/",
    facebook: "",
    tiktok: "",
    website: "https://franchiargentieri.it/",
  },

  footer: {
    text: "Franchi Argentieri — Argenteria e restauro a Roma dal 1944.",
  },
};
