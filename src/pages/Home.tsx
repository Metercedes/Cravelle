import Hero from "../components/Hero";
import ServicePillars from "../components/ServicePillars";
import WhoWeHelp from "../components/WhoWeHelp";
import Process from "../components/Process";
import WhyCravelle from "../components/WhyCravelle";
import CTASection from "../components/CTASection";
import Disclaimer from "../components/Disclaimer";
import { useSeo } from "../lib/seo";

export default function Home() {
  useSeo({
    title: "Cravelle, the B2B bridge into Europe.",
    description:
      "Cravelle is a Poland-based B2B trade and partnership company helping Arabic-speaking businesses, especially Egyptian exporters, connect with Europe through export support, commercial introductions, and market-entry coordination.",
    path: "/",
  });
  return (
    <>
      <Hero />
      <ServicePillars />
      <WhoWeHelp />
      <Process />
      <WhyCravelle />
      <section className="container-edge pb-20 pt-4">
        <Disclaimer />
      </section>
      <CTASection />
    </>
  );
}
