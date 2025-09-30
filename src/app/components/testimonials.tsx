"use client";
import { motion } from "framer-motion";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

type Testimonial = {
  id: string;
  name: string;
  title: string;
  quote: string;
  avatar: string; // public path or remote URL
};

const testimonials: Testimonial[] = [
  {
    id: "1",
    name: "Rivan Hamka",
    title: "CEO",
    quote:
      "Job well done! I am really impressed. She is very very good at what she does:) I would recommend Nata and will rehire her in the future for Frontend development.",
    avatar: "/static/ava1.jpg",
  },
  {
    id: "2",
    name: "Chicha Amalia",
    title: "Founder",
    quote:
      "Great! highly recommended for any COMPLEX front-end development job! Her skills are top-notch and she will be an amazing addition to any team.",
    avatar: "/IMG_6662.jpg",
  },
  {
    id: "3",
    name: "Namira Ratu",
    title: "Engineer",
    quote:
      "Nata was extremely easy and pleasant to work with and she truly cares about the project being a success. Nata has a high level of knowledge!!!",
    avatar: "/IMG_6663.jpg",
  },
];

export default function Testimonial() {
  const [index, setIndex] = useState(0);
  const count = testimonials.length;
  const clamp = (n: number) => (n + count) % count;

  // Touch/drag support
  const startX = useRef<number | null>(null);
  const deltaX = useRef(0);

  const onTouchStart = (e: React.TouchEvent) => {
    startX.current = e.touches[0].clientX;
    deltaX.current = 0;
  };
  const onTouchMove = (e: React.TouchEvent) => {
    if (startX.current === null) return;
    deltaX.current = e.touches[0].clientX - startX.current;
  };
  const onTouchEnd = () => {
    if (Math.abs(deltaX.current) > 60) {
      setIndex((i) => clamp(i + (deltaX.current < 0 ? 1 : -1)));
    }
    startX.current = null;
    deltaX.current = 0;
  };

  // Keyboard (left/right) – optional but nice
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") setIndex((i) => clamp(i + 1));
      if (e.key === "ArrowLeft") setIndex((i) => clamp(i - 1));
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, []);

  return (
    <section id="testi" className="w-full bg-[#1e1e1e] py-19 md:py-19">
      <div className="flex flex-col gap-3">
        <motion.h1
          initial={{ scale: 0.5, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6, ease: "backOut" }}
          className="text-white text-2xl sm:text-3xl md:text-4xl font-medium text-center"
        >
          Testimonials
        </motion.h1>
        <p className="text-white/90 text-sm sm:text-base text-center font-light mb-9">
          Nice things people have said about me
        </p>
      </div>
      <div className="mx-auto max-w-6xl px-4">
        {/* Viewport */}
        <div
          className="relative overflow-hidden"
          onTouchStart={onTouchStart}
          onTouchMove={onTouchMove}
          onTouchEnd={onTouchEnd}
        >
          {/* Track */}
          <div
            className="flex transition-transform duration-500 ease-[cubic-bezier(.22,.61,.36,1)]"
            style={{ transform: `translateX(-${index * 100}%)` }}
          >
            {testimonials.map((t) => (
              <article
                key={t.id}
                className="min-w-full px-2 md:px-8"
                aria-roledescription="slide"
              >
                <div className="rounded-2xl bg-white/95 p-6 shadow-xl md:p-10">
                  <div className="flex flex-col gap-6 md:flex-row md:items-start">
                    <div className="mx-auto h-40 w-40 shrink-0 overflow-hidden rounded-full border-4 border-white shadow md:mx-0 md:h-44 md:w-44">
                      <Image
                        src={t.avatar}
                        alt={`${t.name} avatar`}
                        width={176}
                        height={176}
                        className="h-full w-full object-cover"
                      />
                    </div>

                    <div className="text-[#2b2b2b]">
                      <span className="text-3xl text-orange-500 leading-none">
                        “
                      </span>
                      <p className="mt-2 text-base leading-7 text-[#2b2b2b]/90 md:text-lg">
                        {t.quote}
                      </p>
                      <span className="block text-right text-3xl text-orange-500 leading-none">
                        ”
                      </span>

                      <div className="mt-4">
                        <h4 className="text-lg font-semibold">{t.name}</h4>
                        <p className="text-sm text-neutral-500">{t.title}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>

        {/* Indicators */}
        <div className="mt-6 flex items-center justify-center gap-3">
          {testimonials.map((_, i) => {
            const active = i === index;
            return (
              <button
                key={i}
                onClick={() => setIndex(i)}
                aria-label={`Go to slide ${i + 1}`}
                className={[
                  "h-3 rounded-full transition-all",
                  active ? "w-14 bg-orange-500" : "w-8 bg-neutral-500/50",
                  "hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-orange-500/50",
                ].join(" ")}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}
