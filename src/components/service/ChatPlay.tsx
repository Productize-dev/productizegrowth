"use client";

import { useEffect, useRef, useState } from "react";

import { FloatingWindow } from "@/components/landing/FloatingWindow";
import type { Messages } from "@/messages";

type ChatPlayProps = {
  copy: Messages["services"]["automatizacion"];
};

export function ChatPlay({ copy }: ChatPlayProps) {
  const [count, setCount] = useState(1);
  const scroller = useRef<HTMLDivElement>(null);
  const total = copy.lines.length;
  const done = total > 0 && count >= total;
  const visible = copy.lines.slice(0, count);

  useEffect(() => {
    const el = scroller.current;
    if (!el) return;
    el.scrollTo({ top: el.scrollHeight });
  }, [count]);

  if (total === 0) return null;

  return (
    <div className="min-w-0">
      <FloatingWindow label={copy.windowLabel} tone="peach">
        <div className="p-4 sm:p-5">
          <div className="mb-4 h-1 overflow-hidden rounded-full bg-ink/10">
            <div
              className="h-full rounded-full bg-gold transition-[width] duration-300 motion-reduce:transition-none"
              style={{ width: `${(count / total) * 100}%` }}
            />
          </div>
          <div
            ref={scroller}
            className="max-h-[min(22rem,50vh)] min-h-48 space-y-2 overflow-y-auto"
            aria-live="polite"
          >
            {visible.map((line, i) => {
              const mine = line.from === "system";
              return (
                <div
                  key={`${line.time}-${i}`}
                  className={`max-w-[85%] rounded-lg border px-3 py-2 ${
                    mine
                      ? "ml-auto border-ink bg-ink text-bone"
                      : "border-ink/10 bg-white text-ink"
                  }`}
                >
                  <p
                    className={`font-mono text-[10px] ${
                      mine ? "text-gold" : "text-ink/40"
                    }`}
                  >
                    {line.time} · {mine ? copy.systemLabel : copy.youLabel}
                  </p>
                  <p className="mt-0.5 text-sm leading-relaxed break-words">
                    {line.text}
                  </p>
                </div>
              );
            })}
          </div>
          <button
            type="button"
            onClick={() => setCount((n) => (n >= total ? 1 : n + 1))}
            className="mt-4 inline-flex min-h-11 w-full items-center justify-center rounded-full bg-gold px-4 text-xs font-black text-ink transition-colors duration-150 hover:bg-ink hover:text-bone focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold sm:w-auto"
          >
            {done ? copy.replay : copy.next}
          </button>
        </div>
      </FloatingWindow>
      <p className="mt-3 text-left text-xs leading-relaxed text-ink/40">
        {copy.note}
      </p>
    </div>
  );
}
