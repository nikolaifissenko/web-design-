// Demo per Studio Luxardo: studio fotografico storico a Roma, Via di
// Tor di Nona 39, attivo da oltre 60 anni, specializzato in matrimoni,
// ritratti e reportage eleganti. Il loro sito reale
// (luxardomuseum.it) è un'applicazione JavaScript a pagina unica
// (React/Vite) che risulta vuota a qualsiasi fetch automatico
// (curl, WebFetch, e persino un browser headless in questo ambiente
// sandbox vanno tutti in timeout o restituiscono un guscio HTML vuoto
// senza contenuto), esattamente come già successo in questo repo con
// Instagram: un blocco tecnico dal lato nostro, non una prova che il
// sito reale sia brutto. Per questo, come già fatto oggi per un altro
// lead con lo stesso identico blocco (vedi README, Round 24,
// antica-libreria-cascianelli), l'email di outreach non dichiara il
// sito attuale "brutto": si appoggia semplicemente sulla loro storia e
// sulle loro vere foto, offrendo la demo come proposta positiva.
// STORIA: attività fotografica storica di Roma, oltre 60 anni di
// attività, specializzata in matrimoni, cerimonie ed eventi, con uno
// stile che unisce tecnica digitale e tradizione della camera oscura.
// Membro dell'Associazione Botteghe Storiche di Roma. Testo tradotto e
// riassunto onestamente dalla pagina reale dedicata a questo studio
// sul sito dell'Associazione Botteghe Storiche di Roma, non inventato.
// EMAIL: tizianaluxardo@gmail.com, confermata sulla pagina ufficiale
// dell'Associazione Botteghe Storiche di Roma dedicata a questo
// studio (stesso standard di fonte già usato ed accettato in questo
// repo per altri lead, come Franchi Argentieri e Bertoletti 1882).
// FOTO: tutte reali, nessuna stock, tutte con la filigrana originale
// "STUDIOLUXARDO FOTOGRAFIA" dello studio stesso, prese dalla pagina
// dedicata a questo studio sul sito dell'Associazione Botteghe
// Storiche di Roma. hero.jpg mostra un vero matrimonio con ufficiali
// di marina che formano un arco di sciabole, un momento cerimoniale
// autentico. about.jpg mostra una vera sposa con il velo al vento su
// una terrazza. gallery-1.jpg è una vera foto artistica in
// controluce di due sposi che si baciano sotto il velo. gallery-2.jpg
// mostra un vero scambio di anelli durante la cerimonia.
// LOGO: nessun file di logo pulito trovato, solo una filigrana a
// bassa risoluzione incorporata direttamente nelle foto stesse (poco
// leggibile, non estraibile come icona pulita). Per onestà, usate le
// sole iniziali testuali ("SL") invece di inventare un'icona da un
// disegno troppo sfocato per essere riprodotto fedelmente.
// COLORI: blu notte/antracite `#1c2333` campionato dalle uniformi
// scure degli ufficiali visibili in hero.jpg, e oro `#c88c5a`
// campionato dai cordoni dorati cerimoniali nella stessa foto, non
// inventati.

const SITE_CONFIG = {
  business: {
    name: "Studio Luxardo",
    tagline: "Fotografia di matrimoni e ritratti a Roma da oltre 60 anni",
    logoText: "SL",
    logoImage: "",
  },

  theme: {
    primary: "#1c2333",
    accent: "#c88c5a",
    font: "'Poppins', sans-serif",
    headingFont: "'Playfair Display', serif",
    mood: "boutique",
  },

  hero: {
    heading: "Benvenuti da {{business.name}}",
    subheading: "Fotografia di matrimoni, ritratti e reportage eleganti, a Roma da oltre 60 anni",
    backgroundImage: "images/hero.jpg",
    ctaText: "Scopri lo studio",
    ctaLink: "#contact",
  },

  about: {
    heading: "Chi siamo",
    text: "Studio Luxardo è uno studio fotografico storico di Roma, attivo da oltre 60 anni. Specializzato in matrimoni, cerimonie ed eventi, unisce la tecnica digitale moderna alla tradizione della camera oscura, con uno stile di ritratto e reportage elegante capace di catturare ogni emozione. Lo studio è membro dell'Associazione Botteghe Storiche di Roma.",
    image: "images/about.jpg",
  },

  offerings: {
    heading: "I nostri servizi",
    items: [
      { name: "Matrimoni", description: "Reportage completo del giorno del matrimonio, dalla preparazione al ricevimento", price: "" },
      { name: "Ritratti", description: "Ritratti di famiglia e servizi fotografici personalizzati", price: "" },
      { name: "Eventi e cerimonie", description: "Copertura fotografica di battesimi, comunioni e altre cerimonie", price: "" },
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
      { day: "Sabato e Domenica", hours: "su appuntamento (servizi cerimonia)" },
    ],
  },

  contact: {
    heading: "Contattaci",
    address: "Via di Tor di Nona, 39, 00186 Roma",
    phone: "06 6830 1241",
    whatsapp: "",
    email: "tizianaluxardo@gmail.com",
  },

  map: {
    embedSrc: "https://www.google.com/maps?q=Via+di+Tor+di+Nona+39+Roma&output=embed",
  },

  socials: {
    instagram: "",
    facebook: "",
    tiktok: "",
    website: "https://www.luxardomuseum.it/",
  },

  footer: {
    text: "Studio Luxardo: fotografia di matrimoni e ritratti a Roma da oltre 60 anni.",
  },
};
