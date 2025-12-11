"use client";

import { useState, FormEvent } from "react";

type HeroVideoData = {
  videoUrl?: string;
};

interface HeroVideoEditorProps {
  sectionId: string;
  initialData: HeroVideoData | null;
}

export default function HeroVideoEditor({ sectionId, initialData }: HeroVideoEditorProps) {
  const [videoUrl, setVideoUrl] = useState(
    initialData?.videoUrl ??
    "https://res.cloudinary.com/dhxrsiqip/video/upload/v1764155115/Ophis_Intro_v01_xqoqrd.mp4"
  );

  const [saving, setSaving] = useState(false);
  const [message, setMessage] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(event: FormEvent) {
    event.preventDefault();
    setSaving(true);
    setMessage(null);
    setError(null);

    try {
      const res = await fetch(`/api/sections/${sectionId}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          data: {
            videoUrl,
          },
        }),
      });

      if (!res.ok) {
        const json = await res.json().catch(() => ({}));
        setError(json.error ?? "Failed to save changes");
      } else {
        setMessage("Video updated successfully");
      }
    } catch (err) {
      console.error(err);
      setError("Something went wrong.");
    } finally {
      setSaving(false);
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-6 rounded-xl border border-white/15 bg-white/5 p-4 text-sm"
    >
      <div className="space-y-4">
        <div className="space-y-1">
          <label className="block text-xs font-semibold uppercase tracking-wide text-white/70">
            Video Source URL (MP4)
          </label>
          <input
            type="text"
            value={videoUrl}
            onChange={(e) => setVideoUrl(e.target.value)}
            placeholder="https://..."
            className="w-full rounded-lg border border-white/20 bg-black/30 px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-purple-400 font-mono text-white/80"
          />
          <p className="text-[10px] text-white/40">
            Paste a direct link to an MP4 file (Cloudinary, AWS S3, etc).
          </p>
        </div>

        {/* Live Preview */}
        <div className="space-y-1">
          <label className="block text-xs font-semibold uppercase tracking-wide text-white/70">
            Preview
          </label>
          <div className="relative aspect-video w-full overflow-hidden rounded-lg border border-white/10 bg-black/50">
            {videoUrl ? (
              <video
                src={videoUrl}
                className="w-full h-full object-cover"
                controls
                muted
              />
            ) : (
              <div className="flex h-full items-center justify-center text-white/30">
                No video URL provided
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Action Bar */}
      <div className="flex items-center justify-between gap-3 pt-2">
        <button
          type="submit"
          disabled={saving}
          className="rounded-lg bg-purple-500 px-4 py-2 text-xs font-semibold uppercase tracking-wide hover:bg-purple-400 disabled:opacity-60 transition-colors"
        >
          {saving ? "Saving..." : "Save Video"}
        </button>

        <div className="text-xs font-medium">
          {message && <span className="text-emerald-400 animate-in fade-in">{message}</span>}
          {error && <span className="text-red-400 animate-in fade-in">{error}</span>}
        </div>
      </div>
    </form>
  );
}