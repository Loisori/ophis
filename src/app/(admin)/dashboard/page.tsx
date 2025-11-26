import { prisma } from "@/lib/prisma";
import HeroEditor from "@/components/admin/HeroEditor";
import AutoCarouselEditor from "@/components/admin/AutoCarouselEditor";
import TimelineEditor from "@/components/admin/TimelineEditor";
import ProjectsEditor from "@/components/admin/ProjectsEditor";
import ServicesEditor from "@/components/admin/ServicesEditor";
import Image from "next/image";

export const dynamic = 'force-dynamic';

export default async function AdminHome() {
  
  const page = await prisma.page.upsert({
    where: { slug: "/" },
    update: {},
    create: {
      slug: "/",
      title: "Home",
      sections: {
        create: [
          { type: "hero", position: 1, content: { create: { data: { headline: "...", subheadline: "...", cards: [] } } } },
          { type: "autoCarousel", position: 2, content: { create: { data: { title: "...", items: [] } } } },
          { type: "timeline", position: 3, content: { create: { data: { steps: [] } } } },
          { type: "projects", position: 4, content: { create: { data: { videoIds: [] } } } },
          // 2. Update Seed Data for Services to include headline/subheadline
          { 
            type: "services", 
            position: 5, 
            content: { 
              create: { 
                data: { 
                  headline: "Our Services",
                  subheadline: "Consistent, Seamless & On-brand",
                  services: [
                    {
                      title: "Convert with Video",
                      description: "Strategic editing for Ads & VSLs...",
                      icon: "https://res.cloudinary.com/dhxrsiqip/image/upload/v1764168988/Vector_qdlw3d.png",
                    },
                    {
                      title: "Grow your Channel",
                      description: "High-impact YouTube editing...",
                      icon: "https://res.cloudinary.com/dhxrsiqip/image/upload/v1764168988/up_fbcj1b.png",
                    },
                    {
                      title: "Multi-Platform ready",
                      description: "We craft attention-grabbing TikToks...",
                      icon: "https://res.cloudinary.com/dhxrsiqip/image/upload/v1764168987/phone_bonv6y.png",
                    },
                  ] 
                } 
              } 
            } 
          }
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

  let heroSection = page.sections.find((s: any) => s.type === "hero");
  let autoCarouselSection = page.sections.find((s: any) => s.type === "autoCarousel");
  let timelineSection = page.sections.find((s: any) => s.type === "timeline");
  let projectsSection = page.sections.find((s: any) => s.type === "projects");
  let servicesSection = page.sections.find((s: any) => s.type === "services");

  // --- AUTO-FIXES for existing DBs ---
  if (!timelineSection) { /* ... existing timeline fix ... */ }
  if (!projectsSection) { /* ... existing projects fix ... */ }
  
  // Auto-fix for services
  if (!servicesSection) {
    servicesSection = await prisma.section.create({
      data: {
        pageId: page.id, type: "services", position: 5,
        content: { create: { data: { 
           headline: "Our Services",
           subheadline: "Consistent, Seamless & On-brand",
           services: [
             { title: "Convert with Video", description: "Strategic editing...", icon: "https://res.cloudinary.com/dhxrsiqip/image/upload/v1764168988/Vector_qdlw3d.png" },
             { title: "Grow your Channel", description: "High-impact YouTube editing...", icon: "https://res.cloudinary.com/dhxrsiqip/image/upload/v1764168988/up_fbcj1b.png" },
             { title: "Multi-Platform ready", description: "We craft attention-grabbing...", icon: "https://res.cloudinary.com/dhxrsiqip/image/upload/v1764168987/phone_bonv6y.png" },
        ] } } }
      }, include: { content: true }
    });
  }

  return (
    <main className="min-h-screen bg-purple-950 text-white">
      <div className="wrapper py-12 space-y-8">
        <header className="space-y-2">
          <Image src="/imgs/logo.png" alt="Ophis Logo" width={160} height={70} />
        </header>

        {/* Overview List */}
        <section className="space-y-4">
          <h2 className="text-xl font-semibold">Sections</h2>
          <div className="space-y-3">
            {[heroSection, autoCarouselSection, timelineSection, projectsSection, servicesSection].filter(Boolean).map((section: any) => (
              <div key={section.id} className="rounded-xl border border-white/15 bg-white/5 px-4 py-3 text-sm flex items-center justify-between">
                <div>
                  <p className="font-medium capitalize">{section.type}</p>
                  <p className="text-white/70">Position {section.position}</p>
                </div>
                <span className="rounded bg-white/10 px-2 py-1 text-xs text-white/80">ID: {section.id.slice(0, 6)}…</span>
              </div>
            ))}
          </div>
        </section>

        {heroSection && (
          <section className="space-y-4">
            <h2 className="text-xl font-semibold">Hero content</h2>
            <HeroEditor sectionId={heroSection.id} initialData={heroSection.content?.data as any} />
          </section>
        )}

        {autoCarouselSection && (
          <section className="space-y-4">
            <h2 className="text-xl font-semibold">Auto carousel</h2>
            <AutoCarouselEditor sectionId={autoCarouselSection.id} initialData={autoCarouselSection.content?.data as any} />
          </section>
        )}

        {timelineSection && (
          <section className="space-y-4">
            <h2 className="text-xl font-semibold">Process Timeline</h2>
            <TimelineEditor sectionId={timelineSection.id} initialData={timelineSection.content?.data as any} />
          </section>
        )}

        {projectsSection && (
          <section className="space-y-4">
            <h2 className="text-xl font-semibold">Portfolio Projects</h2>
            <ProjectsEditor sectionId={projectsSection.id} initialData={projectsSection.content?.data as any} />
          </section>
        )}

        {servicesSection && (
          <section className="space-y-4">
            <h2 className="text-xl font-semibold">Our Services</h2>
            <ServicesEditor sectionId={servicesSection.id} initialData={servicesSection.content?.data as any} />
          </section>
        )}
      </div>
    </main>
  );
}