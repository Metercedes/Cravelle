import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import { markHydrated } from "./lib/animation";
import "./styles/index.css";

// Recover deep links when hosting falls back to 404.html instead of index.html.
(() => {
  const pendingPath = sessionStorage.getItem("spa:pendingPath");
  if (!pendingPath) return;
  sessionStorage.removeItem("spa:pendingPath");
  window.history.replaceState(null, "", pendingPath);
})();

const container = document.getElementById("root")!;
const tree = (
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);

// Use hydrateRoot when the prerender output is present so we keep the static
// markup intact and avoid a flash of re-rendered content. Fall back to a
// fresh render only if something has cleared the root (defensive — should
// not happen in production).
if (container.firstElementChild) {
  ReactDOM.hydrateRoot(container, tree);
} else {
  ReactDOM.createRoot(container).render(tree);
}

// Once we've yielded back to the event loop, hydration is in flight. Flag the
// app as hydrated so motion components mounted by subsequent client-side
// route changes restore their entrance animations.
queueMicrotask(markHydrated);
