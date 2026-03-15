"use client";

import { Reveal } from "@/components/animations/Reveal";
import Image from "next/image";
import {
  CaseStudyData,
  CaseStudyBlock,
  CaseStudyProject,
} from "@/types/CaseStudy.type";

const DEFAULT_CASE_STUDY_DATA: CaseStudyData = {
  title: "Case Studies",
  projects: [
    {
      title: "Triathlon Mike",
      image: {
        src: "https://res.cloudinary.com/dhxrsiqip/image/upload/v1764155234/snooppi_g5k2hl.png",
        alt: "Tech Launch",
      },
      projectLink: "https://example.com",
      content: [
        {
          type: "textblock",
          content:
            "We helped this tech startup launch their new AI product with a high-energy video campaign. The goal was to explain complex features in simple, engaging visuals.",
        },
        {
          type: "twoImages",
          images: [
            {
              src: "https://res.cloudinary.com/dhxrsiqip/image/upload/v1764155234/snooppi_g5k2hl.png",
              alt: "Setup 1",
            },
            {
              src: "https://res.cloudinary.com/dhxrsiqip/image/upload/v1764155234/snooppi_g5k2hl.png",
              alt: "Setup 2",
            },
          ],
        },
        {
          type: "textblock",
          content:
            "The result was a 200% increase in sign-ups within the first week.",
        },
      ],
    },
    {
      title: "Jason’s Cabin",
      image: {
        src: "https://res.cloudinary.com/dhxrsiqip/image/upload/v1764155234/snooppi_g5k2hl.png",
        alt: "Fashion",
      },
      content: [
        {
          type: "textblock",
          content:
            "A complete visual overhaul for a modern streetwear brand. We focused on fast cuts, vibrant colors, and urban aesthetics.",
        },
        {
          type: "compareFourImages",
          images: [
            {
              src: "https://res.cloudinary.com/dhxrsiqip/image/upload/v1764155234/snooppi_g5k2hl.png",
              alt: "Look 1",
            },
            {
              src: "https://res.cloudinary.com/dhxrsiqip/image/upload/v1764155234/snooppi_g5k2hl.png",
              alt: "Look 2",
            },
            {
              src: "https://res.cloudinary.com/dhxrsiqip/image/upload/v1764155234/snooppi_g5k2hl.png",
              alt: "Look 3",
            },
            {
              src: "https://res.cloudinary.com/dhxrsiqip/image/upload/v1764155234/snooppi_g5k2hl.png",
              alt: "Look 4",
            },
          ],
        },
      ],
    },
  ],
};

const BlockRenderer = ({ block }: { block: CaseStudyBlock }) => {
  switch (block.type) {
    case "textblock":
      return (
        <Reveal>
          <p className="text-small sm:text-body lg:text-h3 font-normal text-center mb-[5rem] md:mb-[8rem]">
            {block.content}
          </p>
        </Reveal>
      );

    case "image":
      return (
        <Reveal animation="scale" className="relative w-full aspect-[1343/659] rounded-xl mb-8">
          <Image
            src={block.src}
            alt={block.alt}
            fill
            className="hover:scale-[1.1] duration-500"
          />
        </Reveal>
      );

    case "video":
      return (
        <div className="w-full rounded-xl overflow-hidden mb-8 border border-white/10">
          <video
            src={block.src}
            poster={block.poster}
            controls
            className="w-full h-auto"
          />
        </div>
      );

    case "twoImages":
      return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-[2rem] mb-[5rem] md:mb-[17rem]">
          {block.images.map((img, i) => ( 
            <Reveal animation="scale"
              key={i}
              className={`relative aspect-[20/13] rounded-xl w-full ${i === 0 ? "md:translate-y-[9rem] md:translate-x-[9rem] z-10" : ""}`}
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                className="hover:scale-[1.1] duration-500"
              />
            </Reveal>
          ))}
        </div>
      );

    case "compareFourImages": {
      const genericImgs = block.images.slice(0, 3);
      const myEditImg = block.images[3];

      return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-[5rem] mb-[10rem]">
          <div>
            <button className="button--primary font-bold shadow-lg mb-[7rem]">
              Generic Videos
            </button>
            <Reveal className="grid grid-cols-1 md:grid-cols-2 max-md:gap-[4rem] md:pt-[5rem]">
              {genericImgs.map((img, i) => {
                let customClass = "";
                if (i === 1)
                  customClass = "md:-translate-x-[5rem] md:-translate-y-[5rem]";
                if (i === 2)
                  customClass =
                    "md:col-span-2 md:w-1/2 md:mx-auto md:-translate-y-[5rem]";

                return (
                  <div
                    key={i}
                    className={`relative aspect-[415/334] rounded-xl drop-shadow-[0_0_10px_rgba(0,0,0,1)] ${customClass}`}
                  >
                    <Image
                      src={img.src}
                      alt={img.alt}
                      fill
                      className="hover:scale-[1.1] duration-500"
                    />
                  </div>
                );
              })}
            </Reveal>
          </div>

          <div>
            <button className="button--primary font-bold shadow-lg mb-[7rem]">My Edit</button>
            {myEditImg && (
              <Reveal delay={0.5} className="relative w-full aspect-[91/81] rounded-xl drop-shadow-[0_0_10px_rgba(118,60,172,1)]">
                <Image
                  src={myEditImg.src}
                  alt={myEditImg.alt}
                  fill
                  className="hover:scale-[1.1] duration-500"
                />
              </Reveal>
            )}
          </div>
        </div>
      );
    }

    case "compareFiveImages": {
      const genericImgs = block.images.slice(0, 3);
      const myEditImgs = block.images.slice(3, 5);

      return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-[2rem] md:gap-[5rem] mb-[5rem] md:mb-[10rem]">
          <div>
            <button className="button--primary font-bold shadow-lg mb-[7rem]">
              Generic Videos
            </button>
            <Reveal className="grid grid-cols-1 md:grid-cols-2 gap-[2rem]">
              {genericImgs.map((img, i) => (
                <div
                  key={i}
                  className={`relative aspect-[350/310] rounded-xl drop-shadow-[0_0_10px_rgba(0,0,0,1)] ${i === 2 ? "md:col-span-2 md:w-1/2 md:justify-self-center md:mx-auto" : ""}`}
                >
                  <Image
                    src={img.src}
                    alt={img.alt}
                    fill
                    className="hover:scale-[1.1] duration-500"
                  />
                </div>
              ))}
            </Reveal>
          </div>

          <div>
            <button className="button--primary font-bold shadow-lg mb-[7rem]">My Edit</button>
            <Reveal delay={0.5} className="flex flex-col gap-[4rem] md:block">
              {myEditImgs.map((img, i) => (
                <div
                  key={i}
                  className={`relative aspect-[350/310] rounded-xl drop-shadow-[0_0_10px_rgba(118,60,172,1)] md:max-w-[50%] md:ml-[10%] ${i === 1 ? " md:ml-[20%] md:translate-x-1/3 md:-translate-y-[2rem]" : ""}`}
                >
                  <Image
                    src={img.src}
                    alt={img.alt}
                    fill
                    className="hover:scale-[1.1] duration-500"
                  />
                </div>
              ))}
            </Reveal>
          </div>
        </div>
      );
    }

    case "compareSevenImages": {
      const genericImgs = block.images.slice(0, 3);
      const myEditImgs = block.images.slice(3, 7);

      return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-[2rem] md:gap-[5rem] mb-[5rem] md:mb-[10rem]">
          <div className="flex flex-col">
            <button className="button--primary font-bold shadow-lg mb-[7rem]">
              Generic Videos
            </button>
            <Reveal className="grid grid-cols-1 md:grid-cols-2 gap-[2rem]">
              {genericImgs.map((img, i) => (
                <div
                  key={i}
                  className={`relative aspect-[350/310] rounded-xl drop-shadow-[0_0_10px_rgba(0,0,0,1)] ${i === 2 ? "md:max-w-1/2 md:col-span-2 md:ml-[25%]" : ""}`}
                >
                  <Image src={img.src} alt={img.alt} fill className="hover:scale-[1.1] duration-500" />
                </div>
              ))}
            </Reveal>
          </div>

          <div className="flex flex-col">
            <button className="button--primary font-bold shadow-lg mb-[7rem]">My Edit</button>
            <Reveal delay={0.5} className="grid grid-cols-1 md:grid-cols-2 gap-[2rem]">
              {myEditImgs.map((img, i) => (
                <div
                  key={i}
                  className="relative aspect-[350/310] rounded-xl drop-shadow-[0_0_10px_rgba(118,60,172,1)]"
                >
                  <Image
                    src={img.src}
                    alt={img.alt}
                    fill
                    className="hover:scale-[1.1] duration-500"
                  />
                </div>
              ))}
            </Reveal>
          </div>
        </div>
      );
    }

    default:
      return null;
  }
};

interface CaseStudyProps {
  data: CaseStudyData | null;
}

export default function CaseStudy({ data }: CaseStudyProps) {
  const title = data?.title || DEFAULT_CASE_STUDY_DATA.title;

  const projects =
    data?.projects && data.projects.length > 0
      ? data.projects
      : DEFAULT_CASE_STUDY_DATA.projects;

  if (!projects || projects.length === 0) return null;

  return (
    <section id="caseStudy">
      <div className="wrapper mx-auto px-4">
        <Reveal className="w-full mb-12">
          <p className="text-body sm:text-h2 lg:text-h1 font-bold text-center">{title}</p>
        </Reveal>
        <div className="space-y-32">
          {projects.map((project, idx) => (
            <div key={idx} className="group">
              <div className="mb-10 max-w-5xl mx-auto">
                <div className="relative size-[15rem] md:size-[20rem] rounded-[100%] m-auto mb-6">
                  {project.image.src && (
                    <Image
                      src={project.image.src}
                      alt={project.image.alt}
                      fill
                      className="transition-transform duration-700 group-hover:scale-105 rounded-[100%] shadow-lg"
                    />
                  )}
                </div>
                <div className="px-2">
                  <h2 className="text-center font-bold leading-[135%]">
                    {project.title}
                  </h2>
                  {/* {project.projectLink && (
                    <a
                      href={project.projectLink}
                      target="_blank"
                      className="text-purple-400 hover:text-purple-300 font-bold uppercase tracking-wider text-sm border-b-2 border-purple-500/30 hover:border-purple-500 pb-1 transition-all"
                    >
                      View Project
                    </a>
                  )} */}
                </div>
              </div>

              {/* Dynamic Content Blocks */}
              <div className="">
                {project.content.map((block, bIdx) => (
                  <BlockRenderer key={bIdx} block={block} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
