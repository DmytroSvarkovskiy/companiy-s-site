import { CircleCheck } from "lucide-react";
import { useScopedI18n } from "@/lib/index.client";

export const ContactFormSuccess = () => {
  const t = useScopedI18n("form");
  return (
    <div className="relative flex min-h-96 flex-col items-center justify-center gap-4 rounded-xl p-4 text-center">
      <CircleCheck strokeWidth={1.5} className="size-25 md:size-50 text-success-icon" />

      <h3 className="text-28 lg:text-48 font-semibold">{t("titleOk")}</h3>

      <p className="max-w-sm text-16 text-menu-foreground">{t("textOk")}</p>
    </div>
  );
};
