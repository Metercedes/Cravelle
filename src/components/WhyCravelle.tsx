import { m as motion } from "framer-motion";
import { whyCravelle } from "../content/site";
import { useSafeInitial } from "../lib/animation";
import SectionHeader from "./SectionHeader";

export default function WhyCravelle() {
  const initial = useSafeInitial({ opacity: 0, y: 14 });
  return (
    <section className="border-y border-[color:var(--rule)] bg-[color:var(--bg-soft)]/50 py-24 md:py-32">
      <SectionHeader
        index="04 / Position"
        eyebrow={whyCravelle.eyebrow}
        title={whyCravelle.heading}
      />

      <div className="container-edge mt-12">
        <div className="grid gap-y-10 md:grid-cols-2 md:gap-x-12">
          {whyCravelle.points.map((p, i) => (
            <motion.div
              key={p.title}
              initial={initial}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.5, delay: Math.min(i * 0.05, 0.2), ease: [0.22, 0.61, 0.36, 1] }}
              className="border-t border-[color:var(--rule-soft)] pt-6 md:last:col-span-2"
            >
              <div className="flex items-baseline gap-3">
                <span className="font-mono text-[0.7rem] tracking-[0.18em] text-[color:var(--fg-mute)]">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="font-serif text-[1.45rem] leading-[1.2] tracking-[-0.01em]">
                  {p.title}
                </h3>
              </div>
              <p className="mt-3 max-w-prose text-[15px] leading-[1.65] text-[color:var(--fg-soft)]">
                {p.body}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
