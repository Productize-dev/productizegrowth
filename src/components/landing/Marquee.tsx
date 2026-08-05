import { cn } from "@/lib/utils";

type MarqueeProps = {
  items: string[];
  className?: string;
};

export function Marquee({ items, className }: MarqueeProps) {
  const loop = [...items, ...items];

  return (
    <div
      className={cn(
        "overflow-hidden border-y border-ink bg-gold py-3 text-ink",
        className
      )}
    >
      <div className="marquee-track gap-8 px-4">
        {loop.map((item, i) => (
          <span
            key={`${item}-${i}`}
            className="flex shrink-0 items-center gap-8 text-sm font-black tracking-wide"
          >
            {item}
            <span aria-hidden className="text-ink/40">
              ★
            </span>
          </span>
        ))}
      </div>
    </div>
  );
}
