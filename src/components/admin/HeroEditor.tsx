"use client";

import { useState, FormEvent } from "react";

type HeroData = {
  headline?: string;
  subheadline?: string;
};

interface HeroEditorProps {
  sectionId: string;
  initialData: HeroData | null;
}

export default function HeroEditor({ sectionId, initialData }: HeroEditorProps) {
  const [headline, setHeadline] = useState(initialData?.headline ?? "");
  const [subheadline, setSubheadline] = useState(initialData?.subheadline ?? "");
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
            headline,
            subheadline,
          },
        }),
      });

      if (!res.ok) {
        const json = await res.json().catch(() => ({}));
        setError(json.error ?? "Failed to save changes");
      } else {
        setMessage("Hero content updated");
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
      className="space-y-4 rounded-xl border border-white/15 bg-white/5 p-4 text-sm"
    >
      <div className="space-y-1">
        <label className="block text-xs font-semibold uppercase tracking-wide text-white/70">
          Headline
        </label>
        <input
          type="text"
          value={headline}
          onChange={(e) => setHeadline(e.target.value)}
          className="w-full rounded-lg border border-white/20 bg-black/30 px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-purple-400"
          placeholder="Hero headline"
        />
      </div>

      <div className="space-y-1">
        <label className="block text-xs font-semibold uppercase tracking-wide text-white/70">
          Subheadline
        </label>
        <textarea
          value={subheadline}
          onChange={(e) => setSubheadline(e.target.value)}
          rows={4}
          className="w-full resize-none rounded-lg border border-white/20 bg-black/30 px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-purple-400"
          placeholder="Hero subheadline"
        />
      </div>

      <div className="flex items-center justify-between gap-3">
        <button
          type="submit"
          disabled={saving}
          className="rounded-lg bg-purple-500 px-4 py-2 text-xs font-semibold uppercase tracking-wide hover:bg-purple-400 disabled:opacity-60"
        >
          {saving ? "Saving..." : "Save hero"}
        </button>

        <div className="text-xs">
          {message && <span className="text-emerald-300">{message}</span>}
          {error && <span className="text-red-300">{error}</span>}
        </div>
      </div>
    </form>
  );
}


