import { Check, X } from "lucide-react";

import type { Messages } from "@/messages";

import { SectionReveal } from "./SectionReveal";

type CompareProps = {
  messages: Messages["compare"];
};

export function Compare({ messages }: CompareProps) {
  return (
    <SectionReveal className="relative overflow-hidden border-b border-ink bg-dot-grid-ink px-4 py-16 sm:px-6 sm:py-24">
      <div className="mx-auto max-w-5xl">
        <div className="mb-10 max-w-2xl text-left">
          <h2 className="text-3xl font-black leading-[1.05] text-bone sm:text-5xl">
            {messages.title}
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-bone/55 sm:text-base">
            {messages.subtitle}
          </p>
        </div>

        {/* mobile: stacked feature cards */}
        <div className="space-y-4 lg:hidden">
          {messages.rows.map((row) => (
            <div
              key={row.feature}
              className="overflow-hidden rounded-2xl border border-bone/15 bg-bone"
            >
              <p className="border-b border-ink/10 bg-ink px-4 py-3 text-sm font-bold text-bone">
                {row.feature}
              </p>
              <div className="divide-y divide-ink/10">
                <CompareRow
                  label={messages.headers.agency}
                  value={row.agency}
                  tone="muted"
                />
                <CompareRow
                  label={messages.headers.diy}
                  value={row.diy}
                  tone="muted"
                />
                <CompareRow
                  label={messages.headers.us}
                  value={row.us}
                  tone="win"
                />
              </div>
            </div>
          ))}
        </div>

        {/* desktop: full comparison table */}
        <div className="hidden overflow-hidden rounded-2xl border border-bone/20 bg-bone shadow-[0_24px_60px_-30px_rgba(0,0,0,0.5)] lg:block">
          <table className="w-full border-collapse text-left">
            <thead>
              <tr>
                <th className="w-[22%] bg-ink/5 px-5 py-4 text-xs font-medium tracking-wide text-ink/40">
                  {messages.headers.feature}
                </th>
                <th className="w-[26%] px-5 py-4 text-sm font-bold text-ink/50">
                  {messages.headers.agency}
                </th>
                <th className="w-[26%] px-5 py-4 text-sm font-bold text-ink/50">
                  {messages.headers.diy}
                </th>
                <th className="w-[26%] bg-gold px-5 py-4 text-sm font-black text-ink">
                  {messages.headers.us}
                </th>
              </tr>
            </thead>
            <tbody>
              {messages.rows.map((row, i) => (
                <tr
                  key={row.feature}
                  className={
                    i < messages.rows.length - 1
                      ? "border-b border-ink/10"
                      : ""
                  }
                >
                  <td className="bg-ink/5 px-5 py-5 align-top text-sm font-bold text-ink">
                    {row.feature}
                  </td>
                  <td className="px-5 py-5 align-top">
                    <Cell value={row.agency} win={false} />
                  </td>
                  <td className="px-5 py-5 align-top">
                    <Cell value={row.diy} win={false} />
                  </td>
                  <td className="bg-gold/10 px-5 py-5 align-top">
                    <Cell value={row.us} win />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </SectionReveal>
  );
}

function Cell({ value, win }: { value: string; win: boolean }) {
  return (
    <div className="flex gap-2.5">
      <span
        className={`mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full ${
          win ? "bg-gold text-ink" : "bg-ink/10 text-ink/35"
        }`}
        aria-hidden
      >
        {win ? <Check className="size-3 stroke-[3]" /> : <X className="size-3 stroke-[3]" />}
      </span>
      <p
        className={`text-sm leading-snug ${
          win ? "font-bold text-ink" : "text-ink/55"
        }`}
      >
        {value}
      </p>
    </div>
  );
}

function CompareRow({
  label,
  value,
  tone,
}: {
  label: string;
  value: string;
  tone: "muted" | "win";
}) {
  const win = tone === "win";
  return (
    <div className={`px-4 py-3 ${win ? "bg-gold/15" : ""}`}>
      <p
        className={`mb-1 text-[11px] font-bold tracking-wide ${
          win ? "text-gold" : "text-ink/40"
        }`}
      >
        {label}
      </p>
      <div className="flex gap-2">
        <span
          className={`mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full ${
            win ? "bg-gold text-ink" : "bg-ink/10 text-ink/35"
          }`}
          aria-hidden
        >
          {win ? (
            <Check className="size-3 stroke-[3]" />
          ) : (
            <X className="size-3 stroke-[3]" />
          )}
        </span>
        <p
          className={`text-sm leading-snug ${
            win ? "font-bold text-ink" : "text-ink/60"
          }`}
        >
          {value}
        </p>
      </div>
    </div>
  );
}
