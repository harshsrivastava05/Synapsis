"use client";
import React, { useRef } from "react";
import { useScroll, useTransform, motion, MotionValue } from "framer-motion";
import { useInView } from "framer-motion";

export const ContainerScroll = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
  });

  const isContainerInView = useInView(containerRef, { once: false, amount: 0.1 });

  const rotate = useTransform(scrollYProgress, [0, 1], [20, 0]);
  const translate = useTransform(scrollYProgress, [0, 1], [0, -100]);

  return (
    <div
      className={`min-h-screen flex items-center justify-center relative ${isContainerInView ? 'w-screen max-w-none' : 'w-full'}`}
      ref={containerRef}
    >
      <div
        style={{
          perspective: "1500px",
        }}
      >
        <Card rotate={rotate} translate={translate}>
          {children}
        </Card>
      </div>
    </div>
  );
};

export const Card = ({
  rotate,
  translate,
  children,
}: {
  rotate: MotionValue<number>;
  translate: MotionValue<number>;
  children: React.ReactNode;
}) => {
  const ref = React.useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { amount: 0.5, once: false });

  return (
    <motion.div
      ref={ref}
      style={{
        rotateX: rotate,
        width: isInView ? '100vw' : '70rem',
        left: isInView ? '50%' : 'auto',
        transform: isInView ? 'translateX(-50%)' : 'none',
        position: isInView ? 'fixed' : 'relative',
        top: isInView ? '50%' : 'auto',
        zIndex: isInView ? 50 : 'auto',
        transition: 'width 0.6s cubic-bezier(0.4,0,0.2,1), left 0.6s, transform 0.6s, position 0.6s, top 0.6s',
      }}
    >
      {children}
    </motion.div>
  );
};
