import Image from "next/image";

import { FloatingWindow } from "@/components/landing/FloatingWindow";
import { SectionReveal } from "@/components/landing/SectionReveal";
import { Sticker } from "@/components/landing/Sticker";
import { TrackStage } from "@/components/landing/TrackStage";

const cases = [
  {
    id: "fresh",
    tags: ["house cleaning", "wisconsin", "site + google + calls"],
    value: "fully booked",
    title: "fresh cleaning place — hales corners, wi",
    before: "2–3 full days a week, on average.",
    after: "the whole week. every month since she started with us.",
    rows: [
      { value: "calls", text: "run on their own. way less time on the phone." },
      {
        value: "presence",
        text: "above companies that used to outrank her online.",
      },
    ],
    plain: "site + google business + automated calls. her week filled up.",
    image: "/cases/fresh-cleaning-place.png",
    imageAlt: "fresh cleaning place website",
    windowLabel: "freshcleaningplacellc.com",
    tone: "peach" as const,
  },
  {
    id: "dental",
    tags: ["dental clinic", "lima", "facebook + instagram"],
    value: "1,478",
    title: "people asked the clinic to contact them.",
    before: null,
    after: null,
    rows: [
      {
        value: "$0.73",
        text: "in ads per person who raised their hand.",
      },
      { value: "819", text: "wanted cavity treatment — at $0.61 each." },
      {
        value: "555",
        text: "families asked about braces for their kids — at $0.72 each.",
      },
      { value: "$1,085", text: "spent in total across five campaigns." },
    ],
    plain: "for every $3 in ads, 4 people raised their hand to book a visit.",
    image: "/cases/dental-meta.jpg",
    imageAlt: "meta ads manager for a dental clinic in lima",
    windowLabel: "meta-ads.png",
    tone: "bone" as const,
  },
  {
    id: "shopify",
    tags: ["supplements", "peru", "shopify"],
    value: "$168k",
    title: "in sales, in a single month.",
    before: null,
    after: null,
    rows: [
      { value: "4.8x", text: "the previous month's sales (+381%)." },
      {
        value: "5,323",
        text: "orders in the month. about 177 a day (+457%).",
      },
      { value: "$31.6", text: "average order value." },
    ],
    plain: "in 30 days the store sold almost five times what it used to.",
    image: "/cases/shopify-month.jpg",
    imageAlt: "shopify sales chart for september 2026",
    windowLabel: "shopify.png",
    tone: "mint" as const,
  },
  {
    id: "tiktok",
    tags: ["e-commerce", "tiktok ads", "peru"],
    value: "3,079",
    title: "orders that came from tiktok ads.",
    before: null,
    after: null,
    rows: [
      { value: "$3.69", text: "in ad spend per order." },
      {
        value: "$0.10",
        text: "when someone clicked through to the product.",
      },
      {
        value: "43/100",
        text: "kept watching past the first seconds.",
      },
      {
        value: "611",
        text: "campaigns tested. the ones that didn't sell got switched off.",
      },
    ],
    plain:
      "with $11,350 in ads, we tested hundreds of combinations and kept the ones that sell.",
    image: "/cases/tiktok-month.jpg",
    imageAlt: "tiktok ads manager totals for 611 campaigns",
    windowLabel: "tiktok-ads.png",
    tone: "peach" as const,
  },
] as const;

export function DemoResults() {
  return (
    <SectionReveal className="relative overflow-hidden border-b border-ink bg-dot-grid-ink px-4 py-14 text-bone sm:px-6 sm:py-20">
      <TrackStage preset="proof" role="headerRule" />

      <div className="pointer-events-none absolute top-16 right-6 hidden sm:block">
        <div className="animate-float-soft">
          <Sticker rotate={8}>real accounts</Sticker>
        </div>
      </div>

      <div className="relative mx-auto max-w-3xl">
        <p className="mb-2 text-xs font-bold tracking-wide text-gold">
          does it work?
        </p>
        <h2 className="text-2xl font-black leading-[1.05] sm:text-4xl">
          real businesses.{" "}
          <span className="text-gold">specific numbers.</span>
        </h2>
        <p className="mt-3 max-w-xl text-sm leading-relaxed text-bone/55 sm:text-base">
          four accounts. what showed up — not a vibe, the receipt.
        </p>
        <p className="mt-2 max-w-xl text-xs leading-relaxed text-bone/35">
          dollars from soles at s/3.44 · oct 29, 2026. what happens next depends
          on the business, the offer, and the budget.
        </p>

        <div className="mt-10 flex flex-col gap-10 sm:mt-12 sm:gap-14">
          {cases.map((item, i) => (
            <article
              key={item.id}
              className={`grid gap-5 lg:grid-cols-2 lg:items-center lg:gap-8 ${
                i % 2 === 1 ? "lg:[&>*:first-child]:order-2" : ""
              }`}
            >
              <div>
                <div className="flex flex-wrap gap-1.5">
                  {item.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-bone/15 bg-bone/5 px-2.5 py-0.5 text-[10px] font-bold text-bone/55"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <p className="mt-4 text-3xl font-black text-gold sm:text-4xl">
                  {item.value}
                </p>
                <h3 className="mt-2 text-lg font-black leading-snug text-bone sm:text-xl">
                  {item.title}
                </h3>

                {item.before && item.after ? (
                  <div className="mt-4 grid gap-2 sm:grid-cols-2">
                    <div className="rounded-xl border border-bone/10 bg-bone/5 p-3">
                      <p className="text-[10px] font-bold text-bone/40">
                        before
                      </p>
                      <p className="mt-1 text-sm text-bone/60">{item.before}</p>
                    </div>
                    <div className="rounded-xl border border-gold/30 bg-gold/10 p-3">
                      <p className="text-[10px] font-bold text-gold">now</p>
                      <p className="mt-1 text-sm font-bold text-bone">
                        {item.after}
                      </p>
                    </div>
                  </div>
                ) : null}

                <ul className="mt-4 space-y-2.5">
                  {item.rows.map((row) => (
                    <li key={row.value} className="flex gap-3 text-sm">
                      <span className="shrink-0 font-black text-gold">
                        {row.value}
                      </span>
                      <span className="leading-snug text-bone/55">{row.text}</span>
                    </li>
                  ))}
                </ul>

                <p className="mt-4 border-l-2 border-gold pl-3 text-sm leading-relaxed text-bone/70">
                  {item.plain}
                </p>
              </div>

              <FloatingWindow
                label={item.windowLabel}
                tone={item.tone === "peach" ? "peach" : item.tone === "mint" ? "mint" : "bone"}
                float={i % 2 === 0 ? "a" : "b"}
                className={
                  item.tone === "peach" || item.tone === "mint"
                    ? ""
                    : "border-bone/20"
                }
              >
                <div className="relative aspect-[16/10] w-full bg-ink/5">
                  <Image
                    src={item.image}
                    alt={item.imageAlt}
                    fill
                    sizes="(max-width: 768px) 100vw, 400px"
                    className="object-cover object-top"
                  />
                </div>
              </FloatingWindow>
            </article>
          ))}
        </div>
      </div>
    </SectionReveal>
  );
}
