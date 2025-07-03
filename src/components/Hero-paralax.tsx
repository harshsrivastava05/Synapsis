"use client";
import React from "react";
import { HeroParallax } from "@/components/ui/hero-parallax";

export default function HeroParallaxDemo() {
  return <HeroParallax products={products} />;
}

export const products = [
  {
    title: "Spyk Health - Personal Wellness Tracker",
    link: "#",
    thumbnail: "/Spyk-health.png?w=600&h=600&fit=crop",
  },
  {
    title: "VBOIL - Smart Oil Recycling",
    link: "https://dev-vboil.synapsismedical.com/dashboard",
    thumbnail: "/VBOIL/Vboil2.png?w=600&h=600&fit=crop",
  },
  {
    title: "Maskwa - Land Verification Platform",
    link: "https://dev-maskwa.synapsismedical.com/",
    thumbnail: "/Maskwa/Maskwa1.png?w=600&h=600&fit=crop",
  },
  {
    title: "MyTeal - Women's Mental Health Support",
    link: "#",
    thumbnail: "/Myteal.png?w=600&h=600&fit=crop",
  },
  {
    title: "NSpeed - Health & Vitamin Diagnostics",
    link: "#",
    thumbnail: "/NSpeed.png?w=600&h=600&fit=crop",
  },
  {
    title: "Thot AI - Retail Optimization Suite",
    link: "https://main.d157ga6gwhviww.amplifyapp.com/login",
    thumbnail: "/Thot/Thot11.png?w=600&h=600&fit=crop",
  },
  {
    title: "Clinic AI - Smart Clinic Management",
    link: "#",
    thumbnail: "/ClinicAI.png?w=600&h=600&fit=crop",
  },
];
