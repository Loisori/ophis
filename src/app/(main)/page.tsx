// import Hero, { type HeroData } from "@/components/section/Hero";
// import Header from "@/components/section/Header";
// import HeroVideo from "@/components/section/HeroVideo";
// import AutoCarousel, {
//   type CarouselData,
// } from "@/components/section/AutoCarousel";
// import { prisma } from "@/lib/prisma";
// import Footer from "@/components/section/Footer";
// import Timeline from "@/components/section/Timeline";
// import Projects from "@/components/section/Projects";
// import Testimonials from "@/components/section/Testimonials";
// import Services from "@/components/section/Services";
// import Reasons from "@/components/section/Reasons";
// import Team from "@/components/section/Team";
// import Pricing from "@/components/section/Pricing";
// import Faqs from "@/components/section/Faqs";

// // This is an Async Server Component.
// // It runs entirely on the server, fetches data from the DB, and sends the final HTML to the browser.
// export default async function Home() {

//   // 1. DATABASE QUERY:
//   // We fetch the specific page entry for the homepage (slug: "/").
//   const page = await prisma.page.findUnique({
//     where: { slug: "/" },
//     // 'include' performs a join to get related data.
//     include: {
//       sections: {
//         // We need the content of the sections to render the text/images.
//         include: { content: true },
//         // Critical: We sort sections by 'position' so they appear in the correct visual order.
//         orderBy: { position: "asc" },
//       },
//     },
//   });

//   // 2. DATA PARSING / MAPPING:
//   // The DB returns an array of sections. We need to extract specific sections
//   // by their 'type' to pass them to the correct React components.

//   // Find the section labeled 'hero' and cast its data to the HeroData type.
//   const heroData = page?.sections.find(
//     (section: any) => section.type === "hero"
//   )?.content?.data as HeroData | null;

//   // Find the section labeled 'autoCarousel' for the sliding banner.
//   const autoCarouselData = page?.sections.find(
//     (section: any) => section.type === "autoCarousel"
//   )?.content?.data as CarouselData | null;

//   // 3. RENDER:
//   // Pass the extracted data down to the components.
//   return (
//     <main>
//       {/* The Header usually contains navigation (logo, menu) */}
//       <Header />

//       {/* Pass the hero data. If data is undefined, pass null to prevent crashes. */}
//       <Hero data={heroData ?? null} />

//       {/* Pass the carousel data. */}
//       <AutoCarousel data={autoCarouselData ?? null} />

//       {/* This component appears to be static (no data passed) or handles its own fetching. */}
//       <HeroVideo />
//       <Timeline />
//       {/* <Projects />
//       <Testimonials />
//       <Services />
//       <Reasons />
//       <Team />
//       <Pricing />
//       <Faqs />
//       <Footer /> */}
//     </main>
//   );
// }
import Hero, { type HeroData } from "@/components/section/Hero";
import Header from "@/components/section/Header";
import HeroVideo from "@/components/section/HeroVideo";
import AutoCarousel, {
  type CarouselData,
} from "@/components/section/AutoCarousel";
import { prisma } from "@/lib/prisma";
import Footer from "@/components/section/Footer";
import Timeline from "@/components/section/Timeline"; // Import Timeline
// import Projects from "@/components/section/Projects";
// import Testimonials from "@/components/section/Testimonials";
// import Services from "@/components/section/Services";
// import Reasons from "@/components/section/Reasons";
// import Team from "@/components/section/Team";
// import Pricing from "@/components/section/Pricing";
// import Faqs from "@/components/section/Faqs";

// This is an Async Server Component.
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

  const heroData = page?.sections.find(
    (section: any) => section.type === "hero"
  )?.content?.data as HeroData | null;

  const autoCarouselData = page?.sections.find(
    (section: any) => section.type === "autoCarousel"
  )?.content?.data as CarouselData | null;

  const timelineData = page?.sections.find(
    (section: any) => section.type === "timeline"
  )?.content?.data as any | null; // Using 'any' or import the TimelineData type if exported

  return (
    <main>
      <Header />

      {/* Hero Section */}
      <Hero data={heroData ?? null} />

      {/* Carousel Section */}
      <AutoCarousel data={autoCarouselData ?? null} />

      {/* Static Hero Video */}
      <HeroVideo />

      {/* NEW: Pass data to Timeline */}
      <Timeline data={timelineData ?? null} />

      {/* <Projects />
      <Testimonials />
      <Services />
      <Reasons />
      <Team />
      <Pricing />
      <Faqs />
      <Footer /> 
      */}
    </main>
  );
}
