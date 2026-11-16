import { Check, X } from "lucide-react";

import { CalCtaButton } from "@/components/landing/CalCtaButton";
import { FloatingWindow } from "@/components/landing/FloatingWindow";
import { Marquee } from "@/components/landing/Marquee";
import { SectionReveal } from "@/components/landing/SectionReveal";
import { TrackStage } from "@/components/landing/TrackStage";

import { DemoChatMock } from "./DemoChatMock";
import { DemoHeroCollage } from "./DemoHeroCollage";
import { DemoResults } from "./DemoResults";
import { DemoTeam } from "./DemoTeam";

const marqueeItems = [
  "fully booked · wisconsin",
  "1,478 leads · $0.73 each",
  "$168k sales in one month",
  "3,079 tiktok orders",
  "4.8x month-over-month",
  "no meetings · fixed price",
];

const pillars = [
  {
    n: "01",
    title: "reply in seconds",
    body: "every lead gets a reply — text or call, 24/7. it books them on your calendar.",
  },
  {
    n: "02",
    title: "show up online",
    body: "a clean website and google profile, so people find you.",
  },
  {
    n: "03",
    title: "ads that feed it",
    body: "ads that drop leads straight into the system. no dead ends.",
  },
] as const;

const agenda = [
  "where leads are dying in your business right now",
  "what a 24/7 reply + booking system looks like for you",
  "how web + google + ads feed the same machine",
  "a concrete plan you leave with — either way",
] as const;

const rejects = [
  "a recorded course or community",
  "slides and 'best practices'",
  "tools for you to figure out alone",
] as const;

const delivers = [
  "we build and install it with you",
  "it runs inside your operation",
  "fixed price. you don't manage it",
] as const;

export function DemoVsl() {
  return (
    <>
      <DemoHeroCollage />

      <Marquee items={marqueeItems} />

      <DemoChatMock />

      {/* three things */}
      <SectionReveal className="relative overflow-hidden border-b border-ink/10 bg-dot-grid px-4 py-14 sm:px-6 sm:py-20">
        <TrackStage preset="steps" role="connector" className="!relative mb-6 opacity-60" />
        <div className="relative mx-auto max-w-3xl">
          <h2 className="text-2xl font-black leading-[1.05] text-ink sm:text-4xl">
            three things.
          </h2>
          <p className="mt-2 max-w-lg text-sm text-ink/55 sm:text-base">
            we build it. it runs. you don&apos;t manage anything.
          </p>

          <div className="mt-8 grid gap-4 sm:mt-10 sm:grid-cols-3 sm:gap-5">
            {pillars.map((item, i) => (
              <FloatingWindow
                key={item.n}
                label={`${item.n}.txt`}
                interactive
                float={i === 0 ? "a" : i === 1 ? "b" : "c"}
                className={`h-full reveal-stagger-${i + 1}`}
              >
                <div className="flex h-full flex-col p-5 text-left">
                  <p className="font-mono text-[10px] text-gold">{item.n}</p>
                  <h3 className="mt-2 text-lg font-black text-ink">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink/55">
                    {item.body}
                  </p>
                </div>
              </FloatingWindow>
            ))}
          </div>
        </div>
      </SectionReveal>

      <DemoResults />

      <DemoTeam />

      {/* call agenda — clinicpro pattern */}
      <SectionReveal className="border-b border-ink/10 bg-bone px-4 py-14 sm:px-6 sm:py-20">
        <div className="mx-auto max-w-3xl">
          <p className="mb-2 text-xs font-bold tracking-wide text-gold">
            on the call
          </p>
          <h2 className="max-w-xl text-2xl font-black leading-[1.05] text-ink sm:text-4xl">
            here&apos;s what you&apos;ll walk away with
          </h2>

          <ul className="mt-8 space-y-3 sm:mt-10">
            {agenda.map((item, i) => (
              <li
                key={item}
                className={`flex gap-3 rounded-xl border border-ink/10 bg-white/70 px-4 py-3.5 reveal-stagger-${Math.min(i + 1, 4)}`}
              >
                <span
                  className="mt-0.5 flex size-6 shrink-0 items-center justify-center rounded-full bg-gold text-[11px] font-black text-ink"
                  aria-hidden
                >
                  {i + 1}
                </span>
                <span className="text-sm font-bold leading-snug text-ink sm:text-base">
                  {item}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </SectionReveal>

      {/* reject / deliver */}
      <SectionReveal as="div" className="relative overflow-hidden border-b border-ink/10 bg-dot-grid px-4 py-14 sm:px-6 sm:py-20">
        <TrackStage preset="cta" role="backdrop" />
        <div className="relative mx-auto max-w-3xl">
          <h2 className="max-w-xl text-2xl font-black leading-[1.05] text-ink sm:text-4xl">
            not a course.{" "}
            <span className="text-gold">done-for-you work.</span>
          </h2>
          <div className="mt-8 grid gap-4 sm:mt-10 sm:grid-cols-2 sm:gap-5">
            <ContrastCard label="this is not" items={rejects} win={false} />
            <ContrastCard label="this is" items={delivers} win />
          </div>
        </div>
      </SectionReveal>

      {/* close → booking handoff */}
      <SectionReveal className="relative overflow-hidden border-b border-ink bg-ink px-4 py-14 text-bone sm:px-6 sm:py-16">
        <TrackStage preset="banner" role="divider" />
        <div className="relative mx-auto max-w-3xl text-left">
          <p className="mb-3 text-xs font-bold tracking-wide text-gold">
            step 2 of 2 — book the call
          </p>
          <h2 className="max-w-2xl text-2xl font-black leading-[1.05] sm:text-4xl">
            want this for your business?
          </h2>
          <p className="mt-3 max-w-lg text-base leading-relaxed text-bone/65">
            book a 30-minute call below. you&apos;ll leave with a plan either
            way. that&apos;s it. talk soon.
          </p>
          <div className="mt-6 flex flex-col items-center gap-3 text-center">
            <CalCtaButton variant="gold" size="hero" className="mx-auto">
              book the call →
            </CalCtaButton>
            <p className="text-xs text-bone/40">
              30 min · no theater · fixed price
            </p>
          </div>
        </div>
      </SectionReveal>
    </>
  );
}

function ContrastCard({
  label,
  items,
  win,
}: {
  label: string;
  items: readonly string[];
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
