import type { Metadata } from "next";
import { DM_Sans, Playfair_Display } from "next/font/google";
import { siteConfig } from "@/config/site";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  title: `For ${siteConfig.recipient.name} 💖`,
  description: `A little surprise from ${siteConfig.sender.name} ${siteConfig.sender.nameArabic}`,
  openGraph: {
    title: `For ${siteConfig.recipient.name} 💖`,
    description: "Someone made something special for you…",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${playfair.variable} ${dmSans.variable} h-full antialiased`}
    >
      <body className="min-h-full">{children}</body>
    </html>
  );
}
