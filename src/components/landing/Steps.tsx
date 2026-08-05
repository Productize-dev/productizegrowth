import type { Messages } from "@/messages";

import { FloatingWindow } from "./FloatingWindow";
import { ProductBox } from "./ProductBox";
import { SectionReveal } from "./SectionReveal";
import { Sticker } from "./Sticker";
import { TrackStage } from "./TrackStage";

type StepsProps = {
  messages: Messages["steps"];
};

const tones = ["peach", "mint", "bone"] as const;
const floatCycle = ["a", "b", "c"] as const;

export function Steps({ messages }: StepsProps) {
  return (
    <SectionReveal className="relative overflow-hidden border-b border-ink/10 bg-dot-grid px-4 py-16 sm:px-6 sm:py-24">
      <div className="pointer-events-none absolute top-10 right-6 opacity-25 sm:top-14 sm:right-10 sm:opacity-40">
        <ProductBox size={72} className="animate-float-soft" />
      </div>

      <div className="relative mx-auto max-w-5xl">
        <div className="mb-6 max-w-2xl text-left sm:mb-8">
          <p className="mb-2 text-xs font-medium tracking-wide text-gold">
            {messages.eyebrow}
          </p>
          <h2 className="text-3xl font-black leading-[1.05] text-ink sm:text-5xl lg:text-6xl">
            {messages.title}{" "}
            <span className="text-gold">{messages.titleAccent}</span>
          </h2>
          <p className="mt-4 max-w-lg text-sm leading-relaxed text-ink/55 sm:text-base">
            {messages.intro}
          </p>
        </div>

        {/* connector: three hills between title and cards */}
        <TrackStage preset="steps" role="connector" />

        {/* flow labels — desktop */}
        <div className="mb-6 hidden items-center gap-2 lg:flex" aria-hidden>
          <span className="text-[11px] font-bold text-gold">01</span>
          <div className="h-px flex-1 bg-gradient-to-r from-gold via-gold/40 to-gold/20" />
          <span className="text-[11px] font-bold text-gold">02</span>
          <div className="h-px flex-1 bg-gradient-to-r from-gold/40 via-gold to-gold/20" />
          <span className="text-[11px] font-bold text-gold">03</span>
          <div className="h-px w-8 bg-gold/30" />
          <Sticker rotate={-6} className="shrink-0">
            {messages.connector}
          </Sticker>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3">
          {messages.items.map((item, i) => (
            <FloatingWindow
              key={item.number}
              label={item.window}
              tone={tones[i % 3]}
              float={floatCycle[i % 3]}
              interactive
              className="h-full"
            >
              <div className="flex h-full flex-col p-5 text-left sm:p-6">
                <div className="mb-3 flex items-center justify-between gap-2">
                  <span className="font-mono text-xs font-bold text-gold">
                    {item.number}
                  </span>
                  <span className="rounded-full border border-ink/10 bg-ink/[0.04] px-2.5 py-0.5 text-[10px] font-bold text-ink/50">
                    {item.detail}
                  </span>
                </div>

                <h3 className="text-xl font-black text-ink sm:text-2xl">
                  {item.title}
                </h3>

                <p className="mt-2 text-sm font-bold leading-snug text-gold">
                  {item.outcome}
                </p>

                <p className="mt-3 flex-1 text-sm leading-relaxed text-ink/55">
                  {item.description}
                </p>
              </div>
            </FloatingWindow>
          ))}
        </div>

        <p className="mt-8 text-center text-sm font-bold text-ink/45 sm:mt-10 sm:text-base">
          {messages.footer}
        </p>
      </div>
    </SectionReveal>
  );
}
