import type { Messages } from "@/messages";

import { SectionReveal } from "./SectionReveal";

type TestimonialsProps = {
  messages: Messages["testimonials"];
};

export function Testimonials({ messages }: TestimonialsProps) {
  return (
    <SectionReveal className="border-b border-ink/10 bg-dot-grid px-4 py-14 sm:px-6 sm:py-16">
      <div className="mx-auto max-w-5xl text-left">
        <p className="mb-2 text-xs font-medium tracking-wide text-gold">
          {messages.eyebrow}
        </p>
        <h2 className="text-2xl font-black leading-[1.05] text-ink sm:text-4xl">
          {messages.title}
        </h2>
        <p className="mt-3 max-w-md border-l-2 border-gold pl-4 text-sm text-ink/55">
          {messages.comingSoon}
        </p>
      </div>
    </SectionReveal>
  );
}
