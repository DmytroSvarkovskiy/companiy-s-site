import type * as React from "react";

import { cn } from "@/shared/utils/tailwindUtils";

function Input({ className, type, ...props }: React.ComponentProps<"input">) {
  return (
    <input
      type={type}
      data-slot="input"
      className={cn(
        "h-12 w-full rounded-md px-3 text-14 md:text-16",

        "bg-transparent text-foreground placeholder:text-muted-foreground",
        "border border-input",

        "outline-none transition-[border-color,box-shadow] duration-200",
        "focus-visible:border-primary",
        "focus-visible:ring-3 focus-visible:ring-primary/40",

        "disabled:pointer-events-none disabled:opacity-50",
        "aria-invalid:border-destructive",
        "aria-invalid:focus-visible:ring-destructive/40",
        className,
      )}
      {...props}
    />
  );
}

export { Input };
