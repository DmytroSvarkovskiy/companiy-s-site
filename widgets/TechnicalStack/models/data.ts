import type { getScopedI18n } from "@/lib";

type TechnicalStackItem = {
  title: string;
  icon: string;
};

type TechnicalStackSection = {
  number: string;
  title: string;
  items: TechnicalStackItem[];
};

export const getTechnicalStackItems = (
  t: Awaited<ReturnType<typeof getScopedI18n>>,
): TechnicalStackSection[] => [
  {
    number: t("sections.development.number"),
    title: t("sections.development.title"),
    items: [
      {
        title: t("sections.development.items.reactNative"),
        icon: "/technical-stack/react.svg",
      },
      {
        title: t("sections.development.items.dart"),
        icon: "/technical-stack/dart.svg",
      },
      {
        title: t("sections.development.items.flutter"),
        icon: "/technical-stack/flutter.svg",
      },
      {
        title: t("sections.development.items.typescript"),
        icon: "/technical-stack/typescript.svg",
      },
      {
        title: t("sections.development.items.reactJs"),
        icon: "/technical-stack/react.svg",
      },
      {
        title: t("sections.development.items.nodeJs"),
        icon: "/technical-stack/node.svg",
      },
    ],
  },
  {
    number: t("sections.databases.number"),
    title: t("sections.databases.title"),
    items: [
      {
        title: t("sections.databases.items.redis"),
        icon: "/technical-stack/redis.svg",
      },
      {
        title: t("sections.databases.items.postgresql"),
        icon: "/technical-stack/postgres.svg",
      },
      {
        title: t("sections.databases.items.mongodb"),
        icon: "/technical-stack/mongo.svg",
      },
      {
        title: t("sections.databases.items.mysql"),
        icon: "/technical-stack/my_sql.svg",
      },
    ],
  },
  {
    number: t("sections.infrastructure.number"),
    title: t("sections.infrastructure.title"),
    items: [
      {
        title: t("sections.infrastructure.items.aws"),
        icon: "/technical-stack/aws.svg",
      },
      {
        title: t("sections.infrastructure.items.webrtc"),
        icon: "/technical-stack/web_rtc.svg",
      },
      {
        title: t("sections.infrastructure.items.heroku"),
        icon: "/technical-stack/heroku.svg",
      },
      {
        title: t("sections.infrastructure.items.pwa"),
        icon: "/technical-stack/pwa.svg",
      },
      {
        title: t("sections.infrastructure.items.nginx"),
        icon: "/technical-stack/nginx.svg",
      },
      {
        title: t("sections.infrastructure.items.jenkins"),
        icon: "/technical-stack/jenkins.svg",
      },
    ],
  },
];
