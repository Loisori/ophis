"use client";

import { useState, FormEvent } from "react";

type HeroCard = {
  title: string;
  subtitle: string;
};

type HeroData = {
  title?: string;
  subtitle?: string;
  cards?: HeroCard[];
};

interface HeroEditorProps {
  sectionId: string;
  initialData: HeroData | null;
}

export default function HeroEditor({
  sectionId,
  initialData,
}: HeroEditorProps) {
  const [title, setTitle] = useState(initialData?.title ?? "");
  const [subtitle, setSubTitle] = useState(initialData?.subtitle ?? "");

  // Initialize cards with DB data or defaults if missing
  const [cards, setCards] = useState<HeroCard[]>(
    initialData?.cards && initialData.cards.length === 3
      ? initialData.cards
      : [
          { title: "10X Views", subtitle: "Faster lead times" },
          { title: "Cancel anytime", subtitle: "No commitment, no stress" },
          { title: "4-10 days", subtitle: "Video delivery" },
        ]
  );

  const [saving, setSaving] = useState(false);
  const [message, setMessage] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const updateCard = (index: number, field: keyof HeroCard, value: string) => {
    setCards((prev) => {
      const newCards = [...prev];
      newCards[index] = { ...newCards[index], [field]: value };
      return newCards;
    });
  };

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
            title,
            subtitle,
            cards,
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
      className="space-y-6 rounded-xl border border-white/15 bg-white/5 p-4 text-sm"
    >
      {/* Main Text Section */}
      <div className="space-y-4">
        <div className="space-y-1">
          <label className="block text-xs font-semibold uppercase tracking-wide text-white/70">
            title
          </label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full rounded-lg border border-white/20 bg-black/30 px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-purple-400"
            placeholder="Hero headline"
          />
        </div>

        <div className="space-y-1">
          <label className="block text-xs font-semibold uppercase tracking-wide text-white/70">
            subtitle
          </label>
          <textarea
            value={subtitle}
            onChange={(e) => setSubTitle(e.target.value)}
            rows={4}
            className="w-full resize-none rounded-lg border border-white/20 bg-black/30 px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-purple-400"
            placeholder="Hero subheadline"
          />
        </div>
      </div>

      <hr className="border-white/10" />

      <div className="space-y-4">
        <h3 className="text-xl font-semibold">Glass Cards (3 Items)</h3>

        <div className="grid gap-4 sm:grid-cols-3">
          {cards.map((card, index) => (
            <div
              key={index}
              className="space-y-2 rounded-lg bg-white/5 p-3 border border-white/10"
            >
              <div className="text-xs text-white/50 font-mono mb-2">
                Card #{index + 1}
              </div>

              <div className="space-y-1">
                <label className="block text-[0.65rem] uppercase text-white/60">
                  Title
                </label>
                <input
                  type="text"
                  value={card.title}
                  onChange={(e) => updateCard(index, "title", e.target.value)}
                  className="w-full rounded border border-white/20 bg-black/30 px-2 py-1 text-xs outline-none focus:ring-1 focus:ring-purple-400"
                />
              </div>

              <div className="space-y-1">
                <label className="block text-[0.65rem] uppercase text-white/60">
                  Subtitle
                </label>
                <input
                  type="text"
                  value={card.subtitle}
                  onChange={(e) =>
                    updateCard(index, "subtitle", e.target.value)
                  }
                  className="w-full rounded border border-white/20 bg-black/30 px-2 py-1 text-xs outline-none focus:ring-1 focus:ring-purple-400"
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Action Bar */}
      <div className="flex items-center justify-between gap-3 pt-2">
        <button
          type="submit"
          disabled={saving}
          className="rounded-lg bg-purple-500 px-4 py-2 text-xs font-semibold uppercase tracking-wide hover:bg-purple-400 disabled:opacity-60 transition-colors"
        >
          {saving ? "Saving..." : "Save"}
        </button>

        <div className="text-xs font-medium">
          {message && (
            <span className="text-emerald-400 animate-in fade-in">
              {message}
            </span>
          )}
          {error && (
            <span className="text-red-400 animate-in fade-in">{error}</span>
          )}
        </div>
      </div>
    </form>
  );
}
