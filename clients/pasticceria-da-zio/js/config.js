// Demo per Pasticceria di Zio dal 1918 (Via Ginori 53-55, Testaccio,
// Roma). Nessun sito reale trovato. Email reale confermata su due fonti
// indipendenti (turismoroma.it e paginebianche.it):
// zioglennzio@gmail.com.
//
// FOTO: tutte reali, nessuna stock. hero.jpg è la vetrina reale del
// negozio, con l'insegna "Pasticceria di Zio dal 1918" e lo striscione
// del centenario "1918-2018" chiaramente visibili: prova diretta che è
// il loro negozio. about.jpg e gallery-1.jpg sono foto reali del banco
// dolci interno, con le vassoiere di paste e biscotti tipiche di una
// pasticceria romana d'epoca. Fonte: recensioni con foto reali su
// Wanderlog (itin-dev.wanderlogstatic.com), non un blog generico.
//
// LOGO: nessun logo pulito trovato. Per questo è stata disegnata da
// zero un'icona a forma di "bomba" (il bombolone farcito, specialità
// storica del negozio, citata anche nella recensione di Tavole Romane),
// non generata da IA. Colori scelti a occhio per coerenza con
// l'insegna bordeaux/oro reale visibile in hero.jpg (il basso contrasto
// della foto non permetteva un campionamento pixel affidabile).

const SITE_CONFIG = {
  business: {
    name: "Pasticceria di Zio",
    tagline: "Pasticceria storica a Testaccio dal 1918",
    logoText: "Z",
    logoImage: "images/logo.svg",
  },

  theme: {
    primary: "#6e1f24",
    accent: "#c98a3e",
    font: "'Poppins', sans-serif",
    headingFont: "'Yeseva One', serif",
    mood: "vintage",
  },

  hero: {
    heading: "Benvenuti da {{business.name}}",
    subheading: "Una delle ultime botteghe storiche di Testaccio, dal 1918",
    backgroundImage: "images/hero.jpg",
    ctaText: "Vieni a trovarci",
    ctaLink: "#contact",
  },

  about: {
    heading: "Chi siamo",
    text: "Pasticceria di Zio è una delle ultime botteghe storiche rimaste a Testaccio, aperta dal 1918. Le due vetrine sulla strada e l'arredamento interno conservano ancora l'atmosfera di decenni fa. Accanto alla pasticceria classica, con paste fresche alla crema, cioccolato e frutta, il negozio è famoso in tutto il quartiere per le sue \"bombe\", i bomboloni farciti che si tramandano di generazione in generazione.",
    image: "images/about.jpg",
  },

  offerings: {
    heading: "Le nostre specialità",
    items: [
      { name: "Le bombe de Zio", description: "Il bombolone farcito che ha reso famoso il negozio in tutto il quartiere", price: "" },
      { name: "Pasticceria fresca", description: "Paste con crema, cioccolato e frutta, ogni giorno", price: "" },
      { name: "Crostate e torte della domenica", description: "Dolci tradizionali per la tavola della domenica", price: "" },
      { name: "Biscotteria", description: "Una selezione di biscotti da forno secondo la tradizione romana", price: "" },
    ],
  },

  gallery: {
    heading: "Galleria",
    images: ["images/gallery-1.jpg"],
  },

  hours: {
    heading: "Orari",
    schedule: [
      { day: "Martedì - Domenica", hours: "7:00 - 14:00, 16:30 - 20:00" },
      { day: "Lunedì", hours: "Chiuso" },
    ],
  },

  contact: {
    heading: "Contattaci",
    address: "Via Ginori, 53-55, 00153 Roma",
    phone: "06 5742274",
    whatsapp: "",
    email: "zioglennzio@gmail.com",
  },

  map: {
    embedSrc: "https://www.google.com/maps?q=Via+Ginori+53+Roma&output=embed",
  },

  socials: {
    instagram: "https://www.instagram.com/pasticceriadizio1918/",
    facebook: "",
    tiktok: "",
    website: "",
  },

  footer: {
    text: "Pasticceria di Zio: pasticceria storica a Testaccio dal 1918.",
  },
};
