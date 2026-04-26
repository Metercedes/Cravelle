// Build-time prerender for Cravelle.
//
// Pipeline:
//   1. Read the metadata table that the runtime SEO hook also uses.
//   2. Import the SSR build (dist-server/entry-server.js) emitted by
//      `vite build --ssr`. It exports `render(url)` which returns the
//      HTML that hydrateRoot will reuse on the client.
//   3. For each route, splice the rendered HTML into a copy of the
//      Vite-emitted `dist/index.html` template and rewrite the per-page
//      <title>, description, canonical, OG, and Twitter tags so crawlers
//      and previewers see route-specific metadata without hitting JS.
//   4. Write the result to dist/<route>/index.html (and dist/404.html).

import fs from "node:fs";
import path from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, "..");
const distDir = path.join(root, "dist");
const serverDir = path.join(root, "dist-server");
const SITE_ORIGIN = "https://cravelle.co";

// Mirrors src/lib/routes.ts. Kept inline so the prerender script does not
// have to be transpiled. Update both files in lockstep.
const routes = [
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

function escapeHtmlAttr(value) {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/"/g, "&quot;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}

function escapeHtmlText(value) {
  return String(value).replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/&/g, "&amp;");
}

function replaceMeta(html, attr, name, content) {
  const re = new RegExp(`(<meta\\s+${attr}="${name}"\\s+content=")[^"]*(")`, "i");
  if (re.test(html)) return html.replace(re, `$1${escapeHtmlAttr(content)}$2`);
  // Insert before </head> if missing.
  return html.replace(
    /<\/head>/i,
    `    <meta ${attr}="${name}" content="${escapeHtmlAttr(content)}" />\n  </head>`,
  );
}

function replaceTitle(html, title) {
  return html.replace(/<title>[\s\S]*?<\/title>/i, `<title>${escapeHtmlText(title)}</title>`);
}

function replaceCanonical(html, url) {
  const re = /(<link\s+rel="canonical"\s+href=")[^"]*(")/i;
  if (re.test(html)) return html.replace(re, `$1${escapeHtmlAttr(url)}$2`);
  return html.replace(
    /<\/head>/i,
    `    <link rel="canonical" href="${escapeHtmlAttr(url)}" />\n  </head>`,
  );
}

async function main() {
  // 1. Confirm the SSR bundle exists.
  const serverEntry = path.join(serverDir, "entry-server.js");
  if (!fs.existsSync(serverEntry)) {
    throw new Error(
      `Server bundle not found at ${serverEntry}. Did "vite build --ssr src/entry-server.tsx" run?`,
    );
  }

  // 2. Import the renderer. dynamic import + file:// URL so Node treats it as
  // a real ESM module on Windows too.
  const { render } = await import(pathToFileURL(serverEntry).href);

  // 3. Read the Vite-emitted client template (head with bundle <script> +
  // <link rel="stylesheet">, body with <div id="root"></div>).
  const templatePath = path.join(distDir, "index.html");
  if (!fs.existsSync(templatePath)) {
    throw new Error(`Client template not found at ${templatePath}. Run "vite build" first.`);
  }
  const template = fs.readFileSync(templatePath, "utf8");

  for (const route of routes) {
    // The 404 page is rendered through the catch-all route in App.
    const renderUrl = route.path === "/404" ? "/__not_found__" : route.path;
    const appHtml = render(renderUrl);

    const fullTitle = route.title.includes("Cravelle") ? route.title : `${route.title}, Cravelle`;
    const fullUrl = route.path === "/404" ? `${SITE_ORIGIN}/404` : `${SITE_ORIGIN}${route.path}`;

    let html = template;
    // Inject the rendered tree. Keep the tag itself so hydrateRoot's
    // attachment by id still works.
    html = html.replace(
      /<div id="root"><\/div>/,
      `<div id="root">${appHtml}</div>`,
    );

    html = replaceTitle(html, fullTitle);
    html = replaceMeta(html, "name", "description", route.description);
    html = replaceCanonical(html, fullUrl);
    html = replaceMeta(html, "property", "og:url", fullUrl);
    html = replaceMeta(html, "property", "og:title", fullTitle);
    html = replaceMeta(html, "property", "og:description", route.description);
    html = replaceMeta(html, "name", "twitter:title", fullTitle);
    html = replaceMeta(html, "name", "twitter:description", route.description);

    // Tell crawlers not to index a generated 404 page even though it's a
    // real file on disk.
    if (route.path === "/404") {
      html = html.replace(
        /(<meta\s+name="robots"\s+content=")[^"]*(")/i,
        `$1noindex,follow$2`,
      );
    }

    const outPath = path.join(distDir, route.output);
    fs.mkdirSync(path.dirname(outPath), { recursive: true });
    fs.writeFileSync(outPath, html, "utf8");
    process.stdout.write(`prerender ✓ ${route.path}  ->  dist/${route.output}\n`);

    // Also emit a sibling <route>.html alongside <route>/index.html so the
    // page is reachable through every URL form a static host might try
    // (vite preview, Netlify with `pretty_urls`, GitHub Pages, etc.). The
    // home and 404 outputs already live at the dist root, so skip them.
    if (route.output.endsWith("/index.html")) {
      const sibling = path.join(distDir, route.output.replace(/\/index\.html$/, ".html"));
      fs.writeFileSync(sibling, html, "utf8");
      process.stdout.write(
        `prerender ✓ ${route.path}  ->  dist/${path.relative(distDir, sibling)}\n`,
      );
    }
  }
}

main().catch((err) => {
  console.error("[prerender] failed:", err);
  process.exitCode = 1;
});
