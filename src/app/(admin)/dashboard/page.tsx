import { prisma } from "@/lib/prisma";
import DashboardClient from "./DashboardClient";

export const dynamic = 'force-dynamic';

export default async function AdminHome() {
  // 1. Fetch / Ensure Data Exists
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
          { type: "services", position: 5, content: { create: { data: { services: [] } } } }
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

  // 2. Parse Sections
  let heroSection = page.sections.find((s: any) => s.type === "hero");
  let autoCarouselSection = page.sections.find((s: any) => s.type === "autoCarousel");
  let timelineSection = page.sections.find((s: any) => s.type === "timeline");
  let projectsSection = page.sections.find((s: any) => s.type === "projects");
  let servicesSection = page.sections.find((s: any) => s.type === "services");

  // 3. Auto-Fix (Self-healing)
  if (!timelineSection) {
    timelineSection = await prisma.section.create({
      data: { pageId: page.id, type: "timeline", position: 3, content: { create: { data: { steps: [] } } } },
      include: { content: true }
    });
  }
  if (!projectsSection) {
    projectsSection = await prisma.section.create({
      data: { pageId: page.id, type: "projects", position: 4, content: { create: { data: { videoIds: [] } } } },
      include: { content: true }
    });
  }
  if (!servicesSection) {
    servicesSection = await prisma.section.create({
      data: { pageId: page.id, type: "services", position: 5, content: { create: { data: { services: [] } } } },
      include: { content: true }
    });
  }

  // 4. Pass to Client Layout
  return (
    <DashboardClient 
      heroSection={heroSection}
      autoCarouselSection={autoCarouselSection}
      timelineSection={timelineSection}
      projectsSection={projectsSection}
      servicesSection={servicesSection}
    />
  );
}