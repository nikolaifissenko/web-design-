// Demo per Romana Neon: progettazione, produzione e installazione di
// insegne luminose, Via del Mandrione 105, Roma. Fondata nel 1956 come
// laboratorio artigiano specializzato in insegne luminose, con una
// soffieria neon interna (lavorazione a mano del vetro al neon), oggi
// Romana Neon S.r.l. STORIA riassunta onestamente dal loro stesso sito
// (pagina "Chi siamo": "Fondata nel 1956 come laboratorio artigiano
// specializzato in insegne luminose... Laboratorio interno per la
// lavorazione del neon"), non inventata. Nessun nome di famiglia
// trovato (oggi è una S.r.l.), quindi non ne viene inventato uno.
// EMAIL: info@romananeon.com (e infosrl@romananeon.com), trovate
// direttamente sulla loro pagina Contatti, confermate via curl
// diretto (200, entrambe presenti nel testo della pagina).
// SITO ATTUALE: confermato dal vivo via curl, sito proprio funzionante
// ma costruito su un CMS piuttosto datato ("Easy Portal System"),
// design non aggiornato per un'azienda con quasi 70 anni di storia e
// una vera soffieria per la lavorazione a mano del vetro al neon.
// FOTO: tutte reali, zero stock, tutte scaricate direttamente dal loro
// sito (cartelle delle categorie prodotto). hero.jpg è una vera insegna
// al neon in fase di installazione ("made fresh all day", cliente non
// identificabile da un nome commerciale). about.jpg è una vera foto
// scattata nella loro soffieria neon, un'insegna "COMPRO ORO" in vetro
// al neon piegato a mano, accesa, con banco di lavoro e attrezzi
// visibili sullo sfondo: mostra il vero mestiere artigianale.
// gallery-1.jpg è una vera croce da farmacia a LED, un'installazione
// tipica del loro lavoro, fotografata per strada a Roma. **Diverse
// foto candidate sono state scartate di proposito** perché
// mostravano insegne realizzate per marchi terzi ben riconoscibili
// (Poste Italiane, Kenzo Paris, Febalcasa): sono lavori reali fatti da
// Romana Neon, ma mostrare il nome di un altro marchio in primo piano
// avrebbe creato ambiguità sulla vera identità del cliente di questo
// demo, lo stesso principio di cautela già seguito in altri lead di
// questo repository per marchi di terzi visibili nelle foto.
// LOGO: reale, trovato sul loro sito, ma è un wordmark puro
// ("RomanaNeon" + tagline "Insegne Luminose dal 1956") senza
// un'icona separabile da ritagliare (stesso caso di
// eufemi-stampe-antiche e pianoforti-papi). Per questo, seguendo
// CLAUDE.md, si usano le iniziali testuali "RN" nei veri colori
// campionati pixel-per-pixel dal logo reale (rosso e blu), non colori
// inventati.
// COLORI: rosso `#e3221f` (da "Romana") e blu `#1c18d7` (da "Neon"),
// entrambi campionati pixel-per-pixel dal file reale del logo.
// MOOD: bold (azienda pratica, dinamica, legata a un mestiere visivo
// e luminoso, senza una storia di famiglia da presentare in chiave
// "istituzione storica" nel senso classico), per la linea guida della
// skill professional-web-design.

const SITE_CONFIG = {
  business: {
    name: "Romana Neon",
    tagline: "Insegne luminose a Roma dal 1956",
    logoText: "RN",
    logoImage: "",
  },

  theme: {
    primary: "#e3221f",
    accent: "#1c18d7",
    font: "'Poppins', sans-serif",
    headingFont: "'Playfair Display', serif",
    mood: "bold",
  },

  hero: {
    heading: "Benvenuti da {{business.name}}",
    subheading: "Progettazione, produzione e installazione di insegne luminose a Roma, dal 1956",
    backgroundImage: "images/hero.jpg",
    ctaText: "Contattaci",
    ctaLink: "#contact",
  },

  about: {
    heading: "Chi siamo",
    text: "Fondata nel 1956 come laboratorio artigiano specializzato in insegne luminose, Romana Neon porta avanti da quasi 70 anni la stessa passione per la luce e il neon. Grazie a una soffieria interna, dove il vetro al neon viene ancora lavorato e piegato a mano, seguiamo ogni progetto dall'idea alla realizzazione: design, produzione e installazione di insegne su misura.",
    image: "images/about.jpg",
  },

  offerings: {
    heading: "Cosa offriamo",
    items: [
      { name: "Insegne luminose LED e neon", description: "Progettazione, produzione e installazione su misura", price: "" },
      { name: "Soffieria neon", description: "Lavorazione artigianale del vetro al neon, piegato a mano", price: "" },
      { name: "Manutenzione e permessi", description: "Manutenzione insegne, passaggio da neon a LED, permessi comunali", price: "" },
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
      { day: "Lunedì - Venerdì", hours: "08:00 - 13:00, 14:00 - 17:00" },
      { day: "Sabato e Domenica", hours: "Chiuso" },
    ],
  },

  contact: {
    heading: "Contattaci",
    address: "Via del Mandrione 105, 00181 Roma",
    phone: "06 295586",
    whatsapp: "340 692 1341",
    email: "info@romananeon.com",
  },

  map: {
    embedSrc: "https://www.google.com/maps?q=Via+del+Mandrione+105+Roma&output=embed",
  },

  socials: {
    instagram: "https://www.instagram.com/romananeon/",
    facebook: "https://www.facebook.com/romananeoninsegneluminose",
    tiktok: "",
    website: "https://www.romananeon.it/",
  },

  footer: {
    text: "Romana Neon: insegne luminose a Roma dal 1956.",
  },
};
