import { Link } from "react-router-dom";
import { servicePillars } from "../content/site";
import SectionHeader from "./SectionHeader";
import { IconExport, IconGlass, IconLink } from "./icons";

const pillarIcon = {
  "export-and-market-entry": IconExport,
  "b2b-partnership-facilitation": IconLink,
  "hospitality-and-premium-supplier-sourcing": IconGlass,
} as const;

export default function ServicePillars() {
  return (
    <section id="services" className="py-24 md:py-32">
      <SectionHeader
        index="01 / Services"
        eyebrow="What we do"
        title={
          <>
            Three focused services.<br />
            <span className="text-[color:var(--fg-mute)]">Nothing more.</span>
          </>
        }
        intro={
          <p>
            Cravelle is a commercial connector between Arabic-speaking suppliers and the European
            market. Each service has a defined scope and a clear outcome.
          </p>
        }
      />

      <div className="container-edge mt-14">
        <ul className="border-t border-[color:var(--rule)]">
          {servicePillars.map((p) => {
            const Icon = pillarIcon[p.slug as keyof typeof pillarIcon];
            return (
              <li
                key={p.slug}
                className="reveal group border-b border-[color:var(--rule)]"
              >
                <Link
                  to={`/services#${p.slug}`}
                  className="grid grid-cols-12 gap-x-6 gap-y-4 px-0 py-8 transition-colors hover:bg-[color:var(--bg-soft)]/50 md:py-10"
                >
                  <div className="col-span-2 flex items-start gap-3 md:col-span-1">
                    <span className="font-mono text-[0.75rem] tracking-[0.18em] text-[color:var(--fg-soft)]">
                      {p.number}
                    </span>
                  </div>
                  <div className="col-span-10 md:col-span-6">
                    <div className="flex items-center gap-4">
                      {Icon && (
                        <Icon
                          size={28}
                          className="shrink-0 text-[color:var(--brass)] transition-transform duration-300 group-hover:translate-x-[2px]"
                        />
                      )}
                      <h3 className="font-serif text-[1.6rem] leading-[1.15] tracking-[-0.01em] md:text-[2rem]">
                        {p.title}
                      </h3>
                    </div>
                    <p className="mt-3 max-w-prose text-[14.5px] leading-[1.6] text-[color:var(--fg-soft)]">
                      {p.forWhom}
                    </p>
                  </div>
                  <div className="col-span-12 md:col-span-4 md:pl-6">
                    <p className="text-[14px] leading-[1.6] text-[color:var(--fg-soft)]">
                      <span className="eyebrow mr-2">Outcome</span>
                      {p.outcome}
                    </p>
                  </div>
                  <div className="col-span-12 md:col-span-1 md:flex md:justify-end">
                    <span
                      aria-hidden
                      className="font-mono text-[1.1rem] text-[color:var(--fg-soft)] transition-transform group-hover:translate-x-1"
                    >
                      →
                    </span>
                  </div>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
