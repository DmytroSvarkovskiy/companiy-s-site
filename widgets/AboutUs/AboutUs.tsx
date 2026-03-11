import { GlassCard } from "@/entities";
import { MapElement, TitleSection, VideoBlock } from "@/entities/index.client";
import { getScopedI18n } from "@/lib";

export const AboutUs = async () => {
  const t = await getScopedI18n("aboutUs");
  return (
    <section className="section">
      <div className="container grid grid-cols-1 md:grid-cols-2 gap-4 ">
        <VideoBlock className="h-150 md:h-180 xl:h-200 2xl:h-240" />
        <div className="overflow-hidden relative hidden md:block">
          <GlassCard className="p-6 2xl:p-10 z-5" blur={0.5}>
            <div className="bg-menu/80 p-5 flex flex-col rounded-2xl">
              <TitleSection title={t("title")} />
              <span className="flex flex-col gap-4 text-menu-foreground text-14 xl:text-16">
                <p>{t("description1")}</p>
                <p>{t("description2")}</p>
              </span>
            </div>
          </GlassCard>
          <MapElement
            className="min-w-350 absolute -top-20 -right-150
            md:min-w-380 md:-right-180 md:top-5
            lg:min-w-400 lg:-right-160 lg:top-30
            2xl:min-w-450 2xl:top-50 2xl:-left-90"
          />
        </div>
      </div>
    </section>
  );
};
