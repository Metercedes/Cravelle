import { m as motion, useReducedMotion } from "framer-motion";
import { processSteps } from "../content/site";
import SectionHeader from "./SectionHeader";

export default function Process() {
  const reduce = useReducedMotion();
  return (
    <section className="py-24 md:py-32">
      <SectionHeader
        index="03 / Method"
        eyebrow="How we work"
        title={<>A practical, written, six-step method<span className="text-[color:var(--accent)]">.</span></>}
        intro={
          <p>
            Every engagement runs through the same written sequence, so both sides see the
            route, the pace, and where qualified professionals take over.
          </p>
        }
      />

      <div className="container-edge mt-16">
        <ol className="grid gap-x-8 gap-y-10 md:grid-cols-2">
          {processSteps.map((s, i) => (
            <motion.li
              key={s.n}
              initial={reduce ? false : { opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.55, delay: Math.min(i * 0.05, 0.25), ease: [0.22, 0.61, 0.36, 1] }}
              className="relative pl-12"
            >
              <span className="absolute left-0 top-1 font-mono text-[0.7rem] tracking-[0.18em] text-[color:var(--brass)]">
                {s.n}
              </span>
              <span className="absolute left-7 top-2 h-full w-px bg-[color:var(--rule-soft)]" aria-hidden />
              <h3 className="font-serif text-[1.5rem] leading-[1.2] tracking-[-0.01em] md:text-[1.65rem]">
                {s.title}
              </h3>
              <p className="mt-3 max-w-prose text-[15px] leading-[1.65] text-[color:var(--fg-soft)]">
                {s.body}
              </p>
            </motion.li>
          ))}
        </ol>
      </div>
    </section>
  );
}
