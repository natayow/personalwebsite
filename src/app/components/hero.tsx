// app/components/Hero.tsx
"use client";
import { motion } from "framer-motion";
import React from "react";
import Image from "next/image";

export default function Hero() {
  return (
    <section id="hero" className="bg-[#1e1e1e] pt-9">
      <div className="mx-auto grid max-w-6xl items-center  px-6 py-16 md:grid-cols-2 justify-center">
        {/* Text */}
        <div className="flex flex-col w-full ">
          <div className="flex flex-col gap-1.5">
            <span className="text-white text-base font-medium">Hi I am</span>
            <motion.h1
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-[#fd6f00] text-xl md:text-2xl font-medium"
            >
              Nathasya Raynata Atmaja
            </motion.h1>
            <div className="mb-5 md:mb-6 flex flex-col">
              <div className="text-white font-bold leading-none text-4xl sm:5xl md:text-6xl lg:text-7xl">
                Web
              </div>
              <div className="text-white font-bold leading-none text-4xl sm:5xl md:text-6xl lg:text-7xl text-right flex-end">
                Developer
              </div>
            </div>
          </div>

          <p className="text-white text-sm sm:text-sm md:text-base font-light">
            I’m a professional web and app developer dedicated to crafting
            seamless, modern, and high-performance solutions. With expertise
            across design and development, I transform ideas into digital
            products that people love to use.
          </p>

          <button className="mt-4 h-[40px] w-[120px] md:h-[43px] md:w-[150px]  rounded-lg bg-[#fd6f00] text-white text-base md:text-base transition hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-white/30">
            Hire Me
          </button>
        </div>

        {/* Image */}
        <div className="flex justify-center ">
          <Image
            src="/static/Group 2.svg"
            alt="Hero illustration"
            width={250}
            height={250}
            priority
            className="w-[200px] sm:w-[300px] md:w-[300px] lg:w-[400px] h-auto"
          />
        </div>
      </div>
    </section>
  );
}
