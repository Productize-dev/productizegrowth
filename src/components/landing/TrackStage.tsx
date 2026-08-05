import { cn } from "@/lib/utils";

import { PhysicsRollercoaster } from "./PhysicsRollercoaster";
import type { TrackPresetId } from "./tracks";

export type TrackRole =
  | "ground"
  | "connector"
  | "headerRule"
  | "divider"
  | "backdrop";

type TrackStageProps = {
  preset: TrackPresetId;
  role: TrackRole;
  className?: string;
};

/**
 * Intentional placement contracts — opacity/height/position by story role.
 * ground: hero launch · connector: between title and cards
 * headerRule: through title band · divider: ink banner zip
 * backdrop: climb behind CTA content
 */
const roles: Record<TrackRole, string> = {
  ground:
    "pointer-events-none absolute inset-x-0 bottom-0 h-[42%] opacity-[0.42] sm:h-[52%] sm:opacity-50 lg:opacity-[0.55]",
  connector:
    "pointer-events-none relative mx-auto mb-8 h-16 w-[min(100%,56rem)] opacity-55 sm:mb-10 sm:h-20 sm:opacity-70",
  headerRule:
    "pointer-events-none absolute inset-x-0 top-0 h-[7.5rem] opacity-50 sm:h-36 sm:opacity-60",
  divider:
    "pointer-events-none absolute inset-x-0 top-1/2 h-9 -translate-y-1/2 opacity-45",
  backdrop:
    "pointer-events-none absolute inset-x-[-4%] top-[8%] h-32 opacity-40 sm:top-[6%] sm:h-40 sm:opacity-50 lg:h-48",
};

export function TrackStage({ preset, role, className }: TrackStageProps) {
  return (
    <div className={cn(roles[role], className)} aria-hidden>
      <PhysicsRollercoaster preset={preset} />
    </div>
  );
}
