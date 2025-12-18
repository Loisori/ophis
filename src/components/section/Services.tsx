"use client";

import Image from "next/image";
import { Reveal } from "@/components/animations/Reveal";

interface ServicesProps {
  data?: {
    title?: string;
    subtitle?: string;
    services?: Array<{
      title: string;
      description: string;
      icon: string;
    }>;
  } | null;
}

export default function Services({ data }: ServicesProps) {
  const title = data?.title ?? "Our Services";
  const subtitle = data?.subtitle ?? "Consistent, Seamless & On-brand";
  const services = data?.services || [];

  if (services.length === 0) {
    return null;
  }

  return (
    <section id="services" className="">
      <div className="wrapper">
        <Reveal className="w-full mb-8">
          <h2 className="text-center font-bold leading-[135%]">{title}</h2>

          <p className="text-body sm:text-h2 lg:text-h1 font-bold text-center">
            {subtitle}
          </p>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-rem sm:gap-8">
          {services.map((service, index) => (
            <Reveal
              key={index}
              delay={index * 0.1}
              className="bg-linear-to-b from-purple-200 to-purple-300 text-white p-4 sm:p-8 rounded-[2rem] flex shrink-0 flex-row md:flex-col max-md:gap-5 items-start text-left"
            >
              {service.icon && (
                <div className="relative size-16 sm:size-24 shrink-0 md:mb-[1.4rem]">
                  <Image
                    src={service.icon}
                    alt={service.title}
                    fill
                    className="object-contain"
                    sizes="(max-width: 768px) 64px, 96px"
                  />
                </div>
              )}
              <div>
                <p className="text-small lg:text-h2 font-bold mb-1 sm:mb-[1.4rem]">
                  {service.title}
                </p>
                <p className="text-smallest sm:text-small text-white/80 leading-relaxed">
                  {service.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
