"use client";

import { useEffect } from "react";

import { trackMetaEvent } from "@/lib/meta-pixel";

/** fires schedule once the thank-you page mounts (conversion event). */
export function ThankYouTracker() {
  useEffect(() => {
    trackMetaEvent("Schedule");
  }, []);

  return null;
}
