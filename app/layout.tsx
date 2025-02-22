import type React from "react";
import type { Metadata } from "next";
import { Inter, Courier_Prime, Roboto_Slab } from "next/font/google";

import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

const courierPrime = Courier_Prime({
  weight: ["400", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-courier-prime",
});

const robotoSlab = Roboto_Slab({
  weight: ["400", "700"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-roboto-slab",
});

export const metadata: Metadata = {
  title: "The Dead Man's Clock",
  description: "Track your life's progress and live more intentionally",
  authors: [{ name: "Mark Norman", url: "https://markthenorman.com" }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${courierPrime.variable} ${robotoSlab.variable}`}
    >
      <body className={courierPrime.className}>{children}</body>
    </html>
  );
}

import "./globals.css";
