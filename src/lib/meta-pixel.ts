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
