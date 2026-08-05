import { cn } from "@/lib/utils";

type StickerProps = {
  children: React.ReactNode;
  className?: string;
  rotate?: number;
  variant?: "gold" | "ink" | "outline";
};

export function Sticker({
  children,
  className,
  rotate = -6,
  variant = "gold",
}: StickerProps) {
  const styles = {
    gold: "border-gold bg-gold text-ink",
    ink: "border-ink bg-ink text-bone",
    outline: "border-ink bg-bone text-ink",
  };

  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full border-2 px-3 py-1 text-xs font-black tracking-wide shadow-sm",
        styles[variant],
        className
      )}
      style={{ transform: `rotate(${rotate}deg)` }}
    >
      {children}
    </span>
  );
}
