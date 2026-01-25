"use client";
import Image from "next/image";
import { Typewriter } from "react-simple-typewriter";
import { useI18n } from "@/lib/index.client";
import { Button } from "@/shared";
import { ContactModal } from "@/widgets/index.client";

export const Text = () => {
  const t = useI18n();
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
    <>
      <div className="w-full container flex mt-45 xl:mt-44 items-center gap-3 xl:gap-7 3xl:gap-16">
        <Image
          src={"/Icons/logo.svg"}
          alt="Logo"
          width={280}
          height={320}
          className="hidden md:block md:h-55 xl:h-80 2xl:h-95 2xl:w-80 3xl:w-90"
        />
        <div className="flex flex-col font-semibold text-48 xl:text-64 2xl:text-90 xl:max-w-180 xl:pt-22 uppercase 2xl:max-w-190 2xl:pt-32 3xl:max-w-190 2xl:leading-[1.05] ">
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
      <ContactModal
        trigger={
          <div className="container flex md:justify-center mt-8 md:mt-12 lg:hidden">
            <Button className="w-full md:w-90 " type="button">
              {t("approach.contact.title")}
            </Button>
          </div>
        }
      />
    </>
  );
};
