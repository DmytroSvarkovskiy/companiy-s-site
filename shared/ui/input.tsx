import type * as React from "react";

import { cn } from "@/shared/utils/tailwindUtils";

function Input({ className, type, ...props }: React.ComponentProps<"input">) {
  return (
    <input
      type={type}
      data-slot="input"
      className={cn(
        "h-12 w-full rounded-md px-3 text-base md:text-sm",

        "bg-transparent text-foreground placeholder:text-muted-foreground",
        "border border-input",

        "outline-none transition-[border-color,box-shadow]",
        "focus-visible:border-primary",
        "focus-visible:ring-2 focus-visible:ring-primary/40",

        "disabled:pointer-events-none disabled:opacity-50",

        className,
      )}
      {...props}
    />
  );
}

export { Input };
