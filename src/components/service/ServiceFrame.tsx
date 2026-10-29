import { CalClickProvider } from "@/components/landing/CalClickProvider";
import { CalCtaButton } from "@/components/landing/CalCtaButton";
import { Footer } from "@/components/landing/Footer";
import { SiteHeader } from "@/components/landing/SiteHeader";
import { cn } from "@/lib/utils";
import type { Locale, Messages, ServiceSlug } from "@/messages";

import { ServiceSwitch } from "./ServiceSwitch";

type FrameCopy = {
  eyebrow: string;
  title: string;
  titleAccent: string;
  lede: string;
  installsTitle?: string;
  installs?: string[];
  close: string;
};

type ServiceFrameProps = {
  locale: Locale;
  messages: Messages;
  current: ServiceSlug;
  copy: FrameCopy;
  children: React.ReactNode;
  after?: React.ReactNode;
  /** park the install list beside the demo on large screens */
  split?: boolean;
};

export function ServiceFrame({
  locale,
  messages,
  current,
  copy,
  children,
  after,
  split = false,
}: ServiceFrameProps) {
  const installs = copy.installs ?? [];

  return (
    <CalClickProvider>
      <SiteHeader
        locale={locale}
        cta={messages.header.cta}
        nav={messages.services.nav}
        navLabel={messages.services.navLabel}
      />
      <main className="flex-1 pt-[calc(3.5rem+env(safe-area-inset-top))] sm:pt-[calc(4rem+env(safe-area-inset-top))]">
        <header className="mx-auto max-w-5xl px-4 pb-6 pt-8 text-left sm:pt-12">
          <p className="mb-2 text-xs font-medium tracking-wide text-gold">
            {copy.eyebrow}
          </p>
          <h1 className="max-w-3xl text-balance text-[2.15rem] font-black leading-[0.98] text-ink min-[380px]:text-4xl sm:text-5xl lg:text-6xl">
            {copy.title}{" "}
            <span className="text-gold">{copy.titleAccent}</span>
          </h1>
          <p className="mt-4 max-w-xl text-base leading-relaxed text-ink/60">
            {copy.lede}
          </p>
        </header>

        <ServiceSwitch
          locale={locale}
          label={messages.services.navLabel}
          current={current}
          items={messages.services.nav}
        />

        <div className="bg-dot-grid py-10 sm:py-14">
          {split && installs.length > 0 ? (
            <div className="mx-auto grid max-w-5xl items-start gap-8 px-4 lg:grid-cols-[minmax(0,1.15fr)_minmax(16rem,0.85fr)] lg:gap-10">
              <div className="min-w-0">{children}</div>
              <InstallList
                title={copy.installsTitle}
                items={installs}
                className="lg:sticky lg:top-[calc(8.5rem+env(safe-area-inset-top))]"
              />
            </div>
          ) : (
            children
          )}
        </div>

        {installs.length > 0 && !split ? (
          <section className="mx-auto max-w-5xl px-4 py-12 text-left sm:py-16">
            <h2 className="text-xl font-black text-ink sm:text-2xl">
              {copy.installsTitle}
            </h2>
            <ul className="mt-5 max-w-lg space-y-3">
              {installs.map((item) => (
                <li key={item} className="border-l-2 border-gold pl-3 text-sm leading-relaxed text-ink/70">
                  {item}
                </li>
              ))}
            </ul>
          </section>
        ) : null}

        {after}

        <div className="mx-auto flex max-w-5xl flex-col items-start gap-4 px-4 py-14 text-left sm:py-20">
          <p className="max-w-md text-base leading-relaxed text-ink/60">
            {copy.close}
          </p>
          <CalCtaButton variant="ink">{messages.finalCta.cta}</CalCtaButton>
        </div>
      </main>
      <Footer
        messages={messages.footer}
        locale={locale}
        nav={messages.services.nav}
      />
    </CalClickProvider>
  );
}

function InstallList({
  title,
  items,
  className,
}: {
  title?: string;
  items: string[];
  className?: string;
}) {
  return (
    <aside
      className={cn(
        "rounded-xl border border-ink/10 bg-white/80 p-5 text-left backdrop-blur-sm",
        className
      )}
    >
      <h2 className="text-xl font-black text-ink sm:text-2xl">{title}</h2>
      <ul className="mt-5 space-y-3">
        {items.map((item) => (
          <li
            key={item}
            className="border-l-2 border-gold pl-3 text-sm leading-relaxed text-ink/70"
          >
            {item}
          </li>
        ))}
      </ul>
    </aside>
  );
}
