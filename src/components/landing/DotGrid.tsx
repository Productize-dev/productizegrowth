import { cn } from "@/lib/utils";

type DotGridProps = {
  className?: string;
  variant?: "bone" | "ink";
  children?: React.ReactNode;
};

export function DotGrid({
  className,
  variant = "bone",
  children,
}: DotGridProps) {
  return (
    <div
      className={cn(
        variant === "ink" ? "bg-dot-grid-ink" : "bg-dot-grid",
        className
      )}
    >
      {children}
    </div>
  );
}
