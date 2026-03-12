import Image from "next/image";
import Link from "next/link";
import { GlassCard } from "@/entities";
import { TitleSection } from "@/entities/index.client";
import { getScopedI18n } from "@/lib";
import { COMPANY_LINKS, NAV_HASH } from "@/shared/consts";
import { Reveal } from "@/shared/Reveal/Reveal";
import { OWNERS, WORKERS } from "./models/data";

export const OurTeam = async () => {
  const t = await getScopedI18n("our-team");
  const id = NAV_HASH.ourTeam.replace(/^#/, "");

  return (
    <section className="section container" id={id}>
      <TitleSection title={t("ourTeam")} />
      <div
        className="flex flex-col gap-4
                   xl:gap-5"
      >
        <div
          className="grid grid-cols-1 gap-4 w-full
                   md:grid-cols-2
                   xl:gap-5"
        >
          {OWNERS.map((member) => (
            <GlassCard className="p-6 md:p-8 xl:p-10" key={member.id}>
              <div className="bg-owner-bg rounded-3xl w-full flex justify-center mb-4 xl:mb-5 overflow-hidden">
                <Image
                  alt={t(`members.${member.id}.name`)}
                  width={260}
                  height={260}
                  src={member.src}
                  className="object-contain hover:scale-110 transition-transform duration-300"
                />
              </div>

              <div className="bg-owner-bg p-5 flex flex-col gap-4 xl:gap-5 lg:flex-row justify-between rounded-3xl h-fit">
                <div className="flex flex-col gap-1">
                  <p className="font-medium text-20 md:text-24">
                    {t(`members.${member.id}.name`)}, {t(`members.${member.id}.role`)}
                  </p>
                  <p className="text-16 text-menu-foreground">
                    {t(`members.${member.id}.description`)}
                  </p>
                </div>

                <div className="flex gap-4 items-center mt-auto md:mt-0">
                  <Link
                    target="_blank"
                    href={member.links.facebook}
                    className="hover:opacity-80 transition-opacity"
                  >
                    <Image alt="facebook" width={40} height={40} src="/Icons/facebook.svg" />
                  </Link>
                  <Link
                    target="_blank"
                    href={member.links.linkedin}
                    className="hover:opacity-80 transition-opacity"
                  >
                    <Image alt="linkedin" width={40} height={40} src="/Icons/linkedin.svg" />
                  </Link>
                </div>
              </div>
            </GlassCard>
          ))}
        </div>
        <GlassCard className="p-6 md:p-8 xl:p-10">
          <div className="bg-owner-bg md:bg-owner-bg md:p-5 rounded-3xl grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 3xl:grid-cols-8 gap-x-5 gap-y-3 md:gap-y-6">
            {WORKERS.map((worker) => (
              <Reveal key={worker.member} preset="blurUp">
                <div className="flex flex-col gap-2 md:gap-3 w-full max-w-60 mx-auto">
                  <div className="bg-phone-btn relative flex justify-center  w-full overflow-hidden rounded-2xl ">
                    <Image
                      alt={worker.member}
                      src={worker.src}
                      width={225}
                      height={168}
                      // fill
                      // sizes="(max-width: 480px) 50vw, 240px"
                      className="object-cover transition-transform duration-300 hover:scale-105"
                    />
                  </div>

                  <div className="flex flex-col">
                    <p className="font-medium text-16 md:text-18 lg:text-24 ">
                      {t(`members.${worker.member}.name`)}
                    </p>
                    <p className="text-12 md:text-16 text-menu-foreground opacity-80 leading-snug">
                      {t(`members.${worker.member}.role`)}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
          <div className="bg-owner-bg mt-5 p-5 flex flex-col gap-4 xl:gap-5 lg:flex-row justify-between rounded-3xl h-fit">
            <div className="flex flex-col gap-1">
              <p className="font-medium text-20 md:text-24">{t("awesomeTeam")}</p>
              <p className="text-16 text-menu-foreground">{t(`descriptionTeam`)}</p>
            </div>

            <div className="flex gap-4 items-center mt-auto md:mt-0 shrink-0">
              <Link
                target="_blank"
                href={COMPANY_LINKS.upwork}
                className="hover:opacity-80 transition-opacity"
              >
                <Image alt="facebook" width={40} height={40} src="/Icons/upwork.svg" />
              </Link>
              <Link
                target="_blank"
                href={COMPANY_LINKS.beehance}
                className="hover:opacity-80 transition-opacity"
              >
                <Image alt="linkedin" width={40} height={40} src="/Icons/be.svg" />
              </Link>
            </div>
          </div>
        </GlassCard>
      </div>
    </section>
  );
};
