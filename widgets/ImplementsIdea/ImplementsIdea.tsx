import Image from "next/image";
import { GlassCard } from "@/entities";
import { getI18n } from "@/lib";
import { Button } from "@/shared";
import { ContactModal } from "../index.client";
export const ImplementsIdea = async () => {
  const t = await getI18n();
  return (
    <section className="section">
      <GlassCard radius={0} blur={0.5} desktopFrom={0}>
        <div className="flex flex-col items-center w-full gap-4 xl:gap-5 py-44.5 md:py-30 lg:py-25 relative overflow-hidden">
          <h3 className="font-semibold text-32 lg:text-48 2xl:text-64 uppercase  text-center">
            {t("timeToImplement")}
          </h3>
          <ContactModal trigger={<Button className="w-fit">{t("getInTouch")}</Button>} />
          <Image
            alt="decor"
            width={320}
            height={260}
            src={"/images/time-mobile-top.png"}
            className="lg:hidden absolute top-0 right-0 -z-5"
          />
          <Image
            alt="decor"
            src={"/images/time-mobile-bottom.png"}
            width={390}
            height={126}
            className="lg:hidden absolute bottom-0 left-0 -z-5"
          />
          <Image
            alt="decor"
            src={"/images/time_left.png"}
            width={400}
            height={400}
            className="hidden lg:block absolute left-0 top-0 -z-5"
          />
          <Image
            alt="decor"
            src={"/images/time-right.png"}
            width={432}
            height={460}
            className="hidden lg:block absolute right-0 top-0 -z-5"
          />
        </div>
      </GlassCard>
    </section>
  );
};
