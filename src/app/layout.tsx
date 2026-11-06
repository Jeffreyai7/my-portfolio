import type { Metadata, Viewport } from "next";
import "./globals.css";
import { Geist, Geist_Mono, Instrument_Serif } from "next/font/google";
import Header from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import MotionProvider from "@/providers/MotionProvider";

const sans = Geist({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

const mono = Geist_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  display: "swap",
});

const display = Instrument_Serif({
  variable: "--font-display",
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
  display: "swap",
});

const title = "Jeffrey Irukeh — Front-End Engineer";
const description =
  "Front-end engineer in Lagos building fast, accessible web products with React, Next.js and TypeScript — from polished interfaces to APIs and Web3 integrations.";

export const metadata: Metadata = {
  title: { default: title, template: "%s — Jeffrey Irukeh" },
  description,
  keywords: [
    "Jeffrey Irukeh",
    "Front-End Engineer",
    "React Developer",
    "Next.js",
    "TypeScript",
    "Web3 Developer",
    "Lagos",
    "Nigeria",
  ],
  authors: [{ name: "Jeffrey Irukeh" }],
  openGraph: {
    title,
    description,
    type: "website",
    locale: "en_US",
  },
  twitter: { card: "summary_large_image", title, description, creator: "@jirukeh" },
  icons: {
    icon: [
      { url: "/images/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/images/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/images/favicon.ico", type: "image/x-icon" },
    ],
    apple: { url: "/images/apple-touch-icon.png", sizes: "180x180" },
  },
  manifest: "/site.webmanifest",
  metadataBase: new URL("https://vercel.app/"),
};

export const viewport: Viewport = {
  themeColor: "#0b0b0a",
  colorScheme: "dark",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${sans.variable} ${mono.variable} ${display.variable}`}
    >
      <body className="grain overflow-x-hidden">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[200] focus:rounded-full focus:bg-accent focus:px-4 focus:py-2 focus:text-accent-foreground"
        >
          Skip to content
        </a>
        <MotionProvider>
          <Header />
          <div id="main">{children}</div>
          <Footer />
        </MotionProvider>
      </body>
    </html>
  );
}
