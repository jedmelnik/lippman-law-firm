import type { Metadata } from "next";
import { Bebas_Neue, Figtree } from "next/font/google";
import "./globals.css";

const display = Bebas_Neue({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-display",
});

const body = Figtree({
  subsets: ["latin"],
  variable: "--font-body",
});

export const metadata: Metadata = {
  title: "Steve's Auto Care | Honda & Acura Specialists in Novato",
  description:
    "Factory-trained Honda and Acura specialists in Novato, CA. ASE Certified Master Technician Steve Lite - Marin's dealer alternative for Japanese vehicles. Call (415) 899-1115.",
  openGraph: {
    title: "Steve's Auto Care Novato",
    description:
      "Marin's dealer alternative for Honda, Acura, and Japanese vehicles. 879 Sweetser Ave, Novato.",
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
      <body className="min-h-full flex flex-col font-body">{children}</body>
    </html>
  );
}
