import { useEffect, useRef, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { m as motion, AnimatePresence } from "framer-motion";
import { navLinks, siteCompany } from "../content/site";

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [theme, setTheme] = useState<"light" | "dark">(() => {
    if (typeof document === "undefined") return "light";
    return (document.documentElement.dataset.theme as "light" | "dark" | undefined) ?? "light";
  });
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

  const toggleTheme = () => {
    const next = theme === "light" ? "dark" : "light";
    setTheme(next);
    document.documentElement.dataset.theme = next;
    try {
      localStorage.setItem("cravelle:theme", next);
    } catch {
      /* ignore */
    }
  };

  const logoSrc = theme === "dark" ? "/brand/logo-white.png" : "/brand/logo.png";

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled || open ? "bg-[color:var(--bg)]/95 backdrop-blur-sm" : "bg-transparent"
      }`}
      style={{ paddingTop: "env(safe-area-inset-top)" }}
    >
      <div className="border-b border-[color:var(--rule-soft)]">
        <div className="container-edge flex h-16 items-center justify-between gap-6 md:h-[72px]">
          <Link to="/" aria-label="Cravelle, home" className="flex items-center text-[color:var(--fg)]">
            <img
              src={logoSrc}
              alt="Cravelle"
              width={120}
              height={32}
              fetchPriority="high"
              decoding="async"
              draggable={false}
              className="h-7 w-auto md:h-8"
            />
          </Link>

          <nav className="hidden md:block" aria-label="Primary">
            <ul className="flex items-center gap-7">
              {navLinks.map((l) => (
                <li key={l.to}>
                  <NavLink
                    to={l.to}
                    className={({ isActive }) =>
                      `text-sm transition-colors ${
                        isActive
                          ? "text-[color:var(--fg)] underline decoration-[color:var(--brass)] decoration-1 underline-offset-[6px]"
                          : "text-[color:var(--fg-soft)] hover:text-[color:var(--fg)]"
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
              className="hidden h-9 w-9 items-center justify-center border border-[color:var(--rule-soft)] text-[color:var(--fg-soft)] transition-colors hover:border-[color:var(--rule)] hover:text-[color:var(--fg)] md:flex"
            >
              <span aria-hidden className="text-[0.85rem]">{theme === "light" ? "◐" : "◑"}</span>
            </button>
            <Link
              to="/contact"
              className="hidden md:inline-flex items-center gap-2 border border-[color:var(--fg)] px-4 py-2 text-xs font-medium uppercase tracking-[0.18em] text-[color:var(--fg)] transition-colors hover:bg-[color:var(--fg)] hover:text-[color:var(--bg)]"
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
              className="md:hidden h-11 w-11 grid place-items-center border border-[color:var(--rule)]"
            >
              <span aria-hidden className="block h-px w-4 bg-[color:var(--fg)] transition-transform" style={{ transform: open ? "translateY(2px) rotate(45deg)" : "translateY(-3px)" }} />
              <span aria-hidden className="block h-px w-4 bg-[color:var(--fg)] transition-transform" style={{ transform: open ? "translateY(1px) rotate(-45deg)" : "translateY(3px)" }} />
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-menu-panel"
            key="mobile-panel"
            ref={panelRef}
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.25, ease: [0.22, 0.61, 0.36, 1] }}
            className="md:hidden border-b border-[color:var(--rule)] bg-[color:var(--bg)]"
          >
            <div className="container-edge py-8" style={{ paddingBottom: "calc(env(safe-area-inset-bottom) + 2rem)" }}>
              <div className="eyebrow mb-4">Menu</div>
              <ul className="flex flex-col gap-1">
                {navLinks.map((l, i) => (
                  <li key={l.to} className="border-b border-[color:var(--rule-soft)] last:border-b-0">
                    <NavLink
                      to={l.to}
                      className="flex items-baseline justify-between py-4 font-serif text-[1.6rem] leading-none tracking-[-0.01em]"
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
                <a href={`tel:${siteCompany.contact.phoneE164}`} className="text-sm">
                  {siteCompany.contact.phone}
                </a>
                <button
                  type="button"
                  onClick={toggleTheme}
                  className="text-xs uppercase tracking-[0.18em] text-[color:var(--fg-soft)]"
                >
                  {theme === "light" ? "Dark" : "Light"} theme
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
