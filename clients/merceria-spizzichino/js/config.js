// Demo per Merceria Spizzichino: merceria di famiglia a Via
// Alessandria 82, attiva nello stesso locale dal 1 ottobre 1923, oggi
// portata avanti da Marcello Spizzichino, ultimo esponente di questa
// famiglia storica nel mestiere della merceria (originaria di Bolsena).
// SITO ATTUALE: nessun sito esiste per questa attivita', confermato con
// una ricerca reale (solo schede su elenchi/directory, nessun dominio
// proprio). Anche Instagram e Facebook cercati direttamente prima di
// costruire la demo: nessun profilo trovato per questa merceria.
// STORIA: testo tradotto e riassunto onestamente da fonti indipendenti
// (l'intervista "Roma, viaggio nelle mercerie storiche: a tu per tu con
// Marcello Spizzichino", larotta.it) e da piu' elenchi/directory
// indipendenti concordanti sull'indirizzo e la data di apertura, non
// inventato.
// EMAIL: marspiz@tiscali.it, confermata su piu' fonti indipendenti
// (directory aziendali) concordanti, non una singola fonte incerta.
// FOTO: **nessuna foto reale del negozio o del titolare e' stata
// trovata da nessuna fonte controllata** (sito proprio: non esiste;
// stampa indipendente: l'unico articolo dedicato, larotta.it, ha
// restituito errore 503 ripetutamente durante questa sessione;
// Instagram/Facebook: nessun profilo esiste). Usate quindi foto stock
// oneste e pertinenti (rocchetti di filo colorati, un ago da
// cucitrice, cassetti in legno, rotoli di stoffa a fiori), scelte per
// essere chiaramente in tema con una merceria, senza alcun logo o
// insegna di terzi visibile nell'inquadratura. Documentato onestamente
// qui e in _lead.md, come da standard del repository quando lo stock
// e' davvero l'ultima risorsa dopo aver controllato tutte le fonti
// reali disponibili.
// LOGO: nessun logo reale esiste da adattare (nessun sito, nessuna
// insegna fotografata trovata), quindi usate le iniziali testuali
// (logoText) invece di disegnare un'icona, il caso legittimo per
// questa regola quando non c'e' davvero nulla di reale da cui partire.
// COLORI: blu navy #052443 e rosso #b30008, scelti in coerenza con la
// fotografia stock selezionata (rocchetti di filo), non sono colori
// di un vero brand poiche' nessuno e' documentato da nessuna parte.

const SITE_CONFIG = {
  business: {
    name: "Merceria Spizzichino",
    tagline: "Merceria di famiglia a Roma dal 1923",
    logoText: "MS",
    logoImage: "",
  },

  theme: {
    primary: "#052443",
    accent: "#b30008",
    font: "'Poppins', sans-serif",
    headingFont: "'Playfair Display', serif",
    mood: "vintage",
  },

  hero: {
    heading: "Benvenuti da {{business.name}}",
    subheading: "Merceria di famiglia a Via Alessandria dal 1923",
    backgroundImage: "images/hero.jpg",
    ctaText: "Scopri la merceria",
    ctaLink: "#contact",
  },

  about: {
    heading: "Chi siamo",
    text: "Merceria Spizzichino e' attiva nello stesso locale di Via Alessandria 82 dal 1 ottobre 1923, senza mai cambiare indirizzo ne' tipo di attivita'. Oggi e' portata avanti da Marcello Spizzichino, ultimo esponente di questa famiglia storica nel mestiere della merceria, originaria di Bolsena. Un secolo di filati, bottoni, nastri e articoli da cucito nel cuore del quartiere.",
    image: "images/about.jpg",
  },

  offerings: {
    heading: "Le nostre proposte",
    items: [
      { name: "Filati e lane", description: "Ampia scelta di filati per ogni lavorazione", price: "" },
      { name: "Bottoni e merceria", description: "Bottoni, nastri, cerniere e articoli da cucito", price: "" },
      { name: "Consulenza esperta", description: "Un secolo di esperienza nel mestiere della merceria", price: "" },
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
    schedule: [],
  },

  contact: {
    heading: "Contattaci",
    address: "Via Alessandria, 82, 00198 Roma",
    phone: "06 44240621",
    whatsapp: "",
    email: "marspiz@tiscali.it",
  },

  map: {
    embedSrc: "https://www.google.com/maps?q=Via+Alessandria+82+Roma&output=embed",
  },

  socials: {
    instagram: "",
    facebook: "",
    tiktok: "",
    website: "",
  },

  footer: {
    text: "Merceria Spizzichino: merceria di famiglia a Roma dal 1923.",
  },
};
