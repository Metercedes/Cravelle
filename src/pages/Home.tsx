import Hero from "../components/Hero";
import ServicePillars from "../components/ServicePillars";
import WhoWeHelp from "../components/WhoWeHelp";
import Process from "../components/Process";
import WhyCravelle from "../components/WhyCravelle";
import Gallery from "../components/Gallery";
import CTASection from "../components/CTASection";
import Disclaimer from "../components/Disclaimer";
import { useDict } from "../lib/i18n";
import { useSeo } from "../lib/seo";

export default function Home() {
  const t = useDict();
  useSeo({
    title: t.meta.pages.home.title,
    description: t.meta.pages.home.description,
    path: "/",
  });
  return (
    <>
      <Hero />
      <ServicePillars />
      <WhoWeHelp />
      <Process />
      <WhyCravelle />
      <Gallery />
      <section className="container-edge pb-20 pt-4">
        <Disclaimer />
      </section>
      <CTASection />
    </>
  );
}
