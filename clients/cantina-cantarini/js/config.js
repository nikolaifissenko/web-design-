// Demo per Cantina Cantarini — hanno già un sito proprio
// (ristorantecantinacantarini.it) ma è vecchio e dell'era 2014 (CMS
// "paginesi.it", jQuery 1.10, nessun responsive design vero). Dati
// verificati: indirizzo, telefono, orari dal loro stesso sito; email
// reale trovata nel footer del loro sito (santinafattori1964@gmail.com,
// non inventata); Instagram @cantinacantarini e Facebook confermati via
// ricerca. Storia (fondata nel 1903 da Mariano Cantarini) confermata da
// Touring Club Italiano e Turismo Roma.
// LOGO: reale, ritagliato dal loro sito (il pesce inciso dentro la
// cornice, parte sinistra del logo originale 400x120 — un ritaglio
// pulito, non serve un redesign, l'icona è già quadrata di suo):
// images/logo.png.
// FOTO: tutte reali, nessuna stock, tutte estratte dal loro stesso sito
// (cms.paginesi.it/user_img_online/2450/-1/...). hero.jpg = foto
// stampa dell'insegna/vetrina esterna in Piazza Sallustio (trovata su
// camillabaresani.com, articolo del 2019 sul locale). about.jpg =
// ravioli su un piatto con il marchio "Cant Cant" visibile sul bordo —
// prova che è davvero il loro piatto, non stock. gallery-1.jpg =
// carbonara, gallery-2.jpg = fritto misto di paranza, entrambe foto
// reali del locale (2014, basse risoluzione ma autentiche). NOTA:
// il sito aveva anche 2 foto "food" più recenti (2023) di uno
// spezzatino e una parmigiana di pollo — scartate: EXIF mostra
// DateTimeOriginal identico all'orario di caricamento, luce da studio
// generica, piatti (parmigiana) che non sono nemmeno nel loro menu
// romano-marchigiano — quasi certamente stock aggiunto al sito, non
// foto reali del locale.

const SITE_CONFIG = {
  business: {
    name: "Cantina Cantarini",
    tagline: "Osteria romana dal 1903: cucina romana e marchigiana a due passi da Via Veneto",
    logoText: "CC",
    logoImage: "images/logo.png",
  },

  theme: {
    primary: "#a52a2a",
    accent: "#800000",
    font: "'Poppins', sans-serif",
    headingFont: "'Cormorant Garamond', serif",
    mood: "rustic",
  },

  hero: {
    heading: "Benvenuti da {{business.name}}",
    subheading: "Cucina romana e marchigiana genuina, nello stesso locale di Piazza Sallustio dal 1903",
    backgroundImage: "images/hero.jpg",
    ctaText: "Prenota un tavolo",
    ctaLink: "#contact",
  },

  about: {
    heading: "Chi siamo",
    text: "Cantina Cantarini nasce nel 1903 per opera di Mariano Cantarini, nel cuore del quartiere Sallustiano. Da oltre un secolo la stessa famiglia porta avanti una cucina senza fronzoli: tovaglie di carta, bicchieri spessi e piatti di pesce il martedì, giovedì e venerdì, di carne e specialità marchigiane il resto della settimana. Un rifugio autentico in una zona di Roma che è cambiata tutto intorno.",
    image: "images/about.jpg",
  },

  offerings: {
    heading: "Menu",
    items: [
      { name: "Spaghetti alla carbonara", description: "Uova, guanciale e pecorino romano", price: "" },
      { name: "Ravioli fatti in casa", description: "La ricetta della casa, dal 1903", price: "" },
      { name: "Fritto misto di paranza", description: "Pesce fresco fritto, specialità della casa", price: "" },
      { name: "Spezzatino di vitella alla cacciatora", description: "Un classico della cucina marchigiana e romana", price: "" },
      { name: "Trippa alla romana", description: "Tradizione del quinto quarto", price: "" },
    ],
  },

  gallery: {
    heading: "Galleria",
    images: ["images/gallery-1.jpg", "images/gallery-2.jpg"],
  },

  hours: {
    heading: "Orari",
    schedule: [
      { day: "Lunedì - Sabato", hours: "12:30 - 15:00, 19:30 - 22:30" },
      { day: "Domenica", hours: "Chiuso" },
    ],
  },

  contact: {
    heading: "Contattaci",
    address: "Piazza Sallustio, 12, 00187 Roma",
    phone: "06 4743341",
    whatsapp: "",
    email: "santinafattori1964@gmail.com",
  },

  map: {
    embedSrc: "https://www.google.com/maps?q=Piazza+Sallustio+12+Roma&output=embed",
  },

  socials: {
    instagram: "https://www.instagram.com/cantinacantarini/",
    facebook: "https://www.facebook.com/cantina.cantarini/",
    tiktok: "",
    website: "https://www.ristorantecantinacantarini.it/",
  },

  footer: {
    text: "Cantina Cantarini — Osteria romana e marchigiana a Roma dal 1903.",
  },
};
