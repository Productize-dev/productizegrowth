import Image from "next/image";
import Link from "next/link";

import { Sticker } from "@/components/landing/Sticker";

export default function LanguageSelectPage() {
  return (
    <main className="relative flex min-h-svh flex-1 flex-col items-center justify-center overflow-hidden bg-dot-grid px-6 py-16">
      <div className="pointer-events-none absolute top-16 right-10 hidden sm:block">
        <Sticker rotate={10}>up only ↑</Sticker>
      </div>
      <div className="pointer-events-none absolute bottom-20 left-10 hidden sm:block">
        <Sticker rotate={-8} variant="outline">
          productized
        </Sticker>
      </div>

      <div className="relative z-10 flex w-full max-w-md flex-col items-start gap-10 text-left">
        <Image
          src="/brand-logo.png"
          alt="productize.growth"
          width={400}
          height={200}
          priority
          unoptimized
          className="h-auto w-56 sm:w-64"
        />

        <div className="space-y-2">
          <h1 className="text-3xl font-black leading-[1.05] tracking-tight text-ink sm:text-4xl">
            elige tu idioma
            <br />
            <span className="text-gold">choose your language</span>
          </h1>
          <p className="text-sm text-ink/55">selecciona para continuar</p>
        </div>

        <div className="flex w-full flex-col gap-2 sm:flex-row">
          <Link
            href="/es"
            className="flex flex-1 items-center justify-center rounded-full border border-ink bg-bone px-6 py-4 text-lg font-bold text-ink transition-colors duration-150 hover:bg-ink hover:text-bone"
          >
            español
          </Link>
          <Link
            href="/en"
            className="flex flex-1 items-center justify-center rounded-full border border-ink bg-ink px-6 py-4 text-lg font-bold text-bone transition-colors duration-150 hover:bg-gold hover:border-gold hover:text-ink"
          >
            english
          </Link>
        </div>
      </div>
    </main>
  );
}
