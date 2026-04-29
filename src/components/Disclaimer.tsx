import { disclaimerText } from "../content/site";

export default function Disclaimer({ compact = false }: { compact?: boolean }) {
  return (
    <aside
      className={`border border-[color:var(--rule)] bg-[color:var(--bg-soft)]/40 ${compact ? "p-5" : "p-7 md:p-9"}`}
      aria-label="Scope of services disclaimer"
    >
      <div className="flex items-center gap-3 font-mono text-[0.7rem] uppercase tracking-[0.2em] text-[color:var(--fg-soft)]">
        <span aria-hidden className="text-[color:var(--brass)]">§</span>
        <span>Scope of services</span>
      </div>
      <p className={`mt-4 max-w-prose leading-[1.65] text-[color:var(--fg-soft)] ${compact ? "text-[13.5px]" : "text-[14.5px]"}`}>
        {disclaimerText}
      </p>
    </aside>
  );
}
