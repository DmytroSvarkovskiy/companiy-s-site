"use client";

import { Pause, Play } from "lucide-react";
import { type KeyboardEvent, useEffect, useRef, useState } from "react";
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
  const [isPlaying, setIsPlaying] = useState(false);

  const togglePlay = () => {
    if (!videoRef.current) return;
    if (videoRef.current.paused) {
      videoRef.current.play();
      setIsPlaying(true);
    } else {
      videoRef.current.pause();
      setIsPlaying(false);
    }
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLButtonElement>) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      togglePlay();
    }
  };

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const observer = new IntersectionObserver(
      async ([entry]) => {
        if (entry.isIntersecting) {
          try {
            await video.play();
            setIsPlaying(true);
          } catch {}
        } else {
          video.pause();
          setIsPlaying(false);
        }
      },
      { threshold: 0.6 },
    );

    observer.observe(video);
    return () => observer.disconnect();
  }, []);

  return (
    <button
      type="button"
      className={cn(
        "group relative block w-full overflow-hidden rounded-2xl aspect-9/16",
        className,
      )}
      onClick={togglePlay}
      onKeyDown={handleKeyDown}
    >
      <video
        ref={videoRef}
        src={src}
        muted={true}
        loop
        playsInline
        className={cn("absolute inset-0 h-full w-full object-cover", videoClassName)}
      />

      <div
        className={cn(
          "absolute inset-0 flex items-center justify-center bg-black/10 transition-opacity duration-300",
          isPlaying ? "opacity-0 group-hover:opacity-100" : "opacity-100",
        )}
      >
        <div className="flex h-20 w-20 items-center justify-center rounded-full bg-white/30 backdrop-blur-md">
          {isPlaying ? (
            <Pause className="h-10 w-10 fill-white text-white" />
          ) : (
            <Play className="ml-1 h-10 w-10 fill-white text-white" />
          )}
        </div>
      </div>
    </button>
  );
};
