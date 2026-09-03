// Demo per D.I. Pellegrini Dario, fabbro artigiano (Via di Rebibbia 43,
// Roma). Il loro sito reale (pellegrinidario.com) è confermato dated:
// nessun tag viewport, navigazione a finestre popup JS di vecchio
// stile, nessun framework CSS moderno. Email reale trovata sul loro
// stesso sito (pellegrini.dario56@gmail.com), non confermata su una
// seconda fonte indipendente (i principali elenchi — Virgilio,
// MisterImprese, PagineGialle — riportano solo il telefono), ma è
// l'indirizzo che l'attività stessa pubblica come contatto.
//
// FOTO: tutte reali, scaricate direttamente dalla galleria del loro
// sito (/galleria.html), che conta 66 foto reali di lavori completati.
// hero.jpg è un cancello in ferro battuto con monogramma dorato,
// about.jpg è una scala esterna in ferro, gallery-1..6 sono ringhiere e
// balconi reali installati su edifici di Roma. Nessuna immagine stock.
//
// LOGO: nessun logo esiste per questa attività (solo il nome). Per
// questo, come da branding-extraction.md, è stata disegnata da zero
// un'icona incudine e martello, non generata da IA, con colori
// campionati dalle foto reali: nero ferro battuto (~#2b241d), oro
// caldo delle decorazioni (~#c9a876), crema di fondo (~#ede4d4). Vedi
// images/logo.svg.
//
// Nessuna storia/fondazione più dettagliata è stata trovata nelle
// fonti controllate, quindi il testo "Chi siamo" resta ancorato ai
// fatti verificabili (il mestiere, i lavori reali in galleria), senza
// inventare un anno di fondazione o un fondatore.

const SITE_CONFIG = {
  business: {
    name: "Pellegrini Dario",
    tagline: "Fabbro artigiano a Roma, ferro battuto su misura",
    logoText: "PD",
    logoImage: "images/logo.svg",
  },

  theme: {
    primary: "#2b241d",
    accent: "#c9a876",
    font: "'Poppins', sans-serif",
    headingFont: "'Playfair Display', serif",
    mood: "editorial",
  },

  hero: {
    heading: "Benvenuti da {{business.name}}",
    subheading: "Cancelli, ringhiere e balconi in ferro battuto, lavorati a mano a Roma",
    backgroundImage: "images/hero.jpg",
    ctaText: "Richiedi un preventivo",
    ctaLink: "#contact",
  },

  about: {
    heading: "Chi siamo",
    text: "Pellegrini Dario è un fabbro artigiano che lavora il ferro battuto su misura per cancelli, ringhiere, scale e balconi. Ogni pezzo è disegnato e realizzato a mano, dal singolo cancello con monogramma al restauro di una scala esterna, con la cura di chi conosce il mestiere.",
    image: "images/about.jpg",
  },

  offerings: {
    heading: "I nostri servizi",
    items: [
      { name: "Cancelli su misura", description: "Disegnati e forgiati a mano, anche con monogrammi e decori personalizzati", price: "" },
      { name: "Ringhiere e balconi", description: "Realizzazione e restauro di ringhiere in ferro battuto", price: "" },
      { name: "Scale esterne", description: "Progettazione e costruzione di scale in ferro", price: "" },
      { name: "Restauro ferro battuto", description: "Recupero e messa a nuovo di manufatti esistenti", price: "" },
    ],
  },

  gallery: {
    heading: "Galleria",
    images: ["images/gallery-1.jpg", "images/gallery-2.jpg", "images/gallery-3.jpg", "images/gallery-4.jpg", "images/gallery-5.jpg", "images/gallery-6.jpg"],
  },

  hours: {
    heading: "Orari",
    schedule: [
      { day: "Lunedì - Venerdì", hours: "8:00 - 13:00, 15:00 - 19:00" },
      { day: "Sabato", hours: "8:00 - 13:00" },
      { day: "Domenica", hours: "Chiuso" },
    ],
  },

  contact: {
    heading: "Contattaci",
    address: "Via di Rebibbia, 43, 00156 Roma",
    phone: "06 4073549",
    whatsapp: "",
    email: "pellegrini.dario56@gmail.com",
  },

  map: {
    embedSrc: "https://www.google.com/maps?q=Via+di+Rebibbia+43+Roma&output=embed",
  },

  socials: {
    instagram: "",
    facebook: "",
    tiktok: "",
    website: "http://www.pellegrinidario.com/",
  },

  footer: {
    text: "Pellegrini Dario: fabbro artigiano a Roma, ferro battuto su misura.",
  },
};
