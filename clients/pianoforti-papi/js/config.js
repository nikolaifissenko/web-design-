// Demo per Pianoforti Papi: vendita, restauro e accordatura di
// pianoforti, Via Crescenzio 99/B, Roma (quartiere Prati). Dal 1870,
// quattro generazioni: Giacomo Papi apre il primo laboratorio di
// restauro a Piazza del Popolo 3 ("Palazzo Lovatti") nel 1870; diventa
// noto in tutta Roma e Italia, viene contattato da Gorga Evans per
// restaurare gli antichi pianoforti del museo di strumenti musicali di
// Santa Croce in Gerusalemme; ai primi del '900 la bottega si trasferisce
// in via Cavallini e poi in via Crescenzio, dove è ancora oggi. Il
// figlio Luigi Papi, accordatore rinomato, lavorò per concertisti come
// Arturo Benedetti Michelangeli, Backhaus e Gieseking. STORIA
// riassunta onestamente dal loro stesso sito (pagina "La nostra
// storia"), non inventata.
// EMAIL: info@pianofortipapi.it, trovata direttamente sulla loro
// pagina "La nostra storia" (pianofortipapi.com/la-nostra-storia),
// confermata via curl diretto (200, tag mailto presente).
// SITO ATTUALE: confermato dal vivo via curl, sito Duda/Italiaonline
// (stesso tipo di piattaforma già vista per fratelli-paiano e
// ottica-la-barbera), design non aggiornato per un'attività con 150
// anni di storia e clientela di concertisti internazionali.
// FOTO: tutte reali, zero stock, scaricate direttamente dal loro sito.
// hero.jpg è la vera sala espositiva con diversi pianoforti (a coda e
// verticali) e i loro veri poster "pianoforti papi" alle pareti.
// about.jpg è un vero interno del negozio con un pianoforte in legno e
// i poster reali del marchio riflessi nel piano lucido di un altro
// pianoforte. gallery-1.jpg è un vero dettaglio della meccanica/tasti
// di un pianoforte. Una quarta foto candidata (un pianoforte con il
// marchio "PETROF" ben visibile sul leggio) è stata scartata di
// proposito perché mostra il marchio di un produttore terzo, non
// l'attività propria di Pianoforti Papi, esattamente il caso descritto
// in CLAUDE.md.
// LOGO: reale, trovato sul loro sito, ma è un wordmark ("pianoforti
// papi") con una chiave di violino come filigrana di sfondo a bassa
// opacità, non un'icona solida separabile in modo netto (diverso dai
// casi con un monogramma pieno, come cristiana-perali o studio-cassio).
// Ritagliare solo la filigrana avrebbe prodotto un'icona sbiadita e
// poco leggibile. Per questo, seguendo CLAUDE.md, si usano le iniziali
// testuali "PP" nei veri colori campionati pixel-per-pixel dal logo
// reale (nero e bordeaux), non colori inventati.
// COLORI: nero `#000000` (dalla parola "pianoforti") e bordeaux
// `#6a262b` (dalla parola "papi"), entrambi campionati pixel-per-pixel
// dal file reale del logo.
// MOOD: editorial (bottega storica con una storia di fondazione forte
// e documentata su più generazioni: Giacomo dal 1870 -> Luigi -> oggi),
// per la linea guida della skill professional-web-design.

const SITE_CONFIG = {
  business: {
    name: "Pianoforti Papi",
    tagline: "Pianoforti a Roma dal 1870",
    logoText: "PP",
    logoImage: "",
  },

  theme: {
    primary: "#000000",
    accent: "#6a262b",
    font: "'Poppins', sans-serif",
    headingFont: "'Playfair Display', serif",
    mood: "editorial",
  },

  hero: {
    heading: "Benvenuti da {{business.name}}",
    subheading: "Vendita, restauro e accordatura di pianoforti a Roma, dal 1870",
    backgroundImage: "images/hero.jpg",
    ctaText: "Contattaci",
    ctaLink: "#contact",
  },

  about: {
    heading: "Chi siamo",
    text: "Dal 1870 la famiglia Papi si dedica ai pianoforti. Giacomo Papi apre il primo laboratorio a Piazza del Popolo, diventando noto in tutta Roma e Italia per le sue doti di messa a punto dello strumento. Suo figlio Luigi, accordatore di grande talento, lavorò per concertisti come Arturo Benedetti Michelangeli, Backhaus e Gieseking. Oggi, in Via Crescenzio nel quartiere Prati, i suoi discendenti continuano la stessa tradizione: vendita, restauro e accordatura di pianoforti di qualità.",
    image: "images/about.jpg",
  },

  offerings: {
    heading: "Cosa offriamo",
    items: [
      { name: "Vendita pianoforti", description: "Pianoforti a coda e verticali, nuovi e restaurati", price: "" },
      { name: "Restauro", description: "Restauro di pianoforti antichi e di pregio", price: "" },
      { name: "Accordatura e manutenzione", description: "Accordatura e messa a punto professionale", price: "" },
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
      { day: "Lunedì - Sabato", hours: "10:00 - 13:00, 15:30 - 19:30" },
      { day: "Domenica", hours: "Chiuso" },
    ],
  },

  contact: {
    heading: "Contattaci",
    address: "Via Crescenzio 99/B, 00193 Roma",
    phone: "06 6869107",
    whatsapp: "",
    email: "info@pianofortipapi.it",
  },

  map: {
    embedSrc: "https://www.google.com/maps?q=Via+Crescenzio+99+Roma&output=embed",
  },

  socials: {
    instagram: "",
    facebook: "",
    tiktok: "",
    website: "https://www.pianofortipapi.com/",
  },

  footer: {
    text: "Pianoforti Papi: pianoforti a Roma dal 1870.",
  },
};
