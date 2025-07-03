"use client";
import { useScroll, useTransform, motion } from "framer-motion";
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
function TimelineImageCarousel({ images, alt, fallbackImg }: TimelineImageCarouselProps) {
  const imgs = images && images.length > 0 ? images : fallbackImg ? [fallbackImg] : [];
  const [idx, setIdx] = useState(0);
  const [hovered, setHovered] = useState(false);
  useEffect(() => {
    if (hovered && imgs.length > 1) {
      const interval = setInterval(() => {
        setIdx((prev) => (prev + 1) % imgs.length);
      }, 500);
      return () => clearInterval(interval);
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
        className={
          "w-full h-full object-contain rounded-lg transition duration-200" +
          (hovered ? " blur-xs" : "")
        }
        sizes="100vw"
      />
      {/* Overlay text on hover */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: hovered ? 1 : 0 }}
        transition={{ duration: 0.2 }}
        className="absolute inset-0 flex items-center justify-center z-20 pointer-events-none"
      >
        <span className="text-white text-lg font-semibold bg-black/20 px-6 py-3 rounded-lg shadow-lg">
          Click to know more details
        </span>
      </motion.div>
      
    </div>
  );
}

export const Timeline = ({ data }: { data: TimelineEntry[] }) => {
  const ref = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect();
      setHeight(rect.height);
    }
  }, [ref]);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 10%", "end 50%"],
  });

  const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
  const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

  return (
    <div
      className="w-full bg-white dark:bg-neutral-950 font-sans md:px-10"
      ref={containerRef}
    >
      <div className="max-w-7xl mx-auto py-20 px-4 md:px-8 lg:px-10" />

      <div ref={ref} className="relative w-full mx-auto pb-20">
        {data.map((item, index) => (
          <div
            key={index}
            className={`flex justify-start pt-10 md:pt-40 md:gap-10`}
          >
            <div className="sticky flex flex-col md:flex-row z-40 items-center top-40 self-start max-w-xs lg:max-w-sm md:w-full">
              <div className="h-10 absolute left-3 md:left-3 w-10 rounded-full bg-white dark:bg-black flex items-center justify-center">
                <div className="h-4 w-4 rounded-full bg-neutral-200 dark:bg-neutral-800 border border-neutral-300 dark:border-neutral-700 p-2" />
              </div>
              <h3 className="hidden md:block text-xl md:pl-20 md:text-5xl font-bold text-neutral-600 dark:text-neutral-500 ">
                {item.title}
              </h3>
            </div>

            <div className="relative pl-20 pr-4 md:pl-4 w-full">
              <h3 className="md:hidden block text-2xl mb-4 text-left font-bold text-neutral-500 dark:text-neutral-500">
                {item.title}
              </h3>
              <Link href={`/projects/${item.title}`}>
                <motion.div
                  whileHover={{ scale: 1.04, zIndex: 20 }}
                  className={`w-full h-96 md:h-[28rem] max-h-[36rem] mx-auto rounded-lg shadow relative`}
                >
                  <TimelineImageCarousel images={item.content.images} fallbackImg={item.content.img} alt={item.content.alt} />
                </motion.div>
              </Link>
              {item.content.description && (
                <p className="mt-4 text-neutral-600 text-base md:text-lg">
                  {item.content.description}
                </p>
              )}
              {item.content.checklist && (
                <div className="mt-4">
                  <h4 className="text-lg font-semibold text-neutral-700 dark:text-neutral-300">
                    Key Features:
                  </h4>
                  <ul className="list-disc list-inside text-neutral-600 dark:text-neutral-400">
                    {item.content.checklist.map((item, index) => (
                      <li key={index} className="mb-2">
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>
        ))}
        <div
          style={{
            height: height + "px",
          }}
          className="absolute md:left-8 left-8 top-0 overflow-hidden w-[2px] bg-[linear-gradient(to_bottom,var(--tw-gradient-stops))] from-transparent from-[0%] via-neutral-200 dark:via-neutral-700 to-transparent to-[99%]  [mask-image:linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)] "
        >
          <motion.div
            style={{
              height: heightTransform,
              opacity: opacityTransform,
            }}
            className="absolute inset-x-0 top-0  w-[2px] bg-gradient-to-t from-purple-500 via-blue-500 to-transparent from-[0%] via-[10%] rounded-full"
          />
        </div>
      </div>
    </div>
  );
};
