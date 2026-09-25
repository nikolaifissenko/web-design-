// Demo per Eufemi Stampe Antiche: negozio di stampe e mappe antiche,
// Via Francesco Crispi 93 (vicino Piazza di Spagna), Roma. L'interesse
// della famiglia per le stampe nacque nel 1959 quando il nonno iniziò a
// vendere stampe e libri d'arte nei migliori punti vendita di Roma; nel
// 1971 il padre proseguì la stessa passione per 30 anni prima di aprire
// un negozio proprio; la terza generazione (Massimo Eufemi) nacque con
// l'apertura del negozio in Piazza Cavour nel 2003, poi trasferito
// nell'attuale sede. STORIA riassunta onestamente dal loro stesso sito
// (pagina "Chi siamo"), non inventata.
// EMAIL: massimo.eufemi@libero.it, trovata direttamente nel testo della
// loro pagina Contatti (eufemistampe.com/contatti), confermata via curl
// diretto (200, indirizzo presente nel testo/JSON-LD della pagina).
// SITO ATTUALE: confermato dal vivo via curl: WordPress 5.9.18, alcune
// versioni indietro rispetto all'attuale.
// FOTO: tutte reali, zero stock, tutte scaricate direttamente dal loro
// sito (stessa cartella upload 2020/06), file con nome fotocamera
// originale (IMG_20200226_..., IMG_20200622_..., EXIF Xiaomi Mi 9T Pro),
// prova che sono vere foto scattate dal titolare, non stock. hero.jpg è
// la vera vetrina del negozio al numero 93, con l'insegna "Eufemi
// STAMPE ANTICHE - ANTIQUE PRINTS" e le vere stampe esposte in vetrina.
// about.jpg è una vera mappa antica di Roma in vendita ("Urbis Romae
// Veteris ac Modernae Accurata Delineatio"). gallery-1.jpg è una vera
// stampa antica del Colosseo ("Veduta dell'Anfiteatro Flavio").
// gallery-2.jpg è una vera stampa botanica antica, incorniciata.
// LOGO: reale ma è un wordmark corsivo ("Eufemi") senza un monogramma o
// icona separabile da ritagliare (diverso dai casi con un vero
// monogramma circolare già gestiti su questo repo, es. Cristiana
// Perali). Ritagliare solo una lettera da uno script corsivo connesso
// avrebbe prodotto un segno illeggibile, non un'icona pulita. Per
// questo, seguendo CLAUDE.md, si usa l'iniziale testuale "E" ma nei
// veri colori campionati pixel-per-pixel dal loro logo reale (blu navy
// e crema), non colori inventati.
// COLORI: blu navy `#221c5c`, campionato pixel-per-pixel dal vero
// script del logo. Il logo reale è monocromatico (blu su crema), quindi
// non esiste un secondo colore reale da campionare per l'accento: oro
// anticato `#b08d4f` scelto a mano per intonarsi alla carta invecchiata
// delle vere stampe antiche fotografate, non campionato dal logo.
// MOOD: editorial (bottega storica con una storia di fondazione forte
// e documentata su tre generazioni: nonno 1959 -> padre 1971 -> Massimo
// 2003), per la linea guida della skill professional-web-design.

const SITE_CONFIG = {
  business: {
    name: "Eufemi Stampe Antiche",
    tagline: "Stampe e mappe antiche a Roma, tre generazioni di passione",
    logoText: "E",
    logoImage: "",
  },

  theme: {
    primary: "#221c5c",
    accent: "#b08d4f",
    font: "'Poppins', sans-serif",
    headingFont: "'Playfair Display', serif",
    mood: "editorial",
  },

  hero: {
    heading: "Benvenuti da {{business.name}}",
    subheading: "Stampe e mappe antiche nel cuore di Roma, vicino Piazza di Spagna",
    backgroundImage: "images/hero.jpg",
    ctaText: "Contattaci",
    ctaLink: "#contact",
  },

  about: {
    heading: "Chi siamo",
    text: "L'interesse della nostra famiglia per le stampe nacque nel 1959, quando il nonno iniziò a vendere stampe e libri d'arte nei migliori punti vendita di Roma. Nel 1971 la stessa passione fu raccolta dal padre, che la portò avanti per trent'anni prima di aprire un negozio proprio. La terza generazione, con Massimo Eufemi, ha aperto l'attuale negozio, oggi punto di riferimento per stampe dal 1500 a oggi: mappe geografiche, vedute di città, soggetti sacri, fiori, animali e paesaggi.",
    image: "images/about.jpg",
  },

  offerings: {
    heading: "Cosa offriamo",
    items: [
      { name: "Stampe antiche", description: "Vedute di Roma, città, architettura e paesaggi dal 1500 a oggi", price: "" },
      { name: "Mappe geografiche antiche", description: "Mappe storiche di Roma e di altre città", price: "" },
      { name: "Stampe botaniche e naturalistiche", description: "Fiori, animali e soggetti naturalistici incorniciati", price: "" },
    ],
  },

  gallery: {
    heading: "Galleria",
    images: [
      "images/gallery-1.jpg",
      "images/gallery-2.jpg",
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
    address: "Via Francesco Crispi 93, 00187 Roma",
    phone: "06 3105 9717",
    whatsapp: "",
    email: "massimo.eufemi@libero.it",
  },

  map: {
    embedSrc: "https://www.google.com/maps?q=Via+Francesco+Crispi+93+Roma&output=embed",
  },

  socials: {
    instagram: "",
    facebook: "https://www.facebook.com/Eufemistampeantiche/",
    tiktok: "",
    website: "https://www.eufemistampe.com/",
  },

  footer: {
    text: "Eufemi Stampe Antiche: stampe e mappe antiche a Roma.",
  },
};
