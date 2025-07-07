"use client";
import React from "react";
import { Timeline } from "@/components/ui/timeline";
import { Timeline2 } from "@/components/ui/timeline2";
import { cn } from "@/lib/utils";
import { DotPattern } from "@/components/magicui/dot-pattern";

const Projects = () => {
  const projectsData = [
    {
      projectName: "VBOIL",
      projectImages: [
        "/VBOIL/Vboil1.png",
        "/VBOIL/Vboil4.png",
        "/VBOIL/Vboil2.png",
        "/VBOIL/Vboil3.png",
      ],
      type: "desktop",
      className: "",
      title: "Oil Waste Resource Collection Platform",
      description:
        "An eco-friendly logistics platform for oil companies to collect used oil, water, and plastic waste from restaurants, with real-time driver tracking and smart routing.",
      checklist: [
        "Live GPS driver tracking",
        "Automated customer/driver notifications",
        "Pickup scheduling by customers",
        "Resource quantity tracking (oil/water/plastic)",
        "Driver assignment and route optimization",
        "Admin dashboard for collection data",
        "Driver onboarding portal",
      ],
    },
    {
      projectName: "Maskwa",
      projectImages: [
        "/Maskwa/Maskwa3.png",
        "/Maskwa/Maskwa1.png",
        "/Maskwa/Maskwa2.png",
        "/Maskwa/Maskwa5.png",
      ],
      type: "desktop",
      className: "bg-neutral-900",
      title: "Traditional Land Verification & Management System",
      description:
        "A digital platform for verifying and approving traditional land holdings using GPS mapping, document authentication, and automated approval workflows.",
      checklist: [
        "Land Mapping with GPS coordinates",
        "Multi-user authentication system",
        "Smart notification alerts",
        "Web crawler for public record validation",
        "Digital document upload and storage",
        "Approval pipeline with status tracking",
      ],
    },
    {
      projectName: "ThotAI",
      projectImages: [
        "/Thot/Thot11.png",
        "/Thot/Thot1.png",
        "/Thot/Thot2.png",
        "/Thot/Thot3.png",
      ],
      type: "desktop",
      className: "",
      title: "Retail & Profit Optimization Dashboard",
      description:
        "A smart retail assistant that guides store owners in inventory decisions, marketing, and profit tracking using AI insights and financial analysis tools.",
      checklist: [
        "Role-based access for owners and agents",
        "Online/offline store registration",
        "AI-powered product & market suggestions",
        "Profit/loss analysis by product or category",
        "Geo-based investment recommendations",
        "Product catalog with purchasing options",
      ],
    },
    {
      projectName: "SPYK",
      projectImages: ["/Spyk-health.png?w=600&h=600&fit=crop"],
      type: "mobile",
      className: "",
      title: "AI-Powered Personal Health Tracker",
      description:
        "A lifestyle tracking app that integrates with wearables to monitor food, sleep, activity, and vitals, offering AI-based health insights and reminders.",
      checklist: [
        "Health dashboard for vitals and activities",
        "Lifestyle and diet tracking with insights",
        "Smartwatch and wearable integration",
        "Reminders for meals, hydration, medication",
        "AI-generated health recommendations",
        "Exercise logging and suggestions",
      ],
    },
    {
      projectName: "MyTeal",
      projectImages: ["/Myteal.png?w=600&h=600&fit=crop"],
      type: "mobile",
      className: "",
      title: "Women's Mental Health Monitoring Platform",
      description:
        "A private digital assistant that uses AI to detect emotional distress, analyze behavior, and provide mental health support while ensuring user anonymity.",
      checklist: [
        "AI-powered emotional support assistant",
        "Behavioral trend and mood analysis",
        "Complete data privacy and anonymity",
        "Tailored wellness suggestions",
        "Emergency alerts for critical behavior",
      ],
    },
    {
      projectName: "NSpeed",
      projectImages: ["/NSpeed.png?w=600&h=600&fit=crop"],
      type: "desktop",
      className: "",
      title: "Health Diagnostics & Vitamin Deficiency Detection",
      description:
        "An instant diagnostic tool to measure sugar, pressure, and vitamin levels, generating AI-powered reports and preventive health suggestions.",
      checklist: [
        "Rapid vitals scan (BP, sugar, vitamins)",
        "AI-generated deficiency reports",
        "Health device integration support",
        "Personal health dashboard",
        "Preventive lifestyle and nutrition tips",
        "Health risk alerts",
      ],
    },
    {
      projectName: "Iscan",
      projectImages: ["/Iscan.png?w=600&h=600&fit=crop"],
      type: "mobile",
      className: "",
      title: "Real-Time Eye Movement & Vision Analytics",
      description:
        "An eye-tracking and fatigue detection tool powered by MediaPipe to monitor gaze patterns, focus, and strain with clinical-grade accuracy.",
      checklist: [
        "Real-time gaze and blink tracking",
        "Focus and attention monitoring",
        "Eye strain and fatigue detection",
        "Vision pattern analytics",
        "On-device processing with privacy-first design",
      ],
    },

    {
      projectName: "ClinicAI",
      projectImages: ["/ClinicAI.png?w=600&h=600&fit=crop"],
      type: "mobile",
      className: "",
      title: "Smart Clinic & Hospital Management System",
      description:
        "A full-stack clinic management platform that automates patient flow, appointment scheduling, health records, and billing with AI-driven insights.",
      checklist: [
        "Smart patient registration and history tracking",
        "AI-based appointment scheduling",
        "Digital prescriptions and record management",
        "Health dashboard with smart alerts",
        "Billing and invoice generation",
        "Doctor analytics and feedback metrics",
        "Multi-channel reminders (SMS/Email/In-app)",
      ],
    },
  ];

  const timelineData = projectsData.map((project) => ({
    title: project.projectName,
    content: {
      img: project.projectImages[0],
      images: project.projectImages,
      alt: project.projectName,
      type: project.type as "desktop" | "mobile",
      description: project.description,
      checklist: project.checklist,
      className: project.className,
    },
  }));

  return (
    <div className="min-h-screen w-full bg-gray-100">
      <div className="relative min-h-screen z-0 flex flex-col items-center justify-center overflow-hidden border pt-20">
        <DotPattern
          width={20}
          height={20}
          cx={1.5}
          cy={1.5}
          cr={1.5}
          className={cn(
            "[mask-image:linear-gradient(to_bottom_right,white,white,transparent)] "
          )}
        />

        <div className="max-w-7xl mx-auto pt-8 px-4 md:px-8 lg:px-10">
          <div className="text-center mb-12">
            <h1 className="text-3xl md:text-5xl z-10 font-bold text-black mb-6">
              Our Projects
            </h1>
            <p className="text-lg md:text-xl z-10 text-neutral-700 max-w-3xl mx-auto leading-relaxed">
              At our company, we have delivered a diverse portfolio of
              innovative solutions spanning healthcare, real estate,
              sustainability, and retail. Our projects include AI-powered
              platforms for land approval processes, mental health support
              systems, eye-tracking diagnostics, and body health analysis. We
              have also developed technologies for smart oil recycling
              logistics, daily health monitoring, and clinic automation — each
              designed to address real-world challenges with advanced,
              user-centric technology. By leveraging tools such as MediaPipe,
              AI-based recommendation engines, live tracking systems, and web
              crawlers, we enhance both functionality and user experience across
              our solutions. Together, these initiatives demonstrate our
              commitment to building impactful, tech-driven products that
              improve lives, optimize workflows, and empower industries through
              innovation.
            </p>
          </div>
        </div>
      </div>

      <Timeline2 data={timelineData} />
    </div>
  );
};

export default Projects;
