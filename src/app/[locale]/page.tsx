import { notFound } from "next/navigation";

import {
  Booking,
  CalClickProvider,
  Compare,
  FinalCta,
  FloatingPip,
  Footer,
  Hero,
  Marquee,
  Proof,
  SiteHeader,
  Steps,
  Testimonials,
} from "@/components/landing";
import { getMessages, isLocale } from "@/messages";

export default async function LandingPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale: raw } = await params;
  if (!isLocale(raw)) notFound();

  const messages = getMessages(raw);

  return (
    <CalClickProvider>
      <SiteHeader locale={raw} cta={messages.header.cta} />
      <main className="flex-1 overflow-x-hidden">
        <Hero
          messages={messages.hero}
          stickers={messages.stickers}
          windows={messages.windows}
        />
        <Marquee items={messages.marquee} />
        <Steps messages={messages.steps} />
        <Testimonials messages={messages.testimonials} />
        <Proof messages={messages.proof} />
        <Compare messages={messages.compare} />
        <FinalCta messages={messages.finalCta} />
        <Booking messages={messages.booking} />
        <Footer messages={messages.footer} />
      </main>
      <FloatingPip messages={messages.pip} />
    </CalClickProvider>
  );
}
