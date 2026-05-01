/* eslint-disable react-refresh/only-export-components --
   Provider, hooks, locale registry, and dictionaries co-locate by design:
   the i18n module is self-contained and never the target of dev-time fast
   refresh edits. Splitting them would add files without any practical
   benefit. */
import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import { dictEn } from "../content/dict.en";
import { dictPl } from "../content/dict.pl";
import { dictAr } from "../content/dict.ar";

export type Locale = "en-GB" | "pl" | "ar";

export const locales: ReadonlyArray<{
  code: Locale;
  label: string;
  short: string;
  dir: "ltr" | "rtl";
}> = [
  { code: "en-GB", label: "English (UK)", short: "EN", dir: "ltr" },
  { code: "pl", label: "Polski", short: "PL", dir: "ltr" },
  { code: "ar", label: "العربية", short: "AR", dir: "rtl" },
];

const STORAGE_KEY = "cravelle:locale";

export type Dict = typeof dictEn;

const dicts: Record<Locale, Dict> = {
  "en-GB": dictEn,
  pl: dictPl,
  ar: dictAr,
};

type Ctx = {
  locale: Locale;
  dir: "ltr" | "rtl";
  dict: Dict;
  setLocale: (l: Locale) => void;
};

const I18nCtx = createContext<Ctx>({
  locale: "en-GB",
  dir: "ltr",
  dict: dictEn,
  setLocale: () => {},
});

function dirFor(code: Locale): "ltr" | "rtl" {
  return code === "ar" ? "rtl" : "ltr";
}

function htmlLang(code: Locale): string {
  return code === "en-GB" ? "en-GB" : code === "pl" ? "pl-PL" : "ar";
}

function readStored(): Locale | null {
  if (typeof window === "undefined") return null;
  try {
    const v = window.localStorage.getItem(STORAGE_KEY);
    if (v === "en-GB" || v === "pl" || v === "ar") return v;
  } catch {
    /* ignore */
  }
  return null;
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  // Always start with the SSR canonical (en-GB) so hydration markup matches.
  // After hydration, an effect promotes any stored choice. The intro overlay
  // covers the homepage during this brief window so the swap is invisible.
  const [locale, setLocaleState] = useState<Locale>("en-GB");

  useEffect(() => {
    const stored = readStored();
    if (stored && stored !== locale) {
      setLocaleState(stored);
    }
    // run once on mount; hydration safety
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (typeof document === "undefined") return;
    const html = document.documentElement;
    html.lang = htmlLang(locale);
    html.dir = dirFor(locale);
    // Keep the static skip-link (rendered before #root in index.html, so it
    // works even before React boots) in sync with the active locale.
    const skip = document.querySelector<HTMLAnchorElement>("a.skip-link");
    if (skip) skip.textContent = dicts[locale].nav.skipToContent;
  }, [locale]);

  const setLocale = useCallback((next: Locale) => {
    setLocaleState(next);
    try {
      window.localStorage.setItem(STORAGE_KEY, next);
    } catch {
      /* ignore */
    }
  }, []);

  const value = useMemo<Ctx>(
    () => ({ locale, dir: dirFor(locale), dict: dicts[locale], setLocale }),
    [locale, setLocale],
  );

  return <I18nCtx.Provider value={value}>{children}</I18nCtx.Provider>;
}

export function useDict(): Dict {
  return useContext(I18nCtx).dict;
}

export function useLocale(): {
  locale: Locale;
  dir: "ltr" | "rtl";
  setLocale: (l: Locale) => void;
} {
  const ctx = useContext(I18nCtx);
  return { locale: ctx.locale, dir: ctx.dir, setLocale: ctx.setLocale };
}
