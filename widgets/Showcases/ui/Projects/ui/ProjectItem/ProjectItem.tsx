"use client";

import { useState } from "react";
import { CustomDialog } from "@/shared/index.client";
import type { TProject } from "../../data";
import { ContentCard } from "../ContentCard/ContentCard";
import { TriggerCard } from "../TriggerCard/TriggerCard";

type TProps = { project: TProject };
export const ProjectItem = ({ project }: TProps) => {
  const [open, setOpen] = useState(false);
  const closeModal = () => setOpen(false);
  return (
    <CustomDialog
      open={open}
      onOpenChange={setOpen}
      key={project.title}
      showClose={false}
      className="md:min-w-180 xl:min-w-272 border-transparent rounded-2xl bg-menu"
      contentClassName="p-0 border-none"
      trigger={
        <div className="md:pointer-events-none w-full h-full block">
          <TriggerCard project={project} />
        </div>
      }
    >
      <ContentCard project={project} closeModal={closeModal} />
    </CustomDialog>
  );
};
