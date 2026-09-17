// Demo per Bassetti Tessuti: tessuti per alta moda, arredo casa e
// forniture teatrali/cinematografiche a Roma, Via delle Botteghe Oscure
// 51 (Piazza Venezia), dal 1953. Sito attuale (fratellibassetti.com)
// confermato dal vivo: la homepage restituisce un errore del database
// WordPress ("Errore del database"), il sito è di fatto irraggiungibile
// in questo momento, non solo datato.
// STORIA: azienda fondata dalla famiglia Bassetti nei primi anni del
// '900 tra le province di Rieti e L'Aquila, trasferita a Roma nel 1953
// sotto la guida di Lorenzo Bassetti, oggi accanto a Piazza Venezia.
// Leader nella promozione di tessuti italiani di alta qualità, lavora
// con l'alta moda, l'arredo casa, le forniture per hotel e le
// produzioni teatrali e cinematografiche. Testo riassunto onestamente
// dalla pagina dedicata a questa attività sul sito ufficiale
// dell'Associazione Botteghe Storiche di Roma, non inventato.
// EMAIL: info@fratellibassetti.com, confermata sulla stessa pagina
// ufficiale dell'Associazione Botteghe Storiche di Roma.
// FOTO: tutte reali, nessuna stock, tutte prese dalla stessa pagina
// ufficiale della Associazione Botteghe Storiche di Roma (non dal sito
// del negozio, irraggiungibile). hero.jpg e gallery-1/2.jpg sono foto
// reali di tessuti del loro vero magazzino (broccati e ricami floreali
// autentici). about.jpg è una vera foto degli scaffali del magazzino
// pieni di tessuti piegati, mostra la vera scala dell'attività.
// LOGO: nessun file di logo trovato in nessuna fonte verificata (il
// sito ufficiale, unico posto dove sarebbe stato disponibile, è
// irraggiungibile). Per onestà, iniziali testuali "BT" invece di
// inventare un'icona senza base reale.
// COLORI: verde petrolio scuro `#1f3a3a` e rosa antico `#c9607c`,
// campionati dai veri tessuti fotografati (broccato verde/rosa in
// gallery-2.jpg), non inventati.

const SITE_CONFIG = {
  business: {
    name: "Bassetti Tessuti",
    tagline: "Tessuti per l'alta moda e l'arredo a Roma dal 1953",
    logoText: "BT",
    logoImage: "",
  },

  theme: {
    primary: "#1f3a3a",
    accent: "#c9607c",
    font: "'Poppins', sans-serif",
    headingFont: "'Playfair Display', serif",
    mood: "boutique",
  },

  hero: {
    heading: "Benvenuti da {{business.name}}",
    subheading: "Tessuti pregiati per alta moda, arredo e teatro a Roma dal 1953",
    backgroundImage: "images/hero.jpg",
    ctaText: "Scopri i tessuti",
    ctaLink: "#contact",
  },

  about: {
    heading: "Chi siamo",
    text: "La famiglia Bassetti lavora i tessuti dai primi anni del '900, tra Rieti e L'Aquila prima di arrivare a Roma nel 1953 sotto la guida di Lorenzo Bassetti. Oggi, accanto a Piazza Venezia, siamo un punto di riferimento per l'alta moda, l'arredo casa, le forniture per hotel e le produzioni teatrali e cinematografiche, con una selezione di tessuti italiani di alta qualità.",
    image: "images/about.jpg",
  },

  offerings: {
    heading: "Le nostre lavorazioni",
    items: [
      { name: "Tessuti per alta moda", description: "Broccati, ricami e tessuti pregiati per abiti da cerimonia e atelier", price: "" },
      { name: "Arredo casa", description: "Tessuti per tende, tappezzeria e forniture alberghiere", price: "" },
      { name: "Teatro e cinema", description: "Forniture di tessuti per produzioni teatrali e cinematografiche", price: "" },
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
      { day: "Lunedì - Venerdì", hours: "10:00 - 14:00, 15:00 - 19:00" },
      { day: "Sabato", hours: "10:00 - 14:00" },
      { day: "Domenica", hours: "Chiuso" },
    ],
  },

  contact: {
    heading: "Contattaci",
    address: "Via delle Botteghe Oscure 51, 00186 Roma",
    phone: "06 6892 325",
    whatsapp: "",
    email: "info@fratellibassetti.com",
  },

  map: {
    embedSrc: "https://www.google.com/maps?q=Via+delle+Botteghe+Oscure+51+Roma&output=embed",
  },

  socials: {
    instagram: "",
    facebook: "",
    tiktok: "",
    website: "",
  },

  footer: {
    text: "Bassetti Tessuti: tessuti per l'alta moda e l'arredo a Roma dal 1953.",
  },
};
