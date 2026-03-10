"use client";
import { Star } from "lucide-react";
import Image from "next/image";
import { GlassCard } from "@/entities";
import { Reveal } from "@/shared/Reveal/Reveal";
import { useProjectsData } from "./data";

export const ProductsList = () => {
  const products = useProjectsData();

  return (
    <ul className="mt-8 xl:mt-10 2xl:mt-12 grid grid-cols-1 gap-4 lg:gap-5 justify-between; w-full md:grid-cols-2">
      {products?.map((product) => (
        <li key={product.title}>
          <GlassCard hoverGradient className="flex flex-col w-full p-6 2xl:p-9">
            <Reveal preset="zoomSoft" asChild className="h-full">
              <div>
                <div className="bg-phone-btn rounded-2xl p-4 2xl:p-5 flex flex-col gap-2 md:h-70 lg:h-52 xl:h-auto md:justify-between">
                  <p className="font-semibold text-menu-foreground">{product.eyebrow}</p>
                  <p className="font-medium text-24 lg:text-28 2xl:text-32 text-title mb-2 xl:mb-4">
                    {product.title}
                  </p>
                  <p className="text-menu-foreground">{product.description}</p>
                </div>
                <div className="relative w-full overflow-hidden rounded-2xl aspect-525/360 my-6">
                  <Image
                    src={product.src}
                    alt={product.title}
                    fill
                    unoptimized
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 525px"
                  />
                </div>
                <div className="bg-phone-btn rounded-2xl p-4 2xl:p-5">
                  <div className="grid grid-cols-1 xl:grid-cols-3 xl:items-start">
                    <div className="py-3 xl:py-0 md:px-5 xl:first:pl-0 xl:last:pr-0">
                      <p className="text-12 text-menu-foreground font-medium">
                        {product.stats.establishedAudience.label}
                      </p>
                      <p className="mt-1 text-18 font-bold text-title">
                        {product.stats.establishedAudience.value}
                      </p>
                      <p className="mt-1 text-12 text-menu-foreground">
                        <span className="text-primary font-medium">
                          {product.stats.establishedAudience.deltaLabel}
                        </span>
                      </p>
                    </div>

                    <div className="h-px w-full bg-border/30 xl:hidden" />

                    <div className="py-3 xl:py-0 md:px-5 xl:border-l xl:border-border/30">
                      <p className="text-12 text-menu-foreground">{product.stats.involved.label}</p>
                      <p className="mt-1 text-20 font-semibold text-title">
                        {product.stats.involved.value}
                      </p>
                      <p className="mt-1 text-12 text-menu-foreground">
                        <span className="text-primary font-medium">
                          {product.stats.involved.deltaLabel}
                        </span>
                      </p>
                    </div>

                    <div className="h-px w-full bg-border/30 xl:hidden" />

                    <div className="py-3 xl:py-0 md:px-5 xl:border-l xl:border-border/30 h-full">
                      <p className="text-12 text-menu-foreground">
                        {product.stats.googlePlayRating.label}
                      </p>
                      <div className="mt-1 flex items-center gap-1">
                        <p className="text-20 font-semibold text-title">
                          {product.stats.googlePlayRating.value}
                        </p>

                        <Star className="size-4 text-yellow-400" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>
          </GlassCard>
        </li>
      ))}
    </ul>
  );
};
