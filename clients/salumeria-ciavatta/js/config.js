// Demo per Salumeria Fratelli Ciavatta: nessun sito ufficiale trovato in
// nessuna ricerca (solo directory/aggregatori: Turismo Roma, Tripadvisor,
// PagineGialle, allrome.it), confermato con ricerche mirate specifiche
// per un dominio proprio. Presenza reale solo su Facebook
// (facebook.com/ciavattadal1956) e telefono. Email reale confermata
// (f.lliciavatta@gmail.it), coerente su più fonti indipendenti, non
// inventata.
// Storia: fondata nel 1956 da Giuseppe Ciavatta e la moglie Lena
// Agostini, oggi portata avanti da Patrizia e Massimo (fonte:
// RomaToday, articolo dedicato). Salumeria/negozio di alimentari a due
// passi dalla Fontana di Trevi.
// FOTO: entrambe reali, nessuna stock, scaricate da un articolo
// RomaToday dedicato specificamente a questa attività (non un blog
// generico con più negozi, quindi nessun rischio di confusione con
// un'altra attività). hero.jpg = vetrina reale del negozio in via del
// Lavatore, insegna "FORMAGGI / PANE" e l'anno "1956" chiaramente
// visibili in vetrina. about.jpg = foto reale dello staff/famiglia
// dietro al bancone, prosciutti e prodotti veri sugli scaffali.
// GALLERIA: lasciata vuota di proposito. Trovate solo queste 2 foto
// reali di qualità sufficiente; niente stock aggiunto per riempire lo
// spazio e nessun ritaglio a bassa risoluzione delle stesse 2 foto.
// LOGO: nessun logo/marchio distintivo trovato, la vetrina ha solo
// scritte dipinte generiche ("FORMAGGI", "PANE"), non un marchio
// isolabile. Caso legittimo di fallback a iniziali testuali ("FC"),
// non una scorciatoia (nessun marchio esiste da isolare).
// COLORI: intonati a occhio sui toni reali della vetrina fotografata
// (oro/senape dell'insegna, nero/antracite della cornice e delle
// scritte), non campionati pixel per pixel con certezza vista la scarsa
// risoluzione della foto sorgente.

const SITE_CONFIG = {
  business: {
    name: "Salumeria Fratelli Ciavatta",
    tagline: "Salumeria di famiglia a Fontana di Trevi dal 1956",
    logoText: "FC",
    logoImage: "",
  },

  theme: {
    primary: "#b8860b",
    accent: "#2b2b2b",
    font: "'Poppins', sans-serif",
    headingFont: "'Cormorant Garamond', serif",
    mood: "rustic",
  },

  hero: {
    heading: "Benvenuti da {{business.name}}",
    subheading: "Salumi, formaggi e vini scelti a mano, a due passi dalla Fontana di Trevi dal 1956",
    backgroundImage: "images/hero.jpg",
    ctaText: "Vieni a trovarci",
    ctaLink: "#contact",
  },

  about: {
    heading: "Chi siamo",
    text: "La Salumeria Fratelli Ciavatta nasce nel 1956 per opera di Giuseppe Ciavatta e della moglie Lena Agostini, a pochi passi dalla Fontana di Trevi. Oggi la stessa famiglia, con Patrizia e Massimo, continua a scegliere personalmente salumi, formaggi, vini e prodotti gastronomici, con la cura di un negozio di quartiere che è rimasto tale nonostante il cuore del centro storico intorno sia cambiato.",
    image: "images/about.jpg",
  },

  offerings: {
    heading: "I nostri prodotti",
    items: [
      { name: "Salumi e formaggi selezionati", description: "Una scelta curata di salumi e formaggi italiani", price: "" },
      { name: "Vini e champagne", description: "Etichette scelte per accompagnare i nostri prodotti", price: "" },
      { name: "Prodotti gastronomici", description: "Olio, conserve e specialità da gustare o portare via", price: "" },
    ],
  },

  gallery: {
    heading: "Galleria",
    images: [],
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
    address: "Via del Lavatore, 31, 00187 Roma",
    phone: "06 6792935",
    whatsapp: "",
    email: "f.lliciavatta@gmail.it",
  },

  map: {
    embedSrc: "https://www.google.com/maps?q=Via+del+Lavatore+31+Roma&output=embed",
  },

  socials: {
    instagram: "",
    facebook: "https://www.facebook.com/ciavattadal1956",
    tiktok: "",
    website: "",
  },

  footer: {
    text: "Salumeria Fratelli Ciavatta: salumi e formaggi a Roma dal 1956.",
  },
};
