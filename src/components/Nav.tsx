import { useEffect, useRef, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { navRoutes, siteCompany } from "../content/site";
import { locales, useDict, useLocale, type Locale } from "../lib/i18n";

export default function Nav() {
  const t = useDict();
  const { locale, setLocale } = useLocale();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);
  const [onDark, setOnDark] = useState(false);
  // Start with a stable value so the SSR markup and the first client render
  // agree. The actual theme set by the inline boot script is read in an
  // effect below, after hydration.
  const [theme, setTheme] = useState<"light" | "dark">("light");
  const location = useLocation();
  const panelRef = useRef<HTMLDivElement | null>(null);
  const toggleBtnRef = useRef<HTMLButtonElement | null>(null);
  const langWrapRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const t = (document.documentElement.dataset.theme as "light" | "dark" | undefined) ?? "light";
    setTheme(t);
    const onTheme = (e: Event) => {
      const next = (e as CustomEvent<"light" | "dark">).detail;
      if (next === "light" || next === "dark") setTheme(next);
    };
    window.addEventListener("cravelle:theme", onTheme as EventListener);
    return () => window.removeEventListener("cravelle:theme", onTheme as EventListener);
  }, []);

  useEffect(() => {
    setOpen(false);
    setLangOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    if (open) document.documentElement.style.overflow = "hidden";
    else document.documentElement.style.overflow = "";
    return () => {
      document.documentElement.style.overflow = "";
    };
  }, [open]);

  // Close mobile menu on Esc; restore focus to the toggle button.
  useEffect(() => {
    if (!open && !langOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        if (langOpen) setLangOpen(false);
        if (open) {
          setOpen(false);
          toggleBtnRef.current?.focus();
        }
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, langOpen]);

  // Move focus into the panel when it opens so keyboard users land inside it.
  useEffect(() => {
    if (open && panelRef.current) {
      const first = panelRef.current.querySelector<HTMLElement>("a, button");
      first?.focus();
    }
  }, [open]);

  // Close the language menu when the user clicks outside it.
  useEffect(() => {
    if (!langOpen) return;
    const onClick = (e: MouseEvent) => {
      if (langWrapRef.current && !langWrapRef.current.contains(e.target as Node)) {
        setLangOpen(false);
      }
    };
    document.addEventListener("mousedown", onClick);
    return () => document.removeEventListener("mousedown", onClick);
  }, [langOpen]);

  // Detect when the nav is sitting over a section flagged data-on-dark.
  useEffect(() => {
    const targets = document.querySelectorAll<HTMLElement>("[data-on-dark]");
    if (targets.length === 0) return;
    const navHeight = 72;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setOnDark(true);
          else {
            const stillDark = Array.from(targets).some((el) => {
              const r = el.getBoundingClientRect();
              return r.top <= navHeight && r.bottom >= 0;
            });
            setOnDark(stillDark);
          }
        });
      },
      { rootMargin: `0px 0px -${Math.max(0, window.innerHeight - navHeight)}px 0px`, threshold: 0 },
    );
    targets.forEach((t) => observer.observe(t));
    return () => observer.disconnect();
  }, [location.pathname]);

  const toggleTheme = () => {
    const next = theme === "light" ? "dark" : "light";
    setTheme(next);
    document.documentElement.dataset.theme = next;
    try {
      localStorage.setItem("cravelle:theme", next);
    } catch {
      /* ignore */
    }
    try {
      window.dispatchEvent(new CustomEvent("cravelle:theme", { detail: next }));
    } catch {
      /* ignore */
    }
  };

  const fgColor = onDark && !scrolled ? "var(--bg)" : "var(--fg)";
  const softColor = onDark && !scrolled ? "rgba(246,241,232,0.75)" : "var(--fg-soft)";

  const currentLocale = locales.find((l) => l.code === locale) ?? locales[0];

  const pickLocale = (next: Locale) => {
    setLocale(next);
    setLangOpen(false);
  };

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled || open ? "bg-[color:var(--bg)]/95 backdrop-blur-sm" : "bg-transparent"
      }`}
      style={{ paddingTop: "env(safe-area-inset-top)", color: fgColor }}
    >
      <div className="border-b" style={{ borderColor: scrolled || open ? "var(--rule-soft)" : "transparent" }}>
        <div className="container-edge flex h-16 items-center justify-between gap-6 md:h-[72px]">
          <Link to="/" aria-label={siteCompany.brand} className="flex items-center" style={{ color: fgColor }}>
            <span
              className="brand-logo block h-7 md:h-8"
              style={{ aspectRatio: "434 / 556", width: "auto" }}
              role="img"
              aria-label={siteCompany.brand}
            />
          </Link>

          <nav className="hidden md:block" aria-label={t.nav.primaryAria}>
            <ul className="flex items-center gap-7">
              {navRoutes.map((l) => (
                <li key={l.to}>
                  <NavLink
                    to={l.to}
                    style={({ isActive }) => ({ color: isActive ? fgColor : softColor })}
                    className={({ isActive }) =>
                      `text-sm transition-colors ${
                        isActive
                          ? "underline decoration-[color:var(--brass)] decoration-1 underline-offset-[6px]"
                          : "hover:opacity-100"
                      }`
                    }
                  >
                    {t.nav[l.labelKey]}
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>

          <div className="flex items-center gap-3">
            <div className="relative hidden md:block" ref={langWrapRef}>
              <button
                type="button"
                onClick={() => setLangOpen((v) => !v)}
                aria-label={t.nav.chooseLanguage}
                aria-haspopup="listbox"
                aria-expanded={langOpen}
                className="flex h-9 min-w-[2.5rem] items-center justify-center border px-2 font-mono text-[0.72rem] uppercase tracking-[0.2em] transition-colors"
                style={{
                  borderColor: scrolled || open ? "var(--rule-soft)" : "rgba(0,0,0,0)",
                  color: softColor,
                }}
              >
                {currentLocale.short}
              </button>
              {langOpen && (
                <ul
                  role="listbox"
                  aria-label={t.nav.chooseLanguage}
                  className="lang-menu absolute end-0 mt-2 min-w-[10rem] border bg-[color:var(--bg)] py-1 text-sm shadow-card"
                  style={{ borderColor: "var(--rule-soft)", color: "var(--fg)" }}
                >
                  {locales.map((l) => (
                    <li key={l.code} role="option" aria-selected={l.code === locale}>
                      <button
                        type="button"
                        onClick={() => pickLocale(l.code)}
                        className="flex w-full items-center justify-between gap-3 px-3 py-2 text-start hover:bg-[color:var(--bg-soft)]"
                        lang={l.code}
                        dir={l.dir}
                      >
                        <span>{l.label}</span>
                        <span className="font-mono text-[0.7rem] tracking-[0.18em] text-[color:var(--fg-mute)]">
                          {l.short}
                        </span>
                      </button>
                    </li>
                  ))}
                </ul>
              )}
            </div>

            <button
              type="button"
              onClick={toggleTheme}
              aria-label={theme === "light" ? t.nav.switchToDark : t.nav.switchToLight}
              className="hidden h-9 w-9 items-center justify-center border transition-colors md:flex"
              style={{
                borderColor: scrolled || open ? "var(--rule-soft)" : "rgba(0,0,0,0)",
                color: softColor,
              }}
            >
              <span aria-hidden className="text-[0.85rem]">
                {theme === "light" ? "◐" : "◑"}
              </span>
            </button>
            <Link
              to="/contact"
              className="hidden md:inline-flex items-center gap-2 border px-4 py-2 text-xs font-medium uppercase tracking-[0.18em] transition-colors hover:bg-[color:var(--fg)] hover:text-[color:var(--bg)]"
              style={{ borderColor: fgColor, color: fgColor }}
            >
              {t.nav.contactCta}
              <span aria-hidden className="i-arrow">→</span>
            </Link>
            <button
              ref={toggleBtnRef}
              type="button"
              aria-label={open ? t.nav.closeMenu : t.nav.openMenu}
              aria-expanded={open}
              aria-controls="mobile-menu-panel"
              onClick={() => setOpen((v) => !v)}
              className="md:hidden h-11 w-11 grid place-items-center border"
              style={{ borderColor: fgColor }}
            >
              <span
                aria-hidden
                className="block h-px w-4 transition-transform"
                style={{
                  background: fgColor,
                  transform: open ? "translateY(2px) rotate(45deg)" : "translateY(-3px)",
                }}
              />
              <span
                aria-hidden
                className="block h-px w-4 transition-transform"
                style={{
                  background: fgColor,
                  transform: open ? "translateY(1px) rotate(-45deg)" : "translateY(3px)",
                }}
              />
            </button>
          </div>
        </div>
      </div>

      <div
        id="mobile-menu-panel"
        ref={panelRef}
        className="menu-panel md:hidden border-b border-[color:var(--rule)] bg-[color:var(--bg)] text-[color:var(--fg)]"
        data-open={open}
      >
        <div className="menu-panel-inner">
          <div
            className="container-edge py-8"
            style={{ paddingBottom: "calc(env(safe-area-inset-bottom) + 2rem)" }}
          >
            <div className="eyebrow mb-4">{t.nav.menu}</div>
            <ul className="flex flex-col gap-1">
              {navRoutes.map((l, i) => (
                <li key={l.to} className="border-b border-[color:var(--rule-soft)] last:border-b-0">
                  <NavLink
                    to={l.to}
                    className="flex items-baseline justify-between py-4 font-serif text-[1.6rem] leading-none tracking-[-0.01em]"
                    tabIndex={open ? 0 : -1}
                  >
                    <span>{t.nav[l.labelKey]}</span>
                    <span className="font-mono text-[0.7rem] tracking-[0.2em] text-[color:var(--fg-mute)]">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                  </NavLink>
                </li>
              ))}
            </ul>

            <div className="mt-8 border-t border-[color:var(--rule)] pt-6">
              <div className="eyebrow mb-3">{t.nav.language}</div>
              <ul className="flex flex-wrap gap-2" role="listbox" aria-label={t.nav.chooseLanguage}>
                {locales.map((l) => {
                  const active = l.code === locale;
                  return (
                    <li key={l.code} role="option" aria-selected={active}>
                      <button
                        type="button"
                        onClick={() => pickLocale(l.code)}
                        className="border px-3 py-2 text-xs uppercase tracking-[0.18em]"
                        style={{
                          borderColor: active ? "var(--fg)" : "var(--rule-soft)",
                          color: active ? "var(--fg)" : "var(--fg-soft)",
                          background: active ? "var(--bg-soft)" : "transparent",
                        }}
                        tabIndex={open ? 0 : -1}
                        lang={l.code}
                        dir={l.dir}
                      >
                        <span className="font-mono">{l.short}</span>
                        <span className="ms-2">{l.label}</span>
                      </button>
                    </li>
                  );
                })}
              </ul>
            </div>

            <div className="mt-6 flex items-center justify-between border-t border-[color:var(--rule)] pt-6">
              <a
                href={`tel:${siteCompany.contact.phoneE164}`}
                className="text-sm"
                tabIndex={open ? 0 : -1}
                dir="ltr"
              >
                {siteCompany.contact.phone}
              </a>
              <button
                type="button"
                onClick={toggleTheme}
                className="text-xs uppercase tracking-[0.18em] text-[color:var(--fg-soft)]"
                tabIndex={open ? 0 : -1}
              >
                {theme === "light" ? t.nav.darkTheme : t.nav.lightTheme}
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
