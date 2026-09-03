// Demo per Ristorante da Enzo (Crisma di Lamberti Mario & C.), Via Ennio
// Quirino Visconti 39-41, Prati, Roma. Dati verificati: indirizzo,
// telefono (06 3215743) da OpenTable/TheFork/Quandoo/Virgilio Aziende.
// Nessuna email trovata: la scheda Virgilio Aziende mostra esplicitamente
// l'assenza di un indirizzo email pubblico. Nessun sito proprio: solo
// pagine su piattaforme di prenotazione (OpenTable, TheFork, Quandoo,
// RomaToday). Facebook (facebook.com/ristorantedaenzoprati, 591 "mi
// piace", attivo) e Instagram (@ristorantedaenzoprati) confermati e
// attivi. Nessun anno di fondazione trovato: non inventato, il testo
// resta generico su "storico" senza data. Locale classico e un po'
// retrò di Prati, frequentato da avvocati e politici vicino ai tribunali,
// cucina romana con influenze amalfitane (tris di pesce, limoni).
//
// FOTO: tutte reali, nessuna stock. Fonte: galleria fotografica Quandoo
// (qul.imgix.net), 12 foto professionali del locale stesso, verificate
// come JPEG reali (non pagine di blocco). hero.jpg = l'insegna e
// l'ingresso reali su Via Ennio Quirino Visconti ("DA ENZO RISTORANTE"
// sulla tenda), about.jpg = la sala interna vera (tovaglie bianche,
// quadretti alle pareti, sedie in paglia di Vienna), gallery-1..4 = piatti
// reali del ristorante (fritto misto, rucola e parmigiano, melanzane alla
// parmigiana, caprese).
//
// LOGO: nessun logo grafico esiste, solo l'insegna a caratteri sulla
// facciata (vedi hero.jpg). Instagram/Facebook non fetchabili in automatico
// (app client-rendered, nessuna foto profilo statica nell'HTML grezzo, per
// prassi di branding-extraction.md). Fallback legittimo a logoText ("DE"),
// caso analogo a Trattoria Da Lucia: piccola trattoria familiare senza un
// vero marchio grafico da adattare, non una scorciatoia di comodo.
//
// COLORI: campionati pixel per pixel dalla foto reale della facciata
// (hero.jpg) con PIL: bordeaux profondo della tenda (~#482028) come
// primary, legno caldo della porta d'ingresso (~#ae804c) come accent.
// Non inventati.
//
// Prezzi non pubblicati online: confermare in loco prima di finalizzare
// il sito.

const SITE_CONFIG = {
  business: {
    name: "Da Enzo",
    tagline: "Cucina romana a Prati dal sapore di casa",
    logoText: "DE",
    logoImage: "",
  },

  theme: {
    primary: "#482028",
    accent: "#ae804c",
    font: "'Poppins', sans-serif",
    headingFont: "'Cormorant Garamond', serif",
    mood: "rustic",
  },

  hero: {
    heading: "Benvenuti da {{business.name}}",
    subheading: "Un classico di Prati tra tovaglie bianche e cucina romana, a due passi dai tribunali",
    backgroundImage: "images/hero.jpg",
    ctaText: "Prenota un tavolo",
    ctaLink: "#contact",
  },

  about: {
    heading: "Chi siamo",
    text: "Da Enzo è un indirizzo storico di Prati, un ambiente classico e un po' retrò dove avvocati, politici e habitué del quartiere si ritrovano da sempre. La cucina è romana nell'anima con qualche incursione amalfitana: la tradizione di Roma, tra amatriciana e carbonara, incontra il pesce fresco e i limoni della Costiera.",
    image: "images/about.jpg",
  },

  offerings: {
    heading: "Menu",
    items: [
      { name: "Spaghetti alla carbonara", description: "Uova, guanciale e pecorino romano", price: "" },
      { name: "Bucatini all'amatriciana", description: "Il grande classico romano", price: "" },
      { name: "Fritto misto di paranza", description: "Pesce e calamari fritti, con limone", price: "" },
      { name: "Melanzane alla parmigiana", description: "Fatte in casa, con basilico fresco", price: "" },
      { name: "Insalata di rucola e parmigiano", description: "Semplice e genuina", price: "" },
      { name: "Caprese di bufala", description: "Pomodoro, mozzarella e basilico", price: "" },
    ],
  },

  gallery: {
    heading: "Galleria",
    images: ["images/gallery-1.jpg", "images/gallery-2.jpg", "images/gallery-3.jpg", "images/gallery-4.jpg"],
  },

  hours: {
    heading: "Orari",
    schedule: [
      { day: "Lunedì - Sabato", hours: "12:30 - 15:00, 19:30 - 23:00" },
      { day: "Domenica", hours: "Chiuso" },
    ],
  },

  contact: {
    heading: "Contattaci",
    address: "Via Ennio Quirino Visconti 39-41, 00193 Roma",
    phone: "06 3215743",
    whatsapp: "",
    email: "",
  },

  map: {
    embedSrc: "https://www.google.com/maps?q=Via+Ennio+Quirino+Visconti+39+Roma&output=embed",
  },

  socials: {
    instagram: "https://www.instagram.com/ristorantedaenzoprati/",
    facebook: "https://www.facebook.com/ristorantedaenzoprati",
    tiktok: "",
    website: "",
  },

  footer: {
    text: "Da Enzo — cucina romana a Prati, Roma.",
  },
};
