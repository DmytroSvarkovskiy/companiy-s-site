import { GlassCard } from "@/entities";
import { TitleSection } from "@/entities/index.client";
import { getScopedI18n } from "@/lib";
import { Reveal } from "@/shared/Reveal/Reveal";
import { Decor } from "./ui";

export const PartnersTrustBlock = async () => {
  const t = await getScopedI18n("trust");
  const keys = ["subtitle", "description", "ctaText"] as const;

  const dataArray = keys.map((key, i) => ({
    title: t(key),
    id: String(45 + i),
  }));
  return (
    <div className="relative">
      <section className="container section">
        <TitleSection title={t("title")} />
        <ul className="grid grid-cols-1 gap-4 md:grid-cols-3 lg:gap-5">
          {dataArray?.map((item) => (
            <Reveal key={item.id} preset="blurUp" asChild durationClassName="duration-1000">
              <li className="font-semibold">
                <GlassCard
                  className="p-6 lg:p-6 xl:p-10 h-56 md:h-62 md:text-20 text-24 xl:text-28 2xl:text-32 xl:h-70 2xl:h-110"
                  blur={0.3}
                  distortion={0.2}
                  profile="default"
                  frequency="0.003"
                  seed={5}
                >
                  {item.title}
                </GlassCard>
              </li>
            </Reveal>
          ))}
        </ul>
      </section>
      <Decor />
    </div>
  );
};
