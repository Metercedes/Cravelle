import { audiences } from "../content/site";
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
  return (
    <section className="bg-[color:var(--bg-soft)]/50 py-24 md:py-32">
      <SectionHeader
        index="02 / Audience"
        eyebrow="Who we help"
        title={
          <>
            For Arabic-speaking exporters and the European partners who buy from them
            <span className="text-[color:var(--accent)]">.</span>
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
          {audiences.map((a, i) => {
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
