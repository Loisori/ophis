"use client";

import { useState, FormEvent } from "react";

type CarouselItem = {
  name: string;
  logo: string;
  category: string;
};

type CarouselData = {
  title?: string;
  items?: CarouselItem[];
};

interface AutoCarouselEditorProps {
  sectionId: string;
  initialData: CarouselData | null;
}

export default function AutoCarouselEditor({
  sectionId,
  initialData,
}: AutoCarouselEditorProps) {
  const [title, setTitle] = useState(initialData?.title ?? "");
  const [items, setItems] = useState<CarouselItem[]>(
    initialData?.items ?? [
      { name: "", logo: "", category: "" },
      { name: "", logo: "", category: "" },
      { name: "", logo: "", category: "" },
      { name: "", logo: "", category: "" },
    ]
  );
  const [saving, setSaving] = useState(false);
  const [message, setMessage] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  function updateItem(index: number, patch: Partial<CarouselItem>) {
    setItems((prev) =>
      prev.map((item, i) => (i === index ? { ...item, ...patch } : item))
    );
  }

  function addItem() {
    setItems((prev) => [...prev, { name: "", logo: "", category: "" }]);
  }

  function removeItem(index: number) {
    setItems((prev) => prev.filter((_, i) => i !== index));
  }

  async function handleSubmit(event: FormEvent) {
    event.preventDefault();
    setSaving(true);
    setMessage(null);
    setError(null);

    try {
      const cleanedItems = items.filter(
        (item) => item.name.trim() || item.logo.trim() || item.category.trim()
      );

      const res = await fetch(`/api/sections/${sectionId}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          data: {
            title,
            items: cleanedItems,
          },
        }),
      });

      if (!res.ok) {
        const json = await res.json().catch(() => ({}));
        setError(json.error ?? "Failed to save changes");
      } else {
        setMessage("Carousel updated");
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
      <div className="space-y-2">
        <label className="block text-xs font-semibold uppercase tracking-wide text-white/70">
          main title
        </label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full rounded-lg border border-white/20 bg-black/30 px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-purple-400"
          placeholder="Trusted by Industry-leading Founders & Creators"
        />
      </div>

      <div className="space-y-3">
        <div className="flex items-center justify-between">
          <h3 className="text-sm font-semibold">Partners</h3>
          <button
            type="button"
            onClick={addItem}
            className="rounded-lg border border-white/25 px-3 py-1 text-xs font-semibold uppercase tracking-wide hover:bg-white/10"
          >
            Add partner
          </button>
        </div>

        <div className="space-y-3">
          {items.map((item, index) => (
            <div
              key={index}
              className="grid gap-2 rounded-lg border border-white/15 bg-black/20 p-3 md:grid-cols-[1.2fr_1.6fr_1fr_auto]"
            >
              <div className="space-y-1">
                <label className="block text-[.7rem] font-semibold uppercase tracking-wide text-white/60">
                  Name
                </label>
                <input
                  type="text"
                  value={item.name}
                  onChange={(e) =>
                    updateItem(index, { name: e.target.value })
                  }
                  className="w-full rounded border border-white/20 bg-black/40 px-2 py-1 text-xs outline-none focus:ring-2 focus:ring-purple-400"
                  placeholder="Channel / brand name"
                />
              </div>

              <div className="space-y-1">
                <label className="block text-[.7rem] font-semibold uppercase tracking-wide text-white/60">
                  Logo path
                </label>
                <input
                  type="text"
                  value={item.logo}
                  onChange={(e) =>
                    updateItem(index, { logo: e.target.value })
                  }
                  className="w-full rounded border border-white/20 bg-black/40 px-2 py-1 text-xs outline-none focus:ring-2 focus:ring-purple-400"
                  placeholder="/imgs/partners/your-logo.png"
                />
              </div>

              <div className="space-y-1">
                <label className="block text-[.7rem] font-semibold uppercase tracking-wide text-white/60">
                  Subtitle
                </label>
                <input
                  type="text"
                  value={item.category}
                  onChange={(e) =>
                    updateItem(index, { category: e.target.value })
                  }
                  className="w-full rounded border border-white/20 bg-black/40 px-2 py-1 text-xs outline-none focus:ring-2 focus:ring-purple-400"
                  placeholder="e.g. 461K subscribers"
                />
              </div>

              <div className="flex items-end justify-end">
                <button
                  type="button"
                  onClick={() => removeItem(index)}
                  className="rounded border border-red-400/60 px-2 py-1 text-[.7rem] font-semibold uppercase tracking-wide text-red-200 hover:bg-red-500/20"
                >
                  Remove
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="flex items-center justify-between gap-3">
        <button
          type="submit"
          disabled={saving}
          className="rounded-lg bg-purple-500 px-4 py-2 text-xs font-semibold uppercase tracking-wide hover:bg-purple-400 disabled:opacity-60"
        >
          {saving ? "Saving..." : "Save"}
        </button>

        <div className="text-xs">
          {message && <span className="text-emerald-300">{message}</span>}
          {error && <span className="text-red-300">{error}</span>}
        </div>
      </div>
    </form>
  );
}


