export const LOCALES = ["en", "uk"] as const;
export type TLang = (typeof LOCALES)[number];

export const COOKIES_KEYS = { cookies: "cookies", theme: "theme" };

export const NAV_HASH = {
  showcases: "#showcases",
  ourProducts: "#our-products",
  portfolio: "#portfolio",
  services: "#services",
  aboutUs: "#about-us",
  contactUs: "#contact-us",
  restup: "#restup",
  ecommerce: "#ecommerce",
  techStack: "#tech-stack",
  ourApproach: "#our-approach",
  ourTeam: "#our-team",
  kitapp: "#kitapp",
  partners: "#partners",
} as const;
