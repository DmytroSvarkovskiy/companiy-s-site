"use client";
import { X } from "lucide-react";
import { useState } from "react";
import { ContactForm } from "@/entities";
import { Button } from "@/shared";
import { CustomDialog } from "@/shared/index.client";

type TProps = { title?: string; trigger: React.ReactNode };

export const ContactModal = ({ title, trigger }: TProps) => {
  const [open, setOpen] = useState(false);
  const closeModal = () => setOpen(false);

  return (
    <CustomDialog
      onOpenChange={setOpen}
      open={open}
      trigger={trigger}
      showClose={false}
      contentClassName="bg-menu p-6 xl:p-8 w-fit"
      className="xl:min-w-158"
    >
      <div className="flex justify-between items-center mb-4 md:mb-5 lg:mb-8">
        <p className="font-semibold text-28 lg:text-48">{title}</p>
        <Button size={"icon"} variant={"hovered"} type="button" onClick={closeModal}>
          <X className="size-5 md:size-7" />
        </Button>
      </div>
      <ContactForm />
    </CustomDialog>
  );
};
