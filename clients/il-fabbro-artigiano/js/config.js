// Demo per Il Fabbro Artigiano (Varm di Ricciardella Angelo) — dati
// verificati: nome, indirizzo, telefono, email (dal loro sito attuale
// ilfabbroartigiano.com).
// SITO ATTUALE: vivo, ma costruito su CMSimple 4.6.1 (2016) — un CMS a
// file piatti ormai di nicchia — con un menu jQuery css3menu.com e
// l'SDK di Facebook fermo alla versione v2.5 (l'attuale è molto più
// recente): tutti segnali concreti di un sito fermo al 2016 e mai
// aggiornato.
// FOTO: **una sola foto reale disponibile** — la galleria vera del sito
// (pagina "Galleria") usa un plugin jQuery (sfPhotoGallery) che carica
// le immagini via JavaScript, non presenti nell'HTML statico fetchato,
// quindi non recuperabile con i mezzi disponibili in questa sessione.
// L'unica foto reale utilizzabile è quella di benvenuto in homepage
// (un cancello in ferro battuto lavorato + un fabbro che batte il
// ferro incandescente sull'incudine) — usata qui in `about`. Le altre 3
// immagini (hero, gallery-1, gallery-2) sono stock Unsplash, licenza
// libera: scelte per pertinenza specifica al mestiere (un fabbro reale
// al lavoro su un'incudine con scintille, un dettaglio di lavorazione a
// caldo, un cancello in ferro battuto con motivo a volute) — non stock
// generico. Questo è un caso di stock legittimo per il criterio del
// repo: fonte reale (la loro galleria) esiste ma è tecnicamente
// irraggiungibile in automatico, non semplicemente "non controllata".
// LOGO: il loro logo reale ("Varm. di Ricciardella Angelo", 191×109) è
// una clip-art anni 2000 in stile bevel 3D, bassa risoluzione, non
// adatta al cerchio del template. Disegnata una nuova icona — un'incudine
// con martello e brace incandescente — usando l'arancione reale del
// loro sito (`#ff6600`, dal CSS della pagina) come accento, non
// inventato.

const SITE_CONFIG = {
  business: {
    name: "Il Fabbro Artigiano",
    tagline: "Lavorazioni artigianali in ferro battuto a Roma, da una famiglia di fabbri",
    logoText: "VR",
    logoImage: "images/logo.png",
  },

  theme: {
    primary: "#232120",
    accent: "#ff6600",
    font: "'Poppins', sans-serif",
    headingFont: "'Space Grotesk', sans-serif",
    mood: "bold",
  },

  hero: {
    heading: "Benvenuti da {{business.name}}",
    subheading: "Cancelli, ringhiere e lavorazioni su misura in ferro battuto, a Roma da generazioni",
    backgroundImage: "images/hero.jpg",
    ctaText: "Richiedi un preventivo",
    ctaLink: "#contact",
  },

  about: {
    heading: "Chi siamo",
    text: "Varm di Ricciardella Angelo è una famiglia di artigiani del ferro a Roma. Da generazioni al servizio della città, uniamo la passione per un nobile mestiere all'arte della lavorazione del ferro battuto: cancelli, ringhiere e prodotti su misura pensati per durare nel tempo.",
    image: "images/about.jpg",
  },

  offerings: {
    heading: "Servizi",
    items: [
      { name: "Cancelli in ferro battuto", description: "Progettazione e realizzazione su misura", price: "" },
      { name: "Ringhiere e balconi", description: "Lavorazioni artigianali per interni ed esterni", price: "" },
      { name: "Messa in sicurezza", description: "Inferriate e sistemi di sicurezza per la casa", price: "" },
      { name: "Infissi in PVC", description: "Fornitura e montaggio, made in Italy", price: "" },
      { name: "Restauro e riparazioni", description: "Interventi su strutture in ferro esistenti", price: "" },
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
    address: "Via Sassonegro, 80, 00169 Roma",
    phone: "06 2305294",
    whatsapp: "328 8121167",
    email: "varmricciardella@gmail.com",
  },

  map: {
    embedSrc: "https://www.google.com/maps?q=Via+Sassonegro+80+Roma&output=embed",
  },

  socials: {
    instagram: "",
    facebook: "",
    tiktok: "",
    website: "http://www.ilfabbroartigiano.com/",
  },

  footer: {
    text: "Il Fabbro Artigiano — Varm di Ricciardella Angelo, Roma.",
  },
};
