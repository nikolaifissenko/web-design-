// Demo per iSellai dal 1902 (Via Conte Verde, 17, Esquilino, Roma).
// Laboratorio di riparazione borse, valigie, trolley e ombrelli, oggi parte
// del gruppo Carucci dal 1926. Hanno un sito proprio (isellai.it) ma
// datato/non responsive per gli standard attuali: confermato con verifica
// diretta.
//
// CONTATTI: email REALE confermata direttamente sul loro sito
// (isellaidal1902@gmail.com), non trovata solo su un aggregatore terzo.
// Telefono e WhatsApp reali anch'essi dal sito.
//
// COLORI: REALI, estratti dal CSS del loro sito (blu navy #002255 e arancio
// #f59331, usati in modo consistente in tutto il tema), non inventati.
//
// LOGO: nessun logo grafico trovato sul loro sito, solo il nome "iSellai
// dal 1902" in testo. logoText di fallback, caso legittimo (nessun
// materiale da adattare).
//
// FOTO: le immagini sul loro sito (valigie in aeroporto, set da spiaggia,
// fila di trolley in studio) sono stock generico da fornitori/cataloghi
// (Delsey, Roncato, ecc.), non foto reali del laboratorio. Usate quindi
// foto stock oneste scelte a mano (Unsplash License, nessun logo di terzi
// visibile: le etichette d'albergo vintage sulle valigie sono dettagli
// d'epoca decorativi, non marchi di aziende concorrenti moderne): hero =
// valigie vintage impilate in una vetrina (photo-1479888230021-
// c24f136d849f, Erwan Hesry), about = pila di valigie vintage contro un
// muro di mattoni (photo-1703237456394-844b2d45550b, William Warby),
// gallery-1 = attrezzi da pelletteria (photo-1628483211662-9bcc692c46dc,
// Konstantin Evdokimov). Da sostituire con foto vere del laboratorio
// se/quando il cliente compra.
//
// PREZZI: non pubblicati (preventivo gratuito su richiesta, come da loro
// sito). Lasciati vuoti nel menù servizi.
//
// ORARI: non confermati sul sito visitato. Quelli sotto sono plausibili
// per un negozio di questo tipo in zona ma NON verificati, da confermare
// per telefono prima di pubblicare online se il cliente compra.

const SITE_CONFIG = {
  business: {
    name: "iSellai dal 1902",
    tagline: "Riparazione borse, valigie e ombrelli, a Roma dal 1902",
    logoText: "IS",
    logoImage: "",
  },

  theme: {
    primary: "#002255",
    accent: "#f59331",
    font: "'Poppins', sans-serif",
    headingFont: "'Playfair Display', serif",
    mood: "editorial",
  },

  hero: {
    heading: "Benvenuti da {{business.name}}",
    subheading: "Riparazione di borse, valigie e ombrelli, a Roma dal 1902",
    backgroundImage: "images/hero.jpg",
    ctaText: "Contattaci",
    ctaLink: "#contact",
  },

  about: {
    heading: "Chi siamo",
    text: "iSellai dal 1902 è un laboratorio storico all'Esquilino, oggi parte del gruppo Carucci dal 1926. Ripariamo borse, valigie, trolley, zaini, capi in pelle e tessuto, ombrelli, cinture e portafogli: perché un oggetto di qualità va riparato, non buttato via. Preventivo gratuito su richiesta.",
    image: "images/about.jpg",
  },

  offerings: {
    heading: "I nostri servizi",
    items: [
      { name: "Riparazione trolley e valigie", description: "Ruote, maniglie, aste, chiusure", price: "" },
      { name: "Riparazione zaini e borse", description: "Cuciture, cerniere, manici", price: "" },
      { name: "Capi in pelle e tessuto", description: "Restauro e riparazione", price: "" },
      { name: "Sostituzione cerniere", description: "Per borse e valigie", price: "" },
      { name: "Riparazione ombrelli", description: "Aste, stecche, meccanismi", price: "" },
      { name: "Cinture e portafogli", description: "Riparazione e sistemazione", price: "" },
      { name: "Tintura e ricolorazione", description: "Per pelle e tessuto", price: "" },
    ],
  },

  gallery: {
    heading: "Galleria",
    images: ["images/gallery-1.jpg"],
  },

  hours: {
    heading: "Orari",
    schedule: [
      { day: "Lunedì - Venerdì", hours: "09:00 - 13:00, 15:30 - 19:00" },
      { day: "Sabato", hours: "09:00 - 13:00" },
      { day: "Domenica", hours: "Chiuso" },
    ],
  },

  contact: {
    heading: "Contattaci",
    address: "Via Conte Verde, 17, 00185 Roma",
    phone: "06 44340585",
    whatsapp: "338 8842977",
    email: "isellaidal1902@gmail.com",
  },

  map: {
    embedSrc: "https://www.google.com/maps?q=Via+Conte+Verde+17+Roma&output=embed",
  },

  socials: {
    instagram: "",
    facebook: "",
    tiktok: "",
    website: "https://isellai.it/",
  },

  footer: {
    text: "iSellai dal 1902: riparazione borse, valigie e ombrelli, a Roma.",
  },
};
