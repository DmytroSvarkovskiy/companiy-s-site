"use client";

import * as React from "react";
import {
  defaultCountries,
  FlagImage,
  parseCountry,
  usePhoneInput,
} from "react-international-phone";
import "react-international-phone/style.css";

import { useCurrentLocale } from "@/lib/index.client";
import { Popover, PopoverContent, PopoverTrigger } from "@/shared/ui/popover";
import { cn } from "@/shared/utils";
import { InputField } from "../InputField/InputField";
import { CountrySelect } from "./ui/index.client";

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

export const InputPhone = ({ label, error, value, onChange, id, placeholder }: InputPhoneProps) => {
  const locale = useCurrentLocale();
  const autoId = React.useId();
  const inputId = id ?? autoId;
  const [open, setOpen] = React.useState(false);
  const [searchQuery, setSearchQuery] = React.useState("");

  const { inputValue, handlePhoneValueChange, country, setCountry, inputRef } = usePhoneInput({
    defaultCountry: locale === "en" ? "gb" : "ua",
    value,
    disableDialCodeAndPrefix: true,
    onChange: (data) => onChange?.(data.phone),
  });

  const filteredCountries = React.useMemo(() => {
    const query = searchQuery.toLowerCase();
    return defaultCountries.filter((c) => {
      const parsed = parseCountry(c);
      const name = getCountryName(parsed.iso2, locale)?.toLowerCase();
      return name?.includes(query) || parsed.dialCode.includes(query);
    });
  }, [searchQuery, locale]);
  return (
    <div className="w-full">
      <div
        className={cn(
          "flex items-center h-12 rounded-md transition-[border-color,box-shadow] duration-200 bg-transparent border",
          !error
            ? [
                "border-input",
                "focus-within:border-primary",
                "focus-within:ring-3 focus-within:ring-primary/40",
              ]
            : [
                "border-destructive",
                "focus-within:border-destructive",
                "focus-within:ring-3 focus-within:ring-destructive/40",
                "ring-destructive/20",
              ],
        )}
      >
        <Popover
          open={open}
          onOpenChange={(o) => {
            setOpen(o);
            if (!o) setSearchQuery("");
          }}
        >
          <PopoverTrigger asChild>
            <button
              type="button"
              className="shrink-0 flex bg-phone-btn items-center gap-1 px-3 h-full text-16 text-header-fg rounded-l-md w-27 hover:bg-accent-foreground/10 focus:outline-none"
            >
              <FlagImage iso2={country.iso2} />
              <span>+{country.dialCode}</span>
              <span className="opacity-60 text-12">▼</span>
            </button>
          </PopoverTrigger>

          <PopoverContent
            align="start"
            sideOffset={6}
            className="p-0 bg-transparent border-0 shadow-none z-110"
          >
            <CountrySelect
              searchQuery={searchQuery}
              setSearchQuery={setSearchQuery}
              countries={filteredCountries}
              onSelect={(p) => {
                setCountry(p.iso2);
                setOpen(false);
              }}
              selectedIso2={country.iso2}
              locale={locale}
              getCountryName={getCountryName}
            />
          </PopoverContent>
        </Popover>

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
          errorClassname="-left-27"
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
};
