import Hero from "@/components/section/Hero";
import Header from "@/components/section/Header";
import HeroVideo from "@/components/section/HeroVideo";
import AutoCarousel from "@/components/section/AutoCarousel";
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

  const heroData = page?.sections.find((section: any) => section.type === "hero")
    ?.content?.data;

  return (
    <main>
      <Header />
      <Hero data={heroData} />
      <AutoCarousel />
      <HeroVideo />
    </main>
  );
}
