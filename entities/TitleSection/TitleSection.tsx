"use client";
import { useInViewOnce } from "@/shared/hooks";
import { cn } from "@/shared/utils";

type TitleSectionProps = {
  title: React.ReactNode;
  subtitle?: React.ReactNode;
  className?: string;
  animate?: boolean;
};

export const TitleSection = ({ title, className, subtitle, animate = true }: TitleSectionProps) => {
  const { ref, inView } = useInViewOnce(
    animate ? { threshold: 0.5, rootMargin: "0px 0px 5% 0px" } : { threshold: 0 },
  );

  const show = animate ? inView : true;

  return (
    <div
      className={cn(
        "mb-8 xl:mb-10",
        animate && "will-change-transform transition-transform duration-500 ease-out",
        show ? "translate-y-0" : "translate-y-12",
        className,
      )}
    >
      <h2
        ref={animate ? ref : undefined}
        className={cn(
          "font-semibold uppercase text-header-fg text-32 lg:text-48 xl:text-64 flex gap-px",
          animate && "will-change-opacity transition-opacity duration-500 ease-out",
          show ? "opacity-100" : "opacity-0",
        )}
      >
        <span className="text-primary" aria-hidden>
          /
        </span>
        {title}
      </h2>

      {subtitle ? (
        <p className="mt-3 text-14 max-w-182 md:text-16 text-menu-foreground">{subtitle}</p>
      ) : null}
    </div>
  );
};
