"use client";
import React, { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full bg-[#1E1E1E] shadow-md z-50">
      <div className="mx-auto max-w-7xl flex items-center justify-between h-[72px] px-6 lg:px-[65px]">
        {/* Logo */}
        <img src="/static/natayow.svg" alt="natayow" className="w-32" />

        {/* Desktop Menu (show from lg up) */}
        <div className="hidden lg:flex gap-4 xl:gap-[28px] items-center">
          <a
            href="#hero"
            className="text-white text-sm hover:text-[#fd6f00] cursor-pointer"
          >
            Home
          </a>
          <a
            href="#about"
            className="text-white text-sm hover:text-[#fd6f00] cursor-pointer"
          >
            About Me
          </a>
          <a
            href="#skills"
            className="text-white text-sm hover:text-[#fd6f00] cursor-pointer"
          >
            Skills
          </a>
          <a
            href="#project"
            className="text-white text-sm hover:text-[#fd6f00] cursor-pointer"
          >
            My Projects
          </a>
          <a
            href="#experience"
            className="text-white text-sm hover:text-[#fd6f00] cursor-pointer"
          >
            Experiences
          </a>

          <a
            href="#testi"
            className="text-white text-sm hover:text-[#fd6f00] cursor-pointer"
          >
            Testimonials
          </a>
          <a
            href="#contact"
            className="text-white text-sm hover:text-[#fd6f00] cursor-pointer"
          >
            Contact
          </a>
          <button className="h-[40px] w-[120px] rounded-lg bg-[#fd6f00] text-white font-semibold text-sm transition hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-white/30">
            Download CV
          </button>
        </div>

        {/* Mobile Hamburger (hide from lg up) */}
        <button
          className="lg:hidden text-white focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
          aria-expanded={isOpen}
        >
          {isOpen ? (
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="lg:hidden bg-[#1E1E1E] flex flex-col items-start px-6 pb-4 space-y-3 border-t border-white/5">
          <a
            href="#hero"
            className="text-white text-sm hover:text-[#fd6f00] cursor-pointer"
          >
            Home
          </a>
          <a
            href="#about"
            className="text-white text-sm hover:text-[#fd6f00] cursor-pointer"
          >
            About Me
          </a>
          <a
            href="#skills"
            className="text-white text-sm hover:text-[#fd6f00] cursor-pointer"
          >
            Skills
          </a>
          <a
            href="#project"
            className="text-white text-sm hover:text-[#fd6f00] cursor-pointer"
          >
            My Projects
          </a>
          <a
            href="#experience"
            className="text-white text-sm hover:text-[#fd6f00] cursor-pointer"
          >
            Experiences
          </a>

          <a
            href="#testi"
            className="text-white text-sm hover:text-[#fd6f00] cursor-pointer"
          >
            Testimonials
          </a>
          <a
            href="#contact"
            className="text-white text-sm hover:text-[#fd6f00] cursor-pointer"
          >
            Contact
          </a>
          <button className="h-[40px] w-full rounded-lg bg-[#fd6f00] text-white font-semibold text-sm transition hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-white/30">
            Download CV
          </button>
        </div>
      )}
    </nav>
  );
}
