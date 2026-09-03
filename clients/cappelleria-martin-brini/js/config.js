// Demo per La Cappelleria di Elena Martin Brini (Via Ancona 24, Roma,
// Bottega Storica dal 1936). Il loro sito reale (lacappelleria.it) esiste
// ancora online ma è un export HTML di Microsoft Word/FrontPage del 2006
// (charset windows-1252, tag VML "behavior:url(#default#VML)", cartella
// "index_file" con nomi tipo image339.jpg, nessun tag viewport, nessun
// CSS moderno) — non un semplice sito "vecchio", è letteralmente un
// documento Word salvato come pagina web. Email reale confermata:
// lacappelleria@hotmail.it (anche su turismoroma.it, fonte indipendente).
// Nessun Instagram/Facebook trovato: solo email e telefono come canali.
//
// STORIA: presa direttamente dal testo del loro sito reale. Fondata nel
// 1936 vicino Porta Pia da Lina Martin (madre di Elena, attuale
// titolare) come "Cappelleria Fulgor". Restauro cappelli storicamente
// affidato a due figure, il cappellaio Dante e la guarnitrice Lidia, con
// strumenti artigianali in legno di fine '800 ancora in uso oggi
// (fotografati, vedi gallery). 90 anni di attività nel 2026 (1936+90).
//
// FOTO: tutte reali, scaricate direttamente da lacappelleria.it/index_file/
// (non stock). hero.jpg = image339.jpg, foto reale dell'interno del
// negozio con i cappelli esposti nelle vetrine. about.jpg = image345.jpg,
// ritratto d'epoca in bianco e nero della fondatrice Lina Martin.
// gallery-1..4 = image845/524/441/333.jpg, macro reali degli strumenti
// artigianali in legno (forme, ferri da stiro per feltro) e dei cappelli
// finiti sui blocchi di legno. Nessuna immagine stock usata.
//
// LOGO: nessun logo vettoriale/pulito trovato sul sito reale (le uniche
// grafiche sono icone di navigazione GIF non riutilizzabili). Per questo,
// come da branding-extraction.md, è stato disegnato da zero un'icona a
// forma di bombetta (cappello), non generata da IA, con colori campionati
// pixel per pixel dalle foto reali: nero/marrone scuro del feltro
// (~#18191d), oro della fascia (~#b8925a campionato dal nastro sui
// cappelli in gallery-2), su fondo crema (~#d8c9ba, dal tessuto damascato
// visibile sullo sfondo delle foto prodotto). Vedi images/logo.svg.

const SITE_CONFIG = {
  business: {
    name: "La Cappelleria",
    tagline: "Cappelli artigianali e restauro dal 1936, a due passi da Porta Pia",
    logoText: "LC",
    logoImage: "images/logo.svg",
  },

  theme: {
    primary: "#2b1f16",
    accent: "#b8925a",
    font: "'Poppins', sans-serif",
    headingFont: "'Yeseva One', serif",
    mood: "vintage",
  },

  hero: {
    heading: "Benvenuti da {{business.name}}",
    subheading: "Novant'anni di cappelli fatti e restaurati a mano, nello stesso negozio vicino Porta Pia",
    backgroundImage: "images/hero.jpg",
    ctaText: "Vieni a trovarci",
    ctaLink: "#contact",
  },

  about: {
    heading: "Chi siamo",
    text: "La Cappelleria nasce nel 1936 come Cappelleria Fulgor, fondata da Lina Martin nel cuore di Roma, vicino a Porta Pia. Oggi la porta avanti sua figlia Elena, come modista: crea cappelli su misura e restaura quelli che le vengono affidati, con la stessa cura di allora. Il restauro è ancora un lavoro fatto a mano, con gli stessi strumenti artigianali in legno realizzati alla fine dell'Ottocento, tramandati insieme al mestiere.",
    image: "images/about.jpg",
  },

  offerings: {
    heading: "I nostri servizi",
    items: [
      { name: "Cappelli su misura", description: "Creati ex novo da Elena, modista, su richiesta personale", price: "" },
      { name: "Restauro cappelli", description: "Rimessi a nuovo con gli strumenti artigianali originali di fine '800", price: "" },
      { name: "Vetrina Donna", description: "Cappelli e accessori da donna, classici e su misura", price: "" },
      { name: "Vetrina Uomo", description: "Cappelli da uomo, feltro e paglia, per ogni stagione", price: "" },
    ],
  },

  gallery: {
    heading: "Galleria",
    images: ["images/gallery-1.jpg", "images/gallery-2.jpg", "images/gallery-3.jpg", "images/gallery-4.jpg"],
  },

  hours: {
    heading: "Orari",
    schedule: [
      { day: "Lunedì - Sabato", hours: "9:30 - 13:00, 16:00 - 19:30" },
      { day: "Domenica", hours: "Chiuso" },
    ],
  },

  contact: {
    heading: "Contattaci",
    address: "Via Ancona, 24, 00198 Roma",
    phone: "06 4424 9738",
    whatsapp: "",
    email: "lacappelleria@hotmail.it",
  },

  map: {
    embedSrc: "https://www.google.com/maps?q=Via+Ancona+24+Roma&output=embed",
  },

  socials: {
    instagram: "",
    facebook: "",
    tiktok: "",
    website: "",
  },

  footer: {
    text: "La Cappelleria: cappelli artigianali e restauro a Roma dal 1936.",
  },
};
