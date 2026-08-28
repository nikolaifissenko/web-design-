// ─── EDIT THIS FILE ONLY to customize a new client site ───
// Everything on the page is rendered from this one config object.
// Leave a field empty ("" or []) to hide that section/item automatically.
//
// NOT BUILT (2026-08-28) — deliberately left as the unedited template.
// Strong signals this business (Via di San Crisogono 33, Trastevere) is
// closed, with a possibly-unrelated differently-named business now at
// the same address. Do not fill this in or send outreach until that's
// resolved by phone. Full explanation in ../_lead.md.

const SITE_CONFIG = {
  business: {
    name: "Business Name",
    tagline: "Short, punchy one-liner about what makes them great",
    logoText: "BN", // fallback initials shown if no logo image
    logoImage: "", // e.g. "images/logo.png" — leave empty to use logoText
  },

  theme: {
    // Pick 2 colors that match the business's vibe/branding
    primary: "#c0392b",
    accent: "#2c3e50",
    font: "'Poppins', sans-serif", // loaded from Google Fonts in index.html
  },

  hero: {
    heading: "Welcome to {{business.name}}",
    subheading: "Replace with the main pitch — what they offer, in one sentence",
    backgroundImage: "images/hero.jpg",
    ctaText: "Contact Us",
    ctaLink: "#contact",
  },

  about: {
    heading: "About Us",
    text: "2-3 sentences about the business's story, what makes it special, how long it's been around, etc.",
    image: "images/about.jpg",
  },

  // Works for a restaurant menu OR a services list — same fields.
  offerings: {
    heading: "Menu", // e.g. "Menu", "Our Services", "What We Offer"
    items: [
      {
        name: "Item / Service Name",
        description: "Short description",
        price: "€10", // leave empty for services with no fixed price
      },
      {
        name: "Item / Service Name 2",
        description: "Short description",
        price: "€15",
      },
    ],
  },

  gallery: {
    heading: "Gallery",
    images: [
      "images/gallery-1.jpg",
      "images/gallery-2.jpg",
      "images/gallery-3.jpg",
    ],
  },

  hours: {
    heading: "Opening Hours",
    schedule: [
      { day: "Monday", hours: "09:00 - 20:00" },
      { day: "Tuesday", hours: "09:00 - 20:00" },
      { day: "Wednesday", hours: "09:00 - 20:00" },
      { day: "Thursday", hours: "09:00 - 20:00" },
      { day: "Friday", hours: "09:00 - 22:00" },
      { day: "Saturday", hours: "09:00 - 22:00" },
      { day: "Sunday", hours: "Closed" },
    ],
  },

  contact: {
    heading: "Get In Touch",
    address: "Via Example 123, Roma, Italy",
    phone: "+39 06 1234 5678",
    whatsapp: "+39 06 1234 5678", // used to build a wa.me link
    email: "info@business.it",
  },

  map: {
    // Google Maps → Share → Embed a map → copy the src="..." URL only
    embedSrc: "",
  },

  socials: {
    instagram: "",
    facebook: "",
    tiktok: "",
    website: "",
  },

  footer: {
    text: "Made with care for local businesses in Rome.",
  },
};
