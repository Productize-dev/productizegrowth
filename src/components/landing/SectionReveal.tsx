"use client";

import { useEffect, useRef } from "react";

import { cn } from "@/lib/utils";

type SectionRevealProps = {
  children: React.ReactNode;
  className?: string;
  contentClassName?: string;
  as?: "section" | "div";
  id?: string;
  /** skip animation — for above-the-fold hero */
  immediate?: boolean;
};

export function SectionReveal({
  children,
  className,
  contentClassName,
  as = "section",
  id,
  immediate = false,
}: SectionRevealProps) {
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (immediate) return;
    const el = contentRef.current;
    if (!el) return;

    // already in view on load (e.g. short viewport) — show without waiting
    const show = () => el.classList.add("is-visible");

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          show();
          observer.unobserve(el);
        }
      },
      { threshold: 0.05, rootMargin: "0px 0px -5% 0px" }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [immediate]);

  const content = (
    <div
      ref={contentRef}
      className={cn(
        immediate ? "reveal-content is-visible" : "reveal-content",
        contentClassName
      )}
    >
      {children}
    </div>
  );

  if (as === "div") {
    return (
      <div id={id} className={className}>
        {content}
      </div>
    );
  }

  return (
    <section id={id} className={className}>
      {content}
    </section>
  );
}
