"use client";
import { Menu } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { useScopedI18n } from "@/lib/index.client";
import { CustomSheet } from "@/shared/index.client";
import { NAV_ITEMS } from "./links";

export const BurgerMenu = () => {
  const t = useScopedI18n("nav");
  const [open, setOpen] = useState(false);
  const onNavigateClick = () => setOpen(false);
  return (
    <CustomSheet
      className="min-w-full bg-menu"
      trigger={<Menu className="size-6" />}
      open={open}
      onOpenChange={setOpen}
    >
      <div className="flex flex-col">
        <Link href={"/"} className="w-fit">
          <Image
            alt="logo"
            src={"/Icons/logo.svg"}
            width={60}
            height={70}
            className="w-8 h-7 md:w-9 md:h-11 "
          />
        </Link>
        <nav className="mt-4">
          <ul className="space-y-6 w-fit font-semibold">
            {NAV_ITEMS.map((item) => (
              <li key={item.key}>
                <Link
                  href={item.href}
                  onClick={onNavigateClick}
                  className="block text-muted-menu-foreground  w-fit"
                >
                  {t(item.key)}
                </Link>

                {item.children?.length ? (
                  <ul className="mt-3 space-y-3 pl-8 w-fit">
                    {item.children.map((child) => (
                      <li key={child.key}>
                        <Link
                          href={child.href}
                          onClick={onNavigateClick}
                          className="block text-menu-foreground w-fit"
                        >
                          {t(child.key)}
                        </Link>
                      </li>
                    ))}
                  </ul>
                ) : null}
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </CustomSheet>
  );
};
