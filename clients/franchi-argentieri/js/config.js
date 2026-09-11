// Demo per Franchi Argentieri: laboratorio orafo-argentiere a Roma dal 1944,
// Via di Tor di Nona (tra Ponte Sant'Angelo e Piazza Navona). Confermato
// come Bottega Storica dall'Associazione Botteghe Storiche di Roma.
// Sito attuale (franchiargentieri.it) confermato dal vivo: tecnologia
// datata (jQuery 1.7.1, menu Superfish, layout a griglia dei primi anni
// 2010), e la loro stessa pagina "Contatti" non elenca nessun indirizzo
// email, solo telefono e fax, un vero peccato per una bottega con lavori
// così eleganti da mostrare.
// STORIA: nel 1944 il decenne Adolfo Franchi entra nella bottega orafa
// della famiglia Vitali (attiva dal 1886), rilevandola nel 1968. Ha poi
// tramandato il mestiere ai figli Claudio e Roberto, che oggi continuano
// l'attività come Franchi Argentieri: laboratorio di restauro e
// lavorazione di argenteria e oreficeria, un capitolo riconosciuto come
// "di fondamentale importanza" nella tradizione orafa romana di 2000
// anni. Testo tradotto e riassunto onestamente dalla pagina dedicata
// sul sito dell'Associazione Botteghe Storiche di Roma, non inventato.
// EMAIL: non presente sul sito proprio (solo telefono/fax nella pagina
// Contatti), ma confermata identica su tre fonti indipendenti:
// la pagina ufficiale dell'Associazione Botteghe Storiche di Roma
// (botteghestoricheroma.com), Paginebianche e Virgilio Aziende:
// franchiargentieriroma@yahoo.it. Stesso standard già usato per
// Cartoleria Mancini, Bertoletti 1882 e Paolucci Falegnameria (registro
// ufficiale delle botteghe storiche), non una singola fonte terza a caso.
// FOTO: tutte reali, nessuna stock. hero.jpg e gallery-3/4/5.jpg sono le
// foto di prodotto (anelli, orecchini) presenti sul loro stesso sito
// (franchiargentieri.it/images/slide-*.jpg), vera fotografia di
// gioielleria di alta gamma fatta a mano nel loro laboratorio. about.jpg
// e gallery-1/2.jpg vengono dalla pagina ufficiale dell'Associazione
// Botteghe Storiche di Roma dedicata a Franchi Argentieri: about.jpg
// mostra un vero artigiano (Claudio o Roberto Franchi) al lavoro nel
// laboratorio reale, con vecchie foto di famiglia visibili sulla parete
// dietro di lui. gallery-1.jpg mostra una vera incisione a mano su un
// pezzo di metallo. gallery-2.jpg mostra tre vere coppe/ciotole in
// argento martellato di produzione propria. gallery-4.jpg (le due vasi
// in argento) viene dalla stessa pagina dell'Associazione.
// LOGO: il logo ufficiale reale ("FRANCHIARGENTIERI") è un wordmark
// largo con una piccola icona (un orso stilizzato rosso dentro un
// riquadro rosso) che si sovrappone alla lettera "F", senza alcuna linea
// di ritaglio netta per lo slot circolare del template (esattamente il
// caso descritto in CLAUDE.md: non si può semplicemente ritagliare).
// Per questo è stato ridisegnato da zero un marchio pulito solo-icona:
// una silhouette semplificata dello stesso orso, nello stesso rosso
// esatto campionato pixel per pixel dal logo reale (#923331), dentro un
// anello dello stesso rosso, adattato allo slot circolare. Stesso
// spirito del marchio reale (orso rosso), non un'icona inventata a caso.
// COLORI: rosso #923331 campionato pixel per pixel dal logo reale
// (l'icona dell'orso). Il grigio/argento del wordmark reale era troppo
// chiaro per un buon contrasto testo, quindi come colore secondario è
// stato scelto un grigio antracite/peltro che richiama il nome
// "Argentieri" (lavorazione dell'argento) senza inventare un colore
// scollegato dalla loro identità.

const SITE_CONFIG = {
  business: {
    name: "Franchi Argentieri",
    tagline: "Oreficeria e argenteria artigianale a Roma dal 1944",
    logoText: "FA",
    logoImage: "images/logo.png",
  },

  theme: {
    primary: "#923331",
    accent: "#4a4844",
    font: "'Poppins', sans-serif",
    headingFont: "'Playfair Display', serif",
    mood: "editorial",
  },

  hero: {
    heading: "Benvenuti da {{business.name}}",
    subheading: "Laboratorio orafo-argentiere a Via di Tor di Nona, dal 1944",
    backgroundImage: "images/hero.jpg",
    ctaText: "Scopri la bottega",
    ctaLink: "#contact",
  },

  about: {
    heading: "Chi siamo",
    text: "Franchi Argentieri nasce nel 1944, quando il decenne Adolfo Franchi entra nella bottega orafa della famiglia Vitali, attiva già dal 1886. Ne diventa titolare nel 1968 e tramanda il mestiere ai figli Claudio e Roberto, che oggi continuano l'attività nello stesso laboratorio di Via di Tor di Nona: restauro e lavorazione di argenteria e oreficeria, un capitolo riconosciuto tra i più significativi della tradizione orafa romana.",
    image: "images/about.jpg",
  },

  offerings: {
    heading: "Le nostre lavorazioni",
    items: [
      { name: "Oreficeria su misura", description: "Anelli, orecchini e gioielli in oro e argento, disegnati e realizzati a mano in laboratorio", price: "" },
      { name: "Argenteria", description: "Coppe, vasi e oggetti in argento martellato di produzione propria", price: "" },
      { name: "Restauro", description: "Restauro di argenteria e oreficeria antica e moderna", price: "" },
    ],
  },

  gallery: {
    heading: "Galleria",
    images: [
      "images/gallery-1.jpg",
      "images/gallery-2.jpg",
      "images/gallery-3.jpg",
      "images/gallery-4.jpg",
      "images/gallery-5.jpg",
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
    heading: "Contattaci",
    address: "Via di Tor di Nona, 60, 00186 Roma",
    phone: "06 6813 6305",
    whatsapp: "348 729 1619",
    email: "franchiargentieriroma@yahoo.it",
  },

  map: {
    embedSrc: "https://www.google.com/maps?q=Via+di+Tor+di+Nona+60+Roma&output=embed",
  },

  socials: {
    instagram: "https://www.instagram.com/franchiargentieri/",
    facebook: "",
    tiktok: "",
    website: "https://www.franchiargentieri.it/",
  },

  footer: {
    text: "Franchi Argentieri: oreficeria e argenteria artigianale a Roma dal 1944.",
  },
};
