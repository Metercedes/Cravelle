// Non-translatable site identifiers (company registry, contact endpoints,
// phone numbers, navigation routes). Translatable copy lives in dict.en.ts /
// dict.pl.ts / dict.ar.ts and is consumed via the useDict() hook.

export const siteCompany = {
  legalName: "Cravelle Sp. z o.o.",
  legalNameFull: "CRAVELLE SPÓŁKA Z OGRANICZONĄ ODPOWIEDZIALNOŚCIĄ",
  brand: "Cravelle",
  address: {
    line1: "ul. Wiślana 8",
    postalCode: "00-317",
    city: "Warszawa",
    country: "Poland",
  },
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

// Route paths are language-neutral; the visible labels come from the dict.
export const navRoutes = [
  { to: "/services", labelKey: "services" as const },
  { to: "/sectors", labelKey: "sectors" as const },
  { to: "/about", labelKey: "about" as const },
  { to: "/contact", labelKey: "contact" as const },
];

export const footerRoutes = [
  ...navRoutes,
  { to: "/legal", labelKey: "legal" as const },
];
