import Image from "next/image";
import Link from "next/link";
import { Logo } from "@/entities";
import { getScopedI18n } from "@/lib";
import { COMPANY_LINKS } from "@/shared/consts";

export const FooterSocials = async () => {
  const t = await getScopedI18n("footer");
  const SOCIAL_LINKS = [
    { id: "upwork", href: COMPANY_LINKS.upwork, icon: "/Icons/upwork.svg", alt: "upwork" },
    { id: "facebook", href: COMPANY_LINKS.facebook, icon: "/Icons/facebook.svg", alt: "facebook" },
    { id: "behance", href: COMPANY_LINKS.beehance, icon: "/Icons/be.svg", alt: "behance" },
    { id: "linkedin", href: COMPANY_LINKS.linkedin, icon: "/Icons/linkedin.svg", alt: "linkedin" },
  ];
  return (
    <div className="flex flex-col gap-4 xl:gap-10 max-w-100 2xl:max-w-120">
      <Logo
        className="w-full max-w-90"
        imageClassName="h-15 xl:h-25 2xl:h-28"
        textClassName="text-[28px] block xl:text-[40px] 2xl:text-[48px]"
      />
      <div className="flex flex-col gap-4 xl:flex-col-reverse xl:gap-10">
        <div className="text-14 text-menu-foreground">
          <p>
            {t("company_name")} — {t("description")}
          </p>
          <p className="mt-1">{t("reg_number")}</p>
        </div>
        <div className="flex gap-4 mt-2">
          {SOCIAL_LINKS.map((social) => (
            <Link
              key={social.id}
              href={social.href}
              className="transition-transform duration-150 hover:scale-110 active:scale-95"
            >
              <Image alt={social.alt} src={social.icon} width={40} height={40} />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};
