import { useState, useEffect } from "react";
import { useReducedMotion } from "framer-motion";

// Module-level flag flipped once the initial hydration has completed.
// During SSR and during the first client render (which must match the SSR
// markup), this is false — so motion components render without an opacity:0
// or translateY initial style. After hydration, fresh component mounts (e.g.
// from client-side route changes) read `true` and animations resume normally.
let HAS_HYDRATED = false;

export function markHydrated(): void {
  HAS_HYDRATED = true;
}

// Read-only access for tests / debugging.
export function hasHydrated(): boolean {
  return HAS_HYDRATED;
}

// Hook used inside motion components. Snapshots the global flag at mount time
// so the value is stable for the lifetime of the component, which keeps the
// markup deterministic during the hydration commit.
export function useStableHydrated(): boolean {
  const [v] = useState(() => HAS_HYDRATED);
  return v;
}

// Returns the supplied initial-animation value when it's safe to animate, or
// `false` otherwise. Used as a drop-in replacement for the
// `reduce ? false : { opacity: 0, y: N }` pattern, with the added property
// that SSR and the first client render emit visible content (no opacity:0).
export function useSafeInitial<T>(value: T): T | false {
  const reduce = useReducedMotion();
  const hydrated = useStableHydrated();
  if (!hydrated || reduce) return false;
  return value;
}

// Convenience hook for components that need to know when the app has fully
// hydrated (e.g. to defer side-effects that must not run on the SSR pass).
export function useHydratedEffect(): boolean {
  const [hydrated, setHydrated] = useState(false);
  useEffect(() => {
    setHydrated(true);
  }, []);
  return hydrated;
}
