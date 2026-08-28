// Demo per C.E.R. Tutto per la Ceramica, sito proprio è un blog
// WordPress.com gratuito (certuttoperlaceramica.wordpress.com), tema
// generico senza personalizzazione grafica. Dati verificati sul blog
// stesso: indirizzo reale "via Marco Aurelio 45" e telefono reale
// "06.70450517" leggibili in un'immagine promozionale caricata dal
// negozio stesso (vedi sotto), email reale cer.annamaria@gmail.com
// confermata via ricerca web. Fondata nel 1966, la più antica
// bottega/scuola di ceramica di Roma, gestita da Annamaria Apolloni
// (protagonista anche di un documentario sulla ceramica, 2012).
// LOGO: esiste un vero marchio, visibile in una foto promozionale reale
// caricata sul blog (alla-cer-tutto-si-puo.jpg): un riquadro con
// cornice bordeaux, un'anfora stilizzata sopra e sotto il testo
// "C.E.R. / TUTTO PER LA CERAMICA". Troppo piccolo e rettangolare
// (pieno di testo) per stare nello slot circolare 40×40. Ridisegnata
// pulita in SVG un'icona-sola-anfora nello stesso spirito, con i colori
// campionati a mano dal file reale: bordeaux #7a1618 (colore del testo
// "C.E.R." nel logo originale) e bruno/nero #2c1810 (colore dell'anfora
// disegnata nel logo originale), images/logo.svg, non colori inventati.
// FOTO: tutte reali, nessuna stock, tutte fotografie del laboratorio o
// dei corsi caricate dal negozio stesso sul proprio blog (metadati EXIF
// confermano scatti reali con iPhone 4, non foto stock: "manufacturer=
// Apple, model=iPhone 4"). hero.jpg = una lezione reale, versamento di
// barbottina in uno stampo di gesso (imm-cer-stampi.jpg). about.jpg =
// un'artigiana/insegnante reale al lavoro nel laboratorio (ritagliata
// dalla foto promozionale collage alla-cer-tutto-si-puo.jpg). gallery-1
// = un vaso in ceramica lavorato a colombino, foto reale (stessa fonte).
// gallery-2 = colombini di argilla appena lavorati, dettaglio reale
// (stessa fonte).

const SITE_CONFIG = {
  business: {
    name: "C.E.R. Tutto per la Ceramica",
    tagline: "La più antica bottega e scuola di ceramica di Roma, a due passi dal Colosseo, dal 1966",
    logoText: "CER",
    logoImage: "images/logo.svg",
  },

  theme: {
    primary: "#7a1618",
    accent: "#2c1810",
    font: "'Poppins', sans-serif",
    headingFont: "'Fraunces', serif",
    mood: "rustic",
  },

  hero: {
    heading: "Benvenuti da {{business.name}}",
    subheading: "Corsi, materie prime e cotture per ceramisti e scultori, professionisti e hobbisti, dal 1966",
    backgroundImage: "images/hero.jpg",
    ctaText: "Scopri i Corsi",
    ctaLink: "#contact",
  },

  about: {
    heading: "Quasi 60 Anni di Ceramica Romana",
    text: "C.E.R. Tutto per la Ceramica è la più antica bottega e scuola di ceramica di Roma, attiva dal 1966 a due passi dal Colosseo. Guidata da Annamaria Apolloni, protagonista anche di un documentario dedicato all'arte ceramica, rifornisce da quasi sessant'anni scultori e ceramisti romani, sia professionisti che semplici appassionati, con materie prime, corsi e un laboratorio dove tutte le tecniche, dal tornio al mosaico, si imparano con le mani in pasta.",
    image: "images/about.jpg",
  },

  offerings: {
    heading: "Corsi e Servizi",
    items: [
      { name: "Modellato, tornio e scultura", description: "Corsi per tutti i livelli, dal principiante al ceramista esperto", price: "" },
      { name: "Decorazione su porcellana e maiolica", description: "Tecniche tradizionali di decoro e smaltatura", price: "" },
      { name: "Raku, paper clay e cotture primitive", description: "Tecniche speciali per chi cerca risultati fuori dall'ordinario", price: "" },
      { name: "Materie prime e impasti ceramici", description: "Argille, smalti alta temperatura, stampi e cotture in conto terzi", price: "" },
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
      { day: "Lunedì - Venerdì", hours: "da confermare" },
      { day: "Sabato", hours: "da confermare" },
      { day: "Domenica", hours: "Chiuso" },
    ],
  },

  contact: {
    heading: "Vieni a Trovarci",
    address: "Via Marco Aurelio, 45, 00184 Roma (a due passi dal Colosseo)",
    phone: "06 70450517",
    whatsapp: "",
    email: "cer.annamaria@gmail.com",
  },

  map: {
    embedSrc: "https://www.google.com/maps?q=Via+Marco+Aurelio+45+Roma&output=embed",
  },

  socials: {
    instagram: "",
    facebook: "",
    tiktok: "",
    website: "https://certuttoperlaceramica.wordpress.com/",
  },

  footer: {
    text: "C.E.R. Tutto per la Ceramica, la scuola di ceramica più antica di Roma, dal 1966.",
  },
};
