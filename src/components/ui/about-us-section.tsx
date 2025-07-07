"use client";

import type React from "react";

import { useState, useEffect, useRef } from "react";
import {
  Pen,
  Award,
  Users,
  Calendar,
  CheckCircle,
  Sparkles,
  Star,
  ArrowRight,
  TrendingUp,
  HeartPulse,
  Cpu,
  BarChart3,
  Layers3,
  FlaskConical,
} from "lucide-react";
import {
  motion,
  useScroll,
  useTransform,
  useInView,
  useSpring,
  easeInOut,
} from "framer-motion";
import Link from "next/link";
import Image from "next/image";

export default function AboutUsSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: false, amount: 0.1 });
  const isStatsInView = useInView(statsRef, { once: false, amount: 0.3 });

  // Parallax effect for decorative elements
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [0, -50]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, 50]);
  const rotate1 = useTransform(scrollYProgress, [0, 1], [0, 20]);
  const rotate2 = useTransform(scrollYProgress, [0, 1], [0, -20]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 500, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: easeInOut },
    },
  };

  const services = [
    {
      icon: <Pen className="w-6 h-6" />,
      secondaryIcon: (
        <Sparkles className="w-4 h-4 absolute -top-1 -right-1 text-gray-500" />
      ),
      title: "AI & NLP Solutions",
      description:
        "Build context-aware, language-intelligent systems using AI and NLP to automate workflows, generate insights, and enhance communication.",
      position: "left",
    },
    {
      icon: <HeartPulse className="w-6 h-6" />,
      secondaryIcon: (
        <CheckCircle className="w-4 h-4 absolute -top-1 -right-1 text-gray-500" />
      ),
      title: "Healthcare Software",
      description:
        "Design scalable platforms for clinics and hospitals that manage appointments, diagnostics, patient records, and AI-powered health analytics.",
      position: "left",
    },
    {
      icon: <Cpu className="w-6 h-6" />,
      secondaryIcon: (
        <Star className="w-4 h-4 absolute -top-1 -right-1 text-gray-500" />
      ),
      title: "Wearables & Devices",
      description:
        "Integrate with health monitoring devices and wearables to track vitals, enable diagnostics, and improve preventive care experiences.",
      position: "left",
    },
    {
      icon: <BarChart3 className="w-6 h-6" />,
      secondaryIcon: (
        <Sparkles className="w-4 h-4 absolute -top-1 -right-1 text-gray-500" />
      ),
      title: "Data & Health Analytics",
      description:
        "Leverage predictive models, dashboards, and trend detection to extract actionable insights from healthcare and operations data.",
      position: "right",
    },
    {
      icon: <Layers3 className="w-6 h-6" />,
      secondaryIcon: (
        <CheckCircle className="w-4 h-4 absolute -top-1 -right-1 text-gray-500" />
      ),
      title: "System Integration",
      description:
        "Seamlessly connect devices, databases, and software layers across healthcare and enterprise systems with scalable architecture.",
      position: "right",
    },
    {
      icon: <FlaskConical className="w-6 h-6" />,
      secondaryIcon: (
        <Star className="w-4 h-4 absolute -top-1 -right-1 text-gray-500" />
      ),
      title: "Nanotech & Research",
      description:
        "Collaborate on next-gen projects involving nanotechnology, biomedical sensors, and AI for early diagnostics and patient care innovation.",
      position: "right",
    },
  ];

  const stats = [
    { icon: <Award />, value: 10, label: "Projects Completed", suffix: "+" },
    { icon: <Users />, value: 10, label: "Happy Clients", suffix: "+" },
    { icon: <Calendar />, value: 5, label: "Years Experience", suffix: "" },
    {
      icon: <TrendingUp />,
      value: 100,
      label: "Satisfaction Rate",
      suffix: "%",
    },
  ];

  return (
    <section
      id="about-section"
      ref={sectionRef}
      className="w-full py-24 overflow-hidden relative bg-white"
    >
      {/* Decorative background elements */}
      <motion.div
        className="absolute top-20 left-10 w-64 h-64 rounded-full z-100 bg-neutral-300/20 blur-3xl"
        style={{ y: y1, rotate: rotate1 }}
      />
      <motion.div
        className="absolute bottom-20 right-10 w-80 h-80 rounded-full z-100 bg-neutral-300/20 blur-3xl"
        style={{ y: y2, rotate: rotate2 }}
      />
      <motion.div
        className="absolute top-1/2 left-1/4 w-4 h-4 rounded-full bg-neutral-200/80"
        animate={{
          y: [0, -15, 0],
          opacity: [0.5, 1, 0.5],
        }}
        transition={{
          duration: 2,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute bottom-1/3 right-1/4 w-6 h-6 rounded-full bg-neutral-200/80"
        animate={{
          y: [0, 20, 0],
          opacity: [0.5, 1, 0.5],
        }}
        transition={{
          duration: 4,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
          delay: 1,
        }}
      />

      <motion.div
        className="w-full relative z-10 bg-neutral-800 rounded-2xl shadow-xl px-4 md:px-12 py-12 md:py-20"
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={containerVariants}
      >
        <motion.div
          className="flex flex-col items-center mb-6 text-white"
          variants={itemVariants}
        >
          <motion.span
            className="font-medium mb-2 flex items-center gap-2 bg-gradient-to-r from-pink-400 to-white bg-clip-text text-transparent"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Image
              src="/SynapsisLogo.svg"
              alt="Synapsis Logo"
              width={20}
              height={20}
              className="inline-block"
            />
            DISCOVER OUR STORY
          </motion.span>
          <h2 className="text-4xl md:text-5xl font-light mb-4 text-center text-white">
            About Us
          </h2>
          <motion.div
            className="w-24 h-1 text-white"
            initial={{ width: 0 }}
            animate={{ width: 96 }}
            transition={{ duration: 1, delay: 0.5 }}
          ></motion.div>
        </motion.div>

        <motion.p
          className="text-center max-w-2xl mx-auto mb-16 text-neutral-200"
          variants={itemVariants}
        >
          We are a passionate team of engineers and innovators dedicated to
          creating intelligent, scalable solutions that transform industries.
          With attention to detail and commitment to excellence, we turn complex
          challenges into elegant solutions.
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-3 text-white gap-8 relative justify-between items-stretch">
          {/* Left Column */}
          <div className="space-y-16">
            {services
              .filter((service) => service.position === "left")
              .map((service, index) => (
                <ServiceItem
                  key={`left-${index}`}
                  icon={service.icon}
                  secondaryIcon={service.secondaryIcon}
                  title={service.title}
                  description={service.description}
                  variants={itemVariants}
                  delay={index * 0.2}
                  direction="left"
                />
              ))}
          </div>

          {/* Center Image */}
          <div className="flex justify-center items-center order-first md:order-none mb-8 md:mb-0">
            <motion.div
              className="relative w-full max-w-xs"
              variants={itemVariants}
            >
              <motion.div
                className="rounded-md overflow-hidden shadow-xl"
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.4, delay: 0.3 }}
                whileHover={{ scale: 1.03, transition: { duration: 0.4 } }}
              >
                <div className="flex items-center justify-center w-full max-w-xs h-64 md:h-80 relative rounded-md overflow-hidden shadow-xl bg-neutral-100">
                  <Image
                    src="/image.png"
                    alt="Our Team"
                    className="w-full h-full object-cover rounded-md"
                    fill
                    priority
                  />
                </div>

                <motion.div
                  className="absolute inset-0 bg-gradient-to-t from-neutral-900/50 to-transparent flex items-end justify-center p-4"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.4, delay: 0.4 }}
                ></motion.div>
              </motion.div>
              <motion.div
                className="absolute inset-0 border-4 border-neutral-300 rounded-md -m-3 z-[-1]"
                initial={{ opacity: 0, scale: 1.1 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: 0.4 }}
              ></motion.div>

              {/* Floating accent elements */}
              <motion.div
                className="absolute -top-4 -right-8 w-16 h-16 rounded-full bg-neutral-200/30"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.4 }}
                style={{ y: y1 }}
              ></motion.div>
              <motion.div
                className="absolute -bottom-6 -left-10 w-20 h-20 rounded-full bg-neutral-300/30"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.5 }}
                style={{ y: y2 }}
              ></motion.div>

              {/* Additional decorative elements */}
              <motion.div
                className="absolute -top-10 left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-neutral-600"
                animate={{
                  y: [0, -10, 0],
                  opacity: [0.5, 1, 0.5],
                }}
                transition={{
                  duration: 0.4,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut",
                }}
              ></motion.div>
              <motion.div
                className="absolute -bottom-12 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-neutral-500"
                animate={{
                  y: [0, 10, 0],
                  opacity: [0.5, 1, 0.5],
                }}
                transition={{
                  duration: 0.4,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut",
                  delay: 0.5,
                }}
              ></motion.div>
            </motion.div>
          </div>

          {/* Right Column */}
          <div className="space-y-16">
            {services
              .filter((service) => service.position === "right")
              .map((service, index) => (
                <ServiceItem
                  key={`right-${index}`}
                  icon={service.icon}
                  secondaryIcon={service.secondaryIcon}
                  title={service.title}
                  description={service.description}
                  variants={itemVariants}
                  delay={index * 0.2}
                  direction="right"
                />
              ))}
          </div>
        </div>

        
        {/* Stats Section */}
        <motion.div
          ref={statsRef}
          className="mt-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-white px-4 lg:px-0"
          initial="hidden"
          animate={isStatsInView ? "visible" : "hidden"}
          variants={containerVariants}
        >
            {stats.map((stat, index) => (
              <div key={index} className="flex justify-center items-stretch">
                <div className="w-64 max-w-full flex flex-col h-full">
                  <StatCounter
                    icon={stat.icon}
                    value={stat.value}
                    label={stat.label}
                    suffix={stat.suffix}
                    delay={index * 0.1}
                  />
                </div>
              </div>
            ))}
        </motion.div>
      </motion.div>
      {/* CTA Section OUTSIDE the box */}
      <motion.div
        className="mx-auto max-w-6xl mt-10 bg-neutral-900 text-white p-8 rounded-xl flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <div className="flex-1">
          <h3 className="text-2xl font-medium mb-2">Connect with us today!</h3>
          <p className="text-white/80">
            Let&apos;s create something extraordinary together.
          </p>
        </div>
        <Link href="/contacts">
          <motion.button
            className="bg-neutral-700 hover:bg-neutral-600 text-white px-6 py-3 rounded-sm flex items-center gap-2 font-medium transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Get Started <ArrowRight className="w-4 h-4" />
          </motion.button>
        </Link>
      </motion.div>
    </section>
  );
}

interface ServiceItemProps {
  icon: React.ReactNode;
  secondaryIcon?: React.ReactNode;
  title: string;
  description: string;
  variants: {
    hidden: { opacity: number; y?: number };
    visible: {
      opacity: number;
      y?: number;
      transition: { duration: number; ease: (t: number) => number };
    };
  };
  delay: number;
  direction: "left" | "right";
}

function ServiceItem({
  icon,
  secondaryIcon,
  title,
  description,
  variants,
  delay,
  direction,
}: ServiceItemProps) {
  return (
    <motion.div
      className="flex flex-col group"
      variants={variants}
      transition={{ delay }}
      whileHover={{ y: -5, transition: { duration: 0.2 } }}
    >
      <motion.div
        className="flex items-center gap-3 mb-3"
        initial={{ x: direction === "left" ? -20 : 20, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: delay + 0.2 }}
      >
        <motion.div
          className="text-neutral-700 bg-neutral-100 p-3 rounded-lg transition-colors duration-300 group-hover:bg-neutral-200 relative"
          whileHover={{
            rotate: [0, -10, 10, -5, 0],
            transition: { duration: 0.5 },
          }}
        >
          {icon}
          {secondaryIcon}
        </motion.div>
        <h3 className="text-xl font-medium text-white group-hover:text-white transition-colors duration-300">
          {title}
        </h3>
      </motion.div>
      <motion.p
        className="text-sm text-white leading-relaxed pl-12"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: delay + 0.4 }}
      >
        {description}
      </motion.p>
      <motion.div
        className="mt-3 pl-12 flex items-center text-neutral-600 text-xs font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0 }}
      >
        <span className="flex items-center gap-1">
          Learn more <ArrowRight className="w-3 h-3" />
        </span>
      </motion.div>
    </motion.div>
  );
}

interface StatCounterProps {
  icon: React.ReactNode;
  value: number;
  label: string;
  suffix: string;
  delay: number;
}

function StatCounter({ icon, value, label, suffix, delay }: StatCounterProps) {
  const countRef = useRef(null);
  const isInView = useInView(countRef, { once: false });
  const [hasAnimated, setHasAnimated] = useState(false);

  const springValue = useSpring(0, {
    stiffness: 50,
    damping: 10,
  });

  useEffect(() => {
    if (isInView && !hasAnimated) {
      springValue.set(value);
      setHasAnimated(true);
    } else if (!isInView && hasAnimated) {
      springValue.set(0);
      setHasAnimated(false);
    }
  }, [isInView, value, springValue, hasAnimated]);

  const displayValue = useTransform(springValue, (latest) =>
    Math.floor(latest)
  );

  return (
    <motion.div
      className="bg-white/50 backdrop-blur-sm p-6 rounded-xl flex flex-col items-center text-center group hover:bg-white transition-colors duration-300 border border-gray-100"
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.6, delay },
        },
      }}
      whileHover={{ y: -5, transition: { duration: 0.2 } }}
    >
      <motion.div
        className="w-14 h-14 rounded-full bg-neutral-100 flex items-center justify-center mb-4 text-neutral-700 group-hover:bg-neutral-200 transition-colors duration-300"
        whileHover={{ rotate: 360, transition: { duration: 0.8 } }}
      >
        {icon}
      </motion.div>
      <motion.div
        ref={countRef}
        className="text-3xl font-bold text-neutral-900 flex items-center"
      >
        <motion.span>{displayValue}</motion.span>
        <span>{suffix}</span>
      </motion.div>
      <p className="text-neutral-600 text-sm mt-1">{label}</p>
      <motion.div className="w-10 h-0.5 bg-neutral-700 mt-3 group-hover:w-16 transition-all duration-300" />
    </motion.div>
  );
}
