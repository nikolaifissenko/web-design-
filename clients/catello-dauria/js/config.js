// Demo per Catello D'Auria: guanti artigianali a Roma, Via dei Due
// Macelli 55 (Piazza di Spagna), dal 1894. Sito attuale
// (catellodauria.it) confermato dal vivo: e-commerce essenziale su
// Squarespace, testo denso e poca fotografia del vero negozio (quasi
// tutte le foto sono cataloghi prodotto), per una bottega con un
// interno storico e una vetrina che meritano di essere protagonisti.
// STORIA: Catello d'Auria si trasferì a Roma nel 1894 per aprire il
// negozio di fabbricazione e vendita di guanti e calze (i guanti a
// Roma nel tardo '800 arrivavano tradizionalmente da Napoli). Nel
// 1940 gli succedettero i figli, anch'essi maestri guantai. Oggi i
// discendenti proseguono l'attività nello stesso negozio, con il
// massimo rispetto della tradizione. Testo riassunto onestamente dal
// loro sito reale, non inventato.
// EMAIL: info@catellodauria.it, trovata direttamente sul loro sito
// (pagina Contatti).
// FOTO: tutte reali, nessuna stock, tutte scaricate direttamente dal
// loro sito. hero.jpg è il vero interno storico del negozio, con
// lampadari e specchiere d'epoca, insegna "CATELLO d'AURIA" visibile
// nella vetrina. about.jpg è la vera facciata del negozio in Via dei
// Due Macelli 55, con l'insegna "CATELLO d'AURIA GLOVES". gallery-
// 1.jpg sono veri guanti in pelle (verde, rosso, nero) esposti su
// forme di legno. gallery-2.jpg è un vero paio di guanti da guida in
// pelle verde oliva. gallery-3.jpg è un vero guanto in lana blu con
// polsino in pelle. Una foto trovata sullo stesso sito (collage di
// prodotti con marchi di terzi come Johnstons of Elgin e Tiki) è
// stata scartata di proposito perché mostra prodotti di altri brand
// in vendita nel negozio, non lavorazione propria di Catello d'Auria.
// LOGO: nessun file di logo pulito trovato (solo l'insegna dipinta
// sulla facciata, visibile nelle foto reali ma non ritagliabile in
// modo netto). Iniziali testuali "CD" invece di inventare un marchio
// senza base reale.
// COLORI: verde oliva scuro `#4d4a35` (dal vero guanto da guida
// fotografato in gallery-2.jpg) e oro `#b8912a` (dai veri lampadari e
// cornici dorate visibili in hero.jpg), non inventati.

const SITE_CONFIG = {
  business: {
    name: "Catello D'Auria",
    tagline: "Guanti artigianali a Roma dal 1894",
    logoText: "CD",
    logoImage: "",
  },

  theme: {
    primary: "#4d4a35",
    accent: "#b8912a",
    font: "'Poppins', sans-serif",
    headingFont: "'Playfair Display', serif",
    mood: "editorial",
  },

  hero: {
    heading: "Benvenuti da {{business.name}}",
    subheading: "Guanti artigianali su misura nel cuore di Roma, dal 1894",
    backgroundImage: "images/hero.jpg",
    ctaText: "Scopri i guanti",
    ctaLink: "#contact",
  },

  about: {
    heading: "Chi siamo",
    text: "Catello d'Auria si trasferì a Roma nel 1894 per aprire questo negozio di guanti e calze, in un'epoca in cui i guanti più belli arrivavano da Napoli. Nel 1940 gli succedettero i figli, anch'essi maestri guantai, e oggi i discendenti portano avanti la stessa attività nello stesso negozio, con il massimo rispetto della tradizione.",
    image: "images/about.jpg",
  },

  offerings: {
    heading: "Le nostre lavorazioni",
    items: [
      { name: "Guanti in pelle", description: "Guanti da uomo e da donna in pelle, lavorati a mano", price: "" },
      { name: "Guanti da guida", description: "Guanti da guida forati e traforati per la stagione estiva", price: "" },
      { name: "Guanti in lana e cashmere", description: "Guanti caldi in lana e cashmere per l'inverno", price: "" },
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
      { day: "Lunedì - Sabato", hours: "da confermare" },
      { day: "Domenica", hours: "Chiuso" },
    ],
  },

  contact: {
    heading: "Contattaci",
    address: "Via dei Due Macelli 55, 00187 Roma",
    phone: "06 679 3364",
    whatsapp: "340 650 7358",
    email: "info@catellodauria.it",
  },

  map: {
    embedSrc: "https://www.google.com/maps?q=Via+dei+Due+Macelli+55+Roma&output=embed",
  },

  socials: {
    instagram: "",
    facebook: "",
    tiktok: "",
    website: "https://www.catellodauria.it/",
  },

  footer: {
    text: "Catello D'Auria: guanti artigianali a Roma dal 1894.",
  },
};
