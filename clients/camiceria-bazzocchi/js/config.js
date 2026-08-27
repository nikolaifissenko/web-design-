// Demo per Camiceria Bazzocchi — dati verificati dal loro sito attuale
// (camiceriabazzocchi.it, tema WordPress datato, non responsive per
// dispositivi mobili, verificato nel markup). Indirizzo, telefono,
// email e storia presi direttamente da lì (homepage + descrizioni
// prodotto). Fondata nel 1908 — clientela storica illustre (Re Farouk,
// Burt Lancaster, Jack Palance, Maria Montez, Gino Bramieri, Renato
// Carosone, il pittore Mario Schifano, il mago Silvan), citata quasi
// testualmente dalla loro stessa homepage.
// LOGO: reale, non ridisegnato. Il logo completo è "cilindro + B gotica
// + AZZOCCHI + 1908" in un'unica immagine larga (300x114px) — il
// wordmark non entra nello slot circolare, ma il cilindro+B da solo è
// già un marchio pulito e riconoscibile: ritagliato (non ridisegnato)
// per lo slot circolare (images/logo.png).
// COLORI: rosso bordeaux #ad0000 preso direttamente dal CSS del tema
// reale (background-color/color ripetuti più volte nel markup), nero
// per il testo — non inventati.
// FOTO: tutte reali, nessuna stock — scaricate direttamente dal sito
// (hero.jpg = la vecchia insegna "CAMICERIA" in ferro sul negozio di
// Via del Tritone; about.jpg = camicie su misura piegate coi tessuti
// campione; gallery = polsini rossi con gemelli, cravatta nera col
// campionario tessuti, gilet di seta con cartellini "Camiceria
// Bazzocchi — Antica Casa di Profissione Fondata nel 1908").

const SITE_CONFIG = {
  business: {
    name: "Camiceria Bazzocchi",
    tagline: "Camicie su misura e accessori maschili introvabili, a Roma dal 1908",
    logoText: "CB",
    logoImage: "images/logo.png",
  },

  theme: {
    primary: "#ad0000",
    accent: "#222222",
    font: "'Poppins', sans-serif",
    headingFont: "'Cormorant Garamond', serif",
    mood: "boutique",
  },

  hero: {
    heading: "Benvenuti da {{business.name}}",
    subheading: "Raffinatezza e lusso nel cuore di Roma: camicie su misura e accessori introvabili dal 1908",
    backgroundImage: "images/hero.jpg",
    ctaText: "Contattaci",
    ctaLink: "#contact",
  },

  about: {
    heading: "La nostra storia",
    text: "La Camiceria Bazzocchi è una bottega artigiana fondata nel 1907, in Via del Tritone, nel cuore di Roma. Camicie su misura confezionate a mano coi nostri tessuti, e accessori maschili ormai introvabili: cilindri, bombette, bastoni da passeggio, gemelli e papillon dipinti a mano. Nel corso degli anni ci hanno scelto clienti illustri come Re Farouk, Burt Lancaster, Jack Palance e il pittore Mario Schifano — un pezzo di dolce vita romana che continua a vivere in negozio.",
    image: "images/about.jpg",
  },

  offerings: {
    heading: "Le Nostre Specialità",
    items: [
      { name: "Camicie su misura", description: "Realizzate esclusivamente con i nostri tessuti, rifinite interamente a mano", price: "" },
      { name: "Cerimonia", description: "Camicie e accessori per matrimoni ed eventi importanti", price: "" },
      { name: "Gli Introvabili", description: "Cilindri, bombette in feltro, bastoni da passeggio e gadget ormai rari a Roma", price: "" },
      { name: "Cravatte, papillon e bretelle", description: "Su misura, inclusi papillon dipinti a mano", price: "" },
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
    address: "Via del Tritone, 141, 00187 Roma",
    phone: "06 4885108",
    whatsapp: "",
    email: "info@camiceriabazzocchi.it",
  },

  map: {
    embedSrc: "https://www.google.com/maps?q=Via+del+Tritone+141+Roma&output=embed",
  },

  socials: {
    instagram: "",
    facebook: "",
    tiktok: "",
    website: "https://www.camiceriabazzocchi.it/",
  },

  footer: {
    text: "Camiceria Bazzocchi — Camicie su misura a Roma dal 1908.",
  },
};
