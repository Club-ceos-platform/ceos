import "./globals.css";

import React from "react";
import { Inter } from "next/font/google";
import type { Metadata } from "next";
import { PrimeReactProvider } from "primereact/api";
import "primeicons/primeicons.css";
import "primereact/resources/themes/lara-light-blue/theme.css";

// TODO3 : ajouter des protection d'accessibiliter (Droit d'access)
// TODO4: ajout vrai seeder (automation d'ajout valeur admin/user)
// TODO5:Ajout autorisation d'acces aux membre(paye et il peut y access avec l'autorisation d'amdministrateur)
// TODO6:Envoie d'url via email
// TODO7: Validation d'administrateur (Crud)
// TODO8:Integration de front version 1
// TODO9:

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

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
      <body className={`${inter.className} border border-black`}>
        <PrimeReactProvider>{children}</PrimeReactProvider>
      </body>
    </html>
  );
}
