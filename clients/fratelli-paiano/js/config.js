// Demo per Chiusure Lampo Fratelli Paiano: merceria e chiusure lampo a
// Roma, Via Montebuono 18/A (Trieste Salario), dal 1951, bottega storica
// riconosciuta dal Comune di Roma. Titolare Antonio Paiano, conosciuto
// come "il re delle cerniere di Roma": in oltre 50 anni ha realizzato
// chilometri di cerniere di ogni tipo e misura, dalle tende da campeggio
// alle mute da sub ai gazebo. STORIA riassunta onestamente da fonti
// indipendenti (ricerca web, schede di attività storiche), non inventata.
// EMAIL: fratellipaiano@gmail.com, trovata direttamente sulla pagina
// Contatti del loro sito (chiusurelampofratellipaiano.it/contatti).
// SITO ATTUALE: confermato dal vivo via curl, è un sito Duda/
// italiaonline pubblicato nel 2024 che usa SOLO foto stock generiche di
// Unsplash (il percorso delle immagini contiene letteralmente
// "unsplash" e nomi di file come "photo-1584061634739-..."), zero foto
// reali del negozio o del titolare. Nessuna pagina Instagram trovata;
// esiste una pagina Facebook ma, come da prassi di questo progetto, non
// è raggiungibile via fetch automatico (app client-rendered).
// FOTO: dato che anche il loro sito reale usa solo foto stock, e che
// nessuna foto reale del negozio è stata trovata né su stampa/blog né
// su aggregatori di recensioni (categoria merceria, poco coperta da
// quel tipo di fonte), qui sono usate foto stock oneste e ben
// documentate, scelte per rappresentare fedelmente il loro mestiere
// reale (cerniere, nastri, merceria), non il negozio specifico:
// hero.jpg = cassettiera vintage in legno con rocchetti di nastro
// (Unsplash, "assorted-threads-on-rack" di Annie Spratt, foto
// nWAlCB1tyvc, ritagliata per rimuovere il cartellino di un altro
// negozio visibile nell'originale). about.jpg = forbici, rocchetti di
// filo, metro da sarto e una cerniera (Unsplash, "threads with spools
// beside scissors" di Darling Arias, foto tX62O5F3AfU). gallery-1.jpg
// = fila di cerniere colorate (Unsplash, "colorful zippers arranged in
// a row" di Michelle Goggins, foto jjX3SAA74uk), scelta apposta perché
// è il prodotto specifico del negozio. gallery-2.jpg = bottoni colorati
// (Unsplash, "a collection of colorful buttons" di Olga Safronova,
// foto JExGIWryHUs).
// LOGO: nessun logo reale trovato in nessuna fonte. Iniziali testuali
// "FP" invece di inventare un marchio senza base reale.
// COLORI: rosso `#a3352a` (dal colore delle cerniere/nastri del
// mestiere) e legno/ottone `#8c6a3d` (dai cassetti in legno vintage
// della foto hero), scelti per intonarsi al mestiere reale, non
// campionati da un logo o da una foto del negozio specifico (che non
// esiste).
// MOOD: vintage (bottega di merceria dal 1951, estetica anni
// '50-'60), per la linea guida della skill professional-web-design.

const SITE_CONFIG = {
  business: {
    name: "Fratelli Paiano",
    tagline: "Chiusure lampo e merceria a Roma dal 1951",
    logoText: "FP",
    logoImage: "",
  },

  theme: {
    primary: "#a3352a",
    accent: "#8c6a3d",
    font: "'Poppins', sans-serif",
    headingFont: "'Playfair Display', serif",
    mood: "vintage",
  },

  hero: {
    heading: "Benvenuti da {{business.name}}",
    subheading: "Cerniere lampo su misura e merceria di quartiere, a Roma dal 1951",
    backgroundImage: "images/hero.jpg",
    ctaText: "Contattaci",
    ctaLink: "#contact",
  },

  about: {
    heading: "Chi siamo",
    text: "Dal 1951 la famiglia Paiano lavora nel cuore del quartiere Trieste Salario. Antonio Paiano, conosciuto come il re delle cerniere di Roma, ha realizzato in oltre cinquant'anni chilometri di cerniere di ogni tipo e misura: da tende da campeggio, gazebo, mute da sub e capote di automobili d'epoca. Oggi la bottega, riconosciuta storica dal Comune di Roma, è anche merceria di quartiere.",
    image: "images/about.jpg",
  },

  offerings: {
    heading: "Cosa facciamo",
    items: [
      { name: "Cerniere su misura", description: "Realizzazione e riparazione di cerniere lampo di ogni tipo e misura", price: "" },
      { name: "Merceria", description: "Filati, nastri, bottoni e articoli da sartoria", price: "" },
      { name: "Riparazioni speciali", description: "Cerniere per mute da sub, tende, gazebo e capote auto", price: "" },
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
      { day: "Lunedì - Sabato", hours: "da confermare" },
      { day: "Domenica", hours: "Chiuso" },
    ],
  },

  contact: {
    heading: "Contattaci",
    address: "Via Montebuono 18/A, 00199 Roma",
    phone: "06 8621 2646",
    whatsapp: "",
    email: "fratellipaiano@gmail.com",
  },

  map: {
    embedSrc: "https://www.google.com/maps?q=Via+Montebuono+18A+Roma&output=embed",
  },

  socials: {
    instagram: "",
    facebook: "https://www.facebook.com/Chiusure-Lampo-Fratelli-Paiano-1506808439550944/",
    tiktok: "",
    website: "https://www.chiusurelampofratellipaiano.it/",
  },

  footer: {
    text: "Chiusure Lampo Fratelli Paiano: cerniere e merceria a Roma dal 1951.",
  },
};
