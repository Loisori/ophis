"use client";

import { Check, X } from "lucide-react";

export default function Reasons() {
  const ophisFeatures = [
    "Fair, transparent pricing",
    "Dedicated creative team",
    "Expert in-house editors",
    "Modern editing approach",
    "Industry-informed decisions",
    "Real-time tracking",
    "Flexible contracts",
  ];

  const othersFeatures = [
    "Hourly or per-project pricing",
    "No dedicated editing team",
    "Outsourced to average talent",
    "Outdated creative methods",
    "Minimal industry insight",
    "No real-time progress tracking",
    "Locked-in, inflexible contracts",
  ];

  return (
    <section className="py-24 px-4 bg-gradient-to-b from-[#2e0249] to-black text-white relative overflow-hidden">
      {/* Background Ambient Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[600px] bg-purple-900/30 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Why Ophis is the <span className="text-white">right choice?</span>
          </h2>
          <p className="text-gray-300 text-sm md:text-base leading-relaxed">
            We bring you all the advantages of having a full in-house editing team
            - without the overhead or hassle. From clear communication to
            on-brand consistency, we focus on transparency, collaboration, and
            trust in every step of the process.
          </p>
        </div>

        {/* Comparison Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 max-w-5xl mx-auto mb-16">
          
          {/* Ophis Card (Dark & Glowing) */}
          <div className="relative p-8 md:p-10 rounded-3xl bg-gradient-to-b from-[#4a0b75] to-[#24063d] border-2 border-cyan-500 shadow-[0_0_40px_rgba(6,182,212,0.15)] flex flex-col items-center text-center">
            {/* Logo Placeholder */}
            <div className="mb-8 flex items-center justify-center gap-2">
               <div className="w-4 h-4 rounded-full bg-white" /> {/* Dot logo mark */}
               <span className="text-4xl font-light tracking-tight">ophis</span>
            </div>
            
            <div className="w-full h-px bg-white/20 mb-8" /> {/* Divider */}

            <ul className="space-y-4 w-full text-left pl-4 md:pl-12">
              {ophisFeatures.map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-sm md:text-base font-medium">
                  <span className="w-1.5 h-1.5 bg-white rounded-full flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Other Agencies Card (Light) */}
          <div className="p-8 md:p-10 rounded-3xl bg-gray-200 text-gray-900 flex flex-col items-center text-center shadow-xl">
            <h3 className="text-3xl font-bold mb-8 mt-1">Other Agencies</h3>
            
            <div className="w-full h-px bg-gray-400 mb-8" /> {/* Divider */}

            <ul className="space-y-4 w-full text-left pl-4 md:pl-12">
              {othersFeatures.map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-sm md:text-base text-gray-700">
                  <span className="w-1.5 h-1.5 bg-gray-800 rounded-full flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

        </div>

        {/* CTA Button */}
        <div className="text-center">
          <button className="px-10 py-4 bg-[#9d34da] hover:bg-[#8a2cc0] text-white text-lg font-medium rounded-lg transition-all duration-300 shadow-lg hover:shadow-purple-500/25 hover:-translate-y-0.5">
            Work with us
          </button>
        </div>
      </div>
    </section>
  );
}