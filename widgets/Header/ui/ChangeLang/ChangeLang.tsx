"use client";

import { Check, ChevronDown } from "lucide-react";
import Image from "next/image";
import { useChangeLocale, useCurrentLocale, useI18n } from "@/lib/index.client";
import { LOCALES, type TLang } from "@/shared/consts";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/shared/index.client";
import { cn } from "@/shared/utils";

export const ChangeLang = () => {
  const t = useI18n();
  const currentLocale = useCurrentLocale();
  const changeLocale = useChangeLocale();

  const locales = LOCALES.map((item) => ({ label: t(item), value: item }));
  const icons: Record<TLang, string> = {
    uk: "/Icons/ukraine.svg",
    en: "/Icons/united states.svg",
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button
          suppressHydrationWarning
          type="button"
          className="group flex items-center gap-3 outline-none data-[state=open]:text-primary text-header-fg font-medium transition-colors"
        >
          <Image alt="locale" width={24} height={24} src={icons[currentLocale]} />
          <p className="hidden lg:block text-14 xl:text-16">{t(currentLocale)}</p>
          <ChevronDown className="size-4.5 transition-transform duration-200 group-data-[state=open]:rotate-180" />
        </button>
      </DropdownMenuTrigger>

      <DropdownMenuContent
        side="bottom"
        align="center"
        sideOffset={40}
        className="z-100 min-w-40 border border-border rounded-lg bg-phone-btn/95 backdrop-blur-md p-1.5 shadow-xl animate-in fade-in zoom-in-95 duration-200"
      >
        <div className="flex flex-col gap-1">
          {locales.map((item) => {
            const isActive = currentLocale === item.value;

            return (
              <DropdownMenuItem
                key={item.value}
                className={cn(
                  "flex items-center justify-between px-3 py-2.5 cursor-pointer rounded-md outline-none transition-all duration-200",
                  "hover:bg-primary/10 focus:bg-primary/10 group/item",
                  isActive ? "bg-primary/5 text-primary" : "text-foreground",
                )}
                onClick={() => changeLocale(item.value)}
              >
                <div className="flex items-center gap-3">
                  <Image
                    alt={`locale_${item.value}`}
                    width={24}
                    height={24}
                    src={icons[item.value]}
                    className={cn(
                      "transition-opacity",
                      !isActive && "opacity-80 group-hover/item:opacity-100",
                    )}
                  />
                  <span className="font-medium text-14 xl:text-15">{t(item.value)}</span>
                </div>

                {isActive && (
                  <Check className="size-4 text-primary animate-in fade-in scale-in-50 duration-300" />
                )}
              </DropdownMenuItem>
            );
          })}
        </div>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
