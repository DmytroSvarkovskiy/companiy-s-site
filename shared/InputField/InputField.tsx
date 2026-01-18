import * as React from "react";
import { Input } from "../ui/input";
import { cn } from "../utils";

type InputFieldProps = {
  label?: React.ReactNode;
  error?: string;
  hint?: string;
  wrapperClassName?: string;
  inputClassName?: string;
  errorClassname?: string;
} & React.ComponentProps<typeof Input>;

export const InputField = ({
  label,
  error,
  hint,
  id,
  wrapperClassName,
  inputClassName,
  errorClassname,
  ...props
}: InputFieldProps) => {
  const autoId = React.useId();
  const inputId = id ?? autoId;

  return (
    <div className={cn("relative", wrapperClassName)}>
      {label && (
        <label htmlFor={inputId} className="mb-1 block text-14 font-medium">
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
        <p
          id={`${inputId}-error`}
          className={cn("absolute -bottom-5 text-14! text-destructive", errorClassname)}
        >
          {error}
        </p>
      ) : (
        hint && <p className="mt-1 text-14 text-muted-foreground">{hint}</p>
      )}
    </div>
  );
};
