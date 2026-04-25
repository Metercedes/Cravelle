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

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
