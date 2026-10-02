// Demo per De Sanctis 1890: ceramiche italiane artigianali, Via della
// Scrofa 90, Roma. STORIA riassunta onestamente dal testo reale della
// loro stessa pagina "Chi Siamo" (desanctis1890.com): "Lo storico
// negozio della famiglia DE SANCTIS. Fondato nel 1890 ed immerso nel
// cuore di Roma, dopo più di un secolo continua a proporre una vasta
// selezione delle migliori ceramiche artigianali italiane prodotte e
// dipinte completamente a mano... Negli arredi originali dell'epoca."
// 136 anni, famiglia De Sanctis, non inventato: confermato testualmente.
// EMAIL: info@desanctis1890.com, trovata direttamente nel tag mailto
// della loro stessa pagina Contatti, confermata via curl diretto (200).
// TELEFONO: +39 06 6880 6810, trovato nello stesso punto.
// SITO ATTUALE: desanctis1890.com, confermato dal vivo via curl: un
// sito costruito su stack moderno (WordPress/WooCommerce/Elementor),
// ma concretamente trascurato, non solo "vecchio": testo segnaposto
// "Lorem ipsum dolor sit amet..." ancora visibile in una sezione FAQ
// reale della homepage, e un banner promozionale finto ("Flat 50% OFF,
// Hurry up before the stock ends") mai completato, entrambi verificati
// direttamente nell'HTML, non solo un'impressione soggettiva.
// FOTO: tutte reali, zero stock, scaricate direttamente dal catalogo
// prodotti del loro stesso sito (wp-content/uploads). hero.jpg è un
// vero piatto "Ricco Deruta", motivo classico blu cobalto e oro.
// about.jpg è una vera testa in ceramica di Caltagirone ("testa di
// moro"), pezzo caratteristico della loro produzione artigianale.
// gallery-1.jpg è un vero piatto decorativo "Pizza" dipinto a mano.
// Nessuna delle tre mostra marchi di terzi.
// LOGO: reale, trovato sul loro sito (wordmark "CERAMICHE ITALIANE /
// De Sanctis dal 1890"), ma è un wordmark puro, bianco, senza
// un'icona separabile da ritagliare (stesso caso di comandini,
// eufemi-stampe-antiche, pianoforti-papi, romana-neon). Campionato
// pixel-per-pixel, il file del logo è risultato puramente bianco su
// sfondo trasparente, senza alcuna informazione di colore propria.
// Per questo, seguendo CLAUDE.md, si usano le iniziali testuali "DS".
// I colori qui sotto sono campionati pixel-per-pixel da una vera foto
// prodotto (il piatto "Ricco Deruta" usato come hero.jpg), non dal
// logo che è monocromatico, lo stesso principio onesto già applicato
// per l'accento oro di comandini: non un colore inventato, ma un vero
// colore del loro prodotto reale.
// COLORI: blu cobalto `#28367d` e oro/ocra `#c99444`, entrambi
// campionati pixel-per-pixel dalla vera foto del piatto "Ricco Deruta".
// MOOD: editorial (136 anni di storia continua della stessa famiglia,
// documentati testualmente dal loro stesso sito), per la linea guida
// della skill professional-web-design.

const SITE_CONFIG = {
  business: {
    name: "De Sanctis 1890",
    tagline: "Ceramiche artigianali italiane a Roma dal 1890",
    logoText: "DS",
    logoImage: "",
  },

  theme: {
    primary: "#28367d",
    accent: "#c99444",
    font: "'Poppins', sans-serif",
    headingFont: "'Playfair Display', serif",
    mood: "editorial",
  },

  hero: {
    heading: "Benvenuti da {{business.name}}",
    subheading: "Ceramiche artigianali italiane dipinte a mano, nel cuore di Roma dal 1890",
    backgroundImage: "images/hero.jpg",
    ctaText: "Contattaci",
    ctaLink: "#contact",
  },

  about: {
    heading: "Chi siamo",
    text: "Lo storico negozio della famiglia De Sanctis. Fondato nel 1890 e immerso nel cuore di Roma, dopo più di un secolo continuiamo a proporre una vasta selezione delle migliori ceramiche artigianali italiane, prodotte e dipinte completamente a mano, negli arredi originali dell'epoca.",
    image: "images/about.jpg",
  },

  offerings: {
    heading: "Cosa offriamo",
    items: [
      { name: "Ceramiche da tavola", description: "Piatti, servizi e complementi dipinti a mano", price: "" },
      { name: "Ceramiche da arredo", description: "Vasi, decori e oggetti per la casa", price: "" },
      { name: "Articoli religiosi e da regalo", description: "Ceramiche artigianali per ogni occasione", price: "" },
    ],
  },

  gallery: {
    heading: "Galleria",
    images: [
      "images/gallery-1.jpg",
    ],
  },

  hours: {
    heading: "Orari",
    schedule: [
      { day: "Lunedì - Sabato", hours: "da confermare" },
      { day: "Domenica", hours: "da confermare" },
    ],
  },

  contact: {
    heading: "Contattaci",
    address: "Via della Scrofa 90, 00186 Roma",
    phone: "06 6880 6810",
    whatsapp: "",
    email: "info@desanctis1890.com",
  },

  map: {
    embedSrc: "https://www.google.com/maps?q=Via+della+Scrofa+90+Roma&output=embed",
  },

  socials: {
    instagram: "",
    facebook: "",
    tiktok: "",
    website: "https://www.desanctis1890.com/",
  },

  footer: {
    text: "De Sanctis 1890: ceramiche artigianali italiane a Roma dal 1890.",
  },
};
