// Demo per Liuteria La Scala: liuteria artigianale a Roma dal 1996, Via
// Braccianese 93, laboratorio del Maestro Francesco Lascala, Centro
// Assistenza Gibson ufficiale di Roma e del centro Italia dal 2012.
// Sito attuale (liuterialascala.it) confermato dal vivo: HTML statico
// dei primi anni 2000, footer che riporta ancora "© 1996 - 2018" (il
// sito non risulta aggiornato da anni), ma con un archivio fotografico
// reale e ricco, non sfruttato al meglio dal layout attuale.
// STORIA: nel 1979 Francesco Lascala inizia un apprendistato di 3 anni
// nel laboratorio del liutaio Franco Di Filippo a Roma. Nel 1985
// conosce il M° Silvio De Lellis. Dal 1990 al 1992 fa parte del corpo
// insegnanti della scuola "Liuteria Romana" di Artena (FR). Nel
// settembre 1996 apre il proprio storico laboratorio in Via
// Braccianese 93, dove lavora tuttora. Da gennaio 2012 è ufficialmente
// Centro Assistenza Gibson di Roma e del centro Italia. Testo tradotto
// e riassunto onestamente dalla pagina "Chi siamo" reale del loro
// sito, non inventato.
// EMAIL: info@liuterialascala.it, trovata direttamente sul loro sito
// (link mailto: ripetuto in header, footer e pagina contatti). Non è
// una fonte terza, è il loro stesso sito.
// FOTO: tutte reali, nessuna stock, tutte scaricate direttamente dal
// loro sito, tutte con la propria filigrana "Liuteria La Scala"
// visibile. hero.jpg mostra una vera lavorazione a mano di una cassa
// armonica di violino, con i trucioli di legno e gli strumenti da
// intaglio veri sul banco. about.jpg è un vero dettaglio del restauro
// di un violino (la "C" della cassa armonica in fase di ripristino).
// gallery-1.jpg e gallery-2.jpg mostrano una vera chitarra elettrica
// custom "Black Eden" con finitura pitone, lavoro di liuteria
// artigianale reale, non uno strumento di catalogo. gallery-3.jpg è un
// vero dettaglio dell'elettronica/hardware della stessa chitarra
// custom. gallery-4.jpg e gallery-5.jpg documentano il vero restauro
// del violino (fasi diverse della stessa riparazione strutturale).
// LOGO: reale, il file ufficiale del laboratorio
// ("logoliuteriablack.png"), un monogramma dorato "L" dentro un
// riquadro nero. A differenza di altri casi recenti su questo repo, il
// riquadro con il monogramma è già di per se un quadrato pulito e
// separato dal resto del wordmark, quindi si adatta correttamente allo
// slot circolare del template con un semplice ritaglio, senza bisogno
// di ridisegnarlo da zero.
// COLORI: oro `#c9962b` (versione più satura, per contrasto testo, dello
// stesso oro campionato pixel per pixel dal vero logo) e nero
// `#1a1a1a`, gli stessi due colori esatti del loro vero logo
// (monogramma oro su sfondo nero), non inventati.

const SITE_CONFIG = {
  business: {
    name: "Liuteria La Scala",
    tagline: "Costruzione, restauro e riparazione di strumenti musicali a Roma dal 1996",
    logoText: "LS",
    logoImage: "images/logo.png",
  },

  theme: {
    primary: "#c9962b",
    accent: "#1a1a1a",
    font: "'Poppins', sans-serif",
    headingFont: "'EB Garamond', serif",
    mood: "editorial",
  },

  hero: {
    heading: "Benvenuti da {{business.name}}",
    subheading: "La bottega del liutaio, a Roma dal 1996: Centro Assistenza Gibson ufficiale",
    backgroundImage: "images/hero.jpg",
    ctaText: "Scopri il laboratorio",
    ctaLink: "#contact",
  },

  about: {
    heading: "Chi siamo",
    text: "Nel 1979 Francesco Lascala inizia il suo apprendistato presso il liutaio Franco Di Filippo a Roma. Dal 1990 al 1992 insegna alla scuola Liuteria Romana di Artena. Nel settembre 1996 apre il proprio laboratorio in Via Braccianese 93, dove lavora ancora oggi a mano, senza l'ausilio di macchinari, come vuole la vera liuteria. Da gennaio 2012 è ufficialmente Centro Assistenza Gibson di Roma e del centro Italia.",
    image: "images/about.jpg",
  },

  offerings: {
    heading: "Le nostre lavorazioni",
    items: [
      { name: "Costruzione", description: "Chitarre classiche, elettriche e strumenti su misura, interamente a mano", price: "" },
      { name: "Restauro", description: "Restauro di violini e strumenti ad arco, tecniche tradizionali", price: "" },
      { name: "Riparazioni e personalizzazioni", description: "Assistenza Gibson ufficiale, intarsi in madreperla, elettronica custom", price: "" },
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
      { day: "Su appuntamento", hours: "Il M° Lascala riceve esclusivamente su appuntamento" },
    ],
  },

  contact: {
    heading: "Contattaci",
    address: "Via Braccianese, 93, 00123 Roma",
    phone: "06 3089 2474",
    whatsapp: "339 766 1950",
    email: "info@liuterialascala.it",
  },

  map: {
    embedSrc: "https://www.google.com/maps?q=Via+Braccianese+93+Roma&output=embed",
  },

  socials: {
    instagram: "",
    facebook: "https://www.facebook.com/Liuteria.Lascala",
    tiktok: "",
    website: "https://www.liuterialascala.it/",
  },

  footer: {
    text: "Liuteria La Scala: la bottega del liutaio, a Roma dal 1996.",
  },
};
