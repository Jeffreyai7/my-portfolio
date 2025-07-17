// app/layout.tsx
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/providers/ThemeProvider";
import Header from "@/components/Navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Jeffthedev — Frontend Developer",
  description:
    "Portfolio showcasing projects built with React, Next.js, and Tailwind CSS.",
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

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body className="font-sans bg-background text-foreground">
        <ThemeProvider defaultTheme="system" enableSystem attribute="class">
          <Header />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
