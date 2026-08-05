export const CAL_LINK = "manuel-vargas-2fqx5n/scope-call";
export const CAL_NAMESPACE = "scope-call";

/** matches site --bone / --ink / --gold */
const BONE = "#fcf5eb";
const BONE_SUBTLE = "#f3e8d8";
const BONE_MUTED = "#fff8ef";
const INK = "#0a0a0a";
const GOLD = "#f47521";
const GOLD_HOVER = "#d96212";

export const CAL_CONFIG = {
  layout: "month_view" as const,
  useSlotsViewOnSmallScreen: "true" as const,
  theme: "light" as const,
};

export const CAL_UI = {
  theme: "light" as const,
  hideEventTypeDetails: false,
  layout: "month_view" as const,
  colorScheme: "light",
  styles: {
    branding: {
      brandColor: GOLD,
    },
  },
  cssVarsPerTheme: {
    light: {
      "cal-brand": GOLD,
      "cal-brand-emphasis": GOLD_HOVER,
      "cal-brand-text": "#ffffff",
      "cal-brand-subtle": "#f5b884",
      "cal-brand-accent": "#ffffff",

      "cal-text": INK,
      "cal-text-emphasis": INK,
      "cal-text-subtle": "#5c5348",
      "cal-text-muted": "#8a7f72",
      "cal-text-inverted": BONE,

      "cal-bg": BONE,
      "cal-bg-emphasis": BONE_SUBTLE,
      "cal-bg-subtle": BONE_MUTED,
      "cal-bg-muted": BONE,
      "cal-bg-inverted": INK,

      "cal-border": "#ead9c4",
      "cal-border-emphasis": INK,
      "cal-border-subtle": "#ead9c4",
      "cal-border-muted": "#f0e6d8",

      "cal-border-booker": "transparent",
      "cal-border-booker-width": "0px",

      radius: "0.75rem",
    },
    dark: {
      "cal-brand": GOLD,
      "cal-brand-emphasis": GOLD_HOVER,
      "cal-brand-text": "#ffffff",
      "cal-bg": BONE,
      "cal-bg-emphasis": BONE_SUBTLE,
      "cal-bg-subtle": BONE_MUTED,
      "cal-text": INK,
      "cal-text-emphasis": INK,
      "cal-border-booker": "transparent",
      "cal-border-booker-width": "0px",
    },
  },
};
