"use client";

import { useState } from "react";
import Image from "next/image";
import HeroEditor from "@/components/admin/HeroEditor";
import AutoCarouselEditor from "@/components/admin/AutoCarouselEditor";
import TimelineEditor from "@/components/admin/TimelineEditor";
import ProjectsEditor from "@/components/admin/ProjectsEditor";
import ServicesEditor from "@/components/admin/ServicesEditor";

// --- Inline Icons ---
const BackIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m15 18-6-6 6-6"/></svg>;
const EditIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z"/></svg>;
const ChevronRight = () => <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6"/></svg>;

interface DashboardClientProps {
  heroSection: any;
  autoCarouselSection: any;
  timelineSection: any;
  projectsSection: any;
  servicesSection: any;
}

export default function DashboardClient({
  heroSection,
  autoCarouselSection,
  timelineSection,
  projectsSection,
  servicesSection,
}: DashboardClientProps) {
  const [activeSection, setActiveSection] = useState<string | null>(null);

  // Helper to define the list structure
  const sectionsList = [
    { id: "hero", label: "Hero Section", data: heroSection, position: 1, description: "Main landing banner" },
    { id: "autoCarousel", label: "Auto Carousel", data: autoCarouselSection, position: 2, description: "Partner logos slider" },
    { id: "timeline", label: "Timeline", data: timelineSection, position: 3, description: "Process steps flow" },
    { id: "projects", label: "Projects", data: projectsSection, position: 4, description: "Video portfolio grid" },
    { id: "services", label: "Services", data: servicesSection, position: 5, description: "Service offerings cards" },
  ];

  // Render the correct editor based on selection
  const renderEditor = () => {
    switch (activeSection) {
      case "hero":
        return <HeroEditor sectionId={heroSection.id} initialData={heroSection.content?.data} />;
      case "autoCarousel":
        return <AutoCarouselEditor sectionId={autoCarouselSection.id} initialData={autoCarouselSection.content?.data} />;
      case "timeline":
        return <TimelineEditor sectionId={timelineSection.id} initialData={timelineSection.content?.data} />;
      case "projects":
        return <ProjectsEditor sectionId={projectsSection.id} initialData={projectsSection.content?.data} />;
      case "services":
        return <ServicesEditor sectionId={servicesSection.id} initialData={servicesSection.content?.data} />;
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-[#0f0518] text-white font-sans selection:bg-purple-500/30">
      {/* Ambient Background */}
      <div className="fixed inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-purple-900/20 via-[#0f0518] to-[#0f0518] pointer-events-none" />

      <div className="relative z-10 max-w-5xl mx-auto px-6 py-12">
        
        {/* Header */}
        <header className="flex items-center justify-between mb-12">
          <div className="flex items-center gap-4">
             <Image src="/imgs/logo.png" alt="Ophis Logo" width={120} height={50} />
             <div className="h-6 w-px bg-white/10" />
             <span className="text-sm font-medium text-white/40 uppercase tracking-widest">Admin</span>
          </div>
        </header>

        {/* --- MAIN CONTENT --- */}
        {activeSection ? (
          // EDITOR VIEW
          <div className="animate-in fade-in slide-in-from-right-4 duration-300">
            <button 
              onClick={() => setActiveSection(null)}
              className="flex items-center gap-2 text-sm text-purple-300 hover:text-white mb-6 transition-colors group"
            >
              <BackIcon />
              <span className="group-hover:-translate-x-1 transition-transform">Back to Sections</span>
            </button>

            <div className="bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-xl">
              <div className="mb-8">
                <h2 className="text-3xl font-bold">{sectionsList.find(s => s.id === activeSection)?.label}</h2>
                <p className="text-white/50">Edit the content and settings for this section.</p>
              </div>
              {renderEditor()}
            </div>
          </div>
        ) : (
          // LIST VIEW (The "Overview List")
          <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
            <h1 className="text-3xl font-bold mb-8">Sections</h1>
            
            <div className="space-y-3">
              {sectionsList.map((section) => (
                <button
                  key={section.id}
                  onClick={() => setActiveSection(section.id)}
                  className="w-full group relative flex items-center justify-between p-5 rounded-xl border border-white/10 bg-white/5 hover:bg-purple-900/20 hover:border-purple-500/50 transition-all duration-300 text-left"
                >
                  <div className="flex items-center gap-4">
                    <div className="flex flex-col">
                      <span className="text-lg font-bold text-white group-hover:text-purple-300 transition-colors">
                        {section.label}
                      </span>
                      <span className="text-xs text-white/40 mt-1 font-mono">
                        Position {section.position} • {section.description}
                      </span>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    {section.data ? (
                      <span className="hidden sm:inline-flex px-3 py-1 rounded-full bg-white/5 text-[10px] text-white/30 font-mono border border-white/5">
                        ID: {section.data.id.slice(0, 8)}...
                      </span>
                    ) : (
                      <span className="px-3 py-1 rounded-full bg-red-500/10 text-red-400 text-xs border border-red-500/20">
                        Missing Data
                      </span>
                    )}
                    
                    <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white/40 group-hover:bg-purple-500 group-hover:text-white transition-all">
                      <ChevronRight />
                    </div>
                  </div>
                </button>
              ))}
            </div>
          </div>
        )}

      </div>
    </div>
  );
}