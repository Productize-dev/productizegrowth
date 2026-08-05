import { PhysicsRollercoaster } from "./PhysicsRollercoaster";
import type { TrackPresetId } from "./tracks";
import { cn } from "@/lib/utils";

type RollercoasterTrackProps = {
  className?: string;
  /** @deprecated prefer TrackStage + preset */
  variant?: "hero" | "divider" | "vertical" | "cta";
  preset?: TrackPresetId;
  draw?: boolean;
  animate?: boolean;
  opacity?: number;
};

const VARIANT_TO_PRESET: Record<
  NonNullable<RollercoasterTrackProps["variant"]>,
  TrackPresetId
> = {
  hero: "hero",
  divider: "proof",
  vertical: "steps",
  cta: "cta",
};

/** thin façade — prefer TrackStage for intentional placement */
export function RollercoasterTrack({
  className,
  variant = "hero",
  preset,
  opacity,
}: RollercoasterTrackProps) {
  const id = preset ?? VARIANT_TO_PRESET[variant];
  return (
    <PhysicsRollercoaster
      preset={id}
      className={cn(className)}
      opacity={opacity}
    />
  );
}
