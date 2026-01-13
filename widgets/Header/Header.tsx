import Image from "next/image";
import Link from "next/link";
import { GlassCard, ThemeToggle } from "@/entities";
import { BurgerMenu, DesktopNav } from "./ui";

type TProps = { currentTheme: "dark" | "light" };

export const Header = ({ currentTheme }: TProps) => {
  return (
    <header className="sticky top-4 z-50 md:top-6 xl:top-8 2xl:top-10">
      <div className="container">
        <GlassCard radius={999}>
          <div className="p-4 md:p-4.5 2xl:p-5.5 h-16 md:h-22.5 w-full flex items-center justify-between">
            <Link href={"/"}>
              <Image
                loading="eager"
                alt="logo"
                src={"/Icons/logo.svg"}
                width={60}
                height={70}
                className="w-8 h-7 md:w-9 md:h-11 2xl:w-9.5 2xl:h-11.5"
              />
            </Link>
            <div className="flex gap-4 items-center">
              <ThemeToggle defaultTheme={currentTheme} />
              <div className="block md:hidden">
                <BurgerMenu />
              </div>
              <div className="hidden md:block">
                <DesktopNav />
              </div>
            </div>
          </div>
        </GlassCard>
      </div>
    </header>
  );
};
