"use client";

import Image from "next/image";

export default function Footer() {
  return (
    <footer id="footer" className="pt-[1.4rem] pb-[3.2rem] flex flex-col items-center gap-[3rem] bg-gray-100">
      <Image
        src="/imgs/logoblack.png"
        alt="Ophis Logo"
        width={160}
        height={70}
        className="mr-[.8rem]"
      />
      <ul className="flex gap-[3rem] text-body font-normal">
        <li>About</li>
        <li>Projects</li>
        <li>Services</li>
        <li>Pricing</li>
        <li>FAQ’s</li>
      </ul>
    </footer>
  );
}
