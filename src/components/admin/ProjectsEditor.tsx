"use client";

import { useState, FormEvent } from "react";

// --- Inline Icons ---
const PlusIcon = ({ className }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M5 12h14" />
    <path d="M12 5v14" />
  </svg>
);
const TrashIcon = ({ className }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M3 6h18" />
    <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6" />
    <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2" />
  </svg>
);
const SaveIcon = ({ className }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z" />
    <polyline points="17 21 17 13 7 13 7 21" />
    <polyline points="7 3 7 8 15 8" />
  </svg>
);
const LoaderIcon = ({ className }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M21 12a9 9 0 1 1-6.219-8.56" />
  </svg>
);

type ProjectsData = {
  title?: string;
  subtitle?: string;
  videoIds?: string[];
};

interface ProjectsEditorProps {
  sectionId: string;
  initialData: ProjectsData | null;
}

export default function ProjectsEditor({
  sectionId,
  initialData,
}: ProjectsEditorProps) {
  const [title, setTitle] = useState(initialData?.title ?? "Projects");
  const [subtitle, setSubTitle] = useState(
    initialData?.subtitle ?? "Explore our Video Editing Portfolio"
  );
  const [videoIds, setVideoIds] = useState<string[]>(
    initialData?.videoIds || []
  );

  const [saving, setSaving] = useState(false);
  const [message, setMessage] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  function updateVideoId(index: number, value: string) {
    setVideoIds((prev) => prev.map((id, i) => (i === index ? value : id)));
  }

  function addVideo() {
    setVideoIds((prev) => [...prev, ""]);
  }

  function removeVideo(index: number) {
    setVideoIds((prev) => prev.filter((_, i) => i !== index));
  }

  async function handleSubmit(event: FormEvent) {
    event.preventDefault();
    setSaving(true);
    setMessage(null);
    setError(null);

    try {
      const cleanIds = videoIds.filter((id) => id.trim() !== "");

      const res = await fetch(`/api/sections/${sectionId}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          data: {
            title,
            subtitle,
            videoIds: cleanIds,
          },
        }),
      });

      if (!res.ok) {
        const json = await res.json().catch(() => ({}));
        setError(json.error ?? "Failed to save changes");
      } else {
        setMessage("Projects updated successfully");
      }
    } catch (err) {
      console.error(err);
      setError("Something went wrong. Please try again.");
    } finally {
      setSaving(false);
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-6 rounded-xl border border-white/15 bg-white/5 p-6 text-sm"
    >
      <div className="space-y-4 border-b border-white/10 pb-6">
        <div className="space-y-1">
          <label className="block text-xs font-semibold uppercase tracking-wide text-white/70">
            Title
          </label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full rounded-lg border border-white/20 bg-black/30 px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-purple-400"
            placeholder="Projects"
          />
        </div>
        <div className="space-y-1">
          <label className="block text-xs font-semibold uppercase tracking-wide text-white/70">
            SubTitle
          </label>
          <input
            type="text"
            value={subtitle}
            onChange={(e) => setSubTitle(e.target.value)}
            className="w-full rounded-lg border border-white/20 bg-black/30 px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-purple-400"
            placeholder="Explore our Video Editing Portfolio"
          />
        </div>
      </div>
      <div className="flex items-center justify-between">
        <h3 className="text-sm font-semibold text-white/90">YouTube Videos</h3>
        <button
          type="button"
          onClick={addVideo}
          className="flex items-center gap-2 rounded-lg border border-white/25 px-3 py-1.5 text-xs font-semibold uppercase tracking-wide hover:bg-white/10 transition-colors"
        >
          <PlusIcon className="w-3 h-3" /> Add Video
        </button>
      </div>

      <div className="space-y-3">
        {videoIds.map((id, index) => (
          <div
            key={index}
            className="flex items-center gap-3 rounded-lg border border-white/15 bg-black/20 p-3"
          >
            <div className="w-8 h-8 rounded-full bg-red-600/20 text-red-500 flex items-center justify-center font-bold text-xs border border-red-500/30 shrink-0">
              {index + 1}
            </div>

            <div className="flex-1">
              <input
                type="text"
                value={id}
                onChange={(e) => updateVideoId(index, e.target.value)}
                className="w-full rounded-lg border border-white/20 bg-black/40 px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-purple-500 placeholder:text-white/20"
                placeholder="Enter YouTube Video ID (e.g. dQw4w9WgXcQ)"
              />
            </div>

            <button
              type="button"
              onClick={() => removeVideo(index)}
              className="p-2 text-gray-400 hover:text-red-400 transition-colors rounded hover:bg-white/5"
              title="Remove video"
            >
              <TrashIcon className="w-4 h-4" />
            </button>
          </div>
        ))}

        {videoIds.length === 0 && (
          <div className="text-center py-8 text-white/40 italic border-2 border-dashed border-white/10 rounded-lg">
            No videos added yet. Click "Add Video" to start.
          </div>
        )}
      </div>

      <div className="flex items-center justify-between border-t border-white/10 pt-4">
        <div className="text-xs">
          {message && (
            <span className="text-emerald-400 font-medium flex items-center gap-1">
              ✨ {message}
            </span>
          )}
          {error && (
            <span className="text-red-400 font-medium">⚠️ {error}</span>
          )}
        </div>

        <button
          type="submit"
          disabled={saving}
          className="flex items-center gap-2 rounded-lg bg-purple-600 px-6 py-2.5 text-xs font-bold uppercase tracking-wide text-white hover:bg-purple-500 disabled:opacity-50 disabled:cursor-not-allowed transition-all shadow-lg shadow-purple-900/20"
        >
          {saving ? (
            <LoaderIcon className="w-4 h-4 animate-spin" />
          ) : (
            <SaveIcon className="w-4 h-4" />
          )}
          {saving ? "Saving..." : "Save Changes"}
        </button>
      </div>
    </form>
  );
}
