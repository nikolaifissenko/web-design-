// Demo per Bertoletti 1882 (Via Vittoria, 16/a, Roma, tra Piazza di Spagna
// e Via del Corso). Pellicceria storica, la piu antica di Roma, fondata nel
// 1882 da Francesco Bertoletti, oggi alla quarta generazione. Hanno un sito
// proprio (bertolettipelliccerie.it) ma datato, WordPress base non
// aggiornato dal 2018 circa, confermato con verifica diretta.
//
// CONTATTI: email REALE confermata direttamente sul loro sito
// (bertolettipelliccerie@gmail.com), non trovata solo su un aggregatore
// terzo. Telefono reale anch'esso dal sito. Instagram (@bertoletti_fur) e
// Facebook (Bertoletti1882) reali e confermati, entrambi linkati dal loro
// stesso sito.
//
// LOGO: REALE. Il loro sito ha gia una versione quadrata pre-ritagliata
// del logo (cropped-logo-2-400x400.png: l'icona a piuma/svolazzo rosso e
// nero con "1882", senza la scritta "Bertoletti" per esteso), usata cosi
// com'e, adatta perfettamente allo slot circolare del template. Nessuna
// ricostruzione necessaria.
//
// COLORI: REALI. Rosso `#BC0C06` estratto dal CSS del loro sito (unico
// colore custom oltre alla palette di default di WordPress), abbinato al
// nero del logo.
//
// FOTO: about e gallery-1/2 sono REALI, prese dal loro stesso sito.
// about.jpg (home-storia.jpg sul loro sito) e una fotografia d'epoca in
// bianco e nero, coerente con la storia editoriale/fashion della casa
// (citata nelle fonti: sfilate a Mosca 1957, foto di Bianca Jagger e Pat
// Cleveland by Johnny Moncada/Bob Krieger). gallery-1.jpg (home-moda.jpg)
// e un'altra foto editoriale reale con una pelliccia del marchio.
// gallery-2.jpg (6-1.jpg) e una foto reale di capi appesi in negozio.
// hero.jpg e invece STOCK (Unsplash, Alexis Fauvet, foto
// 1768745294179-693a07a3f054, licenza Unsplash, nessun marchio visibile):
// il sito non ha una foto di apertura abbastanza grande/pulita da usare
// come sfondo hero, e Instagram/Facebook sono irraggiungibili da fetch
// automatico per lo stesso motivo noto (client-rendered, nessun URL
// statico). Documentato onestamente, non presentato come reale.
//
// PREZZI: non pubblicati da nessuna parte (normale per l'alta moda su
// misura), lasciati vuoti.
//
// ORARI: non confermati sul sito visitato. Quelli sotto sono plausibili
// per una boutique di questo tipo in zona ma NON verificati, da
// confermare per telefono prima di pubblicare online se il cliente compra.
//
// MOOD: "vintage", pellicceria dal 1882, quarta generazione, con un vero
// archivio fotografico editoriale d'epoca: il mood con cornici sepia/
// bordo bianco e la serif calda si sposa naturalmente con le foto reali
// che abbiamo, meglio di "boutique" (troppo minimale per una storia così
// densa) o "editorial" (già usato per gli artigiani-restauratori, qui il
// registro è più moda storica che bottega-laboratorio).

const SITE_CONFIG = {
  business: {
    name: "Bertoletti 1882",
    tagline: "Pellicceria storica a Roma dal 1882, quarta generazione",
    logoText: "B",
    logoImage: "images/logo.png",
  },

  theme: {
    primary: "#BC0C06",
    accent: "#1a1a1a",
    font: "'Poppins', sans-serif",
    headingFont: "'Yeseva One', serif",
    mood: "vintage",
  },

  hero: {
    heading: "Benvenuti da {{business.name}}",
    subheading: "La più antica pellicceria di Roma, dal 1882 alla quarta generazione",
    backgroundImage: "images/hero.jpg",
    ctaText: "Contattaci",
    ctaLink: "#contact",
  },

  about: {
    heading: "Chi siamo",
    text: "Bertoletti 1882 è la più antica pellicceria di Roma, fondata da Francesco Bertoletti e oggi guidata dalla quarta generazione della famiglia. Lavorazione, rimessa a modello, custodia e restyling di pellicce, tutto realizzato a mano a Roma, con la stessa cura artigianale di sempre.",
    image: "images/about.jpg",
  },

  offerings: {
    heading: "I nostri servizi",
    items: [
      { name: "Rimessa a modello", description: "Restyling e ammodernamento di pellicce", price: "" },
      { name: "Confezione su misura", description: "Capi in pelliccia realizzati a mano", price: "" },
      { name: "Riparazione e manutenzione", description: "Cuciture, foderature, sistemazione", price: "" },
      { name: "Custodia stagionale", description: "Conservazione in ambiente controllato", price: "" },
      { name: "Pulizia specializzata", description: "Trattamenti dedicati per pelliccia", price: "" },
    ],
  },

  gallery: {
    heading: "Galleria",
    images: ["images/gallery-1.jpg", "images/gallery-2.jpg"],
  },

  hours: {
    heading: "Orari",
    schedule: [
      { day: "Lunedì - Venerdì", hours: "10:00 - 13:30, 15:30 - 19:30" },
      { day: "Sabato", hours: "10:00 - 13:30" },
      { day: "Domenica", hours: "Chiuso" },
    ],
  },

  contact: {
    heading: "Contattaci",
    address: "Via Vittoria, 16/a, 00187 Roma",
    phone: "06 68809946",
    whatsapp: "",
    email: "bertolettipelliccerie@gmail.com",
  },

  map: {
    embedSrc: "https://www.google.com/maps?q=Via+Vittoria+16a+Roma&output=embed",
  },

  socials: {
    instagram: "https://www.instagram.com/bertoletti_fur",
    facebook: "https://www.facebook.com/Bertoletti1882",
    tiktok: "",
    website: "https://www.bertolettipelliccerie.it/",
  },

  footer: {
    text: "Bertoletti 1882: pellicceria storica a Roma dal 1882.",
  },
};
