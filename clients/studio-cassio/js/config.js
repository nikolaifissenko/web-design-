// Demo per Studio Cassio - Arte del Mosaico: bottega di mosaico
// artistico, Via Urbana 98-98a, Roma (Rione Monti). Due secoli di
// tradizione familiare: Lorenzo Cassio fu direttore dello Studio del
// Mosaico Vaticano nella prima metà del '900; suo figlio Fabrizio aprì
// il laboratorio attuale nel centro di Roma nel 1947, restaurando opere
// in oltre trecento chiese, musei, cimiteri, fontane ed edifici in
// tutto il mondo. STORIA riassunta onestamente dal loro stesso sito
// (pagina "About us"), non inventata.
// EMAIL: st.cassio@gmail.com, trovata direttamente nel testo della loro
// pagina Contatti (studiocassio.com/en/contacts), confermata via curl
// diretto (200, indirizzo email presente due volte nel testo della
// pagina, anche come info@studiocassio.com nel footer). Non una
// semplice voce di elenco di terzi.
// SITO ATTUALE: sito proprio esistente (studiocassio.com) con contenuti
// reali, ma su un sotto-percorso "/site2018/" mai aggiornato dal design
// originale del 2018, senza le animazioni e l'interattività moderna che
// un mosaico artistico di questo livello merita.
// FOTO: tutte reali, zero stock, tutte scaricate direttamente dalla
// pagina "Civil Art" del loro sito (percorso .../2018/08/slide_civile_*
// .jpg). hero.jpg è un vero mosaico con soggetto marino in stile romano
// classico (polpo, aragosta, pesci). about.jpg è un vero dettaglio di
// pavimento a mosaico, con tessere dorate e nere. gallery-1.jpg è un
// vero mosaico ispirato alla "Notte stellata" di Van Gogh, in tessere
// di vetro blu e dorate.
// LOGO: reale, trovato sul loro sito (studio-cassio-logo). Il logo
// originale ha un'icona separabile (un gruppo di tessere rosse) a
// fianco del wordmark "STUDIO CASSIO - ARTE DEL MOSAICO". Ritagliata
// solo l'icona delle tessere, centrata su fondo avorio per lo slot
// circolare del template, esattamente come per altri lead con un
// monogramma reale separabile (es. cristiana-perali).
// COLORI: rosso `#c00e0d`, campionato pixel-per-pixel dalle tessere
// rosse del vero logo. Nero quasi puro `#1d1d1b`, campionato
// pixel-per-pixel dal testo del wordmark reale.
// MOOD: editorial (bottega storica con una storia di fondazione forte
// e documentata su due secoli: Lorenzo -> Fabrizio dal 1947 -> oggi),
// per la linea guida della skill professional-web-design.

const SITE_CONFIG = {
  business: {
    name: "Studio Cassio",
    tagline: "Arte del mosaico a Roma, due secoli di tradizione",
    logoText: "SC",
    logoImage: "images/logo.png",
  },

  theme: {
    primary: "#c00e0d",
    accent: "#1d1d1b",
    font: "'Poppins', sans-serif",
    headingFont: "'Playfair Display', serif",
    mood: "editorial",
  },

  hero: {
    heading: "Benvenuti da {{business.name}}",
    subheading: "Arte del mosaico nel cuore di Roma, dal 1947",
    backgroundImage: "images/hero.jpg",
    ctaText: "Contattaci",
    ctaLink: "#contact",
  },

  about: {
    heading: "Chi siamo",
    text: "Da due secoli la famiglia Cassio si dedica all'arte del mosaico. Lorenzo Cassio fu direttore dello Studio del Mosaico Vaticano nella prima metà del Novecento. Suo figlio Fabrizio aprì l'attuale laboratorio nel centro di Roma nel 1947, restaurando opere in oltre trecento chiese, musei, cimiteri, fontane ed edifici in tutto il mondo. Oggi lo studio realizza mosaici artistici, religiosi e civili, oltre a corsi e restauri.",
    image: "images/about.jpg",
  },

  offerings: {
    heading: "Cosa offriamo",
    items: [
      { name: "Mosaici artistici", description: "Opere civili e religiose su commissione, in stile classico e contemporaneo", price: "" },
      { name: "Restauro", description: "Restauro di mosaici antichi in chiese, musei e monumenti", price: "" },
      { name: "Corsi di mosaico", description: "Corsi per chi vuole imparare l'arte del mosaico", price: "" },
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
      { day: "Lunedì - Venerdì", hours: "da confermare" },
      { day: "Sabato - Domenica", hours: "su appuntamento" },
    ],
  },

  contact: {
    heading: "Contattaci",
    address: "Via Urbana 98-98a, 00184 Roma",
    phone: "388 366 2406",
    whatsapp: "",
    email: "st.cassio@gmail.com",
  },

  map: {
    embedSrc: "https://www.google.com/maps?q=Via+Urbana+98+Roma&output=embed",
  },

  socials: {
    instagram: "",
    facebook: "",
    tiktok: "",
    website: "https://www.studiocassio.com/",
  },

  footer: {
    text: "Studio Cassio: arte del mosaico a Roma, dal 1947.",
  },
};
