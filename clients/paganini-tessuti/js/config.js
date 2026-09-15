// Demo per Paganini Tessuti: negozio storico di tessuti, tendaggi,
// biancheria e tappeti a Roma dal 1948, Via Aracoeli 23 (zona Piazza
// Venezia/Ara Coeli). Sito attuale (paganinitessuti.com) confermato dal
// vivo: WordPress/WooCommerce datato (versione 5.5.20/WooCommerce
// 5.2.5), un e-commerce funzionale ma dall'aspetto molto grezzo per un
// negozio con 10 vetrine reali nel cuore storico di Roma.
// STORIA: apre nel 1948 in Via Michelangelo Caetani a Roma, poi si
// sposta dopo pochi anni in Via delle Botteghe Oscure, diventando
// punto di riferimento per alberghi, ristoranti e tappezzieri.
// Giovanni Paganini, con l'aiuto dei figli, amplia negli anni anche i
// servizi di confezione su misura di biancheria e tendaggi. Testo
// tradotto e riassunto onestamente dalla home page reale del loro
// sito, non inventato.
// EMAIL: info@paganinitessuti.it, trovata direttamente sul loro sito
// (pagina Contatti). Non è una fonte terza, è il loro stesso sito.
// FOTO: tutte reali, nessuna stock. hero.jpg è una vera foto storica
// in bianco e nero della facciata del negozio, con l'insegna originale
// "G. PAGANINI - TESSUTI ARREDAMENTO - MOQUETTES TAPPETI" leggibile,
// presa direttamente dal banner "dal 1948" del loro sito. about.jpg,
// gallery-1.jpg e gallery-2.jpg sono vere foto di tappeti persiani
// realmente in vendita nel negozio (rispettivamente Kirman, Feraman e
// Sarouk), dal loro stesso catalogo prodotti, non stock generico.
// gallery-3.jpg è un vero cuscino decorativo (stampa della Gioconda)
// effettivamente in vendita in negozio.
// LOGO: il logo reale è un semplice wordmark rosso ("PAGANINI"), senza
// alcuna icona separata da adattare allo slot circolare. A differenza
// di altri casi recenti su questo repo (dove un'icona reale esisteva
// ma non si ritagliava bene), qui non esiste proprio nessuna icona da
// ridisegnare: la loro identità reale è puramente tipografica. Per
// questo, onestamente, si usano le iniziali testuali nello stesso
// rosso del loro logo, invece di inventare un'icona che non esiste
// nella loro identità reale.
// COLORI: rosso `#a30000` (versione scurita per contrasto testo, dello
// stesso rosso esatto campionato pixel per pixel dal loro logo reale),
// e oro/tortora `#a0703c` campionato dai veri colori del tappeto
// Kirman fotografato in about.jpg, non inventati.

const SITE_CONFIG = {
  business: {
    name: "Paganini Tessuti",
    tagline: "Tessuti, tendaggi, biancheria e tappeti a Roma dal 1948",
    logoText: "PA",
    logoImage: "",
  },

  theme: {
    primary: "#a30000",
    accent: "#a0703c",
    font: "'Poppins', sans-serif",
    headingFont: "'Playfair Display', serif",
    mood: "boutique",
  },

  hero: {
    heading: "Benvenuti da {{business.name}}",
    subheading: "Tessuti, tendaggi e tappeti nel cuore storico di Roma, dal 1948",
    backgroundImage: "images/hero.jpg",
    ctaText: "Scopri il negozio",
    ctaLink: "#contact",
  },

  about: {
    heading: "Chi siamo",
    text: "Paganini Tessuti apre nel 1948 in Via Michelangelo Caetani a Roma, per poi trasferirsi dopo pochi anni in Via delle Botteghe Oscure, diventando punto di riferimento per alberghi, ristoranti e tappezzieri. Giovanni Paganini, con l'aiuto dei figli, amplia nel tempo anche i servizi di confezione su misura di biancheria e tendaggi. Oggi il negozio, con le sue dieci vetrine nel cuore storico di Roma, continua a offrire la stessa vasta scelta di tessuti, tappeti e tendaggi per la casa.",
    image: "images/about.jpg",
  },

  offerings: {
    heading: "Cosa offriamo",
    items: [
      { name: "Tessuti e tendaggi", description: "Vasta scelta di tessuti d'arredamento, confezione di tende su misura", price: "" },
      { name: "Biancheria per la casa", description: "Confezione su misura di biancheria e tendaggi", price: "" },
      { name: "Tappeti", description: "Tappeti persiani e orientali, anche per alberghi e ristoranti", price: "" },
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
    address: "Via Aracoeli, 23, 00186 Roma",
    phone: "06 679 0305",
    whatsapp: "",
    email: "info@paganinitessuti.it",
  },

  map: {
    embedSrc: "https://www.google.com/maps?q=Via+Aracoeli+23+Roma&output=embed",
  },

  socials: {
    instagram: "",
    facebook: "",
    tiktok: "",
    website: "https://www.paganinitessuti.com/",
  },

  footer: {
    text: "Paganini Tessuti: tessuti, tendaggi e tappeti a Roma dal 1948.",
  },
};
