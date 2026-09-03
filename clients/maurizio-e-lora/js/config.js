// Demo per Maurizio & l'Ora, orologeria/laboratorio di riparazione orologi
// in Via Guglielmo Ciamarra 7, Roma (zona Circonvallazione Ostiense, al
// confine con Garbatella). Sito reale (maurizioelora.com) fetchato
// direttamente: multi-pagina, stile primi anni 2000, nessun layout
// responsive, jQuery/canvas per l'orologio animato in home. Titolare
// Maurizio Orso, in attività dagli anni '80 (30+ anni), centro
// assistenza autorizzato per Citizen, Longines, Zenith, Breil, Rolex
// (dichiarato sul loro sito, pagina "Chi siamo"). Laboratorio interno,
// nessun invio a centri esterni.
//
// FOTO: tutte reali, nessuna stock, scaricate direttamente dal loro
// sito (cartelle /foto/ e /lavori/), EXIF verificato (Nikon COOLPIX P90,
// Nikon D90, Sony C6903) a conferma che sono scatti reali del negozio,
// non stock. hero.jpg = la vetrina del negozio (insegna "Maurizio &
// l'ora", num. civico 7 visibile). about.jpg = Maurizio al banco da
// lavoro, camice bianco, mentre ripara un movimento. gallery-1/2 =
// interno del laboratorio-showroom (vetrinette, orologi da parete
// antichi, poster di marchi di lusso). gallery-3 = un orologio a
// pendolo antico dorato restaurato, esposto in negozio. gallery-4 =
// primo piano di una riparazione al banco.
//
// LOGO: nessun logo vettoriale/pulito esiste. L'insegna reale mostra
// solo una scritta corsiva "Maurizio & l'ora" con un piccolo orologio
// decorativo in ferro battuto e una lancetta rossa, non ritagliabile
// pulitamente nello slot circolare del template. Per questo, come da
// branding-extraction.md, è stata disegnata da zero una nuova icona a
// forma di quadrante d'orologio, ispirata allo spirito del marchio
// reale (il dettaglio della lancetta rossa dell'insegna è stato
// ripreso), con colori campionati dal CSS del loro sito reale: bordeaux
// #703b3f e oro #d6b47d (colori di bordo/hover del loro menu), più il
// rosso #c0333f della lancetta. Vedi images/logo.svg.

const SITE_CONFIG = {
  business: {
    name: "Maurizio & l'Ora",
    tagline: "Orologeria e restauro a Roma dal 1986",
    logoText: "M",
    logoImage: "images/logo.svg",
  },

  theme: {
    primary: "#703b3f",
    accent: "#d6b47d",
    font: "'Poppins', sans-serif",
    headingFont: "'Cormorant Garamond', serif",
    mood: "boutique",
  },

  hero: {
    heading: "Benvenuti da {{business.name}}",
    subheading: "Riparazione e restauro di orologi da polso, da tasca e pendoleria a Roma, nel laboratorio di Via Ciamarra dal 1986",
    backgroundImage: "images/hero.jpg",
    ctaText: "Vieni a trovarci",
    ctaLink: "#contact",
  },

  about: {
    heading: "Chi siamo",
    text: "Maurizio ha iniziato il suo lavoro di orologiaio negli anni '80, diventando nel tempo centro di assistenza per marchi come Citizen, Longines, Zenith, Breil e Rolex. Il laboratorio si trova nel quartiere Circonvallazione Ostiense, a pochi passi dalla fermata Garbatella. Ogni riparazione, dalla semplice sostituzione di una batteria al restauro di un orologio antico, viene eseguita esclusivamente qui, senza mai affidare l'orologio a laboratori esterni.",
    image: "images/about.jpg",
  },

  offerings: {
    heading: "I nostri servizi",
    items: [
      { name: "Riparazione orologi da polso e da tasca", description: "Meccanici e al quarzo, marchi di ogni livello", price: "" },
      { name: "Restauro pendoleria antica", description: "Orologi da tavolo e da parete, compresi i gran salone", price: "" },
      { name: "Manutenzione con cronocomparatore", description: "Revisione, lubrificazione e taratura del movimento", price: "" },
      { name: "Impermeabilità, lucidatura e cinturini", description: "Prova impermeabilità, lucidatura casse e bracciali, sostituzione cinturini", price: "" },
    ],
  },

  gallery: {
    heading: "Galleria",
    images: ["images/gallery-1.jpg", "images/gallery-2.jpg", "images/gallery-3.jpg", "images/gallery-4.jpg"],
  },

  hours: {
    heading: "Orari",
    schedule: [
      { day: "Lunedì - Venerdì", hours: "9:30 - 13:00, 14:30 - 18:30" },
      { day: "Sabato", hours: "Chiuso" },
      { day: "Domenica", hours: "Chiuso" },
    ],
  },

  contact: {
    heading: "Contattaci",
    address: "Via Guglielmo Ciamarra, 7, 00154 Roma",
    phone: "06 81173467",
    whatsapp: "",
    email: "info@maurizioelora.com",
  },

  map: {
    embedSrc: "https://www.google.com/maps?q=Via+Guglielmo+Ciamarra+7+Roma&output=embed",
  },

  socials: {
    instagram: "",
    facebook: "https://www.facebook.com/laboratorioorologi.dimaurizioorso",
    tiktok: "",
    website: "",
  },

  footer: {
    text: "Maurizio & l'Ora: orologeria e restauro a Roma dal 1986.",
  },
};
