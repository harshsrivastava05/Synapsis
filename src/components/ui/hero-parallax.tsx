"use client";
import React from "react";
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  MotionValue,
} from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export const HeroParallax = ({
  products,
}: {
  products: {
    title: string;
    link: string;
    thumbnail: string;
  }[];
}) => {
  const firstRow = products.slice(0, 4);
  const secondRow = products.slice(4, 8);

  const ref = React.useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  // Smoother spring configuration
  const springConfig = { stiffness: 100, damping: 25, bounce: 0 };

  const translateX = useSpring(
    useTransform(scrollYProgress, [0, 1], [0, 800]),
    springConfig
  );
  const translateXReverse = useSpring(
    useTransform(scrollYProgress, [0, 1], [0, -800]),
    springConfig
  );
  const rotateX = useSpring(
    useTransform(scrollYProgress, [0, 0.3], [15, 0]),
    springConfig
  );
  const opacity = useSpring(
    useTransform(scrollYProgress, [0, 0.3], [0.4, 1]),
    springConfig
  );
  const rotateZ = useSpring(
    useTransform(scrollYProgress, [0, 0.3], [10, 0]),
    springConfig
  );
  const translateY = useSpring(
    useTransform(scrollYProgress, [0, 0.3], [-500, 300]),
    springConfig
  );

  return (
    <div
      ref={ref}
      className="h-[270vh] py-20  antialiased relative flex flex-col self-auto [perspective:2000px] [transform-style:preserve-3d]"
    >
      <Header />
      <motion.div
        style={{
          rotateX,
          rotateZ,
          translateY,
          opacity,
        }}
        className=""
      >
        <motion.div className="flex flex-row-reverse space-x-reverse space-x-20 mb-10">
          {firstRow.map((product) => (
            <Link href={product.link} target="_blank" rel="noopener noreferrer" key={product.title}>
              <ProductCard
                product={product}
                translate={translateX}
                key={product.title}
              />
            </Link>
          ))}
        </motion.div>
        <motion.div className="flex flex-row mb-10 space-x-20">
          {secondRow.map((product) => (
            <Link href={product.link} target="_blank" rel="noopener noreferrer" key={product.title}>
              <ProductCard
                product={product}
                translate={translateXReverse}
                key={product.title}
              />
            </Link>
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
};

export const Header = () => {
  return (
    <div className="max-w-7xl relative mx-auto py-20 md:py-40 px-4 w-full left-0 top-0">
      <h1 className="text-2xl md:text-7xl font-bold text-neutral-900">
        Synapsis Medical <br /> Technologies Inc.
      </h1>
      <p className="max-w-2xl text-base font-semibold md:text-xl mt-8 text-neutral-700">
        We build AI-powered systems for real-world challenges across multiple
        industries using advanced tech like MediaPipe, sensors, and live
        tracking. With growing ambitions in nanotechnology, our solutions are
        designed to improve lives and streamline operations.
      </p>
    </div>
  );
};

export const ProductCard = ({
  product,
  translate,
}: {
  product: {
    title: string;
    link: string;
    thumbnail: string;
  };
  translate: MotionValue<number>;
}) => {
  return (
    <motion.div
      style={{
        x: translate,
      }}
      whileHover={{
        y: -20,
        transition: { duration: 0.3, ease: "easeOut" },
      }}
      key={product.title}
      className="group/product h-96 w-[30rem] relative shrink-0"
    >
      <div className="block group-hover/product:shadow-2xl transition-shadow duration-300">
        <Image
          src={product.thumbnail}
          height="600"
          width="600"
          className="object-cover object-left-top absolute h-full w-full inset-0"
          alt={product.title}
        />
      </div>
      <div className="absolute inset-0 h-full w-full opacity-0 group-hover/product:opacity-80 bg-black pointer-events-none transition-opacity duration-300"></div>
      <h2 className="absolute bottom-4 left-4 opacity-0 group-hover/product:opacity-100 text-white transition-opacity duration-300">
        {product.title}
      </h2>
    </motion.div>
  );
};
