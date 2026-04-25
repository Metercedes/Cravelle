import { useState } from "react";
import { formIntake, siteCompany } from "../content/site";

type Status = "idle" | "submitting" | "ok" | "error";

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");
    setErrorMessage(null);
    const form = e.currentTarget;
    // Honeypot
    const trap = (form.elements.namedItem("_gotcha") as HTMLInputElement | null)?.value;
    if (trap) {
      setStatus("ok");
      return;
    }
    const data = new FormData(form);
    try {
      const res = await fetch(siteCompany.formEndpoint, {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });
      if (res.ok) {
        setStatus("ok");
        form.reset();
      } else {
        const json = await res.json().catch(() => ({}));
        setErrorMessage(json?.errors?.[0]?.message ?? "We could not submit your message. Please email us directly.");
        setStatus("error");
      }
    } catch {
      setErrorMessage("Network error. Please email us directly.");
      setStatus("error");
    }
  }

  if (status === "ok") {
    return (
      <div className="border border-[color:var(--rule)] bg-[color:var(--bg-soft)]/50 p-8">
        <div className="font-mono text-[0.7rem] uppercase tracking-[0.2em] text-[color:var(--signal)]">Message received</div>
        <h3 className="mt-3 font-serif text-[1.6rem] tracking-[-0.01em]">Thank you. We have your brief.</h3>
        <p className="mt-3 max-w-prose text-[15px] leading-[1.65] text-[color:var(--fg-soft)]">
          A reply will arrive from <span className="font-medium">{siteCompany.contact.email}</span> within two working days.
          If your matter is time sensitive, call <a className="underline underline-offset-[6px]" href={`tel:${siteCompany.contact.phoneE164}`}>{siteCompany.contact.phone}</a>.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="grid gap-6" noValidate>
      <input type="hidden" name="_subject" value="Cravelle, new commercial inquiry" />
      <input type="text" name="_gotcha" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden="true" />

      <div className="grid gap-4 md:grid-cols-2">
        <Field label={formIntake.fields.name} name="name" required autoComplete="name" />
        <Field label={formIntake.fields.company} name="company" required autoComplete="organization" />
      </div>
      <div className="grid gap-4 md:grid-cols-2">
        <Field label={formIntake.fields.country} name="country" required autoComplete="country-name" />
        <Field label={formIntake.fields.email} name="email" type="email" required autoComplete="email" />
      </div>
      <div className="grid gap-4 md:grid-cols-2">
        <Field label={formIntake.fields.phone} name="phone" type="tel" autoComplete="tel" />
        <Select label={formIntake.fields.businessType} name="businessType" options={formIntake.businessTypes} required />
      </div>
      <div className="grid gap-4 md:grid-cols-2">
        <Field label={formIntake.fields.productOrSector} name="productOrSector" required />
        <Select label={formIntake.fields.targetMarket} name="targetMarket" options={formIntake.targetMarkets} required />
      </div>
      <div>
        <label className="field-label" htmlFor="message">{formIntake.fields.message}</label>
        <textarea
          id="message"
          name="message"
          rows={5}
          className="field"
          placeholder="Country of origin, product or sector, what you would like to do in Europe, and any constraints we should know about."
        />
      </div>

      <p className="font-mono text-[11.5px] leading-[1.6] text-[color:var(--fg-mute)]">
        By sending this form you agree we may use the information above to reply and prepare a relevant
        response. We do not share inquiries with third parties without your consent.
      </p>

      {status === "error" && (
        <div role="alert" className="border border-[color:var(--brass)] p-4 text-sm text-[color:var(--fg)]">
          {errorMessage ?? "Something went wrong."}
        </div>
      )}

      <div className="flex flex-wrap items-center gap-3 pt-2">
        <button type="submit" disabled={status === "submitting"} className="btn-primary disabled:opacity-60">
          {status === "submitting" ? "Sending..." : "Send brief"}
          <span aria-hidden>→</span>
        </button>
        <a href={`mailto:${siteCompany.contact.email}`} className="btn-link">
          or email {siteCompany.contact.email}
        </a>
      </div>
    </form>
  );
}

function Field({
  label,
  name,
  type = "text",
  required,
  autoComplete,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  autoComplete?: string;
}) {
  return (
    <div>
      <label className="field-label" htmlFor={name}>
        {label}
        {required ? <span className="ml-1 text-[color:var(--brass)]" aria-hidden>*</span> : null}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        autoComplete={autoComplete}
        className="field"
      />
    </div>
  );
}

function Select({
  label,
  name,
  options,
  required,
}: {
  label: string;
  name: string;
  options: readonly string[];
  required?: boolean;
}) {
  return (
    <div>
      <label className="field-label" htmlFor={name}>
        {label}
        {required ? <span className="ml-1 text-[color:var(--brass)]" aria-hidden>*</span> : null}
      </label>
      <select id={name} name={name} required={required} className="field" defaultValue="">
        <option value="" disabled>Select...</option>
        {options.map((o) => (
          <option key={o} value={o}>{o}</option>
        ))}
      </select>
    </div>
  );
}
