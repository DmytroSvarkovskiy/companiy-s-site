"use client";
import { ChevronRight } from "lucide-react";
import Image from "next/image";
import { GlassCard } from "@/entities";
import { Button } from "@/shared";
import type { TProject } from "../../data";

type TProps = { project: TProject };

export const TriggerCard = ({ project }: TProps) => {
  return (
    <GlassCard className=" w-full h-full p-6 lg:p-10 flex flex-col justify-baseline">
      <div className="flex justify-between gap-2">
        <div className="flex gap-2 lg:gap-4 items-start">
          <Image
            src={project.icon}
            alt={project.title}
            width={62}
            height={62}
            className="size-8 md:size-11 lg:size-15.5"
          />
          <span>
            <p className="font-medium text-20 md:text-24 xl:text-32 text-block-fg">
              {project.title}
            </p>
            <p className="text-14 text-menu-foreground">{project.subTitle}</p>
          </span>
        </div>
        <Button
          className="md:pointer-events-auto md:size-12 xl:size-16"
          variant={"hovered"}
          size={"icon"}
          aria-label="open product info"
          aria-haspopup="dialog"
        >
          <ChevronRight className="md:size-6" />
        </Button>
      </div>
      <Image
        src={project.image}
        alt="project-image"
        width={1200}
        height={800}
        className="w-full  mt-6 lg:mt-10 "
      />
    </GlassCard>
  );
};
