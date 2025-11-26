"use client";

import { Reveal } from "@/components/animations/Reveal";

interface ProjectsProps {
  data?: {
    videoIds?: string[];
  } | null;
}

export default function Projects({ data }: ProjectsProps) {
  const videoIds = data?.videoIds || [];

  if (videoIds.length === 0) return null;

  return (
    <section className="py-24 px-4 bg-linear-to-b from-[#2e0249] to-black text-white relative overflow-hidden">
      <div className="wrapper">
        <Reveal className="w-full! mb-[3rem]">
          <h2 className="text-center font-bold leading-[135%]">Projects</h2>
          <p className="text-h1 font-bold text-center">
            Explore our Video Editing Portfolio
          </p>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mb-16">
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

        {/* CTA Button */}
        <div className="text-center">
          <button className="px-8 py-4 bg-[#9d34da] hover:bg-[#8a2cc0] text-white font-medium rounded-lg transition-all duration-300 shadow-lg hover:shadow-purple-500/25 hover:-translate-y-0.5">
            Watch more our work
          </button>
        </div>
      </div>
    </section>
  );
}
