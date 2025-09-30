"use client";
import { motion } from "framer-motion";
import React from "react";
import { HiOutlineLocationMarker, HiOutlineMail } from "react-icons/hi";
import { HiOutlinePhone } from "react-icons/hi2";

export default function ContactMe() {
  return (
    <section id="contact" className="bg-[#333333] border-y border-[#fd6f00]">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 py-14 sm:py-18">
        {/* Header */}
        <div className="flex flex-col gap-4 text-center">
          <motion.h1
            initial={{ scale: 0.5, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6, ease: "backOut" }}
            className="text-white text-2xl sm:text-3xl md:text-4xl font-medium text-center"
          >
            Contact Me
          </motion.h1>
          <p className="text-white/90 text-sm sm:text-base font-light max-w-3xl mx-auto">
            What&apos;s next? Feel free to reach out if you&apos;re looking for
            a developer, have a query, or simply want to connect.
          </p>
        </div>

        {/* Cards */}
        <div className="mt-10 sm:mt-12 grid grid-cols-1 md:grid-cols-3 gap-3 sm:gap-4">
          {/* Email */}
          <a
            href="mailto:natayow@gmail.com"
            className="group flex items-center gap-3 rounded-lg bg-[#1E1E1E] px-4 py-4 sm:px-5 sm:py-5 ring-1 ring-white/10 hover:ring-[#fd6f00]/60 transition"
          >
            <HiOutlineMail
              aria-hidden
              className="text-white text-xl sm:text-2xl shrink-0"
            />
            <div className="min-w-0">
              <p className="text-xs uppercase tracking-wide text-white/70">
                Email
              </p>
              <p className="text-[#fd6f00] truncate group-hover:underline">
                natayow@gmail.com
              </p>
            </div>
          </a>

          {/* Phone */}
          <a
            href="tel:+628111651616"
            className="group flex items-center gap-3 rounded-lg bg-[#1E1E1E] px-4 py-4 sm:px-5 sm:py-5 ring-1 ring-white/10 hover:ring-[#fd6f00]/60 transition"
          >
            <HiOutlinePhone
              aria-hidden
              className="text-white text-xl sm:text-2xl shrink-0"
            />
            <div className="min-w-0">
              <p className="text-xs uppercase tracking-wide text-white/70">
                Phone
              </p>
              <p className="text-[#fd6f00] truncate group-hover:underline">
                +62 811 1651 616
              </p>
            </div>
          </a>

          {/* Location */}
          <div className="flex items-center gap-3 rounded-lg bg-[#1E1E1E] px-4 py-4 sm:px-5 sm:py-5 ring-1 ring-white/10">
            <HiOutlineLocationMarker
              aria-hidden
              className="text-white text-xl sm:text-2xl shrink-0"
            />
            <div className="min-w-0">
              <p className="text-xs uppercase tracking-wide text-white/70">
                Location
              </p>
              <p className="text-[#fd6f00] truncate">Jakarta, Indonesia</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
