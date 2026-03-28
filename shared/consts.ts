export const LOCALES = ["en", "uk"] as const;
export type TLang = (typeof LOCALES)[number];

export const COOKIES_KEYS = { cookies: "cookies-kit-app", theme: "theme" };

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

export const COMPANY_LINKS = {
  Oleksiy: {
    linkedin: "https://www.linkedin.com/in/oleksii-fedorenko-7683a668/",
    facebook: "https://www.facebook.com/alexei.fedorenko",
  },
  Oleksandr: {
    linkedin: "https://www.linkedin.com/in/alparhomenko/",
    facebook: "https://www.facebook.com/aleksandr.parhomenko.787947",
  },
  upwork: "https://www.upwork.com/agencies/1009349505090379776/",
  beehance: "https://www.behance.net/kitapp_pro",
  phone1: "+380914810023",
  phone2: "+380990079547",
  email: "info@kitapp.pro",
  facebook: "https://www.facebook.com/KITGlobalAgency",
  linkedin: "https://www.linkedin.com/company/kit-global-llc",
} as const;
