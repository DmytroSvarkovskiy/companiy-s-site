import { NAV_HASH } from "@/shared/consts";

export type DesktopNavItem = {
  key: string;
  href: `#${string}`;
  children?: readonly {
    key: string;
    href: `#${string}`;
  }[];
};

export const DESKTOP_NAV_ITEMS = [
  {
    key: "ourProducts",
    href: NAV_HASH.ourProducts,
    children: [],
  },
  {
    key: "portfolio",
    href: NAV_HASH.portfolio,
    children: [
      { key: "restup", href: NAV_HASH.restup },
      { key: "ecommerce", href: NAV_HASH.ecommerce },
    ],
  },
  {
    key: "services",
    href: NAV_HASH.services,
    children: [],
  },
  {
    key: "aboutUs",
    href: NAV_HASH.aboutUs,
    children: [],
  },
] as const satisfies readonly DesktopNavItem[];
