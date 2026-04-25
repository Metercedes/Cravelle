import { useEffect } from "react";

type SeoProps = {
  title: string;
  description: string;
  path: string;
};

export function useSeo({ title, description, path }: SeoProps) {
  useEffect(() => {
    const fullTitle = title.includes("Cravelle") ? title : `${title}, Cravelle`;
    document.title = fullTitle;
    setMeta("description", description);
    setMeta("og:title", fullTitle, true);
    setMeta("og:description", description, true);
    setMeta("og:url", `https://cravelle.co${path}`, true);
    setMeta("twitter:title", fullTitle);
    setMeta("twitter:description", description);
    let canon = document.querySelector('link[rel="canonical"]');
    if (!canon) {
      canon = document.createElement("link");
      canon.setAttribute("rel", "canonical");
      document.head.appendChild(canon);
    }
    canon.setAttribute("href", `https://cravelle.co${path}`);
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
  el.setAttribute("content", content);
}
