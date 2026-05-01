import { Link } from "react-router-dom";
import Disclaimer from "../components/Disclaimer";
import { useDict } from "../lib/i18n";
import { useSeo } from "../lib/seo";

export default function About() {
  const t = useDict();
  useSeo({
    title: t.meta.pages.about.title,
    description: t.meta.pages.about.description,
    path: "/about",
  });

  return (
    <>
      <section className="border-b border-[color:var(--rule)] pt-32 md:pt-40">
        <div className="container-edge">
          <div className="flex items-center justify-between font-mono text-[0.7rem] uppercase tracking-[0.2em] text-[color:var(--fg-mute)]">
            <span>{t.aboutPage.indexLabel}</span>
            <span>{t.aboutPage.location}</span>
          </div>
          <div className="hairline-x mt-2" />
          <h1 className="mt-12 max-w-4xl font-serif text-display-xl">{t.aboutPage.title}</h1>
        </div>
      </section>

      <section className="container-edge py-20 md:py-28">
        <div className="grid gap-12 md:grid-cols-12">
          <div className="md:col-span-7">
            <div className="space-y-7 text-[16px] leading-[1.75] text-[color:var(--fg-soft)]">
              {t.aboutPage.paragraphs.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>

            <div className="mt-10 flex flex-wrap gap-3">
              <Link to="/services" className="btn-ghost">{t.aboutPage.primary}</Link>
              <Link to="/contact" className="btn-primary arrow-after">{t.aboutPage.secondary}</Link>
            </div>
          </div>

          <aside className="md:col-span-5 md:ps-10">
            <div className="border border-[color:var(--rule)] p-7 md:p-8">
              <div className="eyebrow">{t.aboutPage.coreLaneLabel}</div>
              <p className="mt-3 font-serif text-[1.5rem] leading-[1.15] tracking-[-0.01em]">
                {t.aboutPage.coreLaneBody}
              </p>
            </div>

            <div className="mt-6 border border-[color:var(--rule)] p-7 md:p-8">
              <div className="eyebrow">{t.aboutPage.languagesLabel}</div>
              <p className="mt-3 text-[15px] leading-[1.65] text-[color:var(--fg-soft)]">
                {t.aboutPage.languagesBody}
              </p>
            </div>

            <div className="mt-6 border border-[color:var(--rule)] p-7 md:p-8">
              <div className="eyebrow">{t.aboutPage.credibleLabel}</div>
              <p className="mt-3 text-[15px] leading-[1.65] text-[color:var(--fg-soft)]">
                {t.aboutPage.credibleBody}
              </p>
            </div>
          </aside>
        </div>
      </section>

      <section className="container-edge pb-16">
        <Disclaimer />
      </section>
    </>
  );
}
