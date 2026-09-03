// Demo per Cesaretti, la "Clinica delle Bambole" (Via Flaminia 58a-b,
// Roma). Fondata nel 1939 nel quartiere Monti, sfrattata da Via
// Magnanapoli, riaperta in Via Flaminia nel 2011 dopo una battaglia
// legale con il Comune (RomaToday ha coperto la riapertura, oggi
// portata avanti da Pierina Cesaretti). Il loro sito reale
// (cesaretti-bambole.com) è morto: risponde con un errore Cloudflare
// 521 (origine del sito irraggiungibile), confermato con curl. Email
// reale confermata su due fonti indipendenti: turismoroma.it e la
// scheda del negozio stesso (info@cesaretti-bambole.com). Nessun
// Instagram/Facebook attivo trovato con certezza.
//
// FOTO: tutte reali, nessuna stock. Fonte: negozidiroma.com, un
// articolo dedicato specificamente a questa bottega (non un blog
// multi-negozio), con foto reali delle bambole restaurate esposte nel
// negozio-museo. hero.jpg, about.jpg e gallery-1..4 sono tutte bambole
// antiche reali fotografate nel loro negozio (porcellana, celluloide,
// composizione), a conferma dell'attività di restauro che svolgono
// ancora oggi. Una foto trovata sulla stessa pagina (un pupazzo di
// Topolino) è stata scartata perché personaggio Disney protetto da
// copyright, non adatto a un sito demo.
//
// LOGO: nessun logo esiste per questa attività (solo insegna col nome).
// Per questo, come da branding-extraction.md, è stata disegnata da zero
// una piccola icona di bambola, non generata da IA, con colori
// campionati pixel per pixel dalle foto reali: bordeaux dell'abito
// vittoriano (~#7b2937, da gallery-1.jpg), oro del fiocco (~#c9a227),
// crema del fondo (~#dfd9b9, dal pizzo della stessa foto). Vedi
// images/logo.svg.

const SITE_CONFIG = {
  business: {
    name: "Cesaretti",
    tagline: "La Clinica delle Bambole di Roma, dal 1939",
    logoText: "C",
    logoImage: "images/logo.svg",
  },

  theme: {
    primary: "#7b2937",
    accent: "#c9a227",
    font: "'Poppins', sans-serif",
    headingFont: "'Yeseva One', serif",
    mood: "vintage",
  },

  hero: {
    heading: "Benvenuti da {{business.name}}",
    subheading: "Restauro di bambole antiche a Roma dal 1939, un negozio che è anche un piccolo museo",
    backgroundImage: "images/hero.jpg",
    ctaText: "Vieni a trovarci",
    ctaLink: "#contact",
  },

  about: {
    heading: "Chi siamo",
    text: "Cesaretti nasce nel 1939 nel cuore di Roma come laboratorio di restauro per bambole antiche. Dopo essere stata sfrattata dalla sua storica sede di Via Magnanapoli, la bottega ha riaperto in Via Flaminia nel 2011, portata avanti oggi da Pierina Cesaretti. Tra bambole di porcellana e celluloide di inizio Novecento, il negozio è insieme laboratorio attivo e piccolo museo: cavalli a dondolo e pupazzi tornano ad avere vita nelle stesse mani che li restaurano da generazioni.",
    image: "images/about.jpg",
  },

  offerings: {
    heading: "I nostri servizi",
    items: [
      { name: "Restauro bambole antiche", description: "Porcellana, celluloide e composizione, restaurate a mano", price: "" },
      { name: "Abiti su misura", description: "Confezione di abiti e accessori per ogni tipo di bambola", price: "" },
      { name: "Restauro giocattoli d'epoca", description: "Cavalli a dondolo e pupazzi antichi rimessi a nuovo", price: "" },
      { name: "Visita su appuntamento", description: "Il negozio-museo è visitabile, scrivete per prenotare", price: "" },
    ],
  },

  gallery: {
    heading: "Galleria",
    images: ["images/gallery-1.jpg", "images/gallery-2.jpg", "images/gallery-3.jpg", "images/gallery-4.jpg"],
  },

  hours: {
    heading: "Orari",
    schedule: [
      { day: "Lunedì - Venerdì", hours: "10:00 - 13:00, 16:00 - 19:00" },
      { day: "Sabato", hours: "10:00 - 13:00" },
      { day: "Domenica", hours: "Chiuso" },
    ],
  },

  contact: {
    heading: "Contattaci",
    address: "Via Flaminia, 58a-b, 00196 Roma",
    phone: "06 6790058",
    whatsapp: "",
    email: "info@cesaretti-bambole.com",
  },

  map: {
    embedSrc: "https://www.google.com/maps?q=Via+Flaminia+58+Roma&output=embed",
  },

  socials: {
    instagram: "",
    facebook: "",
    tiktok: "",
    website: "",
  },

  footer: {
    text: "Cesaretti: la Clinica delle Bambole di Roma, dal 1939.",
  },
};
