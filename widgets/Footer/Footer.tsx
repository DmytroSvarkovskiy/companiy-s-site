import Image from "next/image";
import Link from "next/link";
import { Logo } from "@/entities";
import { getScopedI18n } from "@/lib";
import { COMPANY_LINKS } from "@/shared/consts";
export const Footer = async () => {
  const t = await getScopedI18n("footer");
  const SOCIAL_LINKS = [
    { id: "upwork", href: COMPANY_LINKS.upwork, icon: "/Icons/upwork.svg", alt: "upwork" },
    { id: "facebook", href: COMPANY_LINKS.facebook, icon: "/Icons/facebook.svg", alt: "facebook" },
    { id: "behance", href: COMPANY_LINKS.beehance, icon: "/Icons/be.svg", alt: "behance" },
    { id: "linkedin", href: COMPANY_LINKS.linkedin, icon: "/Icons/linkedin.svg", alt: "linkedin" },
  ];
  const CONTACTS = [];
  return (
    <div className="section">
      <footer className="border-t dark:border-phone-btn border-muted">
        <div
          className="container py-16 flex flex-col
        md:pb-14
        xl:bp-6"
        >
          <div className="flex flex-col gap-4">
            <Logo
              className="w-full max-w-85.75"
              imageClassName="h-[60px]"
              textClassName="text-[28px] lg:block block"
            />
            <p className="text-14 text-menu-foreground">{t("description")}</p>
            <div className="flex gap-4">
              {SOCIAL_LINKS.map((social) => (
                <Link
                  key={social.id}
                  href={social.href}
                  className="transition-opacity duration-150 hover:opacity-90 active:scale-95"
                >
                  <Image alt={social.alt} src={social.icon} width={48} height={48} />
                </Link>
              ))}
            </div>
          </div>
          <div>
            <p>{t("contact")}</p>
            <div>
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
          <div></div>
        </div>
      </footer>
    </div>
  );
};
