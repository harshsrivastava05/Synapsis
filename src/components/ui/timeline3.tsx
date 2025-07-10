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
        {/* Eye/preview icon for hover */}
        <span className="flex items-center justify-center bg-black/30 backdrop-blur-sm p-4 rounded-full shadow-lg">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-10 h-10 animate-fade-in text-white dark:text-gray-200"
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

  const sectionGradient = isBlackSection
    ? "linear-gradient(180deg,#171717 0%,#171717 70%,#262626 85%,#404040 93%,#9ca3af 97%,#f3f4f6 100%)"
    : "linear-gradient(180deg,#f3f4f6 0%,#f3f4f6 70%,#e5e7eb 85%,#d1d5db 93%,#404040 97%,#171717 100%)";

  const topBlend = isBlackSection
    ? "linear-gradient(to bottom, #f3f4f6 0%, #d1d5db 25%, #a1a1a1 50%, #404040 75%, #171717 100%)"
    : "linear-gradient(to bottom, #171717 0%, #2f2f2f 25%, #606060 50%, #a1a1a1 75%, #f3f4f6 100%)";

  const bottomBlend =
    index < total - 1
      ? isBlackSection
        ? "linear-gradient(to top,#f3f4f6 0%,#d1d5db 0%,#9ca3af 0%,#404040 0%,#262626 0%,#171717 0%)"
        : "linear-gradient(to top,#171717 0%,#404040 0%,#9ca3af 0%,#d1d5db 0%,#e5e7eb 0%,#f3f4f6 0%)"
      : undefined;

  return (
    <div
      key={index}
      ref={sectionRef}
      className={`flex justify-start pt-10 pb-20 md:pt-40 md:gap-10 relative overflow-hidden transition-all duration-1000 ease-out ${
        isInView ? "opacity-100" : "opacity-80"
      }`}
      style={{ background: sectionGradient }}
    >
      {topBlend && (
        <div
          className="absolute -top-20 left-0 right-0 h-20 pointer-events-none z-10"
          style={{ background: topBlend }}
        />
      )}
      {bottomBlend && (
        <div
          className="absolute -bottom-20 left-0 right-0 h-20 pointer-events-none z-10"
          style={{ background: bottomBlend }}
        />
      )}

      <div className="flex flex-col md:flex-row z-40 items-center top-40 self-start max-w-xs lg:max-w-sm md:w-full relative">
        <motion.div
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{
            scale: isInView ? 1 : 0.75,
            opacity: isInView ? 1 : 0.7,
          }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className={`h-10 absolute left-3 md:left-3 w-10 rounded-full flex items-center justify-center backdrop-blur-sm ${
            isBlackSection
              ? "bg-white/20 shadow-2xl shadow-white/30 border border-white/40"
              : "bg-black/20 shadow-2xl shadow-black/30 border border-black/40"
          }`}
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: isInView ? 1 : 0.5 }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            className={`h-4 w-4 rounded-full border p-2 ${
              isBlackSection
                ? "bg-white/60 border-white/70 shadow-inner"
                : "bg-black/30 border-black/50 shadow-inner"
            }`}
          />
        </motion.div>
        <motion.h3
          initial={{ opacity: 0, x: -30 }}
          animate={{
            opacity: isInView ? 1 : 0.7,
            x: isInView ? 0 : -30,
          }}
          transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
          className={`hidden md:block text-xl md:pl-20 md:text-5xl font-bold ${
            isBlackSection
              ? "text-white drop-shadow-2xl"
              : "text-neutral-900 drop-shadow-lg"
          }`}
        >
          {item.title}
        </motion.h3>
      </div>

      {/* ───────── RIGHT COLUMN ───────── */}
      <div className="relative pl-20 pr-4 md:pl-4 w-full z-30">
        {/* mobile heading */}
        <motion.h3
          initial={{ opacity: 0, y: 20 }}
          animate={{
            opacity: isInView ? 1 : 0.7,
            y: isInView ? 0 : 20,
          }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className={`md:hidden block text-2xl mb-4 font-bold ${
            isBlackSection
              ? "text-white drop-shadow-2xl"
              : "text-neutral-900 drop-shadow-lg"
          }`}
        >
          {item.title}
        </motion.h3>

        {/* hero image or carousel */}
        <Link href={`/projects/${item.title}`}>
          <motion.div
            initial={{ scale: 0.9, opacity: 0.7, y: 30 }}
            animate={{
              scale: isInView ? 1 : 0.9,
              opacity: isInView ? 1 : 0.7,
              y: isInView ? 0 : 30,
            }}
            whileHover={{
              scale: 1.05,
              zIndex: 20,
              transition: { duration: 0.3, ease: "easeOut" },
            }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className={`w-full h-96 md:h-[28rem] max-h-[36rem] mx-auto rounded-lg relative overflow-hidden ${
              isBlackSection
                ? "shadow-2xl shadow-black/60 hover:shadow-black/80"
                : "shadow-2xl shadow-gray-400/40 hover:shadow-gray-500/50"
            }`}
          >
            {/* subtle glare */}
            <div
              className={`absolute inset-0 rounded-lg transition-all duration-500 ease-out ${
                isBlackSection
                  ? "bg-gradient-to-br from-white/10 via-white/5 to-transparent"
                  : "bg-gradient-to-br from-gray-200/30 via-gray-200/10 to-transparent"
              }`}
            />
            <TimelineImageCarousel
              images={item.content.images}
              fallbackImg={item.content.img}
              alt={item.content.alt}
            />
          </motion.div>
        </Link>

        {/* description */}
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
            className={`mt-4 text-base md:text-lg ${
              isBlackSection
                ? "text-gray-200 drop-shadow-lg"
                : "text-neutral-700 drop-shadow-sm"
            }`}
          >
            {item.content.description}
          </motion.p>
        )}

        {/* checklist */}
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
            className="mt-4"
          >
            <h4
              className={`text-lg font-semibold mb-2 ${
                isBlackSection
                  ? "text-white drop-shadow-lg"
                  : "text-neutral-800 drop-shadow-sm"
              }`}
            >
              Key Features:
            </h4>
            <ul
              className={`space-y-2 ${
                isBlackSection
                  ? "text-gray-200 drop-shadow-lg"
                  : "text-neutral-700 drop-shadow-sm"
              }`}
            >
              {item.content.checklist.map((listItem, idx) => (
                <motion.li
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
                  className="flex items-start space-x-2"
                >
                  <span
                    className={`inline-block w-2 h-2 rounded-full mt-2 flex-shrink-0 ${
                      isBlackSection ? "bg-white/60" : "bg-neutral-600"
                    }`}
                  />
                  <span>{listItem}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        )}
      </div>
    </div>
  );
}

export const Timeline2 = ({ data }: { data: TimelineEntry[] }) => {
  const ref = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (ref.current) setHeight(ref.current.getBoundingClientRect().height);
  }, []);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 10%", "end 50%"],
  });
  const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
  const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

  return (
    <div
      ref={containerRef}
      className="w-full bg-gray-100 dark:bg-neutral-900 font-sans md:px-10"
    >
      {/* top spacer */}
      <div className="max-w-7xl mx-auto py-20 px-4 md:px-8 lg:px-10" />

      <div ref={ref} className="relative w-full mx-auto pb-20">
        {data.map((item, index) => (
          <Section key={index} item={item} index={index} total={data.length} />
        ))}

        {/* vertical timeline + progress bar */}
        <div
          style={{ height: `${height}px` }}
          className="absolute md:left-8 left-8 top-0 overflow-hidden w-[2px] bg-[linear-gradient(to_bottom,var(--tw-gradient-stops))] from-transparent via-neutral-200 dark:via-neutral-700 to-transparent [mask-image:linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)]"
        >
          <motion.div
            style={{ height: heightTransform, opacity: opacityTransform }}
            className="absolute inset-x-0 top-0 w-[2px] bg-gradient-to-t from-purple-500 via-blue-500 to-transparent rounded-full"
          />
        </div>
      </div>
    </div>
  );
};
