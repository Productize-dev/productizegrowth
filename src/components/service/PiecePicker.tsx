"use client";

import Link from "next/link";
import { useState } from "react";

import { FloatingWindow } from "@/components/landing/FloatingWindow";
import type { Locale, Messages } from "@/messages";

import { stepIndex } from "./roving";

type PiecePickerProps = {
  locale: Locale;
  copy: Messages["services"]["sistema"];
};

export function PiecePicker({ locale, copy }: PiecePickerProps) {
  const [active, setActive] = useState(0);
  const piece = copy.pieces[active];
  if (!piece) return null;

  return (
    <div className="mx-auto grid min-w-0 max-w-5xl gap-4 px-4 lg:grid-cols-[13.5rem_minmax(0,1fr)] lg:gap-6">
      <div
        className="grid min-w-0 grid-cols-3 gap-2 lg:flex lg:flex-col"
        role="tablist"
        aria-label={copy.eyebrow}
      >
        {copy.pieces.map((item, i) => {
          const selected = i === active;
          return (
            <button
              key={item.slug}
              type="button"
              role="tab"
              id={`piece-tab-${item.slug}`}
              aria-selected={selected}
              aria-controls={`piece-panel-${item.slug}`}
              tabIndex={selected ? 0 : -1}
              onClick={() => setActive(i)}
              onKeyDown={(event) => {
                const next = stepIndex(event.key, i, copy.pieces.length);
                if (next === null) return;
                event.preventDefault();
                setActive(next);
                const slug = copy.pieces[next]?.slug;
                if (!slug) return;
                requestAnimationFrame(() => {
                  document.getElementById(`piece-tab-${slug}`)?.focus();
                });
              }}
              className={`min-h-16 min-w-0 rounded-lg border px-2 py-3 text-left transition-colors duration-150 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold sm:px-3 lg:w-full ${
                selected
                  ? "border-gold bg-white"
                  : "border-ink/10 bg-white/40 hover:border-ink/30"
              }`}
            >
              <span className="font-mono text-[10px] font-bold text-gold">
                {item.number}
              </span>
              <span className="mt-1 block text-xs font-black leading-tight text-ink sm:text-sm">
                {item.title}
              </span>
            </button>
          );
        })}
      </div>

      <FloatingWindow label={`${piece.number} · ${piece.title}`} tone="bone" className="min-w-0">
        <div
          role="tabpanel"
          id={`piece-panel-${piece.slug}`}
          aria-labelledby={`piece-tab-${piece.slug}`}
          className="min-h-64 p-5 text-left sm:p-6"
        >
          <p className="text-sm font-bold text-gold">{piece.line}</p>
          <p className="mt-3 max-w-lg text-base leading-relaxed text-ink/70">
            {piece.body}
          </p>
          <p className="mt-5 font-mono text-[10px] text-ink/40">
            {copy.handsLabel}
          </p>
          <p className="mt-1 max-w-lg text-sm leading-relaxed text-ink/60">
            {piece.hands}
          </p>
          <Link
            href={`/${locale}/${piece.slug}`}
            className="mt-5 inline-flex min-h-11 items-center text-sm font-black text-ink underline decoration-gold decoration-2 underline-offset-4"
          >
            {copy.open}
          </Link>
        </div>
      </FloatingWindow>
    </div>
  );
}
