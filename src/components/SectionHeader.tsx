import type { ReactNode } from "react";

type Props = {
  index: string;
  eyebrow: string;
  title: ReactNode;
  intro?: ReactNode;
  align?: "left" | "spread";
};

export default function SectionHeader({ index, eyebrow, title, intro, align = "spread" }: Props) {
  return (
    <header className="container-edge">
      <div className="flex items-center justify-between font-mono text-[0.7rem] uppercase tracking-[0.2em] text-[color:var(--fg-soft)]">
        <span>{index}</span>
        <span className="hidden sm:inline">{eyebrow}</span>
      </div>
      <div className="hairline-x mt-2" />
      <div className={`mt-10 grid gap-y-6 md:gap-x-10 ${align === "spread" ? "md:grid-cols-12" : ""}`}>
        <h2 className={`font-serif text-display-lg ${align === "spread" ? "md:col-span-7" : ""}`}>
          {title}
        </h2>
        {intro && (
          <div
            className={`text-[15.5px] leading-[1.65] text-[color:var(--fg-soft)] ${
              align === "spread" ? "md:col-span-5 md:pt-3" : "max-w-readable"
            }`}
          >
            {intro}
          </div>
        )}
      </div>
    </header>
  );
}
