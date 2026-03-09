"use client";

import { useState, FormEvent } from "react";
import type { FooterSocial } from "@/components/section/Footer";

interface FooterEditorProps {
  sectionId: string;
  initialData: FooterData | null;
}

export default function FooterEditor({
  sectionId,
  initialData,
}: FooterEditorProps) {
  const [description, setDescription] = useState(
    initialData?.description ?? ""
  );
  const [address, setAddress] = useState(initialData?.contact?.address ?? "");
  const [studyLocation, setStudyLocation] = useState(
    initialData?.contact?.studyLocation ?? ""
  );
  const [phone, setPhone] = useState(initialData?.contact?.phone ?? "");
  const [email, setEmail] = useState(initialData?.contact?.email ?? "");

  const [socials, setSocials] = useState<FooterSocial[]>(
    initialData?.socials ?? [
      { label: "Instagram", href: "", iconSvg: "" },
      { label: "Facebook", href: "", iconSvg: "" },
      { label: "TikTok", href: "", iconSvg: "" },
      { label: "YouTube", href: "", iconSvg: "" },
    ]
  );

  const [saving, setSaving] = useState(false);
  const [message, setMessage] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  function updateSocial(index: number, patch: Partial<FooterSocial>) {
    setSocials((prev) =>
      prev.map((item, i) => (i === index ? { ...item, ...patch } : item))
    );
  }

  function addSocial() {
    setSocials((prev) => [...prev, { label: "", href: "", iconSvg: "" }]);
  }

  function removeSocial(index: number) {
    setSocials((prev) => prev.filter((_, i) => i !== index));
  }

  async function handleSubmit(event: FormEvent) {
    event.preventDefault();
    setSaving(true);
    setMessage(null);
    setError(null);

    try {
      const cleanedSocials = socials.filter(
        (s) => s.label.trim() || s.href.trim() || s.iconSvg?.trim()
      );

      const res = await fetch(`/api/sections/${sectionId}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          data: {
            description,
            contact: {
              address,
              studyLocation,
              phone,
              email,
            },
            socials: cleanedSocials,
          },
        }),
      });

      if (!res.ok) {
        const json = await res.json().catch(() => ({}));
        setError(json.error ?? "Failed to save changes");
      } else {
        setMessage("Footer updated");
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
      <div className="space-y-3">
        <div className="space-y-1">
          <label className="block text-xs font-semibold uppercase tracking-wide text-white/70">
            Description
          </label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            rows={4}
            className="w-full resize-none rounded-lg border border-white/20 bg-black/30 px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-purple-400"
            placeholder="Footer description text…"
          />
        </div>

        <div className="grid gap-3 sm:grid-cols-2">
          <div className="space-y-1">
            <label className="block text-xs font-semibold uppercase tracking-wide text-white/70">
              Address
            </label>
            <textarea
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              rows={3}
              className="w-full resize-none rounded-lg border border-white/20 bg-black/30 px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-purple-400"
            />
          </div>

          <div className="space-y-1">
            <label className="block text-xs font-semibold uppercase tracking-wide text-white/70">
              Book a call
            </label>
            <input
              type="text"
              value={studyLocation}
              onChange={(e) => setStudyLocation(e.target.value)}
              className="w-full rounded-lg border border-white/20 bg-black/30 px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-purple-400"
            />
          </div>
        </div>

        <div className="grid gap-3 sm:grid-cols-2">
          <div className="space-y-1">
            <label className="block text-xs font-semibold uppercase tracking-wide text-white/70">
              Phone
            </label>
            <input
              type="text"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="w-full rounded-lg border border-white/20 bg-black/30 px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-purple-400"
            />
          </div>

          <div className="space-y-1">
            <label className="block text-xs font-semibold uppercase tracking-wide text-white/70">
              Email
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full rounded-lg border border-white/20 bg-black/30 px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-purple-400"
            />
          </div>
        </div>
      </div>

      <hr className="border-white/10" />

      <div className="space-y-3">
        <div className="flex items-center justify-between">
          <h3 className="text-sm font-semibold">Social icons</h3>
          <button
            type="button"
            onClick={addSocial}
            className="rounded-lg border border-white/25 px-3 py-1 text-xs font-semibold uppercase tracking-wide hover:bg-white/10"
          >
            Add icon
          </button>
        </div>

        <div className="space-y-3">
          {socials.map((social, index) => (
            <div
              key={index}
              className="grid gap-2 rounded-lg border border-white/15 bg-black/20 p-3 md:grid-cols-[1fr_1fr_2fr_auto]"
            >
              <div className="space-y-1">
                <label className="block text-[0.7rem] font-semibold uppercase tracking-wide text-white/60">
                  Label
                </label>
                <input
                  type="text"
                  value={social.label}
                  onChange={(e) =>
                    updateSocial(index, { label: e.target.value })
                  }
                  className="w-full rounded border border-white/20 bg-black/40 px-2 py-1 text-xs outline-none focus:ring-2 focus:ring-purple-400"
                  placeholder="Instagram"
                />
              </div>

              <div className="space-y-1">
                <label className="block text-[0.7rem] font-semibold uppercase tracking-wide text-white/60">
                  URL
                </label>
                <input
                  type="text"
                  value={social.href}
                  onChange={(e) => updateSocial(index, { href: e.target.value })}
                  className="w-full rounded border border-white/20 bg-black/40 px-2 py-1 text-xs outline-none focus:ring-2 focus:ring-purple-400"
                  placeholder="https://…"
                />
              </div>

              <div className="space-y-1">
                <label className="block text-[0.7rem] font-semibold uppercase tracking-wide text-white/60">
                  SVG markup
                </label>
                <textarea
                  value={social.iconSvg ?? ""}
                  onChange={(e) =>
                    updateSocial(index, { iconSvg: e.target.value })
                  }
                  rows={2}
                  className="w-full rounded border border-white/20 bg-black/40 px-2 py-1 text-xs outline-none focus:ring-2 focus:ring-purple-400 font-mono"
                  placeholder="<svg ...>...</svg>"
                />
              </div>

              <div className="flex items-end justify-end">
                <button
                  type="button"
                  onClick={() => removeSocial(index)}
                  className="rounded border border-red-400/60 px-2 py-1 text-[0.7rem] font-semibold uppercase tracking-wide text-red-200 hover:bg-red-500/20"
                >
                  Remove
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

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

