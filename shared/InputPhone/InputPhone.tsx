"use client";

import * as React from "react";
import {
  type CountryIso2,
  defaultCountries,
  FlagImage,
  parseCountry,
  usePhoneInput,
} from "react-international-phone";
import "react-international-phone/style.css";

import { GlassCard } from "@/entities";
import { Popover, PopoverContent, PopoverTrigger } from "@/shared/ui/popover";
import { cn } from "@/shared/utils";
import { InputField } from "../InputField/InputField";

type InputPhoneProps = {
  label?: React.ReactNode;
  error?: string;
  value?: string;
  onChange?: (value: string) => void;
  id?: string;
};

export function InputPhone({ label, error, value, onChange, id }: InputPhoneProps) {
  const autoId = React.useId();
  const inputId = id ?? autoId;

  const [open, setOpen] = React.useState(false);

  const { inputValue, handlePhoneValueChange, country, setCountry, inputRef } = usePhoneInput({
    defaultCountry: "ua",
    value,
    onChange: (data) => onChange?.(data.phone),
  });

  return (
    <div className="w-full">
      <div
        className={cn(
          "flex items-center h-12 rounded-md",

          "bg-transparent border border-input",
          "transition-[border-color,box-shadow]",

          "focus-within:border-primary",
          "focus-within:ring-2 focus-within:ring-primary/40",
        )}
      >
        <Popover open={open} onOpenChange={setOpen}>
          <PopoverTrigger asChild>
            <button
              type="button"
              className={cn(
                "flex items-center gap-1 px-3 h-full text-16 text-header-fg",
                "hover:bg-muted/40",
                "focus:outline-none",
              )}
            >
              <FlagImage iso2={country.iso2} />
              <span className="">+{country.dialCode}</span>
              <span className="opacity-60">▾</span>
            </button>
          </PopoverTrigger>

          <PopoverContent
            side="bottom"
            align="start"
            sideOffset={6}
            className="p-0 bg-transparent border-0 shadow-none"
          >
            <GlassCard className="w-fit max-h-72 overflow-auto">
              <ul className="py-1 w-full">
                {defaultCountries.map((c) => {
                  const parsed = parseCountry(c);

                  return (
                    <li key={parsed.iso2}>
                      <button
                        type="button"
                        onClick={() => {
                          setCountry(parsed.iso2 as CountryIso2);
                          setOpen(false);
                        }}
                        className={cn(
                          "w-full flex items-center gap-2 px-3 py-2 text-16 text-left",
                          "hover:bg-muted/40",
                        )}
                      >
                        <FlagImage iso2={parsed.iso2} />
                        <span className="flex-1">{parsed.name}</span>
                        <span className="text-muted-foreground">+{parsed.dialCode}</span>
                      </button>
                    </li>
                  );
                })}
              </ul>
            </GlassCard>
          </PopoverContent>
        </Popover>

        <div className="h-6 w-px bg-border" />

        <InputField
          label={label}
          id={inputId}
          ref={inputRef}
          type="tel"
          value={inputValue}
          onChange={handlePhoneValueChange}
          error={error}
          wrapperClassName="flex-1"
          inputClassName={cn(
            "h-full w-full",
            "border-0 rounded-none",
            "focus:ring-0 focus-visible:ring-0",
            "px-4 text-16",
          )}
        />
      </div>
    </div>
  );
}
