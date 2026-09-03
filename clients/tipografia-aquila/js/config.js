// Demo per Tipografia Aquila dal 1925 (Via Nola 2, San Giovanni, Roma).
// Il loro sito reale (tipografiaaquila.it) è online ma dated: nessun tag
// viewport trovato, layout basato su gallerie di immagini e navigazione
// vecchio stile, non responsive per mobile — confermato con WebFetch.
// Email reale confermata sul sito: info@tipografiaaquila.it. Telefono
// 06 7014794, WhatsApp +39 333 987 2069. Instagram reale confermato:
// @aquilareale1925.
//
// STORIA: presa direttamente dal loro sito reale. Fondata nel 1925 da
// Tommaso Riccia (prima nel quartiere Pigneto), trasferita nella sede
// attuale di Via Nola 2 nel 1929. Portata avanti dal figlio Claudio
// Riccia, poi da sua moglie Tina e il figlio Marco — quattro generazioni
// nella stessa famiglia. 101 anni di attività nel 2026.
//
// FOTO: tutte reali, scaricate direttamente da tipografiaaquila.it (non
// stock). hero.jpg = foto reale dell'interno del negozio, con il tappeto
// "Tipografia Aquila 1925" e l'aquila impagliata appesa, elemento reale
// del loro brand. about.jpg = foto storica reale della sede in Via Nola
// del 1929, ritagliata per rimuovere la scritta rossa sovrapposta
// ("La sede della Tipografia Aquila") presente nell'originale, per un
// look più pulito — la didascalia informativa è già ripresa nel testo
// del sito. gallery-1/2 = ritratti storici reali dei fondatori (Tommaso
// Riccia da giovane al torchio; probabilmente Claudio Riccia, suo
// figlio). gallery-3 = macro reale di una pressa tipografica a caratteri
// mobili. gallery-4 = foto reale dell'interno del laboratorio oggi,
// ancora pieno di macchine da stampa d'epoca funzionanti. Nessuna
// immagine stock usata.
//
// LOGO: nessun logo vettoriale pulito trovato (solo un logo bitmap
// rotto/vuoto nel codice del loro sito). Per questo, come da
// branding-extraction.md, è stata disegnata da zero un'icona ad aquila
// ad ali spiegate — coerente col nome "Aquila" e con l'aquila impagliata
// reale visibile nel negozio (vedi hero.jpg) — usando il rosso reale del
// loro tappeto/insegna (~#c51404, campionato pixel per pixel dalla foto
// storica) e un oro caldo (~#f2c94c) per l'aquila stessa. Vedi
// images/logo.svg.

const SITE_CONFIG = {
  business: {
    name: "Tipografia Aquila",
    tagline: "Stampa artigianale a Roma dal 1925, quattro generazioni della stessa famiglia",
    logoText: "TA",
    logoImage: "images/logo.svg",
  },

  theme: {
    primary: "#c51404",
    accent: "#f2c94c",
    font: "'Poppins', sans-serif",
    headingFont: "'Playfair Display', serif",
    mood: "editorial",
  },

  hero: {
    heading: "Benvenuti da {{business.name}}",
    subheading: "Stampa a caratteri mobili e digitale, nello stesso laboratorio di Via Nola dal 1929",
    backgroundImage: "images/hero.jpg",
    ctaText: "Vieni a trovarci",
    ctaLink: "#contact",
  },

  about: {
    heading: "Chi siamo",
    text: "Tipografia Aquila nasce nel 1925 nel quartiere Pigneto per mano di Tommaso Riccia, e si trasferisce nella sede attuale di Via Nola, a San Giovanni, nel 1929. Da allora è rimasta nella stessa famiglia per quattro generazioni: dal figlio Claudio fino a Tina e Marco, oggi alla guida. Tra le macchine da stampa d'epoca ancora funzionanti convivono la tradizione della stampa a caratteri mobili e i servizi digitali di oggi.",
    image: "images/about.jpg",
  },

  offerings: {
    heading: "I nostri servizi",
    items: [
      { name: "Stampa digitale e letterpress", description: "Dalla tesi di laurea ai biglietti da visita, con consegna in 24h", price: "" },
      { name: "Partecipazioni e inviti", description: "Partecipazioni di nozze e biglietti per ogni occasione", price: "" },
      { name: "Timbri e targhe", description: "Realizzazione di timbri, targhe e cartellonistica su misura", price: "" },
      { name: "Grafica e loghi", description: "Progettazione grafica e realizzazione di loghi aziendali", price: "" },
    ],
  },

  gallery: {
    heading: "Galleria",
    images: ["images/gallery-1.jpg", "images/gallery-2.jpg", "images/gallery-3.jpg", "images/gallery-4.jpg"],
  },

  hours: {
    heading: "Orari",
    schedule: [
      { day: "Lunedì - Venerdì", hours: "9:00 - 13:00, 15:30 - 19:00" },
      { day: "Sabato", hours: "9:00 - 13:00" },
      { day: "Domenica", hours: "Chiuso" },
    ],
  },

  contact: {
    heading: "Contattaci",
    address: "Via Nola, 2 (angolo Via La Spezia, 57), 00182 Roma",
    phone: "06 7014794",
    whatsapp: "+39 333 987 2069",
    email: "info@tipografiaaquila.it",
  },

  map: {
    embedSrc: "https://www.google.com/maps?q=Via+Nola+2+Roma&output=embed",
  },

  socials: {
    instagram: "https://www.instagram.com/aquilareale1925/",
    facebook: "",
    tiktok: "",
    website: "https://www.tipografiaaquila.it/",
  },

  footer: {
    text: "Tipografia Aquila: stampa artigianale a Roma dal 1925.",
  },
};
