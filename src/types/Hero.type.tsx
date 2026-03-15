export type HeroCard = {
  title: string;
  subtitle: string;
};

export type HeroData = {
  title?: string;
  subtitle?: string;
  cards?: HeroCard[];
};