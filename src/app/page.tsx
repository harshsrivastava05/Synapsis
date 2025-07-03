"use client";

import { motion } from "framer-motion";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { FlipWords } from "@/components/ui/flip-words";
import AboutUsSection from "@/components/ui/about-us-section";
import HeroParallaxDemo from "@/components/Hero-paralax";
import { BlogMarquee } from "@/components/ui/blog-carousel";


gsap.registerPlugin(ScrollTrigger);

export default function HomePage2() {
  const heroRef = useRef<HTMLDivElement>(null);
  const aboutRef = useRef<HTMLDivElement>(null);
  const companiesRef = useRef<HTMLDivElement>(null);
  const featuresRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
    const ctx = gsap.context(() => {
      gsap.fromTo(
        heroRef.current,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power3.out",
        }
      );

      gsap.fromTo(
        aboutRef.current,
        { opacity: 0, x: -50 },
        {
          opacity: 1,
          x: 0,
          duration: 1,
          scrollTrigger: {
            trigger: aboutRef.current,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse",
          },
        }
      );

      gsap.fromTo(
        ".company-card",
        { opacity: 0, scale: 0.8 },
        {
          opacity: 1,
          scale: 1,
          duration: 0.6,
          stagger: 0.1,
          scrollTrigger: {
            trigger: companiesRef.current,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse",
          },
        }
      );

      gsap.fromTo(
        featuresRef.current,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          scrollTrigger: {
            trigger: featuresRef.current,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse",
          },
        }
      );
    });

    return () => ctx.revert();
  }, []);

  const descriptiveWords = [
    "crafting",
    "developing",
    "building",
    "engineering",
    "shaping",
  ];

  const HeroContent = () => (
    <div className="max-w-6xl mx-auto text-center px-8">
      <motion.h1
        className="text-4xl md:text-5xl lg:text-6xl font-light text-white leading-tight mb-4"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 0.2 }}
      >
        <span className="font-bold">
          Synapsis Medical Technologies Inc.
        </span>
      </motion.h1>

      <motion.div
        className="text-lg md:text-xl lg:text-2xl text-white/90 max-w-4xl mx-auto mb-8 font-light leading-relaxed min-h-[3rem]"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
      >
        Empowering industries by{" "}
        <span className="font-semibold text-white align-middle inline-block">
          <FlipWords words={descriptiveWords} />
        </span>{" "}
        next-generation solutions.
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.8 }}
      >
        <Button
          size="lg"
          className="bg-white text-neutral-900 hover:bg-gray-100 px-8 py-3 text-base font-normal transition-all duration-300 rounded-sm shadow-sm hover:shadow-md"
        >
          View Our Work
          <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
      </motion.div>
    </div>
  );

  return (
    <div className="bg-white">
      {/* Hero Section - Full Screen */}
     <HeroParallaxDemo />

      {/* About Section */}
      <AboutUsSection />

        {/*Blog section */}
        <BlogMarquee />

    </div>
  );
}
