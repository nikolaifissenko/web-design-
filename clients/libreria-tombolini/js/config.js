// Demo per Libreria Tombolini, dominio proprio (libreriatombolini.it)
// non risolve affatto (DNS failure, verificato con curl), quindi nessun
// sito indipendente raggiungibile. Wayback Machine ha uno snapshot del
// 2015 ma web.archive.org risulta bloccato in questo ambiente (host
// bloccato dal proxy), quindi non consultabile. Turismo Roma, illibraio.it
// e altre directory confermano indirizzo/telefono/email ma non hanno
// nessuna foto del negozio. bibliotechediroma.it e localshop24.com hanno
// bloccato la richiesta (HTTP 403). Instagram/Facebook non consultabili
// per foto (client-rendered, vedi CLAUDE.md). Un'unica fonte reale ha
// dato materiale fotografico: PDE (distributore editoriale), sezione
// "Facce da libreria" (pde.it, 13 luglio 2020), con una foto reale
// dell'interno scattata durante il periodo Covid.
// LOGO: nessun marchio/logo esiste in nessuna fonte trovata, nemmeno
// sfocato o in foto di bassa qualità (a differenza di Bordi/C.E.R./
// Minerva, dove un marchio reale seppur imperfetto esisteva). Per
// onestà, qui la scelta di usare logoText (iniziali) è quella corretta
// prevista da scripts/branding-extraction.md per il caso in cui non c'è
// davvero nulla da adattare.
// COLORI: nessun CSS/tema reale esiste (sito morto). Palette scelta
// osservando i toni reali della foto d'interno (legno scuro degli
// scaffali, dorsi di libri rilegati in pelle) piuttosto che inventata a
// caso: bordeaux/pelle antica #7a2e1f, legno scuro quasi nero #2e2822.
// FOTO: about.jpg e gallery-1.jpg sono REALI, ritagliate dalla foto PDE
// per escludere i volti delle persone presenti nello scatto originale
// (privacy, non erano posate per un servizio fotografico), mostrano
// gli scaffali con l'etichetta reale "FILOSOFIA", una cornice con
// diploma/attestato e volumi rilegati, più una vetrinetta con oggetti.
// hero.jpg e gallery-2.jpg sono STOCK (Unsplash, licenza libera): dopo
// aver esaurito le fonti reali sopra, usate per gli unici due slot senza
// materiale reale disponibile, una libreria d'antiquariato generica e
// una pila di libri antichi, coerenti con l'identità della bottega.

const SITE_CONFIG = {
  business: {
    name: "Libreria Tombolini",
    tagline: "Libreria antiquaria specializzata in scienze umane dal 1874",
    logoText: "LT",
    logoImage: "",
  },

  theme: {
    primary: "#7a2e1f",
    accent: "#2e2822",
    font: "'Poppins', sans-serif",
    headingFont: "'Playfair Display', serif",
    mood: "editorial",
  },

  hero: {
    heading: "Benvenuti da {{business.name}}",
    subheading: "30.000 titoli di filosofia, filologia, arte e antichità classica, dal 1874",
    backgroundImage: "images/hero.jpg",
    ctaText: "Vieni a Trovarci",
    ctaLink: "#contact",
  },

  about: {
    heading: "150 Anni tra i Libri",
    text: "Libreria Tombolini è una libreria antiquaria attiva dal 1874 in via Quattro Novembre, riconosciuta libreria storica con Ordinanza del Sindaco n. 50 del 1998. Specializzata in ambito umanistico, tra i suoi 30.000 titoli si trovano antichità classica e medievale, esoterismo, filosofia, letteratura italiana, arte, psicologia, filologia classica e romanza. Tra gli scaffali di legno scuro, ancora oggi si respira l'atmosfera di una delle librerie più radicate della Roma colta.",
    image: "images/about.jpg",
  },

  offerings: {
    heading: "Le Nostre Specializzazioni",
    items: [
      { name: "Filosofia e filologia", description: "Testi classici, medievali e moderni, edizioni rare e fuori catalogo", price: "" },
      { name: "Arte e antichità classica", description: "Volumi illustrati e saggistica specializzata", price: "" },
      { name: "Esoterismo e psicologia", description: "Un fondo storico raro, difficile da trovare altrove", price: "" },
      { name: "Ricerca e consegna a domicilio", description: "Aiuto nella ricerca di titoli introvabili, consegna disponibile", price: "" },
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
      { day: "Lunedì - Sabato", hours: "09:00 - 19:30" },
      { day: "Domenica", hours: "Chiuso" },
    ],
  },

  contact: {
    heading: "Vieni a Trovarci",
    address: "Via Quattro Novembre, 146, 00187 Roma (rione Trevi)",
    phone: "06 6795719",
    whatsapp: "",
    email: "libreria.tombolini@iol.it",
  },

  map: {
    embedSrc: "https://www.google.com/maps?q=Via+Quattro+Novembre+146+Roma&output=embed",
  },

  socials: {
    instagram: "",
    facebook: "https://www.facebook.com/profile.php?id=100068245836899",
    tiktok: "",
    website: "",
  },

  footer: {
    text: "Libreria Tombolini, libri di scienze umane a Roma dal 1874.",
  },
};
