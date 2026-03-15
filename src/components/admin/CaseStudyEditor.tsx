"use client";

import { useState, FormEvent } from "react";
import { CaseStudyData, CaseStudyProject, CaseStudyBlock } from "@/types/CaseStudy.type";

// --- Helpers để tạo block rỗng ---
// Khi tạo block nhiều ảnh, ta cần khởi tạo sẵn mảng rỗng tương ứng
const createBlock = (type: CaseStudyBlock["type"]): CaseStudyBlock => {
  switch (type) {
    case "textblock": return { type: "textblock", content: "" };
    case "image": return { type: "image", src: "", alt: "" };
    case "video": return { type: "video", src: "", poster: "" };
    case "twoImages": return { type: "twoImages", images: Array(2).fill({ src: "", alt: "" }) };
    case "compareFourImages": return { type: "compareFourImages", images: Array(4).fill({ src: "", alt: "" }) };
    case "compareFiveImages": return { type: "compareFiveImages", images: Array(5).fill({ src: "", alt: "" }) };
    case "compareSevenImages": return { type: "compareSevenImages", images: Array(7).fill({ src: "", alt: "" }) };
    default: return { type: "textblock", content: "" };
  }
};

interface EditorProps {
  sectionId: string;
  initialData: CaseStudyData | null;
}

export default function CaseStudyEditor({ sectionId, initialData }: EditorProps) {
  const [title, setTitle] = useState(initialData?.title ?? "Case Studies");
  const [projects, setProjects] = useState<CaseStudyProject[]>(initialData?.projects || []);
  
  const [saving, setSaving] = useState(false);
  const [message, setMessage] = useState<string | null>(null);

  // --- Logic quản lý Projects ---
  function addProject() {
    setProjects(prev => [...prev, { 
      title: "New Project", 
      image: { src: "", alt: "" }, 
      content: [] 
    }]);
  }

  function removeProject(index: number) {
    if (confirm("Are you sure you want to delete this project?")) {
      setProjects(prev => prev.filter((_, i) => i !== index));
    }
  }

  function updateProjectHeader(index: number, field: string, value: any) {
    setProjects(prev => prev.map((p, i) => {
      if (i !== index) return p;
      if (field === "src" || field === "alt") {
        return { ...p, image: { ...p.image, [field]: value } };
      }
      return { ...p, [field]: value };
    }));
  }

  // --- Logic quản lý Blocks ---
  function addBlock(pIndex: number, type: CaseStudyBlock["type"]) {
    setProjects(prev => prev.map((p, i) => 
      i === pIndex ? { ...p, content: [...p.content, createBlock(type)] } : p
    ));
  }

  function removeBlock(pIndex: number, bIndex: number) {
    setProjects(prev => prev.map((p, i) => 
      i === pIndex ? { ...p, content: p.content.filter((_, bi) => bi !== bIndex) } : p
    ));
  }

  // Update text, single image, video
  function updateSimpleBlock(pIndex: number, bIndex: number, field: string, value: string) {
    setProjects(prev => prev.map((p, i) => {
      if (i !== pIndex) return p;
      const newContent = [...p.content];
      // @ts-ignore
      newContent[bIndex] = { ...newContent[bIndex], [field]: value };
      return { ...p, content: newContent };
    }));
  }

  // Update array images (for 2, 4, 5, 7 images)
  function updateMultiImageBlock(pIndex: number, bIndex: number, imgIndex: number, field: "src" | "alt", value: string) {
    setProjects(prev => prev.map((p, i) => {
      if (i !== pIndex) return p;
      const newContent = [...p.content];
      const block = newContent[bIndex] as any; // Cast as any for easier dynamic access
      
      const newImages = [...block.images];
      newImages[imgIndex] = { ...newImages[imgIndex], [field]: value };
      
      newContent[bIndex] = { ...block, images: newImages };
      return { ...p, content: newContent };
    }));
  }

async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setSaving(true);
    setMessage(null);

    try {
      // This sends the data to the exact same API route your PricingEditor uses
      const res = await fetch(`/api/sections/${sectionId}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          data: {
            title,
            projects,
          },
        }),
      });

      if (!res.ok) {
        throw new Error("Failed to save changes");
      }

      setMessage("Case Study content updated!");
    } catch (err) {
      console.error(err);
      setMessage("Something went wrong.");
    } finally {
      setSaving(false);
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-8 p-6 bg-[#111] text-white rounded-xl border border-white/10 text-sm">
      
      {/* Title Section */}
      <div className="border-b border-white/10 pb-6">
        <label className="block text-xs font-bold uppercase text-white/50 mb-2">Section Title</label>
        <input 
          value={title} 
          onChange={e => setTitle(e.target.value)} 
          className="w-full bg-black/30 border border-white/20 rounded px-3 py-2 text-lg font-bold outline-none focus:border-purple-500"
        />
      </div>

      {/* Projects List */}
      <div className="space-y-12">
        {projects.map((proj, pIndex) => (
          <div key={pIndex} className="bg-white/5 rounded-xl border border-white/10 overflow-hidden">
            
            {/* Project Header Bar */}
            <div className="bg-white/5 p-4 flex justify-between items-center border-b border-white/10">
              <span className="font-bold text-purple-300">Project #{pIndex + 1}</span>
              <button 
                type="button" 
                onClick={() => removeProject(pIndex)}
                className="text-xs font-bold text-red-400 hover:text-red-300 border border-red-500/30 px-3 py-1 rounded bg-red-500/10"
              >
                Delete Project
              </button>
            </div>

            <div className="p-4 space-y-4">
              {/* Project Info Inputs */}
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label className="text-xs text-white/50">Project Name</label>
                  <input 
                    value={proj.title} 
                    onChange={e => updateProjectHeader(pIndex, "title", e.target.value)}
                    className="w-full bg-black/50 border border-white/10 rounded px-3 py-2 outline-none focus:border-purple-500"
                  />
                </div>
                <div className="space-y-1">
                  <label className="text-xs text-white/50">Project Link</label>
                  <input 
                    value={proj.projectLink || ""} 
                    onChange={e => updateProjectHeader(pIndex, "projectLink", e.target.value)}
                    className="w-full bg-black/50 border border-white/10 rounded px-3 py-2 outline-none focus:border-purple-500"
                    placeholder="https://..."
                  />
                </div>
                <div className="col-span-2 space-y-1">
                  <label className="text-xs text-white/50">Hero Image URL</label>
                  <input 
                    value={proj.image.src} 
                    onChange={e => updateProjectHeader(pIndex, "src", e.target.value)}
                    className="w-full bg-black/50 border border-white/10 rounded px-3 py-2 outline-none focus:border-purple-500"
                  />
                </div>
              </div>

              {/* --- CONTENT BLOCKS AREA --- */}
              <div className="mt-8 space-y-4 pl-4 border-l-2 border-purple-500/20">
                <div className="text-xs font-bold uppercase text-white/40 tracking-widest">Content Blocks</div>

                {proj.content.map((block, bIndex) => (
                  <div key={bIndex} className="relative bg-black/40 rounded border border-white/10 p-4 group">
                    
                    {/* Block Header (Type + Delete) */}
                    <div className="flex justify-between items-center mb-3">
                      <span className="text-[10px] font-bold uppercase bg-white/10 px-2 py-0.5 rounded text-white/70">
                        {block.type}
                      </span>
                      <button 
                        type="button" 
                        onClick={() => removeBlock(pIndex, bIndex)}
                        className="text-[10px] text-red-400 hover:underline"
                      >
                        Remove Block
                      </button>
                    </div>

                    {/* --- INPUTS BASED ON TYPE --- */}
                    
                    {/* 1. TEXT */}
                    {block.type === "textblock" && (
                      <textarea 
                        rows={4}
                        value={block.content}
                        onChange={e => updateSimpleBlock(pIndex, bIndex, "content", e.target.value)}
                        className="w-full bg-transparent border border-white/20 rounded p-2 text-sm focus:border-purple-500 outline-none"
                        placeholder="Type content here..."
                      />
                    )}

                    {/* 2. SINGLE IMAGE & VIDEO */}
                    {(block.type === "image" || block.type === "video") && (
                      <div className="space-y-2">
                        <input 
                          placeholder="Source URL (src)..."
                          value={block.src}
                          onChange={e => updateSimpleBlock(pIndex, bIndex, "src", e.target.value)}
                          className="w-full bg-black/50 border border-white/10 rounded px-2 py-1.5 text-xs focus:border-purple-500 outline-none"
                        />
                         {block.type === "image" && (
                           <input 
                            placeholder="Alt text..."
                            value={block.alt}
                            onChange={e => updateSimpleBlock(pIndex, bIndex, "alt", e.target.value)}
                            className="w-full bg-black/50 border border-white/10 rounded px-2 py-1.5 text-xs focus:border-purple-500 outline-none"
                          />
                         )}
                         {block.type === "video" && (
                           <input 
                            placeholder="Poster image URL (optional)..."
                            value={block.poster || ""}
                            onChange={e => updateSimpleBlock(pIndex, bIndex, "poster", e.target.value)}
                            className="w-full bg-black/50 border border-white/10 rounded px-2 py-1.5 text-xs focus:border-purple-500 outline-none"
                          />
                         )}
                      </div>
                    )}

                    {/* 3. MULTI IMAGES (2, 4, 5, 7) */}
                    {(block.type === "twoImages" || block.type === "compareFourImages" || block.type === "compareFiveImages" || block.type === "compareSevenImages") && (
                      <div className="grid grid-cols-2 gap-2">
                        {block.images.map((img, i) => (
                          <div key={i} className="bg-white/5 p-2 rounded border border-white/5 space-y-1">
                            <span className="text-[10px] text-white/30 block">Image {i + 1}</span>
                            <input 
                              placeholder="URL..." 
                              value={img.src} 
                              onChange={e => updateMultiImageBlock(pIndex, bIndex, i, "src", e.target.value)}
                              className="w-full bg-black border border-white/10 rounded px-2 py-1 text-xs outline-none focus:border-purple-500" 
                            />
                            <input 
                              placeholder="Alt..." 
                              value={img.alt} 
                              onChange={e => updateMultiImageBlock(pIndex, bIndex, i, "alt", e.target.value)}
                              className="w-full bg-black border border-white/10 rounded px-2 py-1 text-xs outline-none focus:border-purple-500" 
                            />
                          </div>
                        ))}
                      </div>
                    )}

                  </div>
                ))}

                {/* --- ADD BLOCK TOOLBAR --- */}
                <div className="flex flex-wrap gap-2 pt-2">
                  <span className="text-xs text-white/40 self-center mr-2">Add Content:</span>
                  {[
                    { label: "+ Text", type: "textblock" },
                    { label: "+ 1 Img", type: "image" },
                    { label: "+ 2 Imgs", type: "twoImages" },
                    { label: "+ Video", type: "video" },
                    { label: "+ 4 Imgs", type: "compareFourImages" },
                    { label: "+ 5 Imgs", type: "compareFiveImages" },
                    { label: "+ 7 Imgs", type: "compareSevenImages" },
                  ].map((btn) => (
                    <button
                      key={btn.type}
                      type="button"
                      onClick={() => addBlock(pIndex, btn.type as any)}
                      className="px-3 py-1.5 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/30 rounded text-xs text-white transition-colors"
                    >
                      {btn.label}
                    </button>
                  ))}
                </div>

              </div>
            </div>
          </div>
        ))}

        {/* Add Project Button */}
        <button 
          type="button" 
          onClick={addProject}
          className="w-full py-3 border-2 border-dashed border-white/20 rounded-xl text-white/50 hover:text-white hover:border-white/40 hover:bg-white/5 transition-all text-sm font-bold uppercase"
        >
          + Add New Project
        </button>
      </div>

      {/* Footer Actions */}
      <div className="sticky bottom-0 bg-[#111] pt-4 border-t border-white/10 flex justify-between items-center z-10">
        <div className="text-xs font-bold text-emerald-400">
          {message}
        </div>
        <button 
          type="submit" 
          disabled={saving}
          className="bg-purple-600 hover:bg-purple-500 text-white font-bold py-2 px-8 rounded shadow-lg disabled:opacity-50"
        >
          {saving ? "Saving..." : "Save Changes"}
        </button>
      </div>
    </form>
  );
}