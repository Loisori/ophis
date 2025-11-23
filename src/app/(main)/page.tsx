import Hero, { type HeroData } from "@/components/section/Hero";
import Header from "@/components/section/Header";
import HeroVideo from "@/components/section/HeroVideo";
import AutoCarousel, {
  type CarouselData,
} from "@/components/section/AutoCarousel";
import { prisma } from "@/lib/prisma";

// This is an Async Server Component.
// It runs entirely on the server, fetches data from the DB, and sends the final HTML to the browser.
export default async function Home() {
  
  // 1. DATABASE QUERY:
  // We fetch the specific page entry for the homepage (slug: "/").
  const page = await prisma.page.findUnique({
    where: { slug: "/" },
    // 'include' performs a join to get related data.
    include: {
      sections: {
        // We need the content of the sections to render the text/images.
        include: { content: true },
        // Critical: We sort sections by 'position' so they appear in the correct visual order.
        orderBy: { position: "asc" },
      },
    },
  });

  // 2. DATA PARSING / MAPPING:
  // The DB returns an array of sections. We need to extract specific sections 
  // by their 'type' to pass them to the correct React components.
  
  // Find the section labeled 'hero' and cast its data to the HeroData type.
  const heroData = page?.sections.find(
    (section: any) => section.type === "hero"
  )?.content?.data as HeroData | null;

  // Find the section labeled 'autoCarousel' for the sliding banner.
  const autoCarouselData = page?.sections.find(
    (section: any) => section.type === "autoCarousel"
  )?.content?.data as CarouselData | null;

  // 3. RENDER:
  // Pass the extracted data down to the components.
  return (
    <main>
      {/* The Header usually contains navigation (logo, menu) */}
      <Header />
      
      {/* Pass the hero data. If data is undefined, pass null to prevent crashes. */}
      <Hero data={heroData ?? null} />
      
      {/* Pass the carousel data. */}
      <AutoCarousel data={autoCarouselData ?? null} />
      
      {/* This component appears to be static (no data passed) or handles its own fetching. */}
      <HeroVideo />
    </main>
  );
}