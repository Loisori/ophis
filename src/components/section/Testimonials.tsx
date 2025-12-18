"use client";

import { Reveal } from "@/components/animations/Reveal";
import { useEffect } from "react";
import useEmblaCarousel from "embla-carousel-react";

export type TestimonialItem = {
  name: string;
  content: string;
};

export type TestimonialsData = {
  title?: string;
  subtitle?: string;
  items?: TestimonialItem[];
};

interface TestimonialsProps {
  data?: TestimonialsData | null;
}

const star = (
  <svg
    className="size-full"
    viewBox="0 0 30 29"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M14.7414 0L18.2213 10.7102H29.4827L20.3721 17.3295L23.852 28.0398L14.7414 21.4205L5.63069 28.0398L9.11066 17.3295L-1.23978e-05 10.7102H11.2614L14.7414 0Z"
      fill="#F2AB19"
    />
  </svg>
);

const comma = (
  <svg
    className="size-full"
    viewBox="0 0 53 40"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M30.464 3.6608C32.3413 1.6128 34.432 0.418135 36.736 0.0768008C39.04 -0.179201 41.3013 0.204799 43.52 1.2288C45.6533 2.33814 47.488 3.9168 49.024 5.9648C50.56 8.18347 51.5413 10.7435 51.968 13.6448C52.3947 16.6315 51.9253 19.8315 50.56 23.2448C49.1093 26.7435 46.5493 29.9435 42.88 32.8448C39.1253 35.8315 34.6453 37.8795 29.44 38.9888C28.5013 39.1595 27.8613 39.2021 27.52 39.1168C27.1787 39.0315 26.9653 38.9035 26.88 38.7328C26.88 37.9648 27.136 37.4101 27.648 37.0688C29.7813 35.8741 31.5733 34.3808 33.024 32.5888C34.4747 30.7968 35.3707 29.0475 35.712 27.3408C36.0533 25.7195 35.6693 24.5248 34.56 23.7568C34.2187 23.5008 33.408 22.7755 32.128 21.5808C30.848 20.4715 29.6533 18.9781 28.544 17.1008C27.4347 15.3088 26.9227 13.2608 27.008 10.9568C27.008 8.6528 28.16 6.2208 30.464 3.6608ZM3.584 3.6608C5.46134 1.6128 7.552 0.418135 9.856 0.0768008C12.16 -0.179201 14.4213 0.204799 16.64 1.2288C18.7733 2.33814 20.608 3.9168 22.144 5.9648C23.68 8.18347 24.6613 10.7435 25.088 13.6448C25.5147 16.6315 25.0453 19.8315 23.68 23.2448C22.2293 26.7435 19.6693 29.9435 16 32.8448C12.2453 35.8315 7.76533 37.8795 2.56 38.9888C1.62133 39.1595 0.981335 39.2021 0.640003 39.1168C0.298669 39.0315 0.0853348 38.9035 0 38.7328C0 37.9648 0.256001 37.4101 0.768002 37.0688C2.90134 35.8741 4.69334 34.3808 6.144 32.5888C7.59467 30.7968 8.49067 29.0475 8.832 27.3408C9.17334 25.7195 8.78933 24.5248 7.68 23.7568C7.33867 23.5008 6.528 22.7755 5.248 21.5808C3.968 20.4715 2.77334 18.9781 1.664 17.1008C0.554667 15.3088 0.0426674 13.2608 0.128002 10.9568C0.128002 8.6528 1.28 6.2208 3.584 3.6608Z"
      fill="#6A0571"
    />
  </svg>
);

export default function Testimonials({ data }: TestimonialsProps) {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      align: "start",
      dragFree: false,
      loop: false,
    },
    []
  );

  useEffect(() => {
    if (!emblaApi) return;
  }, [emblaApi]);

  const defaultItems: TestimonialItem[] = [
    { name: "John Doe", content: "Great service!" },
    { name: "Jane Smith", content: "Highly recommend Ophis." },
  ];

  const items =
    data?.items && data.items.length > 0 ? data.items : defaultItems;

  const title = data?.title ?? "Testimonials";
  const subtitle =
    data?.subtitle ?? "What other brands say about working with Ophis";

  if (items.length === 0) {
    return null;
  }

  return (
    <section id="testimonials" className="">
      <div className="wrapper">
        <Reveal className="w-full mb-8">
          <h2 className="text-center font-bold leading-[135%]">{title}</h2>
          <p className="text-body sm:text-h2 lg:text-h1 font-bold text-center">
            {subtitle}
          </p>
        </Reveal>
      </div>
      <div className="embla w-full wrapper">
        <div className="embla w-full" ref={emblaRef}>
          <div className="embla__container flex gap-8 lg:gap-22 py-10">
            {items.map((item, index) => (
              <div
                // delay={index < 2 ? index * 0.2 : 0}
                className="embla__slide min-w-[80%] md:min-w-[45%] lg:min-w-[56rem]"
                key={index}
              >
                <div className="rounded-5 border-l-5 border-purple-300 p-5 lg:p-9 h-full justify-between shadow-[3px_5px_10px_0px_rgba(0,0,0,0.25)] bg-white text-black">
                  <ul className="flex gap-1 sm:gap-rem mb-rem lg:mb-6">
                    <li>
                      <div className="size-4 sm:size-8">{star}</div>
                    </li>
                    <li>
                      <div className="size-4 sm:size-8">{star}</div>
                    </li>
                    <li>
                      <div className="size-4 sm:size-8">{star}</div>
                    </li>
                    <li>
                      <div className="size-4 sm:size-8">{star}</div>
                    </li>
                    <li>
                      <div className="size-4 sm:size-8">{star}</div>
                    </li>
                    <li className="ml-auto">
                      <div className="w-7 h-5 sm:w-12 sm:h-10">{comma}</div>
                    </li>
                  </ul>
                  <p className="mb-16 lg:mb-21 text-smallest sm:text-small lg:text-small">
                    "{item.content}"
                  </p>
                  <p className="text-smallest sm:text-small lg:text-body font-bold">
                    - {item.name}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
