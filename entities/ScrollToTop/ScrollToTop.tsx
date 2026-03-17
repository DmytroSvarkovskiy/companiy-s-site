"use client";
import { ChevronUp } from "lucide-react";
import { useEffect, useState } from "react";
import { Button } from "@/shared";

export const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsVisible(scrollPosition > 600);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  if (!isVisible) return null;

  return (
    <button
      type="button"
      onClick={scrollToTop}
      className="fixed! left-6 bottom-2 z-50 w-14 h-14 rounded-full
    md:left-auto md:right-6 md:bottom-10
    btn-brand btn-brand--on bg-primary/10 text-title hover:brightness-80 border border-primary flex items-center justify-center"
    >
      <ChevronUp />
    </button>
  );
};
