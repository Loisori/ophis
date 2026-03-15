export type ServiceItem = {
  title: string;
  description: string;
  icon: string;
};

export type ServicesData = {
  title?: string;
  subtitle?: string;
  services?: ServiceItem[];
};