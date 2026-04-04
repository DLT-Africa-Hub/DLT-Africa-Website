export type FooterCta = {
  title: string;
  subtitle: string;
  buttonLabel: string;
  buttonHref: string;
};

export type FooterBrand = {
  logoSrc: string;
  logoAlt: string;
  logoHref: string;
  tagline: string;
};

export type FooterContact = {
  address: string;
  phone: string;
  phoneRaw: string;
  email: string;
};

export type FooterQuickLink = {
  label: string;
  href: string;
};

export type FooterSocialItem = {
  label: string;
  href: string;
  icon: "facebook" | "instagram" | "linkedin" | "twitter" | "github";
};

export type FooterConfig = {
  cta: FooterCta;
  brand: FooterBrand;
  contact: FooterContact;
  quickLinks: FooterQuickLink[];
  social: FooterSocialItem[];
};
