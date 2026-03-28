import { MapPin } from "lucide-react";
import Link from "next/link";
import { getScopedI18n } from "@/lib";

export const FooterLocation = async ({ subtitleClassName }: { subtitleClassName?: string }) => {
  const t = await getScopedI18n("footer");

  return (
    <div className="max-w-xs">
      <h3 className={subtitleClassName}>{t("location")}</h3>
      <Link
        href="https://www.google.com/maps/search/?api=1&query=50.9077915720464, 34.7916917657821"
        target="_blank"
        rel="noopener noreferrer"
        className="group flex items-start gap-2 text-menu-foreground hover:text-foreground transition-colors"
      >
        <MapPin className="size-5 shrink-0 mt-1" />
        <span className="group-hover:underline">
          1-ша Набережна річки Стрілки, 9А, Суми, Україна
        </span>
      </Link>
    </div>
  );
};
