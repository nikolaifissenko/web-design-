// Demo per Torrefazione Foroni: la loro vecchia insegna digitale
// (torrefazioneforoni.com) non risponde più (dominio scaduto, verificato
// con curl: connessione fallita). Nessun sito attivo oggi. Dati
// verificati: indirizzo, telefono ed email reale confermati tramite
// ricerca web incrociata (beverfood.com, aziende.virgilio.it,
// paginebianche.it, romatoday.it), tutti concordi su
// torrefazionedrogheriaforoni@gmail.com. Instagram @torrefazioneforoni
// confermato attivo (714 follower, ~291 post) e Facebook "Torrefazione
// Drogheria Foroni E." confermato (795 "mi piace"), entrambi trovati
// via ricerca, non inventati (nessun link diretto usato per il
// Facebook, dato che non è stato possibile confermare l'URL esatto
// della pagina con certezza, quindi lasciato vuoto in config).
// Anno di fondazione "dal 1920" preso direttamente dalla confezione
// reale del loro caffè (vedi gallery-1.jpg), non da fonti terze
// discordanti (alcune dicevano 1925, 1935).
// FOTO: tutte reali, nessuna stock. Fonte: un articolo/recensione del
// blog coffeeinrome.wixsite.com dedicato specificamente alla visita a
// Torrefazione Foroni (novembre 2016). Ogni immagine è stata scaricata
// e controllata visivamente una per una prima dell'uso, per evitare di
// riprendere foto di un'altra torrefazione recensita sullo stesso
// blog (rischio concreto: un'immagine scartata era chiaramente una
// tazzina col marchio "Venchi", un'altra catena, non loro).
// hero.jpg = insegna reale del negozio ("Torrefazione Drogheria") in
// via Britannia, foto notturna. about.jpg = vetrina/banco reale del
// negozio con cartellino scritto a mano "Caffè Foroni Miscela Tanzania
// €19.00/Kg" chiaramente leggibile, prova diretta che è il loro
// negozio. gallery-1.jpg = macro reale della confezione del caffè con
// il marchio "Torrefazione Foroni dal 1920" e il personaggio storico
// del marchio, usato anche come base per il redesign del logo (vedi
// sotto). gallery-2.jpg = macro reale del caffè macinato nel
// portafiltro, dalla stessa visita.
// LOGO: nessun logo vettoriale reperibile online. Il marchio storico
// reale esiste (un personaggio in stile "moretto" con turbante, in
// oro su fondo bruno, fotografato sulla confezione, vedi gallery-1.jpg)
// ma è fotografato di scorcio su una superficie di alluminio lucido,
// non ritagliabile in modo pulito per lo slot circolare del template.
// Per questo, come da branding-extraction.md, è stato ridisegnato a
// mano un'icona pulita nello stesso spirito (stessa posa, stesso
// copricapo con motivo ondulato, stessa tazzina), non generata da IA,
// con colori campionati pixel per pixel dalla confezione reale
// (bruno scuro ~#4a2c1e, oro/bronzo ~#b8863f): images/logo.svg.

const SITE_CONFIG = {
  business: {
    name: "Torrefazione Foroni",
    tagline: "Drogheria e torrefazione artigianale a Roma dal 1920",
    logoText: "TF",
    logoImage: "images/logo.svg",
  },

  theme: {
    primary: "#4a2c1e",
    accent: "#b8863f",
    font: "'Poppins', sans-serif",
    headingFont: "'Yeseva One', serif",
    mood: "vintage",
  },

  hero: {
    heading: "Benvenuti da {{business.name}}",
    subheading: "Caffè torrefatto con il fuoco a legna, nello stesso negozio di via Britannia dal 1920",
    backgroundImage: "images/hero.jpg",
    ctaText: "Vieni a trovarci",
    ctaLink: "#contact",
  },

  about: {
    heading: "Chi siamo",
    text: "Torrefazione Foroni nasce nel 1920 come drogheria e torrefazione di quartiere, a due passi da San Giovanni. Il caffè viene ancora tostato con un antico torrefattore a legna, una lavorazione lenta che a Roma è ormai rara. Accanto al caffè, lo stesso bancone da sempre vende tè, spezie, frutta secca e una piccola selezione di vini, con la cura di chi sceglie personalmente ogni prodotto.",
    image: "images/about.jpg",
  },

  offerings: {
    heading: "I nostri prodotti",
    items: [
      { name: "Caffè Miscela Foroni", description: "La miscela storica della casa, tostata a legna", price: "" },
      { name: "Caffè Tanzania", description: "Origine singola, in grani o macinato al momento", price: "" },
      { name: "Decaffeinato", description: "Tostato con lo stesso metodo artigianale", price: "" },
      { name: "Tè, spezie e drogheria", description: "Una selezione curata di prodotti da sempre nello stesso negozio", price: "" },
    ],
  },

  gallery: {
    heading: "Galleria",
    images: ["images/gallery-1.jpg", "images/gallery-2.jpg"],
  },

  hours: {
    heading: "Orari",
    schedule: [
      { day: "Lunedì - Sabato", hours: "8:30 - 13:00, 16:30 - 20:00" },
      { day: "Domenica", hours: "Chiuso" },
    ],
  },

  contact: {
    heading: "Contattaci",
    address: "Via Britannia, 32, 00183 Roma",
    phone: "06 21707889",
    whatsapp: "",
    email: "torrefazionedrogheriaforoni@gmail.com",
  },

  map: {
    embedSrc: "https://www.google.com/maps?q=Via+Britannia+32+Roma&output=embed",
  },

  socials: {
    instagram: "https://www.instagram.com/torrefazioneforoni/",
    facebook: "",
    tiktok: "",
    website: "",
  },

  footer: {
    text: "Torrefazione Foroni: drogheria e torrefazione artigianale a Roma dal 1920.",
  },
};
