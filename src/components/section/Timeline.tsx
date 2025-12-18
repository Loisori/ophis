// "use client";
// import Image from "next/image";
// import { Reveal } from "@/components/animations/Reveal";

// interface TimelineProps {
//   data?: {
//     title?: string;
//     subtitle?: string;
//     quote?: string;
//     subquote?: string;
//     steps?: Array<{
//       id: number;
//       title: string;
//       description: string;
//       icon: string;
//       icondark: string;
//     }>;
//   } | null;
// }

// export default function Timeline({ data }: TimelineProps) {
//   const title = data?.title ?? "How it works";
//   const subtitile = data?.subtitle ?? "Consistent, Seamless & On-brand";
//   const quote =
//     data?.quote ?? "The way editing should have been done from the start.";
//   const subquote =
//     data?.subquote ??
//     "By understanding your brand’s tone and visual identity, we build a streamlined editing workflow that keeps every video consistent - from the first cut to the final export.";

//   const activeSteps = data?.steps || [];

//   if (activeSteps.length === 0) return null;

//   return (
//     <section className="" id="timeline">
//       <div className="wrapper">
//         <Reveal className="w-full mb-8">
//           <h2 className="text-center font-bold leading-[135%]">{title}</h2>
//           <p className="text-body sm:text-h2 lg:text-h1 font-bold text-center">{subtitile}</p>
//           <button className="block m-auto px-4 py-5 bg-purple-100 text-white rounded-5 text-body">
//             Work with us
//           </button>
//         </Reveal>

//         <div className="relative">
//           <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-[3px] bg-[#E5E5E5] hidden md:block" />
//           <div className="space-y-12 md:space-y-[5rem] relative">
//             {activeSteps.map((step, index) => {
//               const isEven = (index + 1) % 2 === 0;
//               return (
//                 <div
//                   key={step.id || index}
//                   className="relative flex flex-row items-center md:justify-between gap-8 md:gap-15"
//                 >
//                   {/* --- LEFT SIDE --- */}
//                   <div
//                     className={`w-full md:w-[45%] ${
//                       isEven
//                         ? "md:text-right order-2 md:order-1"
//                         : "md:text-right order-1 flex md:justify-end"
//                     }`}
//                   >
//                     {!isEven && (
//                       <div className="size-15 md:size-20 lg:size-25 rounded-full flex items-center justify-center z-10">
//                         <div className="relative w-full h-full">
//                           {step.icon && (
//                             <Image
//                               src={step.icon}
//                               alt={step.title}
//                               width={100}
//                               height={100}
//                               className="object-contain"
//                             />
//                           )}
//                         </div>
//                       </div>
//                     )}

//                     {isEven && (
//                       <div>
//                         <div className="size-8 sm:size-12 inline-flex mb-3 sm:mb-5 items-center justify-center rounded-full bg-purple-200 text-white font-bold text-body sm:text-h2">
//                           {step.id}
//                         </div>
//                         <h3 className="text-body font-bold mb-[.5rem]">
//                           {step.title}
//                         </h3>
//                         <p className="text-smallest sm:text-small lg:text-body font-normal">
//                           {step.description}
//                         </p>
//                       </div>
//                     )}
//                   </div>

//                   {/* --- RIGHT SIDE --- */}
//                   <div
//                     className={`w-full md:w-[45%] ${
//                       isEven
//                         ? "md:text-left order-1 md:order-2 flex md:justify-start"
//                         : "md:text-left order-2"
//                     }`}
//                   >
//                     {isEven && (
//                       <div className="size-15 md:size-20 lg:size-25 rounded-full flex items-center justify-center z-10">
//                         <div className="relative w-full h-full">
//                           {step.icon && (
//                             <Image
//                               src={step.icon}
//                               alt={step.title}
//                               width={100}
//                               height={100}
//                               className="object-contain"
//                             />
//                           )}
//                         </div>
//                       </div>
//                     )}

//                     {!isEven && (
//                       <div className="text-left">
//                         <div className="size-8 sm:size-12 inline-flex mb-3 sm:mb-5 items-center justify-center rounded-full bg-purple-200 text-white font-bold text-body sm:text-h2">
//                           {step.id}
//                         </div>
//                         <h3 className="text-body font-bold mb-[.5rem]">
//                           {step.title}
//                         </h3>
//                         <p className="text-smallest sm:text-small lg:text-body font-normal">
//                           {step.description}
//                         </p>
//                       </div>
//                     )}
//                   </div>
//                 </div>
//               );
//             })}
//           </div>
//         </div>
//         <div className="mt-32 text-center mx-auto">
//           <Reveal>
//             <h2 className="font-normal">{quote}</h2>
//             <p className="text-small">{subquote}</p>
//           </Reveal>
//         </div>
//       </div>
//     </section>
//   );
// }

// "use client";

// import { useRef } from "react";
// import Image from "next/image";
// import { Reveal } from "@/components/animations/Reveal";
// import { useInView } from "framer-motion";

// // --- Types ---
// interface Step {
//   id: number;
//   title: string;
//   description: string;
//   icon: string;
//   icondark: string;
// }

// interface TimelineProps {
//   data?: {
//     title?: string;
//     subtitle?: string;
//     quote?: string;
//     subquote?: string;
//     steps?: Step[];
//   } | null;
// }

// // --- Sub-Component for Individual Steps ---
// const TimelineStep = ({ step, index }: { step: Step; index: number }) => {
//   const ref = useRef(null);

//   // Bottom: -50% (Trigger exactly at the middle)
//   // Top: 200% (Keep active even when it scrolls way off the top)
//   const isInView = useInView(ref, { margin: "200% 0px -50% 0px" });

//   const isEven = (index + 1) % 2 === 0;

//   return (
//     <div
//       ref={ref}
//       className="relative flex flex-row items-center md:justify-between gap-8 md:gap-15"
//     >
//       {/* --- LEFT SIDE --- */}
//       <div
//         className={`w-full md:w-[45%] ${
//           isEven
//             ? "md:text-right order-2 md:order-1"
//             : "md:text-right order-1 flex md:justify-end"
//         }`}
//       >
//         {!isEven && (
//           <div className="size-15 md:size-20 lg:size-25 rounded-full flex items-center justify-center z-10 transition-transform duration-500 ease-out">
//             {/* IMAGE CONTAINER */}
//             <div className="relative w-full h-full">
//               {/* Image 1: Normal (Visible when NOT in view) */}
//               {step.icon && (
//                 <Image
//                   src={step.icon}
//                   alt={step.title}
//                   fill // Use fill to stack absolutely
//                   className={`object-contain transition-opacity duration-700 ease-in-out ${
//                     isInView ? "opacity-0" : "opacity-100"
//                   }`}
//                 />
//               )}
//               {/* Image 2: Dark/Active (Visible when IN view) */}
//               {(step.icondark || step.icon) && (
//                 <Image
//                   src={step.icondark || step.icon}
//                   alt={step.title}
//                   fill // Use fill to stack absolutely
//                   className={`object-contain transition-opacity duration-700 ease-in-out ${
//                     isInView ? "opacity-100" : "opacity-0"
//                   }`}
//                 />
//               )}
//             </div>
//           </div>
//         )}

//         {isEven && (
//           <div>
//             <div className="size-8 sm:size-12 inline-flex mb-3 sm:mb-5 items-center justify-center rounded-full bg-purple-200 text-white font-bold text-body sm:text-h2">
//               {step.id}
//             </div>
//             <p className="text-smallest sm:text-small lg:text-body font-bold mb-[.5rem] transition-colors duration-300">
//               {step.title}
//             </p>
//             <p className="text-smallest sm:text-small lg:text-body font-normal">{step.description}</p>
//           </div>
//         )}
//       </div>

//       {/* --- RIGHT SIDE --- */}
//       <div
//         className={`w-full md:w-[45%] ${
//           isEven
//             ? "md:text-left order-1 md:order-2 flex md:justify-start"
//             : "md:text-left order-2"
//         }`}
//       >
//         {isEven && (
//           <div className="size-15 md:size-20 lg:size-25 rounded-full flex items-center justify-center z-10">
//             {/* IMAGE CONTAINER */}
//             <div className="relative w-full h-full">
//               {/* Image 1: Normal */}
//               {step.icon && (
//                 <Image
//                   src={step.icon}
//                   alt={step.title}
//                   fill
//                   className={`object-contain transition-opacity duration-700 ease-in-out ${
//                     isInView ? "opacity-0" : "opacity-100"
//                   }`}
//                 />
//               )}
//               {/* Image 2: Dark/Active */}
//               {(step.icondark || step.icon) && (
//                 <Image
//                   src={step.icondark || step.icon}
//                   alt={step.title}
//                   fill
//                   className={`object-contain transition-opacity duration-700 ease-in-out ${
//                     isInView ? "opacity-100" : "opacity-0"
//                   }`}
//                 />
//               )}
//             </div>
//           </div>
//         )}

//         {!isEven && (
//           <div className="text-left">
//             <div className="size-8 sm:size-12 inline-flex mb-3 sm:mb-5 items-center justify-center rounded-full bg-purple-200 text-white font-bold text-body sm:text-h2">
//               {step.id}
//             </div>
//             <p className="text-smallest sm:text-small lg:text-body font-bold mb-[.5rem] transition-colors duration-300">
//               {step.title}
//             </p>
//             <p className="text-smallest sm:text-small lg:text-body font-normal">{step.description}</p>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// // --- Main Component ---
// export default function Timeline({ data }: TimelineProps) {
//   const title = data?.title ?? "How it works";
//   const subtitile = data?.subtitle ?? "Consistent, Seamless & On-brand";
//   const quote =
//     data?.quote ?? "The way editing should have been done from the start.";
//   const subquote =
//     data?.subquote ??
//     "By understanding your brand’s tone and visual identity, we build a streamlined editing workflow that keeps every video consistent - from the first cut to the final export.";

//   const activeSteps = data?.steps || [];

//   if (activeSteps.length === 0) return null;

//   return (
//     <section className="" id="timeline">
//       <div className="wrapper">
//         <Reveal className="w-full mb-8">
//           <h2 className="text-center font-bold leading-[135%]">{title}</h2>
//           <p className="text-body sm:text-h2 lg:text-h1 font-bold text-center">{subtitile}</p>
//           <button className="block m-auto px-4 py-5 bg-purple-100 text-white rounded-5 text-body">
//             Work with us
//           </button>
//         </Reveal>

//         <div className="relative">
//           <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-[3px] bg-[#E5E5E5] hidden md:block" />
//           <div className="space-y-12 md:space-y-[5rem] relative">
//             {activeSteps.map((step, index) => (
//               <TimelineStep key={step.id || index} step={step} index={index} />
//             ))}
//           </div>
//         </div>
//         <div className="mt-32 text-center mx-auto">
//           <Reveal>
//             <h2 className="font-normal">{quote}</h2>
//             <p className="text-small">{subquote}</p>
//           </Reveal>
//         </div>
//       </div>
//     </section>
//   );
// }

"use client";

import { useRef } from "react";
import Image from "next/image";
import { Reveal } from "@/components/animations/Reveal";
import { useInView } from "framer-motion";
import Link from "next/link";

// --- Types ---
interface Step {
  id: number;
  title: string;
  description: string;
  icon: string;
  icondark: string;
}

interface TimelineProps {
  data?: {
    title?: string;
    subtitle?: string;
    quote?: string;
    subquote?: string;
    steps?: Step[];
  } | null;
}

// --- Sub-Component for Individual Steps ---
const TimelineStep = ({ step, index }: { step: Step; index: number }) => {
  const ref = useRef(null);

  // Trigger Logic:
  // Bottom: -50% (Active when it hits the exact middle)
  // Top: 200% (Stays active as it scrolls up)
  const isInView = useInView(ref, { margin: "200% 0px -50% 0px" });

  const isEven = (index + 1) % 2 === 0;

  return (
    <div
      ref={ref}
      // Added py-12 to create spacing between items while keeping the 'box' continuous for the line
      className="relative flex flex-row items-center md:justify-between gap-11 md:gap-17 py-1 lg:py-6"
    >
      {/* --- THE DYNAMIC LINE SEGMENT --- */}
      {/* This line sits behind the content and changes color */}
      <div
        className={`absolute left-1/2 transform -translate-x-1/2 w-[3px] h-full block transition-colors duration-700 ease-in-out -z-10
          ${isInView ? "bg-[#4a0b75]" : "bg-[#E5E5E5]"}
        `}
      />

      {/* --- LEFT SIDE --- */}
      <div
        className={`w-full md:w-[45%] ${
          isEven ? "text-right order-1" : "text-right order-1 flex justify-end"
        }`}
      >
        {!isEven && (
          <div className="size-15 md:size-20 lg:size-25 rounded-full flex items-center justify-center z-10 transition-transform duration-500 ease-out bg-white">
            <div className="relative w-full h-full">
              {step.icon && (
                <Image
                  src={step.icon}
                  alt={step.title}
                  fill
                  className={`object-contain transition-opacity duration-700 ease-in-out ${
                    isInView ? "opacity-0" : "opacity-100"
                  }`}
                />
              )}
              {(step.icondark || step.icon) && (
                <Image
                  src={step.icondark || step.icon}
                  alt={step.title}
                  fill
                  className={`object-contain transition-opacity duration-700 ease-in-out ${
                    isInView ? "opacity-100" : "opacity-0"
                  }`}
                />
              )}
            </div>
          </div>
        )}

        {isEven && (
          <div>
            <div className="size-8 sm:size-12 inline-flex mb-3 sm:mb-5 items-center justify-center rounded-full bg-purple-200 text-white font-bold text-body sm:text-h2">
              {step.id}
            </div>
            <p className="text-smallest sm:text-small lg:text-body font-bold mb-[.5rem] transition-colors duration-300">
              {step.title}
            </p>
            <p className="text-smallest sm:text-small lg:text-body font-normal">
              {step.description}
            </p>
          </div>
        )}
      </div>

      {/* --- RIGHT SIDE --- */}
      <div
        className={`w-full md:w-[45%] ${
          isEven
            ? "md:text-left order-1 md:order-2 flex md:justify-start"
            : "md:text-left order-2"
        }`}
      >
        {isEven && (
          <div className="size-15 md:size-20 lg:size-25 rounded-full flex  items-center justify-center z-10 bg-white">
            <div className="relative w-full h-full">
              {step.icon && (
                <Image
                  src={step.icon}
                  alt={step.title}
                  fill
                  className={`object-contain transition-opacity duration-700 ease-in-out ${
                    isInView ? "opacity-0" : "opacity-100"
                  }`}
                />
              )}
              {(step.icondark || step.icon) && (
                <Image
                  src={step.icondark || step.icon}
                  alt={step.title}
                  fill
                  className={`object-contain transition-opacity duration-700 ease-in-out ${
                    isInView ? "opacity-100" : "opacity-0"
                  }`}
                />
              )}
            </div>
          </div>
        )}

        {!isEven && (
          <div className="text-left">
            <div className="size-8 sm:size-12 inline-flex mb-3 sm:mb-5 items-center justify-center rounded-full bg-purple-200 text-white font-bold text-body sm:text-h2">
              {step.id}
            </div>
            <p className="text-smallest sm:text-small lg:text-body font-bold mb-[.5rem] transition-colors duration-300">
              {step.title}
            </p>
            <p className="text-smallest sm:text-small lg:text-body font-normal">
              {step.description}
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

// --- Main Component ---
export default function Timeline({ data }: TimelineProps) {
  const title = data?.title ?? "How it works";
  const subtitile = data?.subtitle ?? "Consistent, Seamless & On-brand";
  const quote =
    data?.quote ?? "The way editing should have been done from the start.";
  const subquote =
    data?.subquote ??
    "By understanding your brand’s tone and visual identity, we build a streamlined editing workflow that keeps every video consistent - from the first cut to the final export.";

  const activeSteps = data?.steps || [];

  if (activeSteps.length === 0) return null;

  return (
    <section className="" id="timeline">
      <div className="wrapper">
        <Reveal className="w-full mb-8">
          <div className="mb-8">
            <h2 className="text-center font-bold leading-[135%]">{title}</h2>
            <p className="text-body sm:text-h2 lg:text-h1 font-bold text-center">
              {subtitile}
            </p>
          </div>
          <Link
            href="https://calendly.com/theophisediting/30min"
            target="_blank"
            className="button--primary"
          >
            Work with us
          </Link>
        </Reveal>

        <div className="relative">
          {/* Note: I removed the global line and space-y here */}
          <div className="relative flex flex-col">
            {activeSteps.map((step, index) => (
              <TimelineStep key={step.id || index} step={step} index={index} />
            ))}
          </div>
        </div>

        <div className="mt-32 text-center mx-auto">
          <Reveal>
            <h2
              className="font-normal "
              dangerouslySetInnerHTML={{ __html: quote }}
            />
            <p className="max-w-[87rem] m-auto text-smallest sm:text-smaller lg:text-small">
              {subquote}
            </p>
            <p className="text-purple-200"></p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
