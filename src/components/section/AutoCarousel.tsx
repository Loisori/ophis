"use client";

import Image from "next/image";
import { useEffect, useMemo } from "react";
import Autoplay from "embla-carousel-autoplay";
import useEmblaCarousel from "embla-carousel-react";

const PARTNERS = [
  {
    name: "Snooppi",
    logo: "/imgs/partners/snooppi.png",
    category: "461K subscribers",
  },
  {
    name: "Misthy",
    logo: "/imgs/partners/misthy.png",
    category: "8M subscribers",
  },
  {
    name: "Ser Andy",
    logo: "/imgs/partners/serandy.png",
    category: "210K subscribers",
  },
  {
    name: "Jason Cabin",
    logo: "/imgs/partners/jasoncabin.png",
    category: "1.08K subscribers",
  },
];

export default function AutoCarousel() {
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

  const slides = Array.from({ length: 4 }).flatMap(() => PARTNERS);

  return (
    <section className="auto-carousel bg-[#2C0343] text-white">
      <div className="">
        <h2 className="text-center mb-[3rem]">
          Trusted by Industry-leading Founders & Creators
        </h2>
        <div className="embla overflow-hidden w-full" ref={emblaRef}>
          <div className="embla__container flex flex-nowrap">
            {slides.map((partner, index) => (
              <div
                className="embla__slide p-[.6rem] mr-[4rem] md:mr-[10rem] border border-solid border-[1px] border-[#6A0571] rounded-[1.5rem]"
                key={`${partner.name}-${index}`}
              >
                <div className="flex px-[2.5rem] py-[1rem] rounded-[1.5rem] items-center gap-[2rem] bg-linear-to-r from-purple-300 to-purple-200">
                  <Image
                    src={partner.logo}
                    alt={`${partner.name} logo`}
                    width={64}
                    height={64}
                    className="rounded-full max-w-none"
                  />
                  <div className="whitespace-nowrap">
                    <p className="text-body font-bold">{partner.name}</p>
                    <p className="text-small">{partner.category}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
