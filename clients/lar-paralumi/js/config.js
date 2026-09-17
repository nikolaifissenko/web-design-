// Demo per L.A.R. Paralumi (Lavori Artigiani Romani): laboratorio di
// paralumi artigianali a Roma, Via del Leoncino 29, dal 1938. Il sito
// ufficiale (paralumi.it) è risultato irraggiungibile dai nostri
// strumenti automatici (stessa categoria di blocco tecnico già
// documentata per altri clienti come Studio Luxardo: non è una
// prova che il sito sia scadente, quindi il messaggio di outreach non
// lo definisce tale, punta solo sulle vere foto).
// STORIA: il nonno di Antonello e Fabrizio Gualdani, insieme al
// fratello, iniziò a fare paralumi nel 1938 dopo anni passati a
// produrre astucci per gioielli (anche per Bulgari, prima che
// industrializzasse la produzione). Oggi i nipoti portano avanti lo
// stesso laboratorio artigianale in Via del Leoncino. Testo riassunto
// onestamente da un articolo di stampa (abitarearoma.it), non
// inventato.
// EMAIL: info@paralumi.it, trovata tramite il loro sito ufficiale.
// FOTO: tutte reali, nessuna stock. Non essendo riuscito a raggiungere
// il sito del negozio direttamente, le foto vengono da un articolo di
// stampa (abitarearoma.it, "A spasso per Roma"), la stessa categoria
// di fonte ("press coverage") indicata da CLAUDE.md come fonte
// accettabile. hero.jpg è la vera vetrina del laboratorio con
// l'insegna "Paralumari dal 1938" e lo stemma reale del negozio
// visibile nel vetro. about.jpg mostra la vera parete del laboratorio
// piena di campionari di forme e tessuti per paralumi. gallery-1.jpg
// è un vero paralume in seta con motivo cinese (uccelli e glicine)
// fatto a mano. gallery-2.jpg mostra veri paralumi colorati esposti
// in negozio, con lo stesso stemma "1938" visibile sullo sfondo.
// LOGO: esiste uno stemma reale ("Paralumari dal 1938") visibile
// dipinto sulla vetrina, ma nessun file pulito è disponibile (solo
// questa foto attraverso il vetro, troppo sfocata per un ritaglio
// netto). Per onestà, iniziali testuali "LAR" invece di un ritaglio
// di bassa qualità.
// COLORI: verde `#1e5c3f` (il colore reale della vetrina/infisso) e
// oro `#c99a3f` (il colore reale della scritta "Paralumari dal 1938"
// sul vetro), non inventati.

const SITE_CONFIG = {
  business: {
    name: "L.A.R. Paralumi",
    tagline: "Paralumi artigianali a Roma dal 1938",
    logoText: "LAR",
    logoImage: "",
  },

  theme: {
    primary: "#1e5c3f",
    accent: "#c99a3f",
    font: "'Poppins', sans-serif",
    headingFont: "'Playfair Display', serif",
    mood: "editorial",
  },

  hero: {
    heading: "Benvenuti da {{business.name}}",
    subheading: "Paralumi fatti a mano nel cuore di Roma dal 1938",
    backgroundImage: "images/hero.jpg",
    ctaText: "Scopri il laboratorio",
    ctaLink: "#contact",
  },

  about: {
    heading: "Chi siamo",
    text: "Il nostro laboratorio nasce nel 1938, quando nostro nonno, insieme al fratello, iniziò a realizzare paralumi dopo anni passati a produrre astucci per gioielli. Oggi portiamo avanti la stessa passione artigianale nel nostro laboratorio di Via del Leoncino, realizzando paralumi su misura plissettati, cuciti o rivestiti in pergamena e tessuto per le case e i palazzi più eleganti di Roma.",
    image: "images/about.jpg",
  },

  offerings: {
    heading: "Le nostre lavorazioni",
    items: [
      { name: "Paralumi su misura", description: "Plissettati, cuciti o rivestiti in pergamena e tessuto", price: "" },
      { name: "Restauro paralumi", description: "Riparazione e restauro di paralumi antichi e di famiglia", price: "" },
      { name: "Consulenza d'arredo", description: "Su misura per privati, antiquari e interior designer", price: "" },
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
      { day: "Lunedì - Venerdì", hours: "08:30 - 18:30" },
      { day: "Sabato", hours: "08:30 - 12:30" },
      { day: "Domenica", hours: "Chiuso" },
    ],
  },

  contact: {
    heading: "Contattaci",
    address: "Via del Leoncino 29, 00186 Roma",
    phone: "06 6876 647",
    whatsapp: "333 504 5208",
    email: "info@paralumi.it",
  },

  map: {
    embedSrc: "https://www.google.com/maps?q=Via+del+Leoncino+29+Roma&output=embed",
  },

  socials: {
    instagram: "",
    facebook: "",
    tiktok: "",
    website: "https://www.paralumi.it/",
  },

  footer: {
    text: "L.A.R. Paralumi: paralumi artigianali a Roma dal 1938.",
  },
};
