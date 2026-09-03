// Demo per Mancini Penne dal 1939 (Piazza San Bernardo 101b, Roma).
// Registrata come Bottega Storica il 31.10.2001. Il loro vecchio
// dominio (mancinipenne1939.it) non risolve più (DNS irraggiungibile,
// confermato sia con WebFetch che con una ricerca diretta): nessun
// sito attivo oggi. Email reale confermata su due fonti indipendenti
// (botteghestoricheroma.com, la scheda ufficiale dell'Associazione
// Botteghe Storiche di Roma, e un secondo riscontro in ricerca diretta):
// mancinicartoleria1936@gmail.com.
//
// FOTO: entrambe reali, nessuna stock. Fonte: botteghestoricheroma.com,
// la scheda ufficiale del negozio sull'Associazione Botteghe Storiche
// di Roma (non un blog generico). hero.jpg e about.jpg mostrano la
// vetrina reale del negozio, con l'insegna "CARTOLERIA" e i marchi
// venduti (Montegrappa, Filofax, Zippo) chiaramente leggibili, prova
// diretta che è il loro negozio. Solo 2 foto reali trovate: la galleria
// è stata lasciata vuota piuttosto che riempita con foto generiche o
// duplicate (il template la nasconde automaticamente).
//
// LOGO: nessun logo pulito trovato. Per questo è stata disegnata da
// zero un'icona a pennino stilografico, coerente col nome "Penne", con
// colori scelti a occhio dalla vera insegna blu navy e gialla visibile
// nelle foto (il contrasto della foto non permetteva un campionamento
// pixel affidabile, quindi non dichiarato come "campionato" nei
// commenti, per onestà).

const SITE_CONFIG = {
  business: {
    name: "Mancini Penne",
    tagline: "Cartoleria e penne di qualità a Roma dal 1939",
    logoText: "M",
    logoImage: "images/logo.svg",
  },

  theme: {
    primary: "#343a4a",
    accent: "#c9b840",
    font: "'Poppins', sans-serif",
    headingFont: "'Yeseva One', serif",
    mood: "vintage",
  },

  hero: {
    heading: "Benvenuti da {{business.name}}",
    subheading: "Penne di marca e articoli da regalo, nello stesso negozio dal 1939",
    backgroundImage: "images/hero.jpg",
    ctaText: "Vieni a trovarci",
    ctaLink: "#contact",
  },

  about: {
    heading: "Chi siamo",
    text: "Mancini Penne è una cartoleria storica nel cuore di Roma, riconosciuta Bottega Storica di Roma Capitale. Le vetrine con cornici in metallo e l'interno dallo stile sobrio mettono in risalto penne di marchi rinomati e articoli da regalo, scelti con la cura di chi lavora in questo negozio da decenni.",
    image: "images/about.jpg",
  },

  offerings: {
    heading: "Cosa trovate da noi",
    items: [
      { name: "Penne di marca", description: "Una selezione di penne stilografiche e a sfera di marchi rinomati", price: "" },
      { name: "Articoli da regalo", description: "Idee regalo curate per ogni occasione", price: "" },
      { name: "Agende e articoli di cancelleria", description: "Prodotti di qualità per casa e ufficio", price: "" },
    ],
  },

  gallery: {
    heading: "Galleria",
    images: [],
  },

  hours: {
    heading: "Orari",
    schedule: [
      { day: "Lunedì - Sabato", hours: "9:30 - 13:00, 15:30 - 19:30" },
      { day: "Domenica", hours: "Chiuso" },
    ],
  },

  contact: {
    heading: "Contattaci",
    address: "Piazza San Bernardo, 101b, 00187 Roma",
    phone: "06 4884952",
    whatsapp: "",
    email: "mancinicartoleria1936@gmail.com",
  },

  map: {
    embedSrc: "https://www.google.com/maps?q=Piazza+San+Bernardo+101+Roma&output=embed",
  },

  socials: {
    instagram: "",
    facebook: "https://www.facebook.com/mancinipenne1939/",
    tiktok: "",
    website: "",
  },

  footer: {
    text: "Mancini Penne: cartoleria a Roma dal 1939.",
  },
};
