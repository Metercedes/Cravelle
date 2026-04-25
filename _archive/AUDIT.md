# Cravelle — rebrand and rebuild audit

Date: 25 April 2026
Author: Senior brand strategist + senior product designer + senior frontend
architect + conversion copywriter + Netlify deployment engineer (combined
brief).

---

## 1. What was here

The `Cravelle-Source` directory contained a **deployed bundle** of the
previous live site, not the application source. There was no `package.json`,
no `src/` directory, and no Vite or Next.js configuration in the repository.
The `netlify.toml` referenced `npm run build` and `publish = "dist"`, which
implies the original source code was authored elsewhere and only the built
output was committed back into this repository.

The deployed bundle was a static-HTML build with hashed JS chunks under
`/assets/`, plus separate folders for `services/`, `academy/`, `admin/`,
`dashboard/`, `internships/`, `training/`, and a Supabase-backed login flow.

Everything previously on disk has been preserved under
`_archive/legacy-site/`.

## 2. Current brand problems (before)

- **Unfocused scope.** Eleven service lines (Academy, Diplomacy, Translations,
  International Trade, Privé, Digital, Voice, Connect, Edu Connect, Real
  Estate Advisory, Administrative Services). Cravelle looked like an
  unfocused holding company.
- **Risky claims.** Statistics (“120+ clients · 350+ engagements · 18
  markets”), testimonials with vague initials, and a global-presence map
  were not verifiable and were inappropriate for a Polish sp. z o.o.
  established in 2025.
- **Liability surface.** Service lines that brushed against regulated work
  (immigration via PESEL/meldunek, real estate, customs adjacent activity,
  diplomacy) without making the boundary explicit.
- **Generic AI/SaaS visual style.** Glass cards, purple/blue gradients,
  generic FontAwesome icons in a horizontal carousel, AOS scroll animations.
- **Heavy front-end.** Leaflet, AOS, Font Awesome via CDN, custom slider
  code, plus a dashboard/login flow not relevant to the public brand site.
- **Tone drift.** Tagline “Where Elegance Meets Purpose” read as luxury
  perfume, not commercial trade.

## 3. Content kept

- Verified registry data, confirmed against the official KRS Aktualny /
  Pełny export:
  - CRAVELLE SPÓŁKA Z OGRANICZONĄ ODPOWIEDZIALNOŚCIĄ
    (short form: CRAVELLE sp. z o.o.)
  - KRS 0001224084 · NIP 5253079394 · REGON 544004650
  - KRS registered: 16 February 2026
  - Registered office: ul. Wiślana 8, 00-317 Warszawa, Poland
  - Main PKD: 62.90.Z (IT services)
  - e-Doręczenia: AE:PL-62782-70144-UJEAF-20
- Contact channels: +48 729 420 936, [cravelle.co@protonmail.com](mailto:cravelle.co@protonmail.com).
- Logo files (`logo.png`, `logo-white.png`) — moved to `public/brand/`.
- Formspree endpoint `xgvralwk` for the contact form.

### Notes on registry corrections

- The legacy HTML carried `54400465000000` (14 digits, padded) and the
  legacy `lang/en-gb.json` carried `540046500` (9 digits). Both were
  incorrect. The confirmed REGON is `544004650` and is now used in every
  public-facing field (footer, transparency table, JSON-LD, contact page).
- Earlier copy referenced "Founded 2025." Replaced with "registered in
  Poland" or "registered in the KRS on 16 February 2026" to match the
  KRS record.

### Owner confirmation still pending

- **News items** (Polish Property Show, PPCC forum, etc.) were not
  carried forward because they reinforced the old, broader positioning.
  They remain available in `_archive/legacy-site/` and can be added to a
  future `/news` route once we agree which items are factually
  supportable.

## 4. Content removed

Moved to `_archive/legacy-site/` and not carried into the new site:

- Service lines: Academy, Diplomacy, Translations, Privé, Digital, Voice,
  Edu Connect, Real Estate Advisory, broad Administrative Services,
  generic Connect.
- Login, register, dashboard, admin, training, internships routes and the
  Supabase integration.
- Stats, testimonials, partner logo loop, global presence map.
- Heavy CDN dependencies (Font Awesome, AOS, Leaflet, Globe.gl).
- `dist/`-style build output and hashed asset chunks from the old build.

## 5. New positioning

- **Motto.** “Clear routes into Poland.”
  Five alternatives considered: “Where Polish trade begins.” / “Practical
  routes into Polish trade.” / “A bridge into Polish business.” / “Routes,
  partners, and a presence in Poland.” / “Open the Polish route.” The
  brief's recommended motto remains the strongest: it signals direction
  (which the wing logo also does), Poland anchor, and operational clarity.
- **Positioning sentence.** Cravelle helps international companies build
  trade relationships, commercial presence, and operational readiness in
  Poland through practical coordination, representation, and partner
  matching.
- **Six service pillars.** Poland Market Entry · Trade Representation ·
  Partner Matching · Import/Export Coordination · Operational Readiness ·
  Cross-Border Partnership Management. Each pillar names what we do, what
  we do not, the realistic outcome, and a single CTA.

## 6. Brand identity

- **Palette.** Obsidian Black `#080A0D`, Porcelain White `#F6F1E8`,
  Graphite Ink `#1C2228`, Baltic Blue `#244C5A`, Aged Brass `#B88A55` (used
  sparingly), Route Grey `#A8A29A`, Signal Green `#5E7A66`. Tokens live in
  `tailwind.config.ts` and as CSS variables in `src/styles/index.css`.
- **Typography.** Headlines in Fraunces (serif, editorial). Body in Inter.
  Coordinate marks and editorial numerals in JetBrains Mono.
- **Visual language.** Coordinate strips (Warsaw 52.2348° N · 21.0207° E),
  editorial section numerals (00–06), hairline rules, restrained map-grid
  background, and a small original wing-mark SVG (`WingMark`) used as an
  interface accent. No glassmorphism, no large stock photography.
- **Motion.** Centre split-reveal intro inspired by `prs.ms.gov.pl`, with a
  hairline brass seam that grows then opens the porcelain panels. Plus
  short fades and 16-px y-translates on scroll. All motion respects
  `prefers-reduced-motion`. The intro is gated by sessionStorage and
  localStorage so it does not annoy returning visitors.

## 7. Stack

- Vite 5 + React 18 + TypeScript 5 + Tailwind 3 + Framer Motion 11.
- React Router 6 for routes: `/`, `/services` (anchored sections),
  `/how-we-work`, `/about`, `/contact`, `/legal`, plus `*` 404.
- Lazy-loaded routes for code splitting.
- Build target: `dist/`. Netlify config preserved with SPA rewrite added.
- Build size: HTML 4.8 KB, CSS 22 KB (5.3 KB gzipped), JS total around 105
  KB gzipped (motion + react + router + app), no remote runtime
  dependencies beyond Google Fonts (preconnected and `&display=swap`).

## 8. Forms

- Single Formspree endpoint preserved (`xgvralwk`).
- Honeypot field, structured business intake (name, company, country,
  email, phone, business type, intent, category, timeline, message).
- Client-side fetch with a written success state. No localStorage of
  enquiry data, no third-party tracking, no cookie banner because the site
  sets no marketing cookies.

## 9. Legal & liability

- A `Disclaimer` component is rendered on Home, Services, How We Work,
  About, and Contact.
- A full `/legal` page covers scope of services, outcomes and limits,
  engagements and fees, privacy, cookies, trademarks, and governing law.
- Every service pillar carries its own “What we do not” paragraph.

## 10. Risks and follow-ups

- **REGON value.** See §3.
- **Phone field validation.** Country is a free-text field in the contact
  form for now. We can add a country select with E.164 phone validation
  in a follow-up.
- **Multilingual.** The site is structured for translations (content lives
  in `src/content/site.ts`). The actual PL / AR / TR copy is not yet
  shipped; doing so safely needs a native-speaker review per locale, plus
  per-locale routes.
- **News / case studies.** Not shipped. If the owner wants to surface
  factually supportable participation (e.g. PPCC forum), we add a
  conservative `/news` route with attribution.
- **Cookie banner.** Not added. The site sets no marketing or analytics
  cookies. If GA4 or another analytics is added, a banner will be
  required and should be implemented at that time.
- **The legacy `formspree.io` endpoint.** Owner should confirm the
  endpoint is still active and that notifications route to the operating
  inbox.
