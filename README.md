# Cravelle

The B2B bridge into Europe.

This is the source code for [cravelle.co](https://cravelle.co), the public
website of Cravelle Sp. z o.o. — a Poland-based B2B bridge connecting
Arabic-speaking suppliers, especially Egyptian exporters, with the European
market through export support, commercial introductions, and market-entry
coordination.

The site is a small, fast, single-page React application built with Vite,
TypeScript, and Tailwind CSS. It is prerendered to static HTML at build time
and deployed to Netlify from the `dist/` build output.

## Local development

```bash
npm install
npm run dev          # local dev server on http://localhost:3000
npm run typecheck    # TypeScript only, no emit
npm run lint         # ESLint flat-config across src/
npm run build        # type-check + production build to dist/
npm run preview      # preview the production build on http://localhost:4173
```

Node 20.19.0 (matches `netlify.toml`).

## Project layout

```text
public/                   static assets served as-is
  brand/logo.png          square 1080² mark, used for favicons / manifest / apple-touch-icon / JSON-LD
  brand/wordmark.png      tight wordmark, used as the CSS-mask source for the .brand-logo class
  favicon.svg             primary favicon
  og-image.svg            social card
  manifest.webmanifest    PWA manifest
  _headers                Netlify security + cache headers
  _redirects              SPA fallback
  404.html                deep-link recovery (stashes the path then redirects to /)
  robots.txt
  sitemap.xml
src/
  components/
    Nav.tsx               top navigation, flips colour over data-on-dark sections
    Footer.tsx            footer with registry block
    Hero.tsx              home hero (plain HTML, no animation library — LCP-safe)
    ServicePillars.tsx    three editorial service rows
    WhoWeHelp.tsx         audience grid
    Process.tsx           method (six steps)
    WhyCravelle.tsx       positioning grid
    Gallery.tsx           atmosphere gallery section
    Disclaimer.tsx        scope-of-services disclaimer
    CTASection.tsx        bottom-of-page contact CTA (data-on-dark)
    ContactForm.tsx       intake form (Formspree)
    SectionHeader.tsx     editorial section header primitive
  content/site.ts         all copy, registry data, service pillars, audiences, sectors, gallery
  lib/seo.ts              per-route title / description / canonical helper
  lib/routes.ts           route metadata shared with the prerender script
  pages/                  routed pages (Home, Services, Sectors, About, Contact, Legal, NotFound)
  styles/index.css        Tailwind layers + design tokens + intro/gallery/reveal CSS
  App.tsx                 router + scroll-to-top
  main.tsx                entry; mounts the app and wires up the IntersectionObserver reveal
  entry-server.tsx        SSR entry consumed by scripts/prerender.mjs
index.html                app shell (theme bootstrap, JSON-LD, intro overlay markup)
scripts/prerender.mjs     build-time SSR prerender; inlines critical CSS into each page
tailwind.config.ts        design tokens (palette, typography, fluid type)
vite.config.ts            Vite config with manual chunking
eslint.config.js          ESLint flat config (TS + React Hooks + React Refresh)
netlify.toml              Netlify build, redirects, SPA rewrite
public/_headers           security headers + cache-control
```

## Naming convention

- Marketing copy, headings, body text, navigation: **"Cravelle"**.
- Legal, registry, footer entity row, intro overlay caption: **"Cravelle Sp. z o.o."**.
- JSON-LD organization name: **"Cravelle Sp. z o.o."** (entity legal name).

## Brand mark

The wing-wordmark is rendered through a CSS mask so the same source file
inherits the current text colour. The mask source is
`public/brand/wordmark.png` (a tight, alpha-only PNG). The `.brand-logo`
utility paints this mask with `currentColor`, which lets it work in light
theme, dark theme, and over the dark `data-on-dark` CTA section without
separate light/dark assets.

## Content

All site copy is defined as structured TypeScript objects in
`src/content/site.ts`. To translate the site, mirror the same shape per
locale and select on `useParams` or a locale store at the App boundary.

## Typography

The site uses pure system font stacks for performance — no Google Fonts are
loaded. Tokens live in `:root` inside `src/styles/index.css`:

- Headlines (`var(--font-serif)`): `ui-serif`, `Iowan Old Style`,
  `Apple Garamond`, `Georgia`, `Cambria`, `Times New Roman`, serif.
- Body (`var(--font-sans)`): `ui-sans-serif`, `system-ui`, `-apple-system`,
  `Segoe UI`, `Roboto`, `Helvetica Neue`, `Arial`, sans-serif.
- Mono labels (`var(--font-mono)`): `ui-monospace`, `SFMono-Regular`,
  `SF Mono`, `Menlo`, `Consolas`, `Liberation Mono`, monospace.

This eliminates the ~237 kB Google Fonts waterfall on cold loads.

## Animation policy

- The intro overlay is pure CSS keyframes plus a tiny inline script in
  `index.html`. No animation library, no JS framework dependency.
- Above-the-fold content (`Hero`) is plain HTML with no opacity/transform
  initial states — the LCP element paints at full visibility on the first
  frame.
- Below-the-fold sections use the `.reveal` class plus an
  `IntersectionObserver` hook in `main.tsx` for a soft scroll-in fade.
  Initial state is gated by `html.js-ready`, so crawlers and JS-disabled
  users see content immediately.
- `prefers-reduced-motion` short-circuits both intro and reveal animations.

## Forms

The contact form posts to the existing Formspree endpoint
(`https://formspree.io/f/xgvralwk`). It does not store data in the
front-end and does not set tracking cookies.

## Deployment (Netlify)

1. Connect the GitHub repository to a Netlify site.
2. Build command: `npm run build` (already set in `netlify.toml`).
3. Publish directory: `dist/` (already set).
4. Node version: `20.19.0` (already set).
5. The `[[redirects]]` block provides the SPA fallback `/* → /index.html`.
6. `public/_headers` ships security headers and cache rules.

No environment variables are required to run the site as configured.

## Verified registry data

Confirmed against the official KRS Aktualny / Pełny export (April 2026):

- Legal name: CRAVELLE SPÓŁKA Z OGRANICZONĄ ODPOWIEDZIALNOŚCIĄ
  (short form: Cravelle Sp. z o.o.)
- KRS: 0001224084 · NIP: 5253079394 · REGON: 544004650
- KRS registered: 16 February 2026
- Registered office: ul. Wiślana 8, 00-317 Warszawa, Poland
- Main PKD: 62.90.Z
- e-Doręczenia: AE:PL-62782-70144-UJEAF-20
