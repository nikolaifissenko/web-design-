// Demo per Enoteca Buccone: vini, olii e liquori, Via di Ripetta
// 19/20, Roma. STORIA riassunta onestamente dal testo reale della
// loro pagina "Chi Siamo" (enotecabuccone.com): "In origine rimessa
// di Carrozze dei Marchesi Cavalcabò, poi Osteria e dal 1969
// trasformata in enoteca... dal 1980 dopo la scomparsa del signor
// Domenico Buccone la moglie Maddalena ha ampliato l'offerta...
// Dal '97 insieme ai figli Vincenzo e Francesco, l'enoteca offre un
// servizio di ristorazione." Nota: la scheda di Turismo Roma cita
// "dal 1870", ma il testo reale del sito parla di una rimessa di
// carrozze diventata osteria e poi enoteca solo dal 1969: usato qui
// solo quanto confermato testualmente sul loro stesso sito, non la
// cifra "1870" non ritrovata nella fonte primaria.
// EMAIL: info@enotecabuccone.com, trovata nel campo hidden del loro
// stesso modulo di contatto (contattaci.htm), quindi un indirizzo
// pubblicato da loro stessi, anche se non mostrato come testo o
// mailto visibile. TELEFONO/FAX: 06 36 12 154, dalla stessa pagina.
// SITO ATTUALE: enotecabuccone.com, un sito HTML a tabelle
// genuinamente datato (EXIF del 2005, Adobe Photoshop CS), con
// pagina di benvenuto a due bottoni "entra/enter" e navigazione a
// frame vecchio stile: un caso di sito "vecchio" molto più estremo
// degli altri lead recenti, non solo un'impressione soggettiva.
// FOTO: tutte reali, zero stock, trovate sulla pagina "Chi Siamo" del
// loro stesso sito. hero.jpg è il vero interno del locale, con l'arco
// in mattoni e gli scaffali pieni di vino. about.jpg è una vera foto
// dei titolari, Vincenzo e Francesco Buccone, dietro al bancone.
// gallery-1.jpg è una vera cassa antica in ottone, un cimelio del
// negozio. Le bottiglie di altri marchi visibili sugli scaffali sono
// normale merce in vendita in un'enoteca, non un caso di
// attribuzione errata di design come nei lead precedenti.
// LOGO: reale, trovato sul loro sito: una grafica GIF testuale
// "enoteca BUCCONE" con effetto glow, decorazioni a foglia di vite e
// sole nelle lettere ma senza un'icona separabile da ritagliare.
// Seguendo CLAUDE.md, iniziali testuali "EB", nei veri colori
// campionati pixel-per-pixel dal file del logo stesso.
// COLORI: verde scuro `#214201` e oro/oliva `#9b9b2a`, entrambi
// campionati pixel-per-pixel dal vero file del logo.
// MOOD: rustic (enoteca artigianale con una storia concreta e
// familiare, non presentata come istituzione documentata di secoli,
// dato che la data "dal 1969" per l'enoteca stessa è più recente
// degli altri lead "editorial"), per la linea guida della skill
// professional-web-design.

const SITE_CONFIG = {
  business: {
    name: "Enoteca Buccone",
    tagline: "Vini, olii e liquori a Roma",
    logoText: "EB",
    logoImage: "",
  },

  theme: {
    primary: "#214201",
    accent: "#9b9b2a",
    font: "'Poppins', sans-serif",
    headingFont: "'Playfair Display', serif",
    mood: "rustic",
  },

  hero: {
    heading: "Benvenuti da {{business.name}}",
    subheading: "Vini, olii e liquori nel cuore di Roma, in un locale che fu rimessa di carrozze e poi osteria",
    backgroundImage: "images/hero.jpg",
    ctaText: "Contattaci",
    ctaLink: "#contact",
  },

  about: {
    heading: "Chi siamo",
    text: "In origine rimessa di carrozze dei Marchesi Cavalcabò, poi osteria e dal 1969 trasformata in enoteca. Dopo la scomparsa di Domenico Buccone, la moglie Maddalena ha ampliato l'offerta con ricercatezze alimentari, pasta, miele e marmellate. Dal 1997 i figli Vincenzo e Francesco portano avanti l'attività, offrendo anche un servizio di ristorazione.",
    image: "images/about.jpg",
  },

  offerings: {
    heading: "Cosa offriamo",
    items: [
      { name: "Vini", description: "Ampia selezione di etichette italiane e non solo", price: "" },
      { name: "Olii e liquori", description: "Prodotti selezionati, ricercatezze alimentari", price: "" },
      { name: "Ristorazione", description: "Pranzo tutti i giorni, cena il venerdì e sabato", price: "" },
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
      { day: "Lunedì - Sabato", hours: "da confermare" },
      { day: "Domenica", hours: "da confermare" },
    ],
  },

  contact: {
    heading: "Contattaci",
    address: "Via di Ripetta 19/20, 00186 Roma",
    phone: "06 3612154",
    whatsapp: "",
    email: "info@enotecabuccone.com",
  },

  map: {
    embedSrc: "https://www.google.com/maps?q=Via+di+Ripetta+19+Roma&output=embed",
  },

  socials: {
    instagram: "",
    facebook: "https://www.facebook.com/bucconevinieolii/",
    tiktok: "",
    website: "https://www.enotecabuccone.com/",
  },

  footer: {
    text: "Enoteca Buccone: vini, olii e liquori a Roma.",
  },
};
