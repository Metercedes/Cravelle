import { Link } from "react-router-dom";
import { footerRoutes, siteCompany } from "../content/site";
import { useDict } from "../lib/i18n";

export default function Footer() {
  const t = useDict();
  const year = new Date().getFullYear();
  return (
    <footer
      className="border-t border-[color:var(--rule)] bg-[color:var(--bg-soft)]/40"
      style={{ paddingBottom: "env(safe-area-inset-bottom)" }}
    >
      <div className="container-edge grid gap-10 py-16 md:grid-cols-12">
        <div className="md:col-span-5">
          <Link to="/" aria-label={siteCompany.brand} className="inline-flex items-center text-[color:var(--fg)]">
            <span
              className="brand-logo block h-9"
              style={{ aspectRatio: "434 / 556", width: "auto" }}
              role="img"
              aria-label={siteCompany.brand}
            />
          </Link>
          <p className="mt-6 max-w-md text-[15px] leading-[1.6] text-[color:var(--fg-soft)]">
            {t.meta.siteDescription}
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm">
            <a className="hover:underline underline-offset-[6px]" href={`mailto:${siteCompany.contact.email}`}>
              {siteCompany.contact.email}
            </a>
            <a
              className="hover:underline underline-offset-[6px]"
              href={`tel:${siteCompany.contact.phoneE164}`}
              dir="ltr"
            >
              {siteCompany.contact.phone}
            </a>
          </div>
        </div>

        <div className="md:col-span-3">
          <div className="eyebrow mb-4">{t.footer.siteHeading}</div>
          <ul className="flex flex-col gap-2 text-[15px]">
            {footerRoutes.map((l) => (
              <li key={l.to}>
                <Link className="text-[color:var(--fg-soft)] hover:text-[color:var(--fg)]" to={l.to}>
                  {l.labelKey === "legal"
                    ? t.footer.legal
                    : t.nav[l.labelKey as "services" | "sectors" | "about" | "contact"]}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="md:col-span-4">
          <div className="eyebrow mb-4">{t.footer.officeHeading}</div>
          <address className="not-italic text-[14.5px] leading-[1.7] text-[color:var(--fg-soft)]">
            {siteCompany.legalName}
            <br />
            {siteCompany.address.line1}
            <br />
            {siteCompany.address.postalCode} {siteCompany.address.city}, {siteCompany.address.country}
            <br />
            <span className="font-mono text-[12.5px] text-[color:var(--fg-mute)]">
              NIP {siteCompany.registry.nip}
            </span>
          </address>
        </div>
      </div>

      <div className="border-t border-[color:var(--rule)]">
        <div className="container-edge flex flex-col items-start justify-between gap-3 py-5 text-[12.5px] text-[color:var(--fg-mute)] md:flex-row md:items-center">
          <span>© {year} {siteCompany.legalName}. {t.footer.rights}</span>
          <Link to="/legal" className="hover:text-[color:var(--fg)]">{t.footer.legal}</Link>
        </div>
      </div>
    </footer>
  );
}
