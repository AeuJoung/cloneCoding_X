import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import React from "react";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "My Twitter Clone Coding",
  description: "Let's Clone Coding",
};

export default function RootLayout({children} : {children : React.ReactNode}) {
    return (
      <html lang="en">
        <body className={inter.className}>{children}</body>
      </html>
    );
}




