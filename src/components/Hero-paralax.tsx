"use client";
import React from "react";
import { HeroParallax } from "@/components/ui/hero-parallax";

export default function HeroParallaxDemo() {
  return <HeroParallax products={products} />;
}

export const products = [
  {
    title: "Maskwa - Land Verification Platform",
    link: "#",
    thumbnail:
      "/maskwa.png?w=600&h=600&fit=crop",
  },
  {
    title: "VBOIL - Smart Oil Recycling",
    link: "#",
    thumbnail:
      "/vboil.png?w=600&h=600&fit=crop",
  },
  {
    title: "Spyk Health - Personal Wellness Tracker",
    link: "#",
    thumbnail:
      "/Spyk-health.png?w=600&h=600&fit=crop",
  },
  {
    title: "MyTeal - Women's Mental Health Support",
    link: "#",
    thumbnail:
      "/Myteal.png?w=600&h=600&fit=crop",
  },
  {
    title: "NSpeed - Health & Vitamin Diagnostics",
    link: "#",
    thumbnail:
      "/NSpeed.png?w=600&h=600&fit=crop",
  },
  {
    title: "Iscan AI - Eye Movement Analytics",
    link: "#",
    thumbnail:
      "/Iscan.png?w=600&h=600&fit=crop",
  },
  {
    title: "Thot AI - Retail Optimization Suite",
    link: "#",
    thumbnail:
      "/Thotai.png?w=600&h=600&fit=crop",
  },
  {
    title: "Clinic AI - Smart Clinic Management",
    link: "#",
    thumbnail:
      "/ClinicAI.png?w=600&h=600&fit=crop",
  },
];
