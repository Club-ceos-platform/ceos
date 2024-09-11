import "./globals.css";

import React from "react";
import type { Metadata } from "next";
import { PrimeReactProvider } from "primereact/api";
import "primereact/resources/themes/lara-light-cyan/theme.css";
import "primeicons/primeicons.css";

export const metadata: Metadata = {
  title: "Club des ceos",
  description: "Site destiner a des entreprises",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body suppressHydrationWarning>
        <PrimeReactProvider>{children}</PrimeReactProvider>
      </body>
    </html>
  );
}
