// Demo per Antica Erboristeria Romana. Dati verificati: indirizzo,
// telefono, storia (Turismo Roma, comune.roma.it). Email
// (info@anticaerboristeriaromana.it) trovata via ricerca, non
// riconfermata direttamente sul sito, verificare telefonicamente
// prima di fare affidamento su quell'indirizzo, come per Antica
// Stamperia Trevi.
// Sito reale (anticaerboristeriaromana.it) confermato gravemente
// datato: grafica GIF anni 2000, encoding dei caratteri accentati
// visibilmente rotto. NOTA: esiste anche un possibile dominio più
// recente (anticaerboristeriaromanashop.com), bloccato da Cloudflare e
// non verificabile in questa sessione. Se rispondono segnalando quel
// sito come quello reale, è previsto, non un errore (stesso caso di
// Testaccio XIX-XXV con due domini).
// Logo reale (stemma araldico con due leoni, motto "IN ERBIS SALUS")
// preso dal sito storico, ritagliato quadrato sullo stemma. Colori
// (verde/grigio scuro) presi dal vero CSS del sito. Foto reali: hero/
// about = foto vera dell'interno storico (arredi in noce originali),
// gallery-1 = foto vera del soffitto affrescato e di un vaso in
// ceramica originale con lo stemma del negozio, da un articolo di
// negozidiroma.com. Nessuna foto aggiuntiva stock reperibile con
// certezza sull'attività, dopo aver controllato sito, stampa e
// Instagram/Facebook (irraggiungibili da fetch automatico).

const SITE_CONFIG = {
  business: {
    name: "Antica Erboristeria Romana",
    tagline: "Erboristeria storica nel cuore di Roma dal 1752",
    logoText: "AE",
    logoImage: "images/logo.png",
  },

  theme: {
    primary: "#2e7d32",
    accent: "#454545",
    font: "'Poppins', sans-serif",
    headingFont: "'Yeseva One', cursive",
    mood: "vintage",
  },

  hero: {
    heading: "Benvenuti all'{{business.name}}",
    subheading: "350 piante officinali negli arredi originali in noce, nel cuore di Roma dal 1752",
    backgroundImage: "images/hero.jpg",
    ctaText: "Contattaci",
    ctaLink: "#contact",
  },

  about: {
    heading: "Chi siamo",
    text: "L'Antica Erboristeria Romana è aperta dal 1752 a Via di Torre Argentina, tra i suoi arredi originali in noce che custodiscono oltre 350 piante officinali. Un punto di riferimento storico per tisane, erbe, fitopreparati e cosmesi naturale a Roma.",
    image: "images/about.jpg",
  },

  offerings: {
    heading: "Prodotti",
    items: [
      { name: "Tisane ed erbe officinali", description: "Oltre 350 varietà negli arredi storici", price: "" },
      { name: "Miscele di tè", description: "Oltre 40 miscele da tutto il mondo", price: "" },
      { name: "Oli essenziali", description: "Selezione di oli puri e naturali", price: "" },
      { name: "Fitocosmesi naturale", description: "Prodotti per la cura della persona", price: "" },
    ],
  },

  gallery: {
    heading: "Galleria",
    images: ["images/gallery-1.jpg"],
  },

  hours: {
    heading: "Orari",
    schedule: [
      { day: "Lunedì", hours: "09:30 - 19:30" },
      { day: "Martedì", hours: "09:30 - 19:30" },
      { day: "Mercoledì", hours: "09:30 - 19:30" },
      { day: "Giovedì", hours: "09:30 - 19:30" },
      { day: "Venerdì", hours: "09:30 - 19:30" },
      { day: "Sabato", hours: "09:30 - 19:30" },
      { day: "Domenica", hours: "Chiuso" },
    ],
  },

  contact: {
    heading: "Contattaci",
    address: "Via di Torre Argentina 15, 00186 Roma",
    phone: "06 6879493",
    whatsapp: "",
    email: "info@anticaerboristeriaromana.it",
  },

  map: {
    embedSrc: "https://www.google.com/maps?q=Via+di+Torre+Argentina+15+Roma&output=embed",
  },

  socials: {
    instagram: "",
    facebook: "https://www.facebook.com/Antica-Erboristeria-Romana-1471675236415766",
    tiktok: "",
    website: "https://www.anticaerboristeriaromana.it/",
  },

  footer: {
    text: "Antica Erboristeria Romana — Roma, dal 1752",
  },
};
