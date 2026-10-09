// Demo per Borghini Illuminotecnica: materiale elettrico e illuminazione
// a Roma dal 1927, Via Belsiana 87-89 (zona Piazza di Spagna). STORIA
// confermata direttamente dal testo reale della loro pagina "Chi Siamo"
// (borghinisrl.it): "Borghini, presente dal 1927, è distributore
// privilegiato di marchi leader di conduttori di gomma e PVC, materiale
// elettrico e civile, illuminazione, condizionamento e sistemi di
// sicurezza." 99 anni di attività continua, confermato testualmente, non
// inventato. Anche riconosciuta come bottega storica di Roma da
// Turismo Roma (D.D. n. 1274 del 31/10/2001).
// EMAIL: borghiniilluminotecnica@gmail.com, trovata direttamente nel
// proprio sito (compare sia nel tag <title> della homepage sia nella
// pagina Contattaci: "E-mail: borghiniilluminotecnica@gmail.com").
// Prima parte, non una directory di terzi. L'indirizzo trovato su
// Turismo Roma (borghinisrl@tiscali.it) è diverso e più vecchio, quindi
// non usato.
// SITO ATTUALE: borghinisrl.it, un negozio online costruito su CubeCart
// (piattaforma e-commerce datata), confermato dal vivo via curl. Il tag
// <title> della homepage stessa è stato riusato come annuncio
// improvvisato ("Per ordinare i nostri prodotti in offerta, mandarci una
// richiesta alla nostra email...") invece di un vero titolo di pagina,
// l'immagine del logo nell'header ha src="/" (rotta), e il carrello
// mostra "Il tuo Carello è vuoto" (sic, errore di battitura reale) come
// stato permanente. Tutto verificato direttamente nell'HTML.
// FOTO: tutte reali, nessuna foto stock. hero.jpg è una foto reale della
// vetrina del negozio in Via Belsiana (con l'insegna "BORGHINI
// ILLUMINOTECNICA" visibile), trovata nel loro stesso sito
// (images/source/bilbelsiana.jpg), EXIF confermato: fotocamera Samsung
// SM-G925F, 2 ottobre 2017. about.jpg e gallery-1/2.jpg sono foto reali
// di lampade e apparecchi in esposizione nel loro showroom, trovate
// nello stesso sito (sitlamp1/3/4.jpg), EXIF confermato: fotocamera Sony
// E5603, stesso giorno. Un'altra immagine trovata sul sito (BEGH.jpg)
// mostra lampadine con il marchio "Beghelli" ben visibile e NON è stata
// usata, per lo stesso principio già applicato a massoni/stilo-fetti/
// troncarelli (evitare di mostrare in primo piano il marchio di un
// fornitore terzo).
// LOGO: reale, trovato sul loro sito (LOGOBANDBASSE.jpg): un'icona di
// tre triangoli (bianco, blu, bianco) su sfondo antracite, con la
// scritta "BORGHINI ILLUMINOTECNICA SRL" sotto. Ritagliata solo
// l'icona dei triangoli (esclusa la scritta, troppo lunga per lo slot
// circolare) e centrata su un canvas quadrato dello stesso colore di
// sfondo del logo originale, stesso schema delle altre icone reali
// (es. trimani, massoni).
// COLORI: blu `#4966e6` e antracite `#414141`, campionati pixel-per-
// pixel dal vero file del logo.
// MOOD: vintage (99 anni di attività, negozio dal 1927, vetrina
// d'epoca su una strada storica del centro, non un'azienda moderna né
// un artigiano con storia di famiglia narrata: il mood "vintage" si
// adatta meglio di "editorial" a un negozio commerciale genuinamente
// vecchio), per la linea guida della skill professional-web-design.

const SITE_CONFIG = {
  business: {
    name: "Borghini Illuminotecnica",
    tagline: "Materiale elettrico e illuminazione a Roma dal 1927",
    logoText: "BI",
    logoImage: "images/logo.png",
  },

  theme: {
    primary: "#4966e6",
    accent: "#414141",
    font: "'Poppins', sans-serif",
    headingFont: "'Yeseva One', serif",
    mood: "vintage",
  },

  hero: {
    heading: "Benvenuti da {{business.name}}",
    subheading: "Materiale elettrico, illuminazione e sistemi di sicurezza nel cuore di Roma, dal 1927",
    backgroundImage: "images/hero.jpg",
    ctaText: "Contattaci",
    ctaLink: "#contact",
  },

  about: {
    heading: "Chi siamo",
    text: "Borghini è presente dal 1927 ed è distributore privilegiato di marchi leader di conduttori di gomma e PVC, materiale elettrico e civile, illuminazione, condizionamento e sistemi di sicurezza. La vasta gamma di prodotti nei nostri magazzini e punti vendita è in grado di soddisfare ogni esigenza, dal privato al professionista.",
    image: "images/about.jpg",
  },

  offerings: {
    heading: "Cosa offriamo",
    items: [
      { name: "Materiale elettrico", description: "Conduttori, lampadine, lampadine LED e materiale civile per ogni esigenza", price: "" },
      { name: "Illuminazione", description: "Lampade da terra, da tavolo, applique, sospensioni e plafoniere", price: "" },
      { name: "Condizionamento e sicurezza", description: "Sistemi di condizionamento e sistemi di sicurezza per casa e ufficio", price: "" },
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
      { day: "Lunedì - Sabato", hours: "da confermare" },
      { day: "Domenica", hours: "Chiuso" },
    ],
  },

  contact: {
    heading: "Contattaci",
    address: "Via Belsiana 87-89, 00187 Roma",
    phone: "06 6790629",
    whatsapp: "3803667565",
    email: "borghiniilluminotecnica@gmail.com",
  },

  map: {
    embedSrc: "https://www.google.com/maps?q=Via+Belsiana+87+Roma&output=embed",
  },

  socials: {
    instagram: "",
    facebook: "",
    tiktok: "",
    website: "https://www.borghinisrl.it/",
  },

  footer: {
    text: "Borghini Illuminotecnica: materiale elettrico e illuminazione a Roma dal 1927.",
  },
};
