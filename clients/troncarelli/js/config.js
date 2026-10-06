// Demo per Antica Cappelleria Troncarelli: cappelli e accessori, Via
// della Cuccagna 15, Roma (a due passi da Piazza Navona). STORIA
// riassunta onestamente dal testo reale della loro pagina "Chi Siamo"
// (cappellitroncarelli.it): "Cinque generazioni per una tradizione
// che supera il tempo. Fulvio ed Andrea Troncarelli... Attualmente
// gestita da Andrea Troncarelli, figlio di Fulvio Troncarelli il
// quale rilanciò il negozio dal dopo guerra ai giorni nostri." Dal
// 1857 (confermato nel titolo della pagina e da fonti di stampa
// indipendenti), cinque generazioni, Andrea figlio di Fulvio: tutto
// confermato testualmente, non inventato.
// EMAIL: info@troncarelli.it, trovata direttamente nel mailto della
// loro pagina Contatti, confermata via curl diretto (200).
// TELEFONO: 06 6879320, trovato nella stessa fonte.
// SITO ATTUALE: il dominio troncarelli.it reindirizza (301) a
// cappellitroncarelli.it, un sito WordPress/WooCommerce funzionante
// ma con un errore reale e verificato: il widget feed Instagram sulla
// pagina "Chi Siamo" mostra testualmente "Errore: Nessun feed
// trovato", confermato direttamente nell'HTML, non solo un'impressione
// soggettiva.
// FOTO: Troncarelli è anche rivenditore ufficiale di numerose marche
// di cappelli (Borsalino, Stetson, Lock & Co Hatters, ecc.), quindi
// molte foto prodotto sul sito rischiano di mostrare il marchio di
// un'altra azienda, lo stesso problema già affrontato per `massoni` e
// `stilo-fetti`. hero.jpg è invece **una vera foto storica della
// famiglia stessa**: Fulvio e Andrea Troncarelli nel loro negozio,
// trovata sulla loro pagina "Chi Siamo", ritagliata per escludere un
// cartello di un marchio di terzi visibile sullo sfondo dell'originale.
// Le due foto prodotto candidate trovate sul sito (foto categoria
// "Uomo"/"Donna") sono risultate fotografia stock generica da modella/
// modello professionista, non foto reali del negozio, quindi non
// usate. Dopo aver controllato il sito stesso e la stampa (nessuna
// foto del negozio trovata in articoli), per about.jpg e gallery-1.jpg
// si usa onestamente foto stock Unsplash di vetrine di cappellerie,
// scelte senza alcun marchio visibile: about.jpg (Fumiaki Hayashi,
// licenza gratuita Unsplash) e gallery-1.jpg (Ahnaf Piash, licenza
// gratuita Unsplash).
// LOGO: reale, trovato sul loro sito: wordmark puro "Antica
// Cappelleria TRONCARELLI dal 1857", senza icona separabile, quindi
// iniziali testuali "AT" seguendo CLAUDE.md. A differenza di altri
// lead recenti, questo logo ha colore proprio (non monocromatico):
// marrone/oro e nero, campionati pixel-per-pixel dal file reale.
// COLORI: marrone/oro `#7a4f0a` e nero `#000000`, entrambi campionati
// pixel-per-pixel dal vero file del logo.
// MOOD: editorial (169 anni di storia continua, cinque generazioni
// della stessa famiglia, documentate testualmente), per la linea
// guida della skill professional-web-design.

const SITE_CONFIG = {
  business: {
    name: "Antica Cappelleria Troncarelli",
    tagline: "Cappelli e accessori a Roma dal 1857",
    logoText: "AT",
    logoImage: "",
  },

  theme: {
    primary: "#7a4f0a",
    accent: "#000000",
    font: "'Poppins', sans-serif",
    headingFont: "'Playfair Display', serif",
    mood: "editorial",
  },

  hero: {
    heading: "Benvenuti da {{business.name}}",
    subheading: "Cappelli e accessori a due passi da Piazza Navona, dal 1857: cinque generazioni della stessa famiglia",
    backgroundImage: "images/hero.jpg",
    ctaText: "Contattaci",
    ctaLink: "#contact",
  },

  about: {
    heading: "Chi siamo",
    text: "Cinque generazioni per una tradizione che supera il tempo. Oggi la Antica Cappelleria Troncarelli è gestita da Andrea Troncarelli, figlio di Fulvio Troncarelli, che rilanciò il negozio dal dopoguerra ai giorni nostri. Dal 1857 nel pieno centro storico di Roma, a due passi da Piazza Navona.",
    image: "images/about.jpg",
  },

  offerings: {
    heading: "Cosa offriamo",
    items: [
      { name: "Cappelli uomo", description: "Feltro, panama, cilindri, berretti e molto altro", price: "" },
      { name: "Cappelli donna", description: "Cloche, feltro, turbanti, modelli da cerimonia", price: "" },
      { name: "Accessori", description: "Guanti, sciarpe, ombrelli", price: "" },
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
    address: "Via della Cuccagna 15, 00186 Roma",
    phone: "06 6879320",
    whatsapp: "",
    email: "info@troncarelli.it",
  },

  map: {
    embedSrc: "https://www.google.com/maps?q=Via+della+Cuccagna+15+Roma&output=embed",
  },

  socials: {
    instagram: "",
    facebook: "https://www.facebook.com/troncarelli.it",
    tiktok: "",
    website: "https://cappellitroncarelli.it/",
  },

  footer: {
    text: "Antica Cappelleria Troncarelli: cappelli e accessori a Roma dal 1857.",
  },
};
