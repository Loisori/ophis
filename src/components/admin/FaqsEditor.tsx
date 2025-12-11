"use client";

import { useState, FormEvent } from "react";

type FaqItem = {
  question: string;
  answer: string;
};

type FaqData = {
  headline?: string;
  subheadline?: string;
  items?: FaqItem[];
};

interface FaqsEditorProps {
  sectionId: string;
  initialData: FaqData | null;
}

export default function FaqsEditor({ sectionId, initialData }: FaqsEditorProps) {
  const [headline, setHeadline] = useState(initialData?.headline ?? "Frequently asked questions");
  const [subheadline, setSubheadline] = useState(initialData?.subheadline ?? "FAQ's");

  // Default to one empty item if nothing exists
  const [items, setItems] = useState<FaqItem[]>(
    initialData?.items && initialData.items.length > 0
      ? initialData.items
      : [
          {
            question: "Who is this service designed for?",
            answer: "This service is perfect for content creators...",
          },
        ]
  );

  const [saving, setSaving] = useState(false);
  const [message, setMessage] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  // --- Actions ---

  const addItem = () => {
    setItems((prev) => [...prev, { question: "", answer: "" }]);
  };

  const removeItem = (index: number) => {
    setItems((prev) => prev.filter((_, i) => i !== index));
  };

  const updateItem = (index: number, field: keyof FaqItem, value: string) => {
    setItems((prev) => {
      const newItems = [...prev];
      newItems[index] = { ...newItems[index], [field]: value };
      return newItems;
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
            headline,
            subheadline,
            items,
          },
        }),
      });

      if (!res.ok) {
        const json = await res.json().catch(() => ({}));
        setError(json.error ?? "Failed to save changes");
      } else {
        setMessage("FAQs updated successfully");
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
      {/* Headlines */}
      <div className="grid grid-cols-2 gap-4">
        <div className="space-y-1">
          <label className="block text-xs font-semibold uppercase tracking-wide text-white/70">
            Small Label
          </label>
          <input
            type="text"
            value={subheadline}
            onChange={(e) => setSubheadline(e.target.value)}
            className="w-full rounded-lg border border-white/20 bg-black/30 px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-purple-400"
          />
        </div>
        <div className="space-y-1">
          <label className="block text-xs font-semibold uppercase tracking-wide text-white/70">
            Main Headline
          </label>
          <input
            type="text"
            value={headline}
            onChange={(e) => setHeadline(e.target.value)}
            className="w-full rounded-lg border border-white/20 bg-black/30 px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-purple-400"
          />
        </div>
      </div>

      <hr className="border-white/10" />

      {/* Items List */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h3 className="text-xl font-semibold">Questions List</h3>
          <button
            type="button"
            onClick={addItem}
            className="text-xs bg-white/10 hover:bg-white/20 px-3 py-1.5 rounded transition-colors"
          >
            + Add Question
          </button>
        </div>

        <div className="space-y-3">
          {items.map((item, index) => (
            <div
              key={index}
              className="relative rounded-lg bg-white/5 p-3 border border-white/10 space-y-3"
            >
              <div className="flex justify-between items-center text-xs text-white/40">
                <span className="font-mono">Question #{index + 1}</span>
                <button
                  type="button"
                  onClick={() => removeItem(index)}
                  className="text-red-400 hover:text-red-300 transition-colors"
                >
                  Remove
                </button>
              </div>

              <div className="space-y-1">
                <input
                  type="text"
                  value={item.question}
                  onChange={(e) => updateItem(index, "question", e.target.value)}
                  placeholder="Question text..."
                  className="w-full rounded border border-white/20 bg-black/30 px-2 py-2 text-sm font-bold outline-none focus:ring-1 focus:ring-purple-400"
                />
              </div>

              <div className="space-y-1">
                <textarea
                  value={item.answer}
                  onChange={(e) => updateItem(index, "answer", e.target.value)}
                  rows={2}
                  placeholder="Answer text..."
                  className="w-full resize-none rounded border border-white/20 bg-black/30 px-2 py-2 text-sm text-white/80 outline-none focus:ring-1 focus:ring-purple-400"
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
          {saving ? "Saving..." : "Save FAQs"}
        </button>

        <div className="text-xs font-medium">
          {message && <span className="text-emerald-400 animate-in fade-in">{message}</span>}
          {error && <span className="text-red-400 animate-in fade-in">{error}</span>}
        </div>
      </div>
    </form>
  );
}