"use client";

import { useState } from "react";
import { Minimize2, Maximize2, X } from "lucide-react";

import { Button } from "@/components/ui/button";
import type { Messages } from "@/messages";

type FloatingPipProps = {
  messages: Messages["pip"];
};

export function FloatingPip({ messages }: FloatingPipProps) {
  const [minimized, setMinimized] = useState(true);
  const [closed, setClosed] = useState(false);

  if (closed) return null;

  return (
    <div className="fixed right-4 bottom-4 z-50 hidden w-[160px] min-[1400px]:block">
      {minimized ? (
        <Button
          type="button"
          onClick={() => setMinimized(false)}
          className="h-9 w-full rounded-full border-0 bg-ink text-xs font-bold text-bone shadow-[0_8px_24px_-8px_rgba(10,10,10,0.5)] transition-colors duration-150 hover:bg-gold hover:text-ink sm:h-10 sm:text-sm"
        >
          <Maximize2 className="size-3.5" />
          {messages.expand}
        </Button>
      ) : (
        <div className="overflow-hidden rounded-xl border border-ink/15 bg-bone shadow-[0_16px_40px_-12px_rgba(10,10,10,0.5)]">
          <div className="flex items-center justify-between gap-2 border-b border-ink/10 bg-white px-2 py-1.5">
            <div className="flex min-w-0 items-center gap-1">
              <span className="size-2 shrink-0 rounded-full bg-[#ff5f57]" aria-hidden />
              <span className="size-2 shrink-0 rounded-full bg-[#febc2e]" aria-hidden />
              <span className="size-2 shrink-0 rounded-full bg-[#28c840]" aria-hidden />
              <p className="ml-1.5 truncate text-[10px] font-medium text-ink/70">
                {messages.label}
              </p>
            </div>
            <div className="flex shrink-0 items-center gap-0.5">
              <button
                type="button"
                onClick={() => setMinimized(true)}
                className="p-1 text-ink/50 transition-colors duration-150 hover:text-ink"
                aria-label={messages.minimize}
              >
                <Minimize2 className="size-3.5" />
              </button>
              <button
                type="button"
                onClick={() => setClosed(true)}
                className="p-1 text-ink/50 transition-colors duration-150 hover:text-ink"
                aria-label="close"
              >
                <X className="size-3.5" />
              </button>
            </div>
          </div>
          <div className="space-y-2 p-3">
            {["auto", "web", "ads"].map((item, i) => (
              <div
                key={item}
                className="rounded-md border border-ink/10 bg-white px-2.5 py-2"
              >
                <p className="font-mono text-[9px] text-gold">0{i + 1}</p>
                <p className="text-[11px] font-bold text-ink">{item}</p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
