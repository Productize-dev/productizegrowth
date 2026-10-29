import type { Metadata } from "next";

import { getMessages, type Locale, type ServiceSlug } from "@/messages";

export const serviceSlugs = [
  "sistema",
  "automatizacion",
  "web",
  "ads",
] as const satisfies readonly ServiceSlug[];

export function isService(value: string): value is ServiceSlug {
  return (serviceSlugs as readonly string[]).includes(value);
}

export function serviceMetadata(locale: Locale, slug: ServiceSlug): Metadata {
  const page = getMessages(locale).services[slug];
  return {
    title: page.metaTitle,
    description: page.metaDescription,
  };
}
