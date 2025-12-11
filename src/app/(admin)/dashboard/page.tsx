import { prisma } from "@/lib/prisma";
import DashboardClient from "./DashboardClient";
import { p } from "framer-motion/client";
import Reasons from "@/components/section/Reasons";

export const dynamic = "force-dynamic";

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
          {
            type: "hero",
            position: 1,
            content: {
              create: {
                data: { headline: "...", subheadline: "...", cards: [] },
              },
            },
          },
          {
            type: "autoCarousel",
            position: 2,
            content: { create: { data: { title: "...", items: [] } } },
          },
          {
            type: "timeline",
            position: 3,
            content: { create: { data: { steps: [] } } },
          },
          {
            type: "projects",
            position: 4,
            content: { create: { data: { videoIds: [] } } },
          },
          {
            type: "services",
            position: 5,
            content: { create: { data: { services: [] } } },
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

  // 2. Parse Sections
  let heroSection = page.sections.find((s: any) => s.type === "hero");
  let autoCarouselSection = page.sections.find(
    (s: any) => s.type === "autoCarousel"
  );
  let timelineSection = page.sections.find((s: any) => s.type === "timeline");
  let projectsSection = page.sections.find((s: any) => s.type === "projects");
  let servicesSection = page.sections.find((s: any) => s.type === "services");
  let pricingSection = page.sections.find((s: any) => s.type === "pricing");
  let faqsSection = page.sections.find((s: any) => s.type === "faqs");
  let reasonsSection = page.sections.find((s: any) => s.type === "reasons");
  let heroVideoSection = page.sections.find((s: any) => s.type === "heroVideo");
  let teamSection = page.sections.find((s: any) => s.type === "team");
  let testimonialsSection = page.sections.find(
    (s: any) => s.type === "testimonials"
  );

  // 3. Auto-Fix (Self-healing)
  if (!timelineSection) {
    timelineSection = await prisma.section.create({
      data: {
        pageId: page.id,
        type: "timeline",
        position: 3,
        content: { create: { data: { steps: [] } } },
      },
      include: { content: true },
    });
  }
  if (!projectsSection) {
    projectsSection = await prisma.section.create({
      data: {
        pageId: page.id,
        type: "projects",
        position: 4,
        content: { create: { data: { videoIds: [] } } },
      },
      include: { content: true },
    });
  }
  if (!servicesSection) {
    servicesSection = await prisma.section.create({
      data: {
        pageId: page.id,
        type: "services",
        position: 5,
        content: { create: { data: { services: [] } } },
      },
      include: { content: true },
    });
  }

  if (!testimonialsSection) {
    testimonialsSection = await prisma.section.create({
      data: {
        pageId: page.id,
        type: "testimonials",
        position: 6,
        content: { create: { data: { testimonials: [] } } },
      },
      include: { content: true },
    });
  }
  if (!pricingSection) {
    pricingSection = await prisma.section.create({
      data: {
        pageId: page.id,
        type: "pricing",
        position: 7,
        content: { create: { data: { services: [] } } },
      },
      include: { content: true },
    });
  }
  if (!faqsSection) {
    faqsSection = await prisma.section.create({
      data: {
        pageId: page.id,
        type: "faqs",
        position: 8,
        content: { create: { data: { faqs: [] } } },
      },
      include: { content: true },
    });
  }
  if (!reasonsSection) {
    reasonsSection = await prisma.section.create({
      data: {
        pageId: page.id,
        type: "reasons",
        position: 9,
        content: { create: { data: { reasons: [] } } },
      },
      include: { content: true },
    });
  }
  if (!heroVideoSection) {
    heroVideoSection = await prisma.section.create({
      data: {
        pageId: page.id,
        type: "heroVideo",
        position: 10,
        content: { create: { data: { videoUrl: "" } } },
      },
      include: { content: true },
    });
  }
  if (!teamSection) {
    teamSection = await prisma.section.create({
      data: {
        pageId: page.id,
        type: "team",
        position: 11,
        content: { create: { data: { teamMembers: [] } } },
      },
      include: { content: true },
    });
  }

  return (
    <DashboardClient
      heroSection={heroSection}
      autoCarouselSection={autoCarouselSection}
      timelineSection={timelineSection}
      projectsSection={projectsSection}
      servicesSection={servicesSection}
      pricingSection={pricingSection}
      testimonialsSection={testimonialsSection}
      faqsSection={faqsSection}
      reasonsSection={reasonsSection}
      heroVideoSection={heroVideoSection}
      teamSection={teamSection}
    />
  );
}
