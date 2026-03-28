"use client";
import { Search } from "lucide-react";
import {
  type CountryData,
  FlagImage,
  type ParsedCountry,
  parseCountry,
} from "react-international-phone";
import { useI18n } from "@/lib/index.client";
import { cn } from "@/shared/utils";

type CountrySelectorProps = {
  searchQuery: string;
  setSearchQuery: (val: string) => void;
  countries: CountryData[];
  onSelect: (country: ParsedCountry) => void;
  selectedIso2: string;
  locale: string;
  getCountryName: (iso2: string, locale: string) => string | undefined;
};

export const CountrySelect = ({
  searchQuery,
  setSearchQuery,
  countries,
  onSelect,
  selectedIso2,
  locale,
  getCountryName,
}: CountrySelectorProps) => {
  const t = useI18n();
  return (
    <div className="w-70 overflow-hidden rounded-lg bg-phone-btn shadow-xl border border-white/10">
      <div className="p-2 border-b border-white/10">
        <div className="relative flex items-center">
          <Search className="absolute left-3 size-4 opacity-50" />
          <input
            placeholder={t("search_country")}
            className="w-full bg-white/5 border border-white/10 rounded-lg py-1.5 pl-9 pr-3 text-14 outline-none focus:border-primary/50 transition-colors"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
      </div>

      <ul
        className="py-1 w-full overflow-y-auto max-h-64 custom-scrollbar"
        onWheel={(e) => e.stopPropagation()}
        onTouchStart={(e) => e.stopPropagation()}
        onTouchMove={(e) => e.stopPropagation()}
      >
        {countries.length > 0 ? (
          countries.map((c) => {
            const parsed = parseCountry(c);
            const active = parsed.iso2 === selectedIso2;
            const name = getCountryName(parsed.iso2, locale) ?? parsed.name;

            return (
              <li key={parsed.iso2}>
                <button
                  type="button"
                  onClick={() => onSelect(parsed)}
                  className={cn(
                    "w-full flex items-center gap-3 px-4 py-2 text-14 text-left transition-colors hover:bg-white/10",
                    active && "text-primary bg-primary/10",
                  )}
                >
                  <FlagImage iso2={parsed.iso2} />
                  <span className="flex-1 truncate">{name}</span>
                  <span className="text-muted-foreground text-12">+{parsed.dialCode}</span>
                </button>
              </li>
            );
          })
        ) : (
          <li className="px-4 py-8 text-center text-14 opacity-50">{t("no_results")}</li>
        )}
      </ul>
    </div>
  );
};
