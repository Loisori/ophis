"use client";

import { Reveal } from "@/components/animations/Reveal";

export type ReasonsData = {
  headline?: string;
  description?: string;
  ophisFeatures?: string[];
  othersFeatures?: string[];
};

interface ReasonsProps {
  data: ReasonsData | null;
}

export default function Reasons({ data }: ReasonsProps) {
  // --- Defaults ---
  const defaultHeadline = "Why Ophis is the right choice?";
  const defaultDesc =
    "We bring you all the advantages of having a full in-house editing team - without the overhead or hassle. From clear communication to on-brand consistency, we focus on transparency, collaboration, and trust in every step of the process.";

  const defaultOphis = [
    "Fair, transparent pricing",
    "Dedicated creative team",
    "Expert in-house editors",
    "Modern editing approach",
    "Industry-informed decisions",
    "Real-time tracking",
    "Flexible contracts",
  ];

  const defaultOthers = [
    "Hourly or per-project pricing",
    "No dedicated editing team",
    "Outsourced to average talent",
    "Outdated creative methods",
    "Minimal industry insight",
    "No real-time progress tracking",
    "Locked-in, inflexible contracts",
  ];

  // --- Merge Data ---
  const headline = data?.headline ?? defaultHeadline;
  const description = data?.description ?? defaultDesc;
  const ophisFeatures =
    data?.ophisFeatures && data.ophisFeatures.length > 0
      ? data.ophisFeatures
      : defaultOphis;
  const othersFeatures =
    data?.othersFeatures && data.othersFeatures.length > 0
      ? data.othersFeatures
      : defaultOthers;

  // Helper to highlight "right choice?" if it exists in the headline string
  // This is a simple visual trick. If you want it fully dynamic, we might skip the span,
  // but this attempts to keep your "span" styling if the text matches.
  const renderHeadline = () => {
    const parts = headline.split("right choice?");
    if (parts.length > 1) {
      return (
        <>
          {parts[0]} <span className="text-white">right choice?</span>
          {parts[1]}
        </>
      );
    }
    return headline;
  };

  return (
    <section className="bg-linear-to-b from-[#2e0249] to-black text-white relative overflow-hidden">
      {/* Background Blur */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[600px] bg-purple-900/30 blur-[120px] rounded-full pointer-events-none" />

      <div className="wrapper relative z-10">
        <Reveal className="text-center mb-16">
          <h2 className="mb-rem font-medium">
            {/* Simple check to preserve the 'white' text color style if using default */}
            {headline === defaultHeadline ? (
              <>
                Why Ophis is the <span className="text-body lg:text-h1">right choice?</span>
              </>
            ) : (
              headline
            )}
          </h2>
          <p className="text-smallest sm:text-smaller lg:text-small">
            {description}
          </p>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-[7rem] max-w-[81rem] mx-auto mb-16">
          <Reveal className="relative p-5 md:p-8 rounded-3xl bg-linear-to-r from-purple-300 to-purple-200 flex flex-col items-center text-center">
            <h2 className="font-bold mb-3">Ophis</h2>
            <div className="w-full h-px bg-white mb-6" />
            <ul className="space-y-4 w-full text-left pl-4 md:pl-7">
              {ophisFeatures.map((item, i) => (
                <li
                  key={i}
                  className="flex items-center gap-3 text-small font-medium"
                >
                  <span className="w-1.5 h-1.5 bg-white rounded-full shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal className="p-5 md:p-8 rounded-3xl bg-gray-200 text-gray-900 flex flex-col items-center text-center shadow-xl">
            <h2 className="font-bold mb-3">Other Agencies</h2>
            <div className="w-full h-px bg-black mb-6" />
            <ul className="space-y-4 w-full text-left pl-4 md:pl-7">
              {othersFeatures.map((item, i) => (
                <li
                  key={i}
                  className="flex items-center gap-3 text-small text-black"
                >
                  <span className="w-1.5 h-1.5 bg-gray-800 rounded-full shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
        <button className="block m-auto px-4 py-5 bg-purple-100 text-smaller sm:text-small lg:text-white rounded-5 text-body hover:bg-purple-200 transition-colors">
          Work with us
        </button>
      </div>
    </section>
  );
}
