import * as React from "react";
import { Input } from "../ui/input";
import { cn } from "../utils";

type InputFieldProps = {
  label?: React.ReactNode;
  error?: string;
  hint?: string;
  wrapperClassName?: string;
  inputClassName?: string;
} & React.ComponentProps<typeof Input>;

export const InputField = ({
  label,
  error,
  hint,
  id,
  wrapperClassName,
  inputClassName,
  ...props
}: InputFieldProps) => {
  const autoId = React.useId();
  const inputId = id ?? autoId;

  return (
    <div className={cn("relative flex-1", wrapperClassName)}>
      {label && (
        <label htmlFor={inputId} className="mb-1 block text-sm font-medium">
          {label}
        </label>
      )}

      <Input
        id={inputId}
        {...props}
        className={inputClassName}
        aria-invalid={!!error}
        aria-describedby={error ? `${inputId}-error` : undefined}
      />

      {error ? (
        <p id={`${inputId}-error`} className="absolute -bottom-5 text-xs text-destructive">
          {error}
        </p>
      ) : (
        hint && <p className="mt-1 text-xs text-muted-foreground">{hint}</p>
      )}
    </div>
  );
};
