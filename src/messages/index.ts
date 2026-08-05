import { en } from "./en";
import { es } from "./es";
import type { Locale, Messages } from "./types";

export type { Locale, Messages };

export const locales: Locale[] = ["es", "en"];

export function isLocale(value: string): value is Locale {
  return value === "es" || value === "en";
}

export function getMessages(locale: Locale): Messages {
  return locale === "en" ? en : es;
}
