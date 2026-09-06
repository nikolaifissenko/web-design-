// Demo per Trattoria Memmo dal 1930, Piazza Cavour 14-15, Prati, Roma.
// Riconosciuta ufficialmente come "bottega storica" da Roma Capitale
// (D.D. n. 863 del 17/03/2010), fondata nel 1930. Dati verificati:
// indirizzo e telefono (06 6880 6602) confermati su turismoroma.it,
// PagineGialle, Virgilio Aziende. Nessun sito proprio: solo una pagina
// generica generata da un provider di prenotazioni (DISH Digital
// Solutions, tramite eatbu.com), senza foto o logo reali, solo testo
// promozionale standard, "Designed by DISH Digital Solutions GmbH" in
// fondo alla pagina, chiaro segnale di sito-non-sito. Facebook
// confermato e reale ("Trattoria Memmo dal 1930",
// facebook.com/TrattoriaMemmoDal1930/). Nessuna email indipendentemente
// confermata: un indirizzo (studiotorretti@alice.it) risultava nei dati
// tecnici del sito eatbu, ma ha il nome di uno studio commercialista,
// non del ristorante, quindi non usato per non rischiare di scrivere
// alla persona sbagliata. Nessun Instagram con handle proprio trovato
// (solo pagine "location" generate automaticamente, non un profilo
// gestito dal locale).
//
// FOTO: tutte reali, nessuna stock. Fonte: galleria fotografica
// pubblica su Sluurpy (menu.sluurpy.it), foto genuine caricate dal
// locale/dagli utenti, verificate come JPEG reali (non pagine di
// blocco). hero.jpg = la sala interna vera (mattoni a vista, quadro di
// Roma, tavoli apparecchiati, vista sull'ingresso). about.jpg = lo
// scaffale reale di vini della cantina. gallery-1.jpg = un vero piatto
// di cacio e pepe. gallery-2.jpg = una vera zuppa di verdure.
// gallery-3.jpg = una vera pizza con aperitivo in terrazza.
//
// LOGO: nessun logo grafico trovato, solo il nome scritto per esteso
// ("Trattoria Memmo dal 1930"). Facebook non fetchabile in automatico
// (app client-rendered, redirect a pagina di login, per prassi di
// branding-extraction.md). Fallback legittimo a logoText ("TM"), stesso
// caso di altre piccole trattorie familiari senza un marchio grafico
// autonomo da adattare.
//
// COLORI: campionati pixel per pixel dalle foto reali con PIL: marrone
// caldo dell'intonaco/mattoni della sala (~#5c4934) come primary,
// bordeaux di un dettaglio in sala (~#663b3f) come accent. Non
// inventati.
//
// Prezzi non pubblicati online (solo una stima aggregata di prezzo
// medio su piattaforme terze, non prezzi per piatto): lasciati vuoti,
// da confermare in loco.

const SITE_CONFIG = {
  business: {
    name: "Trattoria Memmo",
    tagline: "Cucina romana a Prati dal 1930",
    logoText: "TM",
    logoImage: "",
  },

  theme: {
    primary: "#5c4934",
    accent: "#663b3f",
    font: "'Poppins', sans-serif",
    headingFont: "'Cormorant Garamond', serif",
    mood: "rustic",
  },

  hero: {
    heading: "Benvenuti da {{business.name}}",
    subheading: "Una bottega storica di Roma Capitale a Piazza Cavour, cucina romana dal 1930",
    backgroundImage: "images/hero.jpg",
    ctaText: "Prenota un tavolo",
    ctaLink: "#contact",
  },

  about: {
    heading: "Chi siamo",
    text: "Trattoria Memmo è una bottega storica riconosciuta da Roma Capitale, a due passi da Castel Sant'Angelo e dal Museo dell'Ara Pacis. Dal 1930 la cucina romana più autentica arriva in tavola: carbonara, gricia, amatriciana, con una cantina di vini italiani scelti per accompagnarla.",
    image: "images/about.jpg",
  },

  offerings: {
    heading: "Menu",
    items: [
      { name: "Cacio e pepe", description: "La ricetta romana più essenziale", price: "" },
      { name: "Spaghetti alla gricia", description: "Guanciale e pecorino romano", price: "" },
      { name: "Bucatini all'amatriciana", description: "Il grande classico romano", price: "" },
      { name: "Spaghetti alla carbonara", description: "Uova, guanciale e pecorino", price: "" },
      { name: "Costolette d'agnello", description: "Scottadito alla romana", price: "" },
      { name: "Pizza quattro formaggi", description: "Cotta al forno, impasto classico", price: "" },
    ],
  },

  gallery: {
    heading: "Galleria",
    images: ["images/gallery-1.jpg", "images/gallery-2.jpg", "images/gallery-3.jpg"],
  },

  hours: {
    heading: "Orari",
    schedule: [
      { day: "Tutti i giorni", hours: "12:00 - 00:00" },
    ],
  },

  contact: {
    heading: "Contattaci",
    address: "Piazza Cavour 14-15, 00193 Roma",
    phone: "06 6880 6602",
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
    text: "Trattoria Memmo: cucina romana a Prati dal 1930, Roma.",
  },
};
