"use client";

import Link from "next/link";
import { GlassCard } from "@/entities";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/shared/index.client";
import { cn } from "@/shared/utils";

export function DesktopNav() {
  return (
    <nav className="flex items-center gap-8">
      <Link href="#our-products" className="text-sm font-medium text-foreground hover:text-primary">
        Our products
      </Link>

      <HoverCard openDelay={80} closeDelay={120}>
        <HoverCardTrigger asChild>
          <button
            type="button"
            className={cn(
              "text-sm font-medium text-foreground hover:text-primary",
              "bg-transparent px-0 shadow-none outline-none",
              "focus-visible:ring-0 focus-visible:ring-offset-0",
            )}
          >
            Portfolio
          </button>
        </HoverCardTrigger>

        <HoverCardContent
          side="bottom"
          align="center"
          sideOffset={10}
          className="bg-transparent border-0 p-0 shadow-none w-fit"
        >
          <GlassCard
            radius={16}
            className="w-45 overflow-hidden"
            contentClassName="py-3 overflow-hidden"
            blur={2}
          >
            <ul className="space-y-1  ">
              <li>
                <Link
                  href="#restup"
                  className="block  px-4 py-1 text-sm text-foreground hover:text-primary"
                >
                  Restup
                </Link>
              </li>
              <li>
                <Link
                  href="#ecommerce"
                  className="block  px-4 py-1 text-sm text-foreground hover:text-primary"
                >
                  E-commerce
                </Link>
              </li>
            </ul>
          </GlassCard>
        </HoverCardContent>
      </HoverCard>

      <Link href="#services" className="text-sm font-medium text-foreground hover:text-primary">
        Services
      </Link>

      <Link href="#about-us" className="text-sm font-medium text-foreground hover:text-primary">
        About us
      </Link>
    </nav>
  );
}
