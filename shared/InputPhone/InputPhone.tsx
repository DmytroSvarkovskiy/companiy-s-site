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
import { useCurrentLocale } from "@/lib/index.client";
import { Popover, PopoverContent, PopoverTrigger } from "@/shared/ui/popover";
import { cn } from "@/shared/utils";
import { InputField } from "../InputField/InputField";

type InputPhoneProps = {
  label?: React.ReactNode;
  error?: string;
  value?: string;
  onChange?: (value: string) => void;
  id?: string;
  placeholder?: string;
};

const getCountryName = (iso2: string, locale: string) => {
  try {
    const displayNames = new Intl.DisplayNames([locale], { type: "region" });
    return displayNames.of(iso2.toUpperCase());
  } catch {
    return iso2;
  }
};

export function InputPhone({ label, error, value, onChange, id, placeholder }: InputPhoneProps) {
  const autoId = React.useId();
  const inputId = id ?? autoId;
  const locale = useCurrentLocale();
  const [open, setOpen] = React.useState(false);

  const { inputValue, handlePhoneValueChange, country, setCountry, inputRef } = usePhoneInput({
    defaultCountry: "ua",
    value,
    disableDialCodeAndPrefix: true,
    onChange: (data) => {
      onChange?.(data.phone);
    },
  });

  return (
    <div className="w-full">
      <div
        className={cn(
          "flex items-center h-12 rounded-md",
          "bg-transparent border border-input",
          "transition-[border-color,box-shadow] duration-200",
          "focus-within:border-primary",
          "focus-within:ring-3 focus-within:ring-primary/40",
          error &&
            "border-destructive focus-visible:ring-destructive/40 focus-within:ring-destructive/40",
        )}
      >
        <Popover open={open} onOpenChange={setOpen}>
          <PopoverTrigger asChild>
            <button
              type="button"
              title={country.name}
              className={cn(
                "flex bg-phone-btn items-center gap-1 px-3 h-full text-16 text-header-fg rounded-l-md w-27",
                "hover:bg-accent-foreground/10 transition-colors duration-200",
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
            <GlassCard className="w-70 max-h-72 " radius={16} blur={8} stopScrollPropagation>
              <ul className="py-1 w-full overflow-x-hidden overflow-y-auto h-70">
                {defaultCountries.map((c) => {
                  const parsed = parseCountry(c);
                  const active = parsed.iso2 === country.iso2;
                  const localizedName = getCountryName(parsed.iso2, locale) ?? parsed.name;
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
                          active && "text-primary bg-primary/10",
                        )}
                      >
                        <FlagImage iso2={parsed.iso2} />
                        <span className="flex-1">{localizedName}</span>
                        <span className="text-muted-foreground">+{parsed.dialCode}</span>
                      </button>
                    </li>
                  );
                })}
              </ul>
            </GlassCard>
          </PopoverContent>
        </Popover>

        {/* <div className="h-6 w-px bg-border" /> */}

        <InputField
          label={label}
          id={inputId}
          ref={inputRef}
          placeholder={placeholder}
          type="tel"
          value={inputValue}
          onChange={handlePhoneValueChange}
          error={error}
          wrapperClassName="flex-1 h-full"
          errorClassname="-left-28"
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
