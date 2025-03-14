import Navbar from "@/components/navbar";
import { ThemeProvider } from "@/components/theme-provider";
import { TooltipProvider } from "@/components/ui/tooltip";
import { DATA } from "@/data/resume";
import { cn } from "@/lib/utils";
import type { Metadata } from "next";
// import { Inter as FontSans } from "next/font/google";
import { JetBrains_Mono } from "next/font/google";

import { Analytics } from "@vercel/analytics/next";

import localFont from "next/font/local";

// Font files can be colocated inside of `app`
const myFont = localFont({
  src: "../assets/fonts/Parkinsans.ttf",
  variable: "--font-parkinsans",
  display: "swap",
});

// const literFont = localFont({
//   src: "../assets/fonts/Liter-Regular.ttf",
//   variable: "--font-liter",
//   display: "swap",
// });

// Add JetBrains Mono font
const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-mono",
  display: "swap",
});

import "./globals.css";

const fontSans = localFont({
  src: "../assets/fonts/Liter-Regular.ttf",
  // variable: "--font-liter",
  variable: "--font-sans",
});

export const metadata: Metadata = {
  metadataBase: new URL(DATA.url),
  title: {
    default: DATA.name,
    template: `%s | ${DATA.name}`,
  },
  description: DATA.description,
  openGraph: {
    title: `${DATA.name}`,
    description: DATA.description,
    url: DATA.url,
    siteName: `${DATA.name}`,
    locale: "en_US",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  twitter: {
    title: `${DATA.name}`,
    card: "summary_large_image",
  },
  verification: {
    google: "",
    yandex: "",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased max-w-3xl mx-auto py-12 sm:py-24 px-6 w-full h-full relative lg:static",
          fontSans.variable,
          // literFont.variable,
          myFont.variable,
          jetbrainsMono.variable
        )}
      >
        {/* <div
          className="z-10 opacity-50 pointer-events-none mix-blend-multiply bg-contain  w-full h-full block fixed "
          style={{
            backgroundPosition: "0 0",
            inset: "0% auto auto 0%",
            backgroundImage: "url(/texture.webp)",
          }}
        /> */}
        <ThemeProvider attribute="class" defaultTheme="light">
          <TooltipProvider delayDuration={0}>
            {children}
            <Navbar />
          </TooltipProvider>
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  );
}
