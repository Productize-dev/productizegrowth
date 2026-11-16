import Image from "next/image";

import { FloatingWindow } from "@/components/landing/FloatingWindow";
import { SectionReveal } from "@/components/landing/SectionReveal";
import { Sticker } from "@/components/landing/Sticker";

const team = [
  {
    name: "manuel vargas",
    role: "ai & software specialist",
    blurb:
      "the system that answers, books, and runs 24/7. he builds what never sleeps.",
    image: "/team/manuel-vargas.jpg",
    alt: "manuel vargas",
    sticker: "ai + systems",
    rotate: -6,
  },
  {
    name: "alessandro luque",
    role: "marketing specialist",
    blurb:
      "ads, funnels, and the offer that makes people raise their hand. he fills the pipe.",
    image: "/team/alessandro-luque.jpg",
    alt: "alessandro luque",
    sticker: "ads + growth",
    rotate: 7,
  },
] as const;

export function DemoTeam() {
  return (
    <SectionReveal className="relative overflow-hidden border-b border-ink/10 bg-bone px-4 py-14 sm:px-6 sm:py-20">
      <div className="mx-auto max-w-3xl">
        <p className="mb-2 text-xs font-bold tracking-wide text-gold">
          who builds this
        </p>
        <h2 className="max-w-xl text-2xl font-black leading-[1.05] text-ink sm:text-4xl">
          two specialists.{" "}
          <span className="text-gold">one installed system.</span>
        </h2>
        <p className="mt-3 max-w-lg text-sm leading-relaxed text-ink/55 sm:text-base">
          marketing that brings the lead. software that catches it. you talk to
          both of us on the call.
        </p>

        <div className="mt-8 grid gap-5 sm:mt-10 sm:grid-cols-2 sm:gap-6">
          {team.map((person, i) => (
            <FloatingWindow
              key={person.name}
              label={`${person.name.split(" ")[0]}.png`}
              float={i === 0 ? "a" : "b"}
              interactive
              className="h-full"
            >
              <div className="relative">
                <div className="relative aspect-[4/5] w-full overflow-hidden bg-ink/5">
                  <Image
                    src={person.image}
                    alt={person.alt}
                    fill
                    sizes="(max-width: 640px) 100vw, 360px"
                    className="object-cover object-[center_20%]"
                    priority={i === 0}
                  />
                </div>
                <div className="pointer-events-none absolute top-3 right-3">
                  <Sticker rotate={person.rotate}>{person.sticker}</Sticker>
                </div>
                <div className="border-t border-ink/10 bg-bone p-5 text-left">
                  <p className="text-lg font-black text-ink">{person.name}</p>
                  <p className="mt-0.5 text-xs font-bold tracking-wide text-gold">
                    {person.role}
                  </p>
                  <p className="mt-3 text-sm leading-relaxed text-ink/55">
                    {person.blurb}
                  </p>
                </div>
              </div>
            </FloatingWindow>
          ))}
        </div>
      </div>
    </SectionReveal>
  );
}
