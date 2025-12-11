"use client";

import { useState, FormEvent } from "react";

type ReasonsData = {
  headline?: string;
  description?: string;
  ophisFeatures?: string[];
  othersFeatures?: string[];
};

interface ReasonsEditorProps {
  sectionId: string;
  initialData: ReasonsData | null;
}

export default function ReasonsEditor({ sectionId, initialData }: ReasonsEditorProps) {
  const [headline, setHeadline] = useState(
    initialData?.headline ?? "Why Ophis is the right choice?"
  );
  const [description, setDescription] = useState(
    initialData?.description ??
      "We bring you all the advantages of having a full in-house editing team - without the overhead or hassle."
  );

  // We manage lists as simple strings (one item per line) for easy editing
  const [ophisText, setOphisText] = useState(
    initialData?.ophisFeatures?.join("\n") ?? 
    "Fair, transparent pricing\nDedicated creative team\nExpert in-house editors"
  );
  
  const [othersText, setOthersText] = useState(
    initialData?.othersFeatures?.join("\n") ?? 
    "Hourly or per-project pricing\nNo dedicated editing team\nOutsourced to average talent"
  );

  const [saving, setSaving] = useState(false);
  const [message, setMessage] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(event: FormEvent) {
    event.preventDefault();
    setSaving(true);
    setMessage(null);
    setError(null);

    // Convert newlines to arrays
    const ophisFeatures = ophisText.split("\n").filter(line => line.trim() !== "");
    const othersFeatures = othersText.split("\n").filter(line => line.trim() !== "");

    try {
      const res = await fetch(`/api/sections/${sectionId}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          data: {
            headline,
            description,
            ophisFeatures,
            othersFeatures,
          },
        }),
      });

      if (!res.ok) {
        const json = await res.json().catch(() => ({}));
        setError(json.error ?? "Failed to save changes");
      } else {
        setMessage("Reasons section updated");
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
      {/* Header Info */}
      <div className="space-y-4">
        <div className="space-y-1">
          <label className="block text-xs font-semibold uppercase tracking-wide text-white/70">
            Headline
          </label>
          <input
            type="text"
            value={headline}
            onChange={(e) => setHeadline(e.target.value)}
            className="w-full rounded-lg border border-white/20 bg-black/30 px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-purple-400"
          />
        </div>

        <div className="space-y-1">
          <label className="block text-xs font-semibold uppercase tracking-wide text-white/70">
            Description
          </label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            rows={3}
            className="w-full resize-none rounded-lg border border-white/20 bg-black/30 px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-purple-400"
          />
        </div>
      </div>

      <hr className="border-white/10" />

      {/* Comparison Lists */}
      <div className="grid md:grid-cols-2 gap-6">
        
        {/* Left Column (Good/Ophis) */}
        <div className="space-y-2">
          <label className="block text-xs font-bold uppercase tracking-wide text-cyan-400">
            Ophis Features (Green List)
          </label>
          <p className="text-[10px] text-white/40">One feature per line.</p>
          <textarea
            value={ophisText}
            onChange={(e) => setOphisText(e.target.value)}
            rows={10}
            className="w-full resize-none rounded-lg border border-white/20 bg-black/30 px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-cyan-400 leading-loose"
          />
        </div>

        {/* Right Column (Bad/Others) */}
        <div className="space-y-2">
          <label className="block text-xs font-bold uppercase tracking-wide text-gray-400">
            Other Agencies (Gray List)
          </label>
          <p className="text-[10px] text-white/40">One feature per line.</p>
          <textarea
            value={othersText}
            onChange={(e) => setOthersText(e.target.value)}
            rows={10}
            className="w-full resize-none rounded-lg border border-white/20 bg-black/30 px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-gray-400 leading-loose"
          />
        </div>

      </div>

      {/* Action Bar */}
      <div className="flex items-center justify-between gap-3 pt-2">
        <button
          type="submit"
          disabled={saving}
          className="rounded-lg bg-purple-500 px-4 py-2 text-xs font-semibold uppercase tracking-wide hover:bg-purple-400 disabled:opacity-60 transition-colors"
        >
          {saving ? "Saving..." : "Save Changes"}
        </button>

        <div className="text-xs font-medium">
          {message && <span className="text-emerald-400 animate-in fade-in">{message}</span>}
          {error && <span className="text-red-400 animate-in fade-in">{error}</span>}
        </div>
      </div>
    </form>
  );
}