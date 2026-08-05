"use client";

import { useEffect } from "react";
import Cal, { getCalApi } from "@calcom/embed-react";

import { CAL_CONFIG, CAL_LINK, CAL_NAMESPACE, CAL_UI } from "@/lib/cal";
import { cn } from "@/lib/utils";

type CalInlineEmbedProps = {
  className?: string;
};

export function CalInlineEmbed({ className }: CalInlineEmbedProps) {
  useEffect(() => {
    void (async () => {
      const cal = await getCalApi({ namespace: CAL_NAMESPACE });
      cal("ui", CAL_UI);
    })();
  }, []);

  return (
    <div className={cn("h-[560px] w-full min-h-[420px] sm:h-[640px]", className)}>
      <Cal
        namespace={CAL_NAMESPACE}
        calLink={CAL_LINK}
        style={{ width: "100%", height: "100%", overflow: "scroll" }}
        config={{
          layout: CAL_CONFIG.layout,
          useSlotsViewOnSmallScreen: CAL_CONFIG.useSlotsViewOnSmallScreen,
          theme: CAL_CONFIG.theme,
        }}
      />
    </div>
  );
}
