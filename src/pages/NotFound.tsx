import { Link } from "react-router-dom";
import { useSeo } from "../lib/seo";

export default function NotFound() {
  useSeo({
    title: "Not found, Cravelle",
    description: "The page you were looking for does not exist on cravelle.co.",
    path: "/404",
  });
  return (
    <section className="grid min-h-[70vh] place-items-center pb-24 pt-32">
      <div className="container-edge text-center">
        <div className="font-mono text-[0.7rem] uppercase tracking-[0.2em] text-[color:var(--fg-mute)]">
          404, no route found
        </div>
        <h1 className="mt-6 font-serif text-display-lg">This page does not exist.</h1>
        <p className="mt-4 text-[15px] text-[color:var(--fg-soft)]">
          Use one of the routes below or return to the homepage.
        </p>
        <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
          <Link to="/" className="btn-primary">Home</Link>
          <Link to="/services" className="btn-ghost">Services</Link>
          <Link to="/contact" className="btn-ghost">Contact</Link>
        </div>
      </div>
    </section>
  );
}
