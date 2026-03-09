"use client";

import { useRef } from "react";
import Image from "next/image";
import { Reveal } from "@/components/animations/Reveal";
import { useInView } from "framer-motion";
import Link from "next/link";

// --- Types ---
interface Step {
  id: number;
  title: string;
  description: string;
  icon: string;
  icondark: string;
}

interface TimelineProps {
  data?: {
    title?: string;
    subtitle?: string;
    quote?: string;
    subquote?: string;
    steps?: Step[];
  } | null;
}

// --- Sub-Component for Individual Steps ---
const TimelineStep = ({ step, index }: { step: Step; index: number }) => {
  const ref = useRef(null);

  // Trigger Logic:
  // Bottom: -50% (Active when it hits the exact middle)
  // Top: 200% (Stays active as it scrolls up)
  const isInView = useInView(ref, { margin: "200% 0px -50% 0px" });

  const isEven = (index + 1) % 2 === 0;

  return (
    <div
      ref={ref}
      // Added py-12 to create spacing between items while keeping the 'box' continuous for the line
      className="relative flex flex-row items-center md:justify-between gap-11 md:gap-17 py-1 lg:py-6"
    >
      {/* --- THE DYNAMIC LINE SEGMENT --- */}
      {/* This line sits behind the content and changes color */}
      <div
        className={`absolute left-1/2 transform -translate-x-1/2 w-[3px] h-full block transition-colors duration-700 ease-in-out -z-10
          ${isInView ? "bg-[#4a0b75]" : "bg-[#E5E5E5]"}
        `}
      />

      {/* --- LEFT SIDE --- */}
      <div
        className={`w-full md:w-[45%] ${
          isEven ? "text-right order-1" : "text-right order-1 flex justify-end"
        }`}
      >
        {!isEven && (
          <div className="size-15 md:size-20 lg:size-25 rounded-full flex items-center justify-center z-10 transition-transform duration-500 ease-out bg-white">
            <div className="relative w-full h-full">
              {step.icon && (
                <Image
                  src={step.icon}
                  alt={step.title}
                  fill
                  className={`object-contain transition-opacity duration-700 ease-in-out ${
                    isInView ? "opacity-0" : "opacity-100"
                  }`}
                />
              )}
              {(step.icondark || step.icon) && (
                <Image
                  src={step.icondark || step.icon}
                  alt={step.title}
                  fill
                  className={`object-contain transition-opacity duration-700 ease-in-out ${
                    isInView ? "opacity-100" : "opacity-0"
                  }`}
                />
              )}
            </div>
          </div>
        )}

        {isEven && (
          <div>
            <div className="size-8 sm:size-12 inline-flex mb-3 sm:mb-5 items-center justify-center rounded-full bg-purple-200 text-white font-bold text-body sm:text-h2">
              {step.id}
            </div>
            <p className="text-smallest sm:text-small lg:text-body font-bold mb-[.5rem] transition-colors duration-300">
              {step.title}
            </p>
            <p className="text-smallest sm:text-small lg:text-body font-normal">
              {step.description}
            </p>
          </div>
        )}
      </div>

      {/* --- RIGHT SIDE --- */}
      <div
        className={`w-full md:w-[45%] ${
          isEven
            ? "md:text-left order-1 md:order-2 flex md:justify-start"
            : "md:text-left order-2"
        }`}
      >
        {isEven && (
          <div className="size-15 md:size-20 lg:size-25 rounded-full flex  items-center justify-center z-10 bg-white">
            <div className="relative w-full h-full">
              {step.icon && (
                <Image
                  src={step.icon}
                  alt={step.title}
                  fill
                  className={`object-contain transition-opacity duration-700 ease-in-out ${
                    isInView ? "opacity-0" : "opacity-100"
                  }`}
                />
              )}
              {(step.icondark || step.icon) && (
                <Image
                  src={step.icondark || step.icon}
                  alt={step.title}
                  fill
                  className={`object-contain transition-opacity duration-700 ease-in-out ${
                    isInView ? "opacity-100" : "opacity-0"
                  }`}
                />
              )}
            </div>
          </div>
        )}

        {!isEven && (
          <div className="text-left">
            <div className="size-8 sm:size-12 inline-flex mb-3 sm:mb-5 items-center justify-center rounded-full bg-purple-200 text-white font-bold text-body sm:text-h2">
              {step.id}
            </div>
            <p className="text-smallest sm:text-small lg:text-body font-bold mb-[.5rem] transition-colors duration-300">
              {step.title}
            </p>
            <p className="text-smallest sm:text-small lg:text-body font-normal">
              {step.description}
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

// --- Main Component ---
export default function Timeline({ data }: TimelineProps) {
  const title = data?.title ?? "How it works";
  const subtitile = data?.subtitle ?? "Consistent, Seamless & On-brand";
  const quote =
    data?.quote ?? "The way editing should have been done from the start.";
  const subquote =
    data?.subquote ??
    "By understanding your brand’s tone and visual identity, we build a streamlined editing workflow that keeps every video consistent - from the first cut to the final export.";

  const activeSteps = data?.steps || [
    {
      id: 1,
      icon: "https://res.cloudinary.com/dhxrsiqip/image/upload/v1764155929/Group_67_eoevr5.png",
      title: "Your raw footage",
      icondark:
        "https://res.cloudinary.com/dhxrsiqip/image/upload/v1764155930/Group_128_svaimc.png",
      description:
        "Start by filling out our quick form so we can understand your needs and how we can best support your content goals.",
    },
    {
      id: 2,
      icon: "https://res.cloudinary.com/dhxrsiqip/image/upload/v1764155929/Group_124_cv2zyq.png",
      title: "Our creative editing team",
      icondark:
        "https://res.cloudinary.com/dhxrsiqip/image/upload/v1764155949/Group_130_a8fskc.png",
      description:
        "We craft a unique editing style that reflects your brand’s identity and keeps it consistent across every video.",
    },
    {
      id: 3,
      icon: "https://res.cloudinary.com/dhxrsiqip/image/upload/v1764155929/Group_125_vbut1z.png",
      title: "Refinement & feedback",
      icondark:
        "https://res.cloudinary.com/dhxrsiqip/image/upload/v1764155929/Group_127_l2kaoe.png",
      description:
        "Track tasks and progress in Notion.\nShare feedback and review edits through Frame.io for fast, streamlined revisions.",
    },
    {
      id: 4,
      icon: "https://res.cloudinary.com/dhxrsiqip/image/upload/v1764155929/Group_126_b2egzu.png",
      title: "Delivery",
      icondark:
        "https://res.cloudinary.com/dhxrsiqip/image/upload/v1764155930/Group_129_bjwbls.png",
      description:
        "We deliver your final videos in all required formats or directly to your internal library.",
    },
  ];

  if (activeSteps.length === 0) return null;

  return (
    <section className="" id="timeline">
      <div className="wrapper">
        <Reveal className="w-full mb-8">
          <div className="mb-8">
            <h2 className="text-center font-bold leading-[135%]">{title}</h2>
            <p className="text-body sm:text-h2 lg:text-h1 font-bold text-center">
              {subtitile}
            </p>
          </div>
          <Link
            href="https://calendly.com/theophisediting/30min"
            target="_blank"
            className="button--primary"
          >
            Work with us
          </Link>
        </Reveal>

        <div className="relative">
          {/* Note: I removed the global line and space-y here */}
          <div className="relative flex flex-col">
            {activeSteps.map((step, index) => (
              <TimelineStep key={step.id || index} step={step} index={index} />
            ))}
          </div>
        </div>

        <div className="mt-32 text-center mx-auto">
          <Reveal>
            <h2
              className="font-normal "
              dangerouslySetInnerHTML={{ __html: quote }}
            />
            <p className="max-w-[87rem] m-auto text-smallest sm:text-smaller lg:text-small">
              {subquote}
            </p>
            <p className="text-purple-200"></p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
