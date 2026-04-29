// Editorial line icons used to break up text-heavy lists.
// Pure inline SVG, single stroke, picks up currentColor so themes apply
// for free. Each icon is decorative (aria-hidden) and ships in the JS bundle
// — no extra network requests, no layout shift.

import type { ReactNode } from "react";

type IconProps = { className?: string; size?: number };

function Frame({
  size = 28,
  className,
  children,
}: IconProps & { children: ReactNode }) {
  return (
    <svg
      viewBox="0 0 32 32"
      width={size}
      height={size}
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth={1.4}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
    >
      {children}
    </svg>
  );
}

// Export and market entry: a crate with an outbound arrow.
export const IconExport = (p: IconProps) => (
  <Frame {...p}>
    <rect x="4" y="13" width="14" height="13" />
    <path d="M4 16h14" />
    <path d="M11 13v13" />
    <path d="M21 9h7v7" />
    <path d="M28 9l-9 9" />
  </Frame>
);

// B2B partnership: two interlocking rings.
export const IconLink = (p: IconProps) => (
  <Frame {...p}>
    <circle cx="12" cy="16" r="6" />
    <circle cx="20" cy="16" r="6" />
  </Frame>
);

// Hospitality: a stemmed glass on a base line.
export const IconGlass = (p: IconProps) => (
  <Frame {...p}>
    <path d="M10 5h12l-2 7a4 4 0 01-8 0z" />
    <path d="M16 19v7" />
    <path d="M11 27h10" />
  </Frame>
);

// Egyptian exporters: pyramid silhouette with an outbound arrow.
export const IconPyramid = (p: IconProps) => (
  <Frame {...p}>
    <path d="M5 25h14L12 10z" />
    <path d="M22 18h6" />
    <path d="M25 15l3 3-3 3" />
  </Frame>
);

// Arabic-speaking suppliers: an open carton with a tag.
export const IconCarton = (p: IconProps) => (
  <Frame {...p}>
    <path d="M4 11l12-5 12 5-12 5z" />
    <path d="M4 11v10l12 5" />
    <path d="M28 11v10l-12 5" />
    <path d="M16 16v15" />
  </Frame>
);

// European buyers: the EU starring motif, abstracted to four dots in an arc.
export const IconBuyers = (p: IconProps) => (
  <Frame {...p}>
    <path d="M6 22a10 10 0 0120 0" />
    <circle cx="9" cy="18" r="1.2" fill="currentColor" />
    <circle cx="16" cy="14" r="1.2" fill="currentColor" />
    <circle cx="23" cy="18" r="1.2" fill="currentColor" />
    <circle cx="16" cy="22" r="1.2" fill="currentColor" />
  </Frame>
);

// B2B connector: handshake-as-arrows, two arrows meeting at a node.
export const IconConnect = (p: IconProps) => (
  <Frame {...p}>
    <path d="M4 16h11" />
    <path d="M12 12l3 4-3 4" />
    <path d="M28 16H17" />
    <path d="M20 20l-3-4 3-4" />
    <circle cx="16" cy="16" r="1.4" fill="currentColor" />
  </Frame>
);
