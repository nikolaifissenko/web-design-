// Demo per Cartoleria Roccas. Dati verificati: storia, indirizzo,
// telefono, email dal loro sito reale attuale
// (cartolerieinternazionali.it, dominio anche noto come incartoleria.it).
// NOTA IMPORTANTE sul nome/logo: il negozio storico si chiama "Cartoleria
// Roccas" (fondata nel 1896 da Raffaele Roccas, e cosi' la registrano
// Turismo Roma e il registro delle Botteghe Storiche), ma il loro sito
// e-commerce attuale opera sotto il marchio del consorzio "Cartolerie
// Internazionali" (da cui i profili social @cartoleriasec /
// facebook.com/cartoleriasecroma). Ho tenuto il nome storico "Cartoleria
// Roccas" per il demo (e' quello con cui il negozio e' conosciuto e
// registrato), ma il logo usato e' quello reale e attuale che compare
// sul loro sito web (il rombo verde), non un'invenzione: e' la loro
// identita' visiva scelta oggi, ritagliata quadrata dal loro sito.
// STORIA (dal loro sito): nel 1896 Raffaele Roccas apri' la cartoleria;
// da allora quattro generazioni si sono succedute alla guida. Si
// racconta che il marmo del monumento a Vittorio Emanuele fu segnato con
// le matite Roccas. Nel Settecento un antico bancone e' ancora in uso
// oggi. Negli anni Sessanta il negozio divenne il primo a libero
// servizio nel suo campo a Roma. 10.000 referenze disponibili oggi.
// FOTO: tutte reali, scaricate dal loro sito. hero = foto reale a
// colori del reparto penne/pennarelli del negozio (file "tratto-pen.jpg"
// sul loro sito, non lo striscione promozionale "prodotti.jpg": i due
// nomi si erano scambiati in una prima bozza, corretto); about = foto
// d'archivio in bianco e nero del vecchio negozio (borse, quaderni,
// "tutto Mondadori"); gallery-1 = altra foto d'archivio in bianco e
// nero (espositore Pelikan, biglietti d'auguri); gallery-2 = schizzo a
// penna della facciata reale del negozio ("cartoleria"); gallery-3 =
// grafica reale "Cartotecnica Esclusiva" dal loro sito. Nessuna foto
// stock usata. Instagram (@cartoleriasec) e Facebook
// (facebook.com/cartoleriasecroma) trovati e confermati con ricerca
// mirata.

const SITE_CONFIG = {
  business: {
    name: "Cartoleria Roccas",
    tagline: "Cartoleria storica a Roma dal 1896",
    logoText: "CR",
    logoImage: "images/logo.png",
  },

  theme: {
    primary: "#217736",
    accent: "#7a1f1f",
    font: "'Playfair Display', serif",
    mood: "editorial",
  },

  hero: {
    heading: "Benvenuti in {{business.name}}",
    subheading: "Il profumo della grafite dal 1896, quattro generazioni nel cuore di Roma",
    backgroundImage: "images/hero.jpg",
    ctaText: "Vieni a trovarci",
    ctaLink: "#contact",
  },

  about: {
    heading: "Chi siamo",
    text: "Nel 1896 Raffaele Roccas apriva la sua cartoleria specializzata in carta, cancelleria e articoli scolastici: da allora quattro generazioni si sono succedute alla guida dell'azienda. Si racconta che il marmo del monumento a Vittorio Emanuele fu segnato proprio con le matite Roccas. Oggi il negozio conserva un antico bancone del Settecento ancora in uso, tra 10.000 referenze e il profumo della grafite.",
    image: "images/about.jpg",
  },

  offerings: {
    heading: "Cosa trovi da noi",
    items: [
      { name: "Cartoleria tradizionale", description: "Quaderni, penne, colori e materiale scolastico, oltre 10.000 referenze", price: "" },
      { name: "Forniture per ufficio", description: "Cataloghi annuali e forniture dirette a enti, uffici e attività", price: "" },
      { name: "Cartotecnica personalizzata", description: "Linee di cartotecnica su misura, studiate nei minimi dettagli", price: "" },
      { name: "Articoli da regalo", description: "Penne pregiate, album fotografici, set da scrivania", price: "" },
      { name: "Fidelity card", description: "Sconti e iniziative dedicate ai clienti abituali", price: "" },
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
    address: "Via Arenula, 85, 00186 Roma",
    phone: "06 68801050",
    whatsapp: "",
    email: "info@incartoleria.it",
  },

  map: {
    embedSrc: "https://www.google.com/maps?q=Via+Arenula+85+Roma&output=embed",
  },

  socials: {
    instagram: "https://www.instagram.com/cartoleriasec/",
    facebook: "https://www.facebook.com/cartoleriasecroma/",
    tiktok: "",
    website: "https://www.cartolerieinternazionali.it/",
  },

  footer: {
    text: "Cartoleria Roccas, a Roma dal 1896.",
  },
};
