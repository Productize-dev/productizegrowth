"use client";

import { useEffect } from "react";

import { trackBookingConversions } from "@/lib/meta-pixel";

/**
 * fires schedule + lead if cal.com redirected here (dashboard "redirect on booking")
 * without going through the embed callback. deduped against embed path.
 */
export function ThankYouTracker() {
  useEffect(() => {
    trackBookingConversions({ content_name: "scope-call" });
  }, []);

  return null;
}
