import { Mail, Phone } from "lucide-react";
import Link from "next/link";
import { getScopedI18n } from "@/lib";
import { COMPANY_LINKS } from "@/shared/consts";

export const FooterContacts = async ({ subtitleClassName }: { subtitleClassName?: string }) => {
  const t = await getScopedI18n("footer");

  const CONTACT_INFO = [
    { type: "email", value: COMPANY_LINKS.email, Icon: Mail },
    { type: "phone", value: COMPANY_LINKS.phone1, Icon: Phone },
    { type: "phone", value: COMPANY_LINKS.phone2, Icon: Phone },
  ] as const;

  return (
    <div className="flex flex-col gap-10">
      <div>
        <h3 className={subtitleClassName}>{t("contact")}</h3>
        <div className="flex flex-col gap-3">
          {CONTACT_INFO.map((item) => (
            <Link
              key={item.value}
              href={item.type === "phone" ? `tel:${item.value}` : `mailto:${item.value}`}
              className="flex items-center gap-3 text-menu-foreground hover:text-foreground transition-colors"
            >
              <item.Icon className="size-5" />
              <span className="text-16">{item.value}</span>
            </Link>
          ))}
        </div>
      </div>

      <div>
        <h3 className={subtitleClassName}>{t("trusted_by")}</h3>
        <div className="flex items-center gap-6 md:flex-col md:items-start xl:flex-row">
          {/* EBRD Mask */}
          <div className="w-16 h-12 bg-blue-600 dark:bg-white [mask:url('/footer/ebrr.png')_center/contain_no-repeat] [-webkit-mask:url('/footer/ebrr.png')_center/contain_no-repeat]" />
          {/* MTU Mask */}
          <div className="w-52 h-12 bg-foreground dark:bg-white [mask:url('/footer/mtu.png')_center/contain_no-repeat] [-webkit-mask:url('/footer/mtu.png')_center/contain_no-repeat]" />
        </div>
      </div>
    </div>
  );
};
