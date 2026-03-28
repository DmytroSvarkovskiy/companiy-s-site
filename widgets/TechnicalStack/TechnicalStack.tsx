import Image from "next/image";
import { GlassCard } from "@/entities";
import { TitleSection } from "@/entities/index.client";
import { getScopedI18n } from "@/lib";
import { NAV_HASH } from "@/shared/consts";
import { Reveal } from "@/shared/Reveal/Reveal";
import { cn } from "@/shared/utils";
import { getTechnicalStackItems } from "./models/data";

export const TechnicalStack = async () => {
  const id = NAV_HASH.techStack.replace(/^#/, "");
  const t = await getScopedI18n("technicalStack");
  const items = getTechnicalStackItems(t);
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
              "lg:grid lg:grid-cols-[120px_minmax(220px,300px)_1fr] lg:items-center lg:gap-x-8 lg:py-10 ",
              "2xl:grid-cols-[200px_minmax(220px,440px)_1fr]",
              index !== 0 && "border-t border-phone-btn",
              "mx-8 lg:mx-0",
            )}
          >
            <p className="hidden font-semibold lg:block text-phone-btn text-64 2xl:text-90">
              {item.number}
            </p>

            <p className="text-block-fg text-28 md:text-32 2xl:text-48 font-semibold">
              {item.title}
            </p>
            <Reveal preset="zoomSoft">
              <div className="mt-6 lg:mt-0 flex flex-wrap gap-4">
                {item.items.map((el) => (
                  <GlassCard key={el.title} hoverGradient radius={14} className="w-fit px-4 py-1">
                    <div className="w-fit min-h-12  flex items-center gap-3 cursor-default">
                      <Image
                        src={el.icon}
                        alt={el.title}
                        width={40}
                        height={40}
                        className="size-8 lg:size-10 shrink-0"
                      />
                      <p className="text-20 lg:text-24 whitespace-nowrap">{el.title}</p>
                    </div>
                  </GlassCard>
                ))}
              </div>
            </Reveal>
          </li>
        ))}
      </ul>
    </section>
  );
};
