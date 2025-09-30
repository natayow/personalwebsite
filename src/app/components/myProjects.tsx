"use client";
import React from "react";
import { motion } from "framer-motion";

export default function MyProjects() {
  return (
    <section id="project" className="bg-[#1e1e1e] w-screen">
      <div className="flex justify-center mb-9 pt-18">
        <motion.h1
          initial={{ scale: 0.5, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6, ease: "backOut" }}
          viewport={{ once: true }}
          className="text-white text-2xl sm:text-3xl md:text-4xl font-medium text-center"
        >
          A small selection of{" "}
          <span className="text-[#fd6f00] font-medium">recent projects</span>
        </motion.h1>
      </div>
      <div className="flex flex-col md:flex-row gap-6 items-center justify-center px-4 md:px-0">
        <div className="card bg-[#333333] w-full max-w-xs md:w-96 shadow-sm">
          <figure className="px-3 pt-3">
            <img src="/static/Card.png" alt="Shoes" className="rounded-xl" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">3D Solar System Planets to Explore</h2>
            <p>
              The wonders of our solar system with this captivating 3D
              simulation of the planets using Three.js.
            </p>
          </div>
        </div>
        <div className="card bg-[#333333] w-full max-w-xs md:w-96 shadow-sm">
          <figure className="px-3 pt-3">
            <img
              src="/static/Card (1).png"
              alt="Shoes"
              className="rounded-xl"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Animated Apple Iphone 3D Website</h2>
            <p>
              Recreated the Apple iPhone 15 Pro website, combining GSAP
              animations and Three.js 3D effects.
            </p>
          </div>
        </div>
        <div className="card bg-[#333333] w-full max-w-xs md:w-96 shadow-sm">
          <figure className="px-3 pt-3">
            <img
              src="/static/Card (2).png"
              alt="Shoes"
              className="rounded-xl"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Yoom - Video Conferencing App</h2>
            <p>
              Simplify your video conferencing experience with Yoom. Seamlessly
              connect with colleagues and friends.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
