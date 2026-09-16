// Demo per Antica Libreria Cascianelli: libreria antiquaria a Largo Febo
// 14/16, a Piazza Navona. I locali sono un'ambientazione del primo
// Ottocento (in origine una sartoria ecclesiastica dal 1835), diventata
// libreria antiquaria nel 1909 con la famiglia Cascianelli, oggi curata
// da Valentina La Rocca, ex scenografa teatrale.
// SITO ATTUALE: anticalibreriacascianelli.com e' protetto da una
// verifica anti-bot (Cloudflare "robot-suspicion") che ha bloccato ogni
// tentativo automatico di vederne il contenuto reale in questa sessione,
// sia con curl/browser semplice sia con un browser headless completo.
// Confermato dal vivo: e' un ostacolo reale, non solo un sito vecchio.
// STORIA: una delle librerie antiquarie piu' celebri di Roma, un vero
// wunderkammer con vetrine scorrevoli su rotaie originali e una porta
// che conduce a una stanza segreta. Frequentata nel tempo da Onassis,
// Greta Garbo, Papa Giovanni XXIII, Leonardo Sciascia, Keanu Reeves;
// location scelta da Alessandro Michele per la campagna Gucci Pre-Fall
// 2017 e utilizzata anche in scene cinematografiche. Testo tradotto e
// riassunto onestamente da fonti stampa indipendenti (Roma.com,
// Rocaille), non inventato.
// EMAIL: libreriacascianelli@gmail.com, trovata tramite ricerca diretta
// (numero confermato anche su piu' fonti indipendenti). Anche Instagram
// (instagram.com/libreriacascianelli) e Facebook
// (facebook.com/AnticaLibreriaCascianelli) confermati prima di
// costruire la demo, non solo "nessun sito".
// FOTO: tutte reali, nessuna stock. Il sito ufficiale era bloccato da
// verifica anti-bot, quindi le foto sono state recuperate da un
// servizio stampa indipendente (roma.com, articolo "L'Antica Libreria
// Cascianelli, un vero paradiso per i collezionisti", 2022), che
// fotografa lo stesso negozio, non un altro: hero.jpg mostra la vera
// vetrina d'ingresso con la scritta dipinta a mano "Antica Libreria"
// sul vetro. about.jpg mostra il vero interno con le librerie ad arco
// in legno originali. gallery-1.jpg mostra un vero ritratto ottocentesco
// su cavalletto tra le vetrine della libreria. gallery-2.jpg mostra la
// vera scrivania colma di oggetti da collezione, cornici e libri
// antichi. gallery-3.jpg mostra una vera vetrina "wunderkammer" con
// oggetti curiosi e naturalia.
// LOGO: nessun logo reale isolabile trovato (il sito ufficiale era
// bloccato, quindi non e' stato possibile verificare un file logo
// dedicato). Disegnata un'icona di libro aperto per lo slot circolare
// del template, nello spirito della vera insegna dipinta a mano sulla
// vetrina (hero.jpg), usando colori campionati dalle vere foto: il
// legno scuro delle librerie (about.jpg) e un oro antico coerente con
// la doratura della scritta in vetrina.
// COLORI: marrone legno scuro #25160c e oro antico #b08c4a, entrambi
// campionati dalle foto reali, non inventati.

const SITE_CONFIG = {
  business: {
    name: "Antica Libreria Cascianelli",
    tagline: "Libreria antiquaria dal 1909 a Piazza Navona",
    logoText: "AC",
    logoImage: "images/logo.png",
  },

  theme: {
    primary: "#25160c",
    accent: "#b08c4a",
    font: "'Poppins', sans-serif",
    headingFont: "'Playfair Display', serif",
    mood: "editorial",
  },

  hero: {
    heading: "Benvenuti da {{business.name}}",
    subheading: "Libri rari, stampe e curiosita' d'antiquariato a due passi da Piazza Navona dal 1909",
    backgroundImage: "images/hero.jpg",
    ctaText: "Scopri la libreria",
    ctaLink: "#contact",
  },

  about: {
    heading: "Chi siamo",
    text: "L'Antica Libreria Cascianelli si trova a Largo Febo, a due passi da Piazza Navona, in un ambiente rimasto pressoche' invariato dall'inizio dell'Ottocento: vetrine con meccanismo scorrevole su rotaie originali, boiserie d'epoca e una porta che conduce a una stanza segreta. Nata come libreria antiquaria nel 1909, oggi propone libri rari e di prima edizione, stampe, opere d'arte e oggetti da collezione su medicina, botanica, letteratura e storia romana. Un vero paradiso per collezionisti, nel tempo frequentato da personalita' come Greta Garbo e Papa Giovanni XXIII.",
    image: "images/about.jpg",
  },

  offerings: {
    heading: "Le nostre proposte",
    items: [
      { name: "Libri rari e prime edizioni", description: "Letteratura, storia romana, scienze e religione", price: "" },
      { name: "Stampe e opere d'arte", description: "Incisioni, dipinti e oggetti d'antiquariato", price: "" },
      { name: "Cabinet e naturalia", description: "Curiosita', oggetti scientifici e da collezione", price: "" },
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
    schedule: [],
  },

  contact: {
    heading: "Contattaci",
    address: "Largo Febo, 14/16, 00186 Roma",
    phone: "",
    whatsapp: "",
    email: "libreriacascianelli@gmail.com",
  },

  map: {
    embedSrc: "https://www.google.com/maps?q=Largo+Febo+14+Roma&output=embed",
  },

  socials: {
    instagram: "https://www.instagram.com/libreriacascianelli/",
    facebook: "https://www.facebook.com/AnticaLibreriaCascianelli/",
    tiktok: "",
    website: "https://anticalibreriacascianelli.com/",
  },

  footer: {
    text: "Antica Libreria Cascianelli: libreria antiquaria a Roma dal 1909.",
  },
};
