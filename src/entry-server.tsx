import { renderToString } from "react-dom/server";
import { StaticRouter } from "react-router-dom/server";
import App from "./App";
import { LanguageProvider } from "./lib/i18n";

// Build-time renderer used by scripts/prerender.mjs to emit static HTML for
// each route. Kept deliberately small: the StaticRouter walks the same Routes
// tree that BrowserRouter renders on the client, so the prerendered markup
// hydrates without mismatch. The provider wraps with the canonical en-GB
// dictionary; the client switches after hydration if a stored preference
// exists.
export function render(url: string): string {
  return renderToString(
    <StaticRouter location={url}>
      <LanguageProvider>
        <App />
      </LanguageProvider>
    </StaticRouter>,
  );
}
