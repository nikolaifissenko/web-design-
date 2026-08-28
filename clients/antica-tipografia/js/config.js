// Demo per Antica Tipografia dal 1876 S.r.l. Dati verificati: indirizzo,
// telefono, fax, email, P.IVA dal loro sito reale (anticatipografia.it,
// pagine home/azienda/servizi). Storia (fondazione, famiglia Bardi,
// Summa Theologica) presa dalla loro stessa pagina "Azienda" (fetchata
// via web, non nel dump .research/ locale). Instagram e Facebook
// cercati con piu' query mirate e non trovati: nessun profilo pubblico
// rintracciabile per questa specifica attivita' (e' un'azienda B2B di
// stampa/prestampa, non un negozio al dettaglio: plausibile che non
// abbia social propri).
// STORIA: fondata nel 1876 come "Forzani e C. Tipografia del Senato" da
// Paolo Bondesio; primo contratto col Senato nel 1877; stampo' tra
// l'altro la Summa Theologica di San Tommaso d'Aquino, premiata con
// medaglia d'oro da Papa Leone XIII. Giovanni Bardi ne prese la
// direzione nel 1902, rinominandola "Tipografia del Senato" (da cui il
// vecchio logo "Logo-BARDI" trovato sul sito), e nel 1919 apri' anche la
// storica Libreria di Scienze e Lettere di Piazza Madama, ritrovo di
// intellettuali antifascisti. Nel 1924 acquisi' la Tipografia dei
// Lincei di Palazzo Corsini, con caratteri rari (cirillico, etiope,
// ebraico, geroglifico, giapponese, persiano). Guidata dalla famiglia
// Bardi fino al 2008, oggi e' "Antica Tipografia dal 1876 s.r.l.",
// mantiene l'attivita' editoriale tramite Bardi Edizioni s.r.l. ed e'
// certificata ISO 9001/14001 dal 2006.
// LOGO: il loro logo reale (elegante scritta corsiva blu "Antica
// Tipografia dal 1876 S.r.l." con un fregio ornamentale rosa/bordeaux a
// sinistra) e' un wordmark orizzontale, non un'icona isolabile: non si
// adatta al cerchio 40x40 del template (stesso problema di Antica
// Legatoria Del Vico). Invece di saltare al fallback testuale, ridisegnata
// un'icona monogramma "T" in grassetto con un piccolo fregio ornamentale,
// usando ESATTAMENTE i colori campionati pixel-per-pixel dal loro vero
// logo: blu navy #25247B del testo, bordeaux #801431 del fregio, su
// fondo crema. File: images/logo.png, disegnato con PIL.
// FOTO: hero e gallery-1 sono due banner reali del loro sito
// (caratteri di piombo per la composizione tipografica / un e-reader
// davanti a libri rilegati, con le scritte "TRADIZIONE"/"INNOVAZIONE"
// gia' incise nell'immagine originale: motivo grafico reale e
// intenzionale del loro sito, coerente con un'azienda dal 1876 che
// unisce le due cose, non un errore di crop). about = foto reale
// d'archivio in bianco e nero/seppia trovata sulla loro pagina
// "Azienda" (persone in abiti d'epoca davanti a un edificio, senza
// didascalia sul sito, ma pubblicata proprio nella sezione storia).
// gallery-2 = foto reale di una macchina Duplo DuBinder per la
// rilegatura/allestimento, dal loro sito. gallery-3 = immagine reale
// "Four-Color-Printing" usata sul loro sito per illustrare la stampa a
// colori (grafica standard di settore, non una foto del laboratorio,
// ma e' il materiale che loro stessi pubblicano, non uno stock scelto
// da noi). Nessuna foto aggiuntiva stock usata.

const SITE_CONFIG = {
  business: {
    name: "Antica Tipografia",
    tagline: "Tipografia storica nel centro di Roma dal 1876",
    logoText: "AT",
    logoImage: "images/logo.png",
  },

  theme: {
    primary: "#25247b",
    accent: "#801431",
    font: "'Playfair Display', serif",
    mood: "editorial",
  },

  hero: {
    heading: "Benvenuti in {{business.name}}",
    subheading: "Stampa, prestampa e allestimento nel centro storico di Roma dal 1876",
    backgroundImage: "images/hero.jpg",
    ctaText: "Richiedi un preventivo",
    ctaLink: "#contact",
  },

  about: {
    heading: "Chi siamo",
    text: "Fondata nel 1876 come Tipografia del Senato, l'Antica Tipografia ha stampato tra gli altri la Summa Theologica di San Tommaso d'Aquino, premiata con una medaglia d'oro da Papa Leone XIII. Guidata dal 1902 dalla famiglia Bardi, che nel 1919 apri' anche la storica Libreria di Scienze e Lettere di Piazza Madama, oggi continua la tradizione tipografica del centro storico di Roma unendo macchinari moderni a un'eredita' di oltre 140 anni.",
    image: "images/about.jpg",
  },

  offerings: {
    heading: "Servizi",
    items: [
      { name: "Stampa digitale e a colori", description: "Biglietti da visita, volantini, manifesti e volumi di pregio, anche in tempi rapidi", price: "" },
      { name: "Prestampa e impaginazione", description: "Otto postazioni video e software di impaginazione automatica per migliaia di pagine", price: "" },
      { name: "Allestimento e rilegatura", description: "Rilegatura, foratura, spiralatura e plastificazione fino al confezionamento finale", price: "" },
      { name: "Grande formato ed eventi", description: "Striscioni, roll-up, espositori, gadget USB e produzione DVD", price: "" },
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
    address: "Corso del Rinascimento, 24, 00186 Roma",
    phone: "06 6878576",
    whatsapp: "",
    email: "info@anticatipografia.it",
  },

  map: {
    embedSrc: "https://www.google.com/maps?q=Corso+del+Rinascimento+24+Roma&output=embed",
  },

  socials: {
    instagram: "",
    facebook: "",
    tiktok: "",
    website: "https://www.anticatipografia.it/",
  },

  footer: {
    text: "Antica Tipografia, a Roma dal 1876.",
  },
};
