"use client";

import { Video, Users, Settings, Star, Quote } from "lucide-react";

const steps = [
  {
    id: 1,
    title: "Your raw footage",
    description:
      "Start by filling out our quick form so we can understand your needs and how we can best support your content goals.",
    icon: Video,
  },
  {
    id: 2,
    title: "Our creative editing team",
    description:
      "We craft a unique editing style that reflects your brand's identity and keeps it consistent across every video.",
    icon: Users,
  },
  {
    id: 3,
    title: "Refinement & feedback",
    description:
      "Track tasks and progress in Notion. Share feedback and review edits through Frame.io for fast, streamlined revisions.",
    icon: Settings,
  },
  {
    id: 4,
    title: "Delivery",
    description:
      "We deliver your final videos in all required formats or directly to your internal library.",
    icon: Star,
  },
];

export default function Timeline() {
  return (
    <section className="py-24 px-4 bg-white text-black overflow-hidden">
      <div className="">
        <div className="text-center mb-[8rem]">
          <h2 className="text-center">How it works</h2>
          <p className="mb-[3rem] text-h1 font-bold text-center">
            Consistent, Seamless & On-brand
          </p>
          <button className="block m-auto px-[1.6rem] py-[2rem] bg-purple-100 text-white rounded-[1rem] text-body">
            Work with us
          </button>
        </div>

        {/* Timeline Container */}
        <div className="relative">
          {/* Central Vertical Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-purple-200 hidden md:block" />

          <div className="space-y-12 md:space-y-24 relative">
            {steps.map((step, index) => {
              const isEven = (index + 1) % 2 === 0;

              return (
                <div
                  key={step.id}
                  className="relative flex flex-col md:flex-row items-center md:justify-between gap-8 md:gap-0"
                >
                  {/* --- LEFT SIDE CONTENT --- */}
                  <div
                    className={`w-full md:w-[45%] ${
                      isEven
                        ? "md:text-right order-2 md:order-1"
                        : "md:text-right order-1 hidden md:flex md:justify-end"
                    }`}
                  >
                    {/* If Odd: Show Icon here on Desktop */}
                    {!isEven && (
                      <div className="w-24 h-24 rounded-full border-2 border-purple-900 flex items-center justify-center bg-white z-10">
                        <step.icon
                          className="w-10 h-10 text-purple-900"
                          strokeWidth={1.5}
                        />
                      </div>
                    )}

                    {/* If Even: Show Text here */}
                    {isEven && (
                      <div>
                        <div className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-[#4a0b75] text-white font-bold text-lg mb-4 shadow-lg">
                          {step.id}
                        </div>
                        <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                        <p className="text-gray-600 leading-relaxed">
                          {step.description}
                        </p>
                      </div>
                    )}
                  </div>

                  {/* --- RIGHT SIDE CONTENT --- */}
                  <div
                    className={`w-full md:w-[45%] ${
                      isEven
                        ? "md:text-left order-1 md:order-2 hidden md:flex md:justify-start"
                        : "md:text-left order-2"
                    }`}
                  >
                    {/* If Even: Show Icon here on Desktop */}
                    {isEven && (
                      <div className="w-24 h-24 rounded-full border-2 border-gray-300 flex items-center justify-center bg-white z-10">
                        <step.icon
                          className="w-10 h-10 text-gray-400"
                          strokeWidth={1.5}
                        />
                      </div>
                    )}

                    {/* If Odd: Show Text here */}
                    {!isEven && (
                      <div className="text-left">
                        <div className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-[#4a0b75] text-white font-bold text-lg mb-4 shadow-lg">
                          {step.id}
                        </div>
                        <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                        <p className="text-gray-600 leading-relaxed">
                          {step.description}
                        </p>
                      </div>
                    )}
                  </div>

                  {/* Mobile Only Icon (Shown between text blocks on small screens) */}
                  <div className="md:hidden order-1 mb-4">
                    <div
                      className={`w-20 h-20 rounded-full border-2 ${
                        !isEven ? "border-purple-900" : "border-gray-300"
                      } flex items-center justify-center bg-white`}
                    >
                      <step.icon
                        className={`w-8 h-8 ${
                          !isEven ? "text-purple-900" : "text-gray-400"
                        }`}
                        strokeWidth={1.5}
                      />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Bottom Quote Section */}
        <div className="mt-32 text-center max-w-3xl mx-auto">
          <Quote className="w-12 h-12 text-[#4a0b75] mx-auto mb-6 opacity-80" />
          <h3 className="text-2xl md:text-3xl font-normal text-gray-900 mb-4">
            The way editing should have{" "}
            <span className="font-bold text-[#4a0b75]">
              been done from the start.
            </span>
          </h3>
          <p className="text-gray-500 text-sm md:text-base leading-relaxed">
            By understanding your brand's tone and visual identity, we build a
            streamlined editing workflow that keeps every video consistent -
            from the first cut to the final export.
          </p>
          <Quote className="w-12 h-12 text-[#4a0b75] mx-auto mt-6 opacity-80 rotate-180" />
        </div>
      </div>
    </section>
  );
}
