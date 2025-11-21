import Image from "next/image";

export type HeroData = {
  headline?: string;
  subheadline?: string;
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

  return (
    <section
      id="hero"
      className="relative bg-linear-to-b from-purple-400 to-[#2C0343]"
    >
      <Image
        src="/imgs/bg2.png"
        alt="background"
        width={500}
        height={500}
        className="absolute opacity-25 z-0 top-0 right-0"
      />
      <div className="z-1 pt-[15rem] md:pt-[21rem] wrapper text-white flex max-md:flex-col">
        <div className="max-w-[47rem] max-md:m-auto md:mr-[9rem] max-md:mb-[4rem]">
          <h2 className="mb-[.8rem]">{headline}</h2>
          <p className="text-small font-medium">{subheadline}</p>
        </div>
        <div className="max-md:grid max-md:gap-[4rem] md:top-[-11rem] relative w-full md:w-[60rem] md:h-[29rem] block">
          <div className="max-md:w-full text-center md:absolute top-0 left-0 w-[28rem] p-[3rem] rounded-[1rem] border-[.3rem] border-white bg-white/25">
            <h2 className="text-[3.2rem] font-bold leading-[1.5] mb-[0.5rem] whitespace-nowrap">
              10X Views
            </h2>
            <p className="text-body">Faster lead times</p>
          </div>
          <div className="max-md:w-full text-center md:absolute top-[5rem] left-[37rem] w-[32rem] p-[3rem] rounded-[1rem] border-[.3rem] border-white bg-white/25 z-20">
            <h2 className="text-[3.2rem] font-bold leading-[1.5] mb-[0.5rem] whitespace-nowrap">
              Cancel anytime
            </h2>
            <p className="text-body">No commitment, no stress</p>
          </div>
          <div className="max-md:w-full text-center md:absolute top-[25rem] left-[5rem] w-[28rem] p-[3rem] rounded-[1rem] border-[.3rem] border-white bg-white/25 z-10">
            <h2 className="text-[3.2rem] font-bold leading-[1.5] mb-[0.5rem] whitespace-nowrap">
              4-10 days
            </h2>
            <p className="text-body">Video delivery</p>
          </div>
        </div>
      </div>
    </section>
  );
}
