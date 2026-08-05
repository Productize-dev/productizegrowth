"use client";

import Image from "next/image";
import Link from "next/link";

import { CalCtaButton } from "@/components/landing/CalCtaButton";
import type { Locale } from "@/messages";

type SiteHeaderProps = {
  locale: Locale;
  cta: string;
};

export function SiteHeader({ locale, cta }: SiteHeaderProps) {
  return (
    <header className="fixed top-0 right-0 left-0 z-50 border-b border-ink/10 bg-bone/90 backdrop-blur-md">
      <div className="mx-auto flex h-14 max-w-5xl items-center justify-between gap-3 px-4 sm:h-16 sm:px-6">
        <Link href={`/${locale}`} className="shrink-0">
          <Image
            src="/brand-logo.png"
            alt="productizegrowth"
            width={160}
            height={80}
            unoptimized
            className="h-[49px] w-auto bg-transparent"
            priority
          />
        </Link>

        <div className="flex items-center gap-2 sm:gap-3">
          <nav
            aria-label="language"
            className="flex items-center rounded-full border border-ink/15 bg-white/60 p-0.5 text-[11px] font-bold sm:text-xs"
          >
            <Link
              href="/es"
              className={`rounded-full px-2.5 py-1 transition-colors duration-150 ${
                locale === "es"
                  ? "bg-ink text-bone"
                  : "text-ink/45 hover:text-ink"
              }`}
            >
              es
            </Link>
            <Link
              href="/en"
              className={`rounded-full px-2.5 py-1 transition-colors duration-150 ${
                locale === "en"
                  ? "bg-ink text-bone"
                  : "text-ink/45 hover:text-ink"
              }`}
            >
              en
            </Link>
          </nav>

          <CalCtaButton
            variant="gold"
            className="hidden h-9 px-4 text-xs sm:inline-flex sm:w-auto"
          >
            {cta}
          </CalCtaButton>
        </div>
      </div>
    </header>
  );
}
