"use client";

import { LiquidGlass } from "@liquidglass/react";
import { cn } from "@/shared/utils";

type GlassCardProps = {
  className?: string;
  contentClassName?: string;
  children?: React.ReactNode;
  radius?: number;
  blur?: number;
  contrast?: number;
  brightness?: number;
  saturation?: number;
  displacementScale?: number;
  shadowIntensity?: number;
  elasticity?: number;
  hoverGradient?: boolean;
};

export function GlassCard({
  className,
  contentClassName,
  children,
  radius = 24,
  blur = 1.5,
  contrast = 1,
  brightness = 1,
  saturation = 1,
  displacementScale = 0.2,
  shadowIntensity = 0,
  elasticity = 0.3,
  hoverGradient,
}: GlassCardProps) {
  const CardShell = (
    <div
      className={cn("relative isolate overflow-hidden rounded-[inherit] h-full w-full", className)}
      style={{ borderRadius: radius }}
    >
      <div className={cn("relative z-10 h-full w-full", contentClassName)}>{children}</div>
    </div>
  );

  return (
    <LiquidGlass
      zIndex={1}
      borderRadius={radius}
      blur={blur}
      contrast={contrast}
      brightness={brightness}
      saturation={saturation}
      displacementScale={displacementScale}
      shadowIntensity={shadowIntensity}
      elasticity={elasticity}
      className="bg-transparent! shadow-none!"
    >
      <div
        className={cn(
          "glass-card h-full w-full rounded-[inherit]",
          hoverGradient && "glass-card--hoverGradient",
        )}
        style={{ borderRadius: radius }}
      >
        {CardShell}
      </div>
    </LiquidGlass>
  );
}
