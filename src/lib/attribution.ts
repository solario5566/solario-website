/**
 * First-touch / latest-touch attribution for paid and organic landing data.
 * Persisted in localStorage with in-memory fallback if storage is unavailable.
 */

export const SOLARIO_ATTRIBUTION_STORAGE_KEY = "solario_attribution_v1";

const CAMPAIGN_PARAM_KEYS = [
  "utm_source",
  "utm_medium",
  "utm_campaign",
  "utm_term",
  "utm_content",
  "gclid",
  "gbraid",
  "wbraid",
] as const;

export interface AttributionTouch {
  utm_source: string;
  utm_medium: string;
  utm_campaign: string;
  utm_term: string;
  utm_content: string;
  gclid: string;
  gbraid: string;
  wbraid: string;
  landing_page: string;
  landing_url: string;
}

interface PersistedState {
  v: 1;
  first: AttributionTouch;
  latest: AttributionTouch;
}

const EMPTY_TOUCH: AttributionTouch = {
  utm_source: "",
  utm_medium: "",
  utm_campaign: "",
  utm_term: "",
  utm_content: "",
  gclid: "",
  gbraid: "",
  wbraid: "",
  landing_page: "",
  landing_url: "",
};

let memoryFallback: PersistedState | null = null;

function normalizeSearch(search: string): string {
  if (!search) return "";
  return search.startsWith("?") ? search : `?${search}`;
}

function hasCampaignParams(search: string): boolean {
  const q = normalizeSearch(search);
  const params = new URLSearchParams(q);
  return CAMPAIGN_PARAM_KEYS.some((k) => {
    const v = params.get(k);
    return v !== null && v !== "";
  });
}

function touchFromUrl(search: string, pathname: string, fullHref: string): AttributionTouch {
  const q = normalizeSearch(search);
  const params = new URLSearchParams(q);
  return {
    utm_source: params.get("utm_source") ?? "",
    utm_medium: params.get("utm_medium") ?? "",
    utm_campaign: params.get("utm_campaign") ?? "",
    utm_term: params.get("utm_term") ?? "",
    utm_content: params.get("utm_content") ?? "",
    gclid: params.get("gclid") ?? "",
    gbraid: params.get("gbraid") ?? "",
    wbraid: params.get("wbraid") ?? "",
    landing_page: pathname || "/",
    landing_url: fullHref,
  };
}

function loadState(): PersistedState | null {
  if (memoryFallback) return memoryFallback;
  if (typeof window === "undefined") return null;
  try {
    const raw = window.localStorage.getItem(SOLARIO_ATTRIBUTION_STORAGE_KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw) as PersistedState;
    if (parsed?.v !== 1 || !parsed.first || !parsed.latest) return null;
    return parsed;
  } catch {
    return null;
  }
}

function saveState(state: PersistedState): void {
  memoryFallback = state;
  if (typeof window === "undefined") return;
  try {
    window.localStorage.setItem(SOLARIO_ATTRIBUTION_STORAGE_KEY, JSON.stringify(state));
  } catch {
    /* use memoryFallback only */
  }
}

/**
 * Call on route changes + initial load. Updates latest touch only when campaign params are present.
 * Initializes first touch once per browser (localStorage) using the current URL (including organic visits).
 */
export function syncAttributionFromLocation(pathname: string, search: string, fullHref: string): void {
  if (typeof window === "undefined") return;

  const path = pathname || "/";
  const href = fullHref || `${window.location.origin}${path}${normalizeSearch(search)}`;

  let state = loadState();
  const incomingTouch = touchFromUrl(search, path, href);

  if (!state) {
    const first: AttributionTouch = {
      ...incomingTouch,
      landing_page: path,
      landing_url: href,
    };
    state = { v: 1, first, latest: { ...first } };
    saveState(state);
    return;
  }

  if (hasCampaignParams(search)) {
    const latest: AttributionTouch = {
      ...incomingTouch,
      landing_page: path,
      landing_url: href,
    };
    state = { ...state, latest };
    saveState(state);
  }
}

function touchToSubmitPrefix(touch: AttributionTouch, prefix: "first" | "latest"): Record<string, string> {
  const p = prefix === "first" ? "first_" : "latest_";
  return {
    [`${p}utm_source`]: touch.utm_source,
    [`${p}utm_medium`]: touch.utm_medium,
    [`${p}utm_campaign`]: touch.utm_campaign,
    [`${p}utm_term`]: touch.utm_term,
    [`${p}utm_content`]: touch.utm_content,
    [`${p}gclid`]: touch.gclid,
    [`${p}gbraid`]: touch.gbraid,
    [`${p}wbraid`]: touch.wbraid,
    [`${p}landing_page`]: touch.landing_page,
    [`${p}landing_url`]: touch.landing_url,
  };
}

/** Flat fields appended to the Netlify lead form at submit time. */
export function getAttributionFieldsForLeadSubmit(pagePathAtSubmit: string): Record<string, string> {
  const state = loadState();
  const base: Record<string, string> = {
    ...touchToSubmitPrefix(state?.first ?? EMPTY_TOUCH, "first"),
    ...touchToSubmitPrefix(state?.latest ?? EMPTY_TOUCH, "latest"),
    page_path_at_submit: pagePathAtSubmit,
    referrer: typeof document !== "undefined" ? document.referrer ?? "" : "",
    submission_timestamp: new Date().toISOString(),
  };
  return base;
}
