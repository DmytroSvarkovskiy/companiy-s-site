import { useScopedI18n } from "@/lib/index.client";
import { NAV_HASH } from "@/shared/consts";

type TProductCard = {
  id: string;
  key: "restup" | "ecommerce";
  eyebrow: string;
  title: string;
  description: string;
  src: string;
  stats: {
    establishedAudience: { label: string; value: string; deltaLabel: string };
    involved: { label: string; value: string; deltaLabel: string };
    googlePlayRating: { label: string; value: string };
  };
};

export const useProjectsData = () => {
  const t = useScopedI18n("productsSection");
  const idRestup = NAV_HASH.restup.replace(/^#/, "");
  const idEComm = NAV_HASH.ecommerce.replace(/^#/, "");
  const productsCards = [
    {
      id: idRestup,
      key: "restup",
      eyebrow: t("restup.eyebrow"),
      title: t("restup.title"),
      description: t("restup.description"),
      src: "/projects/productsRestup.png",
      stats: {
        establishedAudience: {
          label: t("stats.establishedAudience"),
          value: t("stats.usersCount", { count: 567 }),
          deltaLabel: `+3,5% ▲ ${t("stats.vs30DaysAgo")}`,
        },
        involved: {
          label: t("stats.involved"),
          value: t("stats.newUsers", { count: 92 }),
          deltaLabel: `+3,5% ▲ ${t("stats.vs30DaysAgo")}`,
        },
        googlePlayRating: {
          label: t("stats.googlePlayRating"),
          value: "4.9",
        },
      },
    },
    {
      id: idEComm,
      key: "ecommerce",
      eyebrow: t("ecommerce.eyebrow"),
      title: t("ecommerce.title"),
      description: t("ecommerce.description"),
      src: "/projects/productsEcom.png",
      stats: {
        establishedAudience: {
          label: t("stats.establishedAudience"),
          value: t("stats.usersCount", { count: 241 }),
          deltaLabel: `+2,5% ▲ ${t("stats.vs30DaysAgo")}`,
        },
        involved: {
          label: t("stats.involved"),
          value: t("stats.newUsers", { count: 41 }),
          deltaLabel: `+1,5% ▲ ${t("stats.vs30DaysAgo")}`,
        },
        googlePlayRating: {
          label: t("stats.googlePlayRating"),
          value: "4.7",
        },
      },
    },
  ] satisfies TProductCard[];

  return productsCards;
};
