import { TitleSection } from "@/entities/index.client";
import { getScopedI18n } from "@/lib";
import { NAV_HASH } from "@/shared/consts";
import { Categories } from "./ui/index.client";
import { Projects } from "./ui/Projects/Projects";

export const Showcases = async () => {
  const t = await getScopedI18n("showcases");
  const id = NAV_HASH.showcases.replace(/^#/, "");
  return (
    <section className="section" id={id}>
      <TitleSection title={t("title")} subtitle={t("subtitle")} className="container" />
      <Categories />
      <Projects />
    </section>
  );
};
