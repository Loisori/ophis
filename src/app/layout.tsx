import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "../styles/theme.scss";
// import "../styles/main.scss";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"], // Select weights you need
  variable: "--font-poppins", // Create a CSS variable
});

export const metadata: Metadata = {
  title: "Ophis | Professional Video Editing Agency",
  description:
    "Discover the video editing portfolio of Nam Nguyen – skilled in Adobe Premiere, After Effects, and DaVinci Resolve. Expert in cinematic editing, music videos, ads, and social media content.",
  keywords: [
    // --- Thương hiệu cá nhân & Agency ---
    "Ophis",
    "Ophis Editing",
    "Nam Nguyen",
    "Video Editing Agency",
    "Freelance Video Editor",
    
    // --- Nền tảng & Loại nội dung (Rất quan trọng để khách tìm kiếm) ---
    "YouTube Video Editor",
    "TikTok Video Editing",
    "Instagram Reels Editor",
    "YouTube Shorts",
    "Podcast Editing",
    "Documentary Video Editing",
    "Talking Head Video Edit",
    "Video Sales Letter (VSL)",
    "Social Media Video Ads",
    
    // --- Kỹ năng & Phần mềm ---
    "Cinematic Editing",
    "Color Grading",
    "Motion Graphics",
    "Adobe Premiere Pro",
    "After Effects",
    "DaVinci Resolve",
    
    // --- Lợi ích / Niche ---
    "Video Editing for Creators",
    "High Retention Video Editing",
    "Content Creator Services"
  ].join(", "),
  authors: [{ name: "Nguyen Thanh Nam", url: "https://ophis.site/" }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} antialiased`}>{children}</body>
    </html>
  );
}
