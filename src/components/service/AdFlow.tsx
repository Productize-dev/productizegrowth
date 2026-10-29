"use client";

import { useState } from "react";

import { FloatingWindow } from "@/components/landing/FloatingWindow";
import type { Messages } from "@/messages";

import { stepIndex } from "./roving";

type AdFlowProps = {
  copy: Messages["services"]["ads"];
};

export function AdFlow({ copy }: AdFlowProps) {
  const [active, setActive] = useState(0);
  const step = copy.steps[active];
  if (!step) return null;

  return (
    <div className="mx-auto grid min-w-0 max-w-5xl gap-4 px-4 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:items-stretch lg:gap-8">
      <div
        className="grid grid-cols-2 gap-2 lg:flex lg:flex-col"
        role="tablist"
        aria-label={copy.eyebrow}
      >
        {copy.steps.map((item, i) => {
          const selected = i === active;
          return (
            <button
              key={item.title}
              type="button"
              role="tab"
              id={`ad-step-${i}`}
              aria-selected={selected}
              aria-controls="ad-step-panel"
              tabIndex={selected ? 0 : -1}
              onClick={() => setActive(i)}
              onKeyDown={(event) => {
                const next = stepIndex(event.key, i, copy.steps.length);
                if (next === null) return;
                event.preventDefault();
                setActive(next);
                requestAnimationFrame(() => {
                  document.getElementById(`ad-step-${next}`)?.focus();
                });
              }}
              className={`min-h-16 rounded-lg border px-3 py-3 text-left transition-colors duration-150 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold sm:px-4 ${
                selected
                  ? "border-gold bg-white"
                  : "border-ink/10 bg-white/40 hover:border-ink/30"
              }`}
            >
              <span className="font-mono text-[10px] font-bold text-gold">
                0{i + 1}
              </span>
              <span className="mt-1 block text-sm font-black leading-tight text-ink">
                {item.title}
              </span>
            </button>
          );
        })}
      </div>

      <FloatingWindow label={copy.windowLabel} tone="bone" className="h-full min-w-0">
        <div
          id="ad-step-panel"
          role="tabpanel"
          aria-labelledby={`ad-step-${active}`}
          className="flex h-full min-h-44 flex-col justify-center p-5 text-left sm:p-7"
        >
          <div className="mb-5 flex gap-1" aria-hidden>
            {copy.steps.map((item, i) => (
              <span
                key={item.title}
                className={`h-1 flex-1 rounded-full ${
                  i <= active ? "bg-gold" : "bg-ink/10"
                }`}
              />
            ))}
          </div>
          <p className="text-2xl font-black leading-[1.05] text-ink sm:text-3xl">
            {step.visual}
          </p>
          <p className="mt-3 max-w-md text-sm leading-relaxed text-ink/60">
            {step.body}
          </p>
        </div>
      </FloatingWindow>
    </div>
  );
}
