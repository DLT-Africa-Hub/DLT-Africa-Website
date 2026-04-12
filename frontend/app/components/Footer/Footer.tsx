"use client";

import footerConfig from "./footer.json";
import FooterBottom from "./FooterBottom";
import FooterCtaBanner from "./FooterCtaBanner";
import type { FooterConfig } from "./footer.types";

const config = footerConfig as FooterConfig;

const Footer: React.FC = () => {
  return (
    <footer className="w-full">
      <FooterCtaBanner cta={config.cta} />
      <FooterBottom
        brand={config.brand}
        contact={config.contact}
        quickLinks={config.quickLinks}
        social={config.social}
      />
    </footer>
  );
};

export default Footer;
