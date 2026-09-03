// Demo per Trattoria Da Romolo alla Mole Adriana (Vicolo del Campanile
// 12-13, Borgo Pio, Roma). Fondata nel 1927, oggi guidata dalla famiglia
// Perilli dal 2002, trasferita nel 2015 nella sede attuale a un passo dal
// Passetto e dalle mura di Castel Sant'Angelo. Membro dell'Associazione
// Negozi Storici d'Eccellenza (badge trovato sul loro sito, link diretto
// alla scheda dell'associazione confermato). Il sito reale
// (daromoloallamoleadriana.it) è online ma datato: jQuery 1.11.2
// (2014), layout fisso a 960px non responsive, spinner di caricamento
// artigianale, banner cookie fatto in casa, blocchi immagine con float.
//
// FOTO: tutte reali, nessuna stock. Scaricate direttamente dal loro
// sito (cartella /immagini/): sala da pranzo con muro romano a vista
// (hero.jpg = img1), sala con vista sul vicolo/muro antico (about.jpg =
// img2sx), pentole e mestoli in cucina (gallery-1 = img2dx), cantina
// vini (gallery-2 = img3), terrazza serale (gallery-3 = img4),
// dettaglio lampada e insegna "Trattoria" (gallery-4 = img5dx). Non è
// stato necessario ricorrere a TripAdvisor/Yelp: il sito stesso aveva
// materiale sufficiente e di buona qualità.
//
// LOGO: esiste un vero marchio grafico sul loro sito (immagini/logo.png),
// un'illustrazione bordeaux a china di Castel Sant'Angelo (la "Mole
// Adriana" da cui il nome) con colline e alberi, dentro una cornice
// rettangolare decorativa — lo stesso disegno appare anche in testa al
// loro PDF del menù. È rettangolare e troppo dettagliato per lo slot
// circolare 40x40 del template (il ritaglio taglierebbe la scena).
// Come da branding-extraction.md, non si è passati a logoText: è stata
// ridisegnata un'icona pulita nello stesso spirito (il profilo del
// Castel Sant'Angelo con merli, statua e cipressi ai lati), stesso
// tratto a china, colore bordeaux campionato pixel per pixel dal loro
// logo reale (~#7f1418) su fondo crema. L'accento tan (#b9977b) è preso
// dalla fascia colorata del loro sito attuale (stesso colore, verificato
// nel CSS) e ricompare anche nelle lampade a sospensione delle foto
// reali. Vedi images/logo.svg.
//
// MENU: prezzi e piatti reali, presi dal PDF del menù italiano linkato
// dal loro sito (menu_sito_italiano.pdf), non inventati.
//
// CONTATTI: email info@daromoloallamoleadriana.it confermata nel footer
// del loro sito (fonte singola ma è il loro stesso indirizzo indicato,
// quindi utilizzabile). Facebook reale trovato e confermato linkato
// direttamente dal loro sito. TripAdvisor reale anch'esso linkato dal
// sito (pagina con 189 foto), non serviva per le foto ma conferma
// un'altra presenza online reale.

const SITE_CONFIG = {
  business: {
    name: "Da Romolo alla Mole Adriana",
    tagline: "Trattoria romana dal 1927, a due passi da Castel Sant'Angelo",
    logoText: "DR",
    logoImage: "images/logo.svg",
  },

  theme: {
    primary: "#7f1418",
    accent: "#b9977b",
    font: "'Poppins', sans-serif",
    headingFont: "'Playfair Display', serif",
    mood: "rustic",
  },

  hero: {
    heading: "Benvenuti da {{business.name}}",
    subheading: "Cucina romana e laziale dal 1927, nel cuore di Borgo Pio",
    backgroundImage: "images/hero.jpg",
    ctaText: "Prenota un tavolo",
    ctaLink: "#contact",
  },

  about: {
    heading: "Chi siamo",
    text: "Da Romolo alla Mole Adriana nasce nel 1927 e porta avanti da allora la tradizione della cucina romana, oggi guidata dalla famiglia Perilli dal 2002. Nel 2015 la trattoria si è trasferita nella sede attuale, nel cuore di Borgo Pio, a un passo dal Passetto e dalle antiche mura di Castel Sant'Angelo, la \"Mole Adriana\" che dà il nome al locale. Il ristorante fa parte dell'Associazione Negozi Storici d'Eccellenza di Roma.",
    image: "images/about.jpg",
  },

  offerings: {
    heading: "Il nostro menù",
    items: [
      { name: "Spaghetti alla carbonara", description: "Il grande classico della cucina romana", price: "€12,50" },
      { name: "Coda alla vaccinara", description: "Piatto storico del quinto quarto romano", price: "€14,00" },
      { name: "Saltimbocca alla romana", description: "Vitello, prosciutto e salvia", price: "€15,00" },
      { name: "Abbacchio scottadito con patate", description: "Agnello alla brace, una specialità della casa", price: "€19,00" },
    ],
  },

  gallery: {
    heading: "Galleria",
    images: ["images/gallery-1.jpg", "images/gallery-2.jpg", "images/gallery-3.jpg", "images/gallery-4.jpg"],
  },

  hours: {
    heading: "Orari",
    schedule: [
      { day: "Lunedì", hours: "Chiuso" },
      { day: "Martedì - Domenica", hours: "12:00 - 15:00, 18:30 - 23:00" },
    ],
  },

  contact: {
    heading: "Contattaci",
    address: "Vicolo del Campanile, 12-13, 00193 Roma",
    phone: "06 6861603",
    whatsapp: "",
    email: "info@daromoloallamoleadriana.it",
  },

  map: {
    embedSrc: "https://www.google.com/maps?q=Vicolo+del+Campanile+12+Roma&output=embed",
  },

  socials: {
    instagram: "",
    facebook: "https://www.facebook.com/share/1ZdcwoXMa4/?mibextid=wwXIfr",
    tiktok: "",
    website: "",
  },

  footer: {
    text: "Da Romolo alla Mole Adriana: cucina romana dal 1927, a Borgo Pio.",
  },
};
