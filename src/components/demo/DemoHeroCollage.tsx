import { CalCtaButton } from "@/components/landing/CalCtaButton";
import { FloatingWindow } from "@/components/landing/FloatingWindow";
import { SectionReveal } from "@/components/landing/SectionReveal";
import { Sticker } from "@/components/landing/Sticker";
import { TrackStage } from "@/components/landing/TrackStage";

import { DemoYoutubeFacade } from "./DemoYoutubeFacade";

const YOUTUBE_ID = "TJYiXG-LX5o";

const heroStats = [
  { value: "78%", label: "buy from first reply" },
  { value: "21x", label: "more likely in 5 min" },
  { value: "24/7", label: "text or call covered" },
] as const;

export function DemoHeroCollage() {
  return (
    <SectionReveal
      id="demo-hero"
      immediate
      className="relative overflow-x-clip border-b border-ink/10 bg-dot-grid px-4 pt-24 pb-12 sm:px-6 sm:pt-28 sm:pb-16"
    >
      <TrackStage preset="hero" role="ground" />

      <div className="relative mx-auto max-w-6xl">
        {/* copy — centered column */}
        <div className="mx-auto max-w-3xl text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-ink/10 bg-white/80 px-3 py-1 text-[11px] font-bold text-ink/60 backdrop-blur-sm">
            <span
              className="size-1.5 animate-pulse rounded-full bg-gold"
              aria-hidden
            />
            step 1 of 2 — watch this
          </div>

          <h1 className="text-3xl font-black leading-[1.02] text-ink sm:text-5xl lg:text-[3.5rem]">
            someone texts at 9 pm.{" "}
            <span className="text-gold">who&apos;s answering?</span>
          </h1>

          <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-ink/65 sm:text-lg">
            probably nobody. and they just booked with someone else.
          </p>

          <p className="mx-auto mt-3 max-w-xl text-sm leading-relaxed text-ink/50 sm:text-base">
            you&apos;re busy working. so leads just… die. and you never even
            know.
          </p>
        </div>

        {/* video + decorations — shared center axis */}
        <div className="relative mx-auto mt-8 w-full max-w-3xl sm:mt-10 lg:mt-12">
          {/* left decorations — peek around video */}
          <div
            className="pointer-events-none absolute top-0 bottom-0 -left-2 z-0 hidden w-44 lg:block xl:-left-6 xl:w-48"
            aria-hidden
          >
            <FloatingWindow
              label="lead · 9:02 pm"
              tone="peach"
              float="a"
              className="absolute top-4 -left-16 w-[11rem] -rotate-3 xl:-left-24 xl:w-[12rem]"
            >
              <div className="space-y-2 p-3">
                <p className="text-[10px] font-bold text-ink/40">new text</p>
                <p className="rounded-lg rounded-tl-sm bg-white px-2.5 py-2 text-xs leading-snug text-ink shadow-sm">
                  hey, do you have openings this week?
                </p>
                <p className="font-mono text-[10px] text-ink/35">waiting…</p>
              </div>
            </FloatingWindow>

            <div className="absolute top-[38%] -left-10 xl:-left-14">
              <Sticker rotate={-12} variant="outline">
                dead lead
              </Sticker>
            </div>

            <FloatingWindow
              label="missed.call"
              tone="ink"
              float="c"
              className="absolute bottom-10 -left-14 w-[10rem] rotate-2 border-bone/20 shadow-none xl:-left-20"
            >
              <div className="p-3 text-bone">
                <p className="text-[10px] text-bone/45">after hours</p>
                <p className="mt-1 text-sm font-black text-gold">0 replies</p>
                <p className="mt-1 text-[11px] text-bone/55">lead gone cold</p>
              </div>
            </FloatingWindow>
          </div>

          {/* right decorations */}
          <div
            className="pointer-events-none absolute top-0 bottom-0 -right-2 z-0 hidden w-44 lg:block xl:-right-6 xl:w-48"
            aria-hidden
          >
            <div className="absolute top-2 -right-8 xl:-right-12">
              <div className="animate-float-soft">
                <Sticker rotate={8}>watch first</Sticker>
              </div>
            </div>

            <FloatingWindow
              label="system · live"
              tone="mint"
              float="b"
              className="absolute top-16 -right-16 w-[11rem] rotate-2 xl:-right-24 xl:w-[12rem]"
            >
              <div className="space-y-2 p-3">
                <div className="flex items-center gap-1.5">
                  <span
                    className="size-1.5 rounded-full bg-[#28c840]"
                    aria-hidden
                  />
                  <p className="text-[10px] font-bold text-ink/45">auto reply</p>
                </div>
                <p className="rounded-lg rounded-tr-sm bg-gold px-2.5 py-2 text-xs leading-snug font-medium text-ink">
                  yes — tuesday 10 or thursday 2?
                </p>
                <p className="text-[10px] font-bold text-[#28c840]">
                  sent in 4 sec
                </p>
              </div>
            </FloatingWindow>

            <div className="absolute top-[46%] -right-8 xl:-right-10">
              <Sticker rotate={-6}>21x</Sticker>
            </div>

            <FloatingWindow
              label="calendar.app"
              tone="bone"
              float="a"
              className="absolute -right-14 bottom-8 w-[10.5rem] -rotate-2 xl:-right-20"
            >
              <div className="p-3">
                <p className="text-[10px] font-bold text-ink/40">booked</p>
                <p className="mt-1 text-sm font-black text-ink">tue · 10:00</p>
                <div className="mt-2 flex items-center gap-1.5 rounded-md bg-gold/20 px-2 py-1">
                  <span className="size-1.5 rounded-full bg-gold" aria-hidden />
                  <span className="text-[10px] font-bold text-ink">
                    on your calendar
                  </span>
                </div>
              </div>
            </FloatingWindow>
          </div>

          {/* video — centered, above decorations */}
          <FloatingWindow
            label="vsl.mov — productize growth"
            className="relative z-10 w-full overflow-hidden shadow-[0_28px_70px_-24px_rgba(10,10,10,0.5)]"
          >
            <DemoYoutubeFacade
              youtubeId={YOUTUBE_ID}
              title="How to Stop Losing Customers You Never Knew You Had"
            />
          </FloatingWindow>

          {/* mobile chips */}
          <div className="relative z-10 mt-4 grid grid-cols-2 gap-2 lg:hidden">
            <FloatingWindow label="9:02 pm" tone="peach" className="w-full">
              <div className="p-3">
                <p className="text-[10px] font-bold text-ink/40">new text</p>
                <p className="mt-1 text-xs leading-snug text-ink">
                  “hey, openings this week?”
                </p>
              </div>
            </FloatingWindow>
            <FloatingWindow label="system" tone="mint" className="w-full">
              <div className="p-3">
                <p className="text-[10px] font-bold text-ink/40">auto · 4s</p>
                <p className="mt-1 text-xs leading-snug font-bold text-ink">
                  booked tue 10:00
                </p>
              </div>
            </FloatingWindow>
          </div>
        </div>

        {/* stats + cta — same width as video, centered */}
        <div className="relative z-10 mx-auto mt-6 w-full max-w-3xl sm:mt-8">
          <div className="grid grid-cols-3 gap-2 sm:gap-3">
            {heroStats.map((stat, i) => (
              <div
                key={stat.value}
                className={`rounded-xl border border-ink/10 bg-white/90 px-2 py-3 text-center shadow-[0_8px_24px_-16px_rgba(10,10,10,0.35)] sm:px-3 sm:py-4 reveal-stagger-${i + 1}`}
              >
                <p className="text-lg font-black text-gold sm:text-2xl">
                  {stat.value}
                </p>
                <p className="mt-0.5 text-[10px] leading-snug font-medium text-ink/50 sm:text-xs">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-6 flex flex-col items-center gap-3 text-center sm:mt-7">
            <p className="text-sm text-ink/55">
              i&apos;m manuel. i built productize growth to fix exactly that.
            </p>
            <CalCtaButton variant="gold" size="hero" className="mx-auto">
              book the call →
            </CalCtaButton>
            <p className="text-xs font-medium text-ink/40">
              30 min · you leave with a plan either way · no theater
            </p>
          </div>
        </div>
      </div>
    </SectionReveal>
  );
}
