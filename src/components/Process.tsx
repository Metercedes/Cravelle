import { useDict } from "../lib/i18n";
import SectionHeader from "./SectionHeader";

export default function Process() {
  const t = useDict();
  return (
    <section className="py-24 md:py-32">
      <SectionHeader
        index={t.processSection.indexLabel}
        eyebrow={t.processSection.eyebrow}
        title={t.processSection.title}
        intro={<p>{t.processSection.intro}</p>}
      />

      <div className="container-edge mt-16">
        <ol className="grid gap-x-8 gap-y-10 md:grid-cols-2">
          {t.processSteps.map((s) => (
            <li key={s.n} className="reveal relative pl-12">
              <span className="absolute left-0 top-1 font-mono text-[0.7rem] tracking-[0.18em] text-[color:var(--brass)]">
                {s.n}
              </span>
              <span
                className="absolute left-7 top-2 h-full w-px bg-[color:var(--rule-soft)]"
                aria-hidden
              />
              <h3 className="font-serif text-[1.5rem] leading-[1.2] tracking-[-0.01em] md:text-[1.65rem]">
                {s.title}
              </h3>
              <p className="mt-3 max-w-prose text-[15px] leading-[1.65] text-[color:var(--fg-soft)]">
                {s.body}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
