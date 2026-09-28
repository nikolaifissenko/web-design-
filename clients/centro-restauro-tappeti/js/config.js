// Demo per Centro Lavaggio e Restauro Tappeti di Esmail Yaghobi: Via
// Nomentana 215, Roma. Specializzato in lavaggio professionale,
// sanificazione, smacchiatura, restauro e riparazione di tappeti
// persiani, orientali, antichi e moderni. Fondato e gestito da Esmail
// Yaghobi. Nessun anno di fondazione o numero di generazioni è stato
// trovato scritto direttamente sul loro sito (un riassunto di ricerca
// aveva suggerito "5 generazioni", ma quella frase non compare da
// nessuna parte sul sito stesso, quindi non è stata usata qui: per
// onestà, si descrive solo quello che il sito stesso afferma).
// EMAIL: info@centrolavaggioerestaurotappeti.it, trovata direttamente
// nel markup schema.org (JSON-LD) della loro pagina Contatti, campo
// "email" del blocco LocalBusiness, confermata via curl diretto.
// SITO ATTUALE: confermato dal vivo via curl, sito proprio funzionante
// ma con un design essenziale, tipico di un piccolo sito realizzato
// anni fa e mai aggiornato visivamente.
// FOTO: tutte reali, zero stock, tutte scaricate direttamente dal loro
// sito (cartella /public/ e /images/). hero.jpg è un vero primo piano
// di un autentico tappeto persiano (motivo floreale rosso, blu e
// oro). about.jpg è una vera foto del titolare Esmail Yaghobi mentre
// restaura a mano la frangia di un tappeto antico, con altri veri
// tappeti visibili sullo sfondo. gallery-1.jpg è un vero dettaglio di
// una riparazione in corso sull'ordito di un tappeto, con altri veri
// tappeti persiani sullo sfondo.
// LOGO: reale, trovato sul loro sito (un'illustrazione di un tappeto
// arrotolato, in stile pergamena, con un motivo decorativo). Icona
// separabile dal resto del banner promozionale (che includeva anche
// indirizzo e telefono), ritagliata al solo tappeto arrotolato e
// centrata su fondo avorio per lo slot circolare del template.
// COLORI: bordeaux `#6b0000`, campionato pixel-per-pixel dal vero
// tappeto arrotolato del logo, e crema/oro `#fadcc8`, campionato
// pixel-per-pixel dal motivo decorativo interno dello stesso logo.
// MOOD: rustic (artigiano pratico e concreto, senza una storia di
// fondazione documentata da presentare come "istituzione storica"),
// per la linea guida della skill professional-web-design.

const SITE_CONFIG = {
  business: {
    name: "Centro Restauro Tappeti",
    tagline: "Lavaggio e restauro di tappeti persiani e orientali a Roma",
    logoText: "CT",
    logoImage: "images/logo.png",
  },

  theme: {
    primary: "#6b0000",
    accent: "#fadcc8",
    font: "'Poppins', sans-serif",
    headingFont: "'Playfair Display', serif",
    mood: "rustic",
  },

  hero: {
    heading: "Benvenuti da {{business.name}}",
    subheading: "Lavaggio, riparazione e restauro di tappeti persiani e orientali a Roma",
    backgroundImage: "images/hero.jpg",
    ctaText: "Contattaci",
    ctaLink: "#contact",
  },

  about: {
    heading: "Chi siamo",
    text: "Il Centro Lavaggio e Restauro Tappeti di Esmail Yaghobi è un punto di riferimento a Roma per il lavaggio professionale, il restauro e la riparazione di tappeti persiani, orientali e moderni. Ogni intervento, dalla pulizia profonda alla rigenerazione delle fibre fino al restauro artigianale della trama, viene svolto a mano con tecniche tradizionali, per preservare il valore e la bellezza di ogni tappeto.",
    image: "images/about.jpg",
  },

  offerings: {
    heading: "Cosa offriamo",
    items: [
      { name: "Lavaggio tappeti", description: "Pulizia profonda, sanificazione e trattamenti anti-acari e anti-tarme", price: "" },
      { name: "Restauro e riparazione", description: "Restauro artigianale di tappeti persiani, orientali e antichi", price: "" },
      { name: "Ritiro e consegna", description: "Ritiro e riconsegna gratuita a domicilio in tutta Roma", price: "" },
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
      { day: "Lunedì - Sabato", hours: "09:30 - 13:00, 16:00 - 19:00" },
      { day: "Domenica", hours: "Chiuso" },
    ],
  },

  contact: {
    heading: "Contattaci",
    address: "Via Nomentana 215, 00198 Roma",
    phone: "347 172 9916",
    whatsapp: "",
    email: "info@centrolavaggioerestaurotappeti.it",
  },

  map: {
    embedSrc: "https://www.google.com/maps?q=Via+Nomentana+215+Roma&output=embed",
  },

  socials: {
    instagram: "",
    facebook: "",
    tiktok: "",
    website: "https://www.centrolavaggioerestaurotappeti.it/",
  },

  footer: {
    text: "Centro Restauro Tappeti: lavaggio e restauro di tappeti persiani e orientali a Roma.",
  },
};
