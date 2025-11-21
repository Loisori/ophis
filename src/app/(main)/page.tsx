import Hero, { type HeroData } from "@/components/section/Hero";
import Header from "@/components/section/Header";
import HeroVideo from "@/components/section/HeroVideo";
import AutoCarousel, {
  type CarouselData,
} from "@/components/section/AutoCarousel";
import { prisma } from "@/lib/prisma";

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

  const heroData = page?.sections.find(
    (section: any) => section.type === "hero"
  )?.content?.data as HeroData | null;
  const autoCarouselData = page?.sections.find(
    (section: any) => section.type === "autoCarousel"
  )?.content?.data as CarouselData | null;

  return (
    <main>
      <Header />
      <Hero data={heroData ?? null} />
      <AutoCarousel data={autoCarouselData ?? null} />
      <HeroVideo />
    </main>
  );
}
