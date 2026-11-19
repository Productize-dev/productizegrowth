"use client";

import { Download } from "lucide-react";
import { useEffect, useState } from "react";

/**
 * always-on download hook — visible from every scroll position
 * so the free guide CTA never disappears while they watch the vsl.
 */
export function DemoLeadFloat() {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const id = window.setTimeout(() => setReady(true), 900);
    return () => window.clearTimeout(id);
  }, []);

  return (
    <a
      href="#free-guide"
      className={`fixed z-50 flex items-center gap-2 rounded-full border-2 border-gold bg-gold px-4 py-3 font-black text-ink shadow-[0_16px_40px_-10px_rgba(244,117,33,0.8)] transition-[transform,opacity,box-shadow] duration-300 hover:-translate-y-0.5 hover:shadow-[0_20px_48px_-8px_rgba(244,117,33,0.95)] animate-cta-glow ${
        ready
          ? "translate-y-0 opacity-100"
          : "pointer-events-none translate-y-3 opacity-0"
      } right-3 bottom-[5.5rem] max-w-[11.5rem] text-left text-xs leading-tight md:right-5 md:bottom-8 md:max-w-none md:px-5 md:py-3.5 md:text-sm`}
    >
      <Download className="size-4 shrink-0 md:size-5" strokeWidth={2.5} aria-hidden />
      <span>
        free guide
        <span className="block font-bold text-ink/65">download →</span>
      </span>
    </a>
  );
}
