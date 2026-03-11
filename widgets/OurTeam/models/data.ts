import { COMPANY_LINKS } from "@/shared/consts";

export const OWNERS = [
  {
    id: "oleksiiOwner",
    src: "/team/oleksiy.png",
    links: COMPANY_LINKS.Oleksiy,
  },
  {
    id: "oleksandrOwner",
    src: "/team/olexandr.png",
    links: COMPANY_LINKS.Oleksandr,
  },
] as const;

export const WORKERS = [
  { member: "yulia", src: "/team/yulia.png" },
  { member: "artemMarketing", src: "/team/artem.png" },
  { member: "zakhar", src: "/team/zakhar.png" },
  { member: "yaroslav", src: "/team/yaroslav.png" },
  { member: "anton", src: "/team/anton.png" },
  { member: "dmytroLeadFrontend", src: "/team/dmitro-web.png" },
  { member: "anastasia", src: "/team/anastasia.png" },
  { member: "daniel", src: "/team/daniel.png" },
  { member: "artemBackend", src: "/team/artem-back.png" },
  { member: "dmytroFrontendMobile", src: "/team/dmitro-mobile.png" },
] as const;
