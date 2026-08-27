// Demo per Fratelli Anzilotti — dati verificati: nome, indirizzo,
// telefono, email (dal loro sito attuale fratellianzilotti.it).
// SITO ATTUALE: vivo (HTTP 200), ma gira ancora su WordPress 4.6.29 —
// una versione core del 2016, mai aggiornata alla release maggiore
// successiva in quasi 10 anni (solo patch di sicurezza minori). Le foto
// del laboratorio nella galleria portano anche loro data 2016 nell'EXIF
// (fotocamera Sony SLT-A55V, elaborate in Lightroom), a conferma che il
// sito non è stato aggiornato da allora — tranne una foto "chi siamo"
// del 2022 che però è una cena di gruppo tra colleghi, non una foto del
// laboratorio o del lavoro, quindi non utilizzabile per rappresentare
// l'attività (persone identificabili in un contesto privato, non
// pertinente).
// LOGO: il loro logo reale ("F.lli ANZILOTTI dal 1968", 498×195) è un
// wordmark puro, senza alcuna icona separabile dal testo — a differenza
// di Autofficina Pisino o Cappelleria Lombardi, qui non c'è proprio
// nessun elemento grafico isolabile, solo lettering. Disegnata quindi
// un'icona nuova da zero (non un ritaglio, non un redesign di un'icona
// esistente): una pialla da falegname stilizzata, usando i colori reali
// del sito (oro `#a08752` e oro chiaro `#e0c58b`, dal CSS del loro sito,
// dove sono il colore dominante — 36 occorrenze nel foglio di stile).
// FOTO: tutte reali, scaricate dalla galleria del loro sito, EXIF
// confermano scatti reali (Sony SLT-A55V, non stock): un restauro di una
// sedia impagliata con le mani dell'artigiano in primo piano (hero); un
// intarsio in legno massello durante la levigatura (about); un dettaglio
// macro di un piano intarsiato con motivi geometrici (gallery-1); una
// parete di attrezzi da falegname con un fregio in legno intagliato
// (gallery-2). Solo 4 foto reali disponibili (non 5) — nessuna stock
// aggiunta per riempire lo spazio, la gallery ha semplicemente 2 immagini
// invece di 3.

const SITE_CONFIG = {
  business: {
    name: "Fratelli Anzilotti",
    tagline: "Falegnameria artigianale e restauro mobili antichi a Roma dal 1968",
    logoText: "FA",
    logoImage: "images/logo.png",
  },

  theme: {
    primary: "#a08752",
    accent: "#2d261c",
    font: "'Playfair Display', serif",
  },

  hero: {
    heading: "Benvenuti da {{business.name}}",
    subheading: "Restauro, ebanisteria e trattamenti antitarlo per mobili antichi, a Roma dal 1968",
    backgroundImage: "images/hero.jpg",
    ctaText: "Richiedi un preventivo",
    ctaLink: "#contact",
  },

  about: {
    heading: "Chi siamo",
    text: "Dal 1968 Fratelli Anzilotti restaura mobili antichi nel cuore di Roma, portando avanti da due generazioni un mestiere fatto di pazienza e precisione: intarsi, dorature, impagliature e trattamenti antitarlo, con le stesse tecniche tradizionali di sempre.",
    image: "images/about.jpg",
  },

  offerings: {
    heading: "Servizi",
    items: [
      { name: "Restauro mobili antichi", description: "Restauro conservativo su mobili ed elementi d'epoca", price: "" },
      { name: "Trattamenti antitarlo", description: "Interventi anossici contro i tarli del legno", price: "" },
      { name: "Intarsi e impiallacciature", description: "Realizzazione e restauro di intarsi in legno", price: "" },
      { name: "Impagliature", description: "Restauro di sedute impagliate a mano", price: "" },
      { name: "Doratura e finiture", description: "Doratura e finiture a gommalacca", price: "" },
    ],
  },

  gallery: {
    heading: "Galleria",
    images: [
      "images/gallery-1.jpg",
      "images/gallery-2.jpg",
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
    address: "Via Lungotevere dei Mellini, 15, Roma (Prati)",
    phone: "06 3201755",
    whatsapp: "",
    email: "info@fratellianzilotti.it",
  },

  map: {
    embedSrc: "https://www.google.com/maps?q=Via+Lungotevere+dei+Mellini+15+Roma&output=embed",
  },

  socials: {
    instagram: "",
    facebook: "",
    tiktok: "",
    website: "https://www.fratellianzilotti.it/",
  },

  footer: {
    text: "Fratelli Anzilotti — Restauro mobili antichi a Roma dal 1968.",
  },
};
