"use client";

import { useState, FormEvent } from "react";

// --- Inline Icons for Admin UI ---
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

// --- Types ---
type TimelineStep = {
  id: number;
  title: string;
  description: string;
  icon: string;
};

type TimelineData = {
  steps?: TimelineStep[];
};

interface TimelineEditorProps {
  sectionId: string;
  initialData: TimelineData | null;
}

export default function TimelineEditor({
  sectionId,
  initialData,
}: TimelineEditorProps) {
  const [steps, setSteps] = useState<TimelineStep[]>(
    initialData?.steps || [
      { id: 1, title: "", description: "", icon: "" },
      { id: 2, title: "", description: "", icon: "" },
      { id: 3, title: "", description: "", icon: "" },
      { id: 4, title: "", description: "", icon: "" },
    ]
  );

  const [saving, setSaving] = useState(false);
  const [message, setMessage] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  function updateStep(index: number, field: keyof TimelineStep, value: any) {
    setSteps((prev) =>
      prev.map((step, i) => (i === index ? { ...step, [field]: value } : step))
    );
  }

  function addStep() {
    const newId =
      steps.length > 0 ? Math.max(...steps.map((s) => s.id)) + 1 : 1;
    setSteps((prev) => [
      ...prev,
      { id: newId, title: "", description: "", icon: "" },
    ]);
  }

  function removeStep(index: number) {
    setSteps((prev) => prev.filter((_, i) => i !== index));
  }

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
            steps,
          },
        }),
      });

      if (!res.ok) {
        const json = await res.json().catch(() => ({}));
        setError(json.error ?? "Failed to save changes");
      } else {
        setMessage("Timeline updated successfully");
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
      <div className="flex items-center justify-between">
        <h3 className="text-sm font-semibold text-white/90">Process Steps</h3>
        <button
          type="button"
          onClick={addStep}
          className="flex items-center gap-2 rounded-lg border border-white/25 px-3 py-1.5 text-xs font-semibold uppercase tracking-wide hover:bg-white/10 transition-colors"
        >
          <PlusIcon className="w-3 h-3" /> Add Step
        </button>
      </div>

      <div className="space-y-4">
        {steps.map((step, index) => (
          <div
            key={index}
            className="relative grid gap-4 rounded-lg border border-white/15 bg-black/20 p-4"
          >
            {/* Step Badge */}
            <div className="absolute -top-3 -left-3 w-8 h-8 rounded-full bg-purple-600 text-white flex items-center justify-center font-bold text-xs shadow-lg border border-black">
              {index + 1}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-1.5">
                <label className="block text-[0.7rem] font-semibold uppercase tracking-wide text-white/60">
                  Step Title
                </label>
                <input
                  type="text"
                  value={step.title}
                  onChange={(e) => updateStep(index, "title", e.target.value)}
                  className="w-full rounded-lg border border-white/20 bg-black/40 px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-purple-500 placeholder:text-white/20"
                  placeholder="e.g. Delivery"
                />
              </div>

              <div className="space-y-1.5">
                <label className="block text-[0.7rem] font-semibold uppercase tracking-wide text-white/60">
                  Icon URL
                </label>
                <input
                  type="text"
                  value={step.icon}
                  onChange={(e) => updateStep(index, "icon", e.target.value)}
                  className="w-full rounded-lg border border-white/20 bg-black/40 px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-purple-500 placeholder:text-white/20"
                  placeholder="https://..."
                />
              </div>
            </div>

            <div className="space-y-1.5">
              <label className="block text-[0.7rem] font-semibold uppercase tracking-wide text-white/60">
                Description
              </label>
              <textarea
                rows={2}
                value={step.description}
                onChange={(e) =>
                  updateStep(index, "description", e.target.value)
                }
                className="w-full rounded-lg border border-white/20 bg-black/40 px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-purple-500 placeholder:text-white/20 resize-none"
                placeholder="Briefly describe this step..."
              />
            </div>

            <div className="flex justify-end">
              <button
                type="button"
                onClick={() => removeStep(index)}
                className="flex items-center gap-1.5 text-xs text-red-400 hover:text-red-300 transition-colors px-2 py-1 rounded hover:bg-red-500/10"
              >
                <TrashIcon className="w-3 h-3" /> Remove Step
              </button>
            </div>
          </div>
        ))}
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
