"use client";

import footerConfig from "./footer.json";
import FooterBottom from "./FooterBottom";
import FooterCtaBanner from "./FooterCtaBanner";
import type { FooterConfig } from "./footer.types";
import { withBasePath } from "@/lib/basePath";

const config = footerConfig as FooterConfig;

const brandWithAssets = {
  ...config.brand,
  logoSrc: withBasePath(config.brand.logoSrc),
};

const Footer: React.FC = () => {
  return (
    <footer className="w-full">
      <FooterCtaBanner cta={config.cta} />
      <FooterBottom
        brand={brandWithAssets}
        contact={config.contact}
        quickLinks={config.quickLinks}
        social={config.social}
      />
    </footer>
  );
};

export default Footer;
