"use client";

import {
  ComposableMap,
  createCoordinates,
  Geographies,
  Geography,
} from "@vnedyalk0v/react19-simple-maps";
import { useMemo } from "react";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/shared/index.client";
import { cn } from "@/shared/utils/tailwindUtils";
import data from "./data.json";

const geoUrl = data;
//  "https://unpkg.com/world-atlas@2.0.2/countries-110m.json";

type CountryLabels = Record<string, string>;

type MapElementProps = {
  className?: string;
  mapClassName?: string;
  countryLabels?: CountryLabels;
  showTooltipForInactive?: boolean;
};

const DEFAULT_ACTIVE_COUNTRIES = [
  "Ukraine",
  "Poland",
  "Germany",
  "France",
  "Spain",
  "Italy",
  "United States of America",
  "Canada",
  "Australia",
  "Brazil",
];

export const MapElement = ({
  className,
  mapClassName,
  countryLabels,
  showTooltipForInactive = true,
}: MapElementProps) => {
  const projectionConfig = useMemo(
    () => ({
      scale: 135,
      center: createCoordinates(0, 15),
    }),
    [],
  );

  const activeSet = new Set(DEFAULT_ACTIVE_COUNTRIES);

  const getCountryLabel = (countryName: string) => {
    return countryLabels?.[countryName] ?? countryName;
  };

  const getGeographyStyle = (isActive: boolean) => ({
    default: {
      fill: isActive ? "var(--color-map-active)" : "var(--color-map-inactive)",
      stroke: "#fff",
      strokeWidth: 0,
      outline: "none",
    },
    hover: {
      fill: isActive
        ? "color-mix(in srgb, var(--color-map-active) 85%, white)"
        : "color-mix(in srgb, var(--color-map-inactive) 85%, white)",
      stroke: "#fff",
      strokeWidth: 0.9,
      outline: "none",
      cursor: "pointer",
    },
    pressed: {
      fill: isActive
        ? "color-mix(in srgb, var(--color-map-active) 78%, black)"
        : "color-mix(in srgb, var(--color-map-inactive) 78%, black)",
      outline: "none",
    },
  });

  return (
    <div className={cn("relative w-full", className)}>
      <ComposableMap
        projection="geoEqualEarth"
        projectionConfig={projectionConfig}
        width={900}
        height={420}
        className={cn("w-full h-auto", mapClassName)}
        style={{
          width: "100%",
          height: "auto",
          display: "block",
        }}
      >
        <Geographies geography={geoUrl}>
          {({ geographies }) =>
            geographies.map((geo) => {
              const countryName = geo.properties?.name ?? "Unknown";
              const isActive = activeSet.has(countryName);
              const label = getCountryLabel(countryName);

              if (!isActive && !showTooltipForInactive) {
                return (
                  <Geography
                    key={geo.rsmKey + countryName}
                    geography={geo}
                    style={getGeographyStyle(false)}
                  />
                );
              }

              return (
                <Tooltip key={geo.rsmKey + countryName}>
                  <TooltipTrigger asChild>
                    <g>
                      <Geography geography={geo} style={getGeographyStyle(isActive)} />
                    </g>
                  </TooltipTrigger>

                  <TooltipContent side="top" className="rounded-full px-3 py-1.5">
                    {label}
                  </TooltipContent>
                </Tooltip>
              );
            })
          }
        </Geographies>
      </ComposableMap>
    </div>
  );
};
