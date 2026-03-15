import { ChevronRight } from "lucide-react";
import { GlassCard, Logo, ThemeToggle } from "@/entities";
import { getScopedI18n } from "@/lib";
import { ButtonRevealIcon } from "@/shared/index.client";
import { ContactModal } from "../index.client";
import { BurgerMenu, ChangeLang, DesktopNav } from "./ui";

type TProps = { currentTheme: "dark" | "light" };

export const Header = async ({ currentTheme }: TProps) => {
  const t = await getScopedI18n("nav");
  return (
    <header className="sticky top-4 z-50 md:top-6 xl:top-8 2xl:top-10">
      <div className="container">
        <GlassCard radius={999} blur={0.9} distortion={0.3} profile="default">
          <div
            className="
        p-4 md:p-4.5 2xl:p-5.5
        h-16 md:h-22.5
        w-full
        grid grid-cols-[auto_1fr_auto]
        items-center
      "
          >
            <Logo imageClassName="w-9 h-11" textClassName="hidden lg:block" />{" "}
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
