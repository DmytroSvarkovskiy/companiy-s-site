import { NAV_HASH } from "@/shared/consts";

export type NavItem = {
  key: string;
  href: `#${string}`;
  children?: readonly NavItem[];
};

export const NAV_ITEMS = [
  { key: "showcases", href: NAV_HASH.showcases, children: [] },

  {
    key: "ourProducts",
    href: "#our-products",
    children: [
      { key: "restup", href: NAV_HASH.restup },
      { key: "ecommerce", href: NAV_HASH.ecommerce },
    ],
  },

  {
    key: "services",
    href: NAV_HASH.services,
    children: [
      { key: "techStack", href: NAV_HASH.techStack },
      { key: "ourApproach", href: NAV_HASH.ourApproach },
    ],
  },

  {
    key: "aboutUs",
    href: NAV_HASH.aboutUs,
    children: [
      { key: "ourTeam", href: NAV_HASH.ourTeam },
      { key: "kitapp", href: NAV_HASH.kitapp },
      { key: "partners", href: NAV_HASH.partners },
    ],
  },
] as const satisfies readonly NavItem[];
