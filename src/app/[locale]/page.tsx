import { notFound } from "next/navigation";

import {
  Booking,
  CalClickProvider,
  Compare,
  FinalCta,
  FloatingPip,
  Footer,
  HomeCases,
  Hero,
  Marquee,
  Proof,
  SiteHeader,
  Steps,
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
      <SiteHeader
        locale={raw}
        cta={messages.header.cta}
        nav={messages.services.nav}
        navLabel={messages.services.navLabel}
      />
      <main className="flex-1">
        <Hero
          messages={messages.hero}
          stickers={messages.stickers}
          windows={messages.windows}
          locale={raw}
          pieceLinks={messages.services.nav.map((item) => ({
            href: item.slug,
            label: item.label,
          }))}
        />
        <Marquee items={messages.marquee} />
        <Steps messages={messages.steps} locale={raw} />
        <HomeCases
          locale={raw}
          copy={messages.homeCases}
          fresh={messages.testimonials}
          ads={messages.services.ads.adCases}
          rateNote={messages.services.ads.rateNote}
        />
        <Proof messages={messages.proof} />
        <Compare messages={messages.compare} />
        <FinalCta messages={messages.finalCta} />
        <Booking messages={messages.booking} />
        <Footer
          messages={messages.footer}
          locale={raw}
          nav={messages.services.nav}
        />
      </main>
      <FloatingPip messages={messages.pip} />
    </CalClickProvider>
  );
}
