// Route-safe reveal wiring.
//
// Earlier versions ran a single IntersectionObserver from main.tsx, which only
// scanned the DOM once at app boot. Client-side navigation (e.g. /services via
// the navbar) mounted fresh .reveal elements that were never observed, so they
// stayed at opacity: 0 / translate(0,14px) — visible only after a hard refresh.
//
// This module exposes a singleton observer, plus a hook that re-queries the
// DOM on every route change and observes any not-yet-revealed nodes. As soon
// as an element enters the viewport it gets .is-visible and is unobserved.

import { useEffect } from "react";
import { useLocation } from "react-router-dom";

let observer: IntersectionObserver | null = null;

function ensureObserver(): IntersectionObserver | null {
  if (typeof window === "undefined") return null;
  if (observer) return observer;
  if (typeof IntersectionObserver === "undefined") {
    document
      .querySelectorAll<HTMLElement>(".reveal")
      .forEach((el) => el.classList.add("is-visible"));
    return null;
  }
  observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer?.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15, rootMargin: "0px 0px -8% 0px" },
  );
  return observer;
}

function observeAll(): void {
  const io = ensureObserver();
  if (!io) return;
  document
    .querySelectorAll<HTMLElement>(".reveal:not(.is-visible)")
    .forEach((el) => io.observe(el));
}

// Public: call once from the app entry to handle SSR/initial load.
export function bootRevealOnce(): void {
  if (typeof window === "undefined") return;
  // Defer to the next frame so React has a chance to commit any reveal nodes
  // that ship in the prerendered HTML.
  requestAnimationFrame(observeAll);
}

// Public: hook used inside <App /> so each route change re-scans for new
// .reveal nodes. Cheap — IntersectionObserver dedupes already-observed nodes
// in our case via the `.reveal:not(.is-visible)` selector.
export function useRouteReveal(): void {
  const { pathname } = useLocation();
  useEffect(() => {
    // requestAnimationFrame so the new route's elements are mounted before we
    // observe them; otherwise they fade in before the browser has them laid
    // out and the eye sees a flicker.
    const id = requestAnimationFrame(observeAll);
    return () => cancelAnimationFrame(id);
  }, [pathname]);
}
