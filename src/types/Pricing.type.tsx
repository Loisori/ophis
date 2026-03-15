// src/types/Pricing.type.ts

export type PricingPlan = {
  name: string;
  price: string;
  description: string;
  features: string[];
  cta: string;
  popular: boolean;
};

export type PricingData = {
  title?: string;
  subtitle?: string;
  plans?: PricingPlan[];
};