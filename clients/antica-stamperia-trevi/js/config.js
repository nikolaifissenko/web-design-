// Demo per Antica Stamperia Trevi — nessun sito proprio esiste (solo
// pagine su directory/associazioni, verificato: nessun dominio
// indipendente trovato). Dati e testo verificati tramite copertura
// stampa reale: RomaToday (video-intervista a Sergio Franci, 2026),
// BeeMagazine (articolo con citazioni dirette di Sergio Franci),
// Associazione Botteghe Storiche Roma (botteghestoricheroma.com).
// EMAIL REALE trovata non tramite ricerca ma leggendo il testo stampato
// sulla loro confezione originale in una foto stampa (gallery-2.jpg):
// "anticastamperiatrevi@gmail.com" — indirizzo, telefono e servizi
// (inviti, partecipazioni, biglietti da visita, carta da lettere) sono
// anch'essi leggibili sulla stessa confezione, non inventati.
// LOGO: nessun logo digitale/vettoriale esiste — l'unico marchio visibile
// è un piccolo sigillo stemma-e-corona fotografato su carta, troppo
// sfocato e a bassa risoluzione per un ritaglio pulito (verificato,
// vedi _lead.md). Ridisegnata un'icona pulita — una piuma d'oca dentro
// un sigillo circolare — nello stesso color oro/bronzo campionato a
// mano dalla foto reale della doratura a caldo (bronzo #b8813f), non
// un colore inventato: images/logo.svg.
// FOTO: tutte reali, nessuna stock, tutte da fonti stampa/associative:
// hero.jpg = Sergio Franci fotografato in mezzo ai torchi storici del
// laboratorio (RomaToday); about.jpg = macro di una doratura a caldo
// su un biglietto per il decimo anniversario di fondazione
// (BeeMagazine); gallery-1.jpg = un punzone/matrice d'acciaio con
// stemma araldico inciso, usato per la stampa a rilievo (BeeMagazine);
// gallery-2.jpg = le confezioni originali del negozio, con testo reale
// leggibile (Associazione Botteghe Storiche Roma).

const SITE_CONFIG = {
  business: {
    name: "Antica Stamperia Trevi",
    tagline: "La più antica stamperia di Roma, a due passi dalla Fontana di Trevi dal 1780",
    logoText: "AST",
    logoImage: "images/logo.svg",
  },

  theme: {
    primary: "#b8813f",
    accent: "#1f2d3d",
    font: "'Poppins', sans-serif",
    headingFont: "'Playfair Display', serif",
    mood: "editorial",
  },

  hero: {
    heading: "Benvenuti da {{business.name}}",
    subheading: "Stampati di prestigio incisi a mano dal 1780: biglietti da visita, inviti e partecipazioni",
    backgroundImage: "images/hero.jpg",
    ctaText: "Richiedi Informazioni",
    ctaLink: "#contact",
  },

  about: {
    heading: "240 Anni di Storia",
    text: "Fondata nel 1780, nove anni prima della Rivoluzione Francese, l'Antica Stamperia Trevi è la più antica tipografia ancora attiva a Roma e una delle più antiche d'Europa. Da oltre due secoli, nello stesso luogo a due passi dalla Fontana di Trevi, il titolare Sergio Franci porta avanti tecniche antiche: incisione a mano, stampa a rilievo e doratura a caldo. \"È un oggetto che parla di noi quando non ci siamo\", dice Franci parlando dei biglietti da visita che la sua bottega produce per papi, capi di stato e famiglie romane da tre epoche di storia italiana.",
    image: "images/about.jpg",
  },

  offerings: {
    heading: "Stampati di Prestigio",
    items: [
      { name: "Biglietti da visita", description: "Incisi a mano con tecniche di rilievo e doratura a caldo", price: "" },
      { name: "Partecipazioni ed inviti", description: "Per matrimoni ed eventi importanti, su carta pregiata", price: "" },
      { name: "Carta da lettere", description: "Personalizzata, con monogramma o stemma inciso su richiesta", price: "" },
      { name: "Corrispondenza istituzionale", description: "Stampati per enti, ambasciate e famiglie storiche romane", price: "" },
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
      { day: "Lunedì - Venerdì", hours: "da confermare" },
      { day: "Sabato - Domenica", hours: "da confermare" },
    ],
  },

  contact: {
    heading: "Contattaci",
    address: "Via dell'Umiltà, 84/85, 00187 Roma",
    phone: "06 6794718",
    whatsapp: "",
    email: "anticastamperiatrevi@gmail.com",
  },

  map: {
    embedSrc: "https://www.google.com/maps?q=Via+dell%27Umilta+84+Roma&output=embed",
  },

  socials: {
    instagram: "",
    facebook: "",
    tiktok: "",
    website: "",
  },

  footer: {
    text: "Antica Stamperia Trevi — Stampati di prestigio a Roma dal 1780.",
  },
};
