import { AnimatePresence, m as motion, useReducedMotion } from "framer-motion";
import { useEffect, useState } from "react";

const STORAGE_KEY = "cravelle:intro:seen";
const SESSION_KEY = "cravelle:intro:session";

export default function IntroReveal() {
  const reduce = useReducedMotion();
  const [show, setShow] = useState<boolean | null>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;
    try {
      const session = sessionStorage.getItem(SESSION_KEY);
      const persisted = localStorage.getItem(STORAGE_KEY);
      if (session === "done" || persisted === "done") {
        setShow(false);
        return;
      }
    } catch {
      // storage unavailable: still show the intro once
    }
    setShow(true);
    document.documentElement.style.overflow = "hidden";
    const t = window.setTimeout(() => {
      finish();
    }, reduce ? 600 : 1900);
    return () => window.clearTimeout(t);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const finish = () => {
    try {
      sessionStorage.setItem(SESSION_KEY, "done");
      localStorage.setItem(STORAGE_KEY, "done");
    } catch {
      /* ignore */
    }
    document.documentElement.style.overflow = "";
    setShow(false);
  };

  if (show === null) return null;

  const theme =
    typeof document !== "undefined"
      ? (document.documentElement.dataset.theme as "light" | "dark" | undefined) ?? "light"
      : "light";
  const logoSrc = theme === "dark" ? "/brand/logo-white.png" : "/brand/logo.png";

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          key="intro"
          className="fixed inset-0 z-[80] pointer-events-none"
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
            <motion.img
              src={logoSrc}
              alt=""
              width={240}
              height={64}
              fetchPriority="high"
              decoding="async"
              draggable={false}
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 0.61, 0.36, 1] }}
              className="h-16 w-auto sm:h-20 md:h-24"
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
