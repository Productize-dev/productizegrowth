"use client";

import { useEffect } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

import { trackBookingConversions } from "@/lib/meta-pixel";

/**
 * fallback when cal.com "redirect on booking" lands on /demo?booked=1
 * (e.g. booking opened outside the embed).
 */
export function DemoBookingTracker() {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    if (searchParams.get("booked") !== "1") return;

    trackBookingConversions({ content_name: "scope-call" });

    const next = new URLSearchParams(searchParams.toString());
    next.delete("booked");
    const query = next.toString();
    router.replace(query ? `${pathname}?${query}` : pathname, { scroll: false });
  }, [pathname, router, searchParams]);

  return null;
}
