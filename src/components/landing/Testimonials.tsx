import Image from "next/image";
import Link from "next/link";

import type { Locale, Messages } from "@/messages";

import { FloatingWindow } from "./FloatingWindow";
import { SectionReveal } from "./SectionReveal";
import { Sticker } from "./Sticker";

type TestimonialsProps = {
  messages: Messages["testimonials"];
  locale: Locale;
  hideMore?: boolean;
  id?: string;
};

export function Testimonials({
  messages,
  locale,
  hideMore = false,
  id,
}: TestimonialsProps) {
  return (
    <SectionReveal
      id={id}
      className="scroll-mt-32 border-b border-ink/10 bg-dot-grid px-4 py-16 sm:px-6 sm:py-24"
    >
      <div className="mx-auto grid max-w-5xl items-center gap-10 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:gap-14">
        <div className="text-left">
          <p className="mb-2 text-xs font-medium tracking-wide text-gold">
            {messages.eyebrow}
          </p>
          <h2 className="max-w-xl text-3xl font-black leading-[1.02] text-ink sm:text-5xl">
            {messages.title}{" "}
            <span className="text-gold">{messages.titleAccent}</span>
          </h2>
          <p className="mt-5 text-sm font-black text-ink">{messages.name}</p>
          <p className="mt-1 font-mono text-[11px] text-ink/45">{messages.meta}</p>
          <p className="mt-4 max-w-md text-base leading-relaxed text-ink/70">
            {messages.summary}
          </p>

          <div className="mt-6 grid gap-3 sm:grid-cols-2">
            <div className="rounded-lg border border-ink/10 bg-white p-4">
              <p className="font-mono text-[10px] text-ink/40">
                {messages.beforeLabel}
              </p>
              <p className="mt-1 text-sm font-black leading-snug text-ink">
                {messages.before}
              </p>
            </div>
            <div className="rounded-lg border border-gold bg-white p-4">
              <p className="font-mono text-[10px] text-gold">
                {messages.afterLabel}
              </p>
              <p className="mt-1 text-sm font-black leading-snug text-ink">
                {messages.after}
              </p>
            </div>
          </div>

          <ul className="mt-5 space-y-3">
            {messages.points.map((point) => (
              <li key={point.label} className="border-l-2 border-gold pl-3">
                <p className="text-xs font-black text-ink">{point.label}</p>
                <p className="mt-0.5 text-sm leading-relaxed text-ink/60">
                  {point.text}
                </p>
              </li>
            ))}
          </ul>

          <div className="mt-6 flex flex-col items-start gap-3 sm:flex-row sm:flex-wrap sm:items-center sm:gap-x-5 sm:gap-y-2">
            <a
              href={messages.siteUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-black text-ink underline decoration-gold decoration-2 underline-offset-4"
            >
              {messages.siteLabel}
            </a>
            {hideMore ? null : (
              <Link
                href={`/${locale}/ads#caso`}
                className="text-sm font-black text-ink underline decoration-gold decoration-2 underline-offset-4"
              >
                {messages.moreLabel}
              </Link>
            )}
          </div>
        </div>

        <div className="relative pt-4">
          <Sticker
            rotate={7}
            className="absolute top-0 right-3 z-10 sm:right-6"
          >
            {messages.sticker}
          </Sticker>
          <FloatingWindow
            label={messages.windowLabel}
            tone="bone"
            className="shadow-[0_20px_50px_-24px_rgba(244,117,33,0.45)]"
          >
            <div className="overflow-hidden bg-white">
              <Image
                src="/cases/fresh-cleaning-place.png"
                alt={messages.imageAlt}
                width={1200}
                height={760}
                className="h-auto w-full"
              />
            </div>
          </FloatingWindow>
        </div>
      </div>
    </SectionReveal>
  );
}
