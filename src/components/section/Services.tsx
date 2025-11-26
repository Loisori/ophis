// "use client";

// import { RefreshCw, TrendingUp, Smartphone } from "lucide-react";

// const services = [
//   {
//     title: "Convert",
//     subtitle: "with Video",
//     description: "Strategic editing for Ads & VSLs that hook viewers and turn clicks into customers",
//     icon: RefreshCw,
//   },
//   {
//     title: "Grow",
//     subtitle: "your Channel",
//     description: "High-impact YouTube editing that drives longer watch time and faster channel growth",
//     icon: TrendingUp,
//   },
//   {
//     title: "Multi-Platform",
//     subtitle: "ready",
//     description: "We craft attention-grabbing TikToks, Reels & Shorts built for reach and engagement",
//     icon: Smartphone,
//   },
// ];

// export default function Services() {
//   return (
//     <section className="py-20 px-4 bg-white text-black">
//       <div className="max-w-7xl mx-auto">
//         {/* Section Title */}
//         <div className="text-center mb-16">
//           <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-black">
//             Our Services
//           </h2>
//         </div>

//         {/* Services Grid */}
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//           {services.map((service, index) => (
//             <div
//               key={index}
//               className="bg-[#4a0b75] text-white p-10 rounded-3xl flex flex-col items-start text-left shadow-xl transition-transform hover:-translate-y-2 duration-300"
//             >
//               {/* Icon Container */}
//               <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mb-8 shrink-0">
//                 <service.icon className="w-8 h-8 text-[#4a0b75]" strokeWidth={2.5} />
//               </div>

//               {/* Title Group */}
//               <h3 className="text-2xl font-bold mb-4">
//                 {service.title} <span className="font-light opacity-90">{service.subtitle}</span>
//               </h3>

//               {/* Description */}
//               <p className="text-white/80 leading-relaxed text-sm md:text-base">
//                 {service.description}
//               </p>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }