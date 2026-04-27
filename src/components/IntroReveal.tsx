import { AnimatePresence, m as motion, useReducedMotion } from "framer-motion";
import { useEffect, useState } from "react";

// Intro on cold load and refresh of the homepage. Sequence:
//   1. Cravelle logo fades in, centred.
//   2. Logo glides slightly to the left.
//   3. "Cravelle sp. z o.o." fades in beside the logo.
//   4. Logo and caption drift upward and fade with the overlay.
//   5. The page (already rendered underneath) is revealed.
//
// SSR / hydration:
//   The component returns null during SSR and the very first client render
//   (show === null), so it never affects the prerendered HTML or causes a
//   hydration mismatch. The effect then decides whether to play and drives
//   a small staged state machine.
//
// Accessibility:
//   - aria-hidden + pointer-events-none, so the overlay never blocks focus,
//     keyboard navigation, or screen readers.
//   - prefers-reduced-motion: skip lateral movement; soft fade only.
//   - No focus trap, no live region, no surprise focus shifts.

type Stage = "show" | "shift";

export default function IntroReveal() {
  const reduce = useReducedMotion();
  const [show, setShow] = useState<boolean | null>(null);
  const [stage, setStage] = useState<Stage>("show");

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (window.location.pathname !== "/") {
      setShow(false);
      return;
    }
    setShow(true);

    if (reduce) {
      const hideT = window.setTimeout(() => setShow(false), 700);
      return () => window.clearTimeout(hideT);
    }

    const shiftT = window.setTimeout(() => setStage("shift"), 850);
    const hideT = window.setTimeout(() => setShow(false), 1900);
    return () => {
      window.clearTimeout(shiftT);
      window.clearTimeout(hideT);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (show === null) return null;

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          key="intro"
          aria-hidden="true"
          initial={{ opacity: 1 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.5, ease: [0.22, 0.61, 0.36, 1] } }}
          className="pointer-events-none fixed inset-0 z-[80] grid place-items-center px-6"
          style={{ background: "var(--bg)" }}
        >
          <motion.div
            className="flex items-end gap-4 sm:gap-5"
            initial={{ x: 0, y: 0, opacity: 0 }}
            animate={
              reduce
                ? { x: 0, y: 0, opacity: 1 }
                : stage === "show"
                  ? { x: 0, y: 0, opacity: 1 }
                  : { x: "-9%", y: 0, opacity: 1 }
            }
            exit={{
              x: reduce ? 0 : "-9%",
              y: reduce ? 0 : -18,
              opacity: 0,
              transition: { duration: 0.55, ease: [0.22, 0.61, 0.36, 1] },
            }}
            transition={{
              duration: stage === "show" ? 0.7 : 0.9,
              ease: [0.22, 0.61, 0.36, 1],
            }}
          >
            <span
              role="img"
              aria-label="Cravelle"
              className="brand-logo block h-20 sm:h-24 md:h-28"
              style={{ aspectRatio: "434 / 556", width: "auto", color: "var(--fg)" }}
            />
            <motion.span
              className="whitespace-nowrap pb-2 font-serif text-[0.95rem] tracking-[-0.005em] text-[color:var(--fg)] sm:text-[1.05rem] md:text-[1.15rem]"
              initial={{ opacity: 0, y: 4 }}
              animate={{
                opacity: !reduce && stage === "shift" ? 1 : 0,
                y: !reduce && stage === "shift" ? 0 : 4,
              }}
              transition={{ duration: 0.55, ease: [0.22, 0.61, 0.36, 1] }}
            >
              Cravelle sp. z o.o.
            </motion.span>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
