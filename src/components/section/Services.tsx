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
  // Use DB data or defaults
  const title = data?.title ?? "Our Services";
  const subtitle = data?.subtitle ?? "Consistent, Seamless & On-brand";
  const services = data?.services || [];

  if (services.length === 0) {
    return null;
  }

  return (
    <section id="services" className="">
      <div className="wrapper">
        <Reveal className="w-full! mb-8">
          <h2 className="text-center font-bold leading-[135%]">{title}</h2>

          <p className="text-body sm:text-h2 lg:text-h1 font-bold text-center">
            {subtitle}
          </p>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Reveal
              key={index}
              className="bg-linear-to-b from-purple-200 to-purple-300 text-white p-8 rounded-3xl flex! flex-row! md:flex-col! items-start text-left"
            >
              {service.icon && (
                <div className="relative size-[9.5rem] mb-[1.4rem]">
                  <Image
                    src={service.icon}
                    alt={service.title}
                    fill
                    className="object-contain"
                  />
                </div>
              )}
              <div>
                <p className="text-h2 font-bold mb-[1.4rem]">{service.title}</p>
                <p className="text-small text-white/80 leading-relaxed">
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
