import { prisma } from "@/lib/prisma";
import HeroEditor from "@/components/admin/HeroEditor";
import AutoCarouselEditor from "@/components/admin/AutoCarouselEditor";
import TimelineEditor from "@/components/admin/TimelineEditor"; // 1. Import this
import Image from "next/image";

export const dynamic = "force-dynamic";

export default async function AdminHome() {
  // 1. FETCH OR CREATE PAGE
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
                  headline: "The editing team that scales with your ambition",
                  subheadline:
                    "Publish faster, maintain exceptional quality...",
                  cards: [
                    { title: "10X Views", subtitle: "Faster lead times" },
                    {
                      title: "Cancel anytime",
                      subtitle: "No commitment, no stress",
                    },
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
                data: {
                  title: "Trusted by Industry-leading Founders & Creators",
                  items: [],
                },
              },
            },
          },
          // Note: Adding it here only helps NEW databases.
          // We handle existing databases in the logic below.
          {
            type: "timeline",
            position: 3,
            content: {
              create: {
                data: {
                  steps: [
                    {
                      id: 1,
                      title: "Your raw footage",
                      description: "Start by filling out...",
                      icon: "https://res.cloudinary.com/dhxrsiqip/image/upload/v1764155929/Group_67_eoevr5.png",
                    },
                    {
                      id: 2,
                      title: "Our creative editing team",
                      description: "We craft a unique editing...",
                      icon: "https://res.cloudinary.com/dhxrsiqip/image/upload/v1764155929/Group_124_cv2zyq.png",
                    },
                    {
                      id: 3,
                      title: "Refinement & feedback",
                      description: "Track tasks and progress...",
                      icon: "https://res.cloudinary.com/dhxrsiqip/image/upload/v1764155929/Group_125_vbut1z.png",
                    },
                    {
                      id: 4,
                      title: "Delivery",
                      description: "We deliver your final videos...",
                      icon: "https://res.cloudinary.com/dhxrsiqip/image/upload/v1764155929/Group_126_b2egzu.png",
                    },
                  ],
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

  // 2. ROBUST DATA RETRIEVAL (The Fix)
  // We check if sections exist. If not, we create them on the fly.

  let heroSection = page.sections.find((s: any) => s.type === "hero");

  let autoCarouselSection = page.sections.find(
    (s: any) => s.type === "autoCarousel"
  );

  let timelineSection = page.sections.find((s: any) => s.type === "timeline");

  // --- AUTO-FIX: Create Timeline if missing ---
  if (!timelineSection) {
    console.log("Timeline section missing, creating it now...");
    timelineSection = await prisma.section.create({
      data: {
        pageId: page.id,
        type: "timeline",
        position: 3,
        content: {
          create: {
            data: {
              steps: [
                {
                  id: 1,
                  title: "Your raw footage",
                  description: "Start by filling out our quick form...",
                  icon: "https://res.cloudinary.com/dhxrsiqip/image/upload/v1764155929/Group_67_eoevr5.png",
                  icondark: "https://res.cloudinary.com/dhxrsiqip/image/upload/v1764155929/Group_67_eoevr5.png",
                },
                {
                  id: 2,
                  title: "Our creative editing team",
                  description: "We craft a unique editing style...",
                  icon: "https://res.cloudinary.com/dhxrsiqip/image/upload/v1764155929/Group_124_cv2zyq.png",
                  icondark: "https://res.cloudinary.com/dhxrsiqip/image/upload/v1764155929/Group_67_eoevr5.png",
                },
                {
                  id: 3,
                  title: "Refinement & feedback",
                  description: "Track tasks and progress...",
                  icon: "https://res.cloudinary.com/dhxrsiqip/image/upload/v1764155929/Group_125_vbut1z.png",
                  icondark: "https://res.cloudinary.com/dhxrsiqip/image/upload/v1764155929/Group_67_eoevr5.png",
                },
                {
                  id: 4,
                  title: "Delivery",
                  description: "We deliver your final videos...",
                  icon: "https://res.cloudinary.com/dhxrsiqip/image/upload/v1764155929/Group_126_b2egzu.png",
                  icondark: "https://res.cloudinary.com/dhxrsiqip/image/upload/v1764155929/Group_67_eoevr5.png",
                },
              ],
            },
          },
        },
      },
      include: { content: true },
    });
  }

  return (
    <main className="min-h-screen bg-purple-950 text-white">
      <div className="wrapper py-12 space-y-8">
        <header className="space-y-2">
          <Image
            src="/imgs/logo.png"
            alt="Ophis Logo"
            width={160}
            height={70}
          />
        </header>

        {/* Overview List */}
        <section className="space-y-4">
          <h2 className="text-xl font-semibold">Sections</h2>
          <div className="space-y-3">
            {/* We re-fetch the list to ensure the new section shows up in the list too */}
            {[heroSection, autoCarouselSection, timelineSection]
              .filter(Boolean)
              .map((section: any) => (
                <div
                  key={section.id}
                  className="rounded-xl border border-white/15 bg-white/5 px-4 py-3 text-sm flex items-center justify-between"
                >
                  <div>
                    <p className="font-medium capitalize">{section.type}</p>
                    <p className="text-white/70">
                      Position {section.position} ·{" "}
                      {section.content ? "Has content" : "No content"}
                    </p>
                  </div>
                  <span className="rounded bg-white/10 px-2 py-1 text-xs text-white/80">
                    ID: {section.id.slice(0, 6)}…
                  </span>
                </div>
              ))}
          </div>
        </section>

        {heroSection && (
          <section className="space-y-4">
            <h2 className="text-xl font-semibold">Hero content</h2>
            <HeroEditor
              sectionId={heroSection.id}
              initialData={heroSection.content?.data as any}
            />
          </section>
        )}

        {autoCarouselSection && (
          <section className="space-y-4">
            <h2 className="text-xl font-semibold">Auto carousel</h2>
            <AutoCarouselEditor
              sectionId={autoCarouselSection.id}
              initialData={autoCarouselSection.content?.data as any}
            />
          </section>
        )}

        {/* 4. Render the Timeline Editor */}
        {timelineSection && (
          <section className="space-y-4">
            <h2 className="text-xl font-semibold">Process Timeline</h2>
            <TimelineEditor
              sectionId={timelineSection.id}
              initialData={timelineSection.content?.data as any}
            />
          </section>
        )}
      </div>
    </main>
  );
}
