// Demo per Antica Orologeria del Tribunale (Circonvallazione Clodia, 28,
// Roma). Laboratorio di alta orologeria, riparazione e compravendita di
// orologi usati. Hanno un sito proprio (anticaorologeriaroma.it) ma datato:
// confermato con verifica diretta (styling/HTML datati, copyright 2015-2023).
//
// CONTATTI: email REALE confermata direttamente sul loro sito
// (anticaorologeriaroma@libero.it, anche info@anticaorologeriaroma.it),
// non trovata solo su un aggregatore terzo. Telefono e orari anch'essi
// reali dal sito (Lun-Ven 10:00-18:00, Sab 9:00-13:00 su appuntamento).
//
// LOGO: REALE, scaricato dal loro sito (images/logo@2x.png), ma è un puro
// wordmark testuale in carattere gotico/blackletter senza icona separabile
// (stesso caso di Trastevereinbed, non del logo redesign): usato come
// logoText di fallback, non forzato nello slot circolare 40x40 dove un
// wordmark lungo si taglierebbe illeggibile.
//
// FOTO: trovata UNA foto reale sul loro sito, la scheda prodotto di un
// cronografo Corum effettivamente in vendita (non uno stock, una foto del
// loro magazzino attuale), usata in galleria. I banner del sito (stretta
// di mano, "vuoi vendere il tuo orologio" con foto stock di una donna con
// contanti) sono chiaramente stock generico con testo pubblicitario
// incorporato, scartati. Per hero/about usate foto stock oneste di
// macrofotografia orologiaia (Unsplash License, nessun marchio leggibile
// nell'inquadratura): hero = orologiaio con lente e cacciavite su un
// movimento (photo-1788125856710-1ae984195874), about = orologiaio con
// occhiali e pinzette su un meccanismo (photo-1788125856799-20f4b0023947).
// Da sostituire con foto vere del laboratorio se/quando il cliente compra.
//
// COLORI: l'unico colore reale trovato nel CSS del sito (#1ABC9C, un
// turchese) è il default del tema Bootstrap "Flat UI" usato, non una
// scelta di branding deliberata (nessun'altra traccia dello stesso colore
// altrove, nel logo o nei materiali). Scelti quindi a mano nero + oro per
// l'estetica classica da orologeria di lusso, dichiarato onestamente qui
// invece di far passare un default del framework per "vero".
//
// PREZZI: non pubblicati (compravendita/riparazione con preventivo).
// Lasciati vuoti nel menù servizi.

const SITE_CONFIG = {
  business: {
    name: "Antica Orologeria del Tribunale",
    tagline: "Riparazione e vendita di orologi, a Roma",
    logoText: "AO",
    logoImage: "",
  },

  theme: {
    primary: "#1a1a1a",
    accent: "#b8963f",
    font: "'Poppins', sans-serif",
    headingFont: "'Playfair Display', serif",
    mood: "boutique",
  },

  hero: {
    heading: "Benvenuti da {{business.name}}",
    subheading: "Laboratorio specializzato di alta orologeria",
    backgroundImage: "images/hero.jpg",
    ctaText: "Contattaci",
    ctaLink: "#contact",
  },

  about: {
    heading: "Chi siamo",
    text: "Antica Orologeria del Tribunale è un laboratorio specializzato in riparazione, restauro e compravendita di orologi, con riparazioni garantite 12 mesi effettuate da personale altamente qualificato. Che si tratti di un guasto da riparare o di un orologio da vendere, siamo a disposizione per una valutazione.",
    image: "images/about.jpg",
  },

  offerings: {
    heading: "I nostri servizi",
    items: [
      { name: "Riparazione orologi", description: "Garanzia 12 mesi, personale qualificato", price: "" },
      { name: "Restauro alta orologeria", description: "Meccanismi e casse d'epoca", price: "" },
      { name: "Compravendita orologi usati", description: "Valutazione gratuita", price: "" },
      { name: "Sostituzione cinturini", description: "Pelle e metallo", price: "" },
    ],
  },

  gallery: {
    heading: "Galleria",
    images: ["images/gallery-1.jpg"],
  },

  hours: {
    heading: "Orari",
    schedule: [
      { day: "Lunedì - Venerdì", hours: "10:00 - 18:00" },
      { day: "Sabato", hours: "09:00 - 13:00 (su appuntamento)" },
      { day: "Domenica", hours: "Chiuso" },
    ],
  },

  contact: {
    heading: "Contattaci",
    address: "Circonvallazione Clodia, 28, 00195 Roma",
    phone: "06 39751259",
    whatsapp: "393 9345646",
    email: "anticaorologeriaroma@libero.it",
  },

  map: {
    embedSrc: "https://www.google.com/maps?q=Circonvallazione+Clodia+28+Roma&output=embed",
  },

  socials: {
    instagram: "",
    facebook: "",
    tiktok: "",
    website: "https://www.anticaorologeriaroma.it/",
  },

  footer: {
    text: "Antica Orologeria del Tribunale: riparazione e vendita di orologi, a Roma.",
  },
};
