import { CarouselData } from "@/types/AutoCarousel.type";
import { CaseStudyData } from "@/types/CaseStudy.type";
import { FooterData } from "@/types/Footer.type";
import { HeroData } from "@/types/Hero.type";
import { HeroVideoData } from "@/types/HeroVideo.type";
import { PricingData } from "@/types/Pricing.type";
import { ProjectsData } from "@/types/Projects.type";
import { ReasonsData } from "@/types/Reasons.type";
import { ServicesData } from "@/types/Services.type";
import { TeamData } from "@/types/Team.type";
import { TestimonialsData } from "@/types/Testimonials.type";
import { TimelineData } from "@/types/Timeline.type";
import { FaqData } from "@/types/Faqs.type";
export const DEFAULT_CAROUSEL_DATA: CarouselData = {
  title: "Trusted by Industry-leading Founders & Creators",
  items: [
    {
      logo: "https://res.cloudinary.com/dhxrsiqip/image/upload/v1764168988/Vector_qdlw3d.png",
      name: "Snooppi",
      category: "461K subscribers",
    },
    // ... the other 3 items we discussed
  ],
};

export const DEFAULT_CASE_STUDY_DATA: CaseStudyData = {
  title: "Case Studies",
  projects: [],
};

export const DEFAULT_FOOTER_DATA: FooterData = {
  description:
    "Discover the video editing portfolio of Nam Nguyen - skilled in Adobe Premiere, After Effects, and DaVinci Resolve. Expert in cinematic editing, music videos, ads, and social media content.",
  contact: {
    address: "TPHCM, Việt Nam.",
    studyLocation: "Study location: Online course.",
    phone: "0905000000",
    email: "nam@gmail.com",
  },
  socials: [
    { label: "Instagram", href: "#", iconSvg: "" },
    { label: "Facebook", href: "#", iconSvg: "" },
    { label: "TikTok", href: "#", iconSvg: "" },
    { label: "YouTube", href: "#", iconSvg: "" },
  ],
};
export const DEFAULT_HERO_DATA: HeroData = {
  title: "The editing team that scales with your ambition",
  subtitle:
    "Publish faster, maintain exceptional quality, and turn your content into revenue with expert on-demand editing.With Ophis, you get precision and speed without bottlenecks - all the benefits of a full editorial team, without the overhead.",
  cards: [
    { title: "10X Views", subtitle: "Faster lead times" },
    { title: "Cancel anytime", subtitle: "No commitment, no stress" },
    { title: "4-10 days", subtitle: "Video delivery" },
  ],
};
export const DEFAULT_HERO_VIDEO_DATA: HeroVideoData = {
  videoUrl: "21e8o6knns",
};

export const DEFAULT_PRICING_DATA: PricingData = {
  title: "",
  subtitle: "Pricing",
  plans: [
    {
      name: "BASIC",
      price: "$800",
      description: "Perfect for getting started",
      features: [
        "2 long-form videos/month",
        "Unlimited revisions",
        "3-5 day turnaround",
        "Pause or cancel anytime",
      ],
      cta: "Book a call",
      popular: false,
    },
    {
      name: "PRO",
      price: "$2000",
      description: "Our most popular package",
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
      cta: "Book a call",
      popular: true,
    },
    {
      name: "PREMIUM",
      price: "",
      description: "For established creators",
      features: [
        "Tailored editing volume & workflows",
        "Dedicated Editor & Strategy Lead",
        "Content planning consultation",
        "Multi-format expertise",
        "Dedicated Designer",
        "Brand voice development",
      ],
      cta: "Book a call",
      popular: false,
    },
  ],
};

export const DEFAULT_PROJECTS_DATA: ProjectsData = {
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
      videos: ["VnJRsu9BTOk", "yB6EvcFqNz8", "KZ3S_20c5eA", "SuXKcuYzjsU"],
    },
  ],
};

export const DEFAULT_REASONS_DATA: ReasonsData = {
  headline: "Why Ophis is the right choice?",
  description:
    "We bring you all the advantages of having a full in-house editing team - without the overhead or hassle. From clear communication to on-brand consistency, we focus on transparency, collaboration, and trust in every step of the process.",
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
};

export const DEFAULT_SERVICES_DATA: ServicesData = {
  title: "Our Services",
  subtitle: "",
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
};

export const DEFAULT_TEAM_DATA: TeamData = {
  title: "Meet our brains",
  subtitle: "The people behind Ophis",
  members: [
    {
      name: "Nam Nguyen",
      description:
        "Senior editor with 4+ years turning raw footage into revenue-driving content. Specializes in diverse video styles that convert viewers into customers and grow brands faster.",
      image:
        "https://res.cloudinary.com/dhxrsiqip/image/upload/v1764172931/Nam_Nguyen_1_oad1gh.png",
    },
    {
      name: "Simon",
      description:
        "With a background that spans from gaming content to brand storytelling, has led editing teams, designed motion graphics, and produced standout visuals under tight deadlines.",
      image:
        "https://res.cloudinary.com/dhxrsiqip/image/upload/v1764172931/Simon_da4ogc.png",
    },
  ],
};

export const DEFAULT_TESTIMONIALS_DATA: TestimonialsData = {
  title: "Testimonials",
  subtitle: "What other brands say about working with Ophis",
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
};

export const DEFAULT_TIMELINE_DATA: TimelineData = {
  title: "How it works",
  subtitle: "Consistent, Seamless & On-brand",
  quote: "The way editing should have been done from the start.",
  subquote:
    "By understanding your brand’s tone and visual identity, we build a streamlined editing workflow that keeps every video consistent - from the first cut to the final export.",
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
};
export const DEFAULT_FAQ_DATA: FaqData = {
  subheadline: "FAQ's",
  headline: "Frequently asked questions",
  items: [
    {
      question: "Who is this service designed for?",
      answer: "Ophis is built for founders, entrepreneurs, content creators, and marketing agencies who need high-quality, consistent video editing without the overhead of hiring a full-time in-house team.",
    },
    {
      question: "How long does a typical edit take?",
      answer: "Most long-form edits are delivered within 4-10 business days depending on complexity. Short-form content (Reels/TikToks) typically has a 48-72 hour turnaround time.",
    },
    {
      question: "How do revisions work?",
      answer: "We offer unlimited revisions. We use Frame.io for feedback, allowing you to leave time-stamped comments directly on the video so our editors know exactly what to adjust.",
    },
    {
      question: "Can I cancel my subscription anytime?",
      answer: "Yes, there are no long-term contracts. You can pause or cancel your subscription at any time through your client portal, and you will retain access to your services until the end of your billing cycle.",
    },
    {
      question: "What software do your editors use?",
      answer: "Our team is expert in Adobe Premiere Pro, After Effects, and DaVinci Resolve. We use professional-grade tools to ensure your videos meet industry standards.",
    },
  ],
};