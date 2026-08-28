// Demo per Bordi Belle Arti, sito proprio è solo un blog Blogspot
// (bordibellearti.blogspot.com, tema "Thisaway" generico), niente dominio
// indipendente. Dati verificati tramite il blog stesso (indirizzo reale
// "VIA DELLO STATUTO 47", email reale "bordi.bellearti@libero.it" lette
// nel testo della pagina), più copertura stampa reale: Il Cielo sopra
// Esquilino (articolo "Botteghe storiche, Bordi: 106 anni passati nel
// rione", storia di famiglia e citazione dirette), ricerca web (anno di
// fondazione 1910, fondatore Augusto Bordi, Turismo Roma/Exibart per
// conferma "Bottega Storica Eccellenza").
// LOGO: nessun file vettoriale esiste, ma un marchio reale c'è davvero,
// fotografato sull'insegna del negozio (vedi hero.jpg): un'icona
// circolare a tavolozza di pittore con pallini di colore, sopra le
// scritte "COLORI" e "ARTICOLI PER BELLE ARTI". Troppo piccola/in
// prospettiva nella foto per un ritaglio pulito a 40×40. Ridisegnata
// pulita in SVG nello stesso spirito (tavolozza con pallini colorati),
// usando colori reali campionati dal CSS del loro blog (non inventati):
// bruno scuro #634320 (sfondo header del blog), ocra #ba742a
// (color: dominante nel tema), più alcuni pallini colorati per
// richiamare l'effetto "tavolozza" reale, images/logo.svg.
// FOTO: tutte reali, nessuna stock. hero.jpg = la vera insegna del
// negozio in Via dello Statuto (foto di stampa, Il Cielo sopra
// Esquilino) con l'icona-tavolozza reale visibile sopra "COLORI".
// about.jpg = l'interno reale del negozio, una cassetta di colori a
// olio aperta con la scritta "Per tutti i tuoi sogni & emozioni"
// incisa nel legno (foto dal blog del negozio). gallery-1.jpg = la
// vetrina museale reale del negozio con bottiglie, latte e prodotti
// d'epoca (foto dal blog). gallery-2.jpg = un dipinto di un cliente
// (riproduzione delle Ninfee di Monet) fotografato dentro al negozio
// (foto dal blog, "ninfee claudio.jpg").
// STORIA: fondata nel 1910 da Augusto Bordi nel rione Esquilino, oggi
// alla quarta generazione con Claudio Bordi e la moglie Francesca
// (storica dell'arte). Riconosciuta "Bottega Storica di Eccellenza" dal
// Comune di Roma. Durante l'occupazione nazifascista il bisnonno Augusto
// nascose in cantina 15 tra antifascisti ed ebrei, che scamparono alla
// cattura. Vendono ancora oggi una cera naturale per mobili fatta con le
// vecchie ricette di famiglia.

const SITE_CONFIG = {
  business: {
    name: "Bordi Belle Arti",
    tagline: "Colori, tele e passione per l'arte nel cuore dell'Esquilino dal 1910",
    logoText: "BB",
    logoImage: "images/logo.svg",
  },

  theme: {
    primary: "#ba742a",
    accent: "#634320",
    font: "'Poppins', sans-serif",
    headingFont: "'Yeseva One', cursive",
    mood: "vintage",
  },

  hero: {
    heading: "Benvenuti da {{business.name}}",
    subheading: "Colori, pennelli e materiali per artisti in Via dello Statuto, dal 1910",
    backgroundImage: "images/hero.jpg",
    ctaText: "Vieni a Trovarci",
    ctaLink: "#contact",
  },

  about: {
    heading: "Quattro Generazioni di Colore",
    text: "Bordi Belle Arti apre nel 1910 all'Esquilino per mano di Augusto Bordi, e da allora non ha mai chiuso: oggi è alla quarta generazione, con Claudio Bordi e la moglie Francesca, storica dell'arte. Nella bottega, riconosciuta dal Comune come Bottega Storica di Eccellenza, si respira ancora l'atmosfera di un secolo di storia romana: durante l'occupazione nazifascista il bisnonno Augusto nascose in cantina quindici persone tra antifascisti ed ebrei, che scamparono tutte alla cattura. \"Grazie a dei taccuini con le ricette del bisnonno vendiamo una cera per i mobili del tutto naturale\", raccontano i Bordi: un mestiere tramandato, non solo un negozio.",
    image: "images/about.jpg",
  },

  offerings: {
    heading: "Cosa Trovi da Noi",
    items: [
      { name: "Colori e pigmenti", description: "Oli, acrilici, acquerelli e pigmenti puri per ogni tecnica pittorica", price: "" },
      { name: "Tele, tavole e cavalletti", description: "Supporti per pittura di ogni formato, anche su misura", price: "" },
      { name: "Corsi di pittura", description: "Lezioni per principianti e appassionati, tenute in bottega", price: "" },
      { name: "Cera naturale per mobili", description: "Prodotta ancora oggi con l'antica ricetta di famiglia", price: "" },
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
      { day: "Lunedì - Venerdì", hours: "da confermare" },
      { day: "Sabato", hours: "da confermare" },
      { day: "Domenica", hours: "Chiuso" },
    ],
  },

  contact: {
    heading: "Vieni a Trovarci",
    address: "Via dello Statuto, 47-49, 00185 Roma (Esquilino)",
    phone: "06 44700346",
    whatsapp: "",
    email: "bordi.bellearti@libero.it",
  },

  map: {
    embedSrc: "https://www.google.com/maps?q=Via+dello+Statuto+47+Roma&output=embed",
  },

  socials: {
    instagram: "https://www.instagram.com/bordibellearti/",
    facebook: "https://www.facebook.com/BordiBelleArti/",
    tiktok: "",
    website: "http://bordibellearti.blogspot.com/",
  },

  footer: {
    text: "Bordi Belle Arti, colori e passione per l'arte a Roma dal 1910.",
  },
};
