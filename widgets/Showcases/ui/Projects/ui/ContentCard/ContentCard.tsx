"use client";

import { X } from "lucide-react";
import Image from "next/image";
import { GlassCard } from "@/entities";
import { Button } from "@/shared";
import type { TProject } from "../../data";

type TProps = { project: TProject; closeModal: () => void };
export const ContentCard = ({ closeModal, project }: TProps) => {
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
      <div className="flex flex-col gap-6 mt-6">
        {" "}
        <Image
          src={project.image}
          alt="project-image"
          width={1200}
          height={800}
          className="w-full  mt-6 lg:mt-10 "
        />
      </div>
    </div>
  );
};
