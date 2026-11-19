import type { Metadata } from "next";

import { DemoHeader } from "@/components/demo/DemoHeader";
import { DemoLeadFloat } from "@/components/demo/DemoLeadFloat";
import { DemoStickyCta } from "@/components/demo/DemoStickyCta";
import { DemoVsl } from "@/components/demo/DemoVsl";
import {
  Booking,
  CalClickProvider,
  Footer,
} from "@/components/landing";
import { en } from "@/messages/en";

export const metadata: Metadata = {
  title: "watch this — productize.growth",
  description:
    "someone texts at 9 pm. who's answering? watch how we fix that — then book a 30-minute call.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function DemoPage() {
  return (
    <CalClickProvider>
      <DemoHeader cta="book a call →" />
      <main className="flex-1 pb-20 md:pb-0">
        <DemoVsl />
        <Booking
          messages={{
            ...en.booking,
            title: "book the 30-minute call",
            subtitle: "you'll leave with a plan either way.",
            description: "where you are → concrete plan. no theater.",
          }}
        />
        <Footer messages={en.footer} />
      </main>
      <DemoLeadFloat />
      <DemoStickyCta cta="book →" />
    </CalClickProvider>
  );
}
