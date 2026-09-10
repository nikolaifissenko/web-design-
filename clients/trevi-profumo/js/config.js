// Demo per Trevi Profumo: profumeria storica dal 1919, a due passi dalla
// Fontana di Trevi. Sito attuale (treviprofumo.com) confermato dal vivo:
// WordPress datato (PHP 7.4), TLS talmente vecchio da rifiutare quasi ogni
// client TLS moderno (verificato con curl: la connessione fallisce con TLS
// 1.2/1.3, funziona solo forzando TLS 1.0), e la homepage carica quasi
// tutte le immagini come placeholder GIF trasparenti che non si vedono mai
// (verificato via fetch diretto della pagina). Un peccato vero per un
// negozio con una storia e un prodotto reali come questo.
// Email reale confermata direttamente sul loro sito (visibile in alto in
// ogni pagina): info@treviprofumo.com. Instagram (@treviprofumo) e
// Facebook (treviprofumoroma) reali e confermati.
// STORIA: dal 1919. Rinnovata completamente nel 2020, quando hanno deciso
// di puntare tutto sulla profumeria artistica di nicchia, sviluppando una
// propria linea "Aqua Trevi" ispirata al fascino della Fontana di Trevi e
// alla Dolce Vita romana. Testo tradotto e riassunto onestamente dalla
// pagina "Chi siamo" reale del loro sito, non inventato.
// FOTO: tutte reali, nessuna stock, scaricate direttamente dalla cartella
// wp-content/uploads del loro stesso sito (non da Instagram, che resta
// irraggiungibile via fetch automatico come sempre). hero.jpg = foto
// reale dell'interno del negozio dopo il rinnovo 2020 (soffitto a cupola
// in legno, scaffali con i veri prodotti, insegna "AQUA TREVI" visibile
// sul fondo). about.jpg = un flacone reale della loro linea Aqua Trevi
// ("Rosso di Roma") fotografato all'aperto su travertino, sullo sfondo
// verde acqua che ricorda proprio una fontana. gallery-1.jpg = un altro
// flacone reale della linea Aqua Trevi ("è Vita"). gallery-2.jpg = una
// foto reale di gioielli/bijoux del negozio (confermato dal testo del
// sito stesso: "Bijoux e Accessori completano... la nostra offerta").
// gallery-3.jpg = una scatola/prodotto di profumeria di nicchia reale in
// vendita nel negozio (The House of Oud).
// LOGO: reale, il file ufficiale del negozio (nome file
// "Trevi-Profumo-LOGO-UFFICIALE-1.png" sul loro stesso sito), usato senza
// modifiche, si adatta perfettamente allo slot circolare.
// COLORI: campionati pixel per pixel dal logo reale: tortora/greige
// #a0998e (cerchio interno), crema #c6baa8 (testo "TREVI PROFUMO ROMA
// 1919"), più i due piccoli accenti verde #15964f e rosso #af0000 del
// logo stesso (richiamo tricolore, non inventati).

const SITE_CONFIG = {
  business: {
    name: "Trevi Profumo",
    tagline: "Profumeria artistica a due passi dalla Fontana di Trevi, dal 1919",
    logoText: "TP",
    logoImage: "images/logo.png",
  },

  theme: {
    primary: "#a0998e",
    accent: "#af0000",
    font: "'Poppins', sans-serif",
    headingFont: "'Cormorant Garamond', serif",
    mood: "boutique",
  },

  hero: {
    heading: "Benvenuti da {{business.name}}",
    subheading: "Profumeria di nicchia e Dolce Vita romana, nello stesso luogo dal 1919",
    backgroundImage: "images/hero.jpg",
    ctaText: "Scopri la boutique",
    ctaLink: "#contact",
  },

  about: {
    heading: "Chi siamo",
    text: "Trevi Profumo nasce nel 1919 a due passi dalla Fontana di Trevi. Nel 2020 la boutique è stata completamente rinnovata, con una scelta precisa: puntare sulla profumeria artistica di nicchia e su una collezione propria, Aqua Trevi, ispirata al fascino senza tempo della Fontana e allo spirito della Dolce Vita romana. Fragranze d'autore, produzioni artigianali Made in Italy, e bijoux e accessori scelti con gusto completano l'offerta, per i turisti che scoprono la Città Eterna e per i romani che amano riscoprire il fascino del centro storico.",
    image: "images/about.jpg",
  },

  offerings: {
    heading: "Le nostre collezioni",
    items: [
      { name: "Aqua Trevi", description: "La collezione propria della boutique, ispirata alla Fontana di Trevi", price: "" },
      { name: "Profumi di nicchia", description: "Fragranze d'autore e produzioni artigianali Made in Italy", price: "" },
      { name: "Bijoux e accessori", description: "Una selezione curata per completare l'offerta della boutique", price: "" },
    ],
  },

  gallery: {
    heading: "Galleria",
    images: ["images/gallery-1.jpg", "images/gallery-2.jpg", "images/gallery-3.jpg"],
  },

  hours: {
    heading: "Orari",
    schedule: [
      { day: "Lunedì - Sabato", hours: "da confermare" },
      { day: "Domenica", hours: "da confermare" },
    ],
  },

  contact: {
    heading: "Contattaci",
    address: "Zona Fontana di Trevi, 00187 Roma",
    phone: "06 678 4200",
    whatsapp: "06 678 4200",
    email: "info@treviprofumo.com",
  },

  map: {
    embedSrc: "https://www.google.com/maps?q=Fontana+di+Trevi+Roma&output=embed",
  },

  socials: {
    instagram: "https://www.instagram.com/treviprofumo/",
    facebook: "https://www.facebook.com/treviprofumoroma/",
    tiktok: "",
    website: "https://treviprofumo.com/",
  },

  footer: {
    text: "Trevi Profumo: profumeria artistica a Roma dal 1919.",
  },
};
