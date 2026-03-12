"use client";

import Autoplay from "embla-carousel-autoplay";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import { useRef, useState } from "react";
import { Button } from "@/shared";
import { Carousel, type CarouselApi, CarouselContent, CarouselItem } from "@/shared/ui/carousel";

export const ReviewSlider = () => {
  const [api, setApi] = useState<CarouselApi>();
  const plugin = useRef(Autoplay({ delay: 3000, stopOnInteraction: true }));
  const onPrev = () => api?.scrollPrev();
  const onNext = () => api?.scrollNext();
  const reviews = [
    {
      icon: "/showcases/happyFeetIcon.svg",
      title: "Happy Feet",
      subTitle: "React Native, Figma",
      review:
        "The team delivered a seamless mobile experience. The UI/UX design in Figma was top-notch, and the React Native implementation feels as smooth as a native app. Highly recommend for healthcare and wellness projects!",
    },
    {
      icon: "/showcases/jeatasenIcon.svg",
      title: "Jeatasen Bil",
      subTitle: "React Native, Figma",
      review:
        "Fantastic work on our automotive platform. They managed to integrate complex inventory features into a very intuitive interface. The performance of the app on both iOS and Android is flawless.",
    },
    {
      icon: "/showcases/masterIcon.svg",
      title: "Maystry",
      subTitle: "React Native, Figma",
      review:
        "A game-changer for our service marketplace. The developers understood our business logic perfectly and translated it into a beautiful, functional app. Communication was transparent and professional throughout the sprint.",
    },
    {
      icon: "/showcases/voiseTrainingIcon.svg",
      title: "Traning Voice",
      subTitle: "React Native, Figma",
      review:
        "Working with the team was a breeze. They handled the audio processing challenges in React Native with ease, and the design system they created in Figma is very easy to scale in the future.",
    },
  ];

  return (
    <div className="w-full flex flex-col gap-4 xl:gap-5 h-full justify-between bg-owner-bg rounded-xl p-4 xl:p-5">
      <Carousel
        setApi={setApi}
        opts={{
          align: "start",
          loop: true,
        }}
        plugins={[plugin.current]}
        className="w-full"
      >
        <CarouselContent className="">
          {reviews.map((item) => (
            <CarouselItem key={item.title} className="pl-5">
              <div className="h-full flex flex-col gap-6 ">
                <div className="flex gap-4 items-center">
                  <div className="relative size-14 rounded-2xl overflow-hidden">
                    <Image src={item.icon} alt={item.title} fill className="object-cover" />
                  </div>
                  <div className="flex flex-col gap-1 md:gap-2">
                    <h4 className="text-20 lg:text-24 font-medium">{item.title}</h4>
                    <p className="text-16 text-menu-foreground font-semibold tracking-wider">
                      {item.subTitle}
                    </p>
                  </div>
                </div>

                <p className="text-14 leading-relaxed text-menu-foreground line-clamp-6">
                  &ldquo;{item.review}&rdquo;
                </p>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
      <div className="flex flex-col gap-4 lg:flex-row-reverse justify-between">
        <div className="flex gap-4">
          <Image src={"/Icons/clutch.svg"} alt="clutch" width={48} height={48}></Image>
          <Image src={"/Icons/goodfirm.svg"} alt="good-firm" width={48} height={48}></Image>
          <Image src={"/Icons/upwork.svg"} alt="upwork" width={48} height={48}></Image>
          <Image src={"/Icons/designRush.svg"} alt="design-rush" width={48} height={48}></Image>
        </div>
        <div className="flex gap-4">
          <Button onClick={onPrev} className="w-12 h-12" variant={"slider"}>
            <ChevronLeft className="size-6" />
          </Button>
          <Button onClick={onNext} className="w-12 h-12" variant={"slider"}>
            <ChevronRight className="size-6" />
          </Button>
        </div>
      </div>
    </div>
  );
};
