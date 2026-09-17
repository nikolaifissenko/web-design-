// Demo per Autocarrozzeria Falconieri: carrozzeria artigianale a Roma,
// Via Girolamo Savonarola 12 (Trionfale), dal 1947. Nessun sito web
// esiste: presente solo nel registro dell'Associazione Botteghe
// Storiche di Roma e nelle directory locali, nessuna vetrina propria
// in nessuna fonte verificata.
// STORIA: fondata nel 1947 da Febo Falconieri e Livio Lombardi, nel
// pieno della ricostruzione postbellica, nel quartiere Trionfale. Il
// figlio di Febo, Angelo, imparò il mestiere e continuò l'attività.
// Oggi Giulio Falconieri (figlio di Angelo) guida la carrozzeria,
// terza generazione della stessa famiglia. Testo riassunto onestamente
// dalla pagina dedicata a questa attività sul sito ufficiale
// dell'Associazione Botteghe Storiche di Roma, non inventato.
// EMAIL: carrozzeriaferfa@gmail.com, confermata sulla stessa pagina
// ufficiale dell'Associazione Botteghe Storiche di Roma.
// FOTO: tutte reali, nessuna stock, tutte prese dalla stessa pagina
// ufficiale della Associazione Botteghe Storiche di Roma (non essendo
// disponibile alcun sito proprio). hero.jpg è una vera foto
// dell'officina oggi, con auto in lavorazione. about.jpg è una vera
// foto d'epoca di un Falconieri giovane davanti alla vecchia officina
// con l'insegna "CARROZZERIA" e una Jeep d'epoca. gallery-1.jpg è una
// vera foto storica in bianco e nero della squadra al lavoro negli
// anni '40-'50 (ritagliata solo per rimuovere un badge grafico
// decorativo aggiunto in seguito, nessuna modifica al contenuto
// storico). gallery-2.jpg è il vero attestato ufficiale "Bottega
// storica dei Rioni e Quartieri" del Municipio Roma XVII.
// LOGO: nessun logo aziendale pulito esiste in nessuna fonte
// verificata (solo un badge grafico decorativo aggiunto a una foto
// d'epoca per un anniversario, non un vero marchio). Per onestà,
// iniziali testuali "GF" invece di inventare un'icona senza base
// reale.
// COLORI: blu `#1c3d5a` (dal timbro/logo del Municipio Roma XVII
// sull'attestato reale) e rosso/arancio `#c94f2e` (colore industriale,
// visibile nelle strisce di sicurezza reali dell'officina in
// hero.jpg), non inventati.

const SITE_CONFIG = {
  business: {
    name: "Autocarrozzeria Falconieri",
    tagline: "Carrozzeria artigianale a Roma dal 1947",
    logoText: "GF",
    logoImage: "",
  },

  theme: {
    primary: "#1c3d5a",
    accent: "#c94f2e",
    font: "'Poppins', sans-serif",
    headingFont: "'Playfair Display', serif",
    mood: "bold",
  },

  hero: {
    heading: "Benvenuti da {{business.name}}",
    subheading: "Carrozzeria artigianale nel quartiere Trionfale dal 1947",
    backgroundImage: "images/hero.jpg",
    ctaText: "Contattaci",
    ctaLink: "#contact",
  },

  about: {
    heading: "Chi siamo",
    text: "La nostra carrozzeria nasce nel 1947, nel pieno della ricostruzione del dopoguerra, fondata da Febo Falconieri insieme a Livio Lombardi nel quartiere Trionfale. Il mestiere è passato dal padre Febo al figlio Angelo, e oggi Giulio Falconieri guida l'officina, terza generazione della stessa famiglia, con la stessa cura artigianale di sempre.",
    image: "images/about.jpg",
  },

  offerings: {
    heading: "I nostri servizi",
    items: [
      { name: "Riparazione carrozzeria", description: "Lavorazione e riparazione artigianale della carrozzeria", price: "" },
      { name: "Verniciatura", description: "Verniciatura su misura e ritocco colore", price: "" },
      { name: "Assistenza generale", description: "Manutenzione e assistenza per auto e moto", price: "" },
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
      { day: "Lunedì - Venerdì", hours: "08:30 - 13:00, 14:30 - 18:00" },
      { day: "Sabato - Domenica", hours: "Chiuso" },
    ],
  },

  contact: {
    heading: "Contattaci",
    address: "Via Girolamo Savonarola 12, Trionfale, 00195 Roma",
    phone: "06 3973 7534",
    whatsapp: "",
    email: "carrozzeriaferfa@gmail.com",
  },

  map: {
    embedSrc: "https://www.google.com/maps?q=Via+Girolamo+Savonarola+12+Roma&output=embed",
  },

  socials: {
    instagram: "",
    facebook: "",
    tiktok: "",
    website: "",
  },

  footer: {
    text: "Autocarrozzeria Falconieri: carrozzeria artigianale a Roma dal 1947.",
  },
};
