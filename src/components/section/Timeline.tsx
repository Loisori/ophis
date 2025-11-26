"use client";
import Image from "next/image";
import { Reveal } from "@/components/animations/Reveal";

interface TimelineProps {
  data?: {
    steps?: Array<{
      id: number;
      title: string;
      description: string;
      icon: string;
      icondark: string;
    }>;
  } | null;
}

export default function Timeline({ data }: TimelineProps) {
  const activeSteps = data?.steps || [];

  if (activeSteps.length === 0) return null;

  return (
    <section className="" id="timeline">
      <div className="wrapper">
        <Reveal className="w-full! mb-[3rem]">
          <h2 className="text-center font-bold leading-[135%]">How it works</h2>
          <p className="text-h1 font-bold text-center">
            Consistent, Seamless & On-brand
          </p>
          <button className="block m-auto px-4 py-5 bg-purple-100 text-white rounded-5 text-body">
            Work with us
          </button>
        </Reveal>

        <div className="relative">
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-[3px] bg-[#E5E5E5] hidden md:block" />
          <div className="space-y-12 md:space-y-[5rem] relative">
            {activeSteps.map((step, index) => {
              const isEven = (index + 1) % 2 === 0;
              return (
                <div
                  key={step.id || index}
                  className="relative flex flex-row items-center md:justify-between gap-8 md:gap-15"
                >
                  {/* --- LEFT SIDE --- */}
                  <div
                    className={`w-full md:w-[45%] ${
                      isEven
                        ? "md:text-right order-2 md:order-1"
                        : "md:text-right order-1 flex md:justify-end"
                    }`}
                  >
                    {!isEven && (
                      <Reveal
                        animation="slide-left"
                        className="size-15 md:size-20 lg:size-25 rounded-full flex items-center justify-center z-10"
                      >
                        <div className="relative w-full h-full">
                          {step.icon && (
                            <Image
                              src={step.icon}
                              alt={step.title}
                              width={100}
                              height={100}
                              className="object-contain"
                            />
                          )}
                        </div>
                      </Reveal>
                    )}

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

                  {/* --- RIGHT SIDE --- */}
                  <div
                    className={`w-full md:w-[45%] ${
                      isEven
                        ? "md:text-left order-1 md:order-2 flex md:justify-start"
                        : "md:text-left order-2"
                    }`}
                  >
                    {isEven && (
                      <Reveal
                        animation="slide-right"
                        className="size-15 md:size-20 lg:size-25 rounded-full flex items-center justify-center z-10"
                      >
                        <div className="relative w-full h-full">
                          {step.icon && (
                            <Image
                              src={step.icon}
                              alt={step.title}
                              width={100}
                              height={100}
                              className="object-contain"
                            />
                          )}
                        </div>
                      </Reveal>
                    )}

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
        <div className="mt-32 text-center mx-auto">
          <Reveal>
            <h2 className="font-normal">
              The way editing should have{" "}
              <span className="font-bold text-[#4a0b75]">
                been done from the start.
              </span>
            </h2>
            <p className="text-small">
              By understanding your brand&apos;s tone and visual identity...
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
