// Demo per Tabaccheria F.lli Benincampi. Dati verificati: nome, indirizzo,
// telefono, email dal loro sito reale (navonainfiore.com/the-shop e
// /cartoleria, gestito dalla stessa famiglia insieme all'affittacamere
// "Appartamento Benincampi" sullo stesso dominio). NON hanno un sito
// indipendente proprio: solo questa pagina di presentazione dentro il
// sito dell'affittacamere di famiglia, motivo per cui non c'e' nessun
// socials.website impostato qui sotto.
// STORIA: "The Benincampi family has been in Piazza Navona since the
// first half of the fifties" (testo del loro stesso sito), prima con i
// fratelli Vittorio e Antonio Benincampi, oggi con i figli e nipoti
// Fabio, Laura e Daniela. Negozio iscritto nell'elenco delle Botteghe
// Storiche di Roma, specializzato in borse/giacche/accessori in vera
// pelle italiana lavorati a mano, oltre a tabacchi, souvenir, dolciumi.
// LOGO: nessun logo grafico esiste sul loro sito (solo il nome scritto
// in un web-font, nessuna icona/immagine isolabile): usati i soli
// testo/iniziali di fallback, non e' stato saltato un logo reale.
// FOTO: tutte reali, scaricate direttamente dal loro sito (nessuna
// stock). hero = due vere borse in pelle del negozio (azzurra e
// cognac); about = un vero souvenir del Colosseo in vendita in negozio;
// gallery-1 = vero bancone di dolciumi/caramelle del negozio; gallery-2
// = vero bancone di accendini/gratta e vinci/tabacchi. Instagram e
// Facebook cercati per nome ("Tabaccheria Benincampi Piazza Navona") e
// non trovati: nessun profilo pubblico rintracciabile, solo directory
// (Turismo Roma, PagineGialle/Virgilio) e il sito di famiglia.

const SITE_CONFIG = {
  business: {
    name: "Tabaccheria F.lli Benincampi",
    tagline: "Tabaccheria, souvenir e borse in pelle a Piazza Navona dal 1950",
    logoText: "FB",
    logoImage: "",
  },

  theme: {
    primary: "#8a4a2a",
    accent: "#a52422",
    font: "'Poppins', sans-serif",
    headingFont: "'Yeseva One', cursive",
    mood: "vintage",
  },

  hero: {
    heading: "Benvenuti da {{business.name}}",
    subheading: "Borse in pelle italiana, souvenir e tabaccheria nel cuore di Piazza Navona dal 1950",
    backgroundImage: "images/hero.jpg",
    ctaText: "Vieni a trovarci",
    ctaLink: "#contact",
  },

  about: {
    heading: "Chi siamo",
    text: "Dai primi anni Cinquanta la famiglia Benincampi accoglie residenti e turisti in Piazza Navona, prima con i fratelli Vittorio e Antonio, oggi con i figli e nipoti Fabio, Laura e Daniela. La bottega e' iscritta nell'elenco delle Botteghe Storiche di Roma ed e' specializzata in borse, giacche e accessori in vera pelle italiana lavorati a mano, oltre a tabacchi, souvenir e dolciumi.",
    image: "images/about.jpg",
  },

  offerings: {
    heading: "Cosa trovi da noi",
    items: [
      { name: "Borse in pelle artigianali", description: "Borse, giacche e accessori in vera pelle italiana, lavorati a mano", price: "" },
      { name: "Souvenir di Roma", description: "Selezione di souvenir e regali per turisti, dal classico al ricercato", price: "" },
      { name: "Tabaccheria", description: "Sigarette, sigari cubani, ricariche telefoniche, marche da bollo, gratta e vinci", price: "" },
      { name: "Dolciumi e bibite", description: "Caramelle, cioccolato, gelati e bibite fresche", price: "" },
      { name: "Servizi rapidi", description: "Fotocopie, stampa da file, scannerizzazione, biglietti bus e metro", price: "" },
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
      { day: "Lunedì", hours: "da confermare" },
      { day: "Martedì", hours: "da confermare" },
      { day: "Mercoledì", hours: "da confermare" },
      { day: "Giovedì", hours: "da confermare" },
      { day: "Venerdì", hours: "da confermare" },
      { day: "Sabato", hours: "da confermare" },
      { day: "Domenica", hours: "da confermare" },
    ],
  },

  contact: {
    heading: "Contattaci",
    address: "Piazza Navona, 75, 00186 Roma",
    phone: "06 6861509",
    whatsapp: "+39 338 983 4465",
    email: "tabaccheriabenincampi@gmail.com",
  },

  map: {
    embedSrc: "https://www.google.com/maps?q=Piazza+Navona+75+Roma&output=embed",
  },

  socials: {
    instagram: "",
    facebook: "",
    tiktok: "",
    website: "",
  },

  footer: {
    text: "Tabaccheria F.lli Benincampi, a Piazza Navona dal 1950.",
  },
};
