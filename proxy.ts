import type { NextRequest } from "next/server";
import { createI18nMiddleware } from "next-international/middleware";
import { LOCALES } from "./shared/consts";

const I18nMiddleware = createI18nMiddleware({
  locales: LOCALES,
  defaultLocale: "en",
});

export function proxy(request: NextRequest) {
  return I18nMiddleware(request);
}

export const config = {
  matcher: ["/((?!api|static|.*\\..*|_next|favicon.ico|robots.txt).*)"],
};
