import { useDict } from "../lib/i18n";
import SectionHeader from "./SectionHeader";
import {
  IconBuyers,
  IconCarton,
  IconConnect,
  IconGlass,
  IconPyramid,
} from "./icons";

const audienceIcon = {
  "egyptian-exporters": IconPyramid,
  "arabic-suppliers": IconCarton,
  hospitality: IconGlass,
  "european-buyers": IconBuyers,
  "b2b-partners": IconConnect,
} as const;

export default function WhoWeHelp() {
  const t = useDict();
  return (
    <section className="bg-[color:var(--bg-soft)]/50 py-24 md:py-32">
      <SectionHeader
        index={t.audienceSection.indexLabel}
        eyebrow={t.audienceSection.eyebrow}
        title={t.audienceSection.title}
        intro={<p>{t.audienceSection.intro}</p>}
      />

      <div className="container-edge mt-14">
        <ul className="grid gap-px overflow-hidden border-l border-t border-[color:var(--rule)] sm:grid-cols-2">
          {t.audiences.map((a, i) => {
            const Icon = audienceIcon[a.id as keyof typeof audienceIcon];
            return (
              <li
                key={a.id}
                className="reveal border-b border-r border-[color:var(--rule)] bg-[color:var(--bg)] p-7 md:p-9 sm:last:col-span-2"
              >
                <div className="flex items-center justify-between">
                  <span className="font-mono text-[0.7rem] tracking-[0.18em] text-[color:var(--fg-soft)]">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  {Icon && <Icon size={26} className="text-[color:var(--brass)]" />}
                </div>
                <h3 className="mt-5 font-serif text-[1.4rem] leading-[1.2] tracking-[-0.01em]">
                  {a.label}
                </h3>
                <p className="mt-3 text-[14px] leading-[1.6] text-[color:var(--fg-soft)]">{a.note}</p>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
