import Hero, { type HeroData } from "@/components/section/Hero";
import dynamic from "next/dynamic";
import AutoCarousel, {
  type CarouselData,
} from "@/components/section/AutoCarousel";
import { prisma } from "@/lib/prisma";

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

  const heroData = page?.sections.find((s: any) => s.type === "hero")?.content
    ?.data as HeroData | null;
  const autoCarouselData = page?.sections.find(
    (s: any) => s.type === "autoCarousel"
  )?.content?.data as CarouselData | null;
  const timelineData = page?.sections.find((s: any) => s.type === "timeline")
    ?.content?.data as any | null;
  const projectsData = page?.sections.find((s: any) => s.type === "projects")
    ?.content?.data as any | null;
  const servicesData = page?.sections.find((s: any) => s.type === "services")
    ?.content?.data as any | null;
  const pricingData = page?.sections.find((s: any) => s.type === "pricing")
    ?.content?.data as any | null;
  const faqsData = page?.sections.find((s: any) => s.type === "faqs")?.content
    ?.data as any | null;
  const reasonsData = page?.sections.find((s: any) => s.type === "reasons")
    ?.content?.data as any | null;
  const heroVideoData = page?.sections.find((s: any) => s.type === "heroVideo")
    ?.content?.data as any | null;
  const teamData = page?.sections.find((s: any) => s.type === "team")?.content
    ?.data as any | null;
  const testimonialsData = page?.sections.find(
    (s: any) => s.type === "testimonials"
  )?.content?.data as any | null;
  return (
    <main>
      <Header />
      <Hero data={heroData ?? null} />
      <AutoCarousel data={autoCarouselData ?? null} />
      <HeroVideo data={heroVideoData ?? null} />
      <Timeline data={timelineData ?? null} />
      <Projects data={projectsData ?? null} />
      <Services data={servicesData ?? null} />

      <Testimonials data={testimonialsData ?? null} />
      <Reasons data={reasonsData ?? null} />
      {/* <Team data={teamData ?? null} /> */}
      <Pricing data={pricingData ?? null} />
      <Faqs data={faqsData ?? null} />
      <Footer />
    </main>
  );
}
