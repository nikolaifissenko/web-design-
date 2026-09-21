// Demo per La Bottega della Sedia (Barbara Berni): laboratorio di
// impagliatura sedie e restauro mobili a Roma, Vicolo della Torretta
// 51 (Campo Marzio, vicino Piazza di Spagna). Nessun sito funzionante
// esiste: il dominio proprio (labottegadellasediaroma.com) non
// risolve più (DNS morto, verificato direttamente), Facebook e
// Instagram esistono ma sono irraggiungibili da fetch automatico come
// da regola nota.
// STORIA: nessun anno di fondazione o storia di famiglia trovato in
// nessuna fonte verificata (solo descrizione dei servizi), quindi non
// viene inventata alcuna storia. Il testo resta ancorato a ciò che è
// verificabile: il mestiere di Barbara Berni, impagliatura di sedie,
// poltrone, dondoli, sdraio e divani in stile Vienna, stampe romane in
// cordone e stile Vall'Ombrosa, più restauro e lucidatura mobili.
// EMAIL: bernibarbara@hotmail.it, confermata identica su più fonti
// indipendenti (Nextdoor, PagineBianche, PagineGialle), e coerente con
// il nome reale della titolare (Barbara Berni), non una fonte singola
// non verificata.
// FOTO: NESSUNA foto reale di questa bottega specifica è stata
// trovata, dopo verifica seria: sito proprio morto, Facebook/Instagram
// irraggiungibili da fetch automatico (regola nota), nessun articolo
// di stampa dedicato trovato. Usate quindi foto oneste del mestiere
// stesso, non di questa bottega: hero.jpg e about.jpg sono foto reali
// di impagliatura di sedie in corso (Wikimedia Commons, licenza
// libera), gallery-1.jpg è una vera seduta impagliata in paglia stile
// Vall'Ombrosa (Wikimedia Commons). Sono foto reali del mestiere, non
// generate né stock fotografico generico, ma non ritraggono la
// bottega di Barbara Berni specificamente: dichiarato onestamente qui
// e in _lead.md.
// LOGO: nessun logo esiste (attività a nome personale, nessun sito
// attivo da cui recuperarlo). Iniziali testuali "BS" invece di
// inventare un marchio senza alcuna base reale.
// COLORI: oro paglierino `#b8823c` e marrone noce `#4a3728`,
// scelti per richiamare onestamente i materiali naturali del mestiere
// (paglia, canna, legno) visibili nelle foto usate, non campionati da
// un logo o sito reale (nessuno dei due esiste).

const SITE_CONFIG = {
  business: {
    name: "La Bottega della Sedia",
    tagline: "Impagliatura sedie e restauro mobili a Roma",
    logoText: "BS",
    logoImage: "",
  },

  theme: {
    primary: "#b8823c",
    accent: "#4a3728",
    font: "'Poppins', sans-serif",
    headingFont: "'Playfair Display', serif",
    mood: "rustic",
  },

  hero: {
    heading: "Benvenuti da {{business.name}}",
    subheading: "Impagliatura di sedie e restauro mobili, a mano, nel cuore di Roma",
    backgroundImage: "images/hero.jpg",
    ctaText: "Contattaci",
    ctaLink: "#contact",
  },

  about: {
    heading: "Chi siamo",
    text: "Barbara Berni si occupa di impagliatura di sedie, poltrone, dondoli, sdraio e divani in stile Vienna, stampe romane in cordone e stile Vall'Ombrosa. La bottega si occupa anche di restauro e lucidatura di mobili, credenze, tavoli in legno, scrivanie e cassettoni antichi, con ritiro e consegna a domicilio e preventivi gratuiti.",
    image: "images/about.jpg",
  },

  offerings: {
    heading: "I nostri servizi",
    items: [
      { name: "Impagliatura sedie", description: "Sedie, poltrone, dondoli e sdraio in stile Vienna, cordone e Vall'Ombrosa", price: "" },
      { name: "Restauro mobili", description: "Restauro e lucidatura di mobili, credenze, tavoli e cassettoni antichi", price: "" },
      { name: "Ritiro e consegna", description: "Ritiro e consegna a domicilio, preventivo gratuito", price: "" },
    ],
  },

  gallery: {
    heading: "Galleria",
    images: [
      "images/gallery-1.jpg",
    ],
  },

  hours: {
    heading: "Orari",
    schedule: [
      { day: "Lunedì - Venerdì", hours: "da confermare" },
      { day: "Sabato", hours: "da confermare" },
      { day: "Domenica", hours: "Chiuso" },
    ],
  },

  contact: {
    heading: "Contattaci",
    address: "Vicolo della Torretta 51, 00186 Roma",
    phone: "06 6871021",
    whatsapp: "349 839 5234",
    email: "bernibarbara@hotmail.it",
  },

  map: {
    embedSrc: "https://www.google.com/maps?q=Vicolo+della+Torretta+51+Roma&output=embed",
  },

  socials: {
    instagram: "",
    facebook: "https://www.facebook.com/bottegadellasedia/",
    tiktok: "",
    website: "",
  },

  footer: {
    text: "La Bottega della Sedia: impagliatura sedie e restauro mobili a Roma.",
  },
};
