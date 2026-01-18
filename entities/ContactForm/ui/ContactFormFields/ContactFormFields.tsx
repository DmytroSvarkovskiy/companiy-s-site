import { Controller, useFormContext } from "react-hook-form";
import { useScopedI18n } from "@/lib/index.client";
import { InputField, TextArea } from "@/shared";
import { InputPhone } from "@/shared/index.client";
import { isPhoneValid } from "@/shared/utils/phoneValidation";
import type { TForm } from "../../ContactForm";

export const ContactFormFields = () => {
  const t = useScopedI18n("form");
  const {
    register,
    control,
    formState: { errors },
  } = useFormContext<TForm>();
  return (
    <div className="flex flex-col gap-6">
      <InputField
        placeholder={t("name")}
        {...register("name", { required: t("fieldRequired") })}
        error={errors.name?.message}
      />

      <Controller
        name="phone"
        control={control}
        rules={{
          required: t("fieldRequired"),
          validate: (v) => isPhoneValid(v) || t("invalidPhone"),
        }}
        render={({ field }) => (
          <InputPhone {...field} placeholder={t("phone")} error={errors.phone?.message} />
        )}
      />

      <InputField
        type="email"
        placeholder={t("email")}
        {...register("email", { required: t("fieldRequired") })}
        error={errors.email?.message}
      />

      <TextArea
        placeholder={t("details")}
        {...register("description", { required: t("fieldRequired") })}
        error={errors.description?.message}
        className="h-70"
      />
    </div>
  );
};
