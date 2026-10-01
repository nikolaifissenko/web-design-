// Demo per Massoni & Massoni: gioielleria e argenteria, Via Margutta
// 54/A, Roma. STORIA riassunta onestamente dal testo reale della loro
// stessa homepage (massoni.it): "In the 1790 Pietro Massoni has laid
// the foundation of what, handed down from father to son from over
// 200 years, is one of the most beloved brand of the roman jewelry...
// In 2006 Carlo and Giuseppe Massoni, mindful of the tradition of
// seven generations... decided to move their corporate headquarter to
// the magnificent Via Margutta." Sette generazioni, dal 1790, non
// inventato: confermato testualmente sulla loro stessa pagina.
// EMAIL: massoni.info@gmail.com, trovata direttamente nel footer della
// loro stessa pagina Contatti, confermata via curl diretto (200).
// Primo indirizzo (non una directory di terzi), anche se è un
// indirizzo Gmail e non un dominio proprio: è comunque quello che loro
// stessi pubblicano come contatto ufficiale.
// TELEFONO: +39 06-321-6916, trovato nello stesso punto.
// SITO ATTUALE: massoni.it, confermato dal vivo via curl: sito reale e
// funzionante ma costruito su uno stack datato (jQuery 1.9.1 del 2013,
// owl-carousel, Bootstrap vecchio, fogli di stile accumulati per anni:
// style.css, poi style2021.css, poi style2023.css invece di un vero
// redesign). La pagina "Contatti" stessa restituisce un contenuto di
// errore ("404"/"VERSIONE TESTING") pur mostrando comunque footer e
// indirizzo, un segno concreto di manutenzione trascurata, non solo
// un'impressione soggettiva.
// FOTO: tutte reali, zero stock, scaricate direttamente dalla pagina
// "Acquista" del loro stesso sito (upload/images/Prodotti_2023/).
// **Scartate di proposito le foto dello slider principale della
// homepage**: mostravano gioielli vintage firmati Bvlgari (visibili
// nei nomi file/alt text: "Tavolo mix Vintage oro Bvlgari", "Fontana
// Trombino e tubogas Bvlgari"), pezzi autentici che Massoni vende come
// gioielleria vintage/d'epoca, ma mostrare il marchio di un'altra
// maison così in primo piano in questo demo avrebbe creato la stessa
// ambiguità sul marchio già evitata altrove su questo repository
// (vedi CLAUDE.md). Anche diverse foto prodotto sulla pagina
// "Acquista" sono firmate da altre maison (es. "Sapphire earrings
// signed Bulgari", "Alhambra necklace signed Van Cleef & Arpels") e
// sono state scartate per lo stesso motivo. Le tre foto usate qui sono
// pezzi senza alcuna firma di terzi nell'alt text né nell'immagine
// stessa, verificate visivamente una per una: hero.jpg è un bracciale
// in oro e diamanti con motivo a nido d'ape, about.jpg è una collana
// di perle australiane con chiusura in diamanti, gallery-1.jpg è un
// anello con zaffiro centrale e diamanti laterali.
// LOGO: reale, trovato sul loro sito (sigillo di ceralacca rossa con
// monogramma "M" sopra il wordmark "MASSONI"), con un'icona
// genuinamente separabile da ritagliare. Ritagliato al solo sigillo,
// centrato con margine su sfondo ivory circolare, stesso schema già
// usato per logo con icona vera (es. studio-cassio).
// COLORI: rosso `#c52711`, campionato pixel-per-pixel dal vero
// sigillo di ceralacca nel logo, e grigio `#83868c`, campionato
// pixel-per-pixel dal vero wordmark "MASSONI" nello stesso file.
// MOOD: editorial (236 anni di storia continua, sette generazioni
// della stessa famiglia, documentati testualmente dal loro stesso
// sito), per la linea guida della skill professional-web-design.

const SITE_CONFIG = {
  business: {
    name: "Massoni",
    tagline: "Gioielleria e argenteria a Roma dal 1790",
    logoText: "M",
    logoImage: "images/logo.png",
  },

  theme: {
    primary: "#c52711",
    accent: "#83868c",
    font: "'Poppins', sans-serif",
    headingFont: "'Playfair Display', serif",
    mood: "editorial",
  },

  hero: {
    heading: "Benvenuti da {{business.name}}",
    subheading: "Gioielleria e argenteria a Via Margutta, Roma, dal 1790: sette generazioni della stessa famiglia",
    backgroundImage: "images/hero.jpg",
    ctaText: "Contattaci",
    ctaLink: "#contact",
  },

  about: {
    heading: "Chi siamo",
    text: "Nel 1790 Pietro Massoni pose le fondamenta di quella che, di padre in figlio per oltre 200 anni, è diventata una delle firme più amate della gioielleria romana. Dal 2006 la sede è nella storica Via Margutta, dove Carlo e Giuseppe Massoni portano avanti la tradizione di sette generazioni.",
    image: "images/about.jpg",
  },

  offerings: {
    heading: "Cosa offriamo",
    items: [
      { name: "Gioielleria", description: "Anelli, collane e bracciali in oro, diamanti e pietre preziose", price: "" },
      { name: "Argenteria", description: "Oggetti e complementi in argento", price: "" },
      { name: "Gioielli vintage e d'epoca", description: "Pezzi storici e d'antiquariato, selezionati e autenticati", price: "" },
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
      { day: "Domenica", hours: "su appuntamento" },
    ],
  },

  contact: {
    heading: "Contattaci",
    address: "Via Margutta 54/A, 00187 Roma",
    phone: "06 3216916",
    whatsapp: "",
    email: "massoni.info@gmail.com",
  },

  map: {
    embedSrc: "https://www.google.com/maps?q=Via+Margutta+54A+Roma&output=embed",
  },

  socials: {
    instagram: "https://www.instagram.com/massoniofficial/",
    facebook: "https://www.facebook.com/MassoniJewelry",
    tiktok: "",
    website: "https://www.massoni.it/",
  },

  footer: {
    text: "Massoni: gioielleria e argenteria a Roma dal 1790.",
  },
};
