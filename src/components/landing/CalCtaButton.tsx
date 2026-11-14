"use client";

import { Button } from "@/components/ui/button";
import { CAL_CONFIG, CAL_LINK, CAL_NAMESPACE } from "@/lib/cal";
import { cn } from "@/lib/utils";

type CalCtaButtonProps = {
  children: React.ReactNode;
  className?: string;
  variant?: "ink" | "gold";
  size?: "default" | "hero";
};

export function CalCtaButton({
  children,
  className,
  variant = "ink",
  size = "default",
}: CalCtaButtonProps) {
  const styles =
    variant === "gold"
      ? "bg-gold text-ink hover:bg-ink hover:text-bone"
      : "bg-ink text-bone hover:bg-gold hover:text-ink";

  const sizeStyles =
    size === "hero"
      ? "h-16 !h-16 w-full max-w-xl rounded-full border-0 px-10 text-lg leading-none font-black shadow-[0_18px_50px_-10px_rgba(244,117,33,0.7)] transition-[transform,colors,box-shadow] duration-200 hover:-translate-y-0.5 hover:shadow-[0_22px_56px_-8px_rgba(244,117,33,0.85)] sm:!h-[4.25rem] sm:w-auto sm:min-w-[20rem] sm:text-xl animate-cta-glow"
      : "h-12 w-full rounded-full border-0 px-8 text-base font-bold shadow-none transition-colors duration-150 sm:w-auto";

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
        sizeStyles,
        styles,
        "inline-flex items-center justify-center",
        className
      )}
    >
      {children}
    </Button>
  );
}
