"use client";

import { useEffect } from "react";
import { getCalApi } from "@calcom/embed-react";

import { CAL_NAMESPACE, CAL_UI } from "@/lib/cal";

/** Loads Cal.com click-to-open API for elements with data-cal-* attributes */
export function CalClickProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    void (async () => {
      const cal = await getCalApi({ namespace: CAL_NAMESPACE });
      cal("ui", CAL_UI);
    })();
  }, []);

  return <>{children}</>;
}
