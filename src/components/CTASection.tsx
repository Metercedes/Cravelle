import { Link } from "react-router-dom";
import { siteCompany } from "../content/site";
import { useDict } from "../lib/i18n";

export default function CTASection() {
  const t = useDict();
  return (
    <section data-on-dark className="bg-[color:var(--fg)] py-24 text-[color:var(--bg)] md:py-28">
      <div className="container-edge">
        <div className="flex items-center justify-between font-mono text-[0.7rem] uppercase tracking-[0.2em] text-[color:var(--bg)]/80">
          <span>{t.cta.indexLabel}</span>
          <span className="hidden sm:inline">{t.cta.location}</span>
        </div>

        <div className="mt-8 grid gap-y-10 md:grid-cols-12 md:gap-x-12">
          <div className="md:col-span-8">
            <h2 className="font-serif text-display-lg">{t.cta.title}</h2>
            <p className="mt-6 max-w-2xl text-[15.5px] leading-[1.65] text-[color:var(--bg)]/70">
              {t.cta.body}
            </p>
            <div className="mt-10 flex flex-wrap items-center gap-4">
              <Link
                to="/contact"
                className="inline-flex items-center gap-3 bg-[color:var(--bg)] px-6 py-3 text-sm font-medium tracking-wide text-[color:var(--fg)] transition-transform hover:translate-x-[2px]"
              >
                {t.cta.primary}
                <span aria-hidden className="i-arrow">→</span>
              </Link>
              <a
                href={`mailto:${siteCompany.contact.email}`}
                className="inline-flex items-center gap-2 text-sm text-[color:var(--bg)] underline decoration-[color:var(--bg)]/30 underline-offset-[6px] transition-colors hover:decoration-[color:var(--bg)]"
              >
                {siteCompany.contact.email}
              </a>
            </div>
          </div>
          <aside className="md:col-span-4 md:border-l md:border-[color:var(--bg)]/15 md:pl-10">
            <div className="font-mono text-[0.7rem] uppercase tracking-[0.18em] text-[color:var(--bg)]/80">
              {t.cta.directLines}
            </div>
            <a
              href={`tel:${siteCompany.contact.phoneE164}`}
              className="mt-4 block font-serif text-[1.65rem] leading-[1.1] tracking-[-0.01em]"
              dir="ltr"
            >
              {siteCompany.contact.phone}
            </a>
            <a
              href={siteCompany.contact.whatsapp}
              target="_blank"
              rel="noreferrer noopener"
              className="mt-2 block text-[14px] text-[color:var(--bg)]/80 underline decoration-[color:var(--bg)]/30 underline-offset-[6px]"
            >
              {t.cta.whatsapp}
            </a>
            <p className="mt-3 text-[13.5px] text-[color:var(--bg)]/80">{t.cta.hours}</p>
          </aside>
        </div>
      </div>
    </section>
  );
}
