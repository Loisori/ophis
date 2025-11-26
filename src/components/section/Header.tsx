"use client";

import Image from "next/image";
import { useState, MouseEvent } from "react";
import { Reveal } from "@/components/animations/Reveal";


export default function Header() {
  // State to track if the menu is open
  const [isOpen, setIsOpen] = useState(false);

  // Toggle function
  const toggleMenu = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsOpen(!isOpen);
  };

  return (
    <header className="fixed top-0 w-full backdrop-blur-xl z-50">
      <div className="wrapper flex w-full py-5 xmd:py-10 items-center text-white">
        <a href="#" className="flex justify-center items-center">
          <Image
            src="https://res.cloudinary.com/dhxrsiqip/image/upload/v1764155227/logo_c3erzu.png"
            alt="Ophis Logo"
            width={160}
            height={70}
            className="mr-2"
          />
        </a>
        <ul className="hidden xmd:flex size-fit bg-[#1C022B] gap-[3.5rem] rounded-5 py-[1.5rem] px-10 ml-auto mr-[5.7rem]">
          <li>
            <a className="text-body font-medium" href="#how">
              How it work?
            </a>
          </li>
          <li>
            <a className="text-body font-medium" href="#projects">
              Projects
            </a>
          </li>
          <li>
            <a className="text-body font-medium" href="#testimonials">
              Testimonials
            </a>
          </li>
          <li>
            <a className="text-body font-medium" href="#service">
              Service
            </a>
          </li>
          <li>
            <a className="text-body font-medium" href="#pricing">
              Pricing
            </a>
          </li>
        </ul>
        <a
          className="max-sm:hidden max-xmd:ml-auto size-fit rounded-5 py-[1.5rem] px-4 text-body font-bold bg-purple-100"
          href="#contact"
        >
          Book a 30-min call
        </a>
        <a
          href="#"
          onClick={toggleMenu}
          className="block xmd:hidden max-sm:ml-auto ml-5 relative z-50"
          aria-label="Toggle navigation"
          aria-controls="header"
          aria-expanded={isOpen}
        >
          <div id="nav-icon3" className={isOpen ? "open" : ""}>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </a>
      </div>
      {isOpen && (
        <div className="xmd:hidden absolute top-25 left-0 w-full bg-[#1C022B] p-8 rounded-b-3xl border-t border-white/10 shadow-2xl animate-in slide-in-from-top-4">
          <ul className="flex flex-col gap-6 text-center">
            <li>
              <a href="#about" onClick={() => setIsOpen(false)}>
                How it works?
              </a>
            </li>
            <li>
              <a href="#works" onClick={() => setIsOpen(false)}>
                Projects
              </a>
            </li>
            <li>
              <a href="#case" onClick={() => setIsOpen(false)}>
                Testimonials
              </a>
            </li>
            <li>
              <a href="#contact" onClick={() => setIsOpen(false)}>
                Service
              </a>
            </li>
            <li>
              <a href="#contact" onClick={() => setIsOpen(false)}>
                Pricing
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
