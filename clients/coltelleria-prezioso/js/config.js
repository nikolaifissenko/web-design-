// Demo per Coltelleria Daniela Prezioso ("Coltelleria Storica
// Prezioso"). Dati verificati dal loro sito reale attuale
// (coltelleriadanielaprezioso.com, pagine home e il-negozio) e da una
// ricerca mirata per i social. Fondata nel 1870 ("PREZIOSO dal 1870" sul
// loro stesso logo), bottega iscritta nell'elenco delle Botteghe di
// interesse storico della Capitale, nel quartiere Esquilino a due passi
// da Santa Maria Maggiore e Piazza Vittorio Emanuele.
// LOGO: reale, marchio "CAMEL" (cammello stilizzato con due palme, in un
// quadrato nero) preso dal loro sito: si adatta gia' perfettamente al
// cerchio del template cosi' com'e', nessuna reinvenzione necessaria.
// Colori del tema (nero + legno/cuoio) presi dal vero logo (nero) e
// campionati pixel-per-pixel dalle vere foto del negozio (il legno
// chiaro delle pareti espositive).
// FOTO: tutte reali, scaricate direttamente dal loro sito (nessuna
// stock). hero = vera parete di coltelli su supporto in legno; about =
// vero espositore di bowie knife; gallery-1 = vero espositore di
// coltellini multiuso colorati; gallery-2 = vera vetrina di spade e
// katane da collezione; gallery-3 = vero dettaglio di forbici/rasoi da
// barbiere. Instagram (@coltelleria_danielaprezioso, ~1.6k follower) e
// Facebook (Coltelleria Prezioso) trovati e confermati con ricerca
// mirata. Il sito riporta anche un numero mobile piu' recente (389 467
// 1863) ed email preziosodaniela1969@gmail.com oltre al fisso/PIVA
// storici: usato qui il fisso ufficiale del sito come contatto
// principale, il mobile come whatsapp.

const SITE_CONFIG = {
  business: {
    name: "Coltelleria Daniela Prezioso",
    tagline: "Coltelleria storica nel cuore di Roma dal 1870",
    logoText: "CP",
    logoImage: "images/logo.png",
  },

  theme: {
    primary: "#1a1a1a",
    accent: "#a85a2a",
    font: "'Playfair Display', serif",
    mood: "editorial",
  },

  hero: {
    heading: "Benvenuti alla {{business.name}}",
    subheading: "Coltelleria, forbici e articoli da collezione nel cuore dell'Esquilino dal 1870",
    backgroundImage: "images/hero.jpg",
    ctaText: "Vieni a trovarci",
    ctaLink: "#contact",
  },

  about: {
    heading: "Chi siamo",
    text: "Nel cuore dell'Esquilino, a due passi da Santa Maria Maggiore e Piazza Vittorio Emanuele, la Coltelleria Daniela Prezioso e' una bottega storica di Roma dal 1870. Tra le sue pareti in legno convivono lame da cucina professionali, forbici, rasoi da barbiere e pezzi da collezione come spade e katane, per un pubblico tanto professionale quanto amatoriale.",
    image: "images/about.jpg",
  },

  offerings: {
    heading: "Cosa trovi da noi",
    items: [
      { name: "Coltelleria da cucina e professionale", description: "Lame fisse e pieghevoli dei migliori marchi italiani e internazionali", price: "" },
      { name: "Forbici e utensileria", description: "Il mondo delle forbici, per ogni uso professionale e domestico", price: "" },
      { name: "Barbiere e rasatura", description: "Rasoi, lamette e pennelli da barba tradizionali", price: "" },
      { name: "Accessori da tavola e casalinghi", description: "Posateria, bar e vini, mondo della pasta, cake design", price: "" },
      { name: "Coltelli e spade da collezione", description: "Repliche di spade, katane e pezzi da collezione", price: "" },
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
      { day: "Lunedì", hours: "9:30 - 19:00" },
      { day: "Martedì", hours: "9:30 - 19:00" },
      { day: "Mercoledì", hours: "9:30 - 19:00" },
      { day: "Giovedì", hours: "9:30 - 19:00" },
      { day: "Venerdì", hours: "9:30 - 19:00" },
      { day: "Sabato", hours: "9:00 - 13:00" },
      { day: "Domenica", hours: "Chiuso" },
    ],
  },

  contact: {
    heading: "Contattaci",
    address: "Via Carlo Alberto, 41/41A, 00185 Roma",
    phone: "06 4465797",
    whatsapp: "+39 389 467 1863",
    email: "preziosodaniela1969@gmail.com",
  },

  map: {
    embedSrc: "https://www.google.com/maps?q=Via+Carlo+Alberto+41+Roma&output=embed",
  },

  socials: {
    instagram: "https://www.instagram.com/coltelleria_danielaprezioso/",
    facebook: "https://www.facebook.com/people/Coltelleria-Prezioso/61556116327832/",
    tiktok: "",
    website: "https://www.coltelleriadanielaprezioso.com/",
  },

  footer: {
    text: "Coltelleria Daniela Prezioso, nel cuore di Roma dal 1870.",
  },
};
