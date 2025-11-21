"use client";

import Image from "next/image";
import { useState, MouseEvent } from "react";

export default function Header() {
  // State to track if the menu is open
  const [isOpen, setIsOpen] = useState(false);

  // Toggle function
  const toggleMenu = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsOpen(!isOpen);
  };

  return (
    <header className="fixed top-0 w-full z-1 backdrop-blur-xl z-50">
      <div className="wrapper flex w-full py-[2rem] xmd:py-[4rem] items-center text-white">
        <a href="#" className="flex justify-center items-center">
          <Image
            src="/imgs/logo.png"
            alt="Ophis Logo"
            width={160}
            height={70}
            className="mr-[.8rem]"
          />
        </a>
        <ul className="hidden xmd:flex size-fit bg-[#1C022B] gap-[3.5rem] rounded-5 py-[1.5rem] px-[4rem] ml-auto mr-[5.7rem]">
          <li>
            <a className="text-body font-medium" href="#about">
              How it work?
            </a>
          </li>
          <li>
            <a className="text-body font-medium" href="#works">
              Projects
            </a>
          </li>
          <li>
            <a className="text-body font-medium" href="#case">
              Testimonials
            </a>
          </li>
          <li>
            <a className="text-body font-medium" href="#case">
              Service
            </a>
          </li>
          <li>
            <a className="text-body font-medium" href="#case">
              Pricing
            </a>
          </li>
        </ul>
        <a
          className="max-sm:hidden max-xmd:ml-auto size-fit rounded-5 py-[1.5rem] px-[1.6rem] text-body font-bold bg-purple-100"
          href="#contact"
        >
          Book a 30-min call
        </a>
        <a
          href="#"
          onClick={toggleMenu}
          className="block xmd:hidden max-sm:ml-auto ml-[2rem] relative z-50"
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
        <div className="xmd:hidden absolute top-[10rem] left-0 w-full bg-[#1C022B] p-8 rounded-b-3xl border-t border-white/10 shadow-2xl animate-in slide-in-from-top-4">
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
