import Image from "next/image";
import { GlassCard } from "@/entities";
import { TitleSection } from "@/entities/index.client";
import { getScopedI18n } from "@/lib";
import { NAV_HASH } from "@/shared/consts";
import { cn } from "@/shared/utils";

export const TechnicalStack = async () => {
  const id = NAV_HASH.techStack.replace(/^#/, "");
  const t = await getScopedI18n("technicalStack");
  const items = [
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
  return (
    <section className="section container" id={id}>
      <TitleSection title={t("title")} subtitle={t("description")} />

      <ul className="flex flex-col">
        {items.map((item, index) => (
          <li
            key={item.number}
            className={cn(
              "flex flex-col gap-6",
              "py-8",
              "lg:grid lg:grid-cols-[120px_minmax(220px,320px)_1fr] lg:items-center lg:gap-x-8 lg:py-10 ",
              "2xl:grid-cols-[200px_minmax(220px,440px)_1fr]",
              index !== 0 && "border-t border-phone-btn",
              "mx-8 lg:mx-0",
            )}
          >
            <p className="hidden font-semibold lg:block text-phone-btn text-64 2xl:text-90 leading-none">
              {item.number}
            </p>

            <p className="text-block-fg text-28 md:text-32 2xl:text-48 leading-none font-semibold">
              {item.title}
            </p>

            <div className="mt-6 lg:mt-0 flex flex-wrap gap-4">
              {item.items.map((el) => (
                <GlassCard hoverGradient key={el.title} radius={14} className="w-fit px-4 py-2">
                  <div className="w-fit min-h-14  flex items-center gap-3">
                    <Image
                      src={el.icon}
                      alt={el.title}
                      width={40}
                      height={40}
                      className="size-8 lg:size-10 shrink-0"
                    />
                    <p className="text-20 lg:text-24 leading-none whitespace-nowrap">{el.title}</p>
                  </div>
                </GlassCard>
              ))}
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
};
