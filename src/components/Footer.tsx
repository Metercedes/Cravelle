import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { footerLinks, siteCompany } from "../content/site";

export default function Footer() {
  const year = new Date().getFullYear();
  const [theme, setTheme] = useState<"light" | "dark">(() => {
    if (typeof document === "undefined") return "light";
    return (document.documentElement.dataset.theme as "light" | "dark" | undefined) ?? "light";
  });

  useEffect(() => {
    const apply = () => {
      const t = (document.documentElement.dataset.theme as "light" | "dark" | undefined) ?? "light";
      setTheme(t);
    };
    const observer = new MutationObserver(apply);
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ["data-theme"] });
    return () => observer.disconnect();
  }, []);

  const logoSrc = theme === "dark" ? "/brand/logo-white.png" : "/brand/logo.png";

  return (
    <footer
      className="border-t border-[color:var(--rule)] bg-[color:var(--bg-soft)]/40"
      style={{ paddingBottom: "env(safe-area-inset-bottom)" }}
    >
      <div className="container-edge grid gap-10 py-16 md:grid-cols-12">
        <div className="md:col-span-5">
          <Link to="/" aria-label="Cravelle, home" className="inline-flex items-center text-[color:var(--fg)]">
            <img
              src={logoSrc}
              alt="Cravelle"
              width={120}
              height={32}
              loading="lazy"
              decoding="async"
              draggable={false}
              className="h-8 w-auto"
            />
          </Link>
          <p className="mt-6 max-w-md text-[15px] leading-[1.6] text-[color:var(--fg-soft)]">
            {siteCompany.shortPositioning}
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm">
            <a className="hover:underline underline-offset-[6px]" href={`mailto:${siteCompany.contact.email}`}>
              {siteCompany.contact.email}
            </a>
            <a className="hover:underline underline-offset-[6px]" href={`tel:${siteCompany.contact.phoneE164}`}>
              {siteCompany.contact.phone}
            </a>
          </div>
        </div>

        <div className="md:col-span-3">
          <div className="eyebrow mb-4">Site</div>
          <ul className="flex flex-col gap-2 text-[15px]">
            {footerLinks.map((l) => (
              <li key={l.to}>
                <Link className="text-[color:var(--fg-soft)] hover:text-[color:var(--fg)]" to={l.to}>
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="md:col-span-4">
          <div className="eyebrow mb-4">Office</div>
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
          <span>© {year} {siteCompany.legalName}. All rights reserved.</span>
          <Link to="/legal" className="hover:text-[color:var(--fg)]">Legal and disclaimer</Link>
        </div>
      </div>
    </footer>
  );
}
