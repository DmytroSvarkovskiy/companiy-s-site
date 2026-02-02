"use client";

import { LiquidGlass as CreativomaLiquidGlass } from "@creativoma/liquid-glass";
import * as React from "react";
import { cn } from "@/shared/utils";

type GlassCardProps = {
  as?: React.ElementType;

  className?: string; // класи на “скляну” карту (padding, flex, etc)
  children?: React.ReactNode;

  radius?: number;

  blur?: number; // 0..3 (умовно)
  distortion?: number; // 0..1 (умовно)

  hoverGradient?: boolean;

  profile?: "soft" | "default" | "strong";
  frequency?: string;
  seed?: number;

  stopScrollPropagation?: boolean;
};

const clamp = (v: number, min: number, max: number) => Math.max(min, Math.min(max, v));

export function GlassCard({
  as = "div",
  className,
  children,
  radius = 24,
  blur = 1.2,
  distortion = 0.2,
  hoverGradient,
  profile = "default",
  frequency,
  seed,
  stopScrollPropagation = false,
}: GlassCardProps) {
  const backdropBlurPx = React.useMemo(() => clamp(Math.round(blur * 6), 0, 14), [blur]);

  const displacementScale = React.useMemo(
    () => clamp(Math.round(distortion * 260), 0, 220),
    [distortion],
  );

  const preset = React.useMemo(() => {
    if (profile === "soft") return { f: "0.0025 0.0025", s: 2 };
    if (profile === "strong") return { f: "0.006 0.006", s: 3 };
    return { f: "0.0035 0.0035", s: 2 };
  }, [profile]);

  const turbulenceBaseFrequency = frequency ?? preset.f;
  const turbulenceSeed = seed ?? preset.s;

  const style = React.useMemo(() => ({ borderRadius: radius }), [radius]);

  const stopHandlers = React.useMemo(() => {
    if (!stopScrollPropagation) return undefined;
    return {
      onWheelCapture: (e: React.WheelEvent) => e.stopPropagation(),
      onTouchMoveCapture: (e: React.TouchEvent) => e.stopPropagation(),
      onTouchStartCapture: (e: React.TouchEvent) => e.stopPropagation(),
    };
  }, [stopScrollPropagation]);

  return (
    <CreativomaLiquidGlass
      as={as}
      tintColor="transparent"
      backdropBlur={backdropBlurPx}
      displacementScale={displacementScale}
      turbulenceBaseFrequency={turbulenceBaseFrequency}
      turbulenceSeed={turbulenceSeed}
      style={style}
      className={cn(
        "block w-full bg-transparent shadow-none! rounded-[inherit]",
        "glass-card overflow-hidden",
        hoverGradient && "glass-card--hoverGradient",
        className,
      )}
      {...stopHandlers}
    >
      {children}
    </CreativomaLiquidGlass>
  );
}
