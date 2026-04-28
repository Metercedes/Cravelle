import { whyCravelle } from "../content/site";
import SectionHeader from "./SectionHeader";

export default function WhyCravelle() {
  return (
    <section className="border-y border-[color:var(--rule)] bg-[color:var(--bg-soft)]/50 py-24 md:py-32">
      <SectionHeader index="04 / Position" eyebrow={whyCravelle.eyebrow} title={whyCravelle.heading} />

      <div className="container-edge mt-12">
        <div className="grid gap-y-10 md:grid-cols-2 md:gap-x-12">
          {whyCravelle.points.map((p, i) => (
            <div
              key={p.title}
              className="reveal border-t border-[color:var(--rule-soft)] pt-6 md:last:col-span-2"
            >
              <div className="flex items-baseline gap-3">
                <span className="font-mono text-[0.7rem] tracking-[0.18em] text-[color:var(--fg-soft)]">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="font-serif text-[1.45rem] leading-[1.2] tracking-[-0.01em]">
                  {p.title}
                </h3>
              </div>
              <p className="mt-3 max-w-prose text-[15px] leading-[1.65] text-[color:var(--fg-soft)]">
                {p.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
