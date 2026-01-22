"use client";
import Image from "next/image";
import { Typewriter } from "react-simple-typewriter";
import { useScopedI18n } from "@/lib/index.client";

export const Text = () => {
  const t = useScopedI18n("hero");
  const words = [
    "React",
    "React Native",
    "TypeScript",
    "Next.js",
    "Tailwind CSS",
    "Zustand",
    "Redux",
  ];
  return (
    <div className="w-full container flex mt-45 xl:mt-44 items-center gap-3 xl:gap-7 3xl:gap-16">
      <Image
        src={"/Icons/logo.svg"}
        alt="Logo"
        width={280}
        height={320}
        className="hidden md:block md:h-55 xl:h-80 2xl:h-95 2xl:w-80"
      />
      <div className="flex flex-col font-semibold text-48 xl:text-64 2xl:text-90 uppercase 2xl:max-w-170 3xl:max-w-190">
        <p className=" ">{t("weBuildAppWith")}</p>
        <div className="text-primary ">
          <Typewriter
            words={words}
            loop
            cursor
            typeSpeed={100}
            deleteSpeed={80}
            delaySpeed={1000}
          />
        </div>
      </div>
    </div>
  );
};
