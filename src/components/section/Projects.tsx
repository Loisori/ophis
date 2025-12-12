"use client";

import { Reveal } from "@/components/animations/Reveal";

interface ProjectsProps {
  data?: {
    title?: string;
    subtitle?: string;
    videoIds?: string[];
  } | null;
}

export default function Projects({ data }: ProjectsProps) {
  const title = data?.title ?? "Projects";
  const subtitile = data?.subtitle ?? "Explore our Video Editing Portfolio";
  const videoIds = data?.videoIds || [];

  if (videoIds.length === 0) return null;

  return (
    <section className="bg-linear-to-b from-[#2e0249] to-black text-white relative overflow-hidden">
      <div className="wrapper">
        <Reveal className="w-full! mb-8">
          <h2 className="text-center font-bold leading-[135%]">{title}</h2>
          <p className="text-body lg:text-body sm:text-h2 lg:text-h1 font-bold text-center">
            {subtitile}
          </p>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-8 mb-16">
          {videoIds.map((id, index) => (
            <div
              key={index}
              className="relative w-full aspect-video bg-gray-900 rounded-xl overflow-hidden shadow-2xl border border-white/10 group"
            >
              <iframe
                src={`https://www.youtube.com/embed/${id}`}
                title={`Project ${index + 1}`}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="absolute top-0 left-0 w-full h-full border-0"
              />
            </div>
          ))}
        </div>

        <button className="block m-auto px-4 py-5 bg-purple-100 text-smaller sm:text-small lg:text-white rounded-5 text-body hover:bg-purple-200 transition-colors">
          Work with us
        </button>
      </div>
    </section>
  );
}
