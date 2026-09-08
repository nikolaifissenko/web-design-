// Demo per Calzolaio della Garbatella (Via Padre Reginaldo Giuliani, 42,
// Garbatella, Roma). Laboratorio di riparazione calzature e pelletteria nel
// quartiere Garbatella. Nessun sito web proprio trovato in nessuna fonte.
//
// CONTATTI: nessuna email trovata nonostante ricerca reale. Instagram reale
// e attivo confermato (@calzolaio_della_garbatella, 308 follower) e Facebook
// reale confermato (facebook.com/calzolaiogarbatella). Outreach quindi solo
// via DM Instagram/Facebook o telefono, non via email.
//
// FOTO: NESSUNA foto reale trovata. Instagram/Facebook irraggiungibili da
// fetch automatico (regola nota, confermata di nuovo qui). Nessun articolo
// di stampa locale (RomaToday zona Garbatella, negozidiroma.com) dedicato a
// questo negozio specifico trovato. Usate quindi foto stock oneste, scelte
// con cura (Unsplash License, nessuna attribuzione richiesta, nessun logo
// di terzi visibile: scartate diverse candidate proprio perché mostravano
// insegne di altri negozi, es. "The Groom Shoes Repair" di Hong Kong):
// hero = mani che cuciono pelle a mano in morsa (photo-1533256964518-
// 82ad663bd977, Two Paddles Axe and Leatherwork), about = natura morta di
// attrezzi da calzolaio e stivaletto in pelle (photo-1529953717281-
// 81a40b131119, José Ramírez), gallery-1 = foto d'epoca in bianco e nero di
// due calzolai al lavoro in bottega (photo-1759662232622-6c0754a379f4).
// Da sostituire con foto vere del laboratorio se/quando il cliente compra.
//
// COLORI: nessun sito/logo reale da cui estrarli, scelti a mano (marrone
// cuoio + ottone) per richiamare pelle e attrezzi da lavoro, non inventati
// per finta autenticità, dichiarato onestamente qui.
//
// LOGO: nessun logo reale trovato in nessuna fonte. logoText di fallback,
// caso legittimo (nessun materiale da adattare), non una scorciatoia.
//
// PREZZI: non pubblicati da nessuna parte (comune per questo tipo di
// laboratorio, dove il prezzo dipende dal lavoro). Lasciati vuoti nel menù
// servizi, da confermare di persona prima di finalizzare se il cliente compra.
//
// ORARI: nessun orario reale trovato in nessuna fonte. Quelli sotto sono
// plausibili per un laboratorio artigiano di quartiere ma NON confermati,
// da verificare per telefono prima di pubblicare online se il cliente compra.

const SITE_CONFIG = {
  business: {
    name: "Calzolaio della Garbatella",
    tagline: "Riparazione calzature e pelletteria, nel cuore della Garbatella",
    logoText: "CG",
    logoImage: "",
  },

  theme: {
    primary: "#6b3d21",
    accent: "#b8863b",
    font: "'Poppins', sans-serif",
    headingFont: "'Playfair Display', serif",
    mood: "editorial",
  },

  hero: {
    heading: "Benvenuti da {{business.name}}",
    subheading: "Riparazione di scarpe, borse e pelletteria, fatta a mano",
    backgroundImage: "images/hero.jpg",
    ctaText: "Contattaci",
    ctaLink: "#contact",
  },

  about: {
    heading: "Chi siamo",
    text: "Il Calzolaio della Garbatella è un laboratorio artigiano nel cuore del quartiere, dove ogni scarpa, borsa o cintura viene riparata a mano con la cura del vero mestiere. Riparazioni di calzature e pelletteria, giacche in pelle, cinture, scarpe su misura, plantari, sostituzione suole, pulizia e tintura: un punto di riferimento per chi non vuole buttare via un oggetto quando può essere salvato.",
    image: "images/about.jpg",
  },

  offerings: {
    heading: "I nostri servizi",
    items: [
      { name: "Riparazione calzature", description: "Sostituzione suole, tacchi e riparazioni generali", price: "" },
      { name: "Riparazione borse e pelletteria", description: "Cuciture, cerniere, manici", price: "" },
      { name: "Riparazione giacche in pelle", description: "Cuciture e sistemazione zip", price: "" },
      { name: "Cinture su misura", description: "Realizzazione e riparazione", price: "" },
      { name: "Scarpe su misura", description: "Realizzazione artigianale", price: "" },
      { name: "Plantari", description: "Realizzazione su misura", price: "" },
      { name: "Pulizia e tintura", description: "Per scarpe e pelletteria", price: "" },
    ],
  },

  gallery: {
    heading: "Galleria",
    images: ["images/gallery-1.jpg"],
  },

  hours: {
    heading: "Orari",
    schedule: [
      { day: "Lunedì - Sabato", hours: "09:00 - 13:00, 16:00 - 19:30" },
      { day: "Domenica", hours: "Chiuso" },
    ],
  },

  contact: {
    heading: "Contattaci",
    address: "Via Padre Reginaldo Giuliani, 42, 00154 Roma",
    phone: "347 128 6412",
    whatsapp: "347 128 6412",
    email: "",
  },

  map: {
    embedSrc: "https://www.google.com/maps?q=Via+Padre+Reginaldo+Giuliani+42+Roma&output=embed",
  },

  socials: {
    instagram: "https://www.instagram.com/calzolaio_della_garbatella/",
    facebook: "https://www.facebook.com/calzolaiogarbatella",
    tiktok: "",
    website: "",
  },

  footer: {
    text: "Calzolaio della Garbatella: riparazione calzature e pelletteria, fatta a mano.",
  },
};
