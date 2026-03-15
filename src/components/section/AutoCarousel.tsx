"use client";

import Image from "next/image";
import { useEffect, useMemo } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { Reveal } from "@/components/animations/Reveal";
import AutoScroll from "embla-carousel-auto-scroll";
import { CarouselData, CarouselItem } from "@/types/AutoCarousel.type";

interface AutoCarouselProps {
  data: CarouselData | null;
}

export default function AutoCarousel({ data }: AutoCarouselProps) {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      align: "start",
      dragFree: false,
      loop: true,
    },
    [
      AutoScroll({ playOnInit: true }),
      AutoScroll({ stopOnInteraction: false }),
    ],
  );

  useEffect(() => {
    if (!emblaApi) return;
  }, [emblaApi]);

  const title =
    data?.title ?? "Trusted by Industry-leading Founders & Creators";

  const items = data?.items ?? [
    {
      logo: "https://res.cloudinary.com/dhxrsiqip/image/upload/v1764155234/snooppi_g5k2hl.png",
      name: "Snooppi",
      category: "461K subscribers",
    },
    {
      logo: "https://res.cloudinary.com/dhxrsiqip/image/upload/v1764155234/misthy_k3jh3i.png",
      name: "Misthy",
      category: "8M subscribers",
    },
    {
      logo: "https://res.cloudinary.com/dhxrsiqip/image/upload/v1764155234/serandy_h94ifa.png",
      name: "Ser Andy",
      category: "210K subscribers",
    },
    {
      logo: "https://res.cloudinary.com/dhxrsiqip/image/upload/v1764155233/jasoncabin_otohol.png",
      name: "Jason Cabin",
      category: "1.08K subscribers",
    },
    {
      logo: "https://res.cloudinary.com/dbzx48lom/image/upload/v1766559708/Australian_Migration_Lawyer_x5neow.jpg",
      name: "Australian Migration Lawyers",
      category: "3.24K subscribers",
    },
    {
      logo: "https://res.cloudinary.com/dbzx48lom/image/upload/v1766559708/The_Sky_Digest_cvc99j.jpg",
      name: "The Sky Digest",
      category: "5.18K subscribers",
    },
    {
      logo: "https://res.cloudinary.com/dbzx48lom/image/upload/v1766559707/Empire_Flippers_rgnscs.jpg",
      name: "Empire Fippers",
      category: "6.68K subscribers",
    },
    {
      logo: "https://res.cloudinary.com/dbzx48lom/image/upload/v1766559707/Pro_Writing_Aid_sapbfb.jpg",
      name: "ProWritingAid",
      category: "15.9K subscribers",
    },
    {
      logo: "https://res.cloudinary.com/dbzx48lom/image/upload/v1766560045/Mike_Dee_k2bycm.jpg",
      name: "Mike Dee",
      category: "1.14M subscribers",
    },
    {
      logo: "https://res.cloudinary.com/dbzx48lom/image/upload/v1766560171/Triathlon_Mike_-_avatar_smk8wv.jpg",
      name: "BikeLabHQ",
      category: "9.19K subscribers",
    },
  ];

  if (items.length === 0) {
    return null;
  }

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
