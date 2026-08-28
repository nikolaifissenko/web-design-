// Demo per Ristorante Panzirone. Il dominio storico (panzirone.it) non
// risolve più (DNS morto, verificato). Esiste un "ristorantepanzirone.shop"
// che si presenta come loro sito, ma è quasi certamente un placeholder
// generato: testi da stock ("hidden gem", "culinary haven"), recensioni
// finte, nessuna verifica reale. Non usato come fonte per nulla.
// ATTENZIONE PER NIKOLAI: esiste anche un "anticatrattoriapanzirone.com"
// a Piazza Navona 72 (un numero civico di distanza da questo, il 73).
// Potrebbe essere la stessa attività con un nome leggermente diverso, o
// un'attività diversa della stessa famiglia/zona. Non usato come fonte
// per branding/dati, per non rischiare di attribuire foto/info al posto
// sbagliato. Verificare per telefono prima di mandare qualunque
// contatto: chiedere "siete voi il Ristorante Panzirone di Piazza
// Navona 73, dal 1914?" I dati sotto vengono dalla scheda ufficiale di
// Turismo Roma (bottega storica, decreto 1164 del 2004), la fonte più
// autorevole trovata.
// LOGO: nessun logo reale trovato da nessuna fonte verificabile (il
// sito .shop non è attendibile, Instagram non è raggiungibile da fetch
// automatico). Usato logoText di conseguenza, non un redesign, perché
// non esiste alcun marchio reale da cui partire, solo iniziali.
// FOTO: tutte reali, nessuna stock. Trovate su piatti.menu (aggregatore
// con foto caricate dai clienti), riconoscibili come genuinamente di
// questo locale dalla tovaglia a quadretti rosso/bianco, un dettaglio
// distintivo citato indipendentemente anche in recensioni/articoli
// ("pink checked tablecloths") trovati separatamente via ricerca web.
// hero.jpg = pizza e cannelloni al tavolo con vista sui sampietrini di
// Piazza Navona; about.jpg = prosciutto e due pizze, tavolo all'aperto;
// gallery-1.jpg = tiramisù; gallery-2.jpg = spaghetti alle vongole.
// Altre foto trovate sullo stesso aggregatore per "roma-3" sono state
// scartate perché chiaramente di altri locali (bakso indonesiano, un
// pub in stile birreria): piatti.menu mescola foto di ristoranti
// diversi sotto lo stesso URL città, verificato piatto per piatto.

const SITE_CONFIG = {
  business: {
    name: "Ristorante Panzirone",
    tagline: "Cucina romana in Piazza Navona dal 1914",
    logoText: "RP",
    logoImage: "",
  },

  theme: {
    primary: "#960028",
    accent: "#2c2018",
    font: "'Poppins', sans-serif",
    headingFont: "'Cormorant Garamond', serif",
    mood: "rustic",
  },

  hero: {
    heading: "Benvenuti da {{business.name}}",
    subheading: "Cucina romana tradizionale con vista su Piazza Navona, dal 1914",
    backgroundImage: "images/hero.jpg",
    ctaText: "Prenota un tavolo",
    ctaLink: "#contact",
  },

  about: {
    heading: "Chi siamo",
    text: "Dal 1914 nel cuore di Piazza Navona, il Ristorante Panzirone è riconosciuto come bottega storica di Roma Capitale. Cucina romana e italiana curata, tavoli all'aperto con vista sulla fontana del Bernini e sull'obelisco: una delle vedute più belle di Roma per un pranzo o una cena.",
    image: "images/about.jpg",
  },

  offerings: {
    heading: "Menu",
    items: [
      { name: "Amatriciana", description: "Il grande classico della cucina romana", price: "" },
      { name: "Gnocchi fatti in casa", description: "Preparati freschi ogni giorno", price: "" },
      { name: "Spaghetti alle vongole", description: "Pesce fresco, ricetta tradizionale", price: "" },
      { name: "Pizza al forno a legna", description: "Impasto classico, farciture tradizionali", price: "" },
      { name: "Tiramisù della casa", description: "Fatto in casa", price: "" },
    ],
  },

  gallery: {
    heading: "Galleria",
    images: ["images/gallery-1.jpg", "images/gallery-2.jpg"],
  },

  hours: {
    heading: "Orari",
    schedule: [
      { day: "Tutti i giorni", hours: "12:00 - 02:00" },
    ],
  },

  contact: {
    heading: "Contattaci",
    address: "Piazza Navona, 73, 00186 Roma",
    phone: "06 6813 4054",
    whatsapp: "",
    email: "info@panzirone.it",
  },

  map: {
    embedSrc: "https://www.google.com/maps?q=Piazza+Navona+73+Roma&output=embed",
  },

  socials: {
    instagram: "https://www.instagram.com/panzirone/",
    facebook: "https://www.facebook.com/pages/Restaurant-Panzirone-In-Piazza-Navona/199838213392747",
    tiktok: "",
    website: "",
  },

  footer: {
    text: "Ristorante Panzirone: Piazza Navona, Roma, dal 1914.",
  },
};
