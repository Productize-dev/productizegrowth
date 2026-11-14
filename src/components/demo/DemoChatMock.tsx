import { FloatingWindow } from "@/components/landing/FloatingWindow";
import { SectionReveal } from "@/components/landing/SectionReveal";

export function DemoChatMock() {
  return (
    <SectionReveal className="border-b border-ink/10 bg-bone px-4 py-14 sm:px-6 sm:py-20">
      <div className="mx-auto max-w-3xl">
        <p className="mb-2 text-xs font-bold tracking-wide text-gold">
          the 9 pm problem
        </p>
        <h2 className="max-w-xl text-2xl font-black leading-[1.05] text-ink sm:text-4xl">
          without us, the lead dies.{" "}
          <span className="text-gold">with us, they book.</span>
        </h2>

        <div className="mt-8 grid gap-4 sm:mt-10 sm:grid-cols-2 sm:gap-5">
          <FloatingWindow
            label="before — 9:02 pm"
            tone="bone"
            float="a"
            className="reveal-stagger-1"
          >
            <div className="space-y-3 bg-[#fff8ef] p-4 sm:p-5">
              <Bubble side="them" time="9:02 pm">
                hey, do you have openings this week?
              </Bubble>
              <Bubble side="system" muted>
                …no reply
              </Bubble>
              <p className="pt-1 text-xs font-bold text-ink/40">
                3 hours later → booked with someone else
              </p>
            </div>
          </FloatingWindow>

          <FloatingWindow
            label="with productize — 9:02 pm"
            tone="bone"
            float="b"
            className="reveal-stagger-2 border-gold/40 shadow-[0_16px_40px_-18px_rgba(244,117,33,0.35)]"
          >
            <div className="space-y-3 bg-[#fff8ef] p-4 sm:p-5">
              <Bubble side="them" time="9:02 pm">
                hey, do you have openings this week?
              </Bubble>
              <Bubble side="us" time="9:02 pm">
                yes — got a few slots. want tuesday 10am or thursday 2pm?
              </Bubble>
              <Bubble side="them" time="9:03 pm">
                tuesday works
              </Bubble>
              <Bubble side="us" time="9:03 pm">
                locked in. see you tuesday at 10.
              </Bubble>
              <p className="pt-1 text-xs font-bold text-gold">
                booked on your calendar · while you slept
              </p>
            </div>
          </FloatingWindow>
        </div>
      </div>
    </SectionReveal>
  );
}

function Bubble({
  children,
  side,
  time,
  muted = false,
}: {
  children: React.ReactNode;
  side: "them" | "us" | "system";
  time?: string;
  muted?: boolean;
}) {
  const align =
    side === "them" ? "items-start" : side === "us" ? "items-end" : "items-center";
  const bubble =
    side === "them"
      ? "rounded-2xl rounded-tl-sm bg-white text-ink border border-ink/10"
      : side === "us"
        ? "rounded-2xl rounded-tr-sm bg-gold text-ink"
        : "rounded-full border border-dashed border-ink/20 bg-transparent text-ink/35 italic";

  return (
    <div className={`flex flex-col gap-1 ${align}`}>
      {time ? (
        <span className="px-1 font-mono text-[10px] text-ink/35">{time}</span>
      ) : null}
      <div
        className={`max-w-[92%] px-3 py-2 text-sm leading-snug ${bubble} ${
          muted ? "animate-pulse" : ""
        }`}
      >
        {children}
      </div>
    </div>
  );
}
