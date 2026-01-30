import { GlassCard } from "@/entities";
import { TitleSection } from "@/entities/index.client";
import { getScopedI18n } from "@/lib";
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
            <li key={item.id} className="font-semibold">
              <GlassCard
                className="p-6 lg:p-6 xl:p-10 h-56 md:h-62 md:text-20 text-24 xl:text-28 2xl:text-32 xl:h-70 2xl:h-110"
                blur={2}
                displacementScale={0.2}
                elasticity={0.55}
                contrast={1.12}
                brightness={1.03}
                saturation={1.08}
                shadowIntensity={0.12}
              >
                {item.title}
              </GlassCard>
            </li>
          ))}
        </ul>
      </section>
      <Decor />
    </div>
  );
};
