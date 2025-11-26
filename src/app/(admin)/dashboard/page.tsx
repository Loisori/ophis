import { prisma } from "@/lib/prisma";
import HeroEditor from "@/components/admin/HeroEditor";
import AutoCarouselEditor from "@/components/admin/AutoCarouselEditor";
import Image from "next/image";

// This is a Server Component (async)
export default async function AdminHome() {
  
  // 1. SEEDING / FETCHING LOGIC:
  // usage of 'upsert' (Update + Insert) acts as a guarantee.
  // It says: "Find the page with slug '/'. If it exists, give it to me.
  // If it DOES NOT exist, create it immediately with this default data."
  const page = await prisma.page.upsert({
    where: { slug: "/" },
    
    // If the page is found, we do nothing (empty object). 
    // We just want to fetch it, not change it on every refresh.
    update: {},
    
    // If the page is MISSING (first time running the app), create this structure:
    create: {
      slug: "/",
      title: "Home",
      sections: {
        // Create the related sections automatically using nested writes
        create: [
          {
            type: "hero",
            position: 1,
            content: {
              create: {
                // Default content for the Hero section
                data: {
                  headline: "The editing team that scales with your ambition",
                  subheadline:
                    "Publish faster, maintain exceptional quality, and turn your content into revenue with expert on-demand editing.",
                  cards: [
                    { title: "10X Views", subtitle: "Faster lead times" },
                    { title: "Cancel anytime", subtitle: "No commitment, no stress" },
                    { title: "4-10 days", subtitle: "Video delivery" },
                  ],
                },
              },
            },
          },
          {
            type: "autoCarousel",
            position: 2,
            content: {
              create: {
                // Default content for the Carousel section
                data: {
                  title: "Trusted by Industry-leading Founders & Creators",
                  items: [
                    { name: "Snooppi", logo: "/imgs/partners/snooppi.png", category: "461K subscribers" },
                    { name: "Misthy", logo: "/imgs/partners/misthy.png", category: "8M subscribers" },
                    { name: "Ser Andy", logo: "/imgs/partners/serandy.png", category: "210K subscribers" },
                    { name: "Jason Cabin", logo: "/imgs/partners/jasoncabin.png", category: "1.08K subscribers" },
                  ],
                },
              },
            },
          },
        ],
      },
    },
    // Join related tables so we can access 'sections' and their 'content' in the UI
    include: {
      sections: {
        include: { content: true },
        orderBy: { position: "asc" }, // Keep sections in the right order
      },
    },
  });

  // 2. PREPARE DATA FOR EDITORS:
  // We need to find the specific section objects to pass their IDs 
  // and current Data to the correct React components below.
  const heroSection = page.sections.find((s: any) => s.type === "hero");
  const autoCarouselSection = page.sections.find(
    (s: any) => s.type === "autoCarousel"
  );

  return (
    <main className="min-h-screen bg-purple-950 text-white">
      <div className="wrapper py-12 space-y-8">
        {/* --- Header --- */}
        <header className="space-y-2">
          <Image
            src="/imgs/logo.png"
            alt="Ophis Logo"
            width={160}
            height={70}
            className="mr-2"
          />
        </header>

        {/* --- Overview List --- */}
        {/* Loops through ALL sections to show a summary list of what is on the page */}
        <section className="space-y-4">
          <h2 className="text-xl font-semibold">Sections</h2>
          <div className="space-y-3">
            {page.sections.map((section: any) => (
              <div
                key={section.id}
                className="rounded-xl border border-white/15 bg-white/5 px-4 py-3 text-sm flex items-center justify-between"
              >
                <div>
                  <p className="font-medium capitalize">
                    {section.type}{" "}
                    {/* Conditional Badge: Only shows if 'visible' is false */}
                    {!section.visible && (
                      <span className="ml-2 rounded bg-yellow-500/20 px-1.5 py-0.5 text-[0.7rem] font-semibold uppercase tracking-wide text-yellow-200">
                        hidden
                      </span>
                    )}
                  </p>
                  <p className="text-white/70">
                    Position {section.position} ·{" "}
                    {section.content
                      ? "Has content"
                      : "No content yet – edit to add data"}
                  </p>
                </div>
                <div className="flex items-center gap-2 text-xs">
                  {/* Aesthetic: Only show the first 6 chars of the UUID */}
                  <span className="rounded bg-white/10 px-2 py-1 text-white/80">
                    ID: {section.id.slice(0, 6)}…
                  </span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* --- Hero Editor --- */}
        {/* Only render if the database actually returned a hero section */}
        {heroSection && (
          <section className="space-y-4">
            <h2 className="text-xl font-semibold">Hero content</h2>
            <HeroEditor
              sectionId={heroSection.id} // Needed for the PATCH API call
              initialData={heroSection.content?.data as any} // Pre-fill the form
            />
          </section>
        )}

        {/* --- Auto Carousel Editor --- */}
        {autoCarouselSection && (
          <section className="space-y-4">
            <h2 className="text-xl font-semibold">Auto carousel</h2>
            <AutoCarouselEditor
              sectionId={autoCarouselSection.id}
              initialData={autoCarouselSection.content?.data as any}
            />
          </section>
        )}
      </div>
    </main>
  );
}