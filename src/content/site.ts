// Structured content for Cravelle.
// Designed so future translations (PL / AR) plug in by mirroring the shape
// under a locale key without touching component code.

export const siteCompany = {
  legalName: "CRAVELLE sp. z o.o.",
  legalNameFull: "CRAVELLE SPÓŁKA Z OGRANICZONĄ ODPOWIEDZIALNOŚCIĄ",
  brand: "Cravelle",
  positioning:
    "Cravelle is a Poland-based B2B trade and partnership company helping Arabic-speaking businesses, especially Egyptian exporters, connect with Europe through export support, commercial introductions, and market-entry coordination.",
  shortPositioning:
    "Export support, commercial introductions, and market-entry coordination for Arabic-speaking businesses entering Europe.",
  address: {
    line1: "ul. Wiślana 8",
    postalCode: "00-317",
    city: "Warszawa",
    country: "Poland",
  },
  // Public-facing identifiers kept minimal. Full registry data (KRS, REGON,
  // PKD, e-Doręczenia) lives only on the Legal page.
  registry: {
    nip: "5253079394",
    krs: "0001224084",
    regon: "544004650",
    pkdMain: "62.90.Z",
    pkdMainLabel:
      "Pozostała działalność usługowa w zakresie technologii informatycznych i komputerowych",
    eDoreczenia: "AE:PL-62782-70144-UJEAF-20",
  },
  contact: {
    phone: "+48 729 420 936",
    phoneE164: "+48729420936",
    whatsapp: "https://wa.me/48729420936",
    email: "cravelle.co@protonmail.com",
  },
  formEndpoint: "https://formspree.io/f/xgvralwk",
} as const;

export type ServicePillar = {
  number: string;
  slug: string;
  title: string;
  shortTitle: string;
  forWhom: string;
  whatWeDo: string[];
  outcome: string;
  cta: string;
};

export const servicePillars: ServicePillar[] = [
  {
    number: "01",
    slug: "export-and-market-entry",
    title: "Export and Market Entry Support",
    shortTitle: "Export and Market Entry",
    forWhom:
      "Arabic-speaking exporters, especially Egyptian producers, who want to enter Poland or wider Europe.",
    whatWeDo: [
      "Market-entry coordination for the product or category",
      "Buyer communication in clear written English",
      "Commercial introductions to qualified European counterparties",
      "Poland-side representation for meetings, visits, and follow-up",
      "Process guidance through the practical next steps",
      "Practical support that keeps a real opportunity moving",
    ],
    outcome:
      "A documented entry plan, named European counterparties, and a single point of contact in Warsaw.",
    cta: "Discuss an export opportunity",
  },
  {
    number: "02",
    slug: "b2b-partnership-facilitation",
    title: "B2B Partnership Facilitation",
    shortTitle: "B2B Partnerships",
    forWhom:
      "Business-to-business relationships that need a trusted connector between an Arabic-speaking party and a European buyer or supplier.",
    whatWeDo: [
      "Arranging meetings between qualified parties",
      "Supplier sourcing inside and outside the European Union",
      "Buyer and supplier introductions with written context for both sides",
      "Negotiation support during commercial conversations",
      "Communication support across language and time zone",
      "Ongoing account coordination once a relationship is live",
    ],
    outcome:
      "A working B2B relationship with a clear cadence, recorded conversations, and a named coordinator.",
    cta: "Start a B2B introduction",
  },
  {
    number: "03",
    slug: "hospitality-and-premium-supplier-sourcing",
    title: "Hospitality and Premium Supplier Sourcing",
    shortTitle: "Hospitality Sourcing",
    forWhom:
      "Hotels, lounges, restaurants, hospitality groups, and selected premium venues that need specialist supplier connections.",
    whatWeDo: [
      "Hospitality procurement support for defined categories",
      "Premium supplier introductions in Europe and beyond",
      "Commercial partnerships between venues and selected suppliers",
      "Training coordination through qualified external trainers",
      "Supplier relationship building and ongoing follow-through",
    ],
    outcome:
      "A short list of vetted hospitality suppliers, scheduled introductions, and a structured handover.",
    cta: "Send a hospitality brief",
  },
];

export const audiences = [
  {
    id: "egyptian-exporters",
    label: "Egyptian exporters",
    note: "Producers and trading houses ready to place product into Poland and the European market.",
  },
  {
    id: "arabic-suppliers",
    label: "Arabic-speaking suppliers",
    note: "Suppliers across the Arabic-speaking world looking for a credible European counterpart.",
  },
  {
    id: "hospitality",
    label: "Hospitality businesses",
    note: "Hotels, lounges, restaurants, and venues sourcing specialist suppliers and procurement support.",
  },
  {
    id: "european-buyers",
    label: "European buyers",
    note: "Polish and EU buyers looking for verified supply from Egypt and the wider Arabic-speaking market.",
  },
  {
    id: "b2b-partners",
    label: "B2B partners",
    note: "Companies on either side that need a trusted connector to manage the commercial conversation.",
  },
];

export const sectors = [
  {
    id: "fruits",
    title: "Fruits",
    note: "Fresh and seasonal fruits suited to European demand, sourced from established producers.",
  },
  {
    id: "vegetables",
    title: "Vegetables",
    note: "Fresh vegetables aligned with European retail and wholesale specifications.",
  },
  {
    id: "fresh-produce",
    title: "Fresh produce",
    note: "Wider fresh produce categories where buyer and supplier expectations are clear.",
  },
  {
    id: "agricultural-products",
    title: "Agricultural products",
    note: "Selected agricultural goods where Egypt and the wider region offer credible supply.",
  },
  {
    id: "hospitality",
    title: "Hospitality (selected commercial partnerships)",
    note: "Procurement support and supplier introductions for hotels, lounges, restaurants, and premium venues.",
  },
];

export const processSteps = [
  {
    n: "01",
    title: "Understand the opportunity",
    body: "A short written brief, a call, and a clear note on what success looks like and what is out of scope.",
  },
  {
    n: "02",
    title: "Verify the commercial direction",
    body: "We confirm the demand, the price logic, the counterparty profile, and any obvious blockers before work begins.",
  },
  {
    n: "03",
    title: "Prepare outreach",
    body: "Adapted introductions, written context for both sides, and the practical materials a buyer or supplier expects.",
  },
  {
    n: "04",
    title: "Connect with the relevant parties",
    body: "Introductions are direct, named, and accompanied by a written context note for both sides.",
  },
  {
    n: "05",
    title: "Coordinate meetings and follow-up",
    body: "We run the cadence, the minutes, and the action list. Nothing falls between languages or time zones.",
  },
  {
    n: "06",
    title: "Hand off to qualified professionals",
    body: "When a step requires a lawyer, accountant, customs agent, or banker, we brief them and stay on the thread.",
  },
];

export const whyCravelle = {
  eyebrow: "Why Cravelle",
  heading:
    "A focused B2B bridge between Arabic-speaking suppliers and European buyers, anchored in Poland.",
  points: [
    {
      title: "Bilingual and cross-cultural",
      body: "Working English and Arabic, with practical understanding of how Egyptian and European parties actually transact.",
    },
    {
      title: "Poland-based presence",
      body: "A real address, a named counterpart, and the ability to attend meetings and follow up locally.",
    },
    {
      title: "Practical commercial coordination",
      body: "Written briefs, named counterparties, scheduled calls, and a clean record of what was agreed.",
    },
    {
      title: "Real business follow-through",
      body: "Introductions are not the end of the work. We stay on the thread until the relationship is operating.",
    },
    {
      title: "Focused B2B positioning",
      body: "We do one thing: move the right product, through the right channel, with the right people, into Europe.",
    },
  ],
};

export const disclaimerText =
  "Cravelle provides commercial coordination, introductions, and business support. It does not provide legal, tax, customs, immigration, financial, or investment advice unless delivered through properly qualified external professionals.";

export const navLinks = [
  { to: "/services", label: "Services" },
  { to: "/sectors", label: "Sectors" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
];

export const footerLinks = [
  { to: "/services", label: "Services" },
  { to: "/sectors", label: "Sectors" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
  { to: "/legal", label: "Legal and disclaimer" },
];

export const formIntake = {
  heading: "Talk to Cravelle.",
  intro:
    "We respond within two working days. Brief replies are normal. We ask for written context first so the call is useful for both sides.",
  fields: {
    name: "Name",
    company: "Company",
    country: "Country",
    email: "Email",
    phone: "WhatsApp or phone",
    businessType: "Business type",
    productOrSector: "Product or sector",
    targetMarket: "Target market",
    message: "Message",
  },
  businessTypes: [
    "Producer or manufacturer",
    "Exporter",
    "Importer or distributor",
    "Trading house",
    "Hospitality buyer",
    "Service provider",
    "Other",
  ],
  targetMarkets: [
    "Poland",
    "European Union (wider)",
    "Both Poland and wider EU",
    "Other",
  ],
};
