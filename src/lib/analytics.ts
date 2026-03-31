/** GA4 measurement ID — must match `index.html` gtag loader. */
export const GA_MEASUREMENT_ID = "G-CWNZEVSGQH";

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

function getGtag(): typeof window.gtag | undefined {
  if (typeof window === "undefined") return undefined;
  return window.gtag;
}

/**
 * Sends a GA4 page_view via config (SPA-safe; does not load scripts).
 * Skips silently if gtag is not available.
 */
export function trackPageView(pagePath: string, pageTitle?: string): void {
  const gtag = getGtag();
  if (!gtag) return;
  gtag("config", GA_MEASUREMENT_ID, {
    page_path: pagePath,
    page_title: pageTitle ?? (typeof document !== "undefined" ? document.title : ""),
  });
}

/**
 * Sends a GA4 event. Safe no-op when gtag is missing.
 */
export function trackEvent(eventName: string, params?: Record<string, unknown>): void {
  const gtag = getGtag();
  if (!gtag) return;
  gtag("event", eventName, params ?? {});
}
