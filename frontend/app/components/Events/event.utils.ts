import { withBasePath } from "@/lib/basePath";

import type { EventRecord } from "./event.types";

const SPLASH_IMAGES = [
  "/splash/crossfi-mainnet.svg",
  "/splash/morph.svg",
  "/splash/akure.svg",
  "/splash/summer-crash.svg",
  "/splash/live-training.svg",
  "/splash/predemo.svg",
  "/splash/friday-games.svg",
  "/splash/live-chat.svg",
] as const;

const KEYWORD_IMAGE_MAP: [RegExp, string][] = [
  [/lisk/i, "/splash/morph.svg"],
  [/crossfi/i, "/splash/crossfi-mainnet.svg"],
  [/celo/i, "/splash/live-training.svg"],
  [/morph/i, "/splash/morph.svg"],
  [/akure|futa/i, "/splash/akure.svg"],
  [/summer/i, "/splash/summer-crash.svg"],
  [/demo|predemo/i, "/splash/predemo.svg"],
  [/game|friday/i, "/splash/friday-games.svg"],
  [/train|bootcamp|cohort/i, "/splash/live-training.svg"],
  [/chat|community/i, "/splash/live-chat.svg"],
];

function isDirectImageUrl(url: string): boolean {
  return /\.(png|jpe?g|gif|webp|svg)(\?|$)/i.test(url);
}

export function getEventImage(event: EventRecord, index = 0): string {
  if (event.media && isDirectImageUrl(event.media)) {
    return event.media;
  }

  const haystack = `${event.company ?? ""} ${event.eventName} ${event.eventDescription} ${event.eventCategory}`;
  for (const [pattern, path] of KEYWORD_IMAGE_MAP) {
    if (pattern.test(haystack)) return withBasePath(path);
  }

  return withBasePath(SPLASH_IMAGES[index % SPLASH_IMAGES.length]);
}

export function formatEventDate(dateStr: string): string {
  const parsed = new Date(dateStr);
  if (Number.isNaN(parsed.getTime())) return dateStr;
  return parsed.toLocaleDateString("en-NG", {
    weekday: "short",
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export function getEventYear(dateStr: string): string {
  const parsed = new Date(dateStr);
  if (Number.isNaN(parsed.getTime())) return dateStr.slice(0, 4);
  return String(parsed.getFullYear());
}

export function isPastEvent(dateStr: string): boolean {
  const parsed = new Date(dateStr);
  if (Number.isNaN(parsed.getTime())) return true;
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  return parsed < today;
}

export function normalizeCategory(category: string): string {
  const trimmed = category.trim();
  if (!trimmed) return trimmed;
  return trimmed.charAt(0).toUpperCase() + trimmed.slice(1).toLowerCase();
}

export function getUniqueCategories(events: EventRecord[]): string[] {
  const map = new Map<string, string>();
  for (const event of events) {
    const raw = event.eventCategory?.trim();
    if (!raw) continue;
    const key = raw.toLowerCase();
    if (!map.has(key)) map.set(key, normalizeCategory(raw));
  }
  return Array.from(map.values()).sort();
}

export function filterByCategory(
  events: EventRecord[],
  filter: string
): EventRecord[] {
  if (filter === "all") return events;
  const target = filter.toLowerCase();
  return events.filter(
    (e) => e.eventCategory?.trim().toLowerCase() === target
  );
}

export function getUniqueCompanies(events: EventRecord[]): string[] {
  const map = new Map<string, string>();
  for (const event of events) {
    const raw = event.company?.trim();
    if (!raw) continue;
    const key = raw.toLowerCase();
    if (!map.has(key)) {
      map.set(key, raw.charAt(0).toUpperCase() + raw.slice(1));
    }
  }
  return Array.from(map.values()).sort();
}
