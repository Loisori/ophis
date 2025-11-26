"use client";
import { Reveal } from "@/components/animations/Reveal";
import Image from "next/image";

const steps = [
  {
    id: 1,
    title: "Your raw footage",
    description:
      "Start by filling out our quick form so we can understand your needs and how we can best support your content goals.",
    icon: "https://res.cloudinary.com/dhxrsiqip/image/upload/v1764155929/Group_67_eoevr5.png",
    icondark:
      "https://res.cloudinary.com/dhxrsiqip/image/upload/v1764155930/Group_128_svaimc.png",
  },
  {
    id: 2,
    title: "Our creative editing team",
    description:
      "We craft a unique editing style that reflects your brand's identity and keeps it consistent across every video.",
    icon: "https://res.cloudinary.com/dhxrsiqip/image/upload/v1764155929/Group_124_cv2zyq.png",
    icondark:
      "https://res.cloudinary.com/dhxrsiqip/image/upload/v1764155949/Group_130_a8fskc.png",
  },
  {
    id: 3,
    title: "Refinement & feedback",
    description:
      "Track tasks and progress in Notion. Share feedback and review edits through Frame.io for fast, streamlined revisions.",
    icon: "https://res.cloudinary.com/dhxrsiqip/image/upload/v1764155929/Group_125_vbut1z.png",
    icondark:
      "https://res.cloudinary.com/dhxrsiqip/image/upload/v1764155929/Group_127_l2kaoe.png",
  },
  {
    id: 4,
    title: "Delivery",
    description:
      "We deliver your final videos in all required formats or directly to your internal library.",
    icon: "https://res.cloudinary.com/dhxrsiqip/image/upload/v1764155929/Group_126_b2egzu.png",
    icondark:
      "https://res.cloudinary.com/dhxrsiqip/image/upload/v1764155930/Group_129_bjwbls.png",
  },
];

export default function Timeline() {
  return (
    <section className="" id="timeline">
      <div className="wrapper">
        <div className="justify-self-center text-center mb-20">
          <Reveal>
            <h2 className="text-center leading-[135%]">How it works</h2>
            <p className="mb-[3rem] text-h1 font-bold text-center">
              Consistent, Seamless & On-brand
            </p>
            <button className="block m-auto px-4 py-5 bg-purple-100 text-white rounded-5 text-body">
              Work with us
            </button>
          </Reveal>
        </div>

        <div className="relative">
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-[3px] bg-[#E5E5E5] hidden md:block" />
          <div className="space-y-12 md:space-y-[5rem] relative">
            {steps.map((step, index) => {
              const isEven = (index + 1) % 2 === 0;
              return (
                <div
                  key={step.id}
                  className="relative flex flex-row items-center md:justify-between gap-8 md:gap-15"
                >
                  {/* --- LEFT SIDE CONTENT --- */}
                  <div
                    className={`w-full md:w-[45%] ${
                      isEven
                        ? "md:text-right order-2 md:order-1"
                        : "md:text-right order-1 flex md:justify-end"
                    }`}
                  >
                    {/* If Odd: Show Icon here on Desktop */}
                    {!isEven && (
                      <Reveal
                        animation="slide-left"
                        className="size-15 md:size-20 lg:size-25 rounded-full flex items-center justify-center z-10"
                      >
                        <Image
                          src={step.icon}
                          alt="Ophis Logo"
                          width={100}
                          height={100}
                        />
                      </Reveal>
                    )}

                    {/* If Even: Show Text here */}
                    {isEven && (
                      <Reveal animation="slide-left">
                        <div>
                          <div className="size-12 inline-flex items-center justify-center rounded-full bg-purple-200 text-white font-bold text-h2">
                            {step.id}
                          </div>
                          <h3 className="text-body font-bold mb-[.5rem]">
                            {step.title}
                          </h3>
                          <p className="text-body font-normal">
                            {step.description}
                          </p>
                        </div>
                      </Reveal>
                    )}
                  </div>

                  {/* --- RIGHT SIDE CONTENT --- */}
                  <div
                    className={`w-full md:w-[45%] ${
                      isEven
                        ? "md:text-left order-1 md:order-2 flex md:justify-start"
                        : "md:text-left order-2"
                    }`}
                  >
                    {/* If Even: Show Icon here on Desktop */}
                    {isEven && (
                      <Reveal
                        animation="slide-right"
                        className="size-15 md:size-20 lg:size-25 rounded-full flex items-center justify-center z-10"
                      >
                        <Image
                          src={step.icon}
                          alt="Ophis Logo"
                          width={100}
                          height={100}
                        />
                      </Reveal>
                    )}

                    {/* If Odd: Show Text here */}
                    {!isEven && (
                      <Reveal animation="slide-right">
                        <div className="text-left">
                          <div className="size-12 inline-flex items-center justify-center rounded-full bg-purple-200 text-white font-bold text-h2">
                            {step.id}
                          </div>
                          <h3 className="text-body font-bold mb-[.5rem]">
                            {step.title}
                          </h3>
                          <p className="text-body font-normal">
                            {step.description}
                          </p>
                        </div>
                      </Reveal>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <div className="mt-32 text-center max-w-3xl mx-auto">
          <Reveal>
            <h3 className="text-2xl md:text-3xl font-normal text-gray-900 mb-4">
              The way editing should have been done from the start.
            </h3>
            <p className="text-gray-500 text-sm md:text-base leading-relaxed">
              By understanding your brand's tone and visual identity, we build a
              streamlined editing workflow that keeps every video consistent -
              from the first cut to the final export.
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
