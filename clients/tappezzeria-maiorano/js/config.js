// Demo per Tappezzeria Antonio Maiorano (Via Eusebio Chini 18, Roma,
// zona Portuense/Marconi). Fondata nel 1969 da Antonio Maiorano,
// laboratorio artigianale a conduzione familiare. Il loro sito reale
// (tappezzeriaroma.eu) è confermato dated: vecchio WordPress
// sovraccarico di tag SEO, esperienza utente povera. Email reale
// trovata sul loro stesso sito (info@tappezzeriaroma.eu, alternativa
// antoniomajorano@yahoo.it).
//
// FOTO: tutte reali, scaricate direttamente dal loro sito
// (tappezzeriaroma.eu/wp-content/uploads/), nessuna stock. hero.jpg è
// una foto reale del loro showroom, con un salotto completo che
// mostrano ai clienti (divano, poltrona e pouf rivestiti, quadri
// d'epoca alle pareti). about.jpg mostra il processo reale di restauro
// (schienale e seduta di una poltrona smontati sul banco da lavoro).
// gallery-1.jpg è un vero prima/dopo di restauro di una poltroncina
// (tessuto a fiori rossi). gallery-2.jpg è una testata del letto in
// velluto bordeaux reale. gallery-3.jpg è una sedia imbottita reale in
// raso azzurro a fiori. Nessuna immagine stock usata.
//
// LOGO: nessun logo pulito esiste sul sito reale. Per questo è stata
// disegnata da zero un'icona ago e filo, non generata da IA, con
// colori campionati dalle foto reali: bordeaux/prugna scuro del
// velluto (~#522038) e oro caldo (~#b8863f) del filo, su fondo crema
// chiaro. Vedi images/logo.svg.
//
// NOTA: esiste già un altro cliente in questo repo, tappezzeria-de-
// matthaeis (un diverso tappezziere). Il testo qui è mantenuto
// specifico a Maiorano (fondazione 1969, laboratorio familiare in zona
// Portuense) per evitare qualsiasi sovrapposizione.

const SITE_CONFIG = {
  business: {
    name: "Tappezzeria Maiorano",
    tagline: "Tappezzeria artigianale a Roma dal 1969",
    logoText: "AM",
    logoImage: "images/logo.svg",
  },

  theme: {
    primary: "#522038",
    accent: "#b8863f",
    font: "'Poppins', sans-serif",
    headingFont: "'Playfair Display', serif",
    mood: "editorial",
  },

  hero: {
    heading: "Benvenuti da {{business.name}}",
    subheading: "Restauro e rivestimento di poltrone, divani e sedie, a mano, dal 1969",
    backgroundImage: "images/hero.jpg",
    ctaText: "Richiedi un preventivo",
    ctaLink: "#contact",
  },

  about: {
    heading: "Chi siamo",
    text: "Tappezzeria Antonio Maiorano è un laboratorio artigianale a conduzione familiare, attivo dal 1969 nel quartiere Portuense. Ogni pezzo, dal semplice rifacimento di un'imbottitura al restauro completo di una poltrona d'epoca, viene lavorato a mano nello stesso laboratorio, con la cura di chi conosce il mestiere da una vita.",
    image: "images/about.jpg",
  },

  offerings: {
    heading: "I nostri servizi",
    items: [
      { name: "Restauro poltrone e divani", description: "Smontaggio, imbottitura e rivestimento completo", price: "" },
      { name: "Rivestimento su misura", description: "Scelta del tessuto e realizzazione su misura", price: "" },
      { name: "Testate letto e cuscini", description: "Realizzazione di testate imbottite e complementi", price: "" },
      { name: "Sedie e piccoli arredi", description: "Restauro di sedie e arredi imbottiti di ogni tipo", price: "" },
    ],
  },

  gallery: {
    heading: "Galleria",
    images: ["images/gallery-1.jpg", "images/gallery-2.jpg", "images/gallery-3.jpg"],
  },

  hours: {
    heading: "Orari",
    schedule: [
      { day: "Lunedì - Venerdì", hours: "8:30 - 13:00, 15:30 - 19:30" },
      { day: "Sabato", hours: "9:00 - 13:00" },
      { day: "Domenica", hours: "Chiuso" },
    ],
  },

  contact: {
    heading: "Contattaci",
    address: "Via Eusebio Chini, 18, 00146 Roma",
    phone: "06 55269266",
    whatsapp: "339 2716106",
    email: "info@tappezzeriaroma.eu",
  },

  map: {
    embedSrc: "https://www.google.com/maps?q=Via+Eusebio+Chini+18+Roma&output=embed",
  },

  socials: {
    instagram: "",
    facebook: "",
    tiktok: "",
    website: "https://www.tappezzeriaroma.eu/",
  },

  footer: {
    text: "Tappezzeria Maiorano: tappezzeria artigianale a Roma dal 1969.",
  },
};
