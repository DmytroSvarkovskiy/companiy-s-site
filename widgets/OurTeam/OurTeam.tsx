import Image from "next/image";
import Link from "next/link";
import { GlassCard } from "@/entities";
import { TitleSection } from "@/entities/index.client";
import { getScopedI18n } from "@/lib";
import { OWNERS, WORKERS } from "./models/data";

export const OurTeam = async () => {
  const t = await getScopedI18n("our-team");

  return (
    <section className="section container">
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
            <GlassCard key={member.id} className="p-6 md:p-8 xl:p-10">
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

                <div className="flex gap-4  items-center mt-auto md:mt-0">
                  <Link
                    target="_blank"
                    href={member.links.facebook}
                    className="hover:opacity-80 transition-opacity"
                  >
                    <Image alt="facebook" width={40} height={40} src="/team/facebook.svg" />
                  </Link>
                  <Link
                    target="_blank"
                    href={member.links.linkedin}
                    className="hover:opacity-80 transition-opacity"
                  >
                    <Image alt="linkedin" width={40} height={40} src="/team/linkedin.svg" />
                  </Link>
                </div>
              </div>
            </GlassCard>
          ))}
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 3xl:grid-cols-7 gap-x-5 gap-y-3 md:gap-y-6">
          {WORKERS.map((worker) => (
            <div key={worker.member} className="flex flex-col gap-2 md:gap-3">
              <div className="relative aspect-square w-full overflow-hidden rounded-2xl bg-owner-bg/50">
                <Image
                  alt={worker.member}
                  src={worker.src}
                  fill
                  sizes="(max-width: 768px) 50vw, (max-width: 1200px) 25vw, 20vw"
                  className="object-cover transition-transform duration-300 hover:scale-105"
                />
              </div>

              <div className="flex flex-col">
                <p className="font-semibold text-16 md:text-18 lg:text-20 leading-tight">
                  {t(`members.${worker.member}.name`)}
                </p>
                <p className="text-12 md:text-14 text-block-fg opacity-80 leading-snug">
                  {t(`members.${worker.member}.role`)}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
