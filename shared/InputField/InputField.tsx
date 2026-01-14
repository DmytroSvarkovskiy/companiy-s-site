import * as React from "react";
import { Input } from "../ui/input";

type InputFieldProps = {
  label?: React.ReactNode;
  error?: string;
  hint?: string;
} & React.ComponentProps<typeof Input>;

export const InputField = ({ label, error, hint, id, ...props }: InputFieldProps) => {
  const autoId = React.useId();
  const inputId = id ?? autoId;

  return (
    <div className="relative">
      {label && (
        <label htmlFor={inputId} className="text-sm font-medium">
          {label}
        </label>
      )}

      <Input
        id={inputId}
        {...props}
        aria-invalid={!!error}
        aria-describedby={error ? `${inputId}-error` : undefined}
      />

      {error && (
        <p id={`${inputId}-error`} className="absolute -bottom-5 text-xs text-destructive">
          {error}
        </p>
      )}
    </div>
  );
};
