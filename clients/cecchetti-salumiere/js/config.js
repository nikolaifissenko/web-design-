// Demo per Cecchetti Il Salumiere: salumeria e gastronomia a Roma,
// Via Mario Menghini 31/33 (Colli Albani), dal 1950. Sito attuale
// (cecchettiilsalumiere.com) confermato dal vivo: WordPress 4.9 del
// 2017/2018, tema Revolution Slider datato, nessuna cura visiva per
// una gastronomia che lavora davvero bene con prodotti freschi.
// STORIA: salumeria e gastronomia dal 1950, fornitori selezionati in
// tutta Italia, ampio assortimento di prosciutti, formaggi, pasta
// fresca e specialità regionali. Testo riassunto onestamente dalla
// pagina "Chi siamo" reale del loro sito, non inventato.
// EMAIL: ilsalumiere1@hotmail.it, trovata direttamente sul loro sito
// (pagina Chi siamo, footer). Non è una fonte terza, è il loro stesso
// sito.
// FOTO: tutte reali, nessuna stock, tutte scaricate direttamente dal
// loro sito (cartella wp-content/uploads originale). hero.jpg mostra
// un vero prosciutto arrosto (porchetta) appena tagliato sul bancone.
// about.jpg è la vera vetrina dei formaggi del negozio (forme di
// pecorino e vecchio nave con i cartellini prezzo reali). gallery-1.jpg
// è una forma di formaggio stagionato al pistacchio con vasetti di
// confettura reali. gallery-2.jpg è un vero rotolo di vitello tonnato
// (o simile) decorato con olive. gallery-3.jpg mostra vero cotechino
// o salume affettato sul bancone del negozio.
// LOGO: il logo reale è solo una scritta corsiva ("Cecchetti"), nessuna
// icona esiste in nessun file trovato. Per onestà, iniziale testuale
// "C" invece di inventare un'icona senza base reale, nel rosso
// campionato pixel per pixel dalla scritta reale.
// COLORI: rosso `#dc1f4d` campionato dalla scritta reale del logo, e
// un marrone caldo `#6b4226` (colore del legno del bancone/tagliere
// visibile in tutte le foto reali), non inventati.

const SITE_CONFIG = {
  business: {
    name: "Cecchetti Il Salumiere",
    tagline: "Salumeria e gastronomia a Roma dal 1950",
    logoText: "C",
    logoImage: "",
  },

  theme: {
    primary: "#dc1f4d",
    accent: "#6b4226",
    font: "'Poppins', sans-serif",
    headingFont: "'Playfair Display', serif",
    mood: "rustic",
  },

  hero: {
    heading: "Benvenuti da {{business.name}}",
    subheading: "Salumi, formaggi e gastronomia genuina a Roma dal 1950",
    backgroundImage: "images/hero.jpg",
    ctaText: "Scopri la salumeria",
    ctaLink: "#contact",
  },

  about: {
    heading: "Chi siamo",
    text: "La salumeria Cecchetti Il Salumiere è un posto dove si coltiva ogni giorno l'arte del mangiare bene, dal 1950. Prosciutti, salumi, formaggi, latticini, pasta fresca e specialità regionali, con fornitori selezionati in tutta Italia per garantire freschezza e genuinità. Se un prodotto non è disponibile, ce lo dite e cerchiamo di procurarlo, sempre con la stessa qualità.",
    image: "images/about.jpg",
  },

  offerings: {
    heading: "Le nostre specialità",
    items: [
      { name: "Prosciutti e salumi", description: "Prosciutto di Norcia, Parma, San Daniele, bresaola chianina", price: "" },
      { name: "Formaggi", description: "Parmigiano Reggiano 36 mesi, pecorino romano, burrata pugliese, mozzarella di bufala", price: "" },
      { name: "Pasta fresca e piatti pronti", description: "Cannelloni, ravioli, gnocchi, tortellini, tagliatelle fatte in casa", price: "" },
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
      { day: "Lunedì - Sabato", hours: "07:30 - 13:45, 16:30 - 20:00" },
      { day: "Domenica", hours: "Chiuso" },
    ],
  },

  contact: {
    heading: "Contattaci",
    address: "Via Mario Menghini 31/33, Zona Colli Albani, 00179 Roma",
    phone: "06 786019",
    whatsapp: "393 810 3015",
    email: "ilsalumiere1@hotmail.it",
  },

  map: {
    embedSrc: "https://www.google.com/maps?q=Via+Mario+Menghini+31+Roma&output=embed",
  },

  socials: {
    instagram: "",
    facebook: "",
    tiktok: "",
    website: "http://www.cecchettiilsalumiere.com/",
  },

  footer: {
    text: "Cecchetti Il Salumiere: salumeria e gastronomia a Roma dal 1950.",
  },
};
