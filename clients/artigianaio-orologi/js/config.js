// Demo per L'Artigianaio Orologi di Daniele Merelli — dati verificati:
// nome, indirizzo, telefono, orari, storia dell'attività (fonti:
// misterimprese.it, paginebianche.it, nuovaopinione.it, iglobal.co —
// tutte le directory concordano su indirizzo/telefono).
// NESSUN SITO O PRESENZA DIGITALE TROVATA — verificato a fondo, non solo
// assunto: nessun dominio proprio, nessuna pagina Facebook/Instagram
// rintracciabile, nessuna email pubblica in nessuna delle directory
// controllate. Le uniche foto associate al nome dell'attività su una
// directory di terze parti (nicelocal.it, via CDN zoon.ru) si sono
// rivelate all'apertura completamente scorrelate (Piazza Rossa a Mosca,
// uno studio dentistico) — un mix-up della directory, non foto reali
// del negozio: scartate. Nessuna foto reale recuperabile con i mezzi
// automatici disponibili in questa sessione.
// LOGO: nessun logo esistente da adattare (a differenza di Autofficina
// Pisino, qui non c'è proprio nulla da cui partire) — disegnata da zero
// un'icona professionale al posto delle iniziali testuali, per lo stesso
// principio (vedi CLAUDE.md): un designer non si ferma alle iniziali se
// può creare qualcosa di più curato. Quadrante d'orologio blu notte
// (`#121a2b`) con cassa/lancette oro anticato (`#c49e55`), stile
// orologio da taschino classico — disegnato a mano con PIL (ImageDraw:
// cerchi ed elissi), non una foto. È già naturalmente circolare, quindi
// si adatta al cerchio del logo del template senza alcun ritaglio
// forzato — coerente con l'attività (orologiaio, specializzato anche in
// orologi da tasca/antichi).
// FOTO: tutte stock (Unsplash, licenza libera, nessuna attribuzione
// richiesta) — ultima risorsa dopo aver esaurito le fonti reali
// disponibili, come da processo documentato. Scelte per pertinenza
// specifica (non generiche): hero e about mostrano l'orologiaio Patrick
// Amofah al lavoro con lente/microscopio su un meccanismo reale; la
// gallery ha due macro autentiche di ingranaggi di movimenti meccanici
// e una foto museale di orologi da tasca antichi — coerenti con la
// specializzazione dichiarata dell'attività (riparazione di meccanismi,
// orologi da tasca e da polso vintage).

const SITE_CONFIG = {
  business: {
    name: "L'Artigianaio Orologi",
    tagline: "Riparazione e restauro di orologi meccanici a Roma dal 1999",
    logoText: "AO",
    logoImage: "images/logo.png",
  },

  theme: {
    primary: "#121a2b",
    accent: "#c49e55",
    font: "'Playfair Display', serif",
  },

  hero: {
    heading: "Benvenuti da {{business.name}}",
    subheading: "La bottega di Daniele Merelli, nel cuore di Rione Monti: riparazione, revisione e restauro di orologi meccanici di ogni marca",
    backgroundImage: "images/hero.jpg",
    ctaText: "Prenota una revisione",
    ctaLink: "#contact",
  },

  about: {
    heading: "Chi siamo",
    text: "Dal 1999 L'Artigianaio Orologi ripara meccanismi di orologi meccanici di ogni marca ed epoca, da polso e da taschino. Daniele Merelli lavora nel suo laboratorio di Via Urbana, nel cuore di Rione Monti, seguendo ogni orologio con la cura e la pazienza che solo un vero artigiano può offrire.",
    image: "images/about.jpg",
  },

  offerings: {
    heading: "Servizi",
    items: [
      { name: "Riparazione meccanismi", description: "Riparazione di movimenti meccanici di ogni marca e tipo", price: "" },
      { name: "Revisione e manutenzione", description: "Pulizia, lubrificazione e revisione completa", price: "" },
      { name: "Restauro orologi da taschino", description: "Restauro di orologi da tasca e da polso d'epoca", price: "" },
      { name: "Assistenza orologi antichi", description: "Interventi su movimenti storici e di pregio", price: "" },
      { name: "Compravendita usato", description: "Acquisto e rivendita di orologi usati di marca", price: "" },
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
      { day: "Lunedì", hours: "10:00 - 18:30" },
      { day: "Martedì", hours: "10:00 - 18:30" },
      { day: "Mercoledì", hours: "10:00 - 18:30" },
      { day: "Giovedì", hours: "10:00 - 18:30" },
      { day: "Venerdì", hours: "10:00 - 18:30" },
      { day: "Sabato", hours: "Chiuso" },
      { day: "Domenica", hours: "Chiuso" },
    ],
  },

  contact: {
    heading: "Contattaci",
    address: "Via Urbana, 103/A, 00184 Roma (Rione Monti)",
    phone: "06 4742284",
    whatsapp: "",
    email: "",
  },

  map: {
    embedSrc: "https://www.google.com/maps?q=Via+Urbana+103A+Roma&output=embed",
  },

  socials: {
    instagram: "",
    facebook: "",
    tiktok: "",
    website: "",
  },

  footer: {
    text: "L'Artigianaio Orologi di Daniele Merelli — Rione Monti, Roma.",
  },
};
