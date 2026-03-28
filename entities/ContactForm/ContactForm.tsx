"use client";
import { useState } from "react";
import { FormProvider, type SubmitHandler, useForm } from "react-hook-form";
import { cn } from "@/shared/utils";
import { ContactFormFields, ContactFormFooter, ContactFormSuccess } from "./ui";

export type TForm = {
  phone: string;
  email: string;
  name: string;
  file?: FileList;
  description: string;
  website: string;
};
type TProps = { formClassname?: string };

export const ContactForm = ({ formClassname }: TProps) => {
  const methods = useForm<TForm>();
  const [isSuccess, setIsSuccess] = useState(false);

  const onSubmit: SubmitHandler<TForm> = async (data) => {
    if (data.website) {
      console.warn("Bot detected!");
      setIsSuccess(true);
      return;
    }
    try {
      console.log(data);

      methods.reset();
      setIsSuccess(true);
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <FormProvider {...methods}>
      <form
        className={cn("w-full xl:w-141.75 flex flex-col gap-6", formClassname)}
        onSubmit={methods.handleSubmit(onSubmit)}
      >
        <div className="sr-only opacity-0 absolute -z-10 pointer-events-none">
          <input
            {...methods.register("website")}
            tabIndex={-1}
            autoComplete="off"
            placeholder="Do not fill this"
          />
        </div>
        {isSuccess ? (
          <ContactFormSuccess />
        ) : (
          <>
            <ContactFormFields />
            <ContactFormFooter />
          </>
        )}
      </form>
    </FormProvider>
  );
};
