import type { ReactNode } from "react";
import SectionHeader from "./SectionHeader";

// Editorial gallery section. Visuals are inline SVG covers — zero raster
// download, zero layout shift, no decoding cost. Each cover sets a 4:3
// aspect ratio so the grid never reflows when images "load".
//
// The section is placed below the fold (after Why Cravelle), so it never
// affects FCP / LCP on the homepage. Each card has a meaningful aria-label
// describing the sector atmosphere it represents.

type Card = {
  id: string;
  index: string;
  sector: string;
  title: string;
  note: string;
  cover: ReactNode;
};

// Cravelle palette tokens are referenced via CSS vars at runtime so the
// covers honour light/dark themes automatically.
const ink = "var(--fg)";
const inkSoft = "var(--fg-soft)";
const accent = "var(--accent)";
const brass = "var(--brass)";
const signal = "var(--signal)";
const bg = "var(--bg)";
const bgSoft = "var(--bg-soft)";
const rule = "var(--rule)";

const cards: Card[] = [
  {
    id: "fresh-produce",
    index: "01",
    sector: "Fresh produce",
    title: "Crates ready for Europe.",
    note: "Egyptian fruit and vegetable cargo, prepared to European retail and wholesale specifications.",
    cover: (
      <svg viewBox="0 0 400 300" role="img" aria-label="Stacked produce crates outline" xmlns="http://www.w3.org/2000/svg">
        <rect width="400" height="300" fill={bgSoft} />
        <g stroke={rule} strokeWidth="1">
          <line x1="0" y1="220" x2="400" y2="220" />
          <line x1="0" y1="240" x2="400" y2="240" strokeDasharray="4 6" />
        </g>
        <g stroke={ink} strokeWidth="2" fill="none">
          {/* base row crates */}
          <rect x="40" y="170" width="80" height="50" />
          <rect x="130" y="170" width="80" height="50" />
          <rect x="220" y="170" width="80" height="50" />
          <rect x="310" y="170" width="50" height="50" />
          {/* upper row */}
          <rect x="80" y="115" width="80" height="50" />
          <rect x="170" y="115" width="80" height="50" />
          <rect x="260" y="115" width="50" height="50" />
          {/* top row */}
          <rect x="120" y="60" width="80" height="50" />
          <rect x="210" y="60" width="50" height="50" />
        </g>
        <g fill={brass}>
          <circle cx="160" cy="85" r="3" />
          <circle cx="200" cy="140" r="3" />
          <circle cx="290" cy="195" r="3" />
        </g>
      </svg>
    ),
  },
  {
    id: "vegetables",
    index: "02",
    sector: "Vegetables",
    title: "Fields to wholesalers.",
    note: "Fresh vegetables aligned with European retail demand, sourced from established Egyptian producers.",
    cover: (
      <svg viewBox="0 0 400 300" role="img" aria-label="Stylised farm rows leading to a horizon" xmlns="http://www.w3.org/2000/svg">
        <rect width="400" height="300" fill={bgSoft} />
        <g stroke={ink} strokeWidth="1.4" fill="none">
          {Array.from({ length: 7 }).map((_, i) => (
            <path key={i} d={`M ${30 + i * 18} 280 Q 200 ${260 - i * 12} ${370 - i * 18} 280`} />
          ))}
        </g>
        <line x1="0" y1="120" x2="400" y2="120" stroke={rule} strokeWidth="1" />
        <circle cx="200" cy="120" r="34" fill="none" stroke={signal} strokeWidth="1.5" />
        <circle cx="200" cy="120" r="3" fill={signal} />
      </svg>
    ),
  },
  {
    id: "hospitality",
    index: "03",
    sector: "Hospitality",
    title: "Lounges and premium venues.",
    note: "Procurement support, supplier introductions, and training coordination for hotels, bars, and cigar lounges.",
    cover: (
      <svg viewBox="0 0 400 300" role="img" aria-label="Abstract lounge with curling smoke and bar shelf" xmlns="http://www.w3.org/2000/svg">
        <rect width="400" height="300" fill={ink} />
        <g stroke={bg} strokeOpacity="0.18" strokeWidth="1">
          <line x1="0" y1="180" x2="400" y2="180" />
          <line x1="0" y1="200" x2="400" y2="200" />
          <line x1="0" y1="220" x2="400" y2="220" />
        </g>
        {/* bottle silhouettes */}
        <g fill={bg} opacity="0.85">
          <rect x="60" y="150" width="22" height="50" rx="2" />
          <rect x="100" y="138" width="22" height="62" rx="2" />
          <rect x="140" y="160" width="22" height="40" rx="2" />
        </g>
        {/* curling smoke */}
        <g stroke={brass} strokeWidth="1.5" fill="none" strokeLinecap="round">
          <path d="M 280 220 C 300 180, 260 140, 290 100" />
          <path d="M 310 220 C 330 175, 295 135, 320 90" />
          <path d="M 340 220 C 358 180, 330 140, 348 105" />
        </g>
        <text x="32" y="40" fill={bg} fontFamily="ui-monospace, monospace" fontSize="11" letterSpacing="3" opacity="0.7">
          AFTER HOURS
        </text>
      </svg>
    ),
  },
  {
    id: "egyptian-origins",
    index: "04",
    sector: "Egyptian origins",
    title: "Where supply begins.",
    note: "Established Egyptian producers and trading houses with credible volume for the European market.",
    cover: (
      <svg viewBox="0 0 400 300" role="img" aria-label="Sun setting over a triangular silhouette" xmlns="http://www.w3.org/2000/svg">
        <rect width="400" height="300" fill={bgSoft} />
        <circle cx="200" cy="155" r="60" fill={brass} fillOpacity="0.12" />
        <circle cx="200" cy="155" r="60" fill="none" stroke={brass} strokeWidth="1.5" />
        <line x1="0" y1="220" x2="400" y2="220" stroke={ink} strokeWidth="1.5" />
        <polygon points="120,220 200,90 280,220" fill="none" stroke={ink} strokeWidth="2" />
        <polygon points="200,220 250,150 300,220" fill="none" stroke={ink} strokeWidth="1.5" opacity="0.45" />
        <g fill={inkSoft} fontFamily="ui-monospace, monospace" fontSize="10" letterSpacing="3">
          <text x="32" y="270">EG</text>
          <text x="350" y="270" textAnchor="end">CAIRO · ALEXANDRIA</text>
        </g>
      </svg>
    ),
  },
  {
    id: "logistics",
    index: "05",
    sector: "Logistics",
    title: "Trade routes into Europe.",
    note: "Sea and land routes from North Africa into Polish and EU buyer networks, coordinated end to end.",
    cover: (
      <svg viewBox="0 0 400 300" role="img" aria-label="Trade route arc between two coastal markers" xmlns="http://www.w3.org/2000/svg">
        <rect width="400" height="300" fill={bgSoft} />
        <g stroke={rule} strokeWidth="1">
          {Array.from({ length: 6 }).map((_, i) => (
            <line key={i} x1="0" y1={50 + i * 40} x2="400" y2={50 + i * 40} strokeDasharray="3 8" />
          ))}
        </g>
        <path d="M 50 230 Q 200 60 350 130" stroke={accent} strokeWidth="2.5" fill="none" />
        <circle cx="50" cy="230" r="6" fill={brass} />
        <circle cx="350" cy="130" r="6" fill={accent} />
        <g fill={inkSoft} fontFamily="ui-monospace, monospace" fontSize="10" letterSpacing="3">
          <text x="32" y="260">ORIGIN · EG</text>
          <text x="368" y="160" textAnchor="end">EU · PL</text>
        </g>
      </svg>
    ),
  },
  {
    id: "warsaw-anchor",
    index: "06",
    sector: "Polish anchor",
    title: "Warsaw on the line.",
    note: "A registered Polish company with a real address, a named counterpart, and the practical ability to follow through locally.",
    cover: (
      <svg viewBox="0 0 400 300" role="img" aria-label="Editorial map plate with Warsaw marker" xmlns="http://www.w3.org/2000/svg">
        <rect width="400" height="300" fill={ink} />
        <g stroke={bg} strokeOpacity="0.16" strokeWidth="1">
          {Array.from({ length: 9 }).map((_, i) => (
            <line key={`v${i}`} x1={i * 50} y1="0" x2={i * 50} y2="300" />
          ))}
          {Array.from({ length: 7 }).map((_, i) => (
            <line key={`h${i}`} x1="0" y1={i * 50} x2="400" y2={i * 50} />
          ))}
        </g>
        <path
          d="M 130 80 L 200 70 L 260 90 L 290 130 L 280 180 L 230 220 L 170 215 L 130 180 Z"
          fill="none"
          stroke={bg}
          strokeOpacity="0.65"
          strokeWidth="1.5"
        />
        <circle cx="220" cy="150" r="6" fill={brass} />
        <line x1="220" y1="150" x2="220" y2="250" stroke={brass} strokeWidth="1" />
        <text x="220" y="270" fill={bg} fontFamily="ui-monospace, monospace" fontSize="11" letterSpacing="3" textAnchor="middle">
          WARSZAWA · 52.23°N
        </text>
      </svg>
    ),
  },
];

export default function Gallery() {
  return (
    <section id="gallery" className="py-24 md:py-32">
      <SectionHeader
        index="05 / Atmosphere"
        eyebrow="Where we work"
        title={
          <>
            The world Cravelle moves through<span className="text-[color:var(--accent)]">.</span>
          </>
        }
        intro={
          <p>
            Six visual notes from the lanes Cravelle covers, from Egyptian production to European
            buyer networks, with Warsaw as the anchor point.
          </p>
        }
      />

      <div className="container-edge mt-14">
        <ul className="gallery-grid">
          {cards.map((c) => (
            <li key={c.id} className="gallery-card reveal">
              <div className="gallery-cover">{c.cover}</div>
              <div className="gallery-meta">
                <span>{c.index} / {c.sector}</span>
              </div>
              <h3 className="gallery-title">{c.title}</h3>
              <p className="gallery-note">{c.note}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
