import Hero from "@/components/section/Hero";
import dynamic from "next/dynamic";
import AutoCarousel from "@/components/section/AutoCarousel";
import { prisma } from "@/lib/prisma";

import { HeroData } from "@/types/Hero.type";
import { CarouselData } from "@/types/AutoCarousel.type";
import { TimelineData } from "@/types/Timeline.type";
import { ProjectsData } from "@/types/Projects.type";
import { ServicesData } from "@/types/Services.type";
import { PricingData } from "@/types/Pricing.type";
import { FaqData } from "@/types/Faqs.type";
import { ReasonsData } from "@/types/Reasons.type";
import { HeroVideoData } from "@/types/HeroVideo.type";
import { TeamData } from "@/types/Team.type";
import { TestimonialsData } from "@/types/Testimonials.type";
import { FooterData } from "@/types/Footer.type";
import { CaseStudyData } from "@/types/CaseStudy.type";

const Header = dynamic(() => import("@/components/section/Header"));
const Footer = dynamic(() => import("@/components/section/Footer"));
const HeroVideo = dynamic(() => import("@/components/section/HeroVideo"));
const Timeline = dynamic(() => import("@/components/section/Timeline"));
const Projects = dynamic(() => import("@/components/section/Projects"));
const Services = dynamic(() => import("@/components/section/Services"));
const Testimonials = dynamic(() => import("@/components/section/Testimonials"));
const Reasons = dynamic(() => import("@/components/section/Reasons"));
const Team = dynamic(() => import("@/components/section/Team"));
const Faqs = dynamic(() => import("@/components/section/Faqs"));
const Pricing = dynamic(() => import("@/components/section/Pricing"));
const CaseStudy = dynamic(() => import("@/components/section/CaseStudy"));

export default async function Home() {
  const page = await prisma.page.findUnique({
    where: { slug: "/" },
    include: {
      sections: {
        include: { content: true },
        orderBy: { position: "asc" },
      },
    },
  });

const sectionMap = new Map(
    page?.sections.map((s: any) => [s.type, s.content?.data])
  );

  return (
<main>
      <Header />
      <Hero data={sectionMap.get("hero") as HeroData} />
      <AutoCarousel data={sectionMap.get("autoCarousel") as CarouselData} />
      <HeroVideo data={sectionMap.get("heroVideo") as HeroVideoData} />
      <Timeline data={sectionMap.get("timeline") as TimelineData} />
      <Projects data={sectionMap.get("projects") as ProjectsData} />
      <CaseStudy data={sectionMap.get("caseStudy") as CaseStudyData} />
      <Testimonials data={sectionMap.get("testimonials") as TestimonialsData} />
      <Services data={sectionMap.get("services") as ServicesData} />
      <Reasons data={sectionMap.get("reasons") as ReasonsData} />
      {/* <Team data={sectionMap.get("team") as TeamData} /> */}
      <Pricing data={sectionMap.get("pricing") as PricingData} />
      <Faqs data={sectionMap.get("faqs") as FaqData} />
      <Footer data={sectionMap.get("footer") as FooterData} />
    </main>
  );
}
