"use client";

import { useState } from "react";
import Image from "next/image";

// --- Editor Imports ---
import HeroEditor from "@/components/admin/HeroEditor";
import AutoCarouselEditor from "@/components/admin/AutoCarouselEditor";
import TimelineEditor from "@/components/admin/TimelineEditor";
import ProjectsEditor from "@/components/admin/ProjectsEditor";
import CaseStudyEditor from "@/components/admin/CaseStudyEditor";
import ServicesEditor from "@/components/admin/ServicesEditor";
import PricingEditor from "@/components/admin/PricingEditor";
import FaqsEditor from "@/components/admin/FaqsEditor";
import ReasonsEditor from "@/components/admin/Reasons";
import HeroVideoEditor from "@/components/admin/HeroVideoEditor";
import FooterEditor from "@/components/admin/FooterEditor";
import TeamEditor from "@/components/admin/TeamEditor";
import TestimonialsEditor from "@/components/admin/TestimonialsEditor";

// --- Custom Sidebar Icons ---
const LayoutIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="18"
    height="18"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <rect width="7" height="9" x="3" y="3" rx="1" />
    <rect width="7" height="5" x="14" y="3" rx="1" />
    <rect width="7" height="9" x="14" y="12" rx="1" />
    <rect width="7" height="5" x="3" y="16" rx="1" />
  </svg>
);

const SectionIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="18"
    height="18"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M12 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />
    <path d="M18.375 2.625a2.121 2.121 0 1 1 3 3L12 15l-4 1 1-4Z" />
  </svg>
);

interface DashboardClientProps {
  heroSection: any;
  autoCarouselSection: any;
  timelineSection: any;
  projectsSection: any;
  caseStudySection: any;
  servicesSection: any;
  pricingSection: any;
  faqsSection: any;
  reasonsSection: any;
  heroVideoSection: any;
  teamSection: any;
  testimonialsSection: any;
  footerSection: any;
}

export default function DashboardClient({
  heroSection,
  autoCarouselSection,
  timelineSection,
  projectsSection,
  caseStudySection,
  servicesSection,
  pricingSection,
  faqsSection,
  reasonsSection,
  heroVideoSection,
  teamSection,
  testimonialsSection,
  footerSection,
}: DashboardClientProps) {
  const [activeSection, setActiveSection] = useState<string | null>(null);

  const sectionsList = [
    {
      id: "hero",
      label: "Hero",
      data: heroSection,
      description: "Main landing banner",
      category: "Landing",
    },
    {
      id: "autoCarousel",
      label: "AutoCarousel",
      data: autoCarouselSection,
      description: "Partner logos slider",
      category: "Landing",
    },
    {
      id: "heroVideo",
      label: "HeroVideo",
      data: heroVideoSection,
      description: "Background video settings",
      category: "Media",
    },
    {
      id: "timeline",
      label: "Timeline",
      data: timelineSection,
      description: "Process steps flow",
      category: "Content",
    },
    {
      id: "projects",
      label: "Projects",
      data: projectsSection,
      description: "Video portfolio grid",
      category: "Content",
    },
    {
      id: "caseStudy",
      label: "Case Study",
      data: caseStudySection,
      description: "In-depth project showcases",
      category: "Content",
    },
    {
      id: "testimonials",
      label: "Testimonials",
      data: testimonialsSection,
      description: "Client feedback section",
      category: "Content",
    },
    {
      id: "services",
      label: "Services",
      data: servicesSection,
      description: "Service offerings cards",
      category: "Details",
    },
    {
      id: "reasons",
      label: "Reasons",
      data: reasonsSection,
      description: "Why Ophis comparison",
      category: "Details",
    },
    {
      id: "pricing",
      label: "Pricing",
      data: pricingSection,
      description: "Pricing plan tables",
      category: "Sales",
    },
    {
      id: "faqs",
      label: "Faqs",
      data: faqsSection,
      description: "Commonly asked questions",
      category: "Sales",
    },
    {
      id: "team",
      label: "Team",
      data: teamSection,
      description: "Meet our brains section",
      category: "Global",
    },
    {
      id: "footer",
      label: "Footer",
      data: footerSection,
      description: "Social & Contact links",
      category: "Global",
    },
  ];

  const currentSection = sectionsList.find((s) => s.id === activeSection);

  const renderEditor = () => {
    switch (activeSection) {
      case "hero":
        return (
          <HeroEditor
            sectionId={heroSection.id}
            initialData={heroSection.content?.data}
          />
        );
      case "autoCarousel":
        return (
          <AutoCarouselEditor
            sectionId={autoCarouselSection.id}
            initialData={autoCarouselSection.content?.data}
          />
        );
      case "timeline":
        return (
          <TimelineEditor
            sectionId={timelineSection.id}
            initialData={timelineSection.content?.data}
          />
        );
      case "projects":
        return (
          <ProjectsEditor
            sectionId={projectsSection.id}
            initialData={projectsSection.content?.data}
          />
        );
      case "caseStudy":
        return (
          <CaseStudyEditor
            sectionId={caseStudySection.id}
            initialData={caseStudySection.content?.data}
          />
        );
      case "services":
        return (
          <ServicesEditor
            sectionId={servicesSection.id}
            initialData={servicesSection.content?.data}
          />
        );
      case "testimonials":
        return (
          <TestimonialsEditor
            sectionId={testimonialsSection.id}
            initialData={testimonialsSection.content?.data}
          />
        );
      case "pricing":
        return (
          <PricingEditor
            sectionId={pricingSection.id}
            initialData={pricingSection.content?.data}
          />
        );
      case "reasons":
        return (
          <ReasonsEditor
            sectionId={reasonsSection.id}
            initialData={reasonsSection.content?.data}
          />
        );
      case "heroVideo":
        return (
          <HeroVideoEditor
            sectionId={heroVideoSection.id}
            initialData={heroVideoSection.content?.data}
          />
        );
      case "team":
        return (
          <TeamEditor
            sectionId={teamSection.id}
            initialData={teamSection.content?.data}
          />
        );
      case "faqs":
        return (
          <FaqsEditor
            sectionId={faqsSection.id}
            initialData={faqsSection.content?.data}
          />
        );
      case "footer":
        return (
          <FooterEditor
            sectionId={footerSection.id}
            initialData={footerSection.content?.data}
          />
        );
      default:
        return null;
    }
  };

  return (
    <div className="flex h-screen bg-[#0a0510] text-white overflow-hidden selection:bg-purple-500/30">
      {/* Background Effects */}
      <div className="fixed top-[-10%] left-[-10%] w-[40%] h-[40%] bg-purple-900/20 blur-[120px] rounded-full pointer-events-none" />
      <div className="fixed bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-blue-900/10 blur-[120px] rounded-full pointer-events-none" />

      {/* --- SIDEBAR NAVIGATION --- */}
      <aside className="w-72 border-r border-white/10 bg-black/40 backdrop-blur-3xl flex flex-col z-20 relative">
        <div className="p-8 border-b border-white/10 flex items-center gap-3">
          <Image
            src="/imgs/logo.png"
            alt="Ophis"
            width={90}
            height={35}
            className="brightness-125"
          />
          {/* <span className="text-[10px] bg-purple-500/20 text-purple-400 px-2 py-0.5 rounded-md border border-purple-500/30 font-bold uppercase tracking-tighter">
            Admin
          </span> */}
        </div>

        <nav className="flex-1 overflow-y-auto p-4 space-y-8 custom-scrollbar">
          <div>
            <p className="text-[10px] uppercase tracking-[0.2em] text-white/30 font-bold mb-4 px-3">
              Main Menu
            </p>
            <button
              onClick={() => setActiveSection(null)}
              className={
                `w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-300 ` +
                (!activeSection
                  ? "bg-purple-600 text-white shadow-lg shadow-purple-900/40"
                  : "text-white/50 hover:bg-white/5 hover:text-white")
              }
            >
              <LayoutIcon />
              <span className="text-sm font-semibold tracking-wide">
                Overview
              </span>
            </button>
          </div>

          <div>
            <p className="text-[10px] uppercase tracking-[0.2em] text-white/30 font-bold mb-4 px-3">
              Components
            </p>
            <div className="space-y-1">
              {sectionsList.map((section) => (
                <button
                  key={section.id}
                  onClick={() => setActiveSection(section.id)}
                  className={
                    `w-full flex items-center justify-between px-4 py-2.5 rounded-lg text-sm transition-all duration-200 group ` +
                    (activeSection === section.id
                      ? "bg-purple-600 text-white shadow-lg shadow-purple-900/40"
                      : "text-white/50 hover:text-purple-600 hover:bg-white")
                  }
                >
                  <span className="truncate font-medium">{section.label}</span>
                  {activeSection === section.id && (
                    <div className="w-1.5 h-1.5 rounded-full bg-white shadow-[0_0_10px_#a855f7]" />
                  )}
                </button>
              ))}
            </div>
          </div>
        </nav>

        {/* <div className="p-6 border-t border-white/10">
          <div className="bg-white/5 p-4 rounded-2xl border border-white/5 flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-purple-500 to-blue-500" />
            <div>
              <p className="text-[10px] font-bold text-white/90">
                IT Student Admin
              </p>
              <p className="text-[9px] text-white/40 uppercase tracking-tighter">
                System Online
              </p>
            </div>
          </div>
        </div> */}
      </aside>

      {/* --- MAIN WORKSPACE --- */}
      <main className="flex-1 relative overflow-y-auto custom-scrollbar bg-[#0a0510]/50 backdrop-blur-sm">
        {/* <div className="max-w-5xl mx-auto px-10 py-16"> */}
        <div className="mx-auto px-10 py-16">
          {!activeSection ? (
            /* GRID VIEW */
            <div className="animate-in fade-in slide-in-from-bottom-6 duration-700">
              <header className="mb-12">
                <h1 className="text-5xl font-bold tracking-tight mb-3 bg-gradient-to-r from-white to-white/40 bg-clip-text text-transparent">
                  Sections
                </h1>
                <p className="text-lg text-white/40 font-medium">
                  Configure and update your landing page content.
                </p>
              </header>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                {sectionsList.map((section) => (
                  <button
                    key={section.id}
                    onClick={() => setActiveSection(section.id)}
                    className="group relative flex flex-col p-7 rounded-[2rem] border border-white/10 bg-white/5 hover:bg-purple-900/10 hover:border-purple-500/50 transition-all duration-500 text-left overflow-hidden shadow-2xl shadow-black/20"
                  >
                    <div className="absolute top-0 right-0 w-32 h-32 bg-purple-500/10 blur-[40px] opacity-0 group-hover:opacity-100 transition-opacity" />

                    <div className="flex justify-between items-start mb-6">
                      <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center text-white/60 border border-white/10 group-hover:bg-purple-600 group-hover:text-white group-hover:border-purple-400 transition-all duration-300">
                        <SectionIcon />
                      </div>
                      {/* <span className="text-[9px] font-bold text-white/20 uppercase tracking-[0.2em]">
                        {section.category}
                      </span> */}
                    </div>

                    <h3 className="text-xl font-bold group-hover:text-white transition-colors">
                      {section.label}
                    </h3>
                    <p className="text-sm text-white/40 mt-2 leading-relaxed font-medium">
                      {section.description}
                    </p>

                    <div className="mt-6 flex items-center gap-2 text-purple-400 text-[10px] font-bold uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-all translate-x-[-10px] group-hover:translate-x-0">
                      Edit Content <span className="text-lg">→</span>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          ) : (
            /* EDITOR VIEW */
            <div className="animate-in fade-in zoom-in-[0.98] duration-500">
              <div className="flex items-end justify-between mb-10">
                <div>
                  <nav className="flex items-center gap-2 text-[10px] font-bold text-purple-400 uppercase tracking-widest mb-3">
                    <button
                      onClick={() => setActiveSection(null)}
                      className="hover:text-purple-300 transition-colors"
                    >
                      Overview
                    </button>
                    <span className="text-white/20">/</span>
                    <span className="text-white/60">
                      {currentSection?.category}
                    </span>
                  </nav>
                  <h2 className="text-5xl font-bold tracking-tight">
                    {currentSection?.label}
                  </h2>
                </div>

                <button
                  onClick={() => setActiveSection(null)}
                  className="px-5 py-2.5 rounded-full bg-white/5 border border-white/10 text-xs font-bold hover:bg-white/10 hover:border-white/20 transition-all"
                >
                  Close Editor
                </button>
              </div>

              <div className="bg-black/40 border border-white/10 rounded-[2.5rem] p-10 backdrop-blur-3xl shadow-[0_20px_50px_rgba(0,0,0,0.5)] relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-purple-500/5 blur-[80px] -z-10" />
                {renderEditor()}
              </div>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}
