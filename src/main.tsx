import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "./styles/index.css";

// Recover deep links when hosting falls back to 404.html instead of index.html.
(() => {
  const pendingPath = sessionStorage.getItem("spa:pendingPath");
  if (!pendingPath) return;
  sessionStorage.removeItem("spa:pendingPath");
  window.history.replaceState(null, "", pendingPath);
})();

// Mark the document as JS-ready so .reveal classes can hide-then-fade-in
// without leaving content invisible for crawlers or JS-disabled users.
document.documentElement.classList.add("js-ready");

const container = document.getElementById("root")!;
const tree = (
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);

if (container.firstElementChild) {
  ReactDOM.hydrateRoot(container, tree);
} else {
  ReactDOM.createRoot(container).render(tree);
}

// Tiny IntersectionObserver wiring for .reveal sections — < 0.5 KB of code
// instead of the full Framer Motion runtime.
(() => {
  if (typeof IntersectionObserver === "undefined") {
    document.querySelectorAll(".reveal").forEach((el) => el.classList.add("is-visible"));
    return;
  }
  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          io.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15, rootMargin: "0px 0px -8% 0px" },
  );
  document.querySelectorAll(".reveal").forEach((el) => io.observe(el));
})();
