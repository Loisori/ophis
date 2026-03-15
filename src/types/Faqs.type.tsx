export type FaqItem = {
  question: string;
  answer: string;
};

export type FaqData = {
  headline?: string;
  subheadline?: string;
  items?: FaqItem[];
};
