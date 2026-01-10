import { Button } from "@/shared/ui/button";
import { cn } from "@/shared/utils";

type ButtonRevealIconProps = React.ComponentProps<typeof Button> & {
  icon: React.ReactNode;
  shiftClassName?: string;
};

export function ButtonRevealIcon({
  icon,
  children,
  className,
  shiftClassName = "group-hover:-translate-x-3",
  ...props
}: ButtonRevealIconProps) {
  return (
    <Button
      {...props}
      className={cn(
        "group relative overflow-hidden",
        "hover:bg-primary hover:text-primary-foreground hover:[--brand-border-opacity:0]",
        className,
      )}
    >
      <span className="relative inline-flex items-center justify-center">
        <span
          className={cn(
            "transition-transform duration-300 ease-[cubic-bezier(0.34,1.56,0.64,1)]",
            shiftClassName,
          )}
        >
          {children}
        </span>

        <span
          aria-hidden
          className={cn(
            "pointer-events-none absolute left-full  top-1/2 -translate-y-1/2",
            "opacity-0 scale-95",
            "transition-[opacity,transform] duration-300 ease-[cubic-bezier(0.34,1.56,0.64,1)]",
            "group-hover:opacity-100 group-hover:scale-100",
          )}
        >
          {icon}
        </span>
      </span>
    </Button>
  );
}
