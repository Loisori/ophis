import Hero, { type HeroData } from "@/components/section/Hero";
import Header from "@/components/section/Header";
import HeroVideo from "@/components/section/HeroVideo";
import AutoCarousel, {
  type CarouselData,
} from "@/components/section/AutoCarousel";
import { prisma } from "@/lib/prisma";
import Footer from "@/components/section/Footer";
import Timeline from "@/components/section/Timeline";
import Projects from "@/components/section/Projects";
import Services from "@/components/section/Services";
import Testimonials from "@/components/section/Testimonials";
import Reasons from "@/components/section/Reasons";
import Team from "@/components/section/Team";
import Faqs from "@/components/section/Faqs";
import Pricing from "@/components/section/Pricing";

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
    const testimonialsData = page?.sections.find((s: any) => s.type === "testimonials")?.content
    ?.data as any | null;
  return (
    <main>
      <Header />
      <Hero data={heroData ?? null} />
      <AutoCarousel data={autoCarouselData ?? null} />
      <HeroVideo data={heroVideoData ?? null} />
      <Timeline data={timelineData ?? null} />
      <Projects data={projectsData ?? null} />
      <Services data={servicesData ?? null} />

      <Testimonials data={testimonialsData ?? null}/>
      <Reasons data={reasonsData ?? null} />
      <Team data={teamData ?? null} />
      <Pricing data={pricingData ?? null} />
      <Faqs data={faqsData ?? null} />
      <Footer />
    </main>
  );
}
