"use client";

import Image from "next/image";

export default function HeroVideo() {
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
      <div className="wrapper">
        <video
          className="w-full h-auto p-[.6rem] md:p-rem bg-gray-300 rounded-5"
          autoPlay
          loop
          muted
          playsInline
          controls
        >
          <source src="https://res.cloudinary.com/dhxrsiqip/video/upload/v1764155115/Ophis_Intro_v01_xqoqrd.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </section>
  );
}
