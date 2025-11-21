import { prisma } from "@/lib/prisma";
import HeroEditor from "@/components/admin/HeroEditor";

export default async function AdminHome() {
  // Ensure a basic home page exists so the dashboard has something to show.
  const page = await prisma.page.upsert({
    where: { slug: "/" },
    update: {},
    create: {
      slug: "/",
      title: "Home",
      sections: {
        create: [
          {
            type: "hero",
            position: 1,
            content: {
              create: {
                data: {
                  headline: "The editing team that scales with your ambition",
                  subheadline:
                    "Publish faster, maintain exceptional quality, and turn your content into revenue with expert on-demand editing.",
                },
              },
            },
          },
          {
            type: "autoCarousel",
            position: 2,
            content: {
              create: {
                data: {
                  title: "Trusted by Industry-leading Founders & Creators",
                },
              },
            },
          },
        ],
      },
    },
    include: {
      sections: {
        include: { content: true },
        orderBy: { position: "asc" },
      },
    },
  });

  const heroSection = page.sections.find((s: any) => s.type === "hero");

  return (
    <main className="min-h-screen bg-purple-950 text-white">
      <div className="wrapper py-12 space-y-8">
        <header className="space-y-2">
          <h1 className="text-3xl font-semibold">Admin dashboard</h1>
          <p className="text-sm text-white/70">
            You&apos;re editing the content for the home page (<code>/</code>).
          </p>
        </header>

        <section className="space-y-4">
          <h2 className="text-xl font-semibold">Sections</h2>
          <div className="space-y-3">
            {page.sections.map((section: any) => (
              <div
                key={section.id}
                className="rounded-xl border border-white/15 bg-white/5 px-4 py-3 text-sm flex items-center justify-between"
              >
                <div>
                  <p className="font-medium capitalize">
                    {section.type}{" "}
                    {!section.visible && (
                      <span className="ml-2 rounded bg-yellow-500/20 px-1.5 py-0.5 text-[0.7rem] font-semibold uppercase tracking-wide text-yellow-200">
                        hidden
                      </span>
                    )}
                  </p>
                  <p className="text-white/70">
                    Position {section.position} ·{" "}
                    {section.content
                      ? "Has content"
                      : "No content yet – edit to add data"}
                  </p>
                </div>
                <div className="flex items-center gap-2 text-xs">
                  <span className="rounded bg-white/10 px-2 py-1 text-white/80">
                    ID: {section.id.slice(0, 6)}…
                  </span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {heroSection && (
          <section className="space-y-4">
            <h2 className="text-xl font-semibold">Hero content</h2>
            <p className="text-sm text-white/70">
              Edit the hero copy for the home page. Changes are saved instantly to
              the database and will appear on the live landing page.
            </p>
            <HeroEditor
              sectionId={heroSection.id}
              initialData={heroSection.content?.data ?? null}
            />
          </section>
        )}
      </div>
    </main>
  );
}
