import Image from "next/image";
import { GlassCard } from "@/entities";
import { TitleSection } from "@/entities/index.client";
import { getScopedI18n } from "@/lib";
import { Button } from "@/shared";
import { ContactModal } from "../index.client";

export const HowWeHelp = async () => {
  const t = await getScopedI18n("howWeHelp");

  const list = [
    {
      label: t("design.title"),
      details: t("design.text"),
      stack: t("design.stack"),
      src: "/how-we-help/design.svg",
    },
    {
      label: t("crossPlatform.title"),
      details: t("crossPlatform.text"),
      stack: t("crossPlatform.stack"),
      src: "/how-we-help/cross-platform.svg",
    },
    {
      label: t("webDevelopment.title"),
      details: t("webDevelopment.text"),
      stack: t("webDevelopment.stack"),
      src: "/how-we-help/web-dev.svg",
    },
    {
      label: t("techSupport.title"),
      details: t("techSupport.text"),
      stack: t("techSupport.stack"),
      src: "/how-we-help/tech.svg",
    },
    {
      label: t("marketing.title"),
      details: t("marketing.text"),
      stack: t("marketing.stack"),
      src: "/how-we-help/marketing.svg",
    },
    {
      label: t("analytics.title"),
      details: t("analytics.text"),
      stack: t("analytics.stack"),
      src: "/how-we-help/analytics.svg",
    },
  ];

  return (
    <section className="relative">
      <Image
        src={"/images/how_we_help.png"}
        alt="decor"
        width={370}
        height={181}
        className="absolute -top-4 -z-1 right-0 w-40 md:w-50 lg:w-60 lg:top-6 2xl:w-92.5 2xl:top-25"
      />

      <div className="container section grid grid-cols-1 lg:grid-cols-2 gap-8 2xl:gap-12 relative items-start">
        <div className="flex flex-col lg:sticky lg:top-34 h-fit">
          <TitleSection title={t("title")} subtitle={t("subtitle")} className="" />
          <ContactModal trigger={<Button className="md:w-fit">{t("goToForm")}</Button>} />
        </div>

        <div className="flex flex-col gap-4 xl:gap-6">
          {list.map((item) => (
            <GlassCard
              className="p-6"
              key={item.src}
              distortion={0.8}
              profile="default"
              frequency="0.0001"
              seed={5}
              blur={0.6}
            >
              <div className="flex flex-col gap-4 2xl:gap-6">
                <Image alt="icon" src={item.src} width={64} height={64} className="w-12 xl:w-16" />
                <p className="font-medium text-24 xl:text-28 2xl:text-32">{item.label}</p>
                <p className="text-16 text-block-fg xl:text-18">{item.details}</p>
                <p className="text-16 font-medium text-number xl:text-18">{item.stack}</p>
              </div>
            </GlassCard>
          ))}
        </div>
      </div>
    </section>
  );
};
