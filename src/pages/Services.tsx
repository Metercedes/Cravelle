import { useEffect } from "react";
import { Link, useLocation, useParams } from "react-router-dom";
import Disclaimer from "../components/Disclaimer";
import CTASection from "../components/CTASection";
import { useDict } from "../lib/i18n";
import { useSeo } from "../lib/seo";

export default function Services() {
  const t = useDict();
  const { hash } = useLocation();
  const params = useParams();

  useSeo({
    title: t.meta.pages.services.title,
    description: t.meta.pages.services.description,
    path: "/services",
  });

  useEffect(() => {
    const slug = hash?.slice(1) || params.slug;
    if (slug) {
      const el = document.getElementById(slug);
      if (el) {
        const top = el.getBoundingClientRect().top + window.scrollY - 96;
        window.scrollTo({ top, behavior: "smooth" });
      }
    }
  }, [hash, params.slug]);

  const total = t.servicePillars.length;

  return (
    <>
      <section className="border-b border-[color:var(--rule)] pt-32 md:pt-40">
        <div className="container-edge">
          <div className="flex items-center justify-between font-mono text-[0.7rem] uppercase tracking-[0.2em] text-[color:var(--fg-soft)]">
            <span>{t.servicesPage.indexLabel}</span>
            <span>{total} {t.servicesPage.countSuffix}</span>
          </div>
          <div className="hairline-x mt-2" />
          <h1 className="mt-12 max-w-4xl font-serif text-display-xl">{t.servicesPage.title}</h1>
          <p className="mt-8 max-w-2xl text-[1.05rem] leading-[1.6] text-[color:var(--fg-soft)]">
            {t.servicesPage.intro}
          </p>
        </div>
      </section>

      <section className="container-edge pt-12">
        <nav
          aria-label={t.servicesPage.jumpAria}
          className="grid gap-px overflow-hidden border-l border-t border-[color:var(--rule)] md:grid-cols-3"
        >
          {t.servicePillars.map((p) => (
            <Link
              key={p.slug}
              to={`#${p.slug}`}
              className="group flex items-baseline gap-3 border-b border-r border-[color:var(--rule)] bg-[color:var(--bg)] p-5 hover:bg-[color:var(--bg-soft)]/60"
            >
              <span className="font-mono text-[0.7rem] tracking-[0.18em] text-[color:var(--brass)]">
                {p.number}
              </span>
              <span className="text-[14.5px]">{p.shortTitle}</span>
              <span
                aria-hidden
                className="ms-auto translate-x-0 font-mono text-[0.9rem] text-[color:var(--fg-soft)] transition-transform group-hover:translate-x-1"
              >
                ↓
              </span>
            </Link>
          ))}
        </nav>
      </section>

      <div className="container-edge py-20 md:py-28">
        <ol className="flex flex-col gap-20 md:gap-28">
          {t.servicePillars.map((p, i) => (
            <li key={p.slug} id={p.slug} className="reveal scroll-mt-28">
              <div className="flex items-center justify-between font-mono text-[0.7rem] uppercase tracking-[0.18em] text-[color:var(--fg-soft)]">
                <span>
                  {p.number} / {p.shortTitle}
                </span>
                <span>{t.servicesPage.pageOf(i + 1, total)}</span>
              </div>
              <div className="hairline-x mt-2" />

              <div className="mt-10 grid gap-x-10 gap-y-10 md:grid-cols-12">
                <div className="md:col-span-6">
                  <h2 className="font-serif text-display-md leading-[1.05]">{p.title}</h2>
                  <p className="mt-6 max-w-prose text-[15px] leading-[1.65] text-[color:var(--fg-soft)]">
                    <span className="eyebrow me-2">{t.servicesPage.forLabel}</span>
                    {p.forWhom}
                  </p>
                </div>

                <div className="md:col-span-6">
                  <div className="border-s border-[color:var(--rule)] ps-6">
                    <div className="eyebrow">{t.servicesPage.whatLabel}</div>
                    <ul className="mt-4 grid gap-3">
                      {p.whatWeDo.map((item) => (
                        <li
                          key={item}
                          className="grid grid-cols-[16px_1fr] gap-3 text-[15px] leading-[1.55] text-[color:var(--fg)]"
                        >
                          <span aria-hidden className="mt-[10px] block h-px w-3 bg-[color:var(--brass)]" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                    <div className="mt-8">
                      <div className="eyebrow">{t.servicesPage.outcomeLabel}</div>
                      <p className="mt-3 text-[15px] leading-[1.6] text-[color:var(--fg)]">
                        {p.outcome}
                      </p>
                    </div>
                    <div className="mt-10">
                      <Link to="/contact" className="btn-primary arrow-after">
                        {p.cta}
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </li>
          ))}
        </ol>

        <div className="mt-20">
          <Disclaimer />
        </div>
      </div>

      <CTASection />
    </>
  );
}
