// "use client";

// import { Reveal } from "@/components/animations/Reveal";

// interface ProjectsProps {
//   data?: {
//     title?: string;
//     subtitle?: string;
//     videoIds?: string[];
//   } | null;
// }

// export default function Projects({ data }: ProjectsProps) {
//   const title = data?.title ?? "Projects";
//   const subtitile = data?.subtitle ?? "Explore our Video Editing Portfolio";
//   const videoIds = data?.videoIds || [];

//   if (videoIds.length === 0) return null;

//   return (
//     <section className="bg-linear-to-b from-[#2e0249] to-black text-white relative overflow-hidden">
//       <div className="wrapper">
//         <Reveal className="w-full! mb-8">
//           <h2 className="text-center font-bold leading-[135%]">{title}</h2>
//           <p className="text-body sm:text-h2 lg:text-h1 font-bold text-center">
//             {subtitile}
//           </p>
//         </Reveal>

//         <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-8 mb-16">
//           {videoIds.map((id, index) => (
//             <div
//               key={index}
//               className="relative w-full aspect-video bg-gray-900 rounded-xl overflow-hidden shadow-2xl border border-white/10 group"
//             >
//               <iframe
//                 src={`https://www.youtube.com/embed/${id}`}
//                 title={`Project ${index + 1}`}
//                 allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
//                 allowFullScreen
//                 loading="lazy"
//                 className="absolute top-0 left-0 w-full h-full border-0"
//               />
//             </div>
//           ))}
//         </div>

//         <button className="block m-auto px-4 py-5 bg-purple-100 text-smaller sm:text-small lg:text-white rounded-5 hover:bg-purple-200 transition-colors">
//           Work with us
//         </button>
//       </div>
//     </section>
//   );
// }
"use client";

import { useState } from "react";
import Image from "next/image";
import { Reveal } from "@/components/animations/Reveal";

interface ProjectsProps {
  data?: {
    title?: string;
    subtitle?: string;
    videoIds?: string[];
  } | null;
}

// --- Sub-component: VideoCard ---
const VideoCard = ({ id, index }: { id: string; index: number }) => {
  const [isPlaying, setIsPlaying] = useState(false);

  // 1. QUAN TRỌNG: Làm sạch ID (bỏ ?si=... nếu có)
  // Nếu id là "abc?si=xyz", nó sẽ chỉ lấy "abc"
  const cleanId = id ? id.split("?")[0] : "";

  // URL thumbnail chuẩn
  const thumbnailUrl = `https://img.youtube.com/vi/${cleanId}/maxresdefault.jpg`;
  
  // URL iframe chuẩn
  const embedUrl = `https://www.youtube.com/embed/${cleanId}?autoplay=1`;

  if (!cleanId) return null;

  return (
    <div className="relative w-full aspect-video bg-gray-900 rounded-xl overflow-hidden shadow-2xl border border-white/10 group cursor-pointer">
      {!isPlaying ? (
        // --- Trạng thái 1: Hiển thị Thumbnail ---
        <div
          className="relative w-full h-full"
          onClick={() => setIsPlaying(true)}
        >
          <Image
            src={thumbnailUrl}
            alt={`Video thumbnail ${index + 1}`}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            // sizes giúp tối ưu hóa tải ảnh trên các màn hình khác nhau
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
          
          {/* Lớp phủ tối nhẹ */}
          <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors" />

          {/* Nút Play Custom */}
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
        // --- Trạng thái 2: Hiển thị Video (khi đã click) ---
        <iframe
          src={embedUrl}
          title={`Project ${index + 1}`}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="absolute top-0 left-0 w-full h-full border-0"
        />
      )}
    </div>
  );
};

// --- Main Component ---
export default function Projects({ data }: ProjectsProps) {
  const title = data?.title ?? "Projects";
  const subtitle = data?.subtitle ?? "Explore our Video Editing Portfolio";
  const videoIds = data?.videoIds || [];

  if (videoIds.length === 0) return null;

  return (
    <section className="bg-linear-to-b from-[#2e0249] to-black text-white relative overflow-hidden py-20">
      <div className="wrapper">
        <Reveal className="w-full! mb-8">
          <h2 className="text-center font-bold leading-[135%]">{title}</h2>
          <p className="text-body sm:text-h2 lg:text-h1 font-bold text-center">
            {subtitle}
          </p>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-8 mb-16">
          {videoIds.map((id, index) => (
            // Dùng cleanId hoặc index làm key để tránh lỗi nếu id trùng lặp
            <VideoCard key={`${id}-${index}`} id={id} index={index} />
          ))}
        </div>

        <button className="block m-auto px-6 py-4 bg-purple-600 text-white font-semibold rounded-full hover:bg-purple-500 transition-all active:scale-95 shadow-lg shadow-purple-500/20">
          Work with us
        </button>
      </div>
    </section>
  );
}