// Demo per Antica Osteria Da Giovanni (Via della Lungara 41a, Roma,
// lato Trastevere di Ponte Sisto). Nessun sito reale trovato, solo
// listing su piattaforme di aggregazione (Yelp, TripAdvisor, Quandoo,
// Sluurpy). Nessuna email trovata nonostante una ricerca vera su
// turismoroma.it, Virgilio Aziende e PagineGialle. Instagram e Facebook
// reali e attivi confermati (@osteria_da_giovanni, "Antica Osteria Da
// Giovanni" su Facebook, 508 "mi piace"): questi sono gli unici canali
// di contatto reali, quindi la bozza di contatto qui è per l'invio via
// DM da parte di Nikolai, non un'email inviata da Claude.
//
// FOTO: tutte reali, nessuna stock. hero.jpg è l'ingresso reale del
// locale, con l'insegna "Osteria con Cucina" e il nome "Da Giovanni"
// chiaramente leggibili. about.jpg e gallery-1..4 sono foto reali della
// sala da pranzo interna, con le caratteristiche pareti in mattoni a
// vista e i tavoli apparecchiati. Nessuna storia/fondazione dettagliata
// trovata nelle fonti controllate: il testo resta ancorato ai fatti
// verificabili (cucina romana, menu che cambia, posizione a
// Trastevere), senza inventare un anno di fondazione.
//
// LOGO: nessun logo pulito esiste, solo l'insegna dipinta col nome.
// Fallback legittimo a logoText, coerente con la regola di
// branding-extraction.md (nessun logo trovato da nessuna parte, non
// "era scomodo da ritagliare").

const SITE_CONFIG = {
  business: {
    name: "Osteria Da Giovanni",
    tagline: "Cucina romana tradizionale a Trastevere",
    logoText: "DG",
    logoImage: "",
  },

  theme: {
    primary: "#3d211d",
    accent: "#b5652f",
    font: "'Poppins', sans-serif",
    headingFont: "'Yeseva One', serif",
    mood: "rustic",
  },

  hero: {
    heading: "Benvenuti da {{business.name}}",
    subheading: "Osteria con cucina a Trastevere, piatti romani che cambiano ogni giorno",
    backgroundImage: "images/hero.jpg",
    ctaText: "Vieni a trovarci",
    ctaLink: "#contact",
  },

  about: {
    heading: "Chi siamo",
    text: "Antica Osteria Da Giovanni è un'osteria di Trastevere, a due passi da Ponte Sisto, con le sale interne in mattoni a vista che ne raccontano la storia. La cucina è quella romana di sempre, con un menu che cambia secondo il giorno e la stagione, servito nello stesso ambiente familiare da sempre.",
    image: "images/about.jpg",
  },

  offerings: {
    heading: "La nostra cucina",
    items: [
      { name: "Piatti romani della tradizione", description: "Il menu cambia ogni giorno secondo la disponibilità", price: "" },
      { name: "Primi della casa", description: "Pasta fresca preparata secondo la ricetta romana", price: "" },
      { name: "Secondi di carne e pesce", description: "Una selezione che varia stagionalmente", price: "" },
      { name: "Cantina", description: "Vini selezionati per accompagnare ogni piatto", price: "" },
    ],
  },

  gallery: {
    heading: "Galleria",
    images: ["images/gallery-1.jpg", "images/gallery-2.jpg", "images/gallery-3.jpg", "images/gallery-4.jpg"],
  },

  hours: {
    heading: "Orari",
    schedule: [
      { day: "Martedì - Domenica", hours: "12:30 - 15:00, 19:30 - 23:00" },
      { day: "Lunedì", hours: "Chiuso" },
    ],
  },

  contact: {
    heading: "Contattaci",
    address: "Via della Lungara, 41a, 00165 Roma",
    phone: "06 6861514",
    whatsapp: "",
    email: "",
  },

  map: {
    embedSrc: "https://www.google.com/maps?q=Via+della+Lungara+41a+Roma&output=embed",
  },

  socials: {
    instagram: "https://www.instagram.com/osteria_da_giovanni/",
    facebook: "",
    tiktok: "",
    website: "",
  },

  footer: {
    text: "Antica Osteria Da Giovanni: cucina romana a Trastevere.",
  },
};
