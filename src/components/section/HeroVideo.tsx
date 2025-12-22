// "use client";

// import Image from "next/image";

// export type HeroVideoData = {
//   videoUrl?: string;
// };

// interface HeroVideoProps {
//   data: HeroVideoData | null;
// }

// export default function HeroVideo({ data }: HeroVideoProps) {
//   const defaultVideo =
//     "https://res.cloudinary.com/dhxrsiqip/video/upload/v1764155115/Ophis_Intro_v01_xqoqrd.mp4";

//   const videoUrl = data?.videoUrl || defaultVideo;

//   return (
//     <section
//       id="heroVideo"
//       className="relative bg-linear-to-b from-[#2C0343] to-black z-20"
//     >
//       <Image
//         src="/imgs/bg1.png"
//         alt="background"
//         width={500}
//         height={500}
//         className="absolute opacity-25 z-0 bottom-0 left-0"
//       />
//       <div className="wrapper relative z-10">
//         <video
//           className="w-full h-auto p-[.6rem] md:p-rem bg-gray-300 rounded-5 shadow-2xl"
//           autoPlay
//           loop
//           playsInline
//           controls
//           src={videoUrl}
//         >
//           Your browser does not support the video tag.
//         </video>
//       </div>
//     </section>
//   );
// }
"use client";

import Image from "next/image";
import Script from "next/script";

// Khai báo TypeScript (Giữ nguyên phần này để không bị lỗi đỏ)
declare global {
  namespace JSX {
    interface IntrinsicElements {
      "wistia-player": React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLElement> & {
          "media-id"?: string;
          aspect?: string;
        },
        HTMLElement
      >;
    }
  }
}

export type HeroVideoData = {
  wistiaId?: string;
};

interface HeroVideoProps {
  data: HeroVideoData | null;
}

export default function HeroVideo({ data }: HeroVideoProps) {
  const defaultWistiaId = "xyeq3szm6m";
  const mediaId = data?.wistiaId || defaultWistiaId;

  return (
    <section
      id="heroVideo"
      className="relative bg-linear-to-b from-[#2C0343] to-black z-20"
    >
      {/* SỬA LỖI Ở ĐÂY: Dùng style thường với dangerouslySetInnerHTML 
          để tránh Next.js tự động inject class hash gây lỗi Hydration */}
      <style
        dangerouslySetInnerHTML={{
          __html: `
          wistia-player[media-id="${mediaId}"]:not(:defined) {
            background: center / contain no-repeat url("https://fast.wistia.com/embed/medias/${mediaId}/swatch");
            display: block;
            filter: blur(5px);
            padding-top: 56.25%;
          }
        `,
        }}
      />

      <Script src="https://fast.wistia.com/player.js" strategy="lazyOnload" />
      <Script
        src={`https://fast.wistia.com/embed/${mediaId}.js`}
        strategy="lazyOnload"
        type="module"
      />

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
            {/* Giữ suppressHydrationWarning để tránh lỗi nội dung bên trong player thay đổi */}
            <wistia-player
              media-id={mediaId}
              aspect="1.7777777777777777"
              suppressHydrationWarning={true}
            ></wistia-player>
          </div>
        </div>
      </div>
    </section>
  );
}