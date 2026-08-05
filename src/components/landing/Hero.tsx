import Image from "next/image";

import type { Messages } from "@/messages";

import { CalCtaButton } from "./CalCtaButton";
import { FloatingWindow } from "./FloatingWindow";
import { SectionReveal } from "./SectionReveal";
import { Sticker } from "./Sticker";
import { TrackStage } from "./TrackStage";

type HeroProps = {
  messages: Messages["hero"];
  stickers: Messages["stickers"];
  windows: Messages["windows"];
};

function MiniDemo({ label, hint }: { label: string; hint: string }) {
  return (
    <div className="flex aspect-video flex-col items-center justify-center gap-2 p-4">
      <div className="h-1.5 w-10 rounded-full bg-gold/70" />
      <p className="text-center font-mono text-[10px] text-ink/40">{label}</p>
      <p className="text-center text-[11px] font-medium text-ink/55">{hint}</p>
    </div>
  );
}

function SystemShowcase({
  label,
  items,
}: {
  label: string;
  items: Messages["hero"]["showcaseItems"];
}) {
  return (
    <FloatingWindow
      label={label}
      tone="bone"
      className="relative z-10 w-full shadow-[0_20px_50px_-20px_rgba(244,117,33,0.35)]"
    >
      <div className="space-y-3 bg-bone p-4 sm:p-5">
        {items.map((item, i) => (
          <div
            key={item.title}
            className="rounded-lg border border-ink/10 bg-white p-3 text-left"
          >
            <div className="mb-2 flex items-center justify-between gap-2">
              <span className="font-mono text-[10px] text-gold">
                0{i + 1}
              </span>
              <span className="size-1.5 rounded-full bg-[#28c840]" aria-hidden />
            </div>
            <p className="text-sm font-black text-ink">{item.title}</p>
            <p className="mt-0.5 text-xs text-ink/55">{item.detail}</p>
            <div className="mt-2 h-1.5 overflow-hidden rounded-full bg-ink/5">
              <div
                className="h-full rounded-full bg-gold"
                style={{ width: `${72 - i * 12}%` }}
              />
            </div>
          </div>
        ))}
      </div>
    </FloatingWindow>
  );
}

export function Hero({ messages, stickers, windows }: HeroProps) {
  return (
    <SectionReveal
      immediate
      className="relative overflow-hidden border-b border-ink/10 bg-dot-grid px-4 pb-16 pt-24 sm:px-6 sm:pb-20 sm:pt-28 lg:pb-24 lg:pt-32"
    >
      <TrackStage preset="hero" role="ground" />

      <div className="pointer-events-none absolute inset-0 hidden lg:block">
        <FloatingWindow
          label={windows.auto}
          tone="peach"
          float="a"
          className="absolute top-28 left-[4%] w-[160px] -rotate-3"
        >
          <MiniDemo label="01" hint="auto" />
        </FloatingWindow>
        <FloatingWindow
          label={windows.web}
          tone="mint"
          float="b"
          className="absolute top-36 right-[5%] w-[150px] rotate-2"
        >
          <MiniDemo label="02" hint="web" />
        </FloatingWindow>
        <FloatingWindow
          label={windows.ads}
          tone="bone"
          float="c"
          className="absolute bottom-28 left-[8%] w-[140px] rotate-1"
        >
          <MiniDemo label="03" hint="ads" />
        </FloatingWindow>
        <div className="absolute top-24 right-[22%]">
          <Sticker rotate={8}>{stickers.upOnly}</Sticker>
        </div>
        <div className="absolute bottom-36 right-[18%]">
          <Sticker rotate={-10} variant="outline">
            {stickers.shipIt}
          </Sticker>
        </div>
      </div>

      <div className="relative z-10 mx-auto flex max-w-5xl flex-col items-center gap-10 lg:flex-row lg:items-end lg:justify-between lg:gap-12">
        <div className="min-w-0 w-full flex-1 text-left lg:max-w-xl">
          <div className="mb-5 sm:mb-6">
            <Image
              src="/brand-logo.png"
              alt="productize.growth"
              width={360}
              height={180}
              priority
              unoptimized
              className="h-auto w-48 bg-transparent sm:w-56"
            />
          </div>

          {messages.badge ? (
            <p className="mb-3 text-xs font-medium tracking-wide text-gold">
              {messages.badge}
            </p>
          ) : null}

          <h1 className="max-w-[14ch] text-[2.35rem] font-black leading-[0.98] tracking-tight text-ink sm:max-w-none sm:text-5xl md:text-6xl">
            {messages.headlineBefore}
            {messages.headlineAccent ? (
              <>
                <br />
                <span className="text-gold underline decoration-gold/35 decoration-[0.12em] underline-offset-[0.12em]">
                  {messages.headlineAccent}
                </span>
              </>
            ) : null}
            {messages.headlineAfter}
          </h1>

          <p className="mt-5 max-w-sm text-sm leading-relaxed text-ink/60 sm:text-[0.95rem]">
            {messages.subheadline}
          </p>

          <div className="mt-4 flex flex-wrap gap-2 lg:hidden">
            <Sticker rotate={-4}>{stickers.upOnly}</Sticker>
            <Sticker rotate={5} variant="outline">
              {stickers.productized}
            </Sticker>
          </div>

          <div className="mt-7 flex w-full flex-col items-stretch gap-2 sm:max-w-xs sm:items-start">
            <CalCtaButton variant="ink">{messages.cta}</CalCtaButton>
            <p className="text-xs text-ink/40">{messages.trust}</p>
          </div>
        </div>

        <div className="relative w-full max-w-[280px] shrink-0 sm:max-w-[320px]">
          <div className="absolute -top-3 -right-3 z-20 lg:hidden">
            <Sticker rotate={12} variant="gold">
              {stickers.shipIt}
            </Sticker>
          </div>
          <SystemShowcase
            label={messages.showcaseLabel}
            items={messages.showcaseItems}
          />
        </div>
      </div>
    </SectionReveal>
  );
}
