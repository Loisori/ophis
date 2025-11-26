"use client";

import { Check } from "lucide-react";

// Pricing Data
const plans = [
  {
    name: "BASIC",
    price: "$800",
    description: "Perfect for getting started",
    features: [
      "2 long-form videos/month",
      "Unlimited revisions",
      "3-5 day turnaround",
      "Pause or cancel anytime",
    ],
    cta: "Get started",
    popular: false,
    // Styles for the card look
    borderColor: "border-cyan-500",
    glowColor: "shadow-cyan-500/20",
    bgColor: "bg-black",
  },
  {
    name: "PRO",
    price: "$2000",
    description: "Our most popular package",
    features: [
      "4 long-form videos",
      "10 short-form videos",
      "Content expert feedback",
      "Slack group access",
      "Unlimited revisions",
      "3-5 day turnaround",
      "Pause or cancel anytime",
      "Billed monthly",
    ],
    cta: "Get started",
    popular: true, // Shows "Most Popular" badge
    borderColor: "border-purple-400",
    glowColor: "shadow-purple-500/20",
    // Gradient specifically for the PRO card
    bgColor: "bg-gradient-to-b from-[#2e0249] to-[#1a0b2e]",
  },
  {
    name: "PREMIUM",
    price: null, // Custom pricing
    description: "For established creators",
    features: [
      "Tailored editing volume & workflows",
      "Dedicated Editor & Strategy Lead",
      "Content planning consultation",
      "Multi-format expertise",
      "Dedicated Designer",
      "Brand voice development",
    ],
    cta: "Book a call",
    popular: false,
    borderColor: "border-yellow-500",
    glowColor: "shadow-yellow-500/20",
    // Gradient specifically for the PREMIUM card
    bgColor: "bg-gradient-to-b from-[#423602] to-[#1a1500]",
  }
];

export default function Pricing() {
  return (
    <section className="py-20 px-4 bg-linear-to-b from-purple-400 to-black text-white overflow-hidden relative">
      {/* Background Ambient Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-purple-900/20 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 tracking-tight">
          Pricing
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`
                relative flex flex-col p-8 rounded-2xl border-2 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl
                ${plan.bgColor} ${plan.borderColor} ${plan.glowColor}
              `}
            >
              {/* Most Popular Badge */}
              {plan.popular && (
                <div className="absolute top-0 right-0 bg-white text-purple-900 text-xs font-bold px-3 py-1 rounded-bl-lg rounded-tr-lg uppercase tracking-wider">
                  Most popular
                </div>
              )}

              {/* Header */}
              <div className="mb-8">
                <div className="flex items-center gap-3 mb-2">
                  <h3 className="text-2xl font-light tracking-wide uppercase">
                    {plan.name}
                  </h3>
                  {plan.popular && (
                     <span className="bg-white/20 text-white text-[10px] px-2 py-0.5 rounded backdrop-blur-sm">
                       Most popular
                     </span>
                  )}
                </div>
              </div>

              {/* Features List */}
              <div className="flex-1 mb-10">
                <p className="text-sm font-bold text-white/90 mb-4">
                  What&apos;s included:
                </p>
                <ul className="space-y-3">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm text-gray-300">
                      <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-white shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Price & CTA */}
              <div className="mt-auto">
                {plan.price ? (
                  <div className="text-4xl font-bold mb-6">{plan.price}</div>
                ) : (
                  // Spacer for Premium card which has no price
                  <div className="h-10 mb-6" /> 
                )}
                
                <button className="w-full py-3 px-6 bg-white text-purple-900 font-bold rounded-lg hover:bg-gray-100 transition-colors shadow-lg active:scale-95 duration-200">
                  {plan.cta}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}