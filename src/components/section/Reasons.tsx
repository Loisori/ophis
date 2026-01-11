"use client";

import { Reveal } from "@/components/animations/Reveal";
import Link from "next/link";

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

  return (
    <section className="bg-linear-to-b from-[#2e0249] to-black text-white relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[600px] bg-purple-900/30 blur-[120px] rounded-full pointer-events-none" />

      <div className="wrapper relative z-10">
        <Reveal className="text-center mb-16">
          <h2
            className="mb-rem font-medium"
            dangerouslySetInnerHTML={{ __html: headline }}
          />
          <p className="max-w-[108rem] m-auto text-smallest sm:text-smaller lg:text-small">
            {description}
          </p>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-[7rem] max-w-[81rem] mx-auto mb-16">
          <Reveal
            delay={0.1}
            className="relative p-5 md:p-8 rounded-3xl bg-linear-to-r from-purple-300 to-purple-200 flex flex-col items-center text-center"
          >
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

          <Reveal
            delay={0.2}
            className="p-5 md:p-8 rounded-3xl bg-gray-200 text-gray-900 flex flex-col items-center text-center shadow-xl"
          >
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
        <Link
          href="https://calendly.com/theophisediting/30min"
          target="_blank"
          className="button--primary"
        >
          Work with us
        </Link>
      </div>
    </section>
  );
}
