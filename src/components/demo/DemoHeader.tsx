import Image from "next/image";
import Link from "next/link";

import { CalCtaButton } from "@/components/landing/CalCtaButton";

type DemoHeaderProps = {
  cta: string;
};

export function DemoHeader({ cta }: DemoHeaderProps) {
  return (
    <header className="fixed top-0 right-0 left-0 z-50 border-b border-ink/10 bg-bone/90 pt-[env(safe-area-inset-top)] backdrop-blur-md">
      <div className="mx-auto flex h-14 max-w-6xl items-center justify-between gap-3 px-4 sm:h-16 sm:px-6">
        <Link href="/en" className="shrink-0">
          <Image
            src="/brand-logo.png"
            alt="productize.growth"
            width={160}
            height={80}
            unoptimized
            className="h-8 w-auto bg-transparent sm:h-10"
            priority
          />
        </Link>

        <div className="flex items-center gap-3 sm:gap-4">
          <p className="hidden self-center text-[11px] leading-none font-bold text-ink/40 sm:block">
            watch → book
          </p>
          <CalCtaButton
            variant="gold"
            className="h-9 !h-9 w-auto px-4 text-xs leading-none"
          >
            {cta}
          </CalCtaButton>
        </div>
      </div>
    </header>
  );
}
