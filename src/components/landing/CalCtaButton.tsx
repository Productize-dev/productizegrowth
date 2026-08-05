"use client";

import { Button } from "@/components/ui/button";
import { CAL_CONFIG, CAL_LINK, CAL_NAMESPACE } from "@/lib/cal";
import { cn } from "@/lib/utils";

type CalCtaButtonProps = {
  children: React.ReactNode;
  className?: string;
  variant?: "ink" | "gold";
};

export function CalCtaButton({
  children,
  className,
  variant = "ink",
}: CalCtaButtonProps) {
  const styles =
    variant === "gold"
      ? "bg-gold text-ink hover:bg-ink hover:text-bone"
      : "bg-ink text-bone hover:bg-gold hover:text-ink";

  return (
    <Button
      type="button"
      size="lg"
      data-cal-namespace={CAL_NAMESPACE}
      data-cal-link={CAL_LINK}
      data-cal-config={JSON.stringify({
        layout: CAL_CONFIG.layout,
        useSlotsViewOnSmallScreen: CAL_CONFIG.useSlotsViewOnSmallScreen,
        theme: CAL_CONFIG.theme,
      })}
      className={cn(
        "h-12 w-full rounded-full border-0 px-8 text-base font-bold shadow-none transition-colors duration-150 sm:w-auto",
        styles,
        className
      )}
    >
      {children}
    </Button>
  );
}
