import { Reveal } from "@/components/animations/Reveal";

export type HeroCard = {
  title: string;
  subtitle: string;
};

export type HeroData = {
  headline?: string;
  subheadline?: string;
  cards?: HeroCard[];
};

interface HeroProps {
  data: HeroData | null;
}

export default function Hero({ data }: HeroProps) {
  const headline =
    data?.headline ?? "The editing team that scales with your ambition";
  const subheadline =
    data?.subheadline ??
    "Publish faster, maintain exceptional quality, and turn your content into revenue with expert on-demand editing.";

  // Default cards if none are provided from DB
  const defaultCards: HeroCard[] = [
    { title: "10X Views", subtitle: "Faster lead times" },
    { title: "Cancel anytime", subtitle: "No commitment, no stress" },
    { title: "4-10 days", subtitle: "Video delivery" },
  ];

  // Use DB data if available, otherwise defaults
  const cards =
    data?.cards && data.cards.length === 3 ? data.cards : defaultCards;

  return (
    <section
      id="hero"
      className="relative bg-linear-to-b from-purple-400 to-[#2C0343]"
    >
      {/* Using standard img tag to avoid next/image resolution errors in preview */}
      <img
        src="/imgs/bg2.png"
        alt="background"
        width={500}
        height={500}
        className="absolute opacity-25 z-0 top-0 right-0"
      />
      <div className="z-1 pt-[15rem] md:pt-[21rem] wrapper text-white flex max-md:flex-col">
        <div className="max-w-[47rem] max-md:m-auto md:mr-[9rem] max-md:mb-10">
          <Reveal animation="fade-up">
            <h2 className="mb-2">{headline}</h2>
            <p className="text-small font-medium">{subheadline}</p>
          </Reveal>
        </div>

        <div className="max-md:grid max-md:gap-10 md:top-[-11rem] relative w-full md:w-[60rem] md:h-[29rem] block">
          {/* Card 1: Top Left */}
          
          <Reveal className="max-md:w-full text-center md:absolute top-0 left-0 w-[28rem] p-[3rem] rounded-5 border-[.3rem] border-white bg-white/25">
            <h2 className="text-8 font-bold leading-[1.5] mb-[0.5rem] whitespace-nowrap">
              {cards[0].title}
            </h2>
            <p className="text-body">{cards[0].subtitle}</p>
          </Reveal>

          {/* Card 2: Middle Right */}
          <Reveal delay={0.25} className="max-md:w-full text-center md:absolute top-[5rem] left-[37rem] w-[32rem] p-[3rem] rounded-5 border-[.3rem] border-white bg-white/25 z-20">
            <h2 className="text-8 font-bold leading-[1.5] mb-[0.5rem] whitespace-nowrap">
              {cards[1].title}
            </h2>
            <p className="text-body">{cards[1].subtitle}</p>
          </Reveal>

          {/* Card 3: Bottom Left */}
          <Reveal delay={0.5} className="max-md:w-full text-center md:absolute top-[25rem] left-[5rem] w-[28rem] p-[3rem] rounded-5 border-[.3rem] border-white bg-white/25 z-10">
            <h2 className="text-8 font-bold leading-[1.5] mb-[0.5rem] whitespace-nowrap">
              {cards[2].title}
            </h2>
            <p className="text-body">{cards[2].subtitle}</p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
