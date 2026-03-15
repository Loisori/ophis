export type TimelineStepItem = {
  id: number;
  title: string;
  description: string;
  icon: string;
  icondark: string;
};

export type TimelineData = {
  title?: string;
  subtitle?: string;
  quote?: string;
  subquote?: string;
  steps?: TimelineStepItem[];
};