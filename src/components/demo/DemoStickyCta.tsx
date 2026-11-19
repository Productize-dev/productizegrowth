"use client";

import { useEffect, useState } from "react";

import { CalCtaButton } from "@/components/landing/CalCtaButton";

type DemoStickyCtaProps = {
  /** element id — bar shows after this leaves the viewport */
  watchId?: string;
  cta: string;
};

export function DemoStickyCta({
  watchId = "demo-hero",
  cta,
}: DemoStickyCtaProps) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const target = document.getElementById(watchId);
    if (!target) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setVisible(!entry.isIntersecting);
      },
      { threshold: 0, rootMargin: "0px 0px -20% 0px" }
    );

    observer.observe(target);
    return () => observer.disconnect();
  }, [watchId]);

  return (
    <div
      className={`fixed inset-x-0 bottom-0 z-40 border-t border-ink/10 bg-bone/95 px-4 pt-3 pb-[max(0.75rem,env(safe-area-inset-bottom))] backdrop-blur-md transition-[transform,opacity] duration-300 ease-out md:hidden ${
        visible
          ? "translate-y-0 opacity-100"
          : "pointer-events-none translate-y-full opacity-0"
      }`}
      aria-hidden={!visible}
    >
      <div className="mx-auto flex max-w-3xl items-center gap-2">
        <a
          href="#free-guide"
          className="flex h-12 min-w-0 flex-1 items-center justify-center gap-1.5 rounded-full border-2 border-gold bg-gold px-3 text-xs font-black text-ink shadow-[0_10px_28px_-8px_rgba(244,117,33,0.7)]"
        >
          free guide ↓
        </a>
        <CalCtaButton
          variant="ink"
          className="h-12 shrink-0 px-5 text-sm font-black"
        >
          {cta}
        </CalCtaButton>
      </div>
    </div>
  );
}
