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

  const items = data?.items || [];

  if (items.length === 0) {
    return null;
  }

  const title =
    data?.title ?? "Trusted by Industry-leading Founders & Creators";

  const slides = Array.from({ length: 4 }).flatMap(() => items);

  return (
    <section
      id="autoCarousel"
      className="auto-carousel bg-[#2C0343] text-white"
    >
      <div className="wrapper text-center">
        <h2 className="mb-5 sm:mb-8 font-bold">{title}</h2>
      </div>
      <div className="embla w-full" ref={emblaRef}>
        <div className="embla__container flex flex-nowrap">
          {slides.map((partner, index) => (
            <div
              className="embla__slide p-[.6rem] mr-5 sm:mr-10 md:mr-25 border-solid border-[.1rem] border-[#6A0571] rounded-[1.5rem]"
              key={`${partner.name}-${index}`}
            >
              <div className="flex p-rem sm:px-[2.5rem] py-rem rounded-[1.5rem] items-center gap-1 sm:gap-5 bg-linear-to-r from-purple-300 to-purple-200">
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
                  <p className="text-smaller sm:text-body font-bold">
                    {partner.name}
                  </p>
                  <p className="text-smallest sm:text-small">
                    {partner.category}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
