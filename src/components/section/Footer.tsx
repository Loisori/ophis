"use client";

import Image from "next/image";

export type FooterSocial = {
  label: string;
  href: string;
  iconSvg?: string;
};

export type FooterData = {
  description?: string;
  contact?: {
    address?: string;
    studyLocation?: string;
    phone?: string;
    email?: string;
  };
  socials?: FooterSocial[];
};

interface FooterProps {
  data: FooterData | null;
}

const FALLBACK_FOOTER: FooterData = {
  description:
    "Discover the video editing portfolio of Nam Nguyen - skilled in Adobe Premiere, After Effects, and DaVinci Resolve. Expert in cinematic editing, music videos, ads, and social media content.",
  contact: {
    address: "TPHCM, Việt Nam.",
    studyLocation: "Study location: Online course.",
    phone: "0905000000",
    email: "nam@gmail.com",
  },
  socials: [
    { label: "Instagram", href: "#", iconSvg: "" },
    { label: "Facebook", href: "#", iconSvg: "" },
    { label: "TikTok", href: "#", iconSvg: "" },
    { label: "YouTube", href: "#", iconSvg: "" },
  ],
};

export default function Footer({ data }: FooterProps) {
  const merged = { ...FALLBACK_FOOTER, ...(data || {}) };
  const contact = { ...FALLBACK_FOOTER.contact, ...(data?.contact || {}) };
  const socials =
    data?.socials && data.socials.length > 0
      ? data.socials
      : FALLBACK_FOOTER.socials!;

  return (
    <footer id="footer" className="bg-gray-100 text-black py-10 sm:py-14 mt-16">
      <div className="wrapper max-w-6xl mx-auto px-4">
        <Image
          src="/imgs/logoblack.png"
          alt="Ophis Logo"
          width={160}
          height={70}
        />
        <div className="grid gap-10 md:grid-cols-[2fr_2fr_1.4fr]">
          <div className="space-y-4 max-w-xl">
            <div className="flex items-center gap-3"></div>
            <p className="text-small">{merged.description}</p>
          </div>

          <div className="space-y-3 text-sm sm:text-small">
            <h2 className="font-semibold mb-2">Contact</h2>
            {contact.address && (
              <p className="">
                <span className="font-semibold">Address: </span>
                {contact.address}
              </p>
            )}
            {contact.studyLocation && (
              <p className="">
                <span className="font-semibold">Book a call: </span>
                {contact.studyLocation}
              </p>
            )}
            {contact.phone && (
              <p className="">
                <span className="font-semibold">Phone: </span> {contact.phone}
              </p>
            )}
            {contact.email && (
              <p className="">
                <span className="font-semibold">Email: </span> {contact.email}
              </p>
            )}
          </div>

          <div className="space-y-4">
            <div>
              <h2 className="font-semibold mb-2">Connect with us</h2>
              <div className="flex flex-wrap gap-3 mt-3">
                {socials.map((social) => (
                  <a
                    key={social.label}
                    href={social.href || "#"}
                    className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/10 hover:bg-white/20 transition"
                    aria-label={social.label}
                    target="_blank"
                  >
                    {social.iconSvg ? (
                      <span
                        aria-hidden="true"
                        className="size-10 text-white"
                        dangerouslySetInnerHTML={{
                          __html: social.iconSvg,
                        }}
                      />
                    ) : (
                      <span className="text-sm font-semibold">
                        {social.label[0]}
                      </span>
                    )}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
