"use client";

import Image from "next/image";
import { useState, MouseEvent } from "react";
import { Reveal } from "@/components/animations/Reveal";
import Link from "next/link";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsOpen(!isOpen);
  };

  return (
    <header className="max-md:px-5 fixed top-0 w-full z-50">
      <div className="w-full md:w-fit justify-self-center flex mt-rem sm:mt-5 py-3 px-5 items-center bg-[#1C022B] rounded-full text-white">
        <a
          href="#"
          className="relative size-5 sm:size-10 flex justify-center items-center"
        >
          <Image src="/imgs/logocircle.png" alt="Ophis Logo" fill />
        </a>
        <ul className="hidden md:flex size-fit gap-[3.5rem]  py-[1.5rem] px-10">
          <li>
            <Link className="text-body font-medium" href="#timeline">
              How it work?
            </Link>
          </li>
          <li>
            <Link className="text-body font-medium" href="#projects">
              Projects
            </Link>
          </li>
          <li>
            <Link className="text-body font-medium" href="#testimonials">
              Testimonials
            </Link>
          </li>
          <li>
            <Link className="text-body font-medium" href="#services">
              Service
            </Link>
          </li>
          <li>
            <Link className="text-body font-medium" href="#pricing">
              Pricing
            </Link>
          </li>
        </ul>
        <Link
          href="https://calendly.com/theophisediting/30min"
          className="max-xmd:ml-auto size-fit rounded-full py-2 px-4 text-smaller sm:text-body font-bold bg-purple-100"
          target="_blank"
        >
          Book a call
        </Link>
        <a
          href="#"
          onClick={toggleMenu}
          className="block md:hidden ml-5 relative z-50"
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
        <div className="md:hidden absolute top-0 left-0 pt-[30%] w-full h-screen bg-black p-8 -z-10">
          <ul className="flex flex-col gap-6 text-start text-body text-white">
            <li>
              <Reveal animation="slide-left">
                <Link href="#timeline" onClick={() => setIsOpen(false)}>
                  How it works?
                </Link>
              </Reveal>
            </li>
            <li>
              <Reveal animation="slide-left" delay={0.1}>
                <Link href="#projects" onClick={() => setIsOpen(false)}>
                  Projects
                </Link>
              </Reveal>
            </li>
            <li>
              <Reveal animation="slide-left" delay={0.2}>
                <Link href="#testimonials" onClick={() => setIsOpen(false)}>
                  Testimonials
                </Link>
              </Reveal>
            </li>
            <li>
              <Reveal animation="slide-left" delay={0.3}>
                <Link href="#services" onClick={() => setIsOpen(false)}>
                  Service
                </Link>
              </Reveal>
            </li>
            <li>
              <Reveal animation="slide-left" delay={0.4}>
                <Link href="#pricing" onClick={() => setIsOpen(false)}>
                  Pricing
                </Link>
              </Reveal>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
