import { AnimatePresence, m as motion, useReducedMotion } from "framer-motion";
import { useEffect, useState } from "react";

// The intro is mounted once at App start, so it plays on every fresh page
// load (cold load + browser refresh) and stays out of the way during
// client-side route changes. We restrict the reveal to the homepage so
// refreshing a deep route doesn't surprise the user with a brand splash.
export default function IntroReveal() {
  const reduce = useReducedMotion();
  const [show, setShow] = useState<boolean | null>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (window.location.pathname !== "/") {
      setShow(false);
      return;
    }
    setShow(true);
    document.documentElement.style.overflow = "hidden";
    const duration = reduce ? 600 : 1900;
    const t = window.setTimeout(() => {
      document.documentElement.style.overflow = "";
      setShow(false);
    }, duration);
    return () => {
      window.clearTimeout(t);
      document.documentElement.style.overflow = "";
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (show === null) return null;

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          key="intro"
          className="fixed inset-0 z-[80] pointer-events-none text-[color:var(--fg)]"
          aria-hidden="true"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.4, ease: [0.22, 0.61, 0.36, 1] } }}
        >
          <motion.div
            className="absolute left-0 top-0 bottom-0 w-1/2 origin-right"
            initial={{ x: 0 }}
            animate={{ x: reduce ? 0 : "-100%" }}
            transition={{ duration: reduce ? 0.4 : 1.1, delay: reduce ? 0.1 : 0.95, ease: [0.85, 0, 0.15, 1] }}
            style={{ background: "var(--bg)" }}
          />
          <motion.div
            className="absolute right-0 top-0 bottom-0 w-1/2 origin-left"
            initial={{ x: 0 }}
            animate={{ x: reduce ? 0 : "100%" }}
            transition={{ duration: reduce ? 0.4 : 1.1, delay: reduce ? 0.1 : 0.95, ease: [0.85, 0, 0.15, 1] }}
            style={{ background: "var(--bg)" }}
          />

          <div className="absolute inset-0 grid place-items-center px-6">
            <motion.span
              role="img"
              aria-label="Cravelle"
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 0.61, 0.36, 1] }}
              className="brand-logo block h-24 sm:h-28 md:h-32"
              style={{ aspectRatio: "434 / 556", width: "auto" }}
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
