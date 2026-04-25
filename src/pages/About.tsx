import { Link } from "react-router-dom";
import Disclaimer from "../components/Disclaimer";
import { useSeo } from "../lib/seo";

export default function About() {
  useSeo({
    title: "About, Cravelle",
    description:
      "Cravelle is a Poland-based B2B trade and partnership company helping Arabic-speaking businesses, especially Egyptian exporters, connect with Europe.",
    path: "/about",
  });

  return (
    <>
      <section className="border-b border-[color:var(--rule)] pt-32 md:pt-40">
        <div className="container-edge">
          <div className="flex items-center justify-between font-mono text-[0.7rem] uppercase tracking-[0.2em] text-[color:var(--fg-mute)]">
            <span>About</span>
            <span>Warsaw, Poland</span>
          </div>
          <div className="hairline-x mt-2" />
          <h1 className="mt-12 max-w-4xl font-serif text-display-xl">
            A focused B2B firm, doing one thing well.
          </h1>
        </div>
      </section>

      <section className="container-edge py-20 md:py-28">
        <div className="grid gap-12 md:grid-cols-12">
          <div className="md:col-span-7">
            <div className="space-y-7 text-[16px] leading-[1.75] text-[color:var(--fg-soft)]">
              <p>
                Cravelle is a Poland-based B2B trade and partnership company. We help
                Arabic-speaking businesses, especially Egyptian exporters, connect with Europe
                through export support, commercial introductions, and market-entry coordination.
              </p>
              <p>
                We exist because the conversation between an Arabic-speaking supplier and a
                European buyer is rarely just a translation problem. It is a commercial
                coordination problem: matching the right product, the right channel, and the
                right people, then staying on the thread until the relationship is operating.
              </p>
              <p>
                We serve exporters, suppliers, hospitality businesses, and the European partners
                who buy from them. Poland is our base because it sits inside the European single
                market with a sensible cost structure and direct routes across the continent.
              </p>
              <p>
                We are not a law firm, an accountancy practice, a customs broker, or a marketing
                agency. We are a commercial connector. Where a step requires a licensed
                professional, we brief the qualified external practitioner contracted by the
                relevant party and stay on the thread.
              </p>
              <p>
                We work selectively. We turn down briefs that fall outside our scope or depend on
                outcomes we cannot influence. It is the only honest way to remain useful to the
                companies we do represent.
              </p>
            </div>

            <div className="mt-10 flex flex-wrap gap-3">
              <Link to="/services" className="btn-ghost">See the services</Link>
              <Link to="/contact" className="btn-primary arrow-after">Send a trade inquiry</Link>
            </div>
          </div>

          <aside className="md:col-span-5 md:pl-10">
            <div className="border border-[color:var(--rule)] p-7 md:p-8">
              <div className="eyebrow">Core market lane</div>
              <p className="mt-3 font-serif text-[1.5rem] leading-[1.15] tracking-[-0.01em]">
                Egypt and Arabic-speaking suppliers to Poland and Europe.
              </p>
            </div>

            <div className="mt-6 border border-[color:var(--rule)] p-7 md:p-8">
              <div className="eyebrow">Working languages</div>
              <p className="mt-3 text-[15px] leading-[1.65] text-[color:var(--fg-soft)]">
                Working English. Arabic. Polish on the local side. Other languages handled
                through vetted external translators when the matter requires it.
              </p>
            </div>

            <div className="mt-6 border border-[color:var(--rule)] p-7 md:p-8">
              <div className="eyebrow">What makes it credible</div>
              <p className="mt-3 text-[15px] leading-[1.65] text-[color:var(--fg-soft)]">
                A registered Polish company with a real address in Warsaw, a named counterpart,
                and the practical ability to attend meetings, follow up locally, and keep the
                relationship moving.
              </p>
            </div>
          </aside>
        </div>
      </section>

      <section className="container-edge pb-16">
        <Disclaimer />
      </section>
    </>
  );
}
