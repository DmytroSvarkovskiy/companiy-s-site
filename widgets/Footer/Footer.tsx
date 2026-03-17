import { Mail, MapPin, Phone } from "lucide-react";
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
  const CONTACTS = [
    { type: "email", value: COMPANY_LINKS.email },
    { type: "phone", value: COMPANY_LINKS.phone1 },
    { type: "phone", value: COMPANY_LINKS.phone2 },
  ] as const;

  const subtitleClassName = "font-medium text-24 mb-6";

  return (
    <div className="section">
      <footer className="border-t dark:border-phone-btn border-muted">
        <div
          className="container py-16 flex flex-col gap-8
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
            <div>
              <p className={subtitleClassName}>{t("contact")}</p>
              <div className="flex flex-col gap-8">
                <div className="text-menu-foreground flex flex-col gap-2">
                  {CONTACTS?.map((el) => {
                    const href = el.type === "phone" ? `tel:${el.value}` : `mailto:${el.value}`;
                    return (
                      <span key={el.value} className="flex items-center gap-2 text-16">
                        {el.type === "phone" ? (
                          <Phone className="size-5" />
                        ) : (
                          <Mail className="size-5" />
                        )}
                        <Link href={href}>{el.value}</Link>
                      </span>
                    );
                  })}
                </div>
                <div>
                  <p className={subtitleClassName}>{t("trusted_by")}</p>
                  <div className="flex gap-5">
                    <div
                      className="
      w-16.25 h-12
      bg-blue-600 dark:bg-white
      mask-[url('/footer/ebrr.png')]
      mask-contain
      mask-no-repeat
      mask-center
      [-webkit-mask-image:url('/footer/ebrr.png')]
      [-webkit-mask-size:contain]
      [-webkit-mask-repeat:no-repeat]
      [-webkit-mask-position:center]
    "
                    />
                    <div
                      className="
    w-53.5 h-12
    bg-foreground dark:bg-white
    mask-[url('/footer/mtu.png')] mask-contain mask-no-repeat mask-center
    [-webkit-mask-image:url('/footer/mtu.png')]
    [-webkit-mask-size:contain]
    [-webkit-mask-repeat:no-repeat]
    [-webkit-mask-position:center]
  "
                    />{" "}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <p className={subtitleClassName}>{t("location")}</p>
            <Link
              href="https://www.google.com/maps?q=50.90774463102274,34.79178114673439"
              target="_blank"
              rel="noopener noreferrer"
              className=" hover:underline flex items-center gap-2 text-menu-foreground"
            >
              <MapPin />
              <span>1-ша Набережна річки Стрілки, 9А, Суми, Україна</span>
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
};
