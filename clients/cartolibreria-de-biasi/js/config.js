// Demo per Cartolibreria De Biasi dal 1940 (Piazzale delle Provincie
// 7-7a, Roma, quartiere San Lorenzo). Il loro sito reale
// (cartolibreriadebiasi.it) è confermato dated: nessun tag viewport,
// URL con query-string PHP vecchio stile, jQuery legacy, un vecchio
// widget iframe Facebook likebox. Email reale confermata su due fonti
// indipendenti (turismoroma.it e una ricerca diretta):
// cartoeria.debiasi@gmail.com.
//
// FOTO: tutte reali, nessuna stock. hero.jpg è la vetrina reale del
// negozio, con l'insegna "Libreria De Biasi Cartoleria" chiaramente
// leggibile. about.jpg e gallery-1..4 sono foto reali degli scaffali
// interni pieni di cancelleria, prese dal sito reale del negozio.
//
// LOGO: nessun logo pulito trovato (solo l'insegna col nome). Per
// questo è stata disegnata da zero un'icona a forma di libro aperto
// con un segnalibro, non generata da IA, con un blu/oro caldo che
// richiama l'insegna reale del negozio. Vedi images/logo.svg.

const SITE_CONFIG = {
  business: {
    name: "Cartolibreria De Biasi",
    tagline: "Cartoleria e libreria a San Lorenzo dal 1940",
    logoText: "DB",
    logoImage: "images/logo.svg",
  },

  theme: {
    primary: "#1d4f63",
    accent: "#b8923f",
    font: "'Poppins', sans-serif",
    headingFont: "'Yeseva One', serif",
    mood: "vintage",
  },

  hero: {
    heading: "Benvenuti da {{business.name}}",
    subheading: "Cancelleria, libri e materiale scolastico nello stesso negozio di San Lorenzo dal 1940",
    backgroundImage: "images/hero.jpg",
    ctaText: "Vieni a trovarci",
    ctaLink: "#contact",
  },

  about: {
    heading: "Chi siamo",
    text: "Cartolibreria De Biasi è un'attività di famiglia aperta dal 1940 nel cuore di San Lorenzo. Tra scaffali pieni di quaderni, penne, colori e materiale da disegno, il negozio serve da generazioni studenti, famiglie e appassionati di libri illustrati, con la cura di chi conosce ogni cliente per nome.",
    image: "images/about.jpg",
  },

  offerings: {
    heading: "Cosa trovate da noi",
    items: [
      { name: "Materiale scolastico", description: "Quaderni, penne, colori e tutto il necessario per la scuola", price: "" },
      { name: "Cartoleria e ufficio", description: "Cancelleria per casa e ufficio", price: "" },
      { name: "Belle arti", description: "Materiale per disegno e pittura", price: "" },
      { name: "Libri e fiabe illustrate", description: "Una selezione di libri per bambini e ragazzi", price: "" },
    ],
  },

  gallery: {
    heading: "Galleria",
    images: ["images/gallery-1.jpg", "images/gallery-2.jpg", "images/gallery-3.jpg", "images/gallery-4.jpg"],
  },

  hours: {
    heading: "Orari",
    schedule: [
      { day: "Lunedì - Sabato", hours: "8:30 - 13:00, 16:00 - 19:30" },
      { day: "Domenica", hours: "Chiuso" },
    ],
  },

  contact: {
    heading: "Contattaci",
    address: "Piazzale delle Provincie, 7-7a, 00162 Roma",
    phone: "06 4423 7093",
    whatsapp: "",
    email: "cartoeria.debiasi@gmail.com",
  },

  map: {
    embedSrc: "https://www.google.com/maps?q=Piazzale+delle+Provincie+7+Roma&output=embed",
  },

  socials: {
    instagram: "https://www.instagram.com/debiasicartolibreria/",
    facebook: "",
    tiktok: "",
    website: "http://www.cartolibreriadebiasi.it/home/",
  },

  footer: {
    text: "Cartolibreria De Biasi: cartoleria e libreria a San Lorenzo dal 1940.",
  },
};
