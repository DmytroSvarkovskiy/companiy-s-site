"use client";

import { Check, Paperclip } from "lucide-react";
import { useRef } from "react";
import { useFormContext } from "react-hook-form";
import { Button } from "@/shared";
import { cn } from "@/shared/utils";
import type { TForm } from "../../ContactForm";

const FILE_ACCEPT = "image/jpeg,image/png,image/webp,application/pdf,.doc,.docx,.xls,.xlsx";

export const ContactFormFile = () => {
  const { watch, setValue } = useFormContext<TForm>();
  const fileRef = useRef<HTMLInputElement | null>(null);

  const hasFile = !!watch("file")?.length;

  return (
    <>
      <input
        type="file"
        hidden
        accept={FILE_ACCEPT}
        ref={fileRef}
        onChange={(e) => {
          const files = e.target.files;
          if (files?.length) {
            setValue("file", files, { shouldValidate: true });
          }
        }}
      />

      <Button
        type="button"
        variant="hovered"
        size="icon"
        className="w-14 h-14 rounded-md relative overflow-hidden"
        onClick={() => fileRef.current?.click()}
      >
        <Paperclip
          className={cn(
            "size-5 absolute transition-all duration-200 ease-out",
            hasFile ? "scale-75 opacity-0" : "scale-100 opacity-100",
          )}
        />

        <Check
          className={cn(
            "size-5 absolute text-green-500 transition-all duration-200 ease-out",
            hasFile ? "scale-100 opacity-100" : "scale-75 opacity-0",
          )}
        />
      </Button>
    </>
  );
};
