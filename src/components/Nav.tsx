import { useEffect, useRef, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { navLinks, siteCompany } from "../content/site";

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [onDark, setOnDark] = useState(false);
  // Start with a stable value so the SSR markup and the first client render
  // agree. The actual theme set by the inline boot script is read in an
  // effect below, after hydration.
  const [theme, setTheme] = useState<"light" | "dark">("light");
  const location = useLocation();
  const panelRef = useRef<HTMLDivElement | null>(null);
  const toggleBtnRef = useRef<HTMLButtonElement | null>(null);

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
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(false);
        toggleBtnRef.current?.focus();
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  // Move focus into the panel when it opens so keyboard users land inside it.
  useEffect(() => {
    if (open && panelRef.current) {
      const first = panelRef.current.querySelector<HTMLElement>("a, button");
      first?.focus();
    }
  }, [open]);

  // Detect when the nav is sitting over a section flagged data-on-dark.
  // Sections opt in by adding the attribute, and the nav flips its text/logo
  // colour for legibility while it overlaps that section.
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
      // Manual toggle: persist the choice. The boot script's matchMedia
      // listener will see this entry and stop following the system theme.
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

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled || open ? "bg-[color:var(--bg)]/95 backdrop-blur-sm" : "bg-transparent"
      }`}
      style={{ paddingTop: "env(safe-area-inset-top)", color: fgColor }}
    >
      <div className="border-b" style={{ borderColor: scrolled || open ? "var(--rule-soft)" : "transparent" }}>
        <div className="container-edge flex h-16 items-center justify-between gap-6 md:h-[72px]">
          <Link to="/" aria-label="Cravelle, home" className="flex items-center" style={{ color: fgColor }}>
            <span
              className="brand-logo block h-7 md:h-8"
              style={{ aspectRatio: "434 / 556", width: "auto" }}
              role="img"
              aria-label="Cravelle"
            />
          </Link>

          <nav className="hidden md:block" aria-label="Primary">
            <ul className="flex items-center gap-7">
              {navLinks.map((l) => (
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
                    {l.label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>

          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={toggleTheme}
              aria-label={`Switch to ${theme === "light" ? "dark" : "light"} theme`}
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
              Contact
              <span aria-hidden>→</span>
            </Link>
            <button
              ref={toggleBtnRef}
              type="button"
              aria-label={open ? "Close menu" : "Open menu"}
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
            <div className="eyebrow mb-4">Menu</div>
            <ul className="flex flex-col gap-1">
              {navLinks.map((l, i) => (
                <li key={l.to} className="border-b border-[color:var(--rule-soft)] last:border-b-0">
                  <NavLink
                    to={l.to}
                    className="flex items-baseline justify-between py-4 font-serif text-[1.6rem] leading-none tracking-[-0.01em]"
                    tabIndex={open ? 0 : -1}
                  >
                    <span>{l.label}</span>
                    <span className="font-mono text-[0.7rem] tracking-[0.2em] text-[color:var(--fg-mute)]">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                  </NavLink>
                </li>
              ))}
            </ul>
            <div className="mt-8 flex items-center justify-between border-t border-[color:var(--rule)] pt-6">
              <a
                href={`tel:${siteCompany.contact.phoneE164}`}
                className="text-sm"
                tabIndex={open ? 0 : -1}
              >
                {siteCompany.contact.phone}
              </a>
              <button
                type="button"
                onClick={toggleTheme}
                className="text-xs uppercase tracking-[0.18em] text-[color:var(--fg-soft)]"
                tabIndex={open ? 0 : -1}
              >
                {theme === "light" ? "Dark" : "Light"} theme
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
