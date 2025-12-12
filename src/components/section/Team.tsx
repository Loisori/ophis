"use client";

import Image from "next/image";

import { Reveal } from "@/components/animations/Reveal";
import { sub } from "framer-motion/client";

export type TeamMember = {
  name: string;
  description: string;
  image: string;
};

export type TeamData = {
  title?: string;
  subtitle?: string;
  members?: TeamMember[];
};

interface TeamProps {
  data: TeamData | null;
}

export default function Team({ data }: TeamProps) {
  const title = data?.title ?? "Meet our brains";
  const subtitle = data?.subtitle ?? "The people behind Ophis";

  const defaultMembers: TeamMember[] = [
    {
      name: "Nam Nguyen",
      description:
        "Senior editor with 4+ years turning raw footage into revenue-driving content. Specializes in diverse video styles that convert viewers into customers and grow brands faster.",
      image:
        "https://res.cloudinary.com/dhxrsiqip/image/upload/v1764172931/Nam_Nguyen_1_oad1gh.png",
    },
    {
      name: "Simon",
      description:
        "With a background that spans from gaming content to brand storytelling, has led editing teams, designed motion graphics, and produced standout visuals under tight deadlines.",
      image:
        "https://res.cloudinary.com/dhxrsiqip/image/upload/v1764172931/Simon_da4ogc.png",
    },
  ];

  const members =
    data?.members && data.members.length > 0 ? data.members : defaultMembers;

  return (
    <section className="py-24 px-4 bg-white text-black overflow-hidden">
      <div className="max-w-[106rem] mx-auto">
        <Reveal className="w-full! mb-4 lg:mb-8">
          <h2 className="text-center font-bold leading-[135%]">{title}</h2>
          <p className="text-body sm:text-h2 lg:text-h1 font-bold text-center">
            {subtitle}
          </p>
        </Reveal>

        <div className="space-y-24">
          {members.map((member, index) => {
            const isEven = index % 2 === 0;

            return (
              <div
                key={index}
                className={`flex flex-col ${
                  isEven ? "flex-row" : "flex-row-reverse"
                } items-center gap-8 md:gap-16`}
              >
                {/* Image Side */}
                <div
                  className={`w-full md:w-1/2 flex justify-center ${
                    isEven ? "justify-end" : "justify-start"
                  }`}
                >
                  <div
                    className={`relative w-full max-w-md aspect-square rounded-[2rem] overflow-hidden shadow-2xl`}
                  >
                    {member.image && (
                      <Image
                        src={member.image}
                        alt={member.name}
                        fill
                        className="object-cover object-center"
                      />
                    )}
                  </div>
                </div>

                <div
                  className={`w-full md:w-1/2 ${
                    isEven ? "text-left" : "text-right"
                  }`}
                >
                  <div
                    className={`flex gap-10 ${
                      isEven ? "flex-row" : "flex-row-reverse"
                    }`}
                  >
                    {/* The colored bar */}
                    <div className="w-1.5 bg-[#4a0b75] rounded-full shrink-0 min-h-[100px]" />

                    <div>
                      <p className="text-small sm:text-h3 lg:text-h2 font-bold">
                        {member.name}
                      </p>
                      <p
                        className={` text-smallest sm:text-smaller lg:text-small ${
                          !isEven && "ml-auto"
                        }`}
                      >
                        {member.description}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
