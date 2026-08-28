// Demo per Libreria Minerva, il dominio proprio (minervalibreria.it,
// che reindirizza a shop.minervalibreria.it) è raggiungibile ma
// gravemente rotto: codice template non renderizzato visibile a schermo
// ("<!--#4DTEXT...", "Error # 59"), tecnologia server fine anni '90/
// inizio 2000. Confermato uno dei siti peggiori trovati finora in
// questo progetto. Nessuna foto del negozio (interno o vetrina) trovata
// in nessuna fonte: sito proprio (solo copertine libri del catalogo),
// Turismo Roma, illibraio.it, cralconsip.it, roma2pass.it (solo un
// banner grafico generico, non una foto), bibliotechediroma.it
// (bloccato, HTTP 403). Instagram/Facebook non consultabili per foto
// (client-rendered, vedi CLAUDE.md).
// LOGO: qui invece un vero marchio esiste ed è stato trovato, nel
// sito e-commerce (shop.minervalibreria.it/miner/images/logo-header.png):
// wordmark "LIBRERIA MINERVA" con un'icona a forma di libro aperto/M
// stilizzata al centro. L'icona da sola è quasi quadrata ma a
// risoluzione molto bassa (il file sorgente è alto solo 60px), troppo
// sfocata se solo ingrandita. Ridisegnata pulita in SVG nello stesso
// spirito (pagine di libro aperto a "V" che formano una M, con una M
// in rilievo sopra), usando colori campionati a mano dal PNG originale,
// non inventati: bordeaux #99042f e grigio tortora #c3bcb2 (entrambi
// campionati pixel per pixel dal logo reale), images/logo.svg.
// COLORI: primary è il bordeaux reale del logo (#99042f); per accent,
// il grigio tortora reale (#c3bcb2) è troppo chiaro per un uso da
// interfaccia (testo/sfondi bottoni), quindi è stato scurito mantenendo
// la stessa tonalità calda neutra: #3d332e.
// FOTO: nessuna foto reale del negozio trovata nonostante la ricerca
// sopra, quindi tutte STOCK (Unsplash, licenza libera), scelte per
// coerenza con l'identità di libreria di quartiere generalista: uno
// scaffale con scala (hero), una cassa d'epoca (about, in contrasto
// volutamente ironico con la storia reale sotto), libri aperti e una
// libreria piena (gallery).

const SITE_CONFIG = {
  business: {
    name: "Libreria Minerva",
    tagline: "Indipendente dal 1923, punto di riferimento del quartiere",
    logoText: "LM",
    logoImage: "images/logo.svg",
  },

  theme: {
    primary: "#99042f",
    accent: "#3d332e",
    font: "'Poppins', sans-serif",
    headingFont: "'Cormorant Garamond', serif",
    mood: "boutique",
  },

  hero: {
    heading: "Benvenuti da {{business.name}}",
    subheading: "Libreria indipendente in Piazza Fiume, un punto fermo per chi ama leggere dal 1923",
    backgroundImage: "images/hero.jpg",
    ctaText: "Vieni a Trovarci",
    ctaLink: "#contact",
  },

  about: {
    heading: "Un Secolo in Piazza Fiume",
    text: "Libreria Minerva è aperta dal 1923 in Piazza Fiume. Nel 1970 Franco Oddi, allora semplice commesso, ne rileva la gestione e la trasforma nella libreria di varia che è ancora oggi, eliminando i testi scolastici e rinnovando il modo di esporre i libri: fu tra le prime librerie in Italia ad informatizzare il magazzino, già negli anni '70, prima ancora del codice a barre ISBN. Nel 2014 la libreria ha preso in gestione anche il sottopassaggio pedonale adiacente, con resti archeologici romani, ampliando gli spazi. Divisa tra un piano a livello strada e un piano interrato, resta un punto di riferimento per l'intero quartiere.",
    image: "images/about.jpg",
  },

  offerings: {
    heading: "Cosa Trovi da Noi",
    items: [
      { name: "Narrativa italiana e straniera", description: "Le novità e i grandi classici, sempre aggiornati", price: "" },
      { name: "Saggistica", description: "Un'ampia selezione di saggi, storia, attualità e scienze umane", price: "" },
      { name: "Consulenza personalizzata", description: "Consigli di lettura su misura da chi il libro lo conosce davvero", price: "" },
      { name: "Ordini e prenotazioni", description: "Ricerca di titoli specifici su richiesta", price: "" },
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
      { day: "Lunedì - Domenica", hours: "da confermare (attività continuata tutti i giorni)" },
    ],
  },

  contact: {
    heading: "Vieni a Trovarci",
    address: "Piazza Fiume, 57, 00198 Roma",
    phone: "06 8553043",
    whatsapp: "",
    email: "info@minervalibreria.it",
  },

  map: {
    embedSrc: "https://www.google.com/maps?q=Piazza+Fiume+57+Roma&output=embed",
  },

  socials: {
    instagram: "",
    facebook: "https://www.facebook.com/p/Libreria-Minerva-Roma-1923-100063628328103/",
    tiktok: "",
    website: "https://shop.minervalibreria.it/",
  },

  footer: {
    text: "Libreria Minerva, libreria indipendente a Roma dal 1923.",
  },
};
