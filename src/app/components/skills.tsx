"use client";
import { motion } from "framer-motion";
import React from "react";

export default function Skills() {
  return (
    <section id="skills" className="bg-[#333333] border-[#fd6f00] border-y">
      <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-10 py-14 sm:py-16">
        {/* Header */}
        <div className="flex flex-col gap-3">
          <motion.h1
            initial={{ scale: 0.5, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6, ease: "backOut" }}
            className="text-white text-2xl sm:text-3xl md:text-4xl font-medium text-center"
          >
            Skills
          </motion.h1>
          <p className="text-white/90 text-sm sm:text-base text-center font-light">
            The skills, tools & technologies I&apos;m really good at
          </p>
        </div>

        {/* Grid */}
        <div
          className="
            grid gap-6 sm:gap-7 lg:gap-9 mt-10 sm:mt-12 justify-items-center items-center
            grid-cols-3 xs:grid-cols-4 md:grid-cols-6 lg:grid-cols-8
          "
        >
          {/* Each item */}
          {[
            { src: "/static/icon-javscript.svg", label: "JavaScript" },
            { src: "/static/icon-typescript.svg", label: "TypeScript" },
            { src: "/static/icon-react.svg", label: "React" },
            { src: "/static/icon-nextjs.svg", label: "Next.js" },
            { src: "/static/icon-nodejs.svg", label: "Node.js" },
            { src: "/static/icon-express.svg", label: "Express.js" },
            { src: "/static/icon-nest.svg", label: "Nest.js" },
            { src: "/static/icon-socket.svg", label: "Socket.io" },
            { src: "/static/icon-postgresql.svg", label: "PostgreSQL" },
            { src: "/static/icon-mongodb.svg", label: "MongoDB" },
            { src: "/static/icon-sass.svg", label: "Sass/SCSS" },
            { src: "/static/icon-tailwindcss.svg", label: "TailwindCSS" },
            { src: "/static/icon-figma.svg", label: "Figma" },
            { src: "/static/icon-cypress.svg", label: "Cypress" },
            { src: "/static/icon-storybook.svg", label: "Storybook" },
            { src: "/static/icon-git.svg", label: "Git" },
          ].map((item) => (
            <div
              key={item.label}
              className="flex flex-col items-center gap-2 sm:gap-2.5"
            >
              <img
                src={item.src}
                alt={item.label}
                loading="lazy"
                className="h-10 w-10 sm:h-12 sm:w-12 lg:h-14 lg:w-14 object-contain"
              />
              <p className="text-white font-light text-xs sm:text-sm text-center">
                {item.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
