"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";

import type { Locale, ServiceNavItem, ServiceSlug } from "@/messages";

type ServiceSwitchProps = {
  locale: Locale;
  label: string;
  current: ServiceSlug;
  items: ServiceNavItem[];
};

export function ServiceSwitch({
  locale,
  label,
  current,
  items,
}: ServiceSwitchProps) {
  const scroller = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const selected = scroller.current?.querySelector("[aria-current='page']");
    selected?.scrollIntoView({ inline: "center", block: "nearest" });
  }, [current]);

  return (
    <nav
      aria-label={label}
      className="sticky top-[calc(3.5rem+env(safe-area-inset-top))] z-40 border-y border-ink/10 bg-bone/90 backdrop-blur-md sm:top-[calc(4rem+env(safe-area-inset-top))]"
    >
      <div
        ref={scroller}
        className="mx-auto flex max-w-5xl snap-x gap-2 overflow-x-auto px-4 py-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {items.map((item) => {
          const selected = item.slug === current;
          return (
            <Link
              key={item.slug}
              href={`/${locale}/${item.slug}`}
              aria-current={selected ? "page" : undefined}
              className={`inline-flex min-h-10 shrink-0 snap-start items-center rounded-full border px-3.5 text-xs font-black transition-colors duration-150 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold ${
                selected
                  ? "border-ink bg-ink text-bone"
                  : "border-ink/15 bg-white text-ink/55 hover:text-ink"
              }`}
            >
              <span className="sm:hidden">{item.short}</span>
              <span className="hidden sm:inline">{item.label}</span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
