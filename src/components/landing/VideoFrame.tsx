import { cn } from "@/lib/utils";

type VideoFrameProps = {
  placeholder: string;
  className?: string;
  compact?: boolean;
  showChrome?: boolean;
};

export function VideoFrame({
  placeholder,
  className,
  compact = false,
  showChrome = true,
}: VideoFrameProps) {
  return (
    <div
      className={cn(
        "w-full overflow-hidden border border-ink bg-ink",
        !compact && "max-w-full",
        className
      )}
    >
      {showChrome ? (
        <div className="flex items-center gap-1.5 border-b border-ink/20 bg-bone px-3 py-2">
          <span className="size-2.5 shrink-0 rounded-full bg-[#ff5f57]" aria-hidden />
          <span className="size-2.5 shrink-0 rounded-full bg-[#febc2e]" aria-hidden />
          <span className="size-2.5 shrink-0 rounded-full bg-[#28c840]" aria-hidden />
          <span className="ml-2 truncate font-mono text-[10px] text-ink/50">
            demo.mov
          </span>
        </div>
      ) : null}
      <div
        className={cn(
          "relative flex flex-col items-center justify-center bg-ink",
          compact ? "aspect-video" : "aspect-[9/16] max-h-[min(58vh,480px)]"
        )}
      >
        <div className="flex size-12 items-center justify-center border border-gold text-gold">
          <svg
            viewBox="0 0 24 24"
            fill="currentColor"
            className="ml-0.5 size-5"
            aria-hidden
          >
            <path d="M8 5v14l11-7L8 5z" />
          </svg>
        </div>
        <p className="mt-3 px-3 text-center text-xs font-medium text-bone/70">
          {placeholder}
        </p>
      </div>
    </div>
  );
}
