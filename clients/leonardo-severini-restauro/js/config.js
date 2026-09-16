// Demo per Leonardo Severini: restauratore e conservatore di dipinti a
// Roma. Diploma in pittura/incisione all'Accademia di Belle Arti di
// Roma e specializzazione in restauro all'Opificio delle Pietre Dure
// di Firenze, dove ha lavorato 10 anni prima di tornare a Roma. Attivo
// anche come docente universitario e collabora con soprintendenze,
// chiese, fondazioni e collezionisti privati in Italia e all'estero.
// SITO ATTUALE: leonardoseverini.it, un sito WordPress con impostazione
// grafica risalente al 2015 (la maggior parte dei contenuti porta
// quella data), navigazione a scomparsa laterale, impaginazione poco
// curata rispetto alla qualita' del suo lavoro reale. Confermato dal
// vivo.
// STORIA: testo tradotto e riassunto onestamente dalla pagina CV del
// suo stesso sito, non inventato.
// EMAIL: leonardoseverini@gmail.com, trovata direttamente sul suo
// sito (link mailto: nel footer di ogni pagina). Anche Facebook
// confermato (facebook.com/leonardo.severini.3) prima di costruire la
// demo.
// FOTO: tutte reali, nessuna stock, tutte scaricate direttamente dal
// suo sito. hero.jpg mostra un vero dettaglio macro di un dipinto
// durante il restauro (panneggio). about.jpg e' un vero ritratto di
// Leonardo Severini con camice da lavoro, mentre esamina un dipinto.
// gallery-1.jpg mostra una vera "Madonna con Bambino in trono" a
// confronto prima/dopo il restauro (come pubblicato sulla pagina
// "Interventi" del suo sito, con didascalia originale). gallery-2.jpg
// e' un vero dettaglio dopo il restauro di un'opera attribuita a
// Tamara de Lempicka (didascalia originale del sito). gallery-3.jpg
// mostra un vero dipinto "San Giorgio e il Drago" dopo il restauro
// (didascalia originale del sito). gallery-4.jpg mostra vere mani
// guantate durante un intervento di ritocco pittorico, con un
// grembiule che riporta la scritta "Restauro". Due immagini
// chiaramente decorative/generiche trovate sullo stesso sito (uno
// pseudo-Uomo Vitruviano color seppia e una vecchia cornetta
// telefonica) sono state scartate: non sono foto reali del suo lavoro,
// solo immagini d'atmosfera scelte per il sito, quindi non
// rappresentative in modo specifico.
// LOGO: nessun logo isolabile trovato, ma il suo sito ha una vera
// striscia con il nome e tre colori campione (footer2.jpg), usata qui
// come fonte dei veri colori del brand. Disegnata un'icona di
// tavolozza da pittore per lo slot circolare del template, invece di
// usare le sole iniziali, nello spirito del suo mestiere.
// COLORI: marrone scuro #5a381d, arancione #d1812c, entrambi
// campionati pixel per pixel dalla striscia logo reale del suo sito
// (footer2.jpg), non inventati.

const SITE_CONFIG = {
  business: {
    name: "Leonardo Severini",
    tagline: "Conservazione e restauro dipinti a Roma",
    logoText: "LS",
    logoImage: "images/logo.png",
  },

  theme: {
    primary: "#5a381d",
    accent: "#d1812c",
    font: "'Poppins', sans-serif",
    headingFont: "'Playfair Display', serif",
    mood: "editorial",
  },

  hero: {
    heading: "Benvenuti da {{business.name}}",
    subheading: "Conservazione e restauro di dipinti a Roma",
    backgroundImage: "images/hero.jpg",
    ctaText: "Scopri il lavoro",
    ctaLink: "#contact",
  },

  about: {
    heading: "Chi siamo",
    text: "Leonardo Severini e' restauratore e conservatore di dipinti a Roma. Diplomato in pittura e incisione all'Accademia di Belle Arti di Roma, si e' specializzato in restauro all'Opificio delle Pietre Dure di Firenze, dove ha lavorato per dieci anni perfezionando tecniche tradizionali e contemporanee. Si occupa di interventi strutturali, consolidamento e reintegrazione estetica su dipinti su tela e tavola, collabora con soprintendenze, chiese, fondazioni e collezionisti privati in Italia e all'estero, ed e' attivo anche come docente.",
    image: "images/about.jpg",
  },

  offerings: {
    heading: "Le nostre proposte",
    items: [
      { name: "Restauro dipinti", description: "Interventi strutturali, pulitura e reintegrazione pittorica", price: "" },
      { name: "Diagnostica e consulenza", description: "Esame UV, visibile e infrarosso per la conservazione", price: "" },
      { name: "Consulenza per collezioni", description: "Per privati, chiese, fondazioni e soprintendenze", price: "" },
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
    address: "Roma",
    phone: "328 295 9855",
    whatsapp: "",
    email: "leonardoseverini@gmail.com",
  },

  map: {
    embedSrc: "",
  },

  socials: {
    instagram: "",
    facebook: "https://www.facebook.com/leonardo.severini.3",
    tiktok: "",
    website: "https://www.leonardoseverini.it/",
  },

  footer: {
    text: "Leonardo Severini: conservazione e restauro dipinti a Roma.",
  },
};
