"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { GlassCard } from "@/entities";
import { setCookies, type TCookiesVariants } from "@/features";
import { useScopedI18n } from "@/lib/index.client";
import { Button } from "@/shared";

export const CookiesBlock = () => {
  const router = useRouter();
  const [hidden, setHidden] = useState(false);
  const t = useScopedI18n("cookies");

  const onButtonClick = async (variant: TCookiesVariants) => {
    setHidden(true);
    try {
      await setCookies(variant);
      router.refresh();
    } catch {
      setHidden(false);
    }
  };

  if (hidden) return null;

  return (
    <div
      className="absolute z-1 h-fit
    bottom-5 md:bottom-36 lg:-bottom-0.5 xl:bottom-10
    left-3 md:left-3.5 xl:left-6 2xl:left-16 3xl:left-20
    right-3 md:right-auto
    max-w-110 md:w-110 md:h-85 xl:w-120 xl:h-fit"
    >
      <GlassCard className="p-5 md:p-6 xl:p-10" blur={0.4} distortion={0.2}>
        <div className="w-full h-full bg-menu rounded-lg p-4 xl:p-6">
          <Image
            src={"/Icons/cookies.svg"}
            width={64}
            height={64}
            alt="cookies"
            className="hidden md:block mb-4 "
          />
          <p className="text-header-fg text-24 xl:text-32 mb-3 xl:mb-4">{t("title")}</p>
          <span className="text-14 md:text-16 mb-3 xl:mb-4 block ">
            {t("text")} <span className="text-primary cursor-pointer">{t("readMore")}</span>
          </span>
          <div className="grid grid-cols-2 gap-4 ">
            <Button onClick={() => onButtonClick("accept")} className="w-full font-normal">
              {t("accept")}
            </Button>
            <Button
              onClick={() => onButtonClick("decline")}
              className="font-normal"
              variant={"hovered"}
            >
              {t("declineAll")}
            </Button>
          </div>
        </div>
      </GlassCard>
    </div>
  );
};
