import { cn } from "@/lib/utils";

type FloatingWindowProps = {
  label?: string;
  children?: React.ReactNode;
  className?: string;
  tone?: "bone" | "peach" | "mint" | "ink";
  float?: "none" | "a" | "b" | "c";
  /** lift / scale on hover */
  interactive?: boolean;
};

const tones = {
  bone: "bg-bone",
  peach: "bg-[#fff0e0]",
  mint: "bg-[#eef6ef]",
  ink: "bg-ink text-bone",
};

const floats = {
  none: "",
  a: "animate-float-soft",
  b: "animate-float-soft-delay",
  c: "animate-float-soft-delay-2",
};

export function FloatingWindow({
  label = "demo.mov",
  children,
  className,
  tone = "bone",
  float = "none",
  interactive = false,
}: FloatingWindowProps) {
  const hasFloat = float !== "none";

  const card = (
    <div
      className={cn(
        "overflow-hidden rounded-xl border border-ink/15 bg-white shadow-[0_12px_40px_-18px_rgba(10,10,10,0.35)]",
        tones[tone],
        interactive &&
          "cursor-default transition-[transform,box-shadow,border-color] duration-300 ease-out will-change-transform hover:-translate-y-2 hover:scale-[1.03] hover:border-gold/50 hover:shadow-[0_24px_50px_-20px_rgba(244,117,33,0.45)] active:scale-[1.01]",
        !hasFloat && className
      )}
    >
      <div
        className={cn(
          "flex items-center gap-1.5 border-b px-3 py-2 backdrop-blur-sm",
          tone === "ink"
            ? "border-bone/10 bg-bone/10"
            : "border-ink/10 bg-white/80"
        )}
      >
        <span className="size-2.5 rounded-full bg-[#ff5f57]" aria-hidden />
        <span className="size-2.5 rounded-full bg-[#febc2e]" aria-hidden />
        <span className="size-2.5 rounded-full bg-[#28c840]" aria-hidden />
        <span
          className={cn(
            "ml-2 truncate font-mono text-[10px]",
            tone === "ink" ? "text-bone/45" : "text-ink/45"
          )}
        >
          {label}
        </span>
      </div>
      <div className="relative">{children}</div>
    </div>
  );

  if (!hasFloat) return card;

  return (
    <div className={cn(floats[float], className)}>{card}</div>
  );
}
