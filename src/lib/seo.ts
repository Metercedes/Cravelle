import { useEffect } from "react";
import { SITE_ORIGIN } from "./routes";

type SeoProps = {
  title: string;
  description: string;
  path: string;
};

export function useSeo({ title, description, path }: SeoProps) {
  useEffect(() => {
    const fullTitle = title.includes("Cravelle") ? title : `${title}, Cravelle`;
    const url = `${SITE_ORIGIN}${path}`;
    if (document.title !== fullTitle) document.title = fullTitle;
    setMeta("description", description);
    setMeta("og:title", fullTitle, true);
    setMeta("og:description", description, true);
    setMeta("og:url", url, true);
    setMeta("twitter:title", fullTitle);
    setMeta("twitter:description", description);
    let canon = document.querySelector('link[rel="canonical"]');
    if (!canon) {
      canon = document.createElement("link");
      canon.setAttribute("rel", "canonical");
      document.head.appendChild(canon);
    }
    if (canon.getAttribute("href") !== url) {
      canon.setAttribute("href", url);
    }
  }, [title, description, path]);
}

function setMeta(name: string, content: string, isProperty = false) {
  const attr = isProperty ? "property" : "name";
  let el = document.querySelector(`meta[${attr}="${name}"]`);
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute(attr, name);
    document.head.appendChild(el);
  }
  if (el.getAttribute("content") !== content) {
    el.setAttribute("content", content);
  }
}
