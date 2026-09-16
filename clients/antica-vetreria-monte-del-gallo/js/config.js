// Demo per Antica Vetreria Monte del Gallo: vetraio artigiano di
// Rodolfo Di Curzio, Via Monte del Gallo 21, vicino alla stazione
// Roma San Pietro. Oltre 40 anni di esperienza in vetri e specchi.
// SITO ATTUALE: vetraioroma.com / anticavetreriamontedelgallo.com.
// Confermato dal vivo: impaginazione con impianto SEO molto aggressivo
// (lo stesso identico titolo ripetuto su decine di pagine quasi
// identiche, es. "Specchi su misura", "Specchi su misura a parete",
// "Specchi molati su misura"), template datato (Joomla, tema
// "ol_zita"). Non e' solo vecchio: e' costruito per i motori di
// ricerca, non per chi lo visita.
// STORIA: testo riassunto onestamente dalla pagina "Chi siamo" del
// loro stesso sito (vetraioroma.com), non inventato.
// EMAIL: rodolfodicurzio@tiscali.it, trovata su piu' fonti
// indipendenti concordanti (registri aziendali). Facebook cercato
// direttamente prima di costruire la demo
// (facebook.com/p/Antica-Vetreria-Monte-del-Gallo-100063718835236/,
// pagina trovata ma con contenuto non verificabile da fetch
// automatico, stesso limite noto di Instagram/Facebook su questo
// repository).
// FOTO: la maggior parte delle immagini sul loro sito sono foto
// prodotto da catalogo fornitore (specchi in ambientazioni da salotto
// perfette, tavoli in vetro con sedie bianche), non foto specifiche
// del laboratorio. Individuate pero' alcune foto reali genuine:
// hero.jpg e' una vera foto (non da catalogo) di una vetrina rotta in
// un vero intervento di pronto soccorso vetri, dalla sezione "Pronto
// Intervento" del loro sito. about.jpg e' la vera vetrina del
// laboratorio con l'insegna "ANTICA VETRERIA MONTE DEL GALLO" incisa
// sul vetro e i veri numeri di telefono. gallery-1.jpg e' un vero
// scatto (ritagliato dalla meta' reale di un'immagine composita che
// nell'originale affiancava anche un rendering 3D di prodotto,
// scartato) di una vera installazione di una gattaiola su un vero
// vetro, con la mano di chi scatta visibile nel riflesso. gallery-2.jpg
// e gallery-3.jpg sono invece dichiaratamente foto da catalogo
// fornitore (uno specchio antico dorato, un tavolo in vetro su misura),
// non foto specifiche del loro laboratorio: usate comunque perche'
// sono le stesse immagini scelte dal loro attuale sito per
// rappresentare questi servizi (specchi su misura, tagli di vetro),
// documentato onestamente qui, non spacciate per foto del laboratorio.
// LOGO: reale, un ritaglio pulito dell'icona a cupola (San Pietro)
// gia' presente nel loro vero logo (ANTICA VETRERIA MONTE DEL GALLO di
// Rodolfo Di Curzio), separata dalla scritta e riposizionata su un
// disco bianco per lo slot circolare del template. Nessun redesign:
// e' il loro vero simbolo, solo isolato e ritagliato.
// COLORI: blu navy #2d3691 e rosso #ec2028, campionati pixel per
// pixel dal loro vero logo, non inventati.

const SITE_CONFIG = {
  business: {
    name: "Antica Vetreria Monte del Gallo",
    tagline: "Vetri e specchi su misura a Roma, San Pietro",
    logoText: "AV",
    logoImage: "images/logo.png",
  },

  theme: {
    primary: "#2d3691",
    accent: "#ec2028",
    font: "'Poppins', sans-serif",
    headingFont: "'Playfair Display', serif",
    mood: "editorial",
  },

  hero: {
    heading: "Benvenuti da {{business.name}}",
    subheading: "Vetri, specchi e cristalli su misura a Roma, zona San Pietro",
    backgroundImage: "images/hero.jpg",
    ctaText: "Scopri il laboratorio",
    ctaLink: "#contact",
  },

  about: {
    heading: "Chi siamo",
    text: "Antica Vetreria Monte del Gallo e' il laboratorio artigiano di Rodolfo Di Curzio, attivo a Via Monte del Gallo, vicino alla stazione Roma San Pietro, con oltre 40 anni di esperienza nella lavorazione del vetro. Realizziamo soluzioni standard e su misura per infissi, vetrine, specchi, cristalli e box doccia, e offriamo un servizio di pronto intervento per la sostituzione urgente di vetri in tutta Roma e provincia.",
    image: "images/about.jpg",
  },

  offerings: {
    heading: "Le nostre proposte",
    items: [
      { name: "Specchi su misura", description: "Taglio e molatura, anche antichizzati", price: "" },
      { name: "Vetri e cristalli", description: "Infissi, vetrine, box doccia, piani in vetro", price: "" },
      { name: "Pronto intervento", description: "Sostituzione urgente di vetri in tutta Roma", price: "" },
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
    schedule: [],
  },

  contact: {
    heading: "Contattaci",
    address: "Via Monte del Gallo, 21, 00165 Roma",
    phone: "06 39379191",
    whatsapp: "337 235293",
    email: "rodolfodicurzio@tiscali.it",
  },

  map: {
    embedSrc: "https://www.google.com/maps?q=Via+Monte+del+Gallo+21+Roma&output=embed",
  },

  socials: {
    instagram: "",
    facebook: "https://www.facebook.com/p/Antica-Vetreria-Monte-del-Gallo-100063718835236/",
    tiktok: "",
    website: "http://vetraioroma.com/",
  },

  footer: {
    text: "Antica Vetreria Monte del Gallo: vetri e specchi su misura a Roma.",
  },
};
