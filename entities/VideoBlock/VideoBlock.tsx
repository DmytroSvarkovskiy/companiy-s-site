"use client";

import { useEffect, useRef } from "react";
import { cn } from "@/shared/utils/tailwindUtils";

type VideoBlockProps = {
  className?: string;
  videoClassName?: string;
  src?: string;
};

export const VideoBlock = ({
  className,
  videoClassName,
  src = "/video/video.mp4",
}: VideoBlockProps) => {
  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const observer = new IntersectionObserver(
      async ([entry]) => {
        if (!video) return;

        if (entry.isIntersecting) {
          try {
            await video.play();
          } catch {}
        } else {
          video.pause();
        }
      },
      {
        threshold: 0.6,
      },
    );

    observer.observe(video);

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div className={cn("w-full", className)}>
      <video
        ref={videoRef}
        src={src}
        muted
        loop
        playsInline
        preload="metadata"
        className={cn("block h-auto w-full object-cover", "aspect-9/16", videoClassName)}
      />
    </div>
  );
};
