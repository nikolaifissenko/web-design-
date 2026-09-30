// Demo per Comandini: articoli religiosi, abbigliamento sacro per
// sacerdoti e souvenir religiosi, Borgo Pio 151, Roma (a pochi passi da
// San Pietro). Dal 1962. STORIA riassunta onestamente dal loro stesso
// sito (comandini.it): "Dal 1962 la ditta Comandini produce e vende
// oggetti religiosi, abbigliamento sacro per sacerdoti e souvenir
// religiosi." Il direttore attuale, Stefano Comandini, è citato in più
// articoli di stampa ("Da oltre 60 anni siamo specializzati in
// articoli religiosi"). Nessun nome di fondatore è confermato in nessuna
// fonte controllata, quindi non ne viene inventato uno (a differenza di
// quanto inizialmente ipotizzato durante la ricerca, poi scartato per
// mancanza di conferma diretta nel testo del sito).
// EMAIL: info@comandini.it, trovata direttamente nel tag mailto della
// loro stessa homepage, confermata via curl diretto (200).
// TELEFONO: 06/6875079, trovato direttamente nel tag tel della loro
// stessa homepage.
// SITO ATTUALE: comandini.it, confermato dal vivo via curl: sito
// proprio funzionante ma con un design abbastanza generico/datato per
// un'attività con oltre 60 anni di storia a due passi dal Vaticano.
// FOTO: le foto prodotto presenti sul loro CDN (b1/b2/b3) non sono
// state usate: dopo un esame visivo sono risultate probabile fotografia
// stock generica (troppo levigata/professionale per foto casalinghe di
// un piccolo negozio) e non è stato possibile confermarle con certezza
// come autenticamente loro. Per onestà, secondo lo stesso principio già
// seguito per bottega-della-sedia, si è scelto di usare foto stock
// Unsplash chiaramente dichiarate piuttosto che rischiare di presentare
// come "vere" foto non verificabili. hero.jpg: rosari con medaglie
// della Madonna Miracolosa, foto di Kevin Varela (Unsplash, licenza
// gratuita). about.jpg: rosario in legno su superficie scura, foto di S
// Turby (Unsplash, licenza gratuita). gallery-1.jpg: ostensorio dorato,
// foto di Christian Harb (Unsplash, licenza gratuita). Nessuna delle tre
// mostra marchi di terzi.
// LOGO: reale, trovato sul loro sito (wordmark corsivo "Comandini S." +
// tagline "articoli religiosi dal 1962"), ma è un wordmark puro senza
// un'icona separabile da ritagliare (stesso caso di eufemi-stampe-
// antiche, pianoforti-papi e romana-neon). Il file del logo reale è
// campionato pixel-per-pixel ed è risultato puramente bianco/nero
// (valori RGB confermati: (0,0,0), (246,246,246), (255,255,255)), senza
// alcuna informazione di colore. Per questo, seguendo CLAUDE.md, si
// usano le iniziali testuali "CS" (da "Comandini S."). Il nero è preso
// direttamente dal vero logo; l'oro è una scelta di accento coerente
// con gli oggetti liturgici dorati che l'attività vende (visibili anche
// nella foto reale scelta per la galleria), non un colore inventato per
// il logo stesso, che semplicemente non ne ha uno.
// COLORI: nero `#0a0a0a` (dal vero logo) e oro `#a8823a` (accento,
// coerente con gli oggetti dorati venduti, non campionato dal logo che
// è monocromatico).
// MOOD: editorial (attività storica dal 1962, in un luogo di forte
// valore simbolico vicino al Vaticano), per la linea guida della skill
// professional-web-design.

const SITE_CONFIG = {
  business: {
    name: "Comandini",
    tagline: "Articoli religiosi a Roma dal 1962",
    logoText: "CS",
    logoImage: "",
  },

  theme: {
    primary: "#0a0a0a",
    accent: "#a8823a",
    font: "'Poppins', sans-serif",
    headingFont: "'Playfair Display', serif",
    mood: "editorial",
  },

  hero: {
    heading: "Benvenuti da {{business.name}}",
    subheading: "Articoli religiosi, abbigliamento sacro e souvenir a Borgo Pio, a pochi passi da San Pietro, dal 1962",
    backgroundImage: "images/hero.jpg",
    ctaText: "Contattaci",
    ctaLink: "#contact",
  },

  about: {
    heading: "Chi siamo",
    text: "Dal 1962 la ditta Comandini produce e vende oggetti religiosi, abbigliamento sacro per sacerdoti e souvenir religiosi, nel cuore di Borgo Pio, a pochi passi dalla basilica di San Pietro. Da oltre 60 anni la stessa cura artigianale, oggi portata avanti da Stefano Comandini.",
    image: "images/about.jpg",
  },

  offerings: {
    heading: "Cosa offriamo",
    items: [
      { name: "Oggetti religiosi", description: "Rosari, medaglie, crocifissi e articoli devozionali", price: "" },
      { name: "Abbigliamento sacro", description: "Paramenti e abbigliamento per sacerdoti", price: "" },
      { name: "Souvenir religiosi", description: "Ricordi e articoli da regalo per pellegrini e visitatori", price: "" },
    ],
  },

  gallery: {
    heading: "Galleria",
    images: [
      "images/gallery-1.jpg",
    ],
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
    address: "Borgo Pio 151, 00193 Roma",
    phone: "06 6875079",
    whatsapp: "",
    email: "info@comandini.it",
  },

  map: {
    embedSrc: "https://www.google.com/maps?q=Borgo+Pio+151+Roma&output=embed",
  },

  socials: {
    instagram: "",
    facebook: "",
    tiktok: "",
    website: "https://www.comandini.it/",
  },

  footer: {
    text: "Comandini: articoli religiosi a Roma dal 1962.",
  },
};
