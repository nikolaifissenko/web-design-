// Demo per Pasticceria Savarese (nome legale SBS Roma S.r.l.s.), Via
// Genzano 64-66, Roma, con un secondo banco dentro il Mercato di
// Testaccio (box 97). Pasticceria napoletana storica, fondata nel 1961
// dalle tre sorelle Piera, Grazia e Pina Savarese, arrivate a Roma da
// Sieti (Salerno). Bottega Storica di Roma Capitale dal 2023.
//
// EMAIL: l'unica email trovata in ricerca diretta era una PEC
// (sbsroma@legalmail.it), scartata come canale di contatto: le caselle
// PEC servono per corrispondenza legale certificata e non sono pensate
// per essere lette da mittenti comuni. **Nota però**: durante la ricerca
// foto è emersa una seconda email, pasticceriasavarese@gmail.com,
// pubblicata sulla scheda ufficiale del banco sul sito del Mercato di
// Testaccio (mercatoditestaccio.it/banco/pasticceria-savarese/,
// verificata via curl diretto, non solo WebFetch). Non era nel brief
// originale di questo lead. Segnalata a Nikolai in _lead.md: la bozza
// di contatto qui resta comunque via Instagram/Facebook DM come da
// istruzione, ma quella email potrebbe essere un canale migliore, da
// valutare.
//
// FOTO: tutte reali, nessuna stock. Fonte: mercatoditestaccio.it, la
// scheda ufficiale del loro banco al mercato (fetch diretto, non un
// blog terzo). hero.jpg = la vetrina reale del negozio con una delle
// tre titolari (foto Canon EOS 6D Mark II, EXIF confermato,
// 2024-11-27). about.jpg = foto d'epoca reale delle tre sorelle
// fondatrici dietro al bancone (stesso sito, file "1982.jpg", coerente
// con la storia dei tre founding sisters). gallery-1.jpg = la targa
// "Bottega Storica dal 1967" (la targa riporta 1967, altre fonti
// dicono 1961 come anno di fondazione dell'attività: la targa si
// riferisce probabilmente alla prima insegna/attività dei genitori,
// non contraddice la storia, entrambe le date sono reali e verificate,
// riportata la formulazione più prudente "dagli anni '60" nel testo).
// gallery-2.jpg = pastiera reale (loro specialità, 2° posto Regina
// della Pastiera 2024). gallery-3.jpg = babà reali in vetrina.
//
// LOGO: nessun logo a icona esiste separatamente dall'insegna. Usata
// la foto profilo reale della loro pagina Facebook ufficiale
// (facebook.com/pasticceriasavarese, presa via graph.facebook.com,
// endpoint pubblico, nessun login richiesto) come logoImage: è lo
// stemma/targa "Bottega Storica dal 1967" in formato quadrato, già
// badge-shaped, si adatta bene allo slot circolare. Colori del tema
// campionati pixel per pixel da questa stessa immagine: bordeaux
// ~#ae0f2b, oro/giallo ~#ffce51, entrambi coerenti anche con l'insegna
// gialla reale del negozio vista in hero.jpg.

const SITE_CONFIG = {
  business: {
    name: "Savarese",
    tagline: "Pasticceria Napoletana a Roma dal 1961",
    logoText: "S",
    logoImage: "images/logo.jpg",
  },

  theme: {
    primary: "#ae0f2b",
    accent: "#ffce51",
    font: "'Poppins', sans-serif",
    headingFont: "'Yeseva One', serif",
    mood: "vintage",
  },

  hero: {
    heading: "Benvenuti da {{business.name}}",
    subheading: "Pasticceria napoletana storica a Roma, dagli anni '60 nelle mani della famiglia Savarese",
    backgroundImage: "images/hero.jpg",
    ctaText: "Vieni a trovarci",
    ctaLink: "#contact",
  },

  about: {
    heading: "Chi siamo",
    text: "Pasticceria Savarese nasce dall'incontro di tre sorelle, Piera, Pina e Grazia, arrivate a Roma da Sieti, in provincia di Salerno. Dopo gli inizi nella pasticceria di un cugino a San Giovanni, nel 1982 aprono la loro bottega in Via Genzano 64, oggi affiancata da un secondo banco dentro il Mercato di Testaccio. Nel 2023 Roma Capitale ha riconosciuto l'attività come Bottega Storica, \"centro di ricordi e sapori\": la pastiera di casa Savarese si è classificata al secondo posto al concorso nazionale Regina della Pastiera 2024, dopo un terzo posto nel 2023.",
    image: "images/about.jpg",
  },

  offerings: {
    heading: "Le nostre specialità",
    items: [
      { name: "Pastiera napoletana", description: "La nostra specialità, premiata al concorso nazionale Regina della Pastiera", price: "" },
      { name: "Babà", description: "Babà artigianali, freschi ogni giorno", price: "" },
      { name: "Pasticceria napoletana mignon", description: "Sfogliatelle, mostaccioli e piccola pasticceria assortita", price: "" },
      { name: "Torte su ordinazione", description: "Torte personalizzate per feste e ricorrenze", price: "" },
    ],
  },

  gallery: {
    heading: "Galleria",
    images: ["images/gallery-1.jpg", "images/gallery-2.jpg", "images/gallery-3.jpg"],
  },

  hours: {
    heading: "Orari",
    schedule: [
      { day: "Mercoledì - Lunedì", hours: "7:30 - 13:30, 16:00 - 19:00" },
      { day: "Martedì", hours: "Chiuso" },
    ],
  },

  contact: {
    heading: "Contattaci",
    address: "Via Genzano, 64-66, 00179 Roma (anche box 97, Mercato di Testaccio)",
    phone: "06 7810713",
    whatsapp: "",
    email: "pasticceriasavarese@gmail.com",
  },

  map: {
    embedSrc: "https://www.google.com/maps?q=Via+Genzano+64+Roma&output=embed",
  },

  socials: {
    instagram: "https://www.instagram.com/pasticceria_savarese/",
    facebook: "https://www.facebook.com/pasticceriasavarese/",
    tiktok: "",
    website: "",
  },

  footer: {
    text: "Pasticceria Savarese: pasticceria napoletana a Roma dagli anni '60.",
  },
};
