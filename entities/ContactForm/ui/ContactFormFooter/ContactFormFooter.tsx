import { ChevronRight } from "lucide-react";
import { useFormContext } from "react-hook-form";
import { useScopedI18n } from "@/lib/index.client";
import { ButtonRevealIcon } from "@/shared/index.client";
import type { TForm } from "../../ContactForm";
import { ContactFormFile } from "../ContactFormFile/ContactFormFile";

export const ContactFormFooter = () => {
  const {
    formState: { isSubmitting },
  } = useFormContext<TForm>();
  const t = useScopedI18n("form");
  return (
    <div className="flex flex-col md:flex-row gap-5">
      <p className="text-14">{t("recaptcha")}</p>

      <div className="flex items-center gap-5 w-full md:w-56">
        <ContactFormFile />

        <ButtonRevealIcon
          type="submit"
          loading={isSubmitting}
          icon={<ChevronRight />}
          className="flex-1 md:flex-none"
        >
          {t("send")}
        </ButtonRevealIcon>
      </div>
    </div>
  );
};
