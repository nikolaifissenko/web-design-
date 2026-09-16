// Demo per Pelletteria Bussiglieri: pelletteria artigianale a Via della
// Conciliazione 43, a pochi passi da San Pietro. Attività di famiglia dal
// 1920, oggi alla quarta generazione (Bussiglieri Ilaria & C. sas).
// SITO ATTUALE: pelletteriabussiglieri.it, WordPress 5.0.27 (rilasciata
// nel 2018, mai aggiornata da allora), copyright fermo al 2019 nel
// footer. Il page builder ("Tatsu") è rotto: sulla home e su "Chi siamo"
// gli shortcode del builder appaiono come testo grezzo non renderizzato
// invece del layout previsto, in più punti della pagina. Il sito va
// spesso in errore 503. Confermato dal vivo, non solo "vecchio".
// STORIA: bottega storica dal 1920, una delle più antiche di Roma,
// a Via della Conciliazione, a pochi passi dalla Basilica di San
// Pietro. Prodotti rigorosamente Made in Italy, fatti a mano,
// pellami di pregio (cervo, nappa, coccodrillo, lucertola), tinture
// vegetali. Testo tradotto e riassunto onestamente dalla pagina
// "Chi siamo" del loro sito, non inventato.
// EMAIL: pelletteriabussiglieri@gmail.com, trovata direttamente sul
// loro sito (sezione Contatti in ogni pagina). Non è una fonte terza.
// Anche Instagram (instagram.com/pelletteriabussiglieri) e Facebook
// (facebook.com/Pelletteria-Bussiglieri-1507572736207076) confermati
// tramite lo stesso sito, non solo cercati a parte.
// FOTO: tutte reali, nessuna stock, tutte scaricate direttamente dal
// loro sito (wp-content/uploads/2019/...). hero.jpg è la vera vetrina
// del negozio di sera, con l'insegna "Leather Shop" e le borse esposte
// in vetrina. about.jpg mostra il vero bancone in legno del negozio con
// la targa in ottone "Pelletteria Bussiglieri" e due foto d'epoca
// incorniciate di Via della Conciliazione. gallery-1.jpg e gallery-2.jpg
// sono due vere foto dell'interno del negozio, con le vetrine piene di
// borse vere in vendita. gallery-3.jpg è una vera foto prodotto di
// cinture in pelle di loro produzione/vendita. gallery-4.jpg è una vera
// foto d'epoca in bianco e nero di Via della Conciliazione verso San
// Pietro, senza filigrana, ospitata direttamente sul loro sito (non è
// una foto del negozio stesso, ma della loro stessa strada, usata per
// rappresentare onestamente il luogo storico, non spacciata per uno
// scatto del negozio). Scartata una foto papale/d'epoca trovata online
// con filigrana "Raccolta Roma Sparita" ben visibile, materiale
// d'archivio protetto da copyright, non riutilizzabile.
// LOGO: nessun logo reale isolabile trovato (nessun file logo/favicon
// nel loro sito, solo la targa in ottone fotografata dentro about.jpg,
// un'immagine composita, non un file logo autonomo). Disegnata una
// monogramma "B" pulita per lo slot circolare del template, usando i
// veri colori del negozio: il marrone cuoio campionato dalla vera foto
// delle cinture (gallery-3.jpg) e l'oro/bronzo #af9f66, colore
// letteralmente usato nel CSS del loro stesso sito per le icone social.
// Non colori inventati.

const SITE_CONFIG = {
  business: {
    name: "Pelletteria Bussiglieri",
    tagline: "Pelletteria artigianale a Roma dal 1920, a due passi da San Pietro",
    logoText: "PB",
    logoImage: "images/logo.png",
  },

  theme: {
    primary: "#5b3a24",
    accent: "#af9f66",
    font: "'Poppins', sans-serif",
    headingFont: "'Playfair Display', serif",
    mood: "boutique",
  },

  hero: {
    heading: "Benvenuti da {{business.name}}",
    subheading: "Pelletteria artigianale Made in Italy a Via della Conciliazione dal 1920",
    backgroundImage: "images/hero.jpg",
    ctaText: "Scopri la bottega",
    ctaLink: "#contact",
  },

  about: {
    heading: "Chi siamo",
    text: "Pelletteria Bussiglieri è una delle botteghe più antiche di Roma, attiva dal 1920 a Via della Conciliazione, a pochi passi dalla Basilica di San Pietro. Oggi alla quarta generazione della stessa famiglia, il negozio propone una vasta gamma di prodotti rigorosamente Made in Italy: borse, cinture e piccola pelletteria confezionati secondo i canoni tradizionali dell'artigianato italiano, con pellami di pregio come cervo, nappa, coccodrillo e lucertola, trattati con tinture vegetali.",
    image: "images/about.jpg",
  },

  offerings: {
    heading: "Le nostre proposte",
    items: [
      { name: "Borse artigianali", description: "Made in Italy, pellami di pregio lavorati a mano", price: "" },
      { name: "Cinture in pelle", description: "Cuoio pieno fiore, tinture vegetali, fatte in Italia", price: "" },
      { name: "Piccola pelletteria", description: "Portafogli e accessori dei migliori marchi italiani", price: "" },
    ],
  },

  gallery: {
    heading: "Galleria",
    images: [
      "images/gallery-1.jpg",
      "images/gallery-2.jpg",
      "images/gallery-3.jpg",
      "images/gallery-4.jpg",
    ],
  },

  hours: {
    heading: "Orari",
    schedule: [],
  },

  contact: {
    heading: "Contattaci",
    address: "Via della Conciliazione, 43, 00193 Roma",
    phone: "06 6880 2590",
    whatsapp: "",
    email: "pelletteriabussiglieri@gmail.com",
  },

  map: {
    embedSrc: "https://www.google.com/maps?q=Via+della+Conciliazione+43+Roma&output=embed",
  },

  socials: {
    instagram: "https://www.instagram.com/pelletteriabussiglieri",
    facebook: "https://www.facebook.com/Pelletteria-Bussiglieri-1507572736207076/",
    tiktok: "",
    website: "http://www.pelletteriabussiglieri.it/",
  },

  footer: {
    text: "Pelletteria Bussiglieri: pelletteria artigianale a Roma dal 1920.",
  },
};
