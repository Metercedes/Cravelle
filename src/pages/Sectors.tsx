import { Link } from "react-router-dom";
import Disclaimer from "../components/Disclaimer";
import CTASection from "../components/CTASection";
import { useDict } from "../lib/i18n";
import { useSeo } from "../lib/seo";

export default function Sectors() {
  const t = useDict();
  useSeo({
    title: t.meta.pages.sectors.title,
    description: t.meta.pages.sectors.description,
    path: "/sectors",
  });

  return (
    <>
      <section className="border-b border-[color:var(--rule)] pt-32 md:pt-40">
        <div className="container-edge">
          <div className="flex items-center justify-between font-mono text-[0.7rem] uppercase tracking-[0.2em] text-[color:var(--fg-soft)]">
            <span>{t.sectorsPage.indexLabel}</span>
            <span>
              {t.sectors.length} {t.sectorsPage.countSuffix}
            </span>
          </div>
          <div className="hairline-x mt-2" />
          <h1 className="mt-12 max-w-4xl font-serif text-display-xl">{t.sectorsPage.title}</h1>
          <p className="mt-8 max-w-2xl text-[1.05rem] leading-[1.6] text-[color:var(--fg-soft)]">
            {t.sectorsPage.intro}
          </p>
        </div>
      </section>

      <section className="container-edge py-20 md:py-28">
        <ul className="grid gap-px overflow-hidden border-l border-t border-[color:var(--rule)] md:grid-cols-2">
          {t.sectors.map((s, i) => (
            <li
              key={s.id}
              className="reveal border-b border-r border-[color:var(--rule)] bg-[color:var(--bg)] p-7 md:p-10 md:last:col-span-2"
            >
              <div className="flex items-center justify-between">
                <span className="font-mono text-[0.7rem] tracking-[0.18em] text-[color:var(--brass)]">
                  {String(i + 1).padStart(2, "0")}
                </span>
              </div>
              <h2 className="mt-5 font-serif text-[1.55rem] leading-[1.2] tracking-[-0.01em] md:text-[1.75rem]">
                {s.title}
              </h2>
              <p className="mt-3 max-w-prose text-[15px] leading-[1.65] text-[color:var(--fg-soft)]">
                {s.note}
              </p>
            </li>
          ))}
        </ul>

        <div className="mt-14 flex flex-wrap items-center gap-4">
          <Link to="/contact" className="btn-primary">
            {t.sectorsPage.primary}
            <span aria-hidden className="i-arrow">→</span>
          </Link>
          <Link to="/services" className="btn-ghost">
            {t.sectorsPage.secondary}
          </Link>
        </div>

        <div className="mt-16">
          <Disclaimer />
        </div>
      </section>

      <CTASection />
    </>
  );
}
