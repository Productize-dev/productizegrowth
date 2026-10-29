import Image from "next/image";

import { FloatingWindow } from "@/components/landing/FloatingWindow";
import type { Messages } from "@/messages";

type AdCase = Messages["services"]["ads"]["adCases"][number];

export function AdCases({
  cases,
  swipe,
}: {
  cases: AdCase[];
  swipe: string;
}) {
  return (
    <div className="mx-auto flex max-w-5xl flex-col gap-12 px-4 py-10 sm:gap-16 sm:py-14">
      {cases.map((item) => (
        <article
          key={item.id}
          id={item.id}
          className="scroll-mt-[calc(8.5rem+env(safe-area-inset-top))] grid min-w-0 items-start gap-6 sm:scroll-mt-[calc(9.5rem+env(safe-area-inset-top))] lg:grid-cols-2 lg:gap-10"
        >
          <div className="min-w-0 text-left">
            <div className="flex flex-wrap gap-1.5">
              {item.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-ink/10 bg-white px-2.5 py-1 text-[10px] font-bold text-ink/55"
                >
                  {tag}
                </span>
              ))}
            </div>
            <p className="mt-4 text-4xl font-black leading-none text-gold sm:text-5xl">
              {item.value}
            </p>
            <h3 className="mt-2 max-w-md text-xl font-black leading-tight text-ink sm:text-2xl">
              {item.title}
            </h3>
            <p className="mt-2 max-w-md text-sm leading-relaxed text-ink/55">
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
          </div>
          <div className="min-w-0">
            <FloatingWindow label={item.windowLabel} tone="bone">
              <div className="overflow-x-auto">
                <Image
                  src={item.image}
                  alt={item.imageAlt}
                  width={item.imageWidth}
                  height={item.imageHeight}
                  sizes="(min-width: 1024px) 28rem, 100vw"
                  className="h-auto w-full min-w-[34rem] sm:min-w-0"
                />
              </div>
            </FloatingWindow>
            <p className="mt-2 font-mono text-[10px] text-ink/40 sm:hidden">{swipe}</p>
          </div>
        </article>
      ))}
    </div>
  );
}
