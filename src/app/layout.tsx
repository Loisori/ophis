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
  title: "Ophis",
  description:
    "Discover the video editing portfolio of Nam Nguyen – skilled in Adobe Premiere, After Effects, and DaVinci Resolve. Expert in cinematic editing, music videos, ads, and social media content.",
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
