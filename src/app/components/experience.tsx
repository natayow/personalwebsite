"use client";
import { motion } from "framer-motion";
import React from "react";

export default function Experience() {
  return (
    <section id="experience" className="bg-[#1e1e1e] w-screen">
      <div className="flex justify-center mb-12 pt-18">
        <motion.h1
          initial={{ scale: 0.5, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6, ease: "backOut" }}
          viewport={{ once: true }}
          className="text-white text-2xl sm:text-3xl md:text-4xl font-medium text-center"
        >
          My <span className="text-[#fd6f00] font-medium">work experience</span>
        </motion.h1>
      </div>

      {/* Desktop: 3 columns (same design). Mobile: 1 column, image removed */}
      <div className="grid grid-cols-1 md:grid-cols-3 px-6 md:px-40 gap-8 md:gap-0">
        {/* Left column: Companies & dates */}
        <div className="flex flex-col gap-26">
          <div className="flex flex-col gap-2">
            <h1 className="text-xl font-semibold text-white">
              Cognizant, Mumbai
            </h1>
            <p className="text-base text-[#98A2B3] font-light">
              Sep 2016 - July 2020
            </p>
          </div>

          <div className="flex flex-col gap-2">
            <h1 className="text-xl font-semibold text-white">
              Sugee Pvt limited, Mumbai
            </h1>
            <p className="text-base text-[#98A2B3] font-light">
              Sep 2020 - July 2023
            </p>
          </div>

          <div className="flex flex-col gap-2">
            <h1 className="text-xl font-semibold text-white">
              Cinetstox, Mumbai
            </h1>
            <p className="text-base text-[#98A2B3] font-light">Sep 2023</p>
          </div>
        </div>

        {/* Middle column: Timeline image (hidden on small screens) */}
        <div className="hidden md:flex justify-center">
          <img src="/Frame 11.svg" alt="asdasd" className="w-11" />
        </div>

        {/* Right column: Roles & descriptions */}
        <div className="flex flex-col gap-18">
          <div className="flex flex-col gap-2">
            <h1 className="text-xl font-semibold text-white">
              Junior Developer
            </h1>
            <p className="text-base text-[#98A2B3] font-light">
              Supported web app development while learning agile and full-stack
              practices.
            </p>
          </div>

          <div className="flex flex-col gap-2">
            <h1 className="text-xl font-semibold text-white">UI/UX Designer</h1>
            <p className="text-base text-[#98A2B3] font-light">
              Designed web and mobile interfaces, refining them through
              usability testing.
            </p>
          </div>

          <div className="flex flex-col gap-2">
            <h1 className="text-xl font-semibold text-white">
              Frontend Developer
            </h1>
            <p className="text-base text-[#98A2B3] font-light">
              Developed responsive websites with React and Next.js for smoother
              user experiences.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
