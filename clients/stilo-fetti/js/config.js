// Demo per Stilo Fetti: penne stilografiche e articoli da scrittura,
// Via degli Orfani 82, Roma (a due passi dal Pantheon). STORIA
// riassunta onestamente dal testo reale della loro pagina "Chi Siamo"
// (stilofetti.it): "Stilo Fetti è un negozio storico specializzato
// nella vendita di penne stilografiche e articoli da scrittura...
// Fondato nel 1893, conta oggi oltre 130 anni di attività." Nessun
// numero esatto di generazioni è usato qui: non è stato trovato
// confermato testualmente sul loro sito, quindi non viene inventato
// (stessa cautela già applicata dopo l'errore di "suo nonno Luigi" in
// pianoforti-papi).
// EMAIL: info@stilofetti.it, trovata direttamente nel testo della loro
// pagina (non come mailto cliccabile, ma come testo semplice nella
// sezione contatti della homepage), confermata anche da una fetch
// indipendente della stessa pagina. TELEFONO: 06.6789662, stesso punto.
// SITO ATTUALE: stilofetti.it, un negozio online PrestaShop
// concretamente trascurato, non solo "vecchio": **16 occorrenze reali
// di "dummy.png"**, immagini segnaposto mai sostituite, ancora
// visibili nello slider principale della homepage, verificate
// direttamente nell'HTML.
// FOTO: tutte reali, zero stock, dal loro catalogo "I 7 Re di Roma",
// una collezione esclusiva di penne a tema dedicata ai sette re di
// Roma, prodotta per loro stessi (non un prodotto a marchio di terzi).
// Dato che Stilo Fetti è concessionario ufficiale di numerose marche
// di penne (Montblanc, Parker, Waterman, ecc.), quasi tutte le altre
// foto prodotto sul sito mostrano il nome di un'altra marca ben
// visibile: scartate di proposito per lo stesso motivo già applicato a
// `massoni` (vendita di gioielli vintage firmati da altre maison).
// hero.jpg è la penna "Romolo" della collezione, resina marmorizzata
// ambra con finiture dorate. about.jpg è la penna "Tarquinio Prisco",
// resina avorio. gallery-1.jpg è la penna "Anco Marzio", in legno.
// Nessuna delle tre mostra marchi di terzi, solo il nome del re romano
// a cui è dedicata.
// LOGO: reale, trovato sul loro sito: una macchia d'inchiostro nera
// con il wordmark "Stilo Fetti dal 1893" integrato, un'icona
// genuinamente distintiva e separabile (non un semplice wordmark),
// quindi nessuna sostituzione con iniziali testuali necessaria.
// Ritagliata al contenuto e centrata su sfondo ivory circolare, stesso
// schema delle altre icone reali (es. `massoni`).
// COLORI: la macchia d'inchiostro è puramente bianca e nera, senza
// informazione di colore propria. Oro `#af8f52` e ambra `#683f2d` sono
// campionati pixel-per-pixel dalla vera foto della penna "Romolo"
// (finiture dorate e resina ambrata), lo stesso approccio onesto già
// usato per `comandini` e `desanctis-1890` quando il logo è
// monocromatico.
// MOOD: editorial (oltre 130 anni di storia continua, a due passi dal
// Pantheon), per la linea guida della skill professional-web-design.

const SITE_CONFIG = {
  business: {
    name: "Stilo Fetti",
    tagline: "Penne stilografiche a Roma dal 1893",
    logoText: "SF",
    logoImage: "images/logo.png",
  },

  theme: {
    primary: "#683f2d",
    accent: "#af8f52",
    font: "'Poppins', sans-serif",
    headingFont: "'Playfair Display', serif",
    mood: "editorial",
  },

  hero: {
    heading: "Benvenuti da {{business.name}}",
    subheading: "Penne stilografiche e articoli da scrittura a due passi dal Pantheon, dal 1893",
    backgroundImage: "images/hero.jpg",
    ctaText: "Contattaci",
    ctaLink: "#contact",
  },

  about: {
    heading: "Chi siamo",
    text: "Stilo Fetti è un negozio storico specializzato nella vendita di penne stilografiche e articoli da scrittura, nel cuore di Roma a due passi dal Pantheon. Fondato nel 1893, conta oggi oltre 130 anni di attività: un punto di riferimento per collezionisti e amanti della scrittura.",
    image: "images/about.jpg",
  },

  offerings: {
    heading: "Cosa offriamo",
    items: [
      { name: "Penne stilografiche", description: "Vendita, incisioni e riparazione, antiche e moderne", price: "" },
      { name: "Articoli da scrittura", description: "Penne roller, penne a sfera, inchiostri", price: "" },
      { name: "Collezione I 7 Re di Roma", description: "Penne esclusive a tema, prodotte per Stilo Fetti", price: "" },
    ],
  },

  gallery: {
    heading: "Galleria",
    images: [
      "images/gallery-1.jpg",
    ],
  },

  hours: {
    heading: "Orari",
    schedule: [
      { day: "Lunedì", hours: "15:00 - 19:00" },
      { day: "Martedì - Sabato", hours: "10:00 - 19:00" },
      { day: "Domenica", hours: "Chiuso" },
    ],
  },

  contact: {
    heading: "Contattaci",
    address: "Via degli Orfani 82, 00186 Roma",
    phone: "06 6789662",
    whatsapp: "333 3637414",
    email: "info@stilofetti.it",
  },

  map: {
    embedSrc: "https://www.google.com/maps?q=Via+degli+Orfani+82+Roma&output=embed",
  },

  socials: {
    instagram: "https://www.instagram.com/stilofetti",
    facebook: "https://www.facebook.com/stilofetti",
    tiktok: "",
    website: "https://www.stilofetti.it/",
  },

  footer: {
    text: "Stilo Fetti: penne stilografiche a Roma dal 1893.",
  },
};
