"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";

export function useFilterParam(paramKey = "category") {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const value = searchParams.get(paramKey) ?? "all";

  const setValue = (next: string) => {
    const sp = new URLSearchParams(searchParams.toString());

    if (next === "all") sp.delete(paramKey);
    else sp.set(paramKey, next);

    router.replace(`${pathname}?${sp.toString()}`, { scroll: false });
  };

  return { value, setValue };
}
