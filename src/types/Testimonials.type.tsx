export type TestimonialItem = {
  name: string;
  content: string;
};

export type TestimonialsData = {
  title?: string;
  subtitle?: string;
  items?: TestimonialItem[];
};