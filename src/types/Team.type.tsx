export type TeamMember = {
  name: string;
  description: string;
  image: string;
};

export type TeamData = {
  title?: string;
  subtitle?: string;
  members?: TeamMember[];
};