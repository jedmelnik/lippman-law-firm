import type { Metadata } from "next";
import { Cormorant_Garamond, Source_Sans_3 } from "next/font/google";
import { site } from "@/lib/site";
import "./globals.css";

const display = Cormorant_Garamond({
  weight: ["500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-display",
});

const body = Source_Sans_3({
  subsets: ["latin"],
  variable: "--font-body",
});

export const metadata: Metadata = {
  title: {
    default: `${site.name} | San Rafael Conservatorship & Estate Planning`,
    template: `%s | ${site.shortName}`,
  },
  description:
    "San Rafael attorney Eliot M. Lippman serves Marin and San Francisco county clients in conservatorship, probate, estate planning and administration, wills, trusts, and estate taxes. Call (415) 457-8898.",
  openGraph: {
    title: site.name,
    description:
      "Conservatorship, probate, trust administration, and estate planning in San Rafael - serving Marin County and San Francisco.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable} h-full`}>
      <body className="flex min-h-full flex-col font-body">{children}</body>
    </html>
  );
}
