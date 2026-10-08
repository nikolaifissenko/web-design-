// Demo per Trimani: vinai a Roma dal 1821, Via Goito 20. STORIA
// riassunta onestamente dal testo reale della loro pagina "L'Azienda"
// (trimani.com): "Si ha notizia certa che Francesco Trimani nel 1821
// già vendeva vino in un negozio su Via di Panico... In seguito...
// Pietro e Marco Trimani si stabilirono nell'attuale sede di Via
// Goito, 20 aperta nel 1876. E' il più antico negozio di vini di
// Roma... Nel 1991 al negozio di vini si è affiancato Trimani Il Wine
// Bar... il primo locale italiano a chiamarsi Wine Bar." Nessuna
// generazione specifica viene collegata a oggi: il sito nomina
// Francesco (1821) e poi Pietro e Marco (1876), ma non dichiara
// esplicitamente la catena generazionale fino ai titolari attuali,
// quindi non viene inventata (stessa cautela già applicata dopo
// l'errore di "suo nonno Luigi" in pianoforti-papi).
// EMAIL: info@trimani.com, trovata direttamente nel mailto della loro
// stessa homepage, confermata via curl diretto (200). Altri indirizzi
// reali trovati sulla pagina Contatti: francesco@, paolo@, carla@,
// ilwinebar@trimani.com.
// SITO ATTUALE: trimani.com, confermato dal vivo via curl: pagine
// .asp (tecnologia Microsoft classic ASP), layout a tabelle con
// immagini affettate e "spacer.gif" (tecnica da web design anni 2000),
// un vero errore di battitura ("pagameto" invece di "pagamento") e CSS
// per lo scrollbar di Internet Explorer, tutto verificato direttamente
// nell'HTML, non solo un'impressione soggettiva.
// FOTO: nessuna foto reale dell'interno o del negozio è stata trovata
// né sul loro sito (solo banner testuali e grafiche promozionali) né
// in articoli di stampa consultati (Gambero Rosso, Scatti di Gusto),
// che descrivono a parole il bancone e la fontana in marmo di Carrara
// ma non includono foto incorporabili. Per onestà, seguendo lo stesso
// principio già usato per altri lead (es. comandini, troncarelli),
// si usano foto stock Unsplash dichiarate: hero.jpg (Liv Kao), about.jpg
// (Laura Beames), gallery-1.jpg (Roland Telegdi), tutte con licenza
// gratuita Unsplash, scelte per non mostrare in primo piano l'etichetta
// di un singolo produttore specifico.
// LOGO: reale, trovato sul loro sito: un'illustrazione a mano di un
// grappolo d'uva stilizzato come mani che circonda una bottiglia con
// scritta "TRIMANI", un'icona genuinamente separabile. Ritagliata al
// contenuto (esclusa la scritta più piccola "VINAI IN ROMA DAL 1821")
// e centrata su sfondo ivory circolare, stesso schema delle altre
// icone reali (es. massoni, stilo-fetti).
// COLORI: rosso `#db021f`, campionato pixel-per-pixel dal vero file
// del logo.
// MOOD: editorial (205 anni di storia continua, il negozio di vini
// più antico di Roma, documentato testualmente dal loro stesso sito),
// per la linea guida della skill professional-web-design.

const SITE_CONFIG = {
  business: {
    name: "Trimani",
    tagline: "Vinai a Roma dal 1821",
    logoText: "T",
    logoImage: "images/logo.png",
  },

  theme: {
    primary: "#db021f",
    accent: "#2c2c2c",
    font: "'Poppins', sans-serif",
    headingFont: "'Playfair Display', serif",
    mood: "editorial",
  },

  hero: {
    heading: "Benvenuti da {{business.name}}",
    subheading: "Il più antico negozio di vini di Roma, in Via Goito dal 1876",
    backgroundImage: "images/hero.jpg",
    ctaText: "Contattaci",
    ctaLink: "#contact",
  },

  about: {
    heading: "Chi siamo",
    text: "Si ha notizia certa che Francesco Trimani nel 1821 già vendeva vino in un negozio su Via di Panico. In seguito, Pietro e Marco Trimani si stabilirono nell'attuale sede di Via Goito 20, aperta nel 1876: il più antico negozio di vini di Roma. Nel 1991 al negozio si è affiancato il Wine Bar, il primo locale italiano a chiamarsi così.",
    image: "images/about.jpg",
  },

  offerings: {
    heading: "Cosa offriamo",
    items: [
      { name: "Vini italiani e internazionali", description: "Circa 6.000 referenze tra vini, spumanti e Champagne", price: "" },
      { name: "Liquori e distillati", description: "Selezione di liquori, distillati e birre", price: "" },
      { name: "Trimani Il Wine Bar", description: "Degustazioni e corsi di avvicinamento al vino, Via Cernaia 37/b", price: "" },
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
      { day: "Lunedì - Sabato", hours: "da confermare" },
      { day: "Domenica", hours: "Chiuso" },
    ],
  },

  contact: {
    heading: "Contattaci",
    address: "Via Goito 20, 00185 Roma",
    phone: "06 4469661",
    whatsapp: "",
    email: "info@trimani.com",
  },

  map: {
    embedSrc: "https://www.google.com/maps?q=Via+Goito+20+Roma&output=embed",
  },

  socials: {
    instagram: "",
    facebook: "https://www.facebook.com/trimanivinai",
    tiktok: "",
    website: "https://www.trimani.com/",
  },

  footer: {
    text: "Trimani: vinai a Roma dal 1821.",
  },
};
