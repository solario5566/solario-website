import { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import { syncAttributionFromLocation } from "@/lib/attribution";
import { trackEvent, trackPageView } from "@/lib/analytics";

/**
 * SPA attribution sync, GA4 virtual pageviews (skips first paint — initial load handled by `index.html` gtag),
 * and lightweight delegated click events for tel/mailto/contact CTAs.
 */
const AnalyticsIntegration = () => {
  const location = useLocation();
  const isFirstPageView = useRef(true);

  useEffect(() => {
    const href =
      typeof window !== "undefined"
        ? `${window.location.origin}${location.pathname}${location.search}`
        : "";
    syncAttributionFromLocation(location.pathname, location.search, href);
  }, [location.pathname, location.search]);

  useEffect(() => {
    const pathWithSearch = `${location.pathname}${location.search}`;
    if (isFirstPageView.current) {
      isFirstPageView.current = false;
      return;
    }
    trackPageView(pathWithSearch, typeof document !== "undefined" ? document.title : undefined);
  }, [location.pathname, location.search]);

  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      const el = (e.target as Element | null)?.closest?.("a");
      if (!el) return;
      const href = el.getAttribute("href");
      if (!href) return;
      if (href.startsWith("tel:")) {
        trackEvent("phone_click", { link_url: href });
        return;
      }
      if (href.startsWith("mailto:")) {
        trackEvent("email_click", { link_url: href });
        return;
      }
      try {
        const u = new URL(href, window.location.origin);
        const path = u.pathname.replace(/\/$/, "") || "/";
        if (u.origin === window.location.origin && path === "/contact") {
          const text = (el.textContent ?? "").trim().slice(0, 120);
          trackEvent("quote_cta_click", { destination: "/contact", link_text: text });
        }
      } catch {
        /* ignore invalid href */
      }
    };
    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, []);

  return null;
};

export default AnalyticsIntegration;
