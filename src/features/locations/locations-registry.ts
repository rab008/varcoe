/**
 * Location content registry — maps a canonical path tail to its `LocationContent`:
 * areas keyed by `area` (e.g. `"north-shore"`), suburbs by `area/suburb`
 * (e.g. `"north-shore/takapuna"`). Both location routes look up by this key; a
 * miss falls back to the thin (noindex) placeholder.
 */

import type { LocationContent } from "@/features/locations/location-content";
import { eastAuckland } from "@/features/locations/east-auckland-content";
import { eastAucklandLocations } from "@/features/locations/content/east-auckland";
import { aucklandCbdLocations } from "@/features/locations/content/auckland-cbd";
import { northShoreLocations } from "@/features/locations/content/north-shore";
import { southAucklandLocations } from "@/features/locations/content/south-auckland";
import { westAucklandLocations } from "@/features/locations/content/west-auckland";
import { wellingtonPenroseLocations } from "@/features/locations/content/wellington-penrose";
import { manurewaLocations } from "@/features/locations/content/manurewa";
import { papakuraLocations } from "@/features/locations/content/papakura";
import { waiukuLocations } from "@/features/locations/content/waiuku";

export const locationsContent: Record<string, LocationContent> = {
  "east-auckland": eastAuckland,
  ...eastAucklandLocations,
  ...aucklandCbdLocations,
  ...northShoreLocations,
  ...southAucklandLocations,
  ...westAucklandLocations,
  ...wellingtonPenroseLocations,
  ...manurewaLocations,
  ...papakuraLocations,
  ...waiukuLocations,
};

/**
 * Look up a location's content by canonical path tail (`area` or `area/suburb`).
 * Returns `undefined` for slugs without bespoke content (→ placeholder).
 */
export function getLocationContent(key: string): LocationContent | undefined {
  return locationsContent[key];
}
