"use client";

import { Download, Loader2, Sparkles } from "lucide-react";
import { useId, useState } from "react";

import { SectionReveal } from "@/components/landing/SectionReveal";
import { TrackStage } from "@/components/landing/TrackStage";
import { Button } from "@/components/ui/button";
import { trackLeadConversion } from "@/lib/meta-pixel";
import { cn } from "@/lib/utils";

type FormState = {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
};

const emptyForm: FormState = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
};

export function DemoLeadMagnet() {
  const formId = useId();
  const [open, setOpen] = useState(false);
  const [form, setForm] = useState<FormState>(emptyForm);
  const [status, setStatus] = useState<"idle" | "loading" | "done" | "error">(
    "idle"
  );
  const [error, setError] = useState("");
  const [downloadUrl, setDownloadUrl] = useState("/downloads/leak-checklist.pdf");

  function update<K extends keyof FormState>(key: K, value: string) {
    setForm((prev) => ({ ...prev, [key]: value }));
  }

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("loading");
    setError("");

    try {
      const res = await fetch("/api/demo-lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = (await res.json()) as {
        error?: string;
        downloadUrl?: string;
      };

      if (!res.ok) {
        setStatus("error");
        setError(data.error ?? "something broke. try again.");
        return;
      }

      if (data.downloadUrl) setDownloadUrl(data.downloadUrl);
      trackLeadConversion({ content_name: "leak-checklist" });
      setStatus("done");
    } catch {
      setStatus("error");
      setError("network hiccup. try again.");
    }
  }

  return (
    <SectionReveal
      id="free-guide"
      className="relative overflow-hidden border-b border-ink bg-ink px-4 py-16 text-bone sm:px-6 sm:py-20"
    >
      <TrackStage preset="banner" role="divider" />

      {/* glow blob — keeps the gold cut readable from afar */}
      <div
        className="pointer-events-none absolute -top-24 left-1/2 size-[28rem] -translate-x-1/2 rounded-full bg-gold/25 blur-3xl"
        aria-hidden
      />

      <div className="relative mx-auto max-w-4xl text-center">
        <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-gold/40 bg-gold/10 px-3 py-1 text-[11px] font-bold tracking-wide text-gold">
          <Sparkles className="size-3.5" aria-hidden />
          free while you watch — no course, no pitch deck
        </div>

        <h2 className="mx-auto max-w-3xl text-4xl font-black leading-[0.98] sm:text-6xl lg:text-7xl">
          your leads are leaking.{" "}
          <span className="text-gold">find every hole.</span>
        </h2>

        <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-bone/70 sm:text-xl">
          free: the leak checklist. the same map we use before we install the
          system — where money dies after hours, and what to plug first.
        </p>

        <p className="mx-auto mt-3 max-w-xl text-sm font-bold text-gold sm:text-base">
          watch the vsl. grab the guide. then book if it clicks.
        </p>

        {status !== "done" ? (
          <>
            {!open ? (
              <div className="mt-8 flex flex-col items-center gap-3 sm:mt-10">
                <button
                  type="button"
                  onClick={() => setOpen(true)}
                  className={cn(
                    "group relative flex w-full max-w-2xl flex-col items-center justify-center gap-2 rounded-[1.75rem] border-2 border-gold bg-gold px-6 py-7 text-ink shadow-[0_24px_70px_-12px_rgba(244,117,33,0.85)] transition-[transform,box-shadow] duration-200",
                    "hover:-translate-y-1 hover:shadow-[0_28px_80px_-10px_rgba(244,117,33,0.95)]",
                    "animate-cta-glow sm:py-9"
                  )}
                >
                  <span className="flex items-center gap-3 text-2xl font-black leading-none sm:text-4xl lg:text-5xl">
                    <Download
                      className="size-8 shrink-0 sm:size-10"
                      strokeWidth={2.5}
                      aria-hidden
                    />
                    download free →
                  </span>
                  <span className="max-w-lg text-sm font-bold leading-snug text-ink/70 sm:text-lg">
                    leak checklist · pdf · lands in your inbox in seconds
                  </span>
                </button>
                <p className="text-xs text-bone/40">
                  name + email + phone. we send the pdf. that&apos;s it.
                </p>
              </div>
            ) : (
              <form
                onSubmit={onSubmit}
                className="mx-auto mt-8 max-w-xl rounded-2xl border border-gold/35 bg-bone p-5 text-left text-ink shadow-[0_28px_70px_-24px_rgba(244,117,33,0.55)] sm:mt-10 sm:p-7"
                aria-labelledby={`${formId}-title`}
              >
                <p
                  id={`${formId}-title`}
                  className="text-lg font-black leading-tight text-ink sm:text-xl"
                >
                  where should we send the free guide?
                </p>
                <p className="mt-1 text-sm text-ink/55">
                  fill this once. the leak checklist hits your inbox.
                </p>

                <div className="mt-5 grid gap-3 sm:grid-cols-2">
                  <Field
                    id={`${formId}-first`}
                    label="first name"
                    autoComplete="given-name"
                    value={form.firstName}
                    onChange={(v) => update("firstName", v)}
                  />
                  <Field
                    id={`${formId}-last`}
                    label="last name"
                    autoComplete="family-name"
                    value={form.lastName}
                    onChange={(v) => update("lastName", v)}
                  />
                  <Field
                    id={`${formId}-email`}
                    label="email"
                    type="email"
                    autoComplete="email"
                    className="sm:col-span-2"
                    value={form.email}
                    onChange={(v) => update("email", v)}
                  />
                  <Field
                    id={`${formId}-phone`}
                    label="phone"
                    type="tel"
                    autoComplete="tel"
                    className="sm:col-span-2"
                    value={form.phone}
                    onChange={(v) => update("phone", v)}
                  />
                </div>

                {error ? (
                  <p className="mt-3 text-sm font-bold text-red-700" role="alert">
                    {error}
                  </p>
                ) : null}

                <div className="mt-5 flex flex-col gap-2 sm:flex-row sm:items-center">
                  <Button
                    type="submit"
                    disabled={status === "loading"}
                    className="h-14 flex-1 rounded-full border-0 bg-gold text-base font-black text-ink hover:bg-ink hover:text-bone sm:h-16 sm:text-lg"
                  >
                    {status === "loading" ? (
                      <>
                        <Loader2 className="size-5 animate-spin" aria-hidden />
                        sending…
                      </>
                    ) : (
                      <>
                        <Download className="size-5" aria-hidden />
                        send the free guide →
                      </>
                    )}
                  </Button>
                  <button
                    type="button"
                    onClick={() => setOpen(false)}
                    className="h-11 rounded-full px-4 text-sm font-bold text-ink/45 hover:text-ink"
                  >
                    back
                  </button>
                </div>
              </form>
            )}
          </>
        ) : (
          <div className="mx-auto mt-8 max-w-xl rounded-2xl border border-gold/40 bg-gold/15 px-6 py-8 text-center sm:mt-10">
            <p className="text-2xl font-black text-gold sm:text-3xl">
              check your inbox.
            </p>
            <p className="mt-2 text-sm leading-relaxed text-bone/70 sm:text-base">
              the leak checklist is on its way to{" "}
              <span className="font-bold text-bone">{form.email}</span>.
              can&apos;t wait? grab it now.
            </p>
            <a
              href={downloadUrl}
              download
              className="mt-6 inline-flex h-14 items-center justify-center gap-2 rounded-full bg-gold px-8 text-base font-black text-ink shadow-[0_18px_50px_-10px_rgba(244,117,33,0.7)] transition-transform hover:-translate-y-0.5 sm:h-16 sm:text-lg"
            >
              <Download className="size-5" aria-hidden />
              download pdf now →
            </a>
          </div>
        )}
      </div>
    </SectionReveal>
  );
}

function Field({
  id,
  label,
  value,
  onChange,
  type = "text",
  autoComplete,
  className,
}: {
  id: string;
  label: string;
  value: string;
  onChange: (value: string) => void;
  type?: string;
  autoComplete?: string;
  className?: string;
}) {
  return (
    <label className={cn("block", className)}>
      <span className="mb-1.5 block text-[11px] font-bold tracking-wide text-ink/45">
        {label}
      </span>
      <input
        id={id}
        name={label}
        type={type}
        required
        autoComplete={autoComplete}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="h-12 w-full rounded-xl border border-ink/15 bg-white px-3.5 text-base font-medium text-ink outline-none transition-[border-color,box-shadow] placeholder:text-ink/30 focus:border-gold focus:ring-2 focus:ring-gold/30"
      />
    </label>
  );
}
