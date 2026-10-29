"use client";

import Image from "next/image";
import { useState } from "react";

import { FloatingWindow } from "@/components/landing/FloatingWindow";
import { cn } from "@/lib/utils";
import type { Messages } from "@/messages";

type SurfaceToggleProps = {
  copy: Messages["services"]["web"];
};

export function SurfaceToggle({ copy }: SurfaceToggleProps) {
  const [view, setView] = useState<"google" | "site">("google");

  return (
    <div className="mx-auto min-w-0 max-w-5xl px-4">
      <div className="mb-3 flex gap-2 lg:hidden" role="group">
        {(
          [
            ["google", copy.googleLabel],
            ["site", copy.siteLabel],
          ] as const
        ).map(([id, label]) => {
          const selected = view === id;
          return (
            <button
              key={id}
              type="button"
              aria-pressed={selected}
              onClick={() => setView(id)}
              className={`inline-flex min-h-11 items-center rounded-full border px-4 text-xs font-black transition-colors duration-150 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold ${
                selected
                  ? "border-ink bg-ink text-bone"
                  : "border-ink/15 bg-white text-ink/55 hover:text-ink"
              }`}
            >
              {label}
            </button>
          );
        })}
      </div>

      <div className="grid min-w-0 gap-4 lg:grid-cols-2 lg:items-start lg:gap-6">
        <div className={cn("min-w-0", view === "google" ? "block" : "hidden lg:block")}>
          <GooglePanel copy={copy} />
        </div>
        <div className={cn("min-w-0", view === "site" ? "block" : "hidden lg:block")}>
          <SitePanel copy={copy} />
        </div>
      </div>
    </div>
  );
}

function GooglePanel({ copy }: { copy: Messages["services"]["web"] }) {
  return (
    <FloatingWindow label="google business" tone="mint">
      <div className="p-5 text-left sm:p-6">
        <p className="text-lg font-black text-ink">{copy.profileName}</p>
        <p className="mt-1 text-xs text-ink/45">{copy.profileMeta}</p>
        <ul className="mt-4 space-y-3">
          {copy.profileRows.map((row) => (
            <li key={row.label} className="border-l-2 border-gold pl-3">
              <p className="text-xs font-black text-ink">{row.label}</p>
              <p className="text-sm leading-relaxed text-ink/60">{row.text}</p>
            </li>
          ))}
        </ul>
        <p className="mt-4 text-xs leading-relaxed text-ink/40">{copy.profileNote}</p>
      </div>
    </FloatingWindow>
  );
}

function SitePanel({ copy }: { copy: Messages["services"]["web"] }) {
  return (
    <FloatingWindow label="freshcleaningplacellc.com" tone="bone">
      <div className="overflow-hidden bg-white">
        <Image
          src="/cases/fresh-cleaning-place.png"
          alt={copy.imageAlt}
          width={1200}
          height={760}
          sizes="(min-width: 1024px) 28rem, 100vw"
          className="h-auto w-full"
        />
      </div>
      <div className="flex flex-col items-start gap-2 border-t border-ink/10 px-4 py-3 text-left sm:flex-row sm:items-center sm:justify-between">
        <p className="text-xs leading-relaxed text-ink/50">{copy.siteCaption}</p>
        <a
          href={copy.siteUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex min-h-11 shrink-0 items-center text-xs font-black text-ink underline decoration-gold decoration-2 underline-offset-4"
        >
          {copy.siteLink}
        </a>
      </div>
    </FloatingWindow>
  );
}
