export type ProjectCategory = {
  name: string;
  videos: string[];
};

export type ProjectsData = {
  title?: string;
  subtitle?: string;
  categories?: ProjectCategory[];
};