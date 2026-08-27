// Demo per Sartoria Carbone — dati verificati: nome, indirizzo, telefono,
// email, orari, storia (dal loro sito attuale sartoriacarbone.it e dalla
// versione più recente sartoriacarbone.wixsite.com/sartoriacarbone).
// DUE SITI REALI TROVATI: (1) sartoriacarbone.it — il dominio storico,
// costruito su una piattaforma "sito in un minuto" ormai abbandonata
// (mootools/highslide/swfobject nel codice, html5shiv caricato da
// googlecode.com — servizio morto dal 2015 — nessun tag viewport, layout
// a tabelle): non responsive su mobile, verificato nel sorgente. (2) un
// sito Wix più recente con lo stesso indirizzo/telefono/email: più
// moderno del primo ma comunque un template Wix generico gratuito, non
// un sito proprio. LOGO: reale, non ridisegnato — "Carbone Dal 1957 Alta
// Sartoria" in corsivo bianco su nero, già di formato quadrato (dal file
// originale caricato su Wix), ritagliato in centro senza alterazioni:
// si adatta perfettamente al cerchio del template senza bisogno di
// redesign. COLORI: nero e bianco presi direttamente dal logo reale
// (sfondo nero, scritta bianca); l'oro/senape usato come accento è preso
// dai dettagli ricorrenti nelle foto reali (cravatte, spilla "Dal 1957",
// bottoni) — non inventato. FOTO: tutte reali, nessuna stock. Hero e
// gallery-1 sono scatti dell'interno del negozio (bancone con le stoffe,
// Domenicoantonio Carbone con lo staff); about è la foto in bianco e nero
// con Cavalier Domenicoantonio Carbone (fondatore, 1957) e il figlio
// Giuseppe (oggi alla guida) mentre vestono un cliente — racconta le due
// generazioni meglio di qualsiasi testo; gallery-2 è un dettaglio macro
// di un giacca in lavorazione (imbastitura a mano visibile); gallery-3 è
// una foto di sfilata con un modello in un cappotto principe di Galles
// cucito dalla sartoria. Fonte di tutte le immagini: la galleria del
// sito Wix (static.wixstatic.com), fetchata direttamente — EXIF confermano
// foto reali, non stock.

const SITE_CONFIG = {
  business: {
    name: "Sartoria Carbone",
    tagline: "Alta sartoria artigianale su misura, a Roma dal 1957",
    logoText: "SC",
    logoImage: "images/logo.png",
  },

  theme: {
    primary: "#1a1a1a",
    accent: "#a8783c",
    font: "'Playfair Display', serif",
    mood: "editorial",
  },

  hero: {
    heading: "Benvenuti da {{business.name}}",
    subheading: "Abiti, camicie e capispalla su misura, cuciti a mano nel cuore di Roma da tre generazioni",
    backgroundImage: "images/hero.jpg",
    ctaText: "Prenota una consulenza",
    ctaLink: "#contact",
  },

  about: {
    heading: "La nostra storia",
    text: "Dal 1957 la famiglia Carbone veste Roma su misura. Fondata dal Cavalier Domenicoantonio Carbone, oggi la sartoria è guidata dal figlio Giuseppe, che ne porta avanti la tradizione: taglio a mano, tessuti selezionati e un rapporto diretto con ogni cliente, capo dopo capo.",
    image: "images/about.jpg",
  },

  offerings: {
    heading: "Servizi",
    items: [
      { name: "Abiti su misura", description: "Taglio interamente a mano, dalla scelta del tessuto alla prova finale", price: "" },
      { name: "Camicie su misura", description: "Cucite su misura, con scelta di tessuti e finiture", price: "" },
      { name: "Capispalla e cappotti", description: "Soprabiti e cappotti sartoriali per ogni stagione", price: "" },
      { name: "Abiti da cerimonia", description: "Completi per matrimoni ed eventi importanti", price: "" },
      { name: "Ritocchi e riparazioni", description: "Aggiustature e modifiche su capi esistenti", price: "" },
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
      { day: "Lunedì", hours: "09:00 - 14:00, 15:00 - 20:00" },
      { day: "Martedì", hours: "09:00 - 14:00, 15:00 - 20:00" },
      { day: "Mercoledì", hours: "09:00 - 14:00, 15:00 - 20:00" },
      { day: "Giovedì", hours: "09:00 - 14:00, 15:00 - 20:00" },
      { day: "Venerdì", hours: "09:00 - 14:00, 15:00 - 20:00" },
      { day: "Sabato", hours: "09:00 - 14:00, 15:00 - 20:00" },
      { day: "Domenica", hours: "Chiuso" },
    ],
  },

  contact: {
    heading: "Contattaci",
    address: "Via Leone IV, 65/67, 00192 Roma",
    phone: "06 3972 5517",
    whatsapp: "",
    email: "info@sartoriacarbone.it",
  },

  map: {
    embedSrc: "https://www.google.com/maps?q=Via+Leone+IV+65+Roma&output=embed",
  },

  socials: {
    instagram: "",
    facebook: "",
    tiktok: "",
    website: "http://www.sartoriacarbone.it/",
  },

  footer: {
    text: "Sartoria Carbone — Alta sartoria artigianale a Roma dal 1957.",
  },
};
