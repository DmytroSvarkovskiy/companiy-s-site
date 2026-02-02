"use client";

import { ChevronDown } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import { useChangeLocale, useCurrentLocale, useI18n } from "@/lib/index.client";
import { LOCALES, type TLang } from "@/shared/consts";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/shared/index.client";

export const ChangeLang = () => {
  const t = useI18n();
  const locale = useCurrentLocale();
  const changeLocale = useChangeLocale();
  const [open, setOpen] = useState(false);
  const locales = LOCALES.map((item) => ({ label: t(item), value: item }));

  const icons = { uk: "/Icons/ukraine.svg", en: "/Icons/united states.svg" };
  const onLocaleClick = (locale: TLang) => {
    changeLocale(locale);
    setOpen(false);
  };
  return (
    <HoverCard openDelay={80} closeDelay={300} open={open} onOpenChange={setOpen}>
      <HoverCardTrigger asChild>
        <button
          type="button"
          className="group flex items-center gap-3 data-[state=open]:text-primary text-header-fg font-medium"
        >
          <Image alt="locale" width={24} height={24} src={icons[locale]} />
          <p className="hidden lg:block text-14 xl:text-16">{t(locale)}</p>
          <ChevronDown className="size-4.5 transition-transform duration-200 group-data-[state=open]:rotate-180" />
        </button>
      </HoverCardTrigger>
      <HoverCardContent
        side="bottom"
        align="center"
        sideOffset={10}
        className="bg-transparent border-0 p-0 shadow-none w-fit mt-5 md:mt-7 xl:mt-8"
      >
        <div className="py-3 w-38 overflow-hidden border border-border rounded-lg bg-phone-btn/95">
          <ul className="space-y-1 py-2 px-3 flex flex-col gap-3 font-medium">
            {locales.map((item) => (
              <li key={item.label}>
                <button
                  type="button"
                  className="flex w-full items-center gap-3 text-foreground hover:text-primary transition-colors duration-200"
                  onClick={() => onLocaleClick(item.value)}
                >
                  <Image
                    alt={`locale_${item.value}`}
                    width={24}
                    height={24}
                    src={icons[item.value]}
                  />
                  <p>{t(item.value)}</p>
                </button>
              </li>
            ))}
          </ul>
        </div>
      </HoverCardContent>
    </HoverCard>
  );
};
