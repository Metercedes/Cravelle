import { renderToString } from "react-dom/server";
import { StaticRouter } from "react-router-dom/server";
import App from "./App";

// Build-time renderer used by scripts/prerender.mjs to emit static HTML for
// each route. Kept deliberately small: the StaticRouter walks the same Routes
// tree that BrowserRouter renders on the client, so the prerendered markup
// hydrates without mismatch.
export function render(url: string): string {
  return renderToString(
    <StaticRouter location={url}>
      <App />
    </StaticRouter>
  );
}
