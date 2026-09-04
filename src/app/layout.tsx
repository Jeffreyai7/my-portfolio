import type { Metadata } from "next";
// @ts-ignore
import "./globals.css";
import { Geist_Mono } from "next/font/google";
import Header from "@/components/Navbar";
import { Footer } from "@/components/Footer";

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Jeffthedev — Full Stack Developer",
  description:
    "Full stack developer building scalable digital products with strong product thinking and modern web experiences.",
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
    <html lang="en" className={`${geistMono.variable} overflow-x-hidden`}>
      <body className="bg-background text-foreground scroll-smooth antialiased overflow-x-hidden">
        <div className="w-full px-5 md:px-8 lg:px-0 lg:w-[80%] lg:mx-auto">
          <Header />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
