import ContactForm from "../components/ContactForm";
import Disclaimer from "../components/Disclaimer";
import { formIntake, siteCompany } from "../content/site";
import { useSeo } from "../lib/seo";

export default function Contact() {
  useSeo({
    title: "Contact, Cravelle",
    description:
      "Send a written brief and we will reply within two working days. Direct line: +48 729 420 936. Office in Warsaw, Poland.",
    path: "/contact",
  });

  return (
    <>
      <section className="border-b border-[color:var(--rule)] pt-32 md:pt-40">
        <div className="container-edge">
          <div className="flex items-center justify-between font-mono text-[0.7rem] uppercase tracking-[0.2em] text-[color:var(--fg-mute)]">
            <span>Contact</span>
            <span>Warsaw, Poland</span>
          </div>
          <div className="hairline-x mt-2" />
          <h1 className="mt-12 max-w-4xl font-serif text-display-xl">{formIntake.heading}</h1>
          <p className="mt-8 max-w-2xl text-[1.05rem] leading-[1.6] text-[color:var(--fg-soft)]">
            {formIntake.intro}
          </p>
        </div>
      </section>

      <section className="container-edge py-16 md:py-24">
        <div className="grid gap-12 md:grid-cols-12">
          <div className="md:col-span-7">
            <ContactForm />
          </div>
          <aside className="md:col-span-5 md:pl-10">
            <div className="border border-[color:var(--rule)] p-7 md:p-8">
              <div className="eyebrow">Direct lines</div>
              <a
                href={`tel:${siteCompany.contact.phoneE164}`}
                className="mt-3 block font-serif text-[1.7rem] leading-[1.1] tracking-[-0.01em]"
              >
                {siteCompany.contact.phone}
              </a>
              <a
                href={siteCompany.contact.whatsapp}
                target="_blank"
                rel="noreferrer noopener"
                className="mt-2 block text-[15px] underline decoration-[color:var(--rule)] underline-offset-[6px] hover:decoration-[color:var(--brass)]"
              >
                WhatsApp
              </a>
              <a
                href={`mailto:${siteCompany.contact.email}`}
                className="mt-2 block text-[15px] underline decoration-[color:var(--rule)] underline-offset-[6px] hover:decoration-[color:var(--brass)]"
              >
                {siteCompany.contact.email}
              </a>
              <p className="mt-4 text-[13.5px] text-[color:var(--fg-mute)]">
                Mon to Fri, 09:00 to 18:00 CET / CEST.
              </p>
            </div>

            <div className="mt-6 border border-[color:var(--rule)] p-7 md:p-8">
              <div className="eyebrow">Office</div>
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
