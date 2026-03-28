"use client";

import { Slot } from "@radix-ui/react-slot";
import type * as React from "react";
import { cn } from "@/shared/utils";
import { useInViewOnce } from "../hooks";

type RevealPreset = "subtleUp" | "zoomSoft" | "blurUp" | "slideSkew" | "flipPop";

type RevealProps = {
  children: React.ReactNode;
  className?: string;
  asChild?: boolean;
  once?: boolean;
  threshold?: number;
  rootMargin?: string;
  preset?: RevealPreset;
  duration?: string;
  delay?: string;
};

const PRESET_CLASS: Record<RevealPreset, string> = {
  subtleUp: "fade-in slide-in-from-bottom-2",
  zoomSoft: "fade-in zoom-in-95 slide-in-from-bottom-1",
  blurUp: "fade-in blur-in-sm slide-in-from-bottom-2 zoom-in-98",
  slideSkew: "fade-in slide-in-from-right-2",
  flipPop: "fade-in zoom-in-95 spin-in-6",
};

export function Reveal({
  children,
  className,
  asChild = true,
  once = true,
  threshold = 0.1,
  rootMargin = "0px 0px -10% 0px",
  preset = "subtleUp",
  duration = "duration-700",
  delay = "delay-0",
}: RevealProps) {
  const { ref, inView } = useInViewOnce({ threshold, rootMargin, once });
  const Comp = asChild ? Slot : "div";

  const animationStyles = cn(
    "animate-in fill-mode-forwards opacity-100 backface-hidden transform-3d contain-[paint]",
    "ease-[cubic-bezier(0.16,1,0.3,1)]",
    duration,
    delay,
    PRESET_CLASS[preset],
  );

  return (
    <Comp
      ref={ref}
      className={cn(
        "transform-gpu will-change-[opacity,transform]",
        !inView ? "opacity-0" : animationStyles,
        className,
      )}
    >
      {children}
    </Comp>
  );
}
