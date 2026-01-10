export const LOCALES = ["en", "uk"] as const;
export type TLang = (typeof LOCALES)[number];

export const COOKIES_KEYS = { cookies: "cookies", theme: "theme" };
