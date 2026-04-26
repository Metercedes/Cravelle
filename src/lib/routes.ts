// Shared route metadata used by both the client-side SEO hook (`useSeo`) and
// the build-time prerender script. Keeping a single source of truth avoids
// drift between what crawlers see in the static HTML and what users see after
// hydration.

export const SITE_ORIGIN = "https://cravelle.co";

export type RouteMeta = {
  path: string;
  // Output file path inside dist/ (relative). Used by the prerender script.
  output: string;
  title: string;
  description: string;
};

export const routeMeta: ReadonlyArray<RouteMeta> = [
  {
    path: "/",
    output: "index.html",
    title: "Cravelle, the B2B bridge into Europe.",
    description:
      "Cravelle is a Poland-based B2B trade and partnership company helping Arabic-speaking businesses, especially Egyptian exporters, connect with Europe through export support, commercial introductions, and market-entry coordination.",
  },
  {
    path: "/services",
    output: "services/index.html",
    title: "Services, Cravelle",
    description:
      "Three focused services: export and market entry support, B2B partnership facilitation, and hospitality and premium supplier sourcing.",
  },
  {
    path: "/sectors",
    output: "sectors/index.html",
    title: "Sectors, Cravelle",
    description:
      "Cravelle works in narrow, practical sectors: fruits, vegetables, fresh produce, agricultural products, and selected hospitality commercial partnerships.",
  },
  {
    path: "/about",
    output: "about/index.html",
    title: "About, Cravelle",
    description:
      "Cravelle is a Poland-based B2B trade and partnership company helping Arabic-speaking businesses, especially Egyptian exporters, connect with Europe.",
  },
  {
    path: "/contact",
    output: "contact/index.html",
    title: "Contact, Cravelle",
    description:
      "Send a written brief and we will reply within two working days. Direct line: +48 729 420 936. Office in Warsaw, Poland.",
  },
  {
    path: "/legal",
    output: "legal/index.html",
    title: "Legal and disclaimer, Cravelle",
    description:
      "Cravelle scope of services, outcomes and limits, engagement terms, privacy, cookies, governing law, and registered company details.",
  },
  {
    path: "/404",
    output: "404.html",
    title: "Not found, Cravelle",
    description: "The page you were looking for does not exist on cravelle.co.",
  },
];

export function findRouteMeta(path: string): RouteMeta {
  return (
    routeMeta.find((r) => r.path === path) ??
    routeMeta[routeMeta.length - 1] // 404 fallback
  );
}
