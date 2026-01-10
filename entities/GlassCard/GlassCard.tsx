"use client";

import { LiquidGlass } from "@liquidglass/react";
import type React from "react";

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
};

export function GlassCard({
  className,
  contentClassName,
  children,
  radius = 24,
  blur = 0.5,
  contrast = 1,
  brightness = 1,
  saturation = 1,
  displacementScale = 0.3,
  shadowIntensity = 0,
  elasticity = 0.3,
}: GlassCardProps) {
  return (
    <div className={className}>
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
        className="h-full w-full shadow-none! bg-transparent!"
      >
        <div className="h-full w-full rounded-[inherit] glass-card">
          <div className={contentClassName}>{children}</div>
        </div>
      </LiquidGlass>
    </div>
  );
}
