import { ContactForm, GlassCard } from "@/entities";
import { TitleSection } from "@/entities/index.client";
import { getScopedI18n } from "@/lib";
import { ReviewSlider } from "./ui/index.client";
import { ReviewLine } from "./ui/ReviewLine/ReviewLine";

export const GetInTouch = async () => {
  const t = await getScopedI18n("get-in-touch");
  return (
    <section className="section container">
      <TitleSection title={t("title")} subtitle={t("description")} />
      <GlassCard
        className="p-6
       md:p-8
      xl:p-10 "
      >
        <div
          className="flex flex-col gap-4 w-full
        md:flex-row
        xl:gap-5"
        >
          <div className="flex-1 flex flex-col gap-4 xl:gap-5 min-w-0 md:min-h-153">
            {" "}
            <span className="w-full p-4 bg-primary rounded-xl">
              <p
                className="text-primary-foreground font-medium text-24
              md:text-28
              xl:font-semibold xl:text-32"
              >
                {t("cta.title")}
              </p>
              <p className="text-menu text-16 mt-3">{t("cta.description")}</p>
            </span>
            <ReviewSlider />
          </div>
          <ContactForm formClassname="flex-1 " />
        </div>
      </GlassCard>
      <ReviewLine />
    </section>
  );
};
