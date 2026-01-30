import { Reveal } from "@/components/animations/Reveal";

export type HeroCard = {
  title: string;
  subtitle: string;
};

export type HeroData = {
  title?: string;
  subtitle?: string;
  cards?: HeroCard[];
};

interface HeroProps {
  data: HeroData | null;
}

export default function Hero({ data }: HeroProps) {
  const title =
    data?.title ?? "The editing team that scales with your ambition";
  const subtitle =
    data?.subtitle ??
    "Publish faster, maintain exceptional quality, and turn your content into revenue with expert on-demand editing.";

  const defaultCards: HeroCard[] = [
    { title: "10X Views", subtitle: "Faster lead times" },
    { title: "Cancel anytime", subtitle: "No commitment, no stress" },
    { title: "4-10 days", subtitle: "Video delivery" },
  ];

  const cards =
    data?.cards && data.cards.length === 3 ? data.cards : defaultCards;

  return (
    <section
      id="hero"
      className="relative bg-linear-to-b from-purple-400 to-[#2C0343]"
    >
      <img
        src="/imgs/bg2.png"
        alt="background"
        width={500}
        height={500}
        className="absolute opacity-25 z-0 top-0 right-0"
      />
      <div className="z-1 pt-15 sm:pt-[15rem] xmd:pt-[21rem] wrapper text-white flex max-xmd:flex-col-reverse  ">
        <div className="max-w-[47rem] max-xmd:m-auto xmd:mr-[9rem]">
          <Reveal animation="fade-up">
            <h2 className="mb-2 font-bold">{title}</h2>
            <p className="text-smallest sm:text-small max-sm:text-center font-medium">
              {subtitle}
            </p>
          </Reveal>
        </div>

        <div className="block m-auto xmd:top-[-11rem] relative w-full xmd:w-[60rem] h-[39rem]">
          {/* Card 1: Top Left */}

          <Reveal className="text-center absolute top-0 left-0 w-fit lg:w-[28rem] p-5 md:p-8 rounded-5 border-[.3rem] border-white bg-white/25">
            <h2 className=" font-bold leading-[1.5] mb-[0.5rem] whitespace-nowrap">
              {cards[0].title}
            </h2>
            <p className="text-smallest sm:text-body">{cards[0].subtitle}</p>
          </Reveal>

          {/* Card 2: Middle Right */}
          <Reveal
            delay={0.25}
            className="text-center absolute top-[27%] sm:top-[13%] left-[41%] sm:left-[62%] w-fit lg:w-[32rem] p-5 md:p-8 rounded-5 border-[.3rem] border-white bg-white/25 z-20"
          >
            {/* top-[5rem] left-[37rem] */}
            <h2 className=" font-bold leading-[1.5] mb-[0.5rem] whitespace-nowrap">
              {cards[1].title}
            </h2>
            <p className="text-smallest sm:text-body">{cards[1].subtitle}</p>
          </Reveal>

          {/* Card 3: Bottom Left */}
          <Reveal
            delay={0.5}
            className="text-center absolute top-[53%] sm:top-[64%] left-[4%] sm:left-[8%] w-fit lg:w-[28rem] p-5 md:p-8 rounded-5 border-[.3rem] border-white bg-white/25 z-10"
          >
            {/* top-[25rem] left-[5rem] */}
            <h2 className=" font-bold leading-[1.5] mb-[0.5rem] whitespace-nowrap">
              {cards[2].title}
            </h2>
            <p className="text-smallest sm:text-body">{cards[2].subtitle}</p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
