"use client";

import { useState, FormEvent } from "react";

type PricingPlan = {
  name: string;
  price: string;
  description: string;
  features: string[];
  cta: string;
  popular: boolean;
};

type PricingData = {
  title?: string;
  subtitle?: string;
  plans?: PricingPlan[];
};

interface PricingEditorProps {
  sectionId: string;
  initialData: PricingData | null;
}

export default function PricingEditor({
  sectionId,
  initialData,
}: PricingEditorProps) {
  const [title, setTitle] = useState(initialData?.title ?? "Pricing");
  const [subtitle, setSubtitle] = useState(
    initialData?.subtitle ?? "subPricing"
  );

  const [plans, setPlans] = useState<PricingPlan[]>(
    initialData?.plans && initialData.plans.length === 3
      ? initialData.plans
      : [
          {
            name: "BASIC",
            price: "$800",
            description: "Perfect for getting started",
            features: [
              "2 long-form videos/month",
              "Unlimited revisions",
              "3-5 day turnaround",
            ],
            cta: "Get started",
            popular: false,
          },
          {
            name: "PRO",
            price: "$2000",
            description: "Our most popular package",
            features: [
              "4 long-form videos",
              "Slack group access",
              "Unlimited revisions",
            ],
            cta: "Get started",
            popular: true,
          },
          {
            name: "PREMIUM",
            price: "",
            description: "For established creators",
            features: [
              "Tailored editing volume",
              "Dedicated Editor",
              "Brand voice development",
            ],
            cta: "Book a call",
            popular: false,
          },
        ]
  );

  const [saving, setSaving] = useState(false);
  const [message, setMessage] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const updatePlan = (index: number, field: keyof PricingPlan, value: any) => {
    setPlans((prev) => {
      const newPlans = [...prev];
      newPlans[index] = { ...newPlans[index], [field]: value };
      return newPlans;
    });
  };

  const updateFeatures = (index: number, text: string) => {
    const featureArray = text.split("\n").filter((line) => line.trim() !== "");
    updatePlan(index, "features", featureArray);
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
            plans,
          },
        }),
      });

      if (!res.ok) {
        const json = await res.json().catch(() => ({}));
        setError(json.error ?? "Failed to save changes");
      } else {
        setMessage("Pricing content updated");
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
      <div className="space-y-1">
        <label className="block text-xs font-semibold uppercase tracking-wide text-white/70">
          title
        </label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full rounded-lg border border-white/20 bg-black/30 px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-purple-400"
          placeholder="Pricing"
        />
      </div>
      <div className="space-y-1">
        <label className="block text-xs font-semibold uppercase tracking-wide text-white/70">
          subtitle
        </label>
        <input
          type="text"
          value={subtitle}
          onChange={(e) => setSubtitle(e.target.value)}
          className="w-full rounded-lg border border-white/20 bg-black/30 px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-purple-400"
          placeholder="subPricing"
        />
      </div>

      <hr className="border-white/10" />

      {/* Plans Grid */}
      <div className="grid gap-4 xl:grid-cols-3">
        {plans.map((plan, index) => (
          <div
            key={index}
            className="space-y-3 rounded-lg bg-white/5 p-3 border border-white/10 relative"
          >
            <div className="flex justify-between items-center mb-2">
              <span className="text-xs text-white/50 font-mono">
                Plan #{index + 1}
              </span>
              <label className="flex items-center gap-2 text-xs cursor-pointer">
                <input
                  type="checkbox"
                  checked={plan.popular}
                  onChange={(e) =>
                    updatePlan(index, "popular", e.target.checked)
                  }
                  className="rounded border-white/20 bg-black/30 text-purple-500 focus:ring-purple-500"
                />
                Is Popular?
              </label>
            </div>

            {/* Plan Name & Price */}
            <div className="grid grid-cols-2 gap-2">
              <div className="space-y-1">
                <label className="block text-[0.65rem] uppercase text-white/60">
                  Name
                </label>
                <input
                  type="text"
                  value={plan.name}
                  onChange={(e) => updatePlan(index, "name", e.target.value)}
                  className="w-full rounded border border-white/20 bg-black/30 px-2 py-1 text-xs outline-none focus:ring-1 focus:ring-purple-400"
                />
              </div>
              <div className="space-y-1">
                <label className="block text-[0.65rem] uppercase text-white/60">
                  Price
                </label>
                <input
                  type="text"
                  value={plan.price}
                  onChange={(e) => updatePlan(index, "price", e.target.value)}
                  placeholder="e.g. $800"
                  className="w-full rounded border border-white/20 bg-black/30 px-2 py-1 text-xs outline-none focus:ring-1 focus:ring-purple-400"
                />
              </div>
            </div>

            {/* Description */}
            <div className="space-y-1">
              <label className="block text-[0.65rem] uppercase text-white/60">
                Description
              </label>
              <input
                type="text"
                value={plan.description}
                onChange={(e) =>
                  updatePlan(index, "description", e.target.value)
                }
                className="w-full rounded border border-white/20 bg-black/30 px-2 py-1 text-xs outline-none focus:ring-1 focus:ring-purple-400"
              />
            </div>

            {/* Features (Textarea) */}
            <div className="space-y-1">
              <label className="block text-[0.65rem] uppercase text-white/60">
                Features (One per line)
              </label>
              <textarea
                value={plan.features.join("\n")}
                onChange={(e) => updateFeatures(index, e.target.value)}
                rows={6}
                className="w-full resize-none rounded border border-white/20 bg-black/30 px-2 py-1 text-xs outline-none focus:ring-1 focus:ring-purple-400 leading-relaxed"
                placeholder="Feature 1&#10;Feature 2&#10;Feature 3"
              />
            </div>

            {/* CTA */}
            <div className="space-y-1">
              <label className="block text-[0.65rem] uppercase text-white/60">
                Button Label
              </label>
              <input
                type="text"
                value={plan.cta}
                onChange={(e) => updatePlan(index, "cta", e.target.value)}
                className="w-full rounded border border-white/20 bg-black/30 px-2 py-1 text-xs outline-none focus:ring-1 focus:ring-purple-400"
              />
            </div>
          </div>
        ))}
      </div>

      {/* Action Bar */}
      <div className="flex items-center justify-between gap-3 pt-2">
        <button
          type="submit"
          disabled={saving}
          className="rounded-lg bg-purple-500 px-4 py-2 text-xs font-semibold uppercase tracking-wide hover:bg-purple-400 disabled:opacity-60 transition-colors"
        >
          {saving ? "Saving..." : "Save Pricing"}
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
