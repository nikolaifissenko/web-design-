// Demo per Ditta Francesco Paolucci (Via di Montoro, 5/6/26, Roma, centro
// storico vicino Campo de' Fiori). Falegnameria e legnami dal 1936, oggi
// alla terza generazione (Francesco Paolucci nipote). Hanno un sito
// proprio (falegnameriaromacentro.it) ma non finito/non curato: il logo
// caricato è letteralmente un file chiamato "LOGOPROVA-1.png" ("logo di
// prova"), una scritta placeholder mai sostituita con un logo vero,
// confermato guardando il file stesso.
//
// CONTATTI: email REALE confermata direttamente sulla pagina contatti del
// loro sito (dittafrancescopaolucci@gmail.com) e su Turismo Roma
// (bottega storica riconosciuta). Telefono reale anch'esso dal sito.
//
// LOGO: nessun logo reale esiste, solo il placeholder "LOGOPROVA" (una
// scritta generica "bricolage e fai da te" non legata al nome
// dell'attività). Caso legittimo di logoText di fallback: non è un logo
// vero scartato per comodità, è la prova che non ne hanno mai fatto uno.
//
// FOTO: tutte REALI, prese dalla pagina "I nostri locali" dello stesso
// sito (non la home, che usa foto stock generiche di legname/attrezzi non
// riconoscibili, scartate per lo stesso motivo). Le foto in
// "i-nostri-locali" sono scatti reali del negozio: hero.jpg e about.jpg
// mostrano l'interno con la volta in mattoni e gli scaffali di utensili;
// gallery-1.jpg gli scaffali di colori/vernici; gallery-2.jpg gli
// utensili appesi; gallery-3.jpg i barattoli di tinta. Nessuna foto stock
// usata per questo cliente.
//
// COLORI: scelti a mano (marrone legno caldo + grigio antracite), non
// estratti da un logo/sito reale: il sito usa solo la palette di default
// di WordPress/Gutenberg, non un colore intenzionale della ditta.
// Dichiarato onestamente, non presentato come reale.
//
// PREZZI: non pubblicati da nessuna parte (preventivo su richiesta per
// lavori su misura), lasciati vuoti.
//
// ORARI: REALI, confermati direttamente sulla pagina contatti del loro
// sito (lun-ven 9:00-13:00 / 15:00-18:30, sab 9:00-13:00).
//
// MOOD: "editorial", artigiano storico con una vera storia di famiglia
// (dal 1936, terza generazione), lo stesso registro già usato per altri
// artigiani-restauratori del progetto.

const SITE_CONFIG = {
  business: {
    name: "Ditta Francesco Paolucci",
    tagline: "Falegnameria e legnami nel cuore di Roma dal 1936",
    logoText: "FP",
    logoImage: "",
  },

  theme: {
    primary: "#8a5a34",
    accent: "#3a3a3a",
    font: "'Poppins', sans-serif",
    headingFont: "'Playfair Display', serif",
    mood: "editorial",
  },

  hero: {
    heading: "Benvenuti da {{business.name}}",
    subheading: "Falegnameria, legnami e taglio su misura nel centro di Roma dal 1936",
    backgroundImage: "images/hero.jpg",
    ctaText: "Contattaci",
    ctaLink: "#contact",
  },

  about: {
    heading: "Chi siamo",
    text: "Ditta Francesco Paolucci è una falegnameria storica nel cuore di Roma, attiva dal 1936 e oggi alla terza generazione della famiglia. Tagliamo legno su misura, realizziamo mobili e elementi d'arredo su richiesta, restauriamo pezzi antichi e forniamo legnami, vernici e utensili per ogni esigenza, con la stessa cura di sempre.",
    image: "images/about.jpg",
  },

  offerings: {
    heading: "I nostri servizi",
    items: [
      { name: "Taglio legno su misura", description: "Ogni tipo di legno, con consulenza dedicata", price: "" },
      { name: "Mobili su misura", description: "Elementi d'arredo realizzati su richiesta", price: "" },
      { name: "Restauro", description: "Recupero e restauro di mobili e infissi antichi", price: "" },
      { name: "Taglio prodotti plastici", description: "Plexiglass, PVC, policarbonato, poliplat", price: "" },
      { name: "Vernici e utensili", description: "Vendita di vernici, colori e ferramenta", price: "" },
    ],
  },

  gallery: {
    heading: "Galleria",
    images: ["images/gallery-1.jpg", "images/gallery-2.jpg", "images/gallery-3.jpg"],
  },

  hours: {
    heading: "Orari",
    schedule: [
      { day: "Lunedì - Venerdì", hours: "09:00 - 13:00, 15:00 - 18:30" },
      { day: "Sabato", hours: "09:00 - 13:00" },
      { day: "Domenica", hours: "Chiuso" },
    ],
  },

  contact: {
    heading: "Contattaci",
    address: "Via di Montoro, 5, 00186 Roma",
    phone: "06 68134625",
    whatsapp: "",
    email: "dittafrancescopaolucci@gmail.com",
  },

  map: {
    embedSrc: "https://www.google.com/maps?q=Via+di+Montoro+5+Roma&output=embed",
  },

  socials: {
    instagram: "",
    facebook: "",
    tiktok: "",
    website: "https://www.falegnameriaromacentro.it/",
  },

  footer: {
    text: "Ditta Francesco Paolucci: falegnameria e legnami a Roma dal 1936.",
  },
};
