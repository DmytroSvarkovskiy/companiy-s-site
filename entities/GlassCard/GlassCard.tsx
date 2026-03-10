"use client";

import { LiquidGlass as CreativomaLiquidGlass } from "@creativoma/liquid-glass";
import * as React from "react";
import { useMediaQuery } from "@/shared/hooks";
import { cn } from "@/shared/utils";

type GlassCardProps = {
  as?: React.ElementType;
  className?: string;
  children?: React.ReactNode;
  radius?: number;

  blur?: number;
  distortion?: number;

  hoverGradient?: boolean;

  profile?: "soft" | "default" | "strong";
  frequency?: string;
  seed?: number;

  stopScrollPropagation?: boolean;

  desktopFrom?: number;
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
  desktopFrom = 1200,
}: GlassCardProps) {
  const isDesktopGlass = useMediaQuery(`(min-width: ${desktopFrom}px)`);
  const backdropBlurPx = clamp(Math.round(blur * 6), 4, 14);

  const stopHandlers = React.useMemo(() => {
    if (!stopScrollPropagation) return undefined;
    return {
      onWheelCapture: (e: React.WheelEvent) => e.stopPropagation(),
      onTouchMoveCapture: (e: React.TouchEvent) => e.stopPropagation(),
      onTouchStartCapture: (e: React.TouchEvent) => e.stopPropagation(),
    };
  }, [stopScrollPropagation]);

  if (!isDesktopGlass) {
    const Comp = as as React.ElementType;

    return (
      <Comp
        style={{
          borderRadius: radius,
          backdropFilter: `blur(${backdropBlurPx}px)`,
          WebkitBackdropFilter: `blur(${backdropBlurPx}px)`,
        }}
        className={cn(
          "block w-full rounded-[inherit] bg-glassBg",
          "glass-card-simple",
          hoverGradient && "glass-card-simple--hoverGradient",
          className,
        )}
        {...stopHandlers}
      >
        {children}
      </Comp>
    );
  }

  const displacementScale = clamp(Math.round(distortion * 260), 0, 220);

  const preset = (() => {
    if (profile === "soft") return { f: "0.0025 0.0025", s: 2 };
    if (profile === "strong") return { f: "0.006 0.006", s: 3 };
    return { f: "0.0035 0.0035", s: 2 };
  })();

  const turbulenceBaseFrequency = frequency ?? preset.f;
  const turbulenceSeed = seed ?? preset.s;

  return (
    <CreativomaLiquidGlass
      as={as}
      tintColor="var(--glass-bg)"
      backdropBlur={backdropBlurPx}
      displacementScale={displacementScale}
      turbulenceBaseFrequency={turbulenceBaseFrequency}
      turbulenceSeed={turbulenceSeed}
      style={{ borderRadius: radius }}
      className={cn(
        "block w-full bg-transparent shadow-none! rounded-[inherit]",
        "glass-card-simple overflow-hidden",
        hoverGradient && "glass-card-simple--hoverGradient",
        className,
      )}
      {...stopHandlers}
    >
      {children}
    </CreativomaLiquidGlass>
  );
}
