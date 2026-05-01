import ContactForm from "../components/ContactForm";
import Disclaimer from "../components/Disclaimer";
import { siteCompany } from "../content/site";
import { useDict } from "../lib/i18n";
import { useSeo } from "../lib/seo";

export default function Contact() {
  const t = useDict();
  useSeo({
    title: t.meta.pages.contact.title,
    description: t.meta.pages.contact.description,
    path: "/contact",
  });

  return (
    <>
      <section className="border-b border-[color:var(--rule)] pt-32 md:pt-40">
        <div className="container-edge">
          <div className="flex items-center justify-between font-mono text-[0.7rem] uppercase tracking-[0.2em] text-[color:var(--fg-mute)]">
            <span>{t.contactPage.indexLabel}</span>
            <span>{t.contactPage.location}</span>
          </div>
          <div className="hairline-x mt-2" />
          <h1 className="mt-12 max-w-4xl font-serif text-display-xl">{t.contactPage.heading}</h1>
          <p className="mt-8 max-w-2xl text-[1.05rem] leading-[1.6] text-[color:var(--fg-soft)]">
            {t.contactPage.intro}
          </p>
        </div>
      </section>

      <section className="container-edge py-16 md:py-24">
        <div className="grid gap-12 md:grid-cols-12">
          <div className="md:col-span-7">
            <ContactForm />
          </div>
          <aside className="md:col-span-5 md:ps-10">
            <div className="border border-[color:var(--rule)] p-7 md:p-8">
              <div className="eyebrow">{t.contactPage.directLines}</div>
              <a
                href={`tel:${siteCompany.contact.phoneE164}`}
                className="mt-3 block font-serif text-[1.7rem] leading-[1.1] tracking-[-0.01em]"
                dir="ltr"
              >
                {siteCompany.contact.phone}
              </a>
              <a
                href={siteCompany.contact.whatsapp}
                target="_blank"
                rel="noreferrer noopener"
                className="mt-2 block text-[15px] underline decoration-[color:var(--rule)] underline-offset-[6px] hover:decoration-[color:var(--brass)]"
              >
                {t.contactPage.whatsapp}
              </a>
              <a
                href={`mailto:${siteCompany.contact.email}`}
                className="mt-2 block text-[15px] underline decoration-[color:var(--rule)] underline-offset-[6px] hover:decoration-[color:var(--brass)]"
              >
                {siteCompany.contact.email}
              </a>
              <p className="mt-4 text-[13.5px] text-[color:var(--fg-mute)]">
                {t.contactPage.hours}
              </p>
            </div>

            <div className="mt-6 border border-[color:var(--rule)] p-7 md:p-8">
              <div className="eyebrow">{t.contactPage.officeLabel}</div>
              <address className="not-italic mt-3 text-[15px] leading-[1.65] text-[color:var(--fg-soft)]">
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

            <div className="mt-6">
              <Disclaimer compact />
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}
