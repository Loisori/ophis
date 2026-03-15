export type FooterSocial = {
  label: string;
  href: string;
  iconSvg?: string;
};

export type FooterData = {
  description?: string;
  contact?: {
    address?: string;
    studyLocation?: string;
    phone?: string;
    email?: string;
  };
  socials?: FooterSocial[];
};