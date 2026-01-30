"use client";

import { useState } from "react";
import Image from "next/image";
import { Reveal } from "@/components/animations/Reveal";

type Category = {
  name: string;
  videos: string[];
};

interface ProjectsProps {
  data?: {
    title?: string;
    subtitle?: string;
    categories?: Category[];
  } | null;
}

const VideoCard = ({ id, index }: { id: string; index: number }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const cleanId = id ? id.split("?")[0] : "";
  const thumbnailUrl = `https://img.youtube.com/vi/${cleanId}/maxresdefault.jpg`;
  const embedUrl = `https://www.youtube.com/embed/${cleanId}?autoplay=1`;

  if (!cleanId) return null;

  return (
    <Reveal className="relative w-full aspect-video bg-gray-900 rounded-xl overflow-hidden shadow-2xl border border-white/10 group cursor-pointer">
      {!isPlaying ? (
        <div
          className="relative w-full h-full"
          onClick={() => setIsPlaying(true)}
        >
          <Image
            src={thumbnailUrl}
            alt={`Video thumbnail ${index + 1}`}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
          <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors" />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-16 h-16 bg-purple-600/90 rounded-full flex items-center justify-center shadow-lg transform transition-all group-hover:scale-110 group-hover:bg-purple-500">
              <svg
                className="w-8 h-8 text-white ml-1"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M8 5v14l11-7z" />
              </svg>
            </div>
          </div>
        </div>
      ) : (
        <iframe
          src={embedUrl}
          title={`Project ${index + 1}`}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="absolute top-0 left-0 w-full h-full border-0"
        />
      )}
    </Reveal>
  );
};

const CategorySection = ({
  category,
  index,
}: {
  category: Category;
  index: number;
}) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const videosToShow = isExpanded
    ? category.videos
    : category.videos.slice(0, 4);

  const hasMoreVideos = category.videos.length > 4;

  return (
    <div className="space-y-6">
      {category.name && (
        <Reveal>
          <h3 className="text-2xl md:text-3xl font-bold text-white/90 border-l-4 border-purple-500 pl-4">
            {category.name}
          </h3>
        </Reveal>
      )}

      {category.videos && category.videos.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-y-8 md:gap-x-16">
          {videosToShow.map((id, vidIndex) => (
            <VideoCard
              key={`${index}-${vidIndex}-${id}`}
              id={id}
              index={vidIndex}
            />
          ))}
        </div>
      ) : (
        <p className="text-white/40 italic text-sm">
          No videos in this category yet.
        </p>
      )}

      {hasMoreVideos && (
        <div className="flex justify-center mt-8">
          <Reveal>
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="button--primary"
            >
              {isExpanded ? "Show Less" : "Watch more"}
            </button>
          </Reveal>
        </div>
      )}
    </div>
  );
};

export default function Projects({ data }: ProjectsProps) {
  const title = data?.title ?? "Projects";
  const subtitle = data?.subtitle ?? "Explore our Video Editing Portfolio";
  const categories = data?.categories || [];

  return (
    <section
      id="projects"
      className="bg-linear-to-b from-[#2e0249] to-black text-white relative overflow-hidden py-20"
    >
      <div className="wrapper">
        <Reveal className="w-full mb-12">
          <h2 className="text-center font-bold leading-[135%]">{title}</h2>
          <p className="text-body sm:text-h2 lg:text-h1 font-bold text-center">
            {subtitle}
          </p>
        </Reveal>

        <div className="space-y-20 mb-16">
          {categories.map((category, index) => (
            <CategorySection key={index} category={category} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
