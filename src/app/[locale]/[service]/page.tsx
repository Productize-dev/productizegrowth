import Link from "next/link";
import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { Testimonials } from "@/components/landing/Testimonials";
import { AdCases } from "@/components/service/AdCases";
import { AdFlow } from "@/components/service/AdFlow";
import { ChatPlay } from "@/components/service/ChatPlay";
import { PiecePicker } from "@/components/service/PiecePicker";
import { ServiceFrame } from "@/components/service/ServiceFrame";
import { SurfaceToggle } from "@/components/service/SurfaceToggle";
import { getMessages, isLocale, locales, type ServiceSlug } from "@/messages";
import { isService, serviceMetadata, serviceSlugs } from "@/lib/services";

export function generateStaticParams() {
  return locales.flatMap((locale) =>
    serviceSlugs.map((service) => ({ locale, service }))
  );
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; service: string }>;
}): Promise<Metadata> {
  const { locale, service } = await params;
  if (!isLocale(locale) || !isService(service)) return {};
  return serviceMetadata(locale, service);
}

export default async function ServicePage({
  params,
}: {
  params: Promise<{ locale: string; service: string }>;
}) {
  const { locale, service } = await params;
  if (!isLocale(locale) || !isService(service)) notFound();

  const messages = getMessages(locale);
  const page = messages.services[service];

  return (
    <ServiceFrame
      locale={locale}
      messages={messages}
      current={service}
      copy={page}
      split={service === "automatizacion"}
      after={
        service === "ads" ? (
          <AdsCases locale={locale} messages={messages} />
        ) : null
      }
    >
      <ServiceBody locale={locale} service={service} messages={messages} />
    </ServiceFrame>
  );
}

function ServiceBody({
  locale,
  service,
  messages,
}: {
  locale: "es" | "en";
  service: ServiceSlug;
  messages: ReturnType<typeof getMessages>;
}) {
  if (service === "sistema") {
    return <PiecePicker locale={locale} copy={messages.services.sistema} />;
  }
  if (service === "automatizacion") {
    return <ChatPlay copy={messages.services.automatizacion} />;
  }
  if (service === "web") {
    return <SurfaceToggle copy={messages.services.web} />;
  }
  return <AdFlow copy={messages.services.ads} />;
}

function AdsCases({
  locale,
  messages,
}: {
  locale: "es" | "en";
  messages: ReturnType<typeof getMessages>;
}) {
  const ads = messages.services.ads;

  return (
    <div
      id="caso"
      className="scroll-mt-[calc(8.5rem+env(safe-area-inset-top))] sm:scroll-mt-[calc(9.5rem+env(safe-area-inset-top))]"
    >
      <div className="mx-auto max-w-5xl px-4 pb-2 pt-4 text-left">
        <p className="text-xs font-medium tracking-wide text-gold">
          {ads.caseKicker}
        </p>
        <p className="mt-3 max-w-xl text-base leading-relaxed text-ink/70">
          {ads.rateNote}
        </p>
      </div>
      <AdCases cases={ads.adCases} swipe={messages.homeCases.swipe} />
      <div className="mx-auto max-w-5xl px-4 pb-2 text-left">
        <p className="max-w-xl text-base leading-relaxed text-ink/70">
          {ads.caseIntro}
        </p>
        <div className="mt-4 flex flex-wrap gap-2">
          {ads.casePieces.map((piece) => (
            <Link
              key={piece.slug}
              href={`/${locale}/${piece.slug}`}
              className="rounded-full border border-ink/15 bg-white px-3 py-1.5 text-xs font-black text-ink transition-colors duration-150 hover:border-gold hover:text-gold"
            >
              {piece.label}
            </Link>
          ))}
        </div>
      </div>
      <Testimonials
        messages={messages.testimonials}
        locale={locale}
        hideMore
      />
    </div>
  );
}
