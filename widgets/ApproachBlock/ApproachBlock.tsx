import Image from "next/image";
import { GlassCard } from "@/entities";
import { TitleSection } from "@/entities/index.client";
import { getScopedI18n } from "@/lib";
import { Button } from "@/shared";
import { NAV_HASH } from "@/shared/consts";
import { Reveal } from "@/shared/Reveal/Reveal";
import { cn } from "@/shared/utils";
import { ContactModal } from "../index.client";

export const ApproachBlock = async () => {
  const t = await getScopedI18n("approach");
  const dataBlock = [
    { title: t("marketResearch.title"), text: t("marketResearch.text"), id: "12" },
    { title: t("technicalSpecification.title"), text: t("technicalSpecification.text"), id: "13" },

    { title: t("uxui.title"), text: t("uxui.text"), id: "16" },
    {
      title: t("productDevelopment.title"),
      text: t("productDevelopment.text"),
      id: "17",
    },
    {
      title: t("contact.title"),
      text: t("contact.text"),
      id: "14",
      render: (
        <ContactModal
          title={t("contact.title")}
          trigger={
            <Button className="w-full max-w-120" type="button">
              {t("scheduleCall")}
            </Button>
          }
        />
      ),
    },
  ];
  const id = NAV_HASH.ourApproach.replace(/^#/, "");
  return (
    <div className="relative">
      <section className="container section" id={id}>
        <TitleSection title={t("title")} />
        <ul className="grid w-full grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-[1fr_1fr_320px] 3xl:grid-cols-[1fr_1fr_420px] xl:items-start">
          {dataBlock.map((item) => (
            <li
              key={item.id}
              className={cn(
                "h-full hover:border-primary! transition-colors duration-200 border border-transparent rounded-2xl",
                item.render &&
                  "md:col-span-2 xl:col-span-1 xl:col-start-3 xl:row-start-1 xl:row-span-2",
              )}
            >
              <GlassCard
                blur={0.5}
                distortion={0.2}
                profile="strong"
                seed={9}
                className={cn(
                  "h-full p-6 flex flex-col gap-3 lg:gap-4 xl:p-10",
                  item.render && "bg-primary/10!",
                )}
              >
                <Reveal preset="flipPop" asChild className="h-full">
                  <div className="h-full">
                    <p className="font-medium text-24 lg:text-32 text-header-fg mb-3 lg:mb-4 2xl:mb-6">
                      {item.title}
                    </p>

                    <p
                      className={cn(
                        "text-16 lg:text-20 text-menu-foreground",
                        item.render && "mb-12",
                      )}
                    >
                      {item.text}
                    </p>

                    {item.render ? <div className="flex justify-center">{item.render}</div> : null}
                  </div>
                </Reveal>
              </GlassCard>
            </li>
          ))}
        </ul>
      </section>
      <Image
        width={372}
        height={179}
        alt="decor"
        src={"/images/approach.png"}
        className="absolute  bottom-110 -z-1 right-0 w-40 xl:w-60 xl:-bottom-40"
      />
    </div>
  );
};
