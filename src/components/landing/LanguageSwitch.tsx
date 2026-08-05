"use client";

import Link from "next/link";

import type { Locale } from "@/messages";

type LanguageSwitchProps = {
  locale: Locale;
  label: string;
};

export function LanguageSwitch({ locale, label }: LanguageSwitchProps) {
  const other: Locale = locale === "es" ? "en" : "es";
  const otherLabel = other === "es" ? "es" : "en";

  return (
    <div className="fixed top-3 right-3 z-50 flex items-center gap-1.5 rounded-full border border-ink/15 bg-bone/90 px-2 py-1 text-[11px] font-medium shadow-sm backdrop-blur-md sm:top-4 sm:right-4 sm:gap-2 sm:px-2.5 sm:py-1.5 sm:text-xs">
      <span className="hidden text-ink/50 sm:inline">{label}</span>
      <Link
        href={`/${other}`}
        className="rounded-full border border-ink bg-ink px-2 py-0.5 text-bone transition-colors duration-150 hover:border-gold hover:bg-gold hover:text-ink sm:px-2.5 sm:py-1"
      >
        {otherLabel}
      </Link>
    </div>
  );
}
