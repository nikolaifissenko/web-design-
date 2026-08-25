// Demo per Tinto Lavanderia — dati verificati: nome, indirizzo, telefono,
// email, elenco servizi (dal sito attuale tintolavanderia.it/contatti/).
// PLACEHOLDER: nessuna foto reale disponibile — le immagini in images/ sono
// segnaposto (etichettate "FOTO REALE QUI"). Sostituire prima di inviare il
// link al cliente. Orari NON confermati online: chiedere in negozio e
// compilare hours.schedule prima di pubblicare (vedi _lead.md) — lasciato
// vuoto per ora, la sezione orari resta nascosta finché non lo si compila.

const SITE_CONFIG = {
  business: {
    name: "Tinto Lavanderia",
    tagline: "Lavanderia, tintoria e riparazioni sartoriali a Roma",
    logoText: "TL",
    logoImage: "",
  },

  theme: {
    primary: "#1f6f8b",
    accent: "#1c2b33",
    font: "'Poppins', sans-serif",
  },

  hero: {
    heading: "Benvenuti da {{business.name}}",
    subheading: "Lavaggio, tintoria, riparazioni sartoriali e lavaggio tendaggi — ritiro e consegna a domicilio",
    backgroundImage: "images/hero-placeholder.svg",
    ctaText: "Contattaci",
    ctaLink: "#contact",
  },

  about: {
    heading: "Chi siamo",
    text: "Tinto Lavanderia è un punto di riferimento per la cura dei tessuti a Roma: lavaggio, tintoria, riparazioni sartoriali e lavaggio tendaggi, con servizio di ritiro e consegna a domicilio.",
    image: "images/about-placeholder.svg",
  },

  offerings: {
    heading: "Servizi",
    items: [
      { name: "Lavaggio e stiratura", description: "Capi e biancheria trattati con cura", price: "" },
      { name: "Tintoria", description: "Pulizia a secco per ogni tipo di tessuto", price: "" },
      { name: "Riparazioni sartoriali", description: "Orli, aggiustamenti e piccole riparazioni", price: "" },
      { name: "Lavaggio tendaggi", description: "Tende e tessuti per la casa", price: "" },
      { name: "Ritiro e consegna a domicilio", description: "Comodo servizio porta a porta", price: "" },
    ],
  },

  gallery: {
    heading: "Galleria",
    images: ["images/gallery-1.svg", "images/gallery-2.svg", "images/gallery-3.svg"],
  },

  hours: {
    heading: "Orari",
    schedule: [],
  },

  contact: {
    heading: "Contattaci",
    address: "Via di Grottarossa, 43/45, 00189 Roma",
    phone: "328 659 3595",
    whatsapp: "328 659 3595",
    email: "hevelynyuliana@hotmail.com",
  },

  map: {
    embedSrc: "https://www.google.com/maps?q=Via+di+Grottarossa+43+Roma&output=embed",
  },

  socials: {
    instagram: "",
    facebook: "https://www.facebook.com/100079617430821",
    tiktok: "",
    website: "",
  },

  footer: {
    text: "Tinto Lavanderia — Roma",
  },
};
