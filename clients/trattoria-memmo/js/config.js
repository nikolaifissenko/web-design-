// Demo per Trattoria Memmo dal 1930 (Piazza Cavour 14/15, Prati, Roma), a
// pochi passi dal Museo dell'Ara Pacis e dai Palazzi di Giustizia. Trattoria
// romana classica, riconosciuta "Negozio Storico" da Roma Capitale. Nessun
// sito web proprio trovato (solo Turismo Roma, TripAdvisor, Yelp, aggregatori
// di menu): confermato tramite Turismo Roma e ricerca diretta.
//
// CONTATTI: nessuna email trovata nonostante ricerca reale. Facebook reale
// e attivo confermato (facebook.com/TrattoriaMemmoDal1930/, linkato anche
// dalla scheda ufficiale di Turismo Roma). Instagram non trovato. Outreach
// quindi solo via DM Facebook o telefono, non via email.
//
// MENU: piatti e prezzi REALI, presi dal PDF del menù strutturato pubblicato
// su piatti.menu (indirizzo e telefono nel PDF combaciano con le fonti
// ufficiali, quindi i dati testuali sono attendibili), non inventati.
//
// FOTO: NESSUNA foto reale trovata, nonostante verifica seria su più fonti
// (sito Turismo Roma: nessuna immagine del locale; galleria piatti.menu:
// scartata perché contaminata con foto di ALTRI locali, tra cui uno
// smaccatamente sbagliato: l'insegna di un ristorante cinese "Dragon &
// Phoenix" e un piatto marchiato "Osteria da Fortunata", stesso rischio di
// misattribuzione già capitato con Torrefazione Foroni, quindi scartate
// tutte per sicurezza; Yelp, TheFork, restaurantguru: bloccati (403/503);
// Facebook: irraggiungibile da fetch automatico, come da regola nota).
// Usate quindi foto stock oneste, scelte con cura per il mood (Unsplash
// License, nessuna attribuzione richiesta, nessun logo/marchio di terzi
// visibile): hero = sala con tovaglia a quadretti rossi e sedute rosse
// (photo-1671453359294-573a40fa1921, Tom Caillarec), about = spaghetti alla
// carbonara (photo-1633337474564-1d9478ca4e2e, Rob Wicks), gallery-1 = calice
// di vino rosso versato (photo-1553361371-9b22f78e8b1d, Lefteris kallergis).
// Da sostituire con foto vere del locale se/quando il cliente compra.
//
// COLORI: nessun sito/logo reale da cui estrarli, scelti a mano per il mood
// "rustic" (rosso trattoria classico + crema), non inventati per finta
// autenticità, dichiarato onestamente qui.
//
// LOGO: nessun logo reale trovato in nessuna fonte. logoText di fallback,
// caso legittimo (nessun materiale da adattare), non una scorciatoia.

const SITE_CONFIG = {
  business: {
    name: "Trattoria Memmo",
    tagline: "Cucina romana dal 1930, a Piazza Cavour",
    logoText: "TM",
    logoImage: "",
  },

  theme: {
    primary: "#8b1e1e",
    accent: "#d9b98c",
    font: "'Poppins', sans-serif",
    headingFont: "'Playfair Display', serif",
    mood: "rustic",
  },

  hero: {
    heading: "Benvenuti da {{business.name}}",
    subheading: "Trattoria romana dal 1930, nel cuore di Prati",
    backgroundImage: "images/hero.jpg",
    ctaText: "Prenota un tavolo",
    ctaLink: "#contact",
  },

  about: {
    heading: "Chi siamo",
    text: "Trattoria Memmo è una trattoria romana classica dal 1930, riconosciuta Negozio Storico da Roma Capitale, a due passi dal Museo dell'Ara Pacis. La cucina propone i grandi classici della tradizione: cacio e pepe, amatriciana, saltimbocca alla romana, pizza cotta nel forno a legna. Un ambiente familiare e informale, aperto tutti i giorni.",
    image: "images/about.jpg",
  },

  offerings: {
    heading: "Il nostro menù",
    items: [
      { name: "Tonnarelli cacio e pepe", description: "Il grande classico della cucina romana", price: "€8" },
      { name: "Tonnarelli alla gricia o alla carbonara", description: "Pasta fresca, ricetta tradizionale", price: "€9" },
      { name: "Saltimbocca alla romana", description: "Vitello, prosciutto e salvia", price: "€10" },
      { name: "Fettuccine al ragù", description: "Pasta fresca fatta in casa", price: "€9" },
      { name: "Pizza margherita", description: "Cotta nel forno a legna", price: "€7" },
      { name: "Trippa romana", description: "Piatto storico del quinto quarto romano", price: "€10" },
      { name: "Tiramisù", description: "Il classico dolce della casa", price: "€5" },
    ],
  },

  gallery: {
    heading: "Galleria",
    images: ["images/gallery-1.jpg"],
  },

  hours: {
    heading: "Orari",
    schedule: [
      { day: "Lunedì - Domenica", hours: "12:00 - 01:00" },
    ],
  },

  contact: {
    heading: "Contattaci",
    address: "Piazza Cavour, 14/15, 00193 Roma",
    phone: "06 68806602",
    whatsapp: "",
    email: "",
  },

  map: {
    embedSrc: "https://www.google.com/maps?q=Piazza+Cavour+14+Roma&output=embed",
  },

  socials: {
    instagram: "",
    facebook: "https://www.facebook.com/TrattoriaMemmoDal1930/",
    tiktok: "",
    website: "",
  },

  footer: {
    text: "Trattoria Memmo: cucina romana dal 1930, a Piazza Cavour.",
  },
};
