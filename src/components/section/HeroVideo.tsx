import Image from "next/image";

export default function HeroVideo() {
  return (
    <section
      id="heroVideo"
      className=""
    >
      <div className="wrapper py-[8rem]">
        <video
          className="w-full h-auto"
          autoPlay
          loop
          muted
          playsInline
          controls
        >
          <source src="/videos/herovideo.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </section>
  );
}
