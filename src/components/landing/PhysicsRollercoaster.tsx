"use client";

import { useEffect, useId, useMemo, useRef, useState } from "react";

import { cn } from "@/lib/utils";

import {
  TRACK_PRESETS,
  type TrackPreset,
  type TrackPresetId,
} from "./tracks";

type PhysicsRollercoasterProps = {
  preset: TrackPresetId;
  className?: string;
  config?: Partial<TrackPreset>;
  opacity?: number;
};

type Tie = { x1: number; y1: number; x2: number; y2: number };
type Support = { x: number; yTop: number; yBot: number };

function CarGraphic({ scale = 1 }: { scale?: number }) {
  const s = scale;
  return (
    <g>
      {/* chassis shadow */}
      <rect
        x={-9 * s}
        y={-1.5 * s}
        width={18 * s}
        height={5 * s}
        rx={1.2 * s}
        fill="currentColor"
        opacity={0.35}
      />
      {/* body */}
      <rect
        x={-8.5 * s}
        y={-6.5 * s}
        width={17 * s}
        height={8 * s}
        rx={2 * s}
        fill="currentColor"
      />
      {/* windshield notch */}
      <rect
        x={2 * s}
        y={-5.5 * s}
        width={5.5 * s}
        height={3.5 * s}
        rx={0.8 * s}
        className="fill-ink"
        opacity={0.35}
      />
      {/* wheels on rail */}
      <circle cx={-5 * s} cy={3.2 * s} r={2.1 * s} className="fill-ink" />
      <circle cx={5 * s} cy={3.2 * s} r={2.1 * s} className="fill-ink" />
      <circle
        cx={-5 * s}
        cy={3.2 * s}
        r={0.7 * s}
        fill="currentColor"
        opacity={0.7}
      />
      <circle
        cx={5 * s}
        cy={3.2 * s}
        r={0.7 * s}
        fill="currentColor"
        opacity={0.7}
      />
      {/* riders */}
      <circle cx={-3.5 * s} cy={-7.2 * s} r={1.5 * s} className="fill-ink" />
      <circle cx={1.5 * s} cy={-7.2 * s} r={1.5 * s} className="fill-ink" />
    </g>
  );
}

function sampleDecor(
  pathEl: SVGPathElement,
  track: TrackPreset
): { ties: Tie[]; supports: Support[]; railD: string | null } {
  const total = pathEl.getTotalLength();
  const ties: Tie[] = [];
  const supports: Support[] = [];
  const railPts: { x: number; y: number }[] = [];

  const step = Math.max(track.tieSpacing, 8);
  let tieIndex = 0;

  for (let d = 0; d <= total; d += step) {
    const p = pathEl.getPointAtLength(d);
    const ahead = pathEl.getPointAtLength(Math.min(d + 1.5, total));
    const dx = ahead.x - p.x;
    const dy = ahead.y - p.y;
    const len = Math.hypot(dx, dy) || 1;
    const nx = -dy / len;
    const ny = dx / len;

    const half = track.tieHalfLength;
    ties.push({
      x1: p.x + nx * half,
      y1: p.y + ny * half,
      x2: p.x - nx * half,
      y2: p.y - ny * half,
    });

    // outer rail samples (opposite side of “up” when possible — push +gap)
    const gap = track.railGap;
    railPts.push({ x: p.x + nx * gap, y: p.y + ny * gap });

    if (
      track.showSupports &&
      tieIndex % track.supportEvery === 0 &&
      p.y < track.supportFloor - 8
    ) {
      supports.push({
        x: p.x,
        yTop: p.y + 2,
        yBot: track.supportFloor,
      });
    }
    tieIndex += 1;
  }

  // build rail path string if no hand-tuned railPath
  let railD: string | null = null;
  if (!track.railPath && railPts.length > 1) {
    railD = railPts
      .map((pt, i) => `${i === 0 ? "M" : "L"}${pt.x.toFixed(1)} ${pt.y.toFixed(1)}`)
      .join(" ");
  }

  return { ties, supports, railD };
}

/**
 * SVG rollercoaster with energy-conservation physics:
 * v(h) = √(v₀² + 2g(h₀ − h)) × damping
 * height h = −y (SVG y grows downward).
 */
export function PhysicsRollercoaster({
  preset,
  className,
  config,
  opacity = 1,
}: PhysicsRollercoasterProps) {
  const track = useMemo(
    () => ({ ...TRACK_PRESETS[preset], ...config }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [preset, config?.g, config?.v0, config?.carCount, config?.path]
  );

  const pathRef = useRef<SVGPathElement>(null);
  const carRefs = useRef<(SVGGElement | null)[]>([]);
  const [decor, setDecor] = useState<{
    ties: Tie[];
    supports: Support[];
    railD: string | null;
  }>({ ties: [], supports: [], railD: null });
  const uid = useId();

  useEffect(() => {
    const pathEl = pathRef.current;
    if (!pathEl) return;
    setDecor(sampleDecor(pathEl, track));
  }, [track]);

  useEffect(() => {
    const pathEl = pathRef.current;
    if (!pathEl) return;

    const total = pathEl.getTotalLength();
    if (total <= 0) return;

    const start = pathEl.getPointAtLength(0);
    const h0 = -start.y;
    const { g, v0, damping, minSpeed, carCount, carSpacing } = track;

    const place = (el: SVGGElement | null, distance: number) => {
      if (!el) return;
      let d = distance % total;
      if (d < 0) d += total;
      const p = pathEl.getPointAtLength(d);
      const ahead = pathEl.getPointAtLength((d + 1.5) % total);
      const angle =
        (Math.atan2(ahead.y - p.y, ahead.x - p.x) * 180) / Math.PI;
      el.setAttribute(
        "transform",
        `translate(${p.x} ${p.y}) rotate(${angle})`
      );
    };

    const placeAll = (lead: number) => {
      for (let i = 0; i < carCount; i++) {
        place(carRefs.current[i], lead - i * carSpacing);
      }
    };

    const reduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (reduced) {
      placeAll(total * 0.35);
      return;
    }

    let leadDistance = 0;
    let raf = 0;
    let last = performance.now();
    let alive = true;

    const tick = (now: number) => {
      if (!alive) return;
      const dt = Math.min((now - last) / 1000, 0.05);
      last = now;

      let d = leadDistance % total;
      if (d < 0) d += total;
      const at = pathEl.getPointAtLength(d);
      const h = -at.y;

      const energy = v0 * v0 + 2 * g * (h0 - h);
      let v = Math.sqrt(Math.max(energy, 0));
      v *= Math.pow(damping, dt * 60);
      v = Math.max(v, minSpeed);

      leadDistance += v * dt;
      placeAll(leadDistance);

      raf = requestAnimationFrame(tick);
    };

    placeAll(0);
    raf = requestAnimationFrame(tick);
    return () => {
      alive = false;
      cancelAnimationFrame(raf);
    };
  }, [track]);

  const outerRail = track.railPath ?? decor.railD;

  return (
    <svg
      viewBox={track.viewBox}
      fill="none"
      className={cn(
        "h-full w-full text-gold",
        className
      )}
      style={{ opacity }}
      aria-hidden
    >
      {/* supports — hide on small screens */}
      <g className="hidden sm:block" opacity={0.22}>
        {decor.supports.map((s, i) => (
          <line
            key={`${uid}-s-${i}`}
            x1={s.x}
            y1={s.yTop}
            x2={s.x}
            y2={s.yBot}
            stroke="currentColor"
            strokeWidth={1.1}
            strokeLinecap="round"
          />
        ))}
      </g>

      {/* ties / sleepers — denser detail from sm up */}
      <g className="hidden sm:block" opacity={0.4}>
        {decor.ties.map((t, i) => (
          <line
            key={`${uid}-t-${i}`}
            x1={t.x1}
            y1={t.y1}
            x2={t.x2}
            y2={t.y2}
            stroke="currentColor"
            strokeWidth={Math.max(1.2, track.strokeWidth * 0.45)}
            strokeLinecap="round"
          />
        ))}
      </g>

      {/* outer rail */}
      {outerRail ? (
        <path
          d={outerRail}
          stroke="currentColor"
          strokeWidth={track.strokeWidth * 0.55}
          strokeLinecap="round"
          strokeLinejoin="round"
          opacity={0.35}
        />
      ) : null}

      {/* main rail — physics path */}
      <path
        ref={pathRef}
        d={track.path}
        stroke="currentColor"
        strokeWidth={track.strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
        opacity={0.92}
      />

      {/* train */}
      {Array.from({ length: track.carCount }, (_, i) => (
        <g
          key={i}
          ref={(el) => {
            carRefs.current[i] = el;
          }}
        >
          <CarGraphic scale={track.carScale ?? 1} />
        </g>
      ))}
    </svg>
  );
}
