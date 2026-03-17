import type { Metadata, Viewport } from "next";
import { IBM_Plex_Sans, Orbitron } from "next/font/google";
import "../globals.css";
import { cookies } from "next/headers";
import { ScrollToTop } from "@/entities/index.client";
import { getCurrentLocale, getI18n } from "@/lib";
import { I18nProviderClient } from "@/lib/index.client";
import { COOKIES_KEYS, LOCALES } from "@/shared/consts";
import { TooltipProvider } from "@/shared/ui/tooltip";
import { cn } from "@/shared/utils";
import { Footer, Header } from "@/widgets";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL;

export const ibmPlexSans = IBM_Plex_Sans({
  subsets: ["latin", "cyrillic"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const orbitron = Orbitron({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  display: "swap",
  variable: "--font-orbitron",
});
export const generateViewport = async (): Promise<Viewport> => {
  return {
    themeColor: [
      { media: "(prefers-color-scheme: light)", color: "#ff6e03" },
      { media: "(prefers-color-scheme: dark)", color: "#1a1a1a" },
    ],
    colorScheme: "dark light",
    width: "device-width",
    initialScale: 1,
  };
};
export const generateMetadata = async ({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> => {
  const { locale } = await params;
  const t = await getI18n();

  const languageAlternates = LOCALES.reduce(
    (acc, locale) => {
      acc[locale] = `${siteUrl}/${locale}`;
      return acc;
    },
    {} as Record<string, string>,
  );
  return {
    metadataBase: new URL(siteUrl || ""),
    title: t("metaTitle"),
    description: t("metaDescription"),
    icons: {
      icon: [
        { url: "/Icons/logo.svg", type: "image/svg+xml" },
        { url: "/meta-icons/favicon-32x32.png", sizes: "32x32", type: "image/png" },
        { url: "/meta-icons/favicon-16x16.png", sizes: "16x16", type: "image/png" },
        { url: "/meta-icons/favicon-96x96.png", sizes: "96x96", type: "image/png" },
      ],
      apple: "/meta-icons/apple-touch-icon.png",
    },
    alternates: {
      canonical: `${siteUrl}/${locale}`,
      languages: {
        ...languageAlternates,
        "x-default": `${siteUrl}/en`,
      },
    },
    manifest: "/meta-icons/site.webmanifest",
    openGraph: {
      title: t("metaTitle"),
      description: t("metaDescription"),
      url: `${siteUrl}/${locale}`,
      siteName: "Kit Global",
      images: [
        {
          url: "/meta-icons/og-frame.jpg",
          width: 1200,
          height: 630,
          alt: t("metaTitle"),
        },
      ],
      locale: locale === "uk" ? "uk_UA" : "en_US",
      type: "website",
    },
    robots: {
      index: true,
      follow: true,
    },
  };
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [locale, cookieStore] = await Promise.all([getCurrentLocale(), cookies()]);

  const theme = cookieStore.get(COOKIES_KEYS.theme)?.value ?? "dark";

  return (
    <html lang={locale} className={cn(theme, "scroll-smooth")}>
      <body
        className={`${ibmPlexSans.className} ${orbitron.variable} antialiased flex flex-col relative`}
      >
        <I18nProviderClient locale={locale}>
          <TooltipProvider>
            <Header currentTheme={theme as "light" | "dark"} />
            <main> {children}</main>
            <Footer />
          </TooltipProvider>
        </I18nProviderClient>
        <ScrollToTop />
      </body>
    </html>
  );
}
