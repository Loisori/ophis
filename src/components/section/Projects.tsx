"use client";

// Sample YouTube Video IDs (Replace these with your actual video IDs)
// You can find the ID in a YouTube URL after "v=" (e.g., youtube.com/watch?v=dQw4w9WgXcQ)
const videoIds = [
  "dQw4w9WgXcQ", // Replace with real project ID
  "LXb3EKWsInQ", // Replace with real project ID
  "jfKfPfyJRdk", // Replace with real project ID
  "5qap5aO4i9A", // Replace with real project ID
  "3JZ_D3ELwOQ", // Replace with real project ID
  "ysz5S6P_bsU", // Replace with real project ID
];

export default function Projects() {
  return (
    <section className="py-24 px-4 bg-gradient-to-b from-[#2e0249] to-black text-white relative overflow-hidden">
      {/* Background Ambient Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl h-[600px] bg-purple-900/20 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-lg font-bold uppercase tracking-wider text-gray-400 mb-2">
            Projects
          </h2>
          <p className="text-4xl md:text-5xl font-extrabold tracking-tight text-white">
            Explore our Video Editing Portfolio
          </p>
        </div>

        {/* Video Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mb-16">
          {videoIds.map((id, index) => (
            <div
              key={index}
              className="relative w-full aspect-video bg-gray-900 rounded-xl overflow-hidden shadow-2xl border border-white/10 group"
            >
              <iframe
                src={`https://www.youtube.com/embed/${id}`}
                title={`Project ${index + 1}`}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="absolute top-0 left-0 w-full h-full border-0"
              />
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div className="text-center">
          <button className="px-8 py-4 bg-[#9d34da] hover:bg-[#8a2cc0] text-white font-medium rounded-lg transition-all duration-300 shadow-lg hover:shadow-purple-500/25 hover:-translate-y-0.5">
            Watch more our work
          </button>
        </div>
      </div>
    </section>
  );
}