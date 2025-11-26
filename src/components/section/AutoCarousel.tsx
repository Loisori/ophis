"use client";

import Image from "next/image";
import { useEffect, useMemo } from "react";
import Autoplay from "embla-carousel-autoplay";
import useEmblaCarousel from "embla-carousel-react";
import { Reveal } from "@/components/animations/Reveal";


export type CarouselItem = {
  name: string;
  logo: string;
  category: string;
};

export type CarouselData = {
  title?: string;
  items?: CarouselItem[];
};

// FALLBACK_ITEMS removed

interface AutoCarouselProps {
  data: CarouselData | null;
}

export default function AutoCarousel({ data }: AutoCarouselProps) {
  const autoplayOptions = useMemo(
    () =>
      Autoplay({
        delay: 2000,
        stopOnInteraction: false,
        stopOnMouseEnter: false,
        rootNode: (emblaRoot: HTMLElement) => emblaRoot.parentElement,
      }),
    []
  );

  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      align: "start",
      dragFree: false,
      loop: true,
    },
    [autoplayOptions]
  );

  useEffect(() => {
    if (!emblaApi) return;

    const autoplay = emblaApi.plugins().autoplay;

    if (autoplay) {
      autoplay.play();
    }
  }, [emblaApi]);

  // Logic updated: Defaults to empty array if data is missing
  const items = data?.items || [];
  
  // Guard Clause: If no items exist, don't render the section at all
  if (items.length === 0) {
    return null;
  }

  const title = data?.title ?? "Trusted by Industry-leading Founders & Creators";

  // Repeat the items 4 times to ensure enough content for infinite scrolling loop
  const slides = Array.from({ length: 4 }).flatMap(() => items);

  return (
    <section id="autoCarousel" className="auto-carousel bg-[#2C0343] text-white">
      <div className="wrapper text-center">
        <Reveal>
          <h2 className="text-center mb-[3rem]">{title}</h2>
        </Reveal>
      </div>
      <div className="embla overflow-hidden w-full" ref={emblaRef}>
        <div className="embla__container flex flex-nowrap">
          {slides.map((partner, index) => (
            <div
              className="embla__slide p-[.6rem] mr-10 md:mr-25 border-solid border-px border-[#6A0571] rounded-[1.5rem]"
              key={`${partner.name}-${index}`}
            >
              <div className="flex px-[2.5rem] py-rem rounded-[1.5rem] items-center gap-5 bg-linear-to-r from-purple-300 to-purple-200">
                {/* Only render image if logo exists */}
                {partner.logo && (
                  <Image
                    src={partner.logo}
                    alt={`${partner.name} logo`}
                    width={64}
                    height={64}
                    className="rounded-full max-w-none object-cover"
                  />
                )}
                <div className="whitespace-nowrap">
                  <p className="text-body font-bold">{partner.name}</p>
                  <p className="text-small">{partner.category}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}