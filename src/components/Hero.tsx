import { m as motion, useReducedMotion } from "framer-motion";
import { Link } from "react-router-dom";

export default function Hero() {
  const reduce = useReducedMotion();

  return (
    <section className="relative overflow-hidden border-b border-[color:var(--rule)] pt-28 md:pt-36">
      <div className="pointer-events-none absolute inset-0 grid-bg opacity-[0.35] [mask-image:linear-gradient(180deg,black_0%,black_55%,transparent_100%)]" aria-hidden />

      <div className="container-edge relative">
        <div className="grid grid-cols-12 gap-x-6 pb-20 pt-12 md:pt-20">
          <div className="col-span-12 md:col-span-10">
            <motion.div
              initial={reduce ? false : { opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.22, 0.61, 0.36, 1] }}
              className="eyebrow mb-6"
            >
              Warsaw, Poland. For Arabic-speaking exporters.
            </motion.div>

            <motion.h1
              initial={reduce ? false : { opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: reduce ? 0 : 0.05, ease: [0.22, 0.61, 0.36, 1] }}
              className="font-serif text-display-xl"
            >
              The B2B bridge into <span className="italic text-[color:var(--accent)]">Europe</span>.
            </motion.h1>

            <motion.p
              initial={reduce ? false : { opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: reduce ? 0 : 0.18, ease: [0.22, 0.61, 0.36, 1] }}
              className="mt-8 max-w-2xl text-[1.05rem] leading-[1.6] text-[color:var(--fg-soft)] md:text-[1.15rem]"
            >
              Cravelle helps Arabic-speaking businesses, especially Egyptian exporters, connect with
              Europe through export support, commercial introductions, and market-entry coordination.
            </motion.p>

            <motion.div
              initial={reduce ? false : { opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: reduce ? 0 : 0.32, ease: [0.22, 0.61, 0.36, 1] }}
              className="mt-10 flex flex-wrap items-center gap-3"
            >
              <Link to="/contact" className="btn-primary">
                Discuss an export opportunity
                <span aria-hidden>→</span>
              </Link>
              <Link to="/services" className="btn-ghost">
                See the three services
              </Link>
            </motion.div>
          </div>
        </div>

        <div className="rule" />
      </div>
    </section>
  );
}
