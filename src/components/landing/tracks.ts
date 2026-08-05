/** unique track geometries — each section gets its own ride */

export type TrackPresetId =
  | "hero"
  | "steps"
  | "proof"
  | "cta"
  | "banner";

export type TrackPreset = {
  id: TrackPresetId;
  path: string;
  /** optional hand-tuned second rail; otherwise offset from path samples */
  railPath?: string;
  viewBox: string;
  /** bottom of viewBox used for support posts */
  supportFloor: number;
  carCount: number;
  carSpacing: number;
  /** px/s² — screen gravity, not 9.8 */
  g: number;
  /** starting speed along path (px/s) */
  v0: number;
  /** per-frame damping at 60fps reference */
  damping: number;
  minSpeed: number;
  strokeWidth: number;
  carScale?: number;
  /** dual-rail offset in path units */
  railGap: number;
  /** distance between sleepers along path */
  tieSpacing: number;
  tieHalfLength: number;
  showSupports: boolean;
  /** place a support every N ties */
  supportEvery: number;
};

/**
 * hero — long climb uphill (productize.growth goes up)
 * ground plane under collage; ends highest near showcase
 */
export const HERO_TRACK: TrackPreset = {
  id: "hero",
  path: "M8 255 C 55 255, 85 220, 125 228 C 175 240, 205 185, 255 165 C 320 135, 355 100, 410 72 C 460 48, 510 28, 560 16 C 575 12, 588 10, 596 8",
  railPath:
    "M8 263 C 55 263, 85 228, 125 236 C 175 248, 205 193, 255 173 C 320 143, 355 108, 410 80 C 460 56, 510 36, 560 24 C 575 20, 588 18, 596 16",
  viewBox: "0 0 600 280",
  supportFloor: 275,
  carCount: 3,
  carSpacing: 30,
  g: 540,
  v0: 130,
  damping: 0.988,
  minSpeed: 50,
  strokeWidth: 3.25,
  carScale: 1.2,
  railGap: 8,
  tieSpacing: 18,
  tieHalfLength: 5.5,
  showSupports: true,
  supportEvery: 3,
};

/**
 * steps — three clear hills for three system pieces (connector)
 */
export const STEPS_TRACK: TrackPreset = {
  id: "steps",
  path: "M10 78 C 55 78, 85 22, 140 22 C 185 22, 205 78, 250 78 C 295 78, 320 18, 380 18 C 430 18, 455 78, 500 78 C 545 78, 580 28, 650 28 C 680 28, 700 40, 720 22",
  viewBox: "0 0 730 95",
  supportFloor: 92,
  carCount: 3,
  carSpacing: 34,
  g: 660,
  v0: 150,
  damping: 0.985,
  minSpeed: 65,
  strokeWidth: 2.5,
  carScale: 1,
  railGap: 6.5,
  tieSpacing: 16,
  tieHalfLength: 4.5,
  showSupports: false,
  supportEvery: 4,
};

/**
 * proof — one deep valley then climb (header rule on ink)
 */
export const PROOF_TRACK: TrackPreset = {
  id: "proof",
  path: "M0 22 C 70 22, 110 18, 160 28 C 220 42, 250 78, 320 80 C 390 82, 430 38, 500 24 C 580 10, 650 14, 720 18 C 760 20, 790 12, 820 8",
  viewBox: "0 0 820 95",
  supportFloor: 92,
  carCount: 2,
  carSpacing: 38,
  g: 800,
  v0: 85,
  damping: 0.982,
  minSpeed: 48,
  strokeWidth: 2.5,
  carScale: 1.05,
  railGap: 6.5,
  tieSpacing: 17,
  tieHalfLength: 4.5,
  showSupports: false,
  supportEvery: 4,
};

/**
 * cta — drop then big uphill into the “this is” side
 */
export const CTA_TRACK: TrackPreset = {
  id: "cta",
  path: "M0 48 C 70 48, 110 14, 180 22 C 250 30, 290 82, 370 78 C 460 72, 520 28, 620 20 C 700 14, 780 18, 860 10 C 890 7, 920 12, 960 6",
  viewBox: "0 0 960 100",
  supportFloor: 98,
  carCount: 3,
  carSpacing: 32,
  g: 720,
  v0: 115,
  damping: 0.984,
  minSpeed: 55,
  strokeWidth: 2.85,
  carScale: 1.1,
  railGap: 7,
  tieSpacing: 17,
  tieHalfLength: 5,
  showSupports: true,
  supportEvery: 3,
};

/**
 * ink banner zip — fast shallow wave (section bridge)
 */
export const BANNER_TRACK: TrackPreset = {
  id: "banner",
  path: "M0 24 C 90 24, 130 10, 210 16 C 300 24, 360 8, 470 12 C 580 16, 650 28, 740 14 C 780 8, 800 12, 820 10",
  viewBox: "0 0 820 40",
  supportFloor: 38,
  carCount: 2,
  carSpacing: 52,
  g: 400,
  v0: 230,
  damping: 0.992,
  minSpeed: 120,
  strokeWidth: 1.85,
  carScale: 0.7,
  railGap: 4.5,
  tieSpacing: 20,
  tieHalfLength: 3.2,
  showSupports: false,
  supportEvery: 99,
};

export const TRACK_PRESETS: Record<TrackPresetId, TrackPreset> = {
  hero: HERO_TRACK,
  steps: STEPS_TRACK,
  proof: PROOF_TRACK,
  cta: CTA_TRACK,
  banner: BANNER_TRACK,
};
