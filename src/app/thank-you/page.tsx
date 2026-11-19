import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import { Sticker } from "@/components/landing/Sticker";

import { ThankYouTracker } from "./ThankYouTracker";

export const metadata: Metadata = {
  title: "you're booked — productize.growth",
  description: "check your email for the confirmation. talk soon.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function ThankYouPage() {
  return (
    <main className="relative flex min-h-svh flex-1 flex-col items-center justify-center overflow-hidden bg-dot-grid px-6 py-16">
      <ThankYouTracker />

      <div className="pointer-events-none absolute top-16 right-10 hidden sm:block">
        <Sticker rotate={8}>booked</Sticker>
      </div>
      <div className="pointer-events-none absolute bottom-20 left-10 hidden sm:block">
        <Sticker rotate={-7} variant="outline">
          talk soon
        </Sticker>
      </div>

      <div className="relative z-10 flex w-full max-w-md flex-col items-start gap-8 text-left">
        <Image
          src="/brand-logo.png"
          alt="productize.growth"
          width={400}
          height={200}
          priority
          unoptimized
          className="h-auto w-56 sm:w-64"
        />

        <div className="space-y-3">
          <h1 className="text-3xl font-black leading-[1.05] tracking-tight text-ink sm:text-5xl">
            you&apos;re booked.
          </h1>
          <p className="max-w-sm text-base leading-relaxed text-ink/55 sm:text-lg">
            check your email for the confirmation. talk soon.
          </p>
        </div>

        <Link
          href="/"
          className="inline-flex items-center justify-center rounded-full border border-ink bg-ink px-6 py-3.5 text-sm font-bold text-bone transition-colors duration-150 hover:border-gold hover:bg-gold hover:text-ink"
        >
          back home →
        </Link>
      </div>
    </main>
  );
}
