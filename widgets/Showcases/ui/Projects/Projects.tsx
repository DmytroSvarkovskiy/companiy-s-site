import { ChevronRight } from "lucide-react";
import Image from "next/image";
import { GlassCard } from "@/entities";
import { Button } from "@/shared";
import { CustomDialog } from "@/shared/index.client";
import { data } from "./data";

export const Projects = () => {
  return (
    <div className="container grid grid-cols-1 md:grid-cols-2 3xl:grid-cols-3 gap-4 lg:gap-5 3xl:gap-7 items-stretch">
      {data?.map((item) => (
        <CustomDialog
          key={item.title}
          showClose={false}
          trigger={
            <div className="md:pointer-events-none w-full h-full block">
              <GlassCard className=" w-full h-full p-6 lg:p-10 flex flex-col justify-baseline">
                <div className="flex justify-between gap-2">
                  <div className="flex gap-2 lg:gap-4 items-start">
                    <Image
                      src={item.icon}
                      alt={item.title}
                      width={62}
                      height={62}
                      className="size-8 md:size-11 lg:size-15.5"
                    />
                    <span>
                      <p className="font-medium text-20 md:text-24 xl:text-32 text-block-fg">
                        {item.title}
                      </p>
                      <p className="text-14 text-menu-foreground">{item.subTitle}</p>
                    </span>
                  </div>
                  <Button
                    className="md:pointer-events-auto md:size-12 xl:size-16"
                    variant={"hovered"}
                    size={"icon"}
                  >
                    <ChevronRight className="md:size-6" />
                  </Button>
                </div>
                <Image
                  src={item.image}
                  alt="project-image"
                  width={1200}
                  height={800}
                  className="w-full  mt-6 lg:mt-10 "
                />
              </GlassCard>
            </div>
          }
        ></CustomDialog>
      ))}
    </div>
  );
};
