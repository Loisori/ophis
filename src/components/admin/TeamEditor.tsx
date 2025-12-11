"use client";

import { useState, FormEvent } from "react";

type TeamMember = {
  name: string;
  description: string;
  image: string;
};

type TeamData = {
  title?: string;
  subtitle?: string;
  members?: TeamMember[];
};

interface TeamEditorProps {
  sectionId: string;
  initialData: TeamData | null;
}

export default function TeamEditor({
  sectionId,
  initialData,
}: TeamEditorProps) {
  const [title, setTitle] = useState(initialData?.title ?? "Meet our brains");
  const [subtitle, setSubTitle] = useState(
    initialData?.subtitle ?? "The people behind Ophis"
  );

  const [members, setMembers] = useState<TeamMember[]>(
    initialData?.members && initialData.members.length > 0
      ? initialData.members
      : [
          {
            name: "Nam Nguyen",
            description: "Senior editor with 4+ years turning raw footage...",
            image:
              "https://res.cloudinary.com/dhxrsiqip/image/upload/v1764172931/Nam_Nguyen_1_oad1gh.png",
          },
        ]
  );

  const [saving, setSaving] = useState(false);
  const [message, setMessage] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  // --- Actions ---

  const addMember = () => {
    setMembers((prev) => [
      ...prev,
      {
        name: "New Member",
        description: "Description here...",
        image: "",
      },
    ]);
  };

  const removeMember = (index: number) => {
    setMembers((prev) => prev.filter((_, i) => i !== index));
  };

  const updateMember = (
    index: number,
    field: keyof TeamMember,
    value: string
  ) => {
    setMembers((prev) => {
      const newMembers = [...prev];
      newMembers[index] = { ...newMembers[index], [field]: value };
      return newMembers;
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
            members,
          },
        }),
      });

      if (!res.ok) {
        const json = await res.json().catch(() => ({}));
        setError(json.error ?? "Failed to save changes");
      } else {
        setMessage("Team updated successfully");
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
        />
      </div>
      <div className="space-y-1">
        <label className="block text-xs font-semibold uppercase tracking-wide text-white/70">
          SubTitle
        </label>
        <input
          type="text"
          value={subtitle}
          onChange={(e) => setSubTitle(e.target.value)}
          className="w-full rounded-lg border border-white/20 bg-black/30 px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-purple-400"
          placeholder="Explore our Video Editing Portfolio"
        />
      </div>

      <hr className="border-white/10" />

      {/* Members List */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h3 className="text-xl font-semibold">Team Members</h3>
          <button
            type="button"
            onClick={addMember}
            className="text-xs bg-white/10 hover:bg-white/20 px-3 py-1.5 rounded transition-colors"
          >
            + Add Member
          </button>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          {members.map((member, index) => (
            <div
              key={index}
              className="relative space-y-3 rounded-lg bg-white/5 p-3 border border-white/10"
            >
              <div className="flex justify-between items-center text-xs text-white/40">
                <span className="font-mono">Member #{index + 1}</span>
                <button
                  type="button"
                  onClick={() => removeMember(index)}
                  className="text-red-400 hover:text-red-300 transition-colors"
                >
                  Remove
                </button>
              </div>

              {/* Name & Color */}
              <div className="space-y-1">
                <label className="block text-[0.65rem] uppercase text-white/60">
                  Name
                </label>
                <input
                  type="text"
                  value={member.name}
                  onChange={(e) => updateMember(index, "name", e.target.value)}
                  className="w-full rounded border border-white/20 bg-black/30 px-2 py-1 text-xs outline-none focus:ring-1 focus:ring-purple-400"
                />
              </div>

              {/* Image URL */}
              <div className="space-y-1">
                <label className="block text-[0.65rem] uppercase text-white/60">
                  Image URL
                </label>
                <div className="flex gap-2">
                  <div className="relative w-8 h-8 shrink-0 rounded overflow-hidden bg-black/50 border border-white/10">
                    {member.image && (
                      <img
                        src={member.image}
                        alt=""
                        className="w-full h-full object-cover"
                      />
                    )}
                  </div>
                  <input
                    type="text"
                    value={member.image}
                    onChange={(e) =>
                      updateMember(index, "image", e.target.value)
                    }
                    className="w-full rounded border border-white/20 bg-black/30 px-2 py-1 text-xs outline-none focus:ring-1 focus:ring-purple-400"
                  />
                </div>
              </div>

              {/* Description */}
              <div className="space-y-1">
                <label className="block text-[0.65rem] uppercase text-white/60">
                  Description
                </label>
                <textarea
                  value={member.description}
                  onChange={(e) =>
                    updateMember(index, "description", e.target.value)
                  }
                  rows={4}
                  className="w-full resize-none rounded border border-white/20 bg-black/30 px-2 py-1 text-xs outline-none focus:ring-1 focus:ring-purple-400"
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
          {saving ? "Saving..." : "Save Team"}
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
