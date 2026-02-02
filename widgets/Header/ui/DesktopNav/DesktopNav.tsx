"use client";

import Link from "next/link";
import { useScopedI18n } from "@/lib/index.client";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/shared/index.client";
import { cn } from "@/shared/utils";
import { NAV_ITEMS } from "../models/links";

export function DesktopNav() {
  const t = useScopedI18n("nav");

  return (
    <nav className="flex items-center gap-4 xl:gap-8 text-14 xl:text-16">
      {NAV_ITEMS.map((item) => {
        const hasChildren = !!item.children?.length;

        if (!hasChildren) {
          return (
            <Link
              key={item.key}
              href={item.href}
              className=" font-medium text-header-fg hover:text-primary transition-colors duration-200"
            >
              {t(item.key)}
            </Link>
          );
        }

        return (
          <HoverCard key={item.key} openDelay={80} closeDelay={300}>
            <HoverCardTrigger asChild>
              <button
                type="button"
                className={cn(
                  " font-medium text-header-fg hover:text-primary transition-colors duration-200",
                  "bg-transparent px-0 shadow-none outline-none",
                  "focus-visible:ring-0 focus-visible:ring-offset-0",
                  "data-[state=open]:text-primary",
                )}
              >
                {t(item.key)}
              </button>
            </HoverCardTrigger>

            <HoverCardContent
              side="bottom"
              align="center"
              sideOffset={10}
              className="bg-transparent border-0 p-0 shadow-none w-fit mt-5 md:mt-7 xl:mt-8"
            >
              <div className="py-3 w-45 overflow-hidden border border-border rounded-lg bg-phone-btn/95">
                <ul className="space-y-1">
                  {item.children.map((child) => (
                    <li key={child.key}>
                      <Link
                        href={child.href}
                        className="block px-4 py-1  text-header-fg hover:text-primary transition-colors duration-200"
                      >
                        {t(child.key)}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </HoverCardContent>
          </HoverCard>
        );
      })}
    </nav>
  );
}
