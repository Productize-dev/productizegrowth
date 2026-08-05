import { Clock, Video } from "lucide-react";

import type { Messages } from "@/messages";

import { CalInlineEmbed } from "./CalInlineEmbed";
import { FloatingWindow } from "./FloatingWindow";
import { SectionReveal } from "./SectionReveal";

type BookingProps = {
  messages: Messages["booking"];
};

export function Booking({ messages }: BookingProps) {
  return (
    <SectionReveal
      id="booking"
      className="scroll-mt-8 border-b border-ink/10 bg-bone px-4 py-16 sm:px-6 sm:py-20"
    >
      <div className="mx-auto max-w-4xl">
        <div className="mb-6 text-left">
          <h2 className="text-2xl font-black text-ink sm:text-4xl">
            {messages.title}
          </h2>
          <p className="mt-1 text-sm text-ink/55">{messages.subtitle}</p>
        </div>

        <FloatingWindow label="cal.com — scope call" className="w-full overflow-hidden">
          <div className="grid bg-bone md:grid-cols-[200px_1fr]">
            <div className="border-b border-ink/10 p-5 md:border-r md:border-b-0">
              <h3 className="flex items-center gap-2 text-lg font-black text-ink">
                {messages.eventName}
                <Video className="size-4 text-ink/35" aria-hidden />
              </h3>
              <p className="mt-2 flex items-center gap-2 text-sm text-ink/50">
                <Clock className="size-4 shrink-0" aria-hidden />
                {messages.duration}
              </p>
              <p className="mt-3 text-sm text-ink/55">{messages.description}</p>
            </div>

            <div className="min-h-[420px] p-2 sm:p-3">
              <CalInlineEmbed />
            </div>
          </div>
        </FloatingWindow>
      </div>
    </SectionReveal>
  );
}
