import { m as motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";

type Props = {
  index: string;
  eyebrow: string;
  title: ReactNode;
  intro?: ReactNode;
  align?: "left" | "spread";
};

export default function SectionHeader({ index, eyebrow, title, intro, align = "spread" }: Props) {
  const reduce = useReducedMotion();
  return (
    <header className="container-edge">
      <div className="flex items-center justify-between font-mono text-[0.7rem] uppercase tracking-[0.2em] text-[color:var(--fg-mute)]">
        <span>{index}</span>
        <span className="hidden sm:inline">{eyebrow}</span>
      </div>
      <div className="hairline-x mt-2" />
      <div className={`mt-10 grid gap-y-6 md:gap-x-10 ${align === "spread" ? "md:grid-cols-12" : ""}`}>
        <motion.h2
          initial={reduce ? false : { opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6, ease: [0.22, 0.61, 0.36, 1] }}
          className={`font-serif text-display-lg ${align === "spread" ? "md:col-span-7" : ""}`}
        >
          {title}
        </motion.h2>
        {intro && (
          <motion.div
            initial={reduce ? false : { opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.6, delay: 0.08, ease: [0.22, 0.61, 0.36, 1] }}
            className={`text-[15.5px] leading-[1.65] text-[color:var(--fg-soft)] ${align === "spread" ? "md:col-span-5 md:pt-3" : "max-w-readable"}`}
          >
            {intro}
          </motion.div>
        )}
      </div>
    </header>
  );
}
