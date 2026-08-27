// Demo per Antica Cappelleria dell'Urbe Lombardi — dati verificati:
// nome, indirizzo, telefono, email, descrizione (dal loro sito attuale
// cappellilombardi.it).
// SITO ATTUALE: vivo, con un negozio online funzionante, ma il design è
// dated — impaginazione stretta, poca aria, un banner cookie che occupa
// più spazio della cura dedicata alla vetrina. Ha comunque un catalogo
// prodotti reale con foto professionali dei cappelli.
// LOGO: il loro logo reale (un'icona di cappello + scritta "Cappelleria
// LOMBARDI" in un riquadro sotto, 125×96px) è troppo piccolo e troppo
// rettangolare per il cerchio 40×40 del template — stesso problema di
// Autofficina Pisino (icona+testo non separabili in modo pulito, e la
// risoluzione è troppo bassa per un ritaglio pulito). Invece di usare le
// iniziali, ridisegnata un'icona di cappello fedora usando gli stessi
// colori reali del loro sito (crema/tortora `#cab599` e marrone scuro
// `#28201c`, presi dai colori CSS del banner cookie del loro sito — è lì
// che compaiono esplicitamente nel codice, e coincidono con la palette
// crema/marrone del loro logo originale). File: images/logo.png.
// FOTO: tutte reali — foto prodotto del loro catalogo online (non foto
// stock generiche): un panama Borsalino bianco/blu (hero), un fedora a
// righe grigio/rosso (about), una pila di berretti piatti colorati
// (gallery-1), un cappello a secchiello floreale Seeberger (gallery-2),
// una paglietta boater classica (gallery-3). Sono foto da catalogo su
// sfondo bianco, non scatti del negozio, ma sono i prodotti reali che
// vendono — non sostituite con stock.

const SITE_CONFIG = {
  business: {
    name: "Antica Cappelleria dell'Urbe Lombardi",
    tagline: "Cappelleria storica a conduzione familiare, a due passi da Santa Maria Maggiore",
    logoText: "L",
    logoImage: "images/logo.png",
  },

  theme: {
    primary: "#28201c",
    accent: "#a8763f",
    font: "'Playfair Display', serif",
    mood: "editorial",
  },

  hero: {
    heading: "Benvenuti da {{business.name}}",
    subheading: "Cappelli per uomo e donna, tradizione e nuove tendenze, nel cuore di Roma",
    backgroundImage: "images/hero.jpg",
    ctaText: "Vieni a trovarci",
    ctaLink: "#contact",
  },

  about: {
    heading: "Chi siamo",
    text: "Sulla storica via Merulana, a due passi dalla basilica di Santa Maria Maggiore, l'Antica Cappelleria dell'Urbe Lombardi accoglie i propri clienti da generazioni. Un'ampia scelta di cappelli per uomo e donna, tra tradizione e nuove tendenze, con la cortesia e la professionalità di un vero negozio di famiglia.",
    image: "images/about.jpg",
  },

  offerings: {
    heading: "Categorie",
    items: [
      { name: "Cappelli uomo", description: "Fedora, panama, berretti e coppole", price: "" },
      { name: "Cappelli donna", description: "Cloche, paglietta, fascinator e cappelli da cerimonia", price: "" },
      { name: "Accessori", description: "Sciarpe, guanti e piccoli accessori", price: "" },
      { name: "Marchi selezionati", description: "Borsalino, Stetson, Seeberger e altri", price: "" },
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
      { day: "Lunedì", hours: "da confermare" },
      { day: "Martedì", hours: "da confermare" },
      { day: "Mercoledì", hours: "da confermare" },
      { day: "Giovedì", hours: "da confermare" },
      { day: "Venerdì", hours: "da confermare" },
      { day: "Sabato", hours: "da confermare" },
      { day: "Domenica", hours: "Chiuso" },
    ],
  },

  contact: {
    heading: "Contattaci",
    address: "Via Merulana, 12, 00185 Roma",
    phone: "06 446 5820",
    whatsapp: "",
    email: "cappellerialombardi@tiscali.it",
  },

  map: {
    embedSrc: "https://www.google.com/maps?q=Via+Merulana+12+Roma&output=embed",
  },

  socials: {
    instagram: "https://www.instagram.com/anticacappellerialombardi",
    facebook: "",
    tiktok: "",
    website: "https://www.cappellilombardi.it/",
  },

  footer: {
    text: "Antica Cappelleria dell'Urbe Lombardi — Roma.",
  },
};
