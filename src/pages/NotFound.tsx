import { Link } from "react-router-dom";
import { useDict } from "../lib/i18n";
import { useSeo } from "../lib/seo";

export default function NotFound() {
  const t = useDict();
  useSeo({
    title: t.meta.pages.notFound.title,
    description: t.meta.pages.notFound.description,
    path: "/404",
  });
  return (
    <section className="grid min-h-[70vh] place-items-center pb-24 pt-32">
      <div className="container-edge text-center">
        <div className="font-mono text-[0.7rem] uppercase tracking-[0.2em] text-[color:var(--fg-mute)]">
          {t.notFoundPage.eyebrow}
        </div>
        <h1 className="mt-6 font-serif text-display-lg">{t.notFoundPage.title}</h1>
        <p className="mt-4 text-[15px] text-[color:var(--fg-soft)]">{t.notFoundPage.body}</p>
        <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
          <Link to="/" className="btn-primary">{t.notFoundPage.home}</Link>
          <Link to="/services" className="btn-ghost">{t.notFoundPage.services}</Link>
          <Link to="/contact" className="btn-ghost">{t.notFoundPage.contact}</Link>
        </div>
      </div>
    </section>
  );
}
