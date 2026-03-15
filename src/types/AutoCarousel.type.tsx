export type CarouselItem = {
  name: string;
  logo: string;
  category: string;
};

export type CarouselData = {
  title?: string;
  items?: CarouselItem[];
};