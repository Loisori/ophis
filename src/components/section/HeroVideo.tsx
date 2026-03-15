"use client";

import Image from "next/image";
import { WistiaPlayer } from "@wistia/wistia-player-react";
import { HeroVideoData } from "@/types/HeroVideo.type";
import { DEFAULT_HERO_VIDEO_DATA } from "@/constants/defaults";

interface HeroVideoProps {
  data: HeroVideoData | null;
}

export default function HeroVideo({ data }: HeroVideoProps) {
const videoUrl = data?.videoUrl || DEFAULT_HERO_VIDEO_DATA.videoUrl!;

  return (
    <section
      id="heroVideo"
      className="relative bg-linear-to-b from-[#2C0343] to-black z-20"
    >
      <Image
        src="/imgs/bg1.png"
        alt="background"
        width={500}
        height={500}
        className="absolute opacity-25 z-0 bottom-0 left-0"
      />
      <div className="wrapper relative z-10">
        <div className="w-full h-auto p-[.6rem] md:p-rem bg-gray-300 rounded-5 shadow-2xl overflow-hidden">
          <div className="relative size-full bg-gray-300 rounded-[calc(1.25rem-0.6rem)] md:rounded-[calc(1.25rem-1rem)] overflow-hidden">
            <WistiaPlayer mediaId={videoUrl} preload="auto" />
          </div>
        </div>
      </div>
    </section>
  );
}
