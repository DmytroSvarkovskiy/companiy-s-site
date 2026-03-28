"use client";

import { useScopedI18n } from "@/lib/index.client";
import { Button } from "@/shared";
import { useFilterParam } from "@/shared/index.client";
import { cn } from "@/shared/utils";

export const Categories = () => {
  const t = useScopedI18n("showcases.filters");

  const { value, setValue } = useFilterParam();

  const items = [
    { title: t("all"), value: "all" },
    { title: t("mobileApp"), value: "mobileApp" },
    { title: t("landing"), value: "landing" },
    { title: t("webApp"), value: "webApp" },
    { title: t("fitTeach"), value: "fitTeach" },
    { title: t("medicalPlatform"), value: "medicalPlatform" },
  ];

  return (
    <div className="relative w-full my-8 lg:my-12 container">
      <div className="pointer-events-none absolute inset-y-0 left-0 w-10 md:w-14 bg-linear-to-r from-background to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-10 md:w-14 bg-linear-to-l from-background to-transparent" />

      <div
        className={cn(
          "flex gap-5 overflow-x-auto",
          "snap-x snap-mandatory",
          "scrollbar-none [-webkit-overflow-scrolling:touch]",
          "px-3 md:px-3.5 xl:px-6 2xl:px-16 3xl:px-20",
          "pb-1",
        )}
      >
        {items.map((item) => (
          <div key={item.value} className="snap-start shrink-0">
            <Button
              onClick={() => setValue?.(item.value)}
              variant={value === item.value ? "default" : "hovered"}
              className="px-4 md:px-7 xl:px-16 whitespace-nowrap hover:bg-primary"
            >
              {item.title}
            </Button>
          </div>
        ))}
      </div>
    </div>
  );
};
