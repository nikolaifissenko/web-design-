// Demo per Cristiana Perali: gioielleria/arte orafa a Roma, Via dei
// Banchi Vecchi 60 (Campo Marzio/Ponte), dal 1907. Sito attuale
// (cristianaperali.it) confermato dal vivo: WordPress 5.9.17 /
// WooCommerce 6.3.1, versioni di qualche anno indietro rispetto agli
// standard attuali, per una gioielliera che disegna pezzi esposti in
// mostre e sfilate internazionali.
// STORIA: nel 1907 il nonno Carlo Perali apre un laboratorio orafo con
// annessa orologeria di precisione. Nel 1945 lo affianca il figlio
// Paolo, che a sua volta trasmette la passione alla figlia Cristiana,
// designer orafa di terza generazione, che negli anni '80 apre il
// proprio laboratorio creativo accanto al padre. I suoi gioielli sono
// stati esposti in musei e sfilate di alta gioielleria a Roma, Pechino,
// Shanghai, Chicago, New York, San Pietroburgo e Città del Messico.
// Testo riassunto onestamente dalla homepage reale del loro sito, non
// inventato.
// EMAIL: info@cristianaperali.it, trovata direttamente sul loro sito
// (link mailto in homepage), confermata anche sulla scheda ufficiale
// Unioncamere delle imprese storiche italiane.
// FOTO: tutte reali, nessuna stock, tutte scaricate direttamente dal
// loro sito. hero.jpg è un vero anello a forma di maschera teatrale in
// oro con gli orecchini coordinati, fotografato su una vera scalinata
// romana in travertino. about.jpg è un vero bracciale rigido in oro
// con foglie e pietre colorate (rubini, smeraldi, ametista). gallery-
// 1.jpg è un vero bracciale rigido in oro martellato. gallery-2.jpg è
// un vero ciondolo in oro a forma di guerriero Maya. gallery-3.jpg è
// un vero bracciale di perle. gallery-4.jpg sono veri orecchini con
// zaffiri grigio-rosa.
// LOGO: reale, un monogramma "CP" pulito sopra la scritta "Cristiana
// Perali Roma", con una linea di separazione netta dal testo. Ritagliato
// il solo monogramma (nessun testo tagliato) e ricentrato su uno sfondo
// avorio per lo slot circolare, nessuna icona inventata.
// COLORI: marrone/bronzo `#592c03` campionato pixel per pixel dal
// monogramma reale del logo, e oro `#b8860b` campionato dai gioielli
// stessi fotografati in hero.jpg, non inventati.

const SITE_CONFIG = {
  business: {
    name: "Cristiana Perali",
    tagline: "Arte orafa a Roma dal 1907, tre generazioni",
    logoText: "CP",
    logoImage: "images/logo.png",
  },

  theme: {
    primary: "#592c03",
    accent: "#b8860b",
    font: "'Poppins', sans-serif",
    headingFont: "'Playfair Display', serif",
    mood: "editorial",
  },

  hero: {
    heading: "Benvenuti da {{business.name}}",
    subheading: "Arte orafa artigianale nel cuore di Roma, dal 1907",
    backgroundImage: "images/hero.jpg",
    ctaText: "Scopri il laboratorio",
    ctaLink: "#contact",
  },

  about: {
    heading: "Chi siamo",
    text: "Nel 1907 mio nonno Carlo Perali aprì un laboratorio orafo con annessa orologeria di precisione. Nel 1945 lo affiancò mio padre Paolo, che a sua volta mi ha trasmesso la stessa passione. Dagli anni '80 disegno i miei gioielli nello stesso laboratorio di famiglia, con pezzi esposti in musei e sfilate di alta gioielleria in Italia e nel mondo, da Roma a Pechino, da New York a San Pietroburgo.",
    image: "images/about.jpg",
  },

  offerings: {
    heading: "Le nostre creazioni",
    items: [
      { name: "Gioielli su disegno", description: "Anelli, bracciali e collane disegnati e realizzati a mano nel nostro laboratorio", price: "" },
      { name: "Oreficeria tradizionale", description: "Lavorazione artigianale dell'oro, tramandata da tre generazioni", price: "" },
      { name: "Restauro e riparazioni", description: "Restauro di gioielli antichi e di famiglia", price: "" },
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
    schedule: [
      { day: "Lunedì - Sabato", hours: "12:00 - 19:00" },
      { day: "Domenica", hours: "Chiuso" },
    ],
  },

  contact: {
    heading: "Contattaci",
    address: "Via dei Banchi Vecchi 60, 00186 Roma",
    phone: "06 6880 2907",
    whatsapp: "338 943 2593",
    email: "info@cristianaperali.it",
  },

  map: {
    embedSrc: "https://www.google.com/maps?q=Via+dei+Banchi+Vecchi+60+Roma&output=embed",
  },

  socials: {
    instagram: "https://www.instagram.com/cristiana_perali_gioielli/",
    facebook: "",
    tiktok: "",
    website: "https://www.cristianaperali.it/",
  },

  footer: {
    text: "Cristiana Perali: arte orafa a Roma dal 1907, tre generazioni.",
  },
};
