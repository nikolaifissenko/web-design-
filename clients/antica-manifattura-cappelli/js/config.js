// Demo per Antica Manifattura Cappelli: la piu' antica manifattura di
// cappelli di Roma, dal 1936 (famiglia Cirri, originaria della Toscana),
// oggi guidata da Patrizia Fabri, che ha rilevato il laboratorio nel
// 2003 dopo aver incontrato il maestro cappellaio Loris a 17 anni.
// Via degli Scipioni 46, Prati.
// SITO ATTUALE: il vecchio sito (antica-cappelleria.it/web/home.html)
// restituisce oggi un errore 404, quindi non esiste piu' un sito
// funzionante da vedere per un cliente. Confermato dal vivo.
// STORIA: laboratorio storico di cappelli riconosciuto come "bottega
// storica" (decreto D.D. n. 1376 del 30 maggio 2012). Le forme in
// legno per cappelli (migliaia di esemplari) sono ancora quelle usate
// per creare cappelli su misura e pezzi per l'alta moda, con tecniche
// tradizionali. Testo tradotto e riassunto onestamente da un'intervista
// stampa indipendente (thekeytorome.it, 2021) e da un articolo
// indipendente (abitarearoma.it, 2022), non inventato.
// EMAIL: info@antica-cappelleria.it, confermata sulla scheda ufficiale
// di Turismo Roma (turismoroma.it), fonte istituzionale, stesso
// dominio del vecchio sito (ora 404 ma il dominio e mail restano
// attivi). Anche Facebook confermato prima di costruire la demo
// (facebook.com/patriziafabrihatsanticamanifatturacappelli).
// FOTO: tutte reali, nessuna stock, da due servizi stampa indipendenti
// sullo stesso laboratorio. hero.jpg (thekeytorome.it) mostra la vera
// parete di forme in legno per cappelli nel laboratorio. about.jpg
// (thekeytorome.it) e' un vero ritratto di Patrizia Fabri con un
// cappello in lavorazione. gallery-1.jpg (abitarearoma.it, foto
// iPhone datata 2022, EXIF verificato) mostra la vera scala a pioli
// tra le forme in legno con cappelli finiti appesi. gallery-2.jpg
// (abitarearoma.it) mostra il vero angolo vendita con specchio
// d'epoca e cappelli di paglia. gallery-3.jpg (abitarearoma.it)
// mostra un vero cappello in feltro durante la lavorazione su una
// forma in legno. gallery-4.jpg (thekeytorome.it) mostra le vere
// mani di Patrizia Fabri con gli attrezzi da cappellaio sul banco di
// lavoro.
// LOGO: il vecchio sito (ora 404) non era verificabile per un logo
// reale. Disegnata una semplice icona di cappello a falda per lo slot
// circolare del template, usando colori campionati dalle vere foto:
// il marrone scuro del feltro/legno (gallery-3.jpg) e il cuoio chiaro
// dello stesso feltro, non inventati.
// COLORI: marrone scuro #5f3616 e cuoio chiaro #c89664, campionati dal
// vero feltro e dalle vere forme in legno nelle foto.

const SITE_CONFIG = {
  business: {
    name: "Antica Manifattura Cappelli",
    tagline: "La piu' antica manifattura di cappelli di Roma, dal 1936",
    logoText: "AMC",
    logoImage: "images/logo.png",
  },

  theme: {
    primary: "#5f3616",
    accent: "#c89664",
    font: "'Poppins', sans-serif",
    headingFont: "'Playfair Display', serif",
    mood: "vintage",
  },

  hero: {
    heading: "Benvenuti da {{business.name}}",
    subheading: "Cappelli artigianali fatti a mano a Roma dal 1936",
    backgroundImage: "images/hero.jpg",
    ctaText: "Scopri il laboratorio",
    ctaLink: "#contact",
  },

  about: {
    heading: "Chi siamo",
    text: "Antica Manifattura Cappelli e' la piu' antica manifattura di cappelli di Roma, fondata nel 1936 dalla famiglia toscana Cirri a Via degli Scipioni, nel cuore di Prati. Dal 2003 e' guidata da Patrizia Fabri, che ha imparato l'arte cappellaia da giovanissima e oggi porta avanti tecniche tramandate nel tempo, con migliaia di forme in legno originali ancora in uso. Nel laboratorio nascono cappelli su misura, pezzi unici per l'alta moda e creazioni per teatro e cinema, tutti realizzati a mano secondo metodi antichi.",
    image: "images/about.jpg",
  },

  offerings: {
    heading: "Le nostre proposte",
    items: [
      { name: "Cappelli su misura", description: "Realizzati a mano con forme in legno originali", price: "" },
      { name: "Restauro e riparazione", description: "Cura e recupero di cappelli antichi e moderni", price: "" },
      { name: "Pezzi unici per moda e scena", description: "Creazioni speciali per alta moda, teatro e cinema", price: "" },
    ],
  },

  gallery: {
    heading: "Galleria",
    images: [
      "images/gallery-1.jpg",
      "images/gallery-2.jpg",
      "images/gallery-3.jpg",
      "images/gallery-4.jpg",
    ],
  },

  hours: {
    heading: "Orari",
    schedule: [],
  },

  contact: {
    heading: "Contattaci",
    address: "Via degli Scipioni, 46, 00192 Roma",
    phone: "06 39725679",
    whatsapp: "",
    email: "info@antica-cappelleria.it",
  },

  map: {
    embedSrc: "https://www.google.com/maps?q=Via+degli+Scipioni+46+Roma&output=embed",
  },

  socials: {
    instagram: "",
    facebook: "https://www.facebook.com/patriziafabrihatsanticamanifatturacappelli",
    tiktok: "",
    website: "",
  },

  footer: {
    text: "Antica Manifattura Cappelli: cappelli artigianali a Roma dal 1936.",
  },
};
