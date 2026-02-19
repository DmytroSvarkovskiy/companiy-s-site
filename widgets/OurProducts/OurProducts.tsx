import { TitleSection } from "@/entities/index.client";
import { getScopedI18n } from "@/lib";

export const OurProducts = async () => {
  const t = await getScopedI18n("productsSection");
  return (
    <section className="container section">
      <TitleSection title={t("title")} subtitle={t("subtitle")} />
    </section>
  );
};
