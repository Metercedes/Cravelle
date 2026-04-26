import { m as motion } from "framer-motion";
import { audiences } from "../content/site";
import { useSafeInitial } from "../lib/animation";
import SectionHeader from "./SectionHeader";

export default function WhoWeHelp() {
  const initial = useSafeInitial({ opacity: 0, y: 12 });
  return (
    <section className="bg-[color:var(--bg-soft)]/50 py-24 md:py-32">
      <SectionHeader
        index="02 / Audience"
        eyebrow="Who we help"
        title={
          <>
            For Arabic-speaking exporters and the European partners who buy from them<span className="text-[color:var(--accent)]">.</span>
          </>
        }
        intro={
          <p>
            Cravelle works with companies on either side of the same conversation. The brief is
            always commercial, written, and specific.
          </p>
        }
      />

      <div className="container-edge mt-14">
        <ul className="grid gap-px overflow-hidden border-l border-t border-[color:var(--rule)] sm:grid-cols-2">
          {audiences.map((a, i) => (
            <motion.li
              key={a.id}
              initial={initial}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.5, delay: Math.min(i * 0.05, 0.2), ease: [0.22, 0.61, 0.36, 1] }}
              className="border-b border-r border-[color:var(--rule)] bg-[color:var(--bg)] p-7 md:p-9 sm:last:col-span-2"
            >
              <div className="flex items-center justify-between">
                <span className="font-mono text-[0.7rem] tracking-[0.18em] text-[color:var(--fg-mute)]">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span aria-hidden className="font-mono text-[0.7rem] tracking-[0.18em] text-[color:var(--brass)]">·</span>
              </div>
              <h3 className="mt-5 font-serif text-[1.4rem] leading-[1.2] tracking-[-0.01em]">
                {a.label}
              </h3>
              <p className="mt-3 text-[14px] leading-[1.6] text-[color:var(--fg-soft)]">{a.note}</p>
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  );
}
