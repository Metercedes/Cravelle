import { siteCompany, disclaimerText } from "../content/site";
import { useSeo } from "../lib/seo";

const sections = [
  {
    id: "scope",
    title: "1. Scope of services",
    body: [
      disclaimerText,
      "Cravelle acts as a commercial coordinator. It does not represent itself as a law firm, accountancy practice, customs broker, immigration agent, financial intermediary, or government representative. Where a matter requires regulated work, Cravelle coordinates with qualified external practitioners contracted by the relevant party.",
    ],
  },
  {
    id: "no-guarantees",
    title: "2. Outcomes and limits",
    body: [
      "Cravelle makes no guarantee of commercial outcomes. Negotiations, agreements, registrations, permits, and licences depend on counterparties, regulators, and authorities outside our control.",
      "Statements about Poland, the European Union, or any third country reflect our reasonable understanding at the time of writing. They do not replace specific advice from a qualified professional retained for that matter.",
    ],
  },
  {
    id: "engagements",
    title: "3. Engagements and fees",
    body: [
      "All commercial work is conducted under a written engagement letter that defines scope, deliverables, fees, and termination. No mandate is implied by exchanging emails, calls, or introductory materials.",
      "Where required, we issue VAT invoices in accordance with Polish law from CRAVELLE sp. z o.o.",
    ],
  },
  {
    id: "privacy",
    title: "4. Privacy",
    body: [
      `When you contact us, we process the personal information you provide (typically name, company, email, phone, country, and message) for the sole purpose of replying and assessing whether we can be useful. We do not sell or rent personal data. The controller is ${siteCompany.legalName}, ${siteCompany.address.line1}, ${siteCompany.address.postalCode} ${siteCompany.address.city}, Poland.`,
      `You may request access, correction, deletion, or portability of your personal data by writing to ${siteCompany.contact.email}. We retain inquiry records for as long as needed to manage the relationship and to comply with applicable law.`,
      "We use a third-party form provider (Formspree) to receive inquiries, and a hosting provider (Netlify) to deliver this website. They process technical data such as request logs as part of operating the service.",
    ],
  },
  {
    id: "cookies",
    title: "5. Cookies and analytics",
    body: [
      "This website does not set marketing or tracking cookies. Strictly necessary functional storage may be used to remember the intro animation and theme preference; this storage is local to your browser and is not shared.",
      "If we introduce privacy-conscious analytics in future, we will update this page and, where required, request consent.",
    ],
  },
  {
    id: "ip",
    title: "6. Trademarks and content",
    body: [
      "The name Cravelle, the logo, and the page layouts on this website are the property of CRAVELLE sp. z o.o. Other names, marks, and logos shown belong to their respective owners and are referenced only for identification.",
    ],
  },
  {
    id: "law",
    title: "7. Governing law",
    body: [
      "These terms are governed by the laws of the Republic of Poland. Disputes shall be resolved by the courts competent for the registered seat of CRAVELLE sp. z o.o., to the extent permitted by mandatory consumer protection rules.",
    ],
  },
];

const registryRows: ReadonlyArray<readonly [string, string]> = [
  ["Legal name", siteCompany.legalName],
  [
    "Registered office",
    `${siteCompany.address.line1}, ${siteCompany.address.postalCode} ${siteCompany.address.city}, ${siteCompany.address.country}`,
  ],
  ["NIP", siteCompany.registry.nip],
  ["KRS", siteCompany.registry.krs],
  ["REGON", siteCompany.registry.regon],
  ["Main PKD", `${siteCompany.registry.pkdMain} ${siteCompany.registry.pkdMainLabel}`],
  ["e-Doręczenia", siteCompany.registry.eDoreczenia],
];

export default function Legal() {
  useSeo({
    title: "Legal and disclaimer, Cravelle",
    description:
      "Cravelle scope of services, outcomes and limits, engagement terms, privacy, cookies, governing law, and registered company details.",
    path: "/legal",
  });

  return (
    <>
      <section className="border-b border-[color:var(--rule)] pt-32 md:pt-40">
        <div className="container-edge">
          <div className="flex items-center justify-between font-mono text-[0.7rem] uppercase tracking-[0.2em] text-[color:var(--fg-mute)]">
            <span>Legal</span>
            <span>Last updated: April 2026</span>
          </div>
          <div className="hairline-x mt-2" />
          <h1 className="mt-12 max-w-3xl font-serif text-display-xl">
            Legal and disclaimer.
          </h1>
          <p className="mt-8 max-w-2xl text-[1.05rem] leading-[1.6] text-[color:var(--fg-soft)]">
            Plain language. The terms under which Cravelle accepts work, processes your inquiry,
            and the registered company details for verification.
          </p>
        </div>
      </section>

      <section className="container-edge py-20 md:py-24">
        <div className="grid gap-10 md:grid-cols-12">
          <nav aria-label="Section navigation" className="md:col-span-3">
            <div className="eyebrow">Sections</div>
            <ul className="mt-4 flex flex-col gap-2 text-sm">
              {sections.map((s) => (
                <li key={s.id}>
                  <a className="text-[color:var(--fg-soft)] hover:text-[color:var(--fg)]" href={`#${s.id}`}>
                    {s.title}
                  </a>
                </li>
              ))}
              <li>
                <a className="text-[color:var(--fg-soft)] hover:text-[color:var(--fg)]" href="#registry">
                  8. Registered company details
                </a>
              </li>
            </ul>
          </nav>
          <div className="md:col-span-9">
            <div className="flex flex-col gap-12">
              {sections.map((s) => (
                <article key={s.id} id={s.id} className="scroll-mt-32 border-t border-[color:var(--rule)] pt-8">
                  <h2 className="font-serif text-[1.7rem] tracking-[-0.01em]">{s.title}</h2>
                  <div className="mt-4 flex flex-col gap-4 text-[15px] leading-[1.7] text-[color:var(--fg-soft)]">
                    {s.body.map((p, i) => (
                      <p key={i}>{p}</p>
                    ))}
                  </div>
                </article>
              ))}

              <article id="registry" className="scroll-mt-32 border-t border-[color:var(--rule)] pt-8">
                <h2 className="font-serif text-[1.7rem] tracking-[-0.01em]">8. Registered company details</h2>
                <p className="mt-4 max-w-prose text-[15px] leading-[1.7] text-[color:var(--fg-soft)]">
                  For verification purposes, the public registry data of the operating company is
                  listed below.
                </p>
                <dl className="mt-6 grid gap-px overflow-hidden border border-[color:var(--rule)] bg-[color:var(--rule)] text-sm md:grid-cols-2">
                  {registryRows.map(([k, v]) => (
                    <div key={k} className="flex items-baseline justify-between gap-6 bg-[color:var(--bg)] px-6 py-5">
                      <dt className="font-mono text-[11.5px] uppercase tracking-[0.18em] text-[color:var(--fg-mute)]">
                        {k}
                      </dt>
                      <dd className="text-right text-[14.5px] text-[color:var(--fg)]">{v}</dd>
                    </div>
                  ))}
                </dl>
              </article>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
