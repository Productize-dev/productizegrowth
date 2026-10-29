import Link from "next/link";

import type { Locale, Messages, ServiceNavItem } from "@/messages";

type FooterProps = {
  messages: Messages["footer"];
  locale?: Locale;
  nav?: ServiceNavItem[];
};

export function Footer({ messages, locale, nav = [] }: FooterProps) {
  return (
    <footer className="border-t border-ink/10 bg-bone px-4 py-10 sm:px-6">
      <div className="mx-auto flex max-w-5xl flex-col gap-5 text-left">
        {locale && nav.length > 0 ? (
          <nav className="flex flex-wrap gap-x-4 gap-y-2 text-sm font-bold text-ink/70">
            {nav.map((item) => (
              <Link
                key={item.slug}
                href={`/${locale}/${item.slug}`}
                className="transition-colors duration-150 hover:text-gold"
              >
                {item.label}
              </Link>
            ))}
          </nav>
        ) : null}
        <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
          <nav className="flex flex-wrap items-center gap-4 text-sm text-ink/50">
            <a
              href="#"
              className="transition-colors duration-150 hover:text-gold"
            >
              {messages.privacy}
            </a>
            <span className="text-ink/20" aria-hidden>
              /
            </span>
            <a
              href="#"
              className="transition-colors duration-150 hover:text-gold"
            >
              {messages.terms}
            </a>
          </nav>

          <div className="space-y-1 text-sm">
            <a
              href={`mailto:${messages.email}`}
              className="block text-ink/70 transition-colors duration-150 hover:text-gold"
            >
              {messages.email}
            </a>
            <p className="text-xs text-ink/45">{messages.location}</p>
          </div>
        </div>

        <p className="text-xs text-ink/40">{messages.rights}</p>
      </div>
    </footer>
  );
}
