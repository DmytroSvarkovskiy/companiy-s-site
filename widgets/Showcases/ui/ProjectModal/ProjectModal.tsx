"use client";
import { ChevronRight } from "lucide-react";
import { Button } from "@/shared";
import { CustomDialog } from "@/shared/index.client";
import type { TProject } from "../Projects/data";

type TProps = { item: TProject };

export const ProjectModal = ({ item }: TProps) => {
  return (
    <CustomDialog
      showClose={false}
      trigger={
        <Button variant={"hovered"} size={"icon"}>
          <ChevronRight />
        </Button>
      }
    ></CustomDialog>
  );
};
