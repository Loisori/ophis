"use client";

import Image from "next/image";
import { Reveal } from "@/components/animations/Reveal";

interface ServicesProps {
  data?: {
    headline?: string;
    subheadline?: string;
    services?: Array<{
      title: string;
      description: string;
      icon: string;
    }>;
  } | null;
}

export default function Services({ data }: ServicesProps) {
  // Use DB data or defaults
  const headline = data?.headline ?? "Our Services";
  const subheadline = data?.subheadline ?? "Consistent, Seamless & On-brand";
  const services = data?.services || [];

  if (services.length === 0) {
    return null;
  }

  return (
    <section id="services" className="">
      <div className="wrapper">
        <Reveal className="w-full! mb-[3rem]">
          <h2 className="text-center font-bold leading-[135%]">{headline}</h2>
          <p className="text-h1 font-bold text-center">{subheadline}</p>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-[3rem]">
          {services.map((service, index) => (
            <Reveal
              key={index}
              className="bg-linear-to-b from-purple-200 to-purple-300 text-white p-[3rem] rounded-3xl flex flex-col items-start text-left"
            >
              {service.icon && (
                <div className="relative w-[9.5rem] h-[9.5rem] mb-[1.4rem]">
                  <Image
                    src={service.icon}
                    alt={service.title}
                    fill
                    className="object-contain"
                  />
                </div>
              )}
              <p className="text-h2 font-bold mb-[1.4rem]">{service.title}</p>
              <p className="text-small text-white/80 leading-relaxed">
                {service.description}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
