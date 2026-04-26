# Cravelle

Clear routes into Poland.

This is the source code for [cravelle.co](https://cravelle.co), the public
website of CRAVELLE sp. z o.o.

The site is a small, fast, single-page React application built with Vite,
TypeScript, Tailwind CSS, and Framer Motion. It is deployed to Netlify from
the `dist/` build output.

## Local development

```bash
npm install
npm run dev          # local dev server on http://localhost:3000
npm run typecheck    # TypeScript only, no emit
npm run lint         # ESLint flat-config across src/
npm run build        # type-check + production build to dist/
npm run preview      # preview the production build
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
    IntroReveal.tsx       centre split-reveal intro animation (homepage only, on cold load)
    Nav.tsx               top navigation, flips colour over data-on-dark sections
    Footer.tsx            footer with registry block
    Hero.tsx              home hero
    ServicePillars.tsx    three editorial service rows
    WhoWeHelp.tsx         audience grid
    Process.tsx           method (six steps)
    WhyCravelle.tsx       positioning grid
    Disclaimer.tsx        scope-of-services disclaimer
    CTASection.tsx        bottom-of-page contact CTA (data-on-dark)
    ContactForm.tsx       intake form (Formspree)
    SectionHeader.tsx     editorial section header primitive
  content/site.ts         all copy, registry data, service pillars, audiences, sectors
  lib/seo.ts              per-route title / description / canonical helper
  pages/                  routed pages (Home, Services, Sectors, About, Contact, Legal, NotFound)
  styles/index.css        Tailwind layers + design tokens (CSS variables)
  App.tsx                 router + scroll-to-top + Suspense
  main.tsx                entry
index.html                app shell (preconnects, JSON-LD organisation, theme bootstrap)
tailwind.config.ts        design tokens (palette, typography, fluid type)
vite.config.ts            Vite config with manual chunking
eslint.config.js          ESLint flat config (TS + React Hooks + React Refresh)
netlify.toml              Netlify build, redirects, SPA rewrite
public/_headers           security headers + cache-control
```

## Brand mark

The wing-wordmark is rendered through a CSS mask so the same source file
inherits the current text colour. The mask source is
`public/brand/wordmark.png` (a tight, alpha-only PNG). The `.brand-logo`
utility in `src/styles/index.css` paints this mask with `currentColor`,
which lets it work in light theme, dark theme, and over the dark
`data-on-dark` CTA section without separate light/dark assets.

## Content

All site copy is defined as structured TypeScript objects in
`src/content/site.ts`. To translate the site, mirror the same shape per
locale and select on `useParams` or a locale store at the App boundary.

## Brand fonts

- Headline serif: Fraunces. Body: Inter. Mono: JetBrains Mono. All loaded
  from Google Fonts with `&display=swap` and preconnect.
- Palette tokens live in `tailwind.config.ts` and as CSS variables in
  `src/styles/index.css` (light + dark).

## Forms

The contact form posts to the existing Formspree endpoint
(`https://formspree.io/f/xgvralwk`). It does not store data in the
front-end and does not set tracking cookies.

## Deployment (Netlify)

The site is configured for Netlify out of the box.

1. Connect the GitHub repository to a Netlify site.
2. Build command: `npm run build` (already set in `netlify.toml`).
3. Publish directory: `dist/` (already set).
4. Node version: `20.19.0` (already set).
5. The `[[redirects]]` block provides the SPA fallback `/* → /index.html`.
6. `public/_headers` ships security headers and cache rules:
   - HSTS, X-Frame-Options, X-Content-Type-Options, Referrer-Policy,
     Permissions-Policy.
   - 1-year immutable cache on `/assets/*` (Vite hashes filenames).

No environment variables are required to run the site as configured.

## Verified registry data

Confirmed against the official KRS Aktualny / Pełny export (April 2026):

- Legal name: CRAVELLE SPÓŁKA Z OGRANICZONĄ ODPOWIEDZIALNOŚCIĄ
  (short form: CRAVELLE sp. z o.o.)
- KRS: 0001224084 · NIP: 5253079394 · REGON: 544004650
- KRS registered: 16 February 2026
- Registered office: ul. Wiślana 8, 00-317 Warszawa, Poland
- Main PKD: 62.90.Z
- e-Doręczenia: AE:PL-62782-70144-UJEAF-20
