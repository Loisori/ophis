"use client";

import Image from "next/image";
import { FooterData, FooterSocial } from "@/types/Footer.type";
import { DEFAULT_FOOTER_DATA } from "@/constants/defaults";

interface FooterProps {
  data: FooterData | null;
}

export default function Footer({ data }: FooterProps) {
  const merged = { ...DEFAULT_FOOTER_DATA, ...(data || {}) };
  const contact = { ...DEFAULT_FOOTER_DATA.contact, ...(data?.contact || {}) };
  const socials =
    data?.socials && data.socials.length > 0
      ? data.socials
      : DEFAULT_FOOTER_DATA.socials!;

  return (
    <footer id="footer" className="bg-gray-100 text-black py-10 sm:py-14">
      <div className="wrapper">
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
            <p className="text-h3 lg:text-h2 font-semibold mb-2">Contact</p>
            {contact.address && (
              <p className="text-small font-normal">
                <span className="font-semibold">Address: </span>
                {contact.address}
              </p>
            )}
            {contact.studyLocation && (
              <a
                href={contact.studyLocation}
                target="_blank"
                className="text-small font-normal block"
              >
                <span className="font-semibold">Book a call: </span>
                Online Meeting
              </a>
            )}
            {contact.phone && (
              <a href={contact.phone} className="text-small font-normal block">
                <span className="font-semibold">Phone: </span> {contact.phone}
              </a>
            )}
            {contact.email && (
              <a
                href={`mailto:${contact.email}`}
                className="text-small font-normal block"
              >
                <span className="font-semibold">Email: </span> {contact.email}
              </a>
            )}
          </div>

          <div className="space-y-4">
            <div>
              <p className="text-h3 lg:text-h2 font-semibold mb-2">
                Connect with us
              </p>
              <div className="flex flex-wrap gap-3 mt-3">
                {socials.map((social) => (
                  <a
                    key={social.label}
                    href={social.href || "#"}
                    className="inline-flex h-10 w-10 items-center justify-center rounded-full transition drop-shadow-lg"
                    aria-label={social.label}
                    target="_blank"
                  >
                    {social.iconSvg ? (
                      <span
                        aria-hidden="true"
                        className="size-10 text-white hover:scale-[1.2] duration-500"
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
