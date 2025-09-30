"use client";
import { motion } from "framer-motion";
import React from "react";

export default function AboutMe() {
  return (
    <section id="about" className="bg-[#1e1e1e] w-screen overflow-x-clip">
      <div className="flex flex-col gap-5 items-center mx-auto max-w-6xl px-6 py-16">
        <motion.h1
          initial={{ scale: 0.5, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6, ease: "backOut" }}
          className="text-white text-2xl sm:text-3xl md:text-4xl font-medium text-center"
        >
          About Me
        </motion.h1>

        <p className="text-white text-base text-center w-full font-light">
          I am a passionate and detail-oriented developer with strong expertise
          in web and mobile application development. My approach combines clean
          code, user-centered design, and innovative problem-solving.
        </p>

        {/* Responsive grid: 1 col on mobile, 2 on tablet, 4 on desktop */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full mt-7">
          <div className="bg-white h-[280px] rounded-xl px-[18px] py-[50px] flex flex-col gap-[24px] justify-center">
            <div>
              <img
                src="/Group 18499.svg"
                alt="JavaScript Logo"
                className="w-13"
              />
            </div>
            <div className="flex flex-col gap-2">
              <h2 className="text-black font-medium text-xl">UI/UX</h2>
              <p className="text-black font-extralight leading-5">
                Designing clean, intuitive, and user-friendly digital
                interfaces.
              </p>
            </div>
          </div>

          <div className="bg-white h-[280px] rounded-xl px-[18px] py-[50px] flex flex-col gap-[24px] justify-center">
            <div>
              <img src="/Layer_1.svg" alt="JavaScript Logo" className="w-13" />
            </div>
            <div className="flex flex-col gap-2">
              <h2 className="text-black font-medium text-xl">Web Developer</h2>
              <p className="text-black font-extralight leading-5">
                Building responsive, scalable, and high-performance websites.
              </p>
            </div>
          </div>

          <div className="bg-white h-[280px] rounded-xl px-[18px] py-[50px] flex flex-col gap-[24px] justify-center">
            <div>
              <img src="/Group 18.svg" alt="JavaScript Logo" className="w-9" />
            </div>
            <div className="flex flex-col gap-2">
              <h2 className="text-black font-medium text-xl">App Developer</h2>
              <p className="text-black font-extralight leading-5">
                Creating secure and engaging cross-platform mobile apps.
              </p>
            </div>
          </div>

          <div className="bg-white h-[280px] rounded-xl px-[18px] py-[50px] flex flex-col gap-[24px] justify-center">
            <div>
              <img
                src="/Group 18500.svg"
                alt="JavaScript Logo"
                className="w-15"
              />
            </div>
            <div className="flex flex-col gap-2">
              <h2 className="text-black font-medium text-xl">Graphic Design</h2>
              <p className="text-black font-extralight leading-5">
                Crafting modern visuals that enhance brand identity.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
