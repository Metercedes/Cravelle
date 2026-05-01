import { siteCompany } from "../content/site";
import { useDict } from "../lib/i18n";
import { useSeo } from "../lib/seo";

export default function Legal() {
  const t = useDict();
  useSeo({
    title: t.meta.pages.legal.title,
    description: t.meta.pages.legal.description,
    path: "/legal",
  });

  const labels = t.legalPage.registryLabels;
  const registryRows: ReadonlyArray<readonly [string, string]> = [
    [labels.legalName, siteCompany.legalName],
    [
      labels.office,
      `${siteCompany.address.line1}, ${siteCompany.address.postalCode} ${siteCompany.address.city}, ${siteCompany.address.country}`,
    ],
    [labels.nip, siteCompany.registry.nip],
    [labels.krs, siteCompany.registry.krs],
    [labels.regon, siteCompany.registry.regon],
    [labels.pkd, `${siteCompany.registry.pkdMain} ${siteCompany.registry.pkdMainLabel}`],
    [labels.eDor, siteCompany.registry.eDoreczenia],
  ];

  return (
    <>
      <section className="border-b border-[color:var(--rule)] pt-32 md:pt-40">
        <div className="container-edge">
          <div className="flex items-center justify-between font-mono text-[0.7rem] uppercase tracking-[0.2em] text-[color:var(--fg-mute)]">
            <span>{t.legalPage.indexLabel}</span>
            <span>{t.legalPage.lastUpdated}</span>
          </div>
          <div className="hairline-x mt-2" />
          <h1 className="mt-12 max-w-3xl font-serif text-display-xl">{t.legalPage.title}</h1>
          <p className="mt-8 max-w-2xl text-[1.05rem] leading-[1.6] text-[color:var(--fg-soft)]">
            {t.legalPage.intro}
          </p>
        </div>
      </section>

      <section className="container-edge py-20 md:py-24">
        <div className="grid gap-10 md:grid-cols-12">
          <nav aria-label={t.legalPage.sectionsAria} className="md:col-span-3">
            <div className="eyebrow">{t.legalPage.sectionsLabel}</div>
            <ul className="mt-4 flex flex-col gap-2 text-sm">
              {t.legalPage.sections.map((s) => (
                <li key={s.id}>
                  <a className="text-[color:var(--fg-soft)] hover:text-[color:var(--fg)]" href={`#${s.id}`}>
                    {s.title}
                  </a>
                </li>
              ))}
              <li>
                <a className="text-[color:var(--fg-soft)] hover:text-[color:var(--fg)]" href="#registry">
                  {t.legalPage.registryLink}
                </a>
              </li>
            </ul>
          </nav>
          <div className="md:col-span-9">
            <div className="flex flex-col gap-12">
              {t.legalPage.sections.map((s) => (
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
                <h2 className="font-serif text-[1.7rem] tracking-[-0.01em]">{t.legalPage.registryTitle}</h2>
                <p className="mt-4 max-w-prose text-[15px] leading-[1.7] text-[color:var(--fg-soft)]">
                  {t.legalPage.registryIntro}
                </p>
                <dl className="mt-6 grid gap-px overflow-hidden border border-[color:var(--rule)] bg-[color:var(--rule)] text-sm md:grid-cols-2">
                  {registryRows.map(([k, v]) => (
                    <div key={k} className="flex items-baseline justify-between gap-6 bg-[color:var(--bg)] px-6 py-5">
                      <dt className="font-mono text-[11.5px] uppercase tracking-[0.18em] text-[color:var(--fg-mute)]">
                        {k}
                      </dt>
                      <dd className="text-end text-[14.5px] text-[color:var(--fg)]">{v}</dd>
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
