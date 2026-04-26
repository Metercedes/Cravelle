import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1.25rem",
        sm: "1.5rem",
        lg: "2rem",
        xl: "2.5rem",
      },
      screens: {
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1200px",
        "2xl": "1320px",
      },
    },
    extend: {
      colors: {
        obsidian: "#080A0D",
        porcelain: "#F6F1E8",
        graphite: "#1C2228",
        baltic: "#244C5A",
        brass: "#9A6F3E",
        route: "#A8A29A",
        signal: "#5E7A66",
        ink: {
          DEFAULT: "#1C2228",
          50: "#F6F1E8",
          100: "#ECE7DD",
          200: "#D8D2C7",
          300: "#A8A29A",
          400: "#6E6F70",
          500: "#3E4348",
          600: "#2A2F35",
          700: "#1C2228",
          800: "#10151A",
          900: "#080A0D",
        },
      },
      fontFamily: {
        serif: ['"Fraunces"', "ui-serif", "Georgia", "Cambria", "serif"],
        sans: [
          '"Inter"',
          "ui-sans-serif",
          "system-ui",
          "-apple-system",
          "Segoe UI",
          "Helvetica",
          "Arial",
          "sans-serif",
        ],
        mono: [
          '"JetBrains Mono"',
          "ui-monospace",
          "SFMono-Regular",
          "Menlo",
          "monospace",
        ],
      },
      fontSize: {
        "display-xl": ["clamp(3rem, 7vw, 6.25rem)", { lineHeight: "0.95", letterSpacing: "-0.02em" }],
        "display-lg": ["clamp(2.5rem, 5.5vw, 4.5rem)", { lineHeight: "1", letterSpacing: "-0.02em" }],
        "display-md": ["clamp(2rem, 4vw, 3.25rem)", { lineHeight: "1.04", letterSpacing: "-0.018em" }],
        "display-sm": ["clamp(1.5rem, 2.6vw, 2.25rem)", { lineHeight: "1.12", letterSpacing: "-0.014em" }],
        eyebrow: ["0.7rem", { lineHeight: "1", letterSpacing: "0.18em" }],
      },
      letterSpacing: {
        eyebrow: "0.18em",
      },
      borderRadius: {
        none: "0",
        sm: "2px",
        DEFAULT: "4px",
        md: "6px",
        lg: "10px",
      },
      maxWidth: {
        prose: "62ch",
        readable: "70ch",
      },
      boxShadow: {
        plate: "0 1px 0 rgba(28,34,40,0.08), 0 24px 60px -32px rgba(8,10,13,0.4)",
        card: "0 1px 0 rgba(28,34,40,0.06), 0 8px 24px -16px rgba(8,10,13,0.18)",
      },
      transitionTimingFunction: {
        editorial: "cubic-bezier(0.22, 0.61, 0.36, 1)",
      },
      keyframes: {
        "split-open-left": {
          "0%": { transform: "translate3d(0,0,0)" },
          "100%": { transform: "translate3d(-100%,0,0)" },
        },
        "split-open-right": {
          "0%": { transform: "translate3d(0,0,0)" },
          "100%": { transform: "translate3d(100%,0,0)" },
        },
        "rule-grow": {
          "0%": { transform: "scaleX(0)" },
          "100%": { transform: "scaleX(1)" },
        },
        "fade-up": {
          "0%": { opacity: "0", transform: "translate3d(0,16px,0)" },
          "100%": { opacity: "1", transform: "translate3d(0,0,0)" },
        },
        "marquee-x": {
          "0%": { transform: "translate3d(0,0,0)" },
          "100%": { transform: "translate3d(-50%,0,0)" },
        },
      },
      animation: {
        "rule-grow": "rule-grow 1s cubic-bezier(0.22,0.61,0.36,1) both",
        "fade-up": "fade-up 0.7s cubic-bezier(0.22,0.61,0.36,1) both",
        "marquee-x": "marquee-x 38s linear infinite",
      },
    },
  },
  plugins: [],
};

export default config;
