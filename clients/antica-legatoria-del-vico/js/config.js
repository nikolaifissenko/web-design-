// Demo per Antica Legatoria Del Vico — dati verificati: nome, indirizzo,
// telefono, email (dal loro sito attuale anticalegatoria-artigiana.it).
// SITO ATTUALE: vivo (HTTP 200) ma datato — generato da WordPress 5.7.1
// (versione di 5+ anni fa), e l'intera galleria fotografica è fatta di
// foto WhatsApp caricate senza alcuna cura ("WhatsApp-Image-2021-03-02...",
// nomi file originali non rinominati): nessun vero lavoro di design, solo
// un dump di foto reali. Ottima fonte di materiale autentico, pessima
// vetrina per un'attività che lavora per clienti come studi legali e
// collezionisti di libri antichi.
// LOGO: il loro logo reale ("Antica Legatoria Artigiana Del Vico" in un
// timbro ovale oro/cachi con indirizzo e telefono impressi sotto) non si
// adatta al cerchio del template — è una mezza-ellisse (arco), non un
// cerchio o quadrato, e ha indirizzo/telefono incollati sotto il
// marchio stesso (stesso problema di Trastevereinbed: non è un'icona
// isolabile). Invece di rinunciare e usare le iniziali, ridisegnata
// un'icona di un libro aperto — il simbolo più diretto per una
// legatoria — usando ESATTAMENTE i colori reali campionati dal loro
// timbro (oro/cachi `#b0a14e` di sfondo, crema `#fff090` delle pagine,
// nero/marrone scuro `#2b2418` del bordo e delle righe — lo stesso nero
// della riga sotto il loro timbro originale). File: images/logo.png,
// disegnato con PIL ImageDraw.
// FOTO: tutte reali, scaricate direttamente dal loro sito (nessuna
// stock). hero e gallery-2 mostrano rilegature e ferri da doratura
// reali del laboratorio; about mostra un libro reale a metà lavorazione
// con i segnalibri in stoffa cuciti a mano; gallery-1 è un volume
// liturgico rilegato in pelle rossa (Liturgia Horarum) uscito dal loro
// laboratorio; gallery-3 è un cassetto di caratteri tipografici/ferri
// da doratura, autentico strumento di lavoro. Nessuna foto stock usata
// su questo cliente.

const SITE_CONFIG = {
  business: {
    name: "Antica Legatoria Del Vico",
    tagline: "Rilegatura e restauro di libri a mano, a due passi da Piazza Navona",
    logoText: "DV",
    logoImage: "images/logo.png",
  },

  theme: {
    primary: "#8a1f1f",
    accent: "#b0a14e",
    font: "'Playfair Display', serif",
    mood: "editorial",
  },

  hero: {
    heading: "Benvenuti da {{business.name}}",
    subheading: "Rilegatura artigianale, restauro e doratura a mano, nel cuore del centro storico",
    backgroundImage: "images/hero.jpg",
    ctaText: "Richiedi un preventivo",
    ctaLink: "#contact",
  },

  about: {
    heading: "Chi siamo",
    text: "Nel vicolo che porta a Piazza Navona, Antica Legatoria Del Vico rilegata e restaura libri a mano da anni, con le tecniche tradizionali della legatoria artigiana: pelle, pergamena, tela e cartone, rifiniti con dorature e impressioni a caldo eseguite con ferri storici.",
    image: "images/about.jpg",
  },

  offerings: {
    heading: "Servizi",
    items: [
      { name: "Restauro libri antichi", description: "Restauro conservativo di volumi ed enciclopedie d'epoca", price: "" },
      { name: "Rilegatura artigianale", description: "In pelle, pergamena, tela o cartone, su misura", price: "" },
      { name: "Doratura e impressione a caldo", description: "Titoli e decorazioni in oro con ferri tradizionali", price: "" },
      { name: "Stemmi e personalizzazioni", description: "Impressione di stemmi e monogrammi su pelle", price: "" },
      { name: "Rilegatura tesi e cataloghi", description: "Rilegature su misura per tesi, cataloghi e raccolte", price: "" },
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
      { day: "Lunedì", hours: "da confermare" },
      { day: "Martedì", hours: "da confermare" },
      { day: "Mercoledì", hours: "da confermare" },
      { day: "Giovedì", hours: "da confermare" },
      { day: "Venerdì", hours: "da confermare" },
      { day: "Sabato", hours: "Chiuso" },
      { day: "Domenica", hours: "Chiuso" },
    ],
  },

  contact: {
    heading: "Contattaci",
    address: "Vicolo del Governo Vecchio, 5, 00186 Roma (Piazza Navona)",
    phone: "06 6869244",
    whatsapp: "",
    email: "delvicomaurizio@gmail.com",
  },

  map: {
    embedSrc: "https://www.google.com/maps?q=Vicolo+del+Governo+Vecchio+5+Roma&output=embed",
  },

  socials: {
    instagram: "",
    facebook: "",
    tiktok: "",
    website: "https://www.anticalegatoria-artigiana.it/",
  },

  footer: {
    text: "Antica Legatoria Del Vico — Rilegatura artigianale a Roma.",
  },
};
