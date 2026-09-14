// Demo per Legatoria Rumori: legatoria artigianale a Roma dal 1960/61,
// Viale XXI Aprile 38/A. Sito attuale (legatoriarumori.com) confermato
// dal vivo: tema WordPress datato (Screenr parallax theme di
// FameThemes), layout semplice tipico dei primi anni 2020, con un vero
// archivio fotografico ricco e bellissimo che il layout attuale non
// valorizza affatto.
// STORIA: nel 1961 Renato Rumori, spinto dalla passione per il
// cartaceo e la manualità, apre la sua bottega di legatoria artigianale
// a Roma. Oggi il figlio Paolo porta avanti l'attività, che rilega di
// tutto, anche volumi antichi e pregiati. Testo tradotto e riassunto
// onestamente dalla pagina "Legatoria artigianale da 60 anni" del loro
// sito, non inventato.
// EMAIL: legatoriarumori@gmail.com, trovata direttamente sul loro sito
// (footer di ogni pagina). Non è una fonte terza, è il loro stesso sito.
// FOTO: tutte reali, nessuna stock, tutte scaricate direttamente dal
// loro sito. hero.jpg è una vera foto (color seppia, non filtrata da
// noi, è così sul sito originale) di una cucitura a mano di un volume
// in corso, con ago, filo e i quaderni cuciti visibili. about.jpg
// mostra due veri volumi antichi restaurati dalla legatoria
// ("Monete e Bolle Pontificie del Medagliere Vaticano"), con la
// doratura originale visibile, un vero lavoro di restauro, non una
// foto generica di libri. gallery-1.jpg è un vero volume rilegato a
// mano in pelle rossa con dorature, fettuccia segnalibro compresa.
// gallery-2.jpg è la vera vetrina/ingresso del negozio in Viale XXI
// Aprile, con l'insegna "LEGATORIA RUMORI" leggibile. gallery-3.jpg
// mostra una vera pagina speciale a tre ante che hanno stampato e
// rilegato per un cliente (lavoro di grafica e legatoria combinate).
// gallery-4.jpg è un vero catalogo d'arte ("Massimo Catalani, Catalogo
// Generale Vol. 1") che hanno rilegato per l'archivio dell'artista.
// LOGO: il logo reale ha un'icona a forma di libro aperto con il testo
// "Legatoria Rumori" scritto direttamente sopra la costina del libro
// stesso, senza alcuna linea di ritaglio netta per lo slot circolare
// del template (lo stesso caso descritto in CLAUDE.md: il testo si
// sovrappone all'icona). Per questo è stato ridisegnato un marchio
// pulito solo-icona: la stessa silhouette di un libro aperto, senza
// testo, nello stesso rosso campionato pixel per pixel dal vero logo.
// COLORI: rosso `#8c1e14` campionato pixel per pixel dal vero logo, e
// oro/bronzo antico `#a06e3c` campionato dalla vera doratura visibile
// sui volumi restaurati in about.jpg, non inventati.

const SITE_CONFIG = {
  business: {
    name: "Legatoria Rumori",
    tagline: "Legatoria artigianale a Roma dal 1961",
    logoText: "LR",
    logoImage: "images/logo.png",
  },

  theme: {
    primary: "#8c1e14",
    accent: "#a06e3c",
    font: "'Poppins', sans-serif",
    headingFont: "'Yeseva One', serif",
    mood: "vintage",
  },

  hero: {
    heading: "Benvenuti da {{business.name}}",
    subheading: "Rileghiamo di tutto, anche volumi antichi e pregiati, a mano dal 1961",
    backgroundImage: "images/hero.jpg",
    ctaText: "Scopri la legatoria",
    ctaLink: "#contact",
  },

  about: {
    heading: "Chi siamo",
    text: "Nel 1961 Renato Rumori, spinto dalla passione per il cartaceo e la manualità, apre a Roma la sua bottega di legatoria artigianale. Oggi il figlio Paolo porta avanti l'attività nello stesso spirito: rilegature su misura, restauro di volumi antichi e pregiati, grafica e stampa per aziende e privati, tutto realizzato a mano con la stessa cura di sempre.",
    image: "images/about.jpg",
  },

  offerings: {
    heading: "Le nostre lavorazioni",
    items: [
      { name: "Rilegatura artigianale", description: "Rilegature su misura in pelle e pergamena, con dorature e incisioni", price: "" },
      { name: "Restauro di volumi antichi", description: "Nuova vita a libri danneggiati o consumati dal tempo, anche volumi pregiati", price: "" },
      { name: "Grafica e stampa", description: "Fotolibri personalizzati, tesi di laurea, cataloghi e stampe per aziende", price: "" },
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
      { day: "Lunedì - Venerdì", hours: "9:00 - 19:00" },
      { day: "Sabato e Domenica", hours: "Chiuso" },
    ],
  },

  contact: {
    heading: "Contattaci",
    address: "Viale XXI Aprile, 38/A, 00162 Roma",
    phone: "06 4423 2725",
    whatsapp: "",
    email: "legatoriarumori@gmail.com",
  },

  map: {
    embedSrc: "https://www.google.com/maps?q=Viale+XXI+Aprile+38A+Roma&output=embed",
  },

  socials: {
    instagram: "",
    facebook: "",
    tiktok: "",
    website: "https://www.legatoriarumori.com/",
  },

  footer: {
    text: "Legatoria Rumori: legatoria artigianale a Roma dal 1961.",
  },
};
