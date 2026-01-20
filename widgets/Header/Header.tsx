import { ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { orbitron } from "@/app/[locale]/layout";
import { GlassCard, ThemeToggle } from "@/entities";
import { getScopedI18n } from "@/lib";
import { ButtonRevealIcon } from "@/shared/index.client";
import { cn } from "@/shared/utils";
import { ContactModal } from "../index.client";
import { BurgerMenu, ChangeLang, DesktopNav } from "./ui";

type TProps = { currentTheme: "dark" | "light" };

export const Header = async ({ currentTheme }: TProps) => {
  const t = await getScopedI18n("nav");
  return (
    <header className="sticky top-4 z-50 md:top-6 xl:top-8 2xl:top-10">
      <div className="container">
        <GlassCard radius={999} blur={5}>
          <div
            className="
        p-4 md:p-4.5 2xl:p-5.5
        h-16 md:h-22.5
        w-full
        grid grid-cols-[auto_1fr_auto]
        items-center
      "
          >
            <Link href="/" className="flex items-center gap-1 text-header-fg">
              <Image
                loading="eager"
                alt="logo"
                src="/Icons/logo.svg"
                width={60}
                height={70}
                className="w-8 h-7 md:w-9 md:h-11 2xl:w-9.5 2xl:h-11.5"
              />
              <p className={cn(orbitron.className, "text-18 tracking-wider hidden lg:block")}>
                IT GLOBAL
              </p>
            </Link>

            <div className="hidden lg:flex justify-center">
              <DesktopNav />
            </div>

            <div className="flex items-center justify-end gap-5 xl:gap-7">
              <ThemeToggle defaultTheme={currentTheme} />
              <ChangeLang />

              <div className="hidden lg:block">
                <ContactModal
                  title={t("contactUs").toUpperCase()}
                  trigger={
                    <ButtonRevealIcon icon={<ChevronRight />}>{t("contactUs")}</ButtonRevealIcon>
                  }
                />
              </div>

              <div className="block lg:hidden">
                <BurgerMenu />
              </div>
            </div>
          </div>
        </GlassCard>
      </div>
    </header>
  );
};
