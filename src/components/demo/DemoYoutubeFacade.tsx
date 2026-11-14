"use client";

import { useState } from "react";

import { cn } from "@/lib/utils";

type DemoYoutubeFacadeProps = {
  youtubeId: string;
  title: string;
  className?: string;
};

export function DemoYoutubeFacade({
  youtubeId,
  title,
  className,
}: DemoYoutubeFacadeProps) {
  const [playing, setPlaying] = useState(false);
  const thumb = `https://i.ytimg.com/vi/${youtubeId}/hqdefault.jpg`;

  return (
    <div className={cn("relative aspect-video w-full bg-ink", className)}>
      {playing ? (
        <iframe
          className="absolute inset-0 size-full"
          src={`https://www.youtube.com/embed/${youtubeId}?autoplay=1&rel=0`}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        />
      ) : (
        <button
          type="button"
          onClick={() => setPlaying(true)}
          className="group absolute inset-0 size-full cursor-pointer border-0 bg-ink p-0 text-left"
          aria-label={`play video: ${title}`}
        >
          {/* eslint-disable-next-line @next/next/no-img-element -- external yt thumb, no remotePatterns */}
          <img
            src={thumb}
            alt=""
            width={1280}
            height={720}
            decoding="async"
            fetchPriority="high"
            className="absolute inset-0 size-full object-cover opacity-90 transition-opacity duration-300 group-hover:opacity-100"
          />
          <span
            className="absolute inset-0 bg-gradient-to-t from-ink/70 via-ink/20 to-ink/30"
            aria-hidden
          />
          <span className="absolute inset-0 flex flex-col items-center justify-center gap-3">
            <span className="flex size-16 items-center justify-center rounded-full border-2 border-gold bg-ink/80 text-gold shadow-[0_12px_40px_-12px_rgba(244,117,33,0.8)] transition-transform duration-300 group-hover:scale-110 sm:size-[4.5rem]">
              <svg
                viewBox="0 0 24 24"
                fill="currentColor"
                className="ml-1 size-7 sm:size-8"
                aria-hidden
              >
                <path d="M8 5v14l11-7L8 5z" />
              </svg>
            </span>
            <span className="rounded-full border border-bone/20 bg-ink/70 px-3 py-1 text-xs font-bold text-bone backdrop-blur-sm">
              tap to play →
            </span>
          </span>
        </button>
      )}
    </div>
  );
}
