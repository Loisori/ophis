// "use client";

// import { useState } from "react";
// import { Reveal } from "@/components/animations/Reveal";
// import { Plus, Minus } from "lucide-react";

// // 1. FAQ Data
// const faqData = [
//   {
//     question: "Who is this service designed for?",
//     answer: "This service is perfect for content creators, businesses, and agencies looking to scale their video production without hiring a full in-house team."
//   },
//   {
//     question: "What types of videos do you edit?",
//     answer: "We edit everything from TikToks, Reels, and YouTube Shorts to long-form YouTube videos, podcasts, and corporate interviews."
//   },
//   {
//     question: "Who will be editing my videos?",
//     answer: "Your videos will be edited by a dedicated professional editor assigned to your account, ensuring a consistent style and quality."
//   },
//   {
//     question: "What if I'm not happy with my video?",
//     answer: "No problem! We offer unlimited revisions. Just leave your feedback on the timeline, and we'll make the changes until you're 100% satisfied."
//   },
//   {
//     question: "Can I upgrade, downgrade, or pause my subscription?",
//     answer: "Yes, our plans are flexible. You can change your plan or pause your subscription at any time directly from your dashboard."
//   },
//   {
//     question: "What happens if I need more videos than my plan includes?",
//     answer: "You can easily purchase add-on credits for extra videos or upgrade to a higher tier plan that suits your volume needs."
//   }
// ];

// export default function Faqs() {
//   // State to track which FAQ is currently open (null = all closed)
//   const [openIndex, setOpenIndex] = useState<number | null>(null);

//   const toggleFaq = (index: number) => {
//     setOpenIndex(openIndex === index ? null : index);
//   };

//   return (
//     <section className="py-16 px-4 max-w-4xl mx-auto">
//       {/* Header */}
//       <div className="text-center mb-12">
//         <h2 className="text-lg font-bold uppercase tracking-wide text-gray-500 mb-2">
//           FAQ's
//         </h2>
//         <h3 className="text-4xl font-extrabold text-black tracking-tight">
//           Frequently asked questions
//         </h3>
//       </div>

//       {/* FAQ List */}
//       <div className="space-y-4">
//         {faqData.map((item, index) => (
//           <div 
//             key={index}
//             className="rounded-lg overflow-hidden transition-all duration-200"
//           >
//             {/* Question Header */}
//             <button
//               onClick={() => toggleFaq(index)}
//               className={`w-full flex items-center gap-4 px-6 py-4 text-left transition-colors ${
//                 openIndex === index ? "bg-gray-200" : "bg-gray-200 hover:bg-gray-300"
//               }`}
//             >
//               {/* Icon Circle */}
//               <div className="shrink-0 w-8 h-8 bg-[#2D1B4E] rounded-full flex items-center justify-center text-white">
//                 {openIndex === index ? (
//                   <Minus className="w-4 h-4" />
//                 ) : (
//                   <Plus className="w-4 h-4" />
//                 )}
//               </div>
              
//               {/* Question Text */}
//               <span className="text-lg font-medium text-gray-900">
//                 {item.question}
//               </span>
//             </button>

//             {/* Answer Content (Animated) */}
//             <div 
//               className={`overflow-hidden transition-all duration-300 ease-in-out ${
//                 openIndex === index ? "max-h-48 opacity-100" : "max-h-0 opacity-0"
//               }`}
//             >
//               <div className="p-6 bg-gray-50 text-gray-700 leading-relaxed border-t border-gray-200">
//                 {item.answer}
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// }