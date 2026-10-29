import Image from "next/image";
import Link from "next/link";

import type { Locale, Messages } from "@/messages";
import { cn } from "@/lib/utils";

import { FloatingWindow } from "./FloatingWindow";
import { ProductBox } from "./ProductBox";
import { SectionReveal } from "./SectionReveal";
import { Sticker } from "./Sticker";

type HomeCasesProps = {
  locale: Locale;
  copy: Messages["homeCases"];
  fresh: Messages["testimonials"];
  ads: Messages["services"]["ads"]["adCases"];
  rateNote: string;
};

const adTones = ["peach", "bone", "mint"] as const;

export function HomeCases({
  locale,
  copy,
  fresh,
  ads,
  rateNote,
}: HomeCasesProps) {
  return (
    <SectionReveal className="relative border-b border-ink/10 bg-dot-grid px-4 py-16 sm:px-6 sm:py-24">
      <div className="pointer-events-none absolute top-10 right-6 hidden opacity-40 sm:block sm:top-14 sm:right-10">
        <ProductBox size={72} className="animate-float-soft" />
      </div>

      <div className="relative mx-auto max-w-5xl">
        <div className="mb-10 max-w-2xl text-left sm:mb-14">
          <p className="mb-2 text-xs font-medium tracking-wide text-gold">
            {copy.eyebrow}
          </p>
          <h2 className="text-3xl font-black leading-[1.02] text-ink sm:text-5xl lg:text-6xl">
            {copy.title}{" "}
            <span className="text-gold">{copy.titleAccent}</span>
          </h2>
          <p className="mt-4 max-w-lg text-sm leading-relaxed text-ink/60 sm:text-base">
            {copy.lede}
          </p>
          <p className="mt-3 max-w-lg text-xs leading-relaxed text-ink/40">
            {rateNote}
          </p>
        </div>

        <div className="flex flex-col gap-12 sm:gap-16 lg:gap-20">
          <FreshCase fresh={fresh} index="01" />
          {ads.map((item, i) => (
            <AdCase
              key={item.id}
              item={item}
              locale={locale}
              open={copy.open}
              swipe={copy.swipe}
              index={String(i + 2).padStart(2, "0")}
              flipped={i % 2 === 0}
              tone={adTones[i % adTones.length]}
            />
          ))}
        </div>
      </div>
    </SectionReveal>
  );
}

function FreshCase({
  fresh,
  index,
}: {
  fresh: Messages["testimonials"];
  index: string;
}) {
  return (
    <article className="grid min-w-0 items-center gap-6 lg:grid-cols-2 lg:gap-12">
      <div className="min-w-0 text-left">
        <p className="font-mono text-[11px] font-bold text-gold">{index}</p>
        <h3 className="mt-3 max-w-md text-2xl font-black leading-[1.02] text-ink sm:text-4xl">
          {fresh.title} <span className="text-gold">{fresh.titleAccent}</span>
        </h3>
        <p className="mt-4 text-sm font-black text-ink">{fresh.name}</p>
        <p className="mt-1 font-mono text-[11px] text-ink/45">{fresh.meta}</p>
        <p className="mt-3 max-w-md text-sm leading-relaxed text-ink/70 sm:text-base">
          {fresh.summary}
        </p>

        <div className="mt-5 grid gap-3 sm:grid-cols-[minmax(0,1fr)_auto_minmax(0,1fr)] sm:items-stretch">
          <div className="rounded-lg border border-ink/10 bg-white p-4">
            <p className="font-mono text-[10px] text-ink/40">{fresh.beforeLabel}</p>
            <p className="mt-1 text-sm font-black leading-snug text-ink">
              {fresh.before}
            </p>
          </div>
          <div
            className="hidden items-center font-black text-gold sm:flex"
            aria-hidden
          >
            →
          </div>
          <div className="rounded-lg border border-gold bg-white p-4">
            <p className="font-mono text-[10px] text-gold">{fresh.afterLabel}</p>
            <p className="mt-1 text-sm font-black leading-snug text-ink">
              {fresh.after}
            </p>
          </div>
        </div>

        <ul className="mt-5 space-y-3">
          {fresh.points.map((point) => (
            <li key={point.label} className="border-l-2 border-gold pl-3">
              <p className="text-xs font-black text-ink">{point.label}</p>
              <p className="mt-0.5 text-sm leading-relaxed text-ink/60">
                {point.text}
              </p>
            </li>
          ))}
        </ul>

        <a
          href={fresh.siteUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-5 inline-block text-sm font-black text-ink underline decoration-gold decoration-2 underline-offset-4"
        >
          {fresh.siteLabel}
        </a>
      </div>

      <div className="relative min-w-0 pt-4">
        <Sticker rotate={7} className="absolute top-0 right-3 z-10 sm:right-5">
          {fresh.sticker}
        </Sticker>
        <ProofWindow
          label={fresh.windowLabel}
          tone="bone"
          src="/cases/fresh-cleaning-place.png"
          alt={fresh.imageAlt}
          width={1200}
          height={760}
        />
      </div>
    </article>
  );
}

function AdCase({
  item,
  locale,
  open,
  swipe,
  index,
  flipped,
  tone,
}: {
  item: Messages["services"]["ads"]["adCases"][number];
  locale: Locale;
  open: string;
  swipe: string;
  index: string;
  flipped: boolean;
  tone: "bone" | "peach" | "mint";
}) {
  return (
    <article className="grid min-w-0 items-center gap-6 border-t border-ink/10 pt-10 sm:pt-12 lg:grid-cols-2 lg:gap-12 lg:pt-16">
      <div className={cn("min-w-0 text-left", flipped && "lg:order-2")}>
        <p className="font-mono text-[11px] font-bold text-gold">{index}</p>
        <div className="mt-3 flex flex-wrap gap-1.5">
          {item.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-ink/10 bg-white px-2.5 py-1 text-[10px] font-bold text-ink/55"
            >
              {tag}
            </span>
          ))}
        </div>
        <p className="mt-4 text-4xl font-black leading-none text-gold sm:text-6xl">
          {item.value}
        </p>
        <h3 className="mt-3 max-w-md text-2xl font-black leading-[1.05] text-ink sm:text-3xl">
          {item.title}
        </h3>
        <p className="mt-2 max-w-md text-sm leading-relaxed text-ink/60 sm:text-base">
          {item.detail}
        </p>
        <ul className="mt-5 divide-y divide-ink/10 border-y border-ink/10">
          {item.rows.map((row) => (
            <li
              key={row.value}
              className="flex flex-col gap-0.5 py-3 sm:grid sm:grid-cols-[7.5rem_minmax(0,1fr)] sm:items-baseline sm:gap-3"
            >
              <span className="text-sm font-black text-ink">{row.value}</span>
              <span className="text-sm leading-snug text-ink/60">{row.text}</span>
            </li>
          ))}
        </ul>
        <div className="mt-4 rounded-lg border border-gold/30 bg-[#fff6ee] px-4 py-3">
          <p className="font-mono text-[10px] text-gold">{item.plainLabel}</p>
          <p className="mt-1 text-sm leading-relaxed text-ink">{item.plain}</p>
        </div>
        <p className="mt-3 text-[11px] leading-relaxed text-ink/40">{item.source}</p>
        <Link
          href={`/${locale}/ads#${item.id}`}
          className="mt-4 inline-block text-sm font-black text-ink underline decoration-gold decoration-2 underline-offset-4"
        >
          {open}
        </Link>
      </div>

      <div className={cn("min-w-0", flipped && "lg:order-1")}>
        <ProofWindow
          label={item.windowLabel}
          tone={tone}
          src={item.image}
          alt={item.imageAlt}
          width={item.imageWidth}
          height={item.imageHeight}
          pan
        />
        <p className="mt-2 font-mono text-[10px] text-ink/40 sm:hidden">{swipe}</p>
      </div>
    </article>
  );
}

function ProofWindow({
  label,
  tone,
  src,
  alt,
  width,
  height,
  pan = false,
}: {
  label: string;
  tone: "bone" | "peach" | "mint";
  src: string;
  alt: string;
  width: number;
  height: number;
  pan?: boolean;
}) {
  return (
    <FloatingWindow label={label} tone={tone}>
      <div className={pan ? "overflow-x-auto" : undefined}>
        <Image
          src={src}
          alt={alt}
          width={width}
          height={height}
          sizes="(min-width: 1024px) 28rem, 100vw"
          className={
            pan ? "h-auto w-full min-w-[34rem] sm:min-w-0" : "h-auto w-full"
          }
        />
      </div>
    </FloatingWindow>
  );
}
