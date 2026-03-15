// import { prisma } from "@/lib/prisma";
// import DashboardClient from "./DashboardClient";

// export const dynamic = "force-dynamic";

// export default async function AdminHome() {
//   // 1. Setup cấu trúc chuẩn (Position 1 -> 13)
//   const page = await prisma.page.upsert({
//     where: { slug: "/" },
//     update: {},
//     create: {
//       slug: "/",
//       title: "Home",
//       sections: {
//         create: [
//           {
//             type: "hero",
//             position: 1,
//             content: {
//               create: {
//                 data: {
//                   cards: [
//                     { title: "10X Views ", subtitle: "Faster lead times" },
//                     {
//                       title: "Cancel anytime",
//                       subtitle: "No commitment, no stress",
//                     },
//                     { title: "4-10 days", subtitle: "Video delivery" },
//                   ],
//                   title: "The editing team that scales with your ambition",
//                   subtitle:
//                     "Publish faster, maintain exceptional quality, and turn your content into revenue with expert on-demand editing.With Ophis, you get precision and speed without bottlenecks - all the benefits of a full editorial team, without the overhead.",
//                 },
//               },
//             },
//           },
//           {
//             type: "autoCarousel",
//             position: 2,
//             content: {
//               create: {
//                 items: [
//                   {
//                     logo: "https://res.cloudinary.com/dhxrsiqip/image/upload/v1764155234/snooppi_g5k2hl.png",
//                     name: "Snooppi",
//                     category: "461K subscribers",
//                   },
//                   {
//                     logo: "https://res.cloudinary.com/dhxrsiqip/image/upload/v1764155234/misthy_k3jh3i.png",
//                     name: "Misthy",
//                     category: "8M subscribers",
//                   },
//                   {
//                     logo: "https://res.cloudinary.com/dhxrsiqip/image/upload/v1764155234/serandy_h94ifa.png",
//                     name: "Ser Andy",
//                     category: "210K subscribers",
//                   },
//                   {
//                     logo: "https://res.cloudinary.com/dhxrsiqip/image/upload/v1764155233/jasoncabin_otohol.png",
//                     name: "Jason Cabin",
//                     category: "1.08K subscribers",
//                   },
//                   {
//                     logo: "https://res.cloudinary.com/dbzx48lom/image/upload/v1766559708/Australian_Migration_Lawyer_x5neow.jpg",
//                     name: "Australian Migration Lawyers",
//                     category: "3.24K subscribers",
//                   },
//                   {
//                     logo: "https://res.cloudinary.com/dbzx48lom/image/upload/v1766559708/The_Sky_Digest_cvc99j.jpg",
//                     name: "The Sky Digest",
//                     category: "5.18K subscribers",
//                   },
//                   {
//                     logo: "https://res.cloudinary.com/dbzx48lom/image/upload/v1766559707/Empire_Flippers_rgnscs.jpg",
//                     name: "Empire Fippers",
//                     category: "6.68K subscribers",
//                   },
//                   {
//                     logo: "https://res.cloudinary.com/dbzx48lom/image/upload/v1766559707/Pro_Writing_Aid_sapbfb.jpg",
//                     name: "ProWritingAid",
//                     category: "15.9K subscribers",
//                   },
//                   {
//                     logo: "https://res.cloudinary.com/dbzx48lom/image/upload/v1766560045/Mike_Dee_k2bycm.jpg",
//                     name: "Mike Dee",
//                     category: "1.14M subscribers",
//                   },
//                   {
//                     logo: "https://res.cloudinary.com/dbzx48lom/image/upload/v1766560171/Triathlon_Mike_-_avatar_smk8wv.jpg",
//                     name: "BikeLabHQ",
//                     category: "9.19K subscribers",
//                   },
//                 ],
//                 title: "Trusted by Industry-leading Founders & Creators",
//               },
//             },
//           },
//           {
//             type: "heroVideo",
//             position: 3,
//             content: { create: { data: { videoUrl: "21e8o6knns" } } },
//           },
//           {
//             type: "timeline",
//             position: 4,
//             content: {
//               create: {
//                 quote:
//                   'The way editing should <span class="text-purple-200 font-bold"> have been done from the start.</span>',
//                 steps: [
//                   {
//                     id: 1,
//                     icon: "https://res.cloudinary.com/dhxrsiqip/image/upload/v1764155929/Group_67_eoevr5.png",
//                     title: "Your raw footage",
//                     icondark:
//                       "https://res.cloudinary.com/dhxrsiqip/image/upload/v1764155930/Group_128_svaimc.png",
//                     description:
//                       "Start by filling out our quick form so we can understand your needs and how we can best support your content goals.",
//                   },
//                   {
//                     id: 2,
//                     icon: "https://res.cloudinary.com/dhxrsiqip/image/upload/v1764155929/Group_124_cv2zyq.png",
//                     title: "Our creative editing team",
//                     icondark:
//                       "https://res.cloudinary.com/dhxrsiqip/image/upload/v1764155949/Group_130_a8fskc.png",
//                     description:
//                       "We craft a unique editing style that reflects your brand’s identity and keeps it consistent across every video.",
//                   },
//                   {
//                     id: 3,
//                     icon: "https://res.cloudinary.com/dhxrsiqip/image/upload/v1764155929/Group_125_vbut1z.png",
//                     title: "Refinement & feedback",
//                     icondark:
//                       "https://res.cloudinary.com/dhxrsiqip/image/upload/v1764155929/Group_127_l2kaoe.png",
//                     description:
//                       "Track tasks and progress in Notion.\nShare feedback and review edits through Frame.io for fast, streamlined revisions.",
//                   },
//                   {
//                     id: 4,
//                     icon: "https://res.cloudinary.com/dhxrsiqip/image/upload/v1764155929/Group_126_b2egzu.png",
//                     title: "Delivery",
//                     icondark:
//                       "https://res.cloudinary.com/dhxrsiqip/image/upload/v1764155930/Group_129_bjwbls.png",
//                     description:
//                       "We deliver your final videos in all required formats or directly to your internal library.",
//                   },
//                 ],
//                 title: "How it works",
//                 subquote:
//                   "By understanding your brand’s tone and visual identity, we build a streamlined editing workflow that keeps every video consistent - from the first cut to the final export.",
//                 subtitle: "Consistent, Seamless & On-brand",
//               },
//             },
//           },
//           {
//             type: "projects",
//             position: 5,
//             content: {
//               create: {
//                 title: "Projects",
//                 subtitle: "Explore our Video Editing Portfolio",
//                 categories: [
//                   {
//                     name: "Talking Head",
//                     videos: [
//                       "YY-GORHc_7E",
//                       "vZQ8Uz4zZgI",
//                       "ZYUoak42Zps",
//                       "cESnJkaqFyA",
//                       "26zY3VwPnng",
//                       "pr41TlQGdSw",
//                       "OTy_c2-edP0",
//                       "r7acx4pcfG4",
//                       "OnsYrZwMslg",
//                       "Kxa9mYGpT1k",
//                     ],
//                   },
//                   {
//                     name: "Documentary",
//                     videos: [
//                       "3r6gqZ0aNoM",
//                       "uMpBIF6tvR8",
//                       "lg7Lz7PZe9o",
//                       "-NlnTRYt2-U",
//                       "DzlBWSitEB0",
//                       "QkstywX0Dfo",
//                     ],
//                   },
//                   {
//                     name: "Podcast",
//                     videos: [
//                       "VnJRsu9BTOk",
//                       "yB6EvcFqNz8",
//                       "KZ3S_20c5eA",
//                       "SuXKcuYzjsU",
//                     ],
//                   },
//                 ],
//               },
//             },
//           },
//           {
//             type: "caseStudy",
//             position: 6,
//             content: { create: { data: { title: "", projects: [] } } },
//           },
//           {
//             type: "testimonials",
//             position: 7,
//             content: {
//               create: {
//                 items: [
//                   {
//                     name: "Lina P., Creative Producer at Nova Studio",
//                     content:
//                       "They weren’t just editors - they were creative partners. They helped us rework the story flow and gave suggestions that made the final video so much stronger.",
//                   },
//                   {
//                     name: "Sarah M., Brand Strategist",
//                     content:
//                       "I sent them a bunch of talking-head footage, and the final edit looked like a Netflix-level trailer. The pacing, color, and emotion were perfect. It felt like they really understood the message I was trying to share.",
//                   },
//                   {
//                     name: "Mike Dee, CEO at Playstack",
//                     content:
//                       "“Video editors on YouTube are easy to find. GOOD video editors that know how to edit to optimise for audience retention are definitely NOT easy to find. On my new YouTube channel (started just 8 months ago), I'm averaging 15,000 views per video, largely thanks to Ophis's editing.”",
//                   },
//                   {
//                     name: "James H., Marketing Director at Playstack",
//                     content:
//                       "We’ve worked with a lot of editors, but Ophis’s team stands out. They deliver on time every time, even when we throw in last-minute changes. The storytelling and polish are next-level.",
//                   },
//                   {
//                     name: "Daniel “ReaperSix”, Gaming Creator",
//                     content:
//                       "As a YouTuber, I needed someone who could keep my style but elevate the pacing and visuals. They nailed it from the first draft - super clean transitions and great sound design.",
//                   },
//                   {
//                     name: "Lina P., Creative Producer at Nova Studio",
//                     content:
//                       "Their editing made our campaign look like something produced by a top-tier agency. The team paid attention to every frame - color, motion, typography - all flawless.",
//                   },
//                   {
//                     name: "Chloe R., Social Media Manager",
//                     content:
//                       "We send raw footage, and within days we get something that feels complete, polished, and on-brand. Their workflow is smooth and their taste is excellent.",
//                   },
//                 ],
//                 title: "Testimonials",
//                 subtitle: "What other brands say about working with Ophis",
//               },
//             },
//           },
//           {
//             type: "services",
//             position: 8,
//             content: {
//               create: {
//                 title: "",
//                 services: [
//                   {
//                     icon: "https://res.cloudinary.com/dhxrsiqip/image/upload/v1764168988/Vector_qdlw3d.png",
//                     title: "Convert with Video",
//                     description:
//                       "Strategic editing for Ads & VSLs that hook viewers and turn clicks into customers",
//                   },
//                   {
//                     icon: "https://res.cloudinary.com/dhxrsiqip/image/upload/v1764168988/up_fbcj1b.png",
//                     title: "Grow your Channel",
//                     description:
//                       "High-impact YouTube editing that drives longer watch time and faster channel growth",
//                   },
//                   {
//                     icon: "https://res.cloudinary.com/dhxrsiqip/image/upload/v1764168987/phone_bonv6y.png",
//                     title: "Multi-Platform ready",
//                     description:
//                       "We craft attention-grabbing TikToks, Reels & Shorts built for reach and engagement",
//                   },
//                 ],
//                 subtitle: "Our Services",
//               },
//             },
//           },
//           {
//             type: "reasons",
//             position: 9,
//             content: {
//               create: {
//                 headline:
//                   'Why Ophis is the <span class="text-body lg:text-h1">right choice?</span>',
//                 description:
//                   "We bring you all the advantages of having a full in-house editing team - without the overhead or hassle.\nFrom clear communication to on -brand consistency, we focus on transparency, collaboration, and trust in every step of the process.",
//                 ophisFeatures: [
//                   "Fair, transparent pricing",
//                   "Dedicated creative team",
//                   "Expert in-house editors",
//                   "Modern editing approach",
//                   "Industry-informed decisions",
//                   "Real-time tracking",
//                   "Flexible contracts",
//                 ],
//                 othersFeatures: [
//                   "Hourly or per-project pricing",
//                   "No dedicated editing team",
//                   "Outsourced to average talent",
//                   "Outdated creative methods",
//                   "Minimal industry insight",
//                   "No real-time progress tracking",
//                   "Locked-in, inflexible contracts",
//                 ],
//               },
//             },
//           },
//           {
//             type: "pricing",
//             position: 10,
//             content: {
//               create: {
//                 plans: [
//                   {
//                     cta: "Book a call",
//                     name: "BASIC",
//                     price: "",
//                     popular: false,
//                     features: [
//                       "2 long-form videos/month",
//                       "Unlimited revisions",
//                       "3-5 day turnaround",
//                       "Pause or cancel anytime",
//                     ],
//                     description: "Perfect for getting started",
//                   },
//                   {
//                     cta: "Book a call",
//                     name: "PRO",
//                     price: "",
//                     popular: true,
//                     features: [
//                       "4 long-form videos",
//                       "10 short-form videos",
//                       "Content expert feedback",
//                       "Slack group access",
//                       "Unlimited revisions",
//                       "3-5 day turnaround",
//                       "Pause or cancel anytime",
//                       "Billed monthly",
//                     ],
//                     description: "Our most popular package",
//                   },
//                   {
//                     cta: "Book a call",
//                     name: "PREMIUM",
//                     price: "",
//                     popular: false,
//                     features: [
//                       "Tailored editing volume & workflows",
//                       "Dedicated Editor & Strategy Lead",
//                       "Content planning consultation",
//                       "Multi-format expertise",
//                       "Dedicated Designer",
//                       "Brand voice development",
//                     ],
//                     description: "For established creators",
//                   },
//                 ],
//                 title: "",
//                 subtitle: "Pricing",
//               },
//             },
//           },
//           {
//             type: "faqs",
//             position: 11,
//             content: {
//               create: {
//                 items: [
//                   {
//                     answer:
//                       "Ophis is built for founders, entrepreneurs, content creators, and marketing teams who need consistent, high-quality video editing without the overhead of hiring in-house or managing unreliable freelancers. Whether you're scaling YouTube, building a personal brand, or running paid ad campaigns, we handle the production so you can focus on growth.This service is perfect for content creators...",
//                     question: "Who is this service designed for?",
//                   },
//                   {
//                     answer:
//                       "We specialize in:\nYouTube content (long-form, vlogs, educational, interviews)\nShort-form content (Reels, TikToks, YouTube Shorts)\nPaid ads (Facebook, Instagram, YouTube pre-roll)\nPodcasts (video podcasts, highlight clips, audiograms)\nCourse content (tutorials, lectures, modules)\nBrand videos (explainers, testimonials, product demos)\nSocial media content (LinkedIn, Twitter/X video)\nIf it needs to be edited, we handle it.",
//                     question: "What types of videos do you edit?",
//                   },
//                   {
//                     answer:
//                       "You'll have a dedicated Account Manager assigned as your main point of contact to ensure smooth communication and brand consistency. The video editing itself is performed by our team of professional editors with 4+ years of experience across diverse video styles.\nThe specific editors working on your projects depend on your chosen subscription pack, but the process is overseen by your Account Manager to ensure high-quality results aligned with your needs.",
//                     question: "Who will be editing my videos?",
//                   },
//                   {
//                     answer:
//                       "This doesn't happen very often, but if it does - you get unlimited revisions (on Pro and Premium plans). We'll keep tweaking things until you absolutely love your videos. Your satisfaction is non-negotiable.",
//                     question: "What if I'm not happy with my video?",
//                   },
//                   {
//                     answer:
//                       "Upgrade/Downgrade: Absolutely. You can easily adjust your subscription plan to better match your content needs. Contact us, and we'll help adjust your plan, typically effective from the next billing cycle.\nPause: Need a break? Pause your subscription and resume when you're ready.\nCancel: You can cancel your subscription at any time. Cancellation is effective immediately. We offer a pro-rata refund for the unused portion of your current monthly billing cycle, no questions asked. For example, if you cancel after one week, you'll receive a 75% refund for the remaining three weeks.",
//                     question:
//                       "Can I upgrade, downgrade, or pause my subscription?",
//                   },
//                   {
//                     answer:
//                       "Our plans are optimized for a specific monthly volume. If you occasionally need an extra edit, we may be able to accommodate this as an add-on service (calculated as added value). However, if you consistently need more output, upgrading your plan to the next level is recommended for better value and workflow.",
//                     question:
//                       "What happens if I need more videos than my plan includes?",
//                   },
//                 ],
//                 headline: "Frequently asked questions",
//                 subheadline: "FAQ's",
//               },
//             },
//           },
//           {
//             type: "team",
//             position: 12,
//             content: { create: { data: { teamMembers: [] } } },
//           },
//           {
//             type: "footer",
//             position: 13,
//             content: {
//               create: {
//                 data: {
//                   contact: {
//                     email: "nam@gmail.com",
//                     phone: "09000000011",
//                     address: "HCM",
//                     studyLocation: "https://calendly.com/theophisediting/30min",
//                   },
//                   socials: [
//                     {
//                       href: "https://www.instagram.com/ophis.editing/",
//                       label: "instargram",
//                       iconSvg:
//                         '<svg class="opacity-80 group-hover:opacity-100 " width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0_202_4300)">  <path d="M19.0625 16C19.0625 17.6914 17.6914 19.0625 16 19.0625C14.3086 19.0625 12.9375 17.6914 12.9375 16C12.9375 14.3086 14.3086 12.9375 16 12.9375C17.6914 12.9375 19.0625 14.3086 19.0625 16Z" fill="white"></path>  <path d="M23.1621 10.5813C23.0149 10.1824 22.78 9.82129 22.4749 9.5249C22.1785 9.21973 21.8176 8.98486 21.4185 8.83765C21.0947 8.71191 20.6084 8.56226 19.7126 8.52148C18.7437 8.47729 18.4531 8.46777 16 8.46777C13.5466 8.46777 13.2561 8.47705 12.2874 8.52124C11.3916 8.56226 10.905 8.71191 10.5815 8.83765C10.1824 8.98486 9.82129 9.21973 9.52515 9.5249C9.21997 9.82129 8.98511 10.1821 8.83765 10.5813C8.71191 10.905 8.56226 11.3916 8.52148 12.2874C8.47729 13.2561 8.46777 13.5466 8.46777 16C8.46777 18.4531 8.47729 18.7437 8.52148 19.7126C8.56226 20.6084 8.71191 21.0947 8.83765 21.4185C8.98511 21.8176 9.21973 22.1785 9.5249 22.4749C9.82129 22.78 10.1821 23.0149 10.5813 23.1621C10.905 23.2881 11.3916 23.4377 12.2874 23.4785C13.2561 23.5227 13.5464 23.532 15.9998 23.532C18.4534 23.532 18.7439 23.5227 19.7124 23.4785C20.6082 23.4377 21.0947 23.2881 21.4185 23.1621C22.2197 22.853 22.853 22.2197 23.1621 21.4185C23.2878 21.0947 23.4375 20.6084 23.4785 19.7126C23.5227 18.7437 23.532 18.4531 23.532 16C23.532 13.5466 23.5227 13.2561 23.4785 12.2874C23.4377 11.3916 23.2881 10.905 23.1621 10.5813ZM16 20.7175C13.3943 20.7175 11.282 18.6055 11.282 15.9998C11.282 13.394 13.3943 11.282 16 11.282C18.6055 11.282 20.7178 13.394 20.7178 15.9998C20.7178 18.6055 18.6055 20.7175 16 20.7175ZM20.9043 12.198C20.2954 12.198 19.8018 11.7043 19.8018 11.0955C19.8018 10.4866 20.2954 9.99292 20.9043 9.99292C21.5132 9.99292 22.0068 10.4866 22.0068 11.0955C22.0066 11.7043 21.5132 12.198 20.9043 12.198Z" fill="white"></path>  <path d="M16 0C7.16479 0 0 7.16479 0 16C0 24.8352 7.16479 32 16 32C24.8352 32 32 24.8352 32 16C32 7.16479 24.8352 0 16 0ZM25.1321 19.7878C25.0876 20.7659 24.9321 21.4336 24.7051 22.0181C24.2278 23.2522 23.2522 24.2278 22.0181 24.7051C21.4338 24.9321 20.7659 25.0874 19.7881 25.1321C18.8083 25.1768 18.4954 25.1875 16.0002 25.1875C13.5049 25.1875 13.1921 25.1768 12.2122 25.1321C11.2344 25.0874 10.5664 24.9321 9.98218 24.7051C9.3689 24.4744 8.81372 24.1128 8.35474 23.6453C7.88745 23.1865 7.52588 22.6311 7.29517 22.0181C7.06812 21.4338 6.9126 20.7659 6.86816 19.7881C6.823 18.8081 6.8125 18.4951 6.8125 16C6.8125 13.5049 6.823 13.1919 6.86792 12.2122C6.91235 11.2341 7.06763 10.5664 7.29468 9.98193C7.52539 9.3689 7.88721 8.81348 8.35474 8.35474C8.81348 7.88721 9.3689 7.52563 9.98193 7.29492C10.5664 7.06787 11.2341 6.9126 12.2122 6.86792C13.1919 6.82324 13.5049 6.8125 16 6.8125C18.4951 6.8125 18.8081 6.82324 19.7878 6.86816C20.7659 6.9126 21.4336 7.06787 22.0181 7.29468C22.6311 7.52539 23.1865 7.88721 23.6455 8.35474C24.1128 8.81372 24.4746 9.3689 24.7051 9.98193C24.9324 10.5664 25.0876 11.2341 25.1323 12.2122C25.177 13.1919 25.1875 13.5049 25.1875 16C25.1875 18.4951 25.177 18.8081 25.1321 19.7878Z" fill="white"></path></g><defs>  <clipPath id="clip0_202_4300">    <rect width="32" height="32" fill="white"></rect>  </clipPath></defs>\n                    </svg>',
//                     },
//                     {
//                       href: "https://www.instagram.com/ophis.editing/",
//                       label: "facebook",
//                       iconSvg:
//                         '<svg class="opacity-80 group-hover:opacity-100 " width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0_202_4296)">  <path d="M16 0C7.17764 0 0 7.17764 0 16C0 24.8217 7.17764 32 16 32C24.8217 32 32 24.8217 32 16C32 7.17764 24.823 0 16 0ZM19.9791 16.5633H17.376V25.8413H13.5187C13.5187 25.8413 13.5187 20.7718 13.5187 16.5633H11.6852V13.2841H13.5187V11.1631C13.5187 9.64408 14.2406 7.27044 17.4114 7.27044L20.2697 7.2814V10.4645C20.2697 10.4645 18.5328 10.4645 18.1951 10.4645C17.8574 10.4645 17.3773 10.6334 17.3773 11.3578V13.2848H20.3161L19.9791 16.5633Z" fill="white"></path></g><defs>  <clipPath id="clip0_202_4296">    <rect width="32" height="32" fill="white"></rect>  </clipPath></defs>\n                    </svg>',
//                     },
//                   ],
//                   description:
//                     "Discover the video editing portfolio of Nam Nguyen – skilled in Adobe Premiere, After Effects, and DaVinci Resolve. Expert in cinematic editing, music videos, ads, and social media content.",
//                 },
//               },
//             },
//           },
//         ],
//       },
//     },
//     include: {
//       sections: {
//         include: { content: true },
//         orderBy: { position: "asc" },
//       },
//     },
//   });

//   // 2. Parse Sections (Tìm section trong DB)
//   let heroSection = page.sections.find((s: any) => s.type === "hero");
//   let autoCarouselSection = page.sections.find(
//     (s: any) => s.type === "autoCarousel",
//   );
//   let heroVideoSection = page.sections.find((s: any) => s.type === "heroVideo");
//   let timelineSection = page.sections.find((s: any) => s.type === "timeline");
//   let projectsSection = page.sections.find((s: any) => s.type === "projects");
//   let caseStudySection = page.sections.find((s: any) => s.type === "caseStudy");
//   let testimonialsSection = page.sections.find(
//     (s: any) => s.type === "testimonials",
//   );
//   let servicesSection = page.sections.find((s: any) => s.type === "services");
//   let reasonsSection = page.sections.find((s: any) => s.type === "reasons");
//   let pricingSection = page.sections.find((s: any) => s.type === "pricing");
//   let faqsSection = page.sections.find((s: any) => s.type === "faqs");
//   let teamSection = page.sections.find((s: any) => s.type === "team");
//   let footerSection = page.sections.find((s: any) => s.type === "footer");

//   // 3. Auto-Fix (Self-healing): Tạo nếu thiếu, với Position CHUẨN
//   if (!heroVideoSection) {
//     heroVideoSection = await prisma.section.create({
//       data: {
//         pageId: page.id,
//         type: "heroVideo",
//         position: 3,
//         content: { create: { data: { videoUrl: "" } } },
//       },
//       include: { content: true },
//     });
//   }
//   if (!timelineSection) {
//     timelineSection = await prisma.section.create({
//       data: {
//         pageId: page.id,
//         type: "timeline",
//         position: 4,
//         content: { create: { data: { steps: [] } } },
//       },
//       include: { content: true },
//     });
//   }
//   if (!projectsSection) {
//     projectsSection = await prisma.section.create({
//       data: {
//         pageId: page.id,
//         type: "projects",
//         position: 5,
//         content: { create: { data: { videoIds: [] } } },
//       },
//       include: { content: true },
//     });
//   }
//   if (!caseStudySection) {
//     caseStudySection = await prisma.section.create({
//       data: {
//         pageId: page.id,
//         type: "caseStudy",
//         position: 6,
//         content: { create: { data: { title: "", projects: [] } } },
//       },
//       include: { content: true },
//     });
//   }
//   if (!testimonialsSection) {
//     testimonialsSection = await prisma.section.create({
//       data: {
//         pageId: page.id,
//         type: "testimonials",
//         position: 7,
//         content: { create: { data: { testimonials: [] } } },
//       },
//       include: { content: true },
//     });
//   }
//   if (!servicesSection) {
//     servicesSection = await prisma.section.create({
//       data: {
//         pageId: page.id,
//         type: "services",
//         position: 8,
//         content: { create: { data: { services: [] } } },
//       },
//       include: { content: true },
//     });
//   }
//   if (!reasonsSection) {
//     reasonsSection = await prisma.section.create({
//       data: {
//         pageId: page.id,
//         type: "reasons",
//         position: 9,
//         content: { create: { data: { reasons: [] } } },
//       },
//       include: { content: true },
//     });
//   }
//   if (!pricingSection) {
//     pricingSection = await prisma.section.create({
//       data: {
//         pageId: page.id,
//         type: "pricing",
//         position: 10,
//         content: { create: { data: { services: [] } } },
//       },
//       include: { content: true },
//     });
//   }
//   if (!faqsSection) {
//     faqsSection = await prisma.section.create({
//       data: {
//         pageId: page.id,
//         type: "faqs",
//         position: 11,
//         content: { create: { data: { faqs: [] } } },
//       },
//       include: { content: true },
//     });
//   }
//   if (!teamSection) {
//     teamSection = await prisma.section.create({
//       data: {
//         pageId: page.id,
//         type: "team",
//         position: 12,
//         content: { create: { data: { teamMembers: [] } } },
//       },
//       include: { content: true },
//     });
//   }
//   if (!footerSection) {
//     footerSection = await prisma.section.create({
//       data: {
//         pageId: page.id,
//         type: "footer",
//         position: 13,
//         content: {
//           create: {
//             data: {
//               description: "",
//               contact: { address: "", email: "" },
//               socials: [],
//             },
//           },
//         },
//       },
//       include: { content: true },
//     });
//   }

//   return (
//     <DashboardClient
//       heroSection={heroSection}
//       autoCarouselSection={autoCarouselSection}
//       heroVideoSection={heroVideoSection}
//       timelineSection={timelineSection}
//       projectsSection={projectsSection}
//       caseStudySection={caseStudySection}
//       testimonialsSection={testimonialsSection}
//       servicesSection={servicesSection}
//       reasonsSection={reasonsSection}
//       pricingSection={pricingSection}
//       faqsSection={faqsSection}
//       teamSection={teamSection}
//       footerSection={footerSection}
//     />
//   );
// }
import { prisma } from "@/lib/prisma";
import DashboardClient from "./DashboardClient";

export const dynamic = "force-dynamic";

export default async function AdminHome() {
  // 1. Setup cấu trúc chuẩn (Position 1 -> 13)
  const page = await prisma.page.upsert({
    where: { slug: "/" },
    update: {},
    create: {
      slug: "/",
      title: "Home",
      sections: {
        create: [
          {
            type: "hero",
            position: 1,
            content: {
              create: {
                data: {
                  cards: [
                    { title: "10X Views ", subtitle: "Faster lead times" },
                    {
                      title: "Cancel anytime",
                      subtitle: "No commitment, no stress",
                    },
                    { title: "4-10 days", subtitle: "Video delivery" },
                  ],
                  title: "The editing team that scales with your ambition",
                  subtitle:
                    "Publish faster, maintain exceptional quality, and turn your content into revenue with expert on-demand editing.With Ophis, you get precision and speed without bottlenecks - all the benefits of a full editorial team, without the overhead.",
                },
              },
            },
          },
          {
            type: "autoCarousel",
            position: 2,
            content: {
              create: {
                data: {
                  items: [
                    {
                      logo: "https://res.cloudinary.com/dhxrsiqip/image/upload/v1764155234/snooppi_g5k2hl.png",
                      name: "Snooppi",
                      category: "461K subscribers",
                    },
                    {
                      logo: "https://res.cloudinary.com/dhxrsiqip/image/upload/v1764155234/misthy_k3jh3i.png",
                      name: "Misthy",
                      category: "8M subscribers",
                    },
                    {
                      logo: "https://res.cloudinary.com/dhxrsiqip/image/upload/v1764155234/serandy_h94ifa.png",
                      name: "Ser Andy",
                      category: "210K subscribers",
                    },
                    {
                      logo: "https://res.cloudinary.com/dhxrsiqip/image/upload/v1764155233/jasoncabin_otohol.png",
                      name: "Jason Cabin",
                      category: "1.08K subscribers",
                    },
                    {
                      logo: "https://res.cloudinary.com/dbzx48lom/image/upload/v1766559708/Australian_Migration_Lawyer_x5neow.jpg",
                      name: "Australian Migration Lawyers",
                      category: "3.24K subscribers",
                    },
                    {
                      logo: "https://res.cloudinary.com/dbzx48lom/image/upload/v1766559708/The_Sky_Digest_cvc99j.jpg",
                      name: "The Sky Digest",
                      category: "5.18K subscribers",
                    },
                    {
                      logo: "https://res.cloudinary.com/dbzx48lom/image/upload/v1766559707/Empire_Flippers_rgnscs.jpg",
                      name: "Empire Fippers",
                      category: "6.68K subscribers",
                    },
                    {
                      logo: "https://res.cloudinary.com/dbzx48lom/image/upload/v1766559707/Pro_Writing_Aid_sapbfb.jpg",
                      name: "ProWritingAid",
                      category: "15.9K subscribers",
                    },
                    {
                      logo: "https://res.cloudinary.com/dbzx48lom/image/upload/v1766560045/Mike_Dee_k2bycm.jpg",
                      name: "Mike Dee",
                      category: "1.14M subscribers",
                    },
                    {
                      logo: "https://res.cloudinary.com/dbzx48lom/image/upload/v1766560171/Triathlon_Mike_-_avatar_smk8wv.jpg",
                      name: "BikeLabHQ",
                      category: "9.19K subscribers",
                    },
                  ],
                  title: "Trusted by Industry-leading Founders & Creators",
                },
              },
            },
          },
          {
            type: "heroVideo",
            position: 3,
            content: { create: { data: { videoUrl: "21e8o6knns" } } },
          },
          {
            type: "timeline",
            position: 4,
            content: {
              create: {
                data: {
                  quote:
                    'The way editing should <span class="text-purple-200 font-bold"> have been done from the start.</span>',
                  steps: [
                    {
                      id: 1,
                      icon: "https://res.cloudinary.com/dhxrsiqip/image/upload/v1764155929/Group_67_eoevr5.png",
                      title: "Your raw footage",
                      icondark:
                        "https://res.cloudinary.com/dhxrsiqip/image/upload/v1764155930/Group_128_svaimc.png",
                      description:
                        "Start by filling out our quick form so we can understand your needs and how we can best support your content goals.",
                    },
                    {
                      id: 2,
                      icon: "https://res.cloudinary.com/dhxrsiqip/image/upload/v1764155929/Group_124_cv2zyq.png",
                      title: "Our creative editing team",
                      icondark:
                        "https://res.cloudinary.com/dhxrsiqip/image/upload/v1764155949/Group_130_a8fskc.png",
                      description:
                        "We craft a unique editing style that reflects your brand’s identity and keeps it consistent across every video.",
                    },
                    {
                      id: 3,
                      icon: "https://res.cloudinary.com/dhxrsiqip/image/upload/v1764155929/Group_125_vbut1z.png",
                      title: "Refinement & feedback",
                      icondark:
                        "https://res.cloudinary.com/dhxrsiqip/image/upload/v1764155929/Group_127_l2kaoe.png",
                      description:
                        "Track tasks and progress in Notion.\nShare feedback and review edits through Frame.io for fast, streamlined revisions.",
                    },
                    {
                      id: 4,
                      icon: "https://res.cloudinary.com/dhxrsiqip/image/upload/v1764155929/Group_126_b2egzu.png",
                      title: "Delivery",
                      icondark:
                        "https://res.cloudinary.com/dhxrsiqip/image/upload/v1764155930/Group_129_bjwbls.png",
                      description:
                        "We deliver your final videos in all required formats or directly to your internal library.",
                    },
                  ],
                  title: "How it works",
                  subquote:
                    "By understanding your brand’s tone and visual identity, we build a streamlined editing workflow that keeps every video consistent - from the first cut to the final export.",
                  subtitle: "Consistent, Seamless & On-brand",
                },
              },
            },
          },
          {
            type: "projects",
            position: 5,
            content: {
              create: {
                data: {
                  title: "Projects",
                  subtitle: "Explore our Video Editing Portfolio",
                  categories: [
                    {
                      name: "Talking Head",
                      videos: [
                        "YY-GORHc_7E",
                        "vZQ8Uz4zZgI",
                        "ZYUoak42Zps",
                        "cESnJkaqFyA",
                        "26zY3VwPnng",
                        "pr41TlQGdSw",
                        "OTy_c2-edP0",
                        "r7acx4pcfG4",
                        "OnsYrZwMslg",
                        "Kxa9mYGpT1k",
                      ],
                    },
                    {
                      name: "Documentary",
                      videos: [
                        "3r6gqZ0aNoM",
                        "uMpBIF6tvR8",
                        "lg7Lz7PZe9o",
                        "-NlnTRYt2-U",
                        "DzlBWSitEB0",
                        "QkstywX0Dfo",
                      ],
                    },
                    {
                      name: "Podcast",
                      videos: [
                        "VnJRsu9BTOk",
                        "yB6EvcFqNz8",
                        "KZ3S_20c5eA",
                        "SuXKcuYzjsU",
                      ],
                    },
                  ],
                },
              },
            },
          },
          {
            type: "caseStudy",
            position: 6,
            content: { create: { data: { title: "", projects: [] } } },
          },
          {
            type: "testimonials",
            position: 7,
            content: {
              create: {
                data: {
                  items: [
                    {
                      name: "Lina P., Creative Producer at Nova Studio",
                      content:
                        "They weren’t just editors - they were creative partners. They helped us rework the story flow and gave suggestions that made the final video so much stronger.",
                    },
                    {
                      name: "Sarah M., Brand Strategist",
                      content:
                        "I sent them a bunch of talking-head footage, and the final edit looked like a Netflix-level trailer. The pacing, color, and emotion were perfect. It felt like they really understood the message I was trying to share.",
                    },
                    {
                      name: "Mike Dee, CEO at Playstack",
                      content:
                        "“Video editors on YouTube are easy to find. GOOD video editors that know how to edit to optimise for audience retention are definitely NOT easy to find. On my new YouTube channel (started just 8 months ago), I'm averaging 15,000 views per video, largely thanks to Ophis's editing.”",
                    },
                    {
                      name: "James H., Marketing Director at Playstack",
                      content:
                        "We’ve worked with a lot of editors, but Ophis’s team stands out. They deliver on time every time, even when we throw in last-minute changes. The storytelling and polish are next-level.",
                    },
                    {
                      name: "Daniel “ReaperSix”, Gaming Creator",
                      content:
                        "As a YouTuber, I needed someone who could keep my style but elevate the pacing and visuals. They nailed it from the first draft - super clean transitions and great sound design.",
                    },
                    {
                      name: "Lina P., Creative Producer at Nova Studio",
                      content:
                        "Their editing made our campaign look like something produced by a top-tier agency. The team paid attention to every frame - color, motion, typography - all flawless.",
                    },
                    {
                      name: "Chloe R., Social Media Manager",
                      content:
                        "We send raw footage, and within days we get something that feels complete, polished, and on-brand. Their workflow is smooth and their taste is excellent.",
                    },
                  ],
                  title: "Testimonials",
                  subtitle: "What other brands say about working with Ophis",
                },
              },
            },
          },
          {
            type: "services",
            position: 8,
            content: {
              create: {
                data: {
                  title: "",
                  services: [
                    {
                      icon: "https://res.cloudinary.com/dhxrsiqip/image/upload/v1764168988/Vector_qdlw3d.png",
                      title: "Convert with Video",
                      description:
                        "Strategic editing for Ads & VSLs that hook viewers and turn clicks into customers",
                    },
                    {
                      icon: "https://res.cloudinary.com/dhxrsiqip/image/upload/v1764168988/up_fbcj1b.png",
                      title: "Grow your Channel",
                      description:
                        "High-impact YouTube editing that drives longer watch time and faster channel growth",
                    },
                    {
                      icon: "https://res.cloudinary.com/dhxrsiqip/image/upload/v1764168987/phone_bonv6y.png",
                      title: "Multi-Platform ready",
                      description:
                        "We craft attention-grabbing TikToks, Reels & Shorts built for reach and engagement",
                    },
                  ],
                  subtitle: "Our Services",
                },
              },
            },
          },
          {
            type: "reasons",
            position: 9,
            content: {
              create: {
                data: {
                  headline:
                    'Why Ophis is the <span class="text-body lg:text-h1">right choice?</span>',
                  description:
                    "We bring you all the advantages of having a full in-house editing team - without the overhead or hassle.\nFrom clear communication to on -brand consistency, we focus on transparency, collaboration, and trust in every step of the process.",
                  ophisFeatures: [
                    "Fair, transparent pricing",
                    "Dedicated creative team",
                    "Expert in-house editors",
                    "Modern editing approach",
                    "Industry-informed decisions",
                    "Real-time tracking",
                    "Flexible contracts",
                  ],
                  othersFeatures: [
                    "Hourly or per-project pricing",
                    "No dedicated editing team",
                    "Outsourced to average talent",
                    "Outdated creative methods",
                    "Minimal industry insight",
                    "No real-time progress tracking",
                    "Locked-in, inflexible contracts",
                  ],
                },
              },
            },
          },
          {
            type: "pricing",
            position: 10,
            content: {
              create: {
                data: {
                  plans: [
                    {
                      cta: "Book a call",
                      name: "BASIC",
                      price: "",
                      popular: false,
                      features: [
                        "2 long-form videos/month",
                        "Unlimited revisions",
                        "3-5 day turnaround",
                        "Pause or cancel anytime",
                      ],
                      description: "Perfect for getting started",
                    },
                    {
                      cta: "Book a call",
                      name: "PRO",
                      price: "",
                      popular: true,
                      features: [
                        "4 long-form videos",
                        "10 short-form videos",
                        "Content expert feedback",
                        "Slack group access",
                        "Unlimited revisions",
                        "3-5 day turnaround",
                        "Pause or cancel anytime",
                        "Billed monthly",
                      ],
                      description: "Our most popular package",
                    },
                    {
                      cta: "Book a call",
                      name: "PREMIUM",
                      price: "",
                      popular: false,
                      features: [
                        "Tailored editing volume & workflows",
                        "Dedicated Editor & Strategy Lead",
                        "Content planning consultation",
                        "Multi-format expertise",
                        "Dedicated Designer",
                        "Brand voice development",
                      ],
                      description: "For established creators",
                    },
                  ],
                  title: "",
                  subtitle: "Pricing",
                },
              },
            },
          },
          {
            type: "faqs",
            position: 11,
            content: {
              create: {
                data: {
                  items: [
                    {
                      answer:
                        "Ophis is built for founders, entrepreneurs, content creators, and marketing teams who need consistent, high-quality video editing without the overhead of hiring in-house or managing unreliable freelancers. Whether you're scaling YouTube, building a personal brand, or running paid ad campaigns, we handle the production so you can focus on growth.This service is perfect for content creators...",
                      question: "Who is this service designed for?",
                    },
                    {
                      answer:
                        "We specialize in:\nYouTube content (long-form, vlogs, educational, interviews)\nShort-form content (Reels, TikToks, YouTube Shorts)\nPaid ads (Facebook, Instagram, YouTube pre-roll)\nPodcasts (video podcasts, highlight clips, audiograms)\nCourse content (tutorials, lectures, modules)\nBrand videos (explainers, testimonials, product demos)\nSocial media content (LinkedIn, Twitter/X video)\nIf it needs to be edited, we handle it.",
                      question: "What types of videos do you edit?",
                    },
                    {
                      answer:
                        "You'll have a dedicated Account Manager assigned as your main point of contact to ensure smooth communication and brand consistency. The video editing itself is performed by our team of professional editors with 4+ years of experience across diverse video styles.\nThe specific editors working on your projects depend on your chosen subscription pack, but the process is overseen by your Account Manager to ensure high-quality results aligned with your needs.",
                      question: "Who will be editing my videos?",
                    },
                    {
                      answer:
                        "This doesn't happen very often, but if it does - you get unlimited revisions (on Pro and Premium plans). We'll keep tweaking things until you absolutely love your videos. Your satisfaction is non-negotiable.",
                      question: "What if I'm not happy with my video?",
                    },
                    {
                      answer:
                        "Upgrade/Downgrade: Absolutely. You can easily adjust your subscription plan to better match your content needs. Contact us, and we'll help adjust your plan, typically effective from the next billing cycle.\nPause: Need a break? Pause your subscription and resume when you're ready.\nCancel: You can cancel your subscription at any time. Cancellation is effective immediately. We offer a pro-rata refund for the unused portion of your current monthly billing cycle, no questions asked. For example, if you cancel after one week, you'll receive a 75% refund for the remaining three weeks.",
                      question:
                        "Can I upgrade, downgrade, or pause my subscription?",
                    },
                    {
                      answer:
                        "Our plans are optimized for a specific monthly volume. If you occasionally need an extra edit, we may be able to accommodate this as an add-on service (calculated as added value). However, if you consistently need more output, upgrading your plan to the next level is recommended for better value and workflow.",
                      question:
                        "What happens if I need more videos than my plan includes?",
                    },
                  ],
                  headline: "Frequently asked questions",
                  subheadline: "FAQ's",
                },
              },
            },
          },
          {
            type: "team",
            position: 12,
            content: { create: { data: { teamMembers: [] } } },
          },
          {
            type: "footer",
            position: 13,
            content: {
              create: {
                data: {
                  contact: {
                    email: "nam@gmail.com",
                    phone: "09000000011",
                    address: "HCM",
                    studyLocation: "https://calendly.com/theophisediting/30min",
                  },
                  socials: [
                    {
                      href: "https://www.instagram.com/ophis.editing/",
                      label: "instargram",
                      iconSvg:
                        '<svg class="opacity-80 group-hover:opacity-100 " width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0_202_4300)"><path d="M19.0625 16C19.0625 17.6914 17.6914 19.0625 16 19.0625C14.3086 19.0625 12.9375 17.6914 12.9375 16C12.9375 14.3086 14.3086 12.9375 16 12.9375C17.6914 12.9375 19.0625 14.3086 19.0625 16Z" fill="white"></path><path d="M23.1621 10.5813C23.0149 10.1824 22.78 9.82129 22.4749 9.5249C22.1785 9.21973 21.8176 8.98486 21.4185 8.83765C21.0947 8.71191 20.6084 8.56226 19.7126 8.52148C18.7437 8.47729 18.4531 8.46777 16 8.46777C13.5466 8.46777 13.5466 8.47705 12.2874 8.52124C11.3916 8.56226 10.905 8.71191 10.5815 8.83765C10.1824 8.98486 9.82129 9.21973 9.52515 9.5249C9.21997 9.82129 8.98511 10.1821 8.83765 10.5813C8.71191 10.905 8.56226 11.3916 8.52148 12.2874C8.47729 13.2561 8.46777 13.5466 8.46777 16C8.46777 18.4531 8.47729 18.7437 8.52148 19.7126C8.56226 20.6084 8.71191 21.0947 8.83765 21.4185C8.98511 21.8176 9.21973 22.1785 9.5249 22.4749C9.82129 22.78 10.1821 23.0149 10.5813 23.1621C10.905 23.2881 11.3916 23.4377 12.2874 23.4785C13.2561 23.5227 13.5464 23.532 15.9998 23.532C18.4534 23.532 18.7439 23.5227 19.7124 23.4785C20.6082 23.4377 21.0947 23.2881 21.4185 23.1621C22.2197 22.853 22.853 22.2197 23.1621 21.4185C23.2878 21.0947 23.4375 20.6084 23.4785 19.7126C23.5227 18.7437 23.532 18.4531 23.532 16C23.532 13.5466 23.5227 13.2561 23.4785 12.2874C23.4377 11.3916 23.2881 10.905 23.1621 10.5813ZM16 20.7175C13.3943 20.7175 11.282 18.6055 11.282 15.9998C11.282 13.394 13.3943 11.282 16 11.282C18.6055 11.282 20.7178 13.394 20.7178 15.9998C20.7178 18.6055 18.6055 20.7175 16 20.7175ZM20.9043 12.198C20.2954 12.198 19.8018 11.7043 19.8018 11.0955C19.8018 10.4866 20.2954 9.99292 20.9043 9.99292C21.5132 9.99292 22.0068 10.4866 22.0068 11.0955C22.0066 11.7043 21.5132 12.198 20.9043 12.198Z" fill="white"></path></g><defs><clipPath id="clip0_202_4300"><rect width="32" height="32" fill="white"></rect></clipPath></defs></svg>',
                    },
                    {
                      href: "https://www.instagram.com/ophis.editing/",
                      label: "facebook",
                      iconSvg:
                        '<svg class="opacity-80 group-hover:opacity-100 " width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0_202_4296)"><path d="M16 0C7.17764 0 0 7.17764 0 16C0 24.8217 7.17764 32 16 32C24.8217 32 32 24.8217 32 16C32 7.17764 24.823 0 16 0ZM19.9791 16.5633H17.376V25.8413H13.5187C13.5187 25.8413 13.5187 20.7718 13.5187 16.5633H11.6852V13.2841H13.5187V11.1631C13.5187 9.64408 14.2406 7.27044 17.4114 7.27044L20.2697 7.2814V10.4645C20.2697 10.4645 18.5328 10.4645 18.1951 10.4645C17.8574 10.4645 17.3773 10.6334 17.3773 11.3578V13.2848H20.3161L19.9791 16.5633Z" fill="white"></path></g><defs><clipPath id="clip0_202_4296"><rect width="32" height="32" fill="white"></rect></clipPath></defs></svg>',
                    },
                  ],
                  description:
                    "Discover the video editing portfolio of Nam Nguyen – skilled in Adobe Premiere, After Effects, and DaVinci Resolve. Expert in cinematic editing, music videos, ads, and social media content.",
                },
              },
            },
          },
        ],
      },
    },
    include: {
      sections: {
        include: { content: true },
        orderBy: { position: "asc" },
      },
    },
  });

  // 2. Parse Sections (Tìm section trong DB)
  let heroSection = page.sections.find((s: any) => s.type === "hero");
  let autoCarouselSection = page.sections.find(
    (s: any) => s.type === "autoCarousel",
  );
  let heroVideoSection = page.sections.find((s: any) => s.type === "heroVideo");
  let timelineSection = page.sections.find((s: any) => s.type === "timeline");
  let projectsSection = page.sections.find((s: any) => s.type === "projects");
  let caseStudySection = page.sections.find((s: any) => s.type === "caseStudy");
  let testimonialsSection = page.sections.find(
    (s: any) => s.type === "testimonials",
  );
  let servicesSection = page.sections.find((s: any) => s.type === "services");
  let reasonsSection = page.sections.find((s: any) => s.type === "reasons");
  let pricingSection = page.sections.find((s: any) => s.type === "pricing");
  let faqsSection = page.sections.find((s: any) => s.type === "faqs");
  let teamSection = page.sections.find((s: any) => s.type === "team");
  let footerSection = page.sections.find((s: any) => s.type === "footer");

  // 3. Auto-Fix (Self-healing): Tạo nếu thiếu, với Position CHUẨN
  if (!heroSection) {
    heroSection = await prisma.section.create({
      data: {
        pageId: page.id,
        type: "hero",
        position: 1,
        content: {
          create: {
            data: {
              cards: [],
              title: "",
              subtitle: "",
            },
          },
        },
      },
      include: { content: true },
    });
  }
  if (!autoCarouselSection) {
    autoCarouselSection = await prisma.section.create({
      data: {
        pageId: page.id,
        type: "autoCarousel",
        position: 2,
        content: {
          create: {
            data: {
              items: [],
              title: "",
            },
          },
        },
      },
      include: { content: true },
    });
  }
  if (!heroVideoSection) {
    heroVideoSection = await prisma.section.create({
      data: {
        pageId: page.id,
        type: "heroVideo",
        position: 3,
        content: { create: { data: { videoUrl: "" } } },
      },
      include: { content: true },
    });
  }
  if (!timelineSection) {
    timelineSection = await prisma.section.create({
      data: {
        pageId: page.id,
        type: "timeline",
        position: 4,
        content: { create: { data: { steps: [] } } },
      },
      include: { content: true },
    });
  }
  if (!projectsSection) {
    projectsSection = await prisma.section.create({
      data: {
        pageId: page.id,
        type: "projects",
        position: 5,
        content: { create: { data: { videoIds: [] } } },
      },
      include: { content: true },
    });
  }
  if (!caseStudySection) {
    caseStudySection = await prisma.section.create({
      data: {
        pageId: page.id,
        type: "caseStudy",
        position: 6,
        content: { create: { data: { title: "", projects: [] } } },
      },
      include: { content: true },
    });
  }
  if (!testimonialsSection) {
    testimonialsSection = await prisma.section.create({
      data: {
        pageId: page.id,
        type: "testimonials",
        position: 7,
        content: { create: { data: { testimonials: [] } } },
      },
      include: { content: true },
    });
  }
  if (!servicesSection) {
    servicesSection = await prisma.section.create({
      data: {
        pageId: page.id,
        type: "services",
        position: 8,
        content: { create: { data: { services: [] } } },
      },
      include: { content: true },
    });
  }
  if (!reasonsSection) {
    reasonsSection = await prisma.section.create({
      data: {
        pageId: page.id,
        type: "reasons",
        position: 9,
        content: { create: { data: { reasons: [] } } },
      },
      include: { content: true },
    });
  }
  if (!pricingSection) {
    pricingSection = await prisma.section.create({
      data: {
        pageId: page.id,
        type: "pricing",
        position: 10,
        content: { create: { data: { services: [] } } },
      },
      include: { content: true },
    });
  }
  if (!faqsSection) {
    faqsSection = await prisma.section.create({
      data: {
        pageId: page.id,
        type: "faqs",
        position: 11,
        content: { create: { data: { faqs: [] } } },
      },
      include: { content: true },
    });
  }
  if (!teamSection) {
    teamSection = await prisma.section.create({
      data: {
        pageId: page.id,
        type: "team",
        position: 12,
        content: { create: { data: { teamMembers: [] } } },
      },
      include: { content: true },
    });
  }
  if (!footerSection) {
    footerSection = await prisma.section.create({
      data: {
        pageId: page.id,
        type: "footer",
        position: 13,
        content: {
          create: {
            data: {
              description: "",
              contact: { address: "", email: "" },
              socials: [],
            },
          },
        },
      },
      include: { content: true },
    });
  }

  return (
    <DashboardClient
      heroSection={heroSection}
      autoCarouselSection={autoCarouselSection}
      heroVideoSection={heroVideoSection}
      timelineSection={timelineSection}
      projectsSection={projectsSection}
      caseStudySection={caseStudySection}
      testimonialsSection={testimonialsSection}
      servicesSection={servicesSection}
      reasonsSection={reasonsSection}
      pricingSection={pricingSection}
      faqsSection={faqsSection}
      teamSection={teamSection}
      footerSection={footerSection}
    />
  );
}
