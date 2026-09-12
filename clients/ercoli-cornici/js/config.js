// Demo per Ercoli Cornici: corniceria e doratura artigianale a Roma dal
// 1936, Corso Vittorio Emanuele II 205, tra Piazza Navona e Piazza della
// Chiesa Nuova. Sito attuale (ercolicornici.it) confermato dal vivo:
// tecnologia di primi anni 2000 (layout a tabelle HTML, CMS "Vetrine.net"
// del 2011), funzionante ma tecnicamente molto indietro per un'attività
// che lavora con architetti, gallerie d'arte e ambasciate.
// STORIA: l'attività nasce nel 1935 come costola della sede centrale di
// via Arenula, già esistente dalla fine del 1800. Il campionario si e
// ampliato nel tempo fino a superare i 600 modelli di cornici (antico,
// classico, barocco, liberty, deco, moderno). Da 33 anni l'azienda ha
// una gestione tutta al femminile (Paola Ercoli), che lavora per
// artisti, fotografi, architetti, arredatori, antiquari, ambasciate ed
// enti pubblici. Testo tradotto e riassunto onestamente dalla pagina
// "Azienda" reale del loro sito, non inventato.
// EMAIL: paolaercoli@me.com, trovata direttamente sul loro sito (link
// mailto: nell'header di ogni pagina, con tanto di oggetto e corpo
// precompilati per le richieste di preventivo). Non è una fonte terza,
// è il loro stesso sito.
// FOTO: tutte reali, nessuna stock, tutte scaricate direttamente dal
// loro stesso sito. hero.jpg e gallery-4.jpg sono due vere foto
// panoramiche dell'interno del negozio (soffitto a volta, pavimento a
// mattonelle originale, pareti piene di cornici e vecchie foto),
// prese dalla home page del sito. about.jpg è una vera foto (non stock)
// della premiazione "Maestri dell'Artigianato": si vede Paola Ercoli
// ricevere il riconoscimento, con il testo del pannello sullo sfondo che
// conferma la stessa storia aziendale (bottega di famiglia dell'800,
// oltre 600 modelli di cornici). gallery-1.jpg è la vera vetrina del
// negozio su Corso Vittorio Emanuele II, piena di cornici e oggetti
// antichi reali. gallery-2.jpg è un'altra vera foto dell'interno del
// laboratorio. gallery-3.jpg è una vera parete di campioni di cornici e
// specchiere in vendita. gallery-5.jpg mostra i veri scaffali pieni di
// campioni di modanatura per cornici.
// NOTA foto scartata: la home page del sito usa anche una foto storica
// in seppia di un negozio d'epoca ("home/01.png"), ma è la vetrina della
// "Cappelleria Pratesi" (un cappellaio), non di Ercoli Cornici: sembra
// un'immagine decorativa d'epoca scelta a caso, non la vera storia di
// questa azienda, quindi scartata di proposito (esattamente la trappola
// di attribuzione fotografica descritta in CLAUDE.md).
// LOGO: il logo reale trovato sul sito ("logo01.jpg") è di bassa
// risoluzione e visibilmente tagliato ai bordi nel file originale stesso
// (si legge "RCOLI" invece di "ERCOLI", la "E" è tagliata fuori
// dall'immagine), e la favicon è solo un frammento della stessa cornice
// dorata senza testo leggibile. Nessun logo pulito esiste davvero (non
// "era scomodo ritagliarlo", il file sorgente stesso è incompleto). Per
// questo, come da CLAUDE.md, è stato disegnato un marchio pulito nuovo
// invece di usare le sole iniziali: una cornice doppia stilizzata (lo
// stesso soggetto letterale del loro mestiere), nello stesso oro
// campionato pixel per pixel dal loro vero logo (#b8912a, versione
// leggermente scurita per contrasto testo rispetto al giallo oro
// acceso originale), dentro un anello dello stesso oro.
// COLORI: oro #b8912a campionato dal vero logo. Il marrone/noce scuro
// #4a3728 come colore secondario viene dai veri toni del legno delle
// cornici visibili in tutte le foto del negozio, non inventato a caso.

const SITE_CONFIG = {
  business: {
    name: "Ercoli Cornici",
    tagline: "Cornici su misura, doratura e restauro artigianale dal 1936",
    logoText: "EC",
    logoImage: "images/logo.png",
  },

  theme: {
    primary: "#b8912a",
    accent: "#4a3728",
    font: "'Poppins', sans-serif",
    headingFont: "'Cormorant Garamond', serif",
    mood: "editorial",
  },

  hero: {
    heading: "Benvenuti da {{business.name}}",
    subheading: "La sublime arte della cornice, a Roma dal 1936",
    backgroundImage: "images/hero.jpg",
    ctaText: "Scopri la bottega",
    ctaLink: "#contact",
  },

  about: {
    heading: "Chi siamo",
    text: "Ercoli Cornici nasce nel 1935 come costola della sede storica di Via Arenula, già attiva dalla fine dell'Ottocento. Nel tempo il campionario si è ampliato fino a superare i 600 modelli di cornici, dall'antico al barocco, dal liberty al contemporaneo. Da 33 anni l'azienda ha una gestione tutta al femminile, guidata da Paola Ercoli, e lavora per artisti, fotografi, architetti, arredatori, antiquari, gallerie d'arte, ambasciate ed enti pubblici, un impegno riconosciuto anche con il premio Maestri dell'Artigianato.",
    image: "images/about.jpg",
  },

  offerings: {
    heading: "Le nostre lavorazioni",
    items: [
      { name: "Cornici su misura", description: "Oltre 600 modelli, dall'antico al classico, dal barocco al contemporaneo", price: "" },
      { name: "Doratura e argentatura", description: "Finiture artigianali su cornici, specchiere e oggetti d'arredo", price: "" },
      { name: "Restauro", description: "Restauro pittorico e di cornici antiche, teche e composizioni", price: "" },
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
      { day: "Lunedì - Venerdì", hours: "10:00 - 13:00, 16:30 - 19:30" },
      { day: "Sabato", hours: "da confermare" },
      { day: "Domenica", hours: "Chiuso" },
    ],
  },

  contact: {
    heading: "Contattaci",
    address: "Corso Vittorio Emanuele II, 205, 00186 Roma",
    phone: "06 6880 2526",
    whatsapp: "",
    email: "paolaercoli@me.com",
  },

  map: {
    embedSrc: "https://www.google.com/maps?q=Corso+Vittorio+Emanuele+II+205+Roma&output=embed",
  },

  socials: {
    instagram: "",
    facebook: "",
    tiktok: "",
    website: "https://www.ercolicornici.it/",
  },

  footer: {
    text: "Ercoli Cornici: la sublime arte della cornice, a Roma dal 1936.",
  },
};
