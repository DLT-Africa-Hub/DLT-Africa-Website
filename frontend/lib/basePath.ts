/**
 * Must match `basePath` in `next.config.mjs`. Public files (`/images/...`, `/splash/...`)
 * need this prefix in static export; Next only auto-prefixes `_next` assets.
 */
export const BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH ?? "/bootcamp";

export function withBasePath(path: string): string {
  if (!path.startsWith("/")) return path;
  if (!BASE_PATH) return path;
  return `${BASE_PATH}${path}`;
}

/**
 * True when `pathname` from `usePathname()` is the app root.
 * Next omits `basePath` from `usePathname()`, so the home route is always "/".
 */
export function isHomePathname(pathname: string): boolean {
  const path = pathname.replace(/\/+$/, "") || "/";
  return path === "/";
}
