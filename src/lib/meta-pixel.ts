export const META_PIXEL_ID = "2140215976635944";

declare global {
  interface Window {
    fbq?: (
      command: "init" | "track" | "trackCustom",
      eventOrId: string,
      params?: Record<string, unknown>,
    ) => void;
    _fbq?: Window["fbq"];
  }
}

export function trackMetaEvent(
  event: string,
  params?: Record<string, unknown>,
) {
  if (typeof window === "undefined" || typeof window.fbq !== "function") return;
  window.fbq("track", event, params);
}

/** PDF / form lead — fire once per successful submit */
export function trackLeadConversion(params?: Record<string, unknown>) {
  trackMetaEvent("Lead", params);
}

/**
 * booking conversions. deduped per session so embed callback + thank-you
 * redirect (or ?booked=1) don't double-count the same booking.
 */
export function trackBookingConversions(params?: Record<string, unknown>) {
  if (alreadyTracked("booking:Schedule")) return;
  markTracked("booking:Schedule");
  trackMetaEvent("Schedule", params);
  trackMetaEvent("Lead", params);
}

function alreadyTracked(key: string) {
  if (typeof window === "undefined") return true;
  try {
    return sessionStorage.getItem(`meta:${key}`) === "1";
  } catch {
    return false;
  }
}

function markTracked(key: string) {
  if (typeof window === "undefined") return;
  try {
    sessionStorage.setItem(`meta:${key}`, "1");
  } catch {
    // private mode / blocked storage — still fire events above
  }
}
