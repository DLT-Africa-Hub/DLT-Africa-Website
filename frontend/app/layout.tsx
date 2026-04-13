"use client";
// @ts-ignore
import { Analytics } from "@vercel/analytics/next";

import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/app/components/ThemeProvider";
import ConditionalLayout from "@/app/components/ConditionalLayout";
import { withBasePath } from "@/lib/basePath";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
  currentPath: string;
}>) {
  return (
    <html lang="en">
      <ThemeProvider>
        <head>
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />
          <title>DLT Africa Bootcamp Website</title>
          <meta name="description" content="DLT Africa Bootcamp - Learn to code and build your future" />

          <link rel="icon" href={withBasePath("/images/dlt.png")} type="image/png" />
        </head>
        <body className={inter.className}>
          <ConditionalLayout>{children}</ConditionalLayout>
          <Analytics />
        </body>
      </ThemeProvider>
    </html>
  );
}
