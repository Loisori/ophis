"use client";

import { useState, FormEvent } from "react";
import { TestimonialsData, TestimonialItem } from "@/types/Testimonials.type";
import { DEFAULT_TESTIMONIALS_DATA } from "@/constants/defaults";

interface TestimonialsEditorProps {
  sectionId: string;
  initialData: TestimonialsData | null;
}

export default function TestimonialsEditor({
  sectionId,
  initialData,
}: TestimonialsEditorProps) {
  const [title, setTitle] = useState(
    initialData?.title ?? DEFAULT_TESTIMONIALS_DATA.title,
  );
  const [subtitle, setSubtitle] = useState(
    initialData?.subtitle ?? DEFAULT_TESTIMONIALS_DATA.subtitle,
  );

  const [items, setItems] = useState<TestimonialItem[]>(
    initialData?.items && initialData.items.length > 0
      ? initialData.items
      : DEFAULT_TESTIMONIALS_DATA.items!,
  );

  const [saving, setSaving] = useState(false);
  const [message, setMessage] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  // --- Actions ---

  const addItem = () => {
    setItems((prev) => [...prev, { name: "", content: "" }]);
  };

  const removeItem = (index: number) => {
    setItems((prev) => prev.filter((_, i) => i !== index));
  };

  const updateItem = (
    index: number,
    field: keyof TestimonialItem,
    value: string,
  ) => {
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
            title,
            subtitle,
            items,
          },
        }),
      });

      if (!res.ok) {
        const json = await res.json().catch(() => ({}));
        setError(json.error ?? "Failed to save changes");
      } else {
        setMessage("Testimonials updated successfully");
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
      <div className="space-y-4">
        <div className="space-y-1">
          <label className="block text-small font-semibold uppercase tracking-wide text-white/70">
            Section Title
          </label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full rounded-lg border border-white/20 bg-black/30 px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-purple-400"
          />
        </div>
        <div className="space-y-1">
          <label className="block text-small font-semibold uppercase tracking-wide text-white/70">
            Subtitle / Description
          </label>
          <input
            type="text"
            value={subtitle}
            onChange={(e) => setSubtitle(e.target.value)}
            className="w-full rounded-lg border border-white/20 bg-black/30 px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-purple-400"
          />
        </div>
      </div>

      <hr className="border-white/10" />

      {/* Items List */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <label className="text-small font-semibold uppercase tracking-wide text-white/70">
            Testimonials
          </label>
          <button
            type="button"
            onClick={addItem}
            className="text-small bg-white/10 hover:bg-white/20 px-3 py-1.5 rounded transition-colors"
          >
            + Add Review
          </button>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          {items.map((item, index) => (
            <div
              key={index}
              className="relative space-y-3 rounded-lg bg-white/5 p-3 border border-white/10"
            >
              <div className="flex justify-between items-center text-small text-white/40">
                <span className="font-mono">Review #{index + 1}</span>
                <button
                  type="button"
                  onClick={() => removeItem(index)}
                  className="text-red-400 hover:text-red-300 transition-colors"
                >
                  Remove
                </button>
              </div>

              <div className="space-y-1">
                <label className="block text-[0.65rem] uppercase text-white/60">
                  Client Name
                </label>
                <input
                  type="text"
                  value={item.name}
                  onChange={(e) => updateItem(index, "name", e.target.value)}
                  placeholder="e.g. John Doe"
                  className="w-full rounded border border-white/20 bg-black/30 px-2 py-1 text-sm outline-none focus:ring-1 focus:ring-purple-400 font-bold"
                />
              </div>

              <div className="space-y-1">
                <label className="block text-[0.65rem] uppercase text-white/60">
                  Review Content
                </label>
                <textarea
                  value={item.content}
                  onChange={(e) => updateItem(index, "content", e.target.value)}
                  rows={3}
                  placeholder="What did they say?"
                  className="w-full resize-none rounded border border-white/20 bg-black/30 px-2 py-1 text-sm outline-none focus:ring-1 focus:ring-purple-400 leading-relaxed"
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
          className="rounded-lg bg-purple-500 px-4 py-2 text-small font-semibold uppercase tracking-wide hover:bg-purple-400 disabled:opacity-60 transition-colors"
        >
          {saving ? "Saving..." : "Save Testimonials"}
        </button>

        <div className="text-small font-medium">
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
