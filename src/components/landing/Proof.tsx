import type { Messages } from "@/messages";

import { FloatingWindow } from "./FloatingWindow";
import { SectionReveal } from "./SectionReveal";
import { TrackStage } from "./TrackStage";

type ProofProps = {
  messages: Messages["proof"];
};

const floatCycle = ["a", "b", "c"] as const;

export function Proof({ messages }: ProofProps) {
  return (
    <SectionReveal className="relative overflow-hidden border-b border-ink bg-dot-grid-ink px-4 py-16 text-bone sm:px-6 sm:py-24">
      {/* header rule — valley through title band only */}
      <TrackStage preset="proof" role="headerRule" />

      <div className="relative mx-auto max-w-5xl">
        <div className="relative mb-10 max-w-2xl pt-6 text-left sm:mb-12 sm:pt-8">
          <p className="mb-2 text-xs font-medium tracking-wide text-gold">
            {messages.eyebrow}
          </p>
          <h2 className="text-3xl font-black leading-[1.05] sm:text-5xl lg:text-6xl">
            {messages.title}{" "}
            <span className="text-gold">{messages.titleAccent}</span>
          </h2>
        </div>

        <div className="mb-12 grid grid-cols-1 gap-4 sm:grid-cols-3 sm:gap-5 lg:mb-14">
          {messages.stats.map((stat, i) => (
            <FloatingWindow
              key={stat.value}
              label="stat.json"
              tone="ink"
              float={floatCycle[i % 3]}
              interactive
              className="border-bone/20 shadow-none"
            >
              <div className="p-5 text-left sm:p-6">
                <p className="text-3xl font-black text-gold sm:text-4xl">
                  {stat.value}
                </p>
                <p className="mt-1 text-sm text-bone/55">{stat.label}</p>
              </div>
            </FloatingWindow>
          ))}
        </div>

        <h3 className="mb-4 text-left text-lg font-black sm:mb-5 sm:text-xl">
          {messages.researchTitle}
        </h3>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3">
          {messages.research.map((row, i) => (
            <FloatingWindow
              key={row.value}
              label="stat.json"
              tone="ink"
              float={floatCycle[(i + 1) % 3]}
              interactive
              className="h-full border-bone/20 shadow-none"
            >
              <div className="flex h-full flex-col p-5 text-left sm:p-6">
                <p className="text-3xl font-black text-gold sm:text-4xl">
                  {row.value}
                </p>
                <p className="mt-1 flex-1 text-sm leading-snug text-bone/70">
                  {row.text}
                </p>
                <p className="mt-3 text-[11px] leading-snug text-bone/40 sm:text-xs">
                  {row.citation}
                </p>
              </div>
            </FloatingWindow>
          ))}
        </div>
      </div>
    </SectionReveal>
  );
}
