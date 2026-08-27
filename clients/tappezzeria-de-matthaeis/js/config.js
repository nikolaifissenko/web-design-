// Demo per Tappezzeria De Matthaeis — dati verificati: nome, indirizzo,
// telefono, WhatsApp, email, storia (dal loro sito attuale
// tappezzeriadematthaeis.it).
// SITO ATTUALE: vivo, ma visivamente datato — layout statico in stile
// primi anni 2000, poca cura nell'impaginazione, nessun tag di design
// moderno. Ha però una galleria enorme di foto reali (100+ scatti di
// lavori: tende, tappezzerie, arredi) e una bella foto dello showroom,
// semplicemente presentate senza nessuna cura grafica.
// LOGO: nessun logo reale utilizzabile — l'unico elemento grafico
// disponibile è un badge "60 Anni 2020" per l'anniversario, non un
// marchio dell'attività (e ormai datato: l'attività ha superato i 60
// anni da tempo). Disegnata quindi una nuova icona da zero: una
// poltrona stilizzata (il simbolo più diretto per un tappezziere), nei
// colori reali del sito — bordeaux `#500f0f`, preso pixel per pixel dal
// CSS della loro pagina (colore dominante, 5 occorrenze), più un accento
// oro che richiama i bordi dorati del loro badge anniversario.
// FOTO: tutte reali, scaricate direttamente dal loro sito (nessuna
// stock), EXIF confermano fotocamere reali (Nikon D800 per lo showroom,
// varie compatte per i lavori — foto clienti genuine, non professionali
// da studio). Hero è la foto dello showroom (pareti bordeaux,
// campionari di tessuti, un divano); about è un salotto con tende a
// pannelli giapponesi installate; gallery-1 e gallery-2 sono altri due
// lavori di tende reali (a righe rosse, a cerchi); gallery-3 è una sala
// riunioni moderna con tende a rullo — ritagliata per rimuovere una
// filigrana con l'URL del vecchio sito impressa nell'angolo dell'immagine
// originale.

const SITE_CONFIG = {
  business: {
    name: "Tappezzeria De Matthaeis",
    tagline: "Tappezzeria e tende su misura a Roma, tra padre e figli dal 1960",
    logoText: "DM",
    logoImage: "images/logo.png",
  },

  theme: {
    primary: "#500f0f",
    accent: "#c49a3d",
    font: "'Playfair Display', serif",
  },

  hero: {
    heading: "Benvenuti da {{business.name}}",
    subheading: "Tende, tappezzeria e arredi su misura, nel cuore di Montesacro dal 1960",
    backgroundImage: "images/hero.jpg",
    ctaText: "Richiedi un preventivo",
    ctaLink: "#contact",
  },

  about: {
    heading: "Chi siamo",
    text: "Nata negli anni sessanta dal lavoro di Vittorio De Matthaeis, oggi la Tappezzeria De Matthaeis è guidata dai figli Marco e Stefano, che portano avanti la stessa cura artigianale insegnata dal padre: dalla scelta dei tessuti fino alla consegna dell'opera finita, in ogni fase seguita di persona.",
    image: "images/about.jpg",
  },

  offerings: {
    heading: "Servizi",
    items: [
      { name: "Tende su misura", description: "Tende a pannello, a rullo e tradizionali, su misura", price: "" },
      { name: "Tappezzeria di divani e poltrone", description: "Rifacimento e restauro di imbottiti", price: "" },
      { name: "Arredi su misura", description: "Soluzioni su misura per la casa e l'ufficio", price: "" },
      { name: "Scelta tessuti", description: "Ampio campionario di tessuti d'arredo", price: "" },
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
      { day: "Lunedì", hours: "da confermare" },
      { day: "Martedì", hours: "da confermare" },
      { day: "Mercoledì", hours: "da confermare" },
      { day: "Giovedì", hours: "da confermare" },
      { day: "Venerdì", hours: "da confermare" },
      { day: "Sabato", hours: "da confermare" },
      { day: "Domenica", hours: "Chiuso" },
    ],
  },

  contact: {
    heading: "Contattaci",
    address: "Via Gran Sasso, 21/B-C, 00141 Roma (Montesacro)",
    phone: "06 8170193",
    whatsapp: "338 5474031",
    email: "info@tappezzeriadematthaeis.it",
  },

  map: {
    embedSrc: "https://www.google.com/maps?q=Via+Gran+Sasso+21+Roma&output=embed",
  },

  socials: {
    instagram: "",
    facebook: "",
    tiktok: "",
    website: "https://www.tappezzeriadematthaeis.it/",
  },

  footer: {
    text: "Tappezzeria De Matthaeis — Roma, dal 1960.",
  },
};
