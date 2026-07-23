import type { Metadata, Viewport } from "next";
import { Analytics } from "@vercel/analytics/next";
import { Inter } from "next/font/google";

import "./globals.css";
import { ThemeProvider } from "@/app/components/ThemeProvider";
import ConditionalLayout from "@/app/components/ConditionalLayout";

const inter = Inter({ subsets: ["latin"] });

const SITE_URL = "https://dlthub.org";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "DLT Africa Bootcamp | DLT Hub",
    template: "%s | DLT Hub",
  },
  description:
    "DLT Africa Bootcamp by DLT Hub — cohort-based training in frontend, backend, full stack, and product design.",
  applicationName: "DLT Hub",
  authors: [{ name: "DLT Hub", url: SITE_URL }],
  creator: "DLT Hub",
  publisher: "DLT Hub",
  alternates: {
    canonical: "/bootcamp/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: `${SITE_URL}/bootcamp/`,
    siteName: "DLT Hub",
    title: "DLT Africa Bootcamp | DLT Hub",
    description:
      "Cohort-based tech training from DLT Hub. Learn frontend, backend, full stack, and product design.",
  },
  twitter: {
    card: "summary_large_image",
    title: "DLT Africa Bootcamp | DLT Hub",
    description:
      "Cohort-based tech training from DLT Hub. Learn frontend, backend, full stack, and product design.",
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: [{ url: "/images/dlt.png", type: "image/png" }],
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider>
          <ConditionalLayout>{children}</ConditionalLayout>
          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  );
}
