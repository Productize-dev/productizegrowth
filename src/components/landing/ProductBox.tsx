import { cn } from "@/lib/utils";

type ProductBoxProps = {
  className?: string;
  size?: number;
};

/** open product box — dreams become something people can buy */
export function ProductBox({ className, size = 48 }: ProductBoxProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 64 64"
      fill="none"
      className={cn("text-gold", className)}
      aria-hidden
    >
      <path
        d="M12 28 L32 18 L52 28 L32 38 Z"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinejoin="round"
      />
      <path
        d="M12 28 V46 L32 56 V38"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinejoin="round"
      />
      <path
        d="M52 28 V46 L32 56"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinejoin="round"
      />
      <path
        d="M32 18 V8 M26 12 L32 8 L38 12"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
