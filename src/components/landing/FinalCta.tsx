import { Check, X } from "lucide-react";

import type { Messages } from "@/messages";

import { CalCtaButton } from "./CalCtaButton";
import { SectionReveal } from "./SectionReveal";
import { Sticker } from "./Sticker";
import { TrackStage } from "./TrackStage";

type FinalCtaProps = {
  messages: Messages["finalCta"];
};

export function FinalCta({ messages }: FinalCtaProps) {
  return (
    <SectionReveal as="div">
      {messages.tagline ? (
        <div className="relative overflow-hidden border-b border-ink/10 bg-ink px-4 py-5 sm:px-6 sm:py-6">
          <TrackStage preset="banner" role="divider" />
          <p className="relative mx-auto max-w-5xl text-center text-sm font-bold text-bone/80 sm:text-base">
            {messages.tagline}
          </p>
        </div>
      ) : null}

      <div className="relative overflow-hidden border-b border-ink/10 bg-dot-grid px-4 py-16 sm:px-6 sm:py-24">
        <TrackStage preset="cta" role="backdrop" />

        <div className="pointer-events-none absolute top-10 right-6 hidden lg:right-12 lg:block">
          <div className="animate-float-soft">
            <Sticker rotate={-8}>{messages.sticker}</Sticker>
          </div>
        </div>

        <div className="relative mx-auto max-w-5xl">
          <div className="max-w-2xl text-left">
            <h2 className="text-3xl font-black leading-[1.05] text-ink sm:text-5xl lg:text-6xl">
              {messages.title}{" "}
              <span className="text-gold">{messages.titleAccent}</span>
            </h2>
            <p className="mt-4 max-w-xl text-sm leading-relaxed text-ink/55 sm:text-base">
              {messages.subtitle}
            </p>
          </div>

          <div className="mt-10 grid grid-cols-1 gap-4 sm:mt-12 sm:grid-cols-2 sm:gap-5">
            <ContrastCard
              label={messages.rejectsLabel}
              items={messages.rejects}
              win={false}
            />
            <ContrastCard
              label={messages.deliversLabel}
              items={messages.delivers}
              win
            />
          </div>

          <div className="mt-10 flex w-full flex-col items-stretch gap-2 sm:mt-12 sm:max-w-xs sm:items-start">
            <CalCtaButton variant="gold">{messages.cta}</CalCtaButton>
            {messages.trust ? (
              <p className="text-xs text-ink/40">{messages.trust}</p>
            ) : null}
          </div>
        </div>
      </div>
    </SectionReveal>
  );
}

function ContrastCard({
  label,
  items,
  win,
}: {
  label: string;
  items: string[];
  win: boolean;
}) {
  return (
    <div
      className={`group rounded-2xl border p-5 transition-[transform,box-shadow,border-color] duration-300 ease-out will-change-transform hover:-translate-y-1.5 sm:p-6 ${
        win
          ? "border-gold/40 bg-gold/15 shadow-[0_16px_40px_-24px_rgba(244,117,33,0.5)] hover:border-gold hover:shadow-[0_24px_50px_-20px_rgba(244,117,33,0.45)]"
          : "border-ink/10 bg-bone/80 hover:border-ink/25"
      }`}
    >
      <p
        className={`mb-4 text-[11px] font-bold tracking-wide ${
          win ? "text-gold" : "text-ink/40"
        }`}
      >
        {label}
      </p>
      <ul className="space-y-3">
        {items.map((item) => (
          <li key={item} className="flex gap-2.5">
            <span
              className={`mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full transition-transform duration-300 group-hover:scale-110 ${
                win ? "bg-gold text-ink" : "bg-ink/10 text-ink/35"
              }`}
              aria-hidden
            >
              {win ? (
                <Check className="size-3 stroke-[3]" />
              ) : (
                <X className="size-3 stroke-[3]" />
              )}
            </span>
            <span
              className={`text-sm leading-snug ${
                win
                  ? "font-bold text-ink"
                  : "text-ink/45 line-through decoration-ink/20"
              }`}
            >
              {item}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}
