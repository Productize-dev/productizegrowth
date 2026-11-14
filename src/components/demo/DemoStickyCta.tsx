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
      <div className="mx-auto flex max-w-3xl items-center gap-3">
        <p className="min-w-0 flex-1 text-xs font-bold leading-snug text-ink/70">
          ready? book the 30-min call.
        </p>
        <CalCtaButton
          variant="gold"
          className="h-12 shrink-0 px-6 text-sm font-black shadow-[0_10px_28px_-8px_rgba(244,117,33,0.7)]"
        >
          {cta}
        </CalCtaButton>
      </div>
    </div>
  );
}
