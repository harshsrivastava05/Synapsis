"use client";
import { useScroll, useTransform, motion, useInView } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";

interface TimelineEntry {
  title: string;
  content: {
    img: string;
    alt: string;
    type: "desktop" | "mobile";
    description?: string;
    checklist?: string[];
    className?: string;
    images?: string[];
  };
}

interface TimelineImageCarouselProps {
  images?: string[];
  alt: string;
  fallbackImg?: string;
}

function TimelineImageCarousel({
  images,
  alt,
  fallbackImg,
}: TimelineImageCarouselProps) {
  const imgs = images?.length ? images : fallbackImg ? [fallbackImg] : [];
  const [idx, setIdx] = useState(0);
  const [hovered, setHovered] = useState(false);

  useEffect(() => {
    if (hovered && imgs.length > 1) {
      const id = setInterval(() => setIdx((p) => (p + 1) % imgs.length), 500);
      return () => clearInterval(id);
    }
  }, [hovered, imgs.length]);

  if (imgs.length === 0) return null;

  return (
    <div
      className="relative group w-full h-full cursor-pointer"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <Image
        src={imgs[idx]}
        alt={alt}
        width={960}
        height={540}
        sizes="100vw"
        className={
          "w-full h-full object-contain rounded-lg transition-all duration-300 ease-out" +
          (hovered ? " blur-xs" : "")
        }
      />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: hovered ? 1 : 0 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
        className="absolute inset-0 flex items-center justify-center z-20 pointer-events-none"
      >
        <span className="flex items-center justify-center bg-black/30 backdrop-blur-sm p-4 rounded-full shadow-lg">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-10 h-10 animate-fade-in text-white"
            aria-label="Preview image"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M2.25 12s3.75-7.5 9.75-7.5 9.75 7.5 9.75 7.5-3.75 7.5-9.75 7.5S2.25 12 2.25 12z"
            />
            <circle
              cx="12"
              cy="12"
              r="3"
              fill="currentColor"
              stroke="currentColor"
              strokeWidth="1.5"
            />
          </svg>
        </span>
      </motion.div>
    </div>
  );
}

function Section({
  item,
  index,
  total,
}: {
  item: TimelineEntry;
  index: number;
  total: number;
}) {
  const sectionRef = React.useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { margin: "-100px 0px" });
  const isBlackSection = index % 2 === 0;

  return (
    <div
      key={index}
      ref={sectionRef}
      className={`relative min-h-screen w-full py-24 px-4 md:px-12 transition-all duration-1000 ease-out ${
        isInView ? "opacity-100" : "opacity-80"
      } ${
        isBlackSection
          ? "bg-neutral-800 text-white"
          : "bg-gray-100 text-neutral-900"
      }`}
    >
      {/* Decorative background elements matching about us section */}
      <motion.div
        className={`absolute top-20 left-10 w-64 h-64 rounded-full blur-3xl ${
          isBlackSection ? "bg-neutral-700/20" : "bg-neutral-300/20"
        }`}
        animate={{
          y: [0, -15, 0],
          rotate: [0, 10, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className={`absolute bottom-20 right-10 w-80 h-80 rounded-full blur-3xl ${
          isBlackSection ? "bg-neutral-600/20" : "bg-neutral-400/20"
        }`}
        animate={{
          y: [0, 20, 0],
          rotate: [0, -10, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2,
        }}
      />

      {/* Floating accent elements */}
      <motion.div
        className={`absolute top-1/4 left-1/4 w-4 h-4 rounded-full ${
          isBlackSection ? "bg-neutral-400/80" : "bg-neutral-600/80"
        }`}
        animate={{
          y: [0, -15, 0],
          opacity: [0.5, 1, 0.5],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className={`absolute bottom-1/3 right-1/4 w-6 h-6 rounded-full ${
          isBlackSection ? "bg-neutral-500/80" : "bg-neutral-500/80"
        }`}
        animate={{
          y: [0, 20, 0],
          opacity: [0.5, 1, 0.5],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
      />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
          {/* Left side - Timeline indicator and title */}
          <div className="flex flex-col md:flex-row items-center md:items-start gap-4 md:gap-6 flex-shrink-0">
            {/* Timeline dot */}
            <motion.div
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{
                scale: isInView ? 1 : 0.75,
                opacity: isInView ? 1 : 0.7,
              }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className={`w-12 h-12 rounded-full flex items-center justify-center backdrop-blur-sm border-2 ${
                isBlackSection
                  ? "bg-white/20 border-white/40 shadow-2xl shadow-white/20"
                  : "bg-black/20 border-black/40 shadow-2xl shadow-black/20"
              }`}
            >
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: isInView ? 1 : 0.5 }}
                transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
                className={`w-6 h-6 rounded-full ${
                  isBlackSection
                    ? "bg-white/60 shadow-inner shadow-white/30"
                    : "bg-black/60 shadow-inner shadow-black/30"
                }`}
              />
            </motion.div>

            {/* Title */}
            <motion.h3
              initial={{ opacity: 0, x: -30 }}
              animate={{
                opacity: isInView ? 1 : 0.7,
                x: isInView ? 0 : -30,
              }}
              transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
              className={`text-2xl md:text-4xl font-bold max-w-md ${
                isBlackSection
                  ? "text-white drop-shadow-2xl"
                  : "text-neutral-900 drop-shadow-lg"
              }`}
            >
              {item.title}
            </motion.h3>
          </div>

          {/* Right side - Content */}
          <div className="flex-1 w-full">
            {/* Project image */}
            <Link href={`/projects/${item.title}`}>
              <motion.div
                initial={{ scale: 0.9, opacity: 0.7, y: 30 }}
                animate={{
                  scale: isInView ? 1 : 0.9,
                  opacity: isInView ? 1 : 0.7,
                  y: isInView ? 0 : 30,
                }}
                whileHover={{
                  scale: 1.02,
                  transition: { duration: 0.3, ease: "easeOut" },
                }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className={`w-full h-96 md:h-[32rem] max-w-4xl mx-auto rounded-xl relative overflow-hidden ${
                  isBlackSection
                    ? "shadow-2xl shadow-black/60 hover:shadow-black/80 border border-white/10"
                    : "shadow-2xl shadow-gray-600/40 hover:shadow-gray-700/60 border border-black/10"
                }`}
              >
                {/* Subtle overlay */}
                <div
                  className={`absolute inset-0 rounded-xl transition-all duration-500 ease-out ${
                    isBlackSection
                      ? "bg-gradient-to-br from-white/5 via-white/2 to-transparent"
                      : "bg-gradient-to-br from-black/5 via-black/2 to-transparent"
                  }`}
                />
                <TimelineImageCarousel
                  images={item.content.images}
                  fallbackImg={item.content.img}
                  alt={item.content.alt}
                />
              </motion.div>
            </Link>

            {/* Description */}
            {item.content.description && (
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{
                  opacity: isInView ? 1 : 0.7,
                  y: isInView ? 0 : 20,
                }}
                transition={{
                  duration: 0.8,
                  delay: 0.2,
                  ease: "easeOut",
                }}
                className={`mt-6 text-lg md:text-xl max-w-4xl mx-auto text-center ${
                  isBlackSection
                    ? "text-neutral-200 drop-shadow-lg"
                    : "text-neutral-700 drop-shadow-sm"
                }`}
              >
                {item.content.description}
              </motion.p>
            )}

            {/* Checklist */}
            {item.content.checklist && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{
                  opacity: isInView ? 1 : 0.7,
                  y: isInView ? 0 : 20,
                }}
                transition={{
                  duration: 0.8,
                  delay: 0.3,
                  ease: "easeOut",
                }}
                className="mt-8 max-w-4xl mx-auto"
              >
                <h4
                  className={`text-xl font-semibold mb-4 text-center ${
                    isBlackSection
                      ? "text-white drop-shadow-lg"
                      : "text-neutral-800 drop-shadow-sm"
                  }`}
                >
                  Key Features:
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {item.content.checklist.map((listItem, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{
                        opacity: isInView ? 1 : 0.7,
                        x: isInView ? 0 : -20,
                      }}
                      transition={{
                        duration: 0.6,
                        delay: 0.4 + idx * 0.1,
                        ease: "easeOut",
                      }}
                      className={`flex items-start space-x-3 p-4 rounded-lg backdrop-blur-sm ${
                        isBlackSection
                          ? "bg-white/10 border border-white/20"
                          : "bg-black/5 border border-black/10"
                      }`}
                    >
                      <span
                        className={`inline-block w-2 h-2 rounded-full mt-2 flex-shrink-0 ${
                          isBlackSection ? "bg-white/80" : "bg-neutral-600"
                        }`}
                      />
                      <span
                        className={`text-base ${
                          isBlackSection
                            ? "text-neutral-200"
                            : "text-neutral-700"
                        }`}
                      >
                        {listItem}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export const Timeline3 = ({ data }: { data: TimelineEntry[] }) => {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <div ref={containerRef} className="w-full font-sans">
      {data.map((item, index) => (
        <Section key={index} item={item} index={index} total={data.length} />
      ))}
    </div>
  );
};