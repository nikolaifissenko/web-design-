// Demo per Consorti Cornici — dati verificati: nome, indirizzo, telefono,
// email, orari (dal loro sito attuale consorticornici.it).
// SITO ATTUALE: vivo (HTTP 200), costruito su una piattaforma da
// agenzia/rivenditore (Italiaonline/Duda) — ha un tag viewport quindi
// tecnicamente si adatta al telefono, ma il contenuto è quasi solo testo:
// nessuna foto prodotto/negozio in prima pagina, solo descrizioni. Una
// vetrina debole per un'attività che lavora anche con gallerie d'arte e
// studi di architettura (cornici, specchi, restauro cornici antiche).
// LOGO: reale, riutilizzato direttamente — non ridisegnato. Il monogramma
// "C" in un contorno quadrato bianco su rosso è già di per sé un'icona
// quadrata isolabile (a differenza di Sartoria Carbone o Del Vico, qui il
// file originale un'unica immagine con testo sotto, ma il marchio in alto
// è perfettamente ritagliabile senza toccare nulla): ritagliato pulito dal
// file originale, nessun ridisegno necessario. File: images/logo.png.
// COLORE: rosso reale `#9a0000` campionato pixel per pixel dallo sfondo
// del loro logo — non inventato.
// FOTO: tutte reali, scaricate direttamente dalla galleria del loro sito
// (nessuna stock). hero mostra la parete di campioni di cornici del
// laboratorio (decine di finiture, dal dorato all'anticato al laccato);
// about è una cornice verde in lavorazione con una stampa di paesaggio,
// su un cavalletto; gallery-1 è uno specchio con cornice nera appeso a
// muro, che riflette la galleria di quadri incorniciati del negozio;
// gallery-2 mostra due opere incorniciate esposte a parete (cornice
// argento anticato e cornice bordeaux); gallery-3 è un dipinto pop-art
// colorato su un cavalletto nel laboratorio.

const SITE_CONFIG = {
  business: {
    name: "Consorti Cornici",
    tagline: "Cornici su misura, restauro e dorature a Roma dal 1970",
    logoText: "CC",
    logoImage: "images/logo.png",
  },

  theme: {
    primary: "#9a0000",
    accent: "#2c2420",
    font: "'Playfair Display', serif",
    mood: "editorial",
  },

  hero: {
    heading: "Benvenuti da {{business.name}}",
    subheading: "Cornici artigianali su misura, specchi e restauro, in zona Balduina dal 1970",
    backgroundImage: "images/hero.jpg",
    ctaText: "Richiedi un preventivo",
    ctaLink: "#contact",
  },

  about: {
    heading: "Chi siamo",
    text: "Dal 1970 Consorti Cornici realizza cornici su misura per privati, gallerie d'arte e studi di architettura, con centinaia di finiture disponibili: dorature, laccature, anticature e materiali naturali. Ogni cornice è costruita a mano nel nostro laboratorio di zona Balduina.",
    image: "images/about.jpg",
  },

  offerings: {
    heading: "Servizi",
    items: [
      { name: "Cornici su misura", description: "Centinaia di finiture: dorate, laccate, anticate, naturali", price: "" },
      { name: "Specchi su misura", description: "Realizzazione e incorniciatura di specchi", price: "" },
      { name: "Restauro cornici antiche", description: "Restauro e doratura di cornici d'epoca", price: "" },
      { name: "Incorniciature per gallerie", description: "Servizio dedicato a gallerie d'arte e studi di architettura", price: "" },
      { name: "Passe-partout", description: "Taglio e montaggio su misura", price: "" },
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
      { day: "Lunedì", hours: "09:00 - 13:00, 15:30 - 19:00" },
      { day: "Martedì", hours: "09:00 - 13:00, 15:30 - 19:00" },
      { day: "Mercoledì", hours: "09:00 - 13:00, 15:30 - 19:00" },
      { day: "Giovedì", hours: "09:00 - 13:00, 15:30 - 19:00" },
      { day: "Venerdì", hours: "09:00 - 13:00, 15:30 - 19:00" },
      { day: "Sabato", hours: "09:00 - 13:00, 15:30 - 19:00" },
      { day: "Domenica", hours: "Chiuso" },
    ],
  },

  contact: {
    heading: "Contattaci",
    address: "Via Marziale, 43, 00136 Roma (Balduina)",
    phone: "06 39749127",
    whatsapp: "347 2942182",
    email: "andreaconsorticornici@hotmail.com",
  },

  map: {
    embedSrc: "https://www.google.com/maps?q=Via+Marziale+43+Roma&output=embed",
  },

  socials: {
    instagram: "",
    facebook: "",
    tiktok: "",
    website: "https://www.consorticornici.it/",
  },

  footer: {
    text: "Consorti Cornici — Cornici artigianali a Roma dal 1970.",
  },
};
