import React, { useId } from "react";
import { cn } from "@/shared/utils";

type TTexAreaProps = React.TextareaHTMLAttributes<HTMLTextAreaElement> & {
  label?: string;
  error?: string;
};

export const TextArea = React.forwardRef<HTMLTextAreaElement, TTexAreaProps>(
  ({ label, error, className, ...props }, ref) => {
    const autoId = useId();
    const inputId = props.id ?? autoId;

    return (
      <div className="relative w-full ">
        {label && (
          <label htmlFor={inputId} className="block text-16 font-medium text-foreground">
            {label}
          </label>
        )}

        <textarea
          ref={ref}
          id={inputId}
          aria-invalid={!!error}
          aria-disabled={props.disabled}
          {...props}
          className={cn(
            "w-full resize-y min-h-30 rounded-md p-3 text-14 md:text-16",

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
        />

        {error && (
          <p id={`${inputId}-error`} className="absolute -bottom-4 text-14! text-destructive">
            {error}
          </p>
        )}
      </div>
    );
  },
);
