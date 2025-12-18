"use client";

import Image from "next/image";
import { Reveal } from "@/components/animations/Reveal";
import Link from "next/link";

export default function Footer() {
  return (
    <footer
      id="footer"
      className="pt-[1.4rem] pb-8 flex flex-col items-center gap-8 bg-gray-100"
    >
      <Image
        src="/imgs/logoblack.png"
        alt="Ophis Logo"
        width={160}
        height={70}
        className="mr-2"
      />
      <ul className="flex gap-8 text-smaller sm:text-body font-normal">
        <li>
          <Link href="#about">About</Link>
        </li>
        <li>
          <Link href="#projects">Projects</Link>
        </li>
        <li>
          <Link href="#services">Services</Link>
        </li>
        <li>
          <Link href="#pricing">Pricing</Link>
        </li>
        <li>
          <Link href="#faqs">FAQ’s</Link>
        </li>
      </ul>
    </footer>
  );
}
