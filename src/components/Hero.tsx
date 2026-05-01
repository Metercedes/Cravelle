import { Link } from "react-router-dom";
import { useDict } from "../lib/i18n";

// Above-the-fold hero. Plain HTML — no animation library, no opacity:0
// initial state, no transform. The h1 is the LCP element on the homepage,
// so it must paint at full visibility on the first frame.
export default function Hero() {
  const t = useDict();
  return (
    <section className="relative overflow-hidden border-b border-[color:var(--rule)] pt-28 md:pt-36">
      <div
        className="pointer-events-none absolute inset-0 grid-bg opacity-[0.35] [mask-image:linear-gradient(180deg,black_0%,black_55%,transparent_100%)]"
        aria-hidden
      />

      <div className="container-edge relative">
        <div className="grid grid-cols-12 gap-x-6 pb-20 pt-12 md:pt-20">
          <div className="col-span-12 md:col-span-10">
            <div className="eyebrow mb-6">{t.hero.eyebrow}</div>

            <h1 className="font-serif text-display-xl">
              {t.hero.titlePrefix}
              <span className="italic text-[color:var(--accent)]">{t.hero.titleAccent}</span>
              {t.hero.titleSuffix}
            </h1>

            <p className="mt-8 max-w-2xl text-[1.05rem] leading-[1.6] text-[color:var(--fg-soft)] md:text-[1.15rem]">
              {t.hero.body}
            </p>

            <div className="mt-10 flex flex-wrap items-center gap-3">
              <Link to="/contact" className="btn-primary">
                {t.hero.ctaPrimary}
                <span aria-hidden className="i-arrow">→</span>
              </Link>
              <Link to="/services" className="btn-ghost">
                {t.hero.ctaSecondary}
              </Link>
            </div>
          </div>
        </div>

        <div className="rule" />
      </div>
    </section>
  );
}
