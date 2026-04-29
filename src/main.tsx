import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import { bootRevealOnce } from "./lib/reveal";
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

// Observe any .reveal nodes that shipped in the prerendered HTML. Subsequent
// route changes are wired through useRouteReveal() inside <App />.
bootRevealOnce();
