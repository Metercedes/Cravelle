import { Link } from "react-router-dom";
import { siteCompany } from "../content/site";

export default function CTASection() {
  return (
    <section data-on-dark className="bg-[color:var(--fg)] py-24 text-[color:var(--bg)] md:py-28">
      <div className="container-edge">
        <div className="flex items-center justify-between font-mono text-[0.7rem] uppercase tracking-[0.2em] text-[color:var(--bg)]/80">
          <span>05 / Contact</span>
          <span className="hidden sm:inline">Warsaw, Poland</span>
        </div>

        <div className="mt-8 grid gap-y-10 md:grid-cols-12 md:gap-x-12">
          <div className="md:col-span-8">
            <h2 className="font-serif text-display-lg">
              Talk to Cravelle.
            </h2>
            <p className="mt-6 max-w-2xl text-[15.5px] leading-[1.65] text-[color:var(--bg)]/70">
              Send a short brief: country of origin, product or sector, and what you want to do
              in Europe. We reply within two working days and tell you plainly whether we are
              the right counterpart.
            </p>
            <div className="mt-10 flex flex-wrap items-center gap-4">
              <Link
                to="/contact"
                className="inline-flex items-center gap-3 bg-brass px-6 py-3 text-sm font-medium tracking-wide text-obsidian transition-transform hover:translate-x-[2px]"
              >
                Send a trade inquiry
                <span aria-hidden>→</span>
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
              Direct lines
            </div>
            <a
              href={`tel:${siteCompany.contact.phoneE164}`}
              className="mt-4 block font-serif text-[1.65rem] leading-[1.1] tracking-[-0.01em]"
            >
              {siteCompany.contact.phone}
            </a>
            <a
              href={siteCompany.contact.whatsapp}
              target="_blank"
              rel="noreferrer noopener"
              className="mt-2 block text-[14px] text-[color:var(--bg)]/80 underline decoration-[color:var(--bg)]/30 underline-offset-[6px]"
            >
              WhatsApp
            </a>
            <p className="mt-3 text-[13.5px] text-[color:var(--bg)]/80">
              Mon to Fri, 09:00 to 18:00 CET / CEST.
            </p>
          </aside>
        </div>
      </div>
    </section>
  );
}
