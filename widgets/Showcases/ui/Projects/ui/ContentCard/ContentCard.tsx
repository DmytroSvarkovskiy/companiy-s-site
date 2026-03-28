"use client";

import { X } from "lucide-react";
import Image from "next/image";
import { useScopedI18n } from "@/lib/index.client";
import { Button } from "@/shared";
import type { TProject } from "../../data";

type TProps = { project: TProject; closeModal: () => void };
export const ContentCard = ({ closeModal, project }: TProps) => {
  const t = useScopedI18n("showcases");

  const blocks = [
    { title: t("development"), text: project.development },
    { title: t("terms"), text: project.terms },
    { title: t("overView"), text: project.overview },
  ];

  return (
    <div className="w-full p-4 md:p-6 xl:p-10">
      <div className="flex justify-between items-center gap-2">
        <div className="flex gap-2 lg:gap-4 items-start">
          <Image
            src={project.icon}
            alt={project.title}
            width={62}
            height={62}
            className="size-8 md:size-11 lg:size-15.5"
          />
          <span>
            <p className="font-medium text-20 md:text-24 xl:text-48 text-block-fg">
              {project.title}
            </p>
            <p className="text-14 text-menu-foreground">{project.subTitle}</p>
          </span>
        </div>
        <Button
          className="md:size-12 xl:size-14"
          variant={"hovered"}
          size={"icon"}
          type="button"
          onClick={closeModal}
        >
          <X className="md:size-6" />
        </Button>
      </div>
      <div className="flex flex-col gap-6 md:gap-4 mt-6 md:flex-row-reverse md:items-start">
        <Image
          src={project.image}
          alt="project-image"
          width={560}
          height={500}
          sizes="(min-width: 768px) 400px,(min-width: 1200px) 520px, 100vw"
          className=" h-auto shrink-0 object-contain"
        />
        <div className="flex flex-col gap-4">
          {blocks?.map((el) => (
            <span key={el.title} className="text-16  flex flex-col gap-2">
              <p className="text-header-fg font-semibold">{el.title}</p>
              <p className="text-menu-foreground">{el.text}</p>
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};
