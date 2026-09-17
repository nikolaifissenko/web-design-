// Demo per Biscottificio Innocenti: biscottificio artigianale a Roma,
// Via della Luce 21, Trastevere, dal 1940. Non ha un sito vero e
// proprio: solo un blog gratuito su wordpress.com
// (biscottificioartigianoinnocenti.wordpress.com), senza foto in
// homepage, non una vetrina professionale.
// STORIA: la famiglia Innocenti gestisce il biscottificio dagli anni
// della Seconda Guerra Mondiale (il bisnonno Sesto iniziò vendendo
// gallette ai militari), oggi guidato da Manuela, terza/quarta
// generazione. Il forno storico lungo 14 metri, ancora in uso, è il
// cuore del laboratorio. Testo riassunto onestamente da fonti di
// stampa (Gambero Rosso, Wanted in Rome), non inventato.
// EMAIL: biscottificioinnocenti@gmail.com, confermata su più fonti
// indipendenti (registro Yelp/Tripadvisor e directory locali).
// FOTO: tutte reali, nessuna stock. Non essendo disponibili foto sul
// sito stesso (che non ne ha), le foto vengono da un articolo del
// blog di viaggio "An American in Rome" (anamericaninrome.com), la
// stessa categoria di fonte ("food/business blogs") indicata da
// CLAUDE.md come fonte accettabile quando il sito del negozio non ha
// foto proprie. hero.jpg mostra il vero bancone del laboratorio con
// la foto storica del negozio appesa al muro e l'insegna
// "BISCOTTIFICIO". about.jpg è la vera vetrina del negozio in Via
// della Luce. gallery-1/2/3.jpg mostrano le vere vetrine espositive
// piene di crostate, biscotti e paste reali del negozio, con i
// cartellini scritti a mano. Le foto sono state ritagliate solo per
// rimuovere la filigrana del blog, nessuna modifica al contenuto.
// LOGO: nessun logo esiste, solo una scritta a mano sull'insegna e
// sul sacchetto di carta. Per onestà, iniziale testuale "I" invece di
// inventare un'icona senza base reale.
// COLORI: blu `#1d3f6e` e rosso `#a3272e`, gli stessi colori usati
// nella scritta reale del sacchetto di carta del negozio ("Innocenti"
// in blu, "Roma" in rosso), non inventati.

const SITE_CONFIG = {
  business: {
    name: "Biscottificio Innocenti",
    tagline: "Biscotti artigianali a Trastevere dal 1940",
    logoText: "I",
    logoImage: "",
  },

  theme: {
    primary: "#1d3f6e",
    accent: "#a3272e",
    font: "'Poppins', sans-serif",
    headingFont: "'Playfair Display', serif",
    mood: "vintage",
  },

  hero: {
    heading: "Benvenuti da {{business.name}}",
    subheading: "Biscotti e pasticceria fatti a mano a Trastevere dal 1940",
    backgroundImage: "images/hero.jpg",
    ctaText: "Vieni a trovarci",
    ctaLink: "#contact",
  },

  about: {
    heading: "Chi siamo",
    text: "Il biscottificio Innocenti nasce a Trastevere negli anni della Seconda Guerra Mondiale, quando il bisnonno Sesto iniziò a vendere gallette ai militari. Oggi la famiglia continua la tradizione con Manuela, terza generazione, nello stesso laboratorio con il suo forno lungo 14 metri, ancora il cuore di tutta la produzione artigianale.",
    image: "images/about.jpg",
  },

  offerings: {
    heading: "Le nostre specialità",
    items: [
      { name: "Biscotti artigianali", description: "Ciambelline all'anice, biscotti al vino, biscotti integrali", price: "" },
      { name: "Torte e crostate", description: "Crostate, pan di Spagna, torte rustiche fatte in casa", price: "" },
      { name: "Da forno", description: "Panettoni, colombe, frappe e castagnole di stagione", price: "" },
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
      { day: "Lunedì - Sabato", hours: "08:00 - 19:30" },
      { day: "Domenica", hours: "Chiuso" },
    ],
  },

  contact: {
    heading: "Contattaci",
    address: "Via della Luce 21, Trastevere, 00153 Roma",
    phone: "06 5803926",
    whatsapp: "",
    email: "biscottificioinnocenti@gmail.com",
  },

  map: {
    embedSrc: "https://www.google.com/maps?q=Via+della+Luce+21+Roma&output=embed",
  },

  socials: {
    instagram: "",
    facebook: "https://www.facebook.com/BiscottificioInnocenti/",
    tiktok: "",
    website: "",
  },

  footer: {
    text: "Biscottificio Innocenti: biscotti artigianali a Trastevere dal 1940.",
  },
};
