"use client";

import { usePathname } from "next/navigation";
import { ReactNode, useEffect, useState } from "react";
import { isHomePathname } from "@/lib/basePath";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import Loader from "./Loader/Loader";

interface ConditionalLayoutProps {
  children: ReactNode;
}

export default function ConditionalLayout({
  children,
}: ConditionalLayoutProps) {
  const pathname = usePathname() ?? "";
  const onHomePage = isHomePathname(pathname);
  const [showLoader, setShowLoader] = useState(onHomePage);

  useEffect(() => {
    if (!onHomePage) {
      setShowLoader(false);
      return;
    }
    setShowLoader(true);
    const timer = setTimeout(() => setShowLoader(false), 2000);
    return () => clearTimeout(timer);
  }, [onHomePage]);

  const hideHeaderFooterRoutes: string[] = [];

  const shouldHideHeaderFooter = hideHeaderFooterRoutes.includes(pathname);

  if (showLoader) {
    return <Loader />;
  }

  if (shouldHideHeaderFooter) {
    return <>{children}</>;
  }

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex min-h-0 w-full flex-1 flex-col">{children}</main>
      <Footer />
    </div>
  );
}
