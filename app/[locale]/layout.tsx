import type { Metadata } from "next";
import { IBM_Plex_Sans, Orbitron } from "next/font/google";
import "../globals.css";
import { cookies } from "next/headers";
import { getCurrentLocale } from "@/lib";
import { I18nProviderClient } from "@/lib/index.client";
import { COOKIES_KEYS } from "@/shared/consts";
import { Footer, Header } from "@/widgets";

export const ibmPlexSans = IBM_Plex_Sans({
  subsets: ["latin", "cyrillic"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const orbitron = Orbitron({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Kit Global",
  description:
    "Створюємо швидкі мобільні та веб-рішення для бізнесу: UX/UI, розробка, масштабування,підтримка",
  icons: "/Icons/logo.svg",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [locale, cookieStore] = await Promise.all([getCurrentLocale(), cookies()]);

  const theme = cookieStore.get(COOKIES_KEYS.theme)?.value ?? "dark";

  return (
    <html lang={locale} className={theme}>
      <body className={`${ibmPlexSans.className} antialiased flex flex-col`}>
        <I18nProviderClient locale={locale}>
          <Header currentTheme={theme as "light" | "dark"} />
          <main> {children}</main>
          <Footer />
        </I18nProviderClient>
      </body>
    </html>
  );
}
