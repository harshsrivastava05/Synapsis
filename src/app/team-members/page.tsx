"use client";
import { motion } from "framer-motion";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Linkedin } from "lucide-react";
import { BrandsGrid } from "@/components/ui/brands";
import Image from "next/image";
import Link from "next/link";

gsap.registerPlugin(ScrollTrigger);

// Define a TeamMember type for the team and board members and use it instead of 'any' in renderMemberCard.
type TeamMember = {
  name: string;
  bio: string;
  linkedin: string;
  avatar: string;
};

const Team = () => {
  const teamRef = useRef<HTMLDivElement>(null);
  const boardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".team-member",
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          stagger: 0.2,
          scrollTrigger: {
            trigger: teamRef.current,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse",
          },
        }
      );

      gsap.fromTo(
        ".board-member",
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          stagger: 0.2,
          scrollTrigger: {
            trigger: boardRef.current,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse",
          },
        }
      );
    });

    return () => ctx.revert();
  }, []);

  const teamMembers = [
    {
      name: "Puja",
      bio: "Puja is a skilled full stack developer, contributing to both frontend and backend projects with a passion for building robust web applications.",
      linkedin: "#",
      avatar: "/members/puja.png",
    },
    {
      name: "Bala",
      bio: "Bala is a creative designer, focused on delivering intuitive and visually appealing user experiences across all platforms.",
      linkedin: "#",
      avatar: "/members/bala.png",
    },
    {
      name: "Saran",
      bio: "Saran is a backend intern, supporting the team with server-side development and database management.",
      linkedin: "#",
      avatar: "/members/saran.png",
    },
    {
      name: "Debojit",
      bio: "Debojit is an app intern, assisting in the development and optimization of mobile applications.",
      linkedin: "#",
      avatar: "/members/debojit.png",
    },
    {
      name: "Jaisudhan",
      bio: "Jaisudhan is an app developer and ML engineer, bridging the gap between mobile development and machine learning solutions.",
      linkedin: "#",
      avatar: "/members/jaisudhan.png",
    },
    {
      name: "Amit",
      bio: "Amit is the team leader, guiding the team with experience and vision to achieve project goals.",
      linkedin: "#",
      avatar: "/members/amit.png",
    },
    {
      name: "Wasim Nahed",
      bio: "Wasim Nahed is a tester and full stack developer, ensuring quality and reliability across the stack.",
      linkedin: "#",
      avatar: "/members/wasim.png",
    },
  ];

  const boardMembers: TeamMember[] = [
    // Optionally, you can mirror the teamMembers or leave empty if not needed
  ];

  const investors = [
    { name: "Bessemer Partners" },
    { name: "ICONIQ" },
    { name: "Index Ventures" },
    { name: "SOCIALCAPITAL" },
    { name: "GV" },
    { name: "KLEINER PERKINS" },
  ];

  const renderMemberCard = (member: TeamMember, className: string) => (
    <motion.div
      key={member.name}
      className={`${className} flex flex-col items-center text-center h-full bg-white rounded-xl shadow-md p-8`}
      whileHover={{ y: -2 }}
      transition={{ duration: 0.3 }}
    >
      <div className="mb-6 w-32 h-32 relative">
        <div className="w-full h-full bg-gray-100 rounded-full overflow-hidden relative">
          <Image
            src={member.avatar}
            alt={member.name}
            fill
            style={{ objectFit: "cover" }}
            className="rounded-full"
            sizes="(max-width: 768px) 100vw, 33vw"
          />
        </div>
      </div>
      <div className="flex flex-col flex-1 justify-between w-full">
        <h3 className="text-xl font-semibold text-gray-900 mb-2">{member.name}</h3>
        <p className="text-gray-700 leading-relaxed mb-4 text-sm">{member.bio}</p>
        <motion.a
          href={member.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="inline-flex items-center justify-center text-gray-600 hover:text-gray-900 transition-colors duration-200 mt-auto"
        >
          <Linkedin className="h-5 w-5" />
        </motion.a>
      </div>
    </motion.div>
  );

  return (
    <div className="pt-24 mt-8 md:mt-30 mb-24 pb-20 bg-gray-100">
      {/* Introductory Section */}
      <section className="px-4 mb-20">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-6xl font-normal text-gray-900 mb-8 tracking-tight">
              Meet our team
            </h1>
            <p className="text-xl text-gray-600 mb-8 font-light leading-relaxed max-w-3xl mx-auto">
              We&apos;re a diverse group of innovators, researchers, and
              industry experts united by our passion for transforming healthcare
              through cutting-edge technology.
            </p>
            <p className="text-lg text-gray-500 font-light leading-relaxed max-w-2xl mx-auto">
              From AI specialists to healthcare veterans, our team combines deep
              technical expertise with real-world medical experience to create
              solutions that make a meaningful impact.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Leadership Section */}
      <section className="px-4 mb-24">
        <div className="max-w-6xl mx-auto">
          <div
            ref={teamRef}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 md:gap-8 justify-center items-stretch mx-auto"
          >
            {teamMembers.map((member) => renderMemberCard(member, "team-member"))}
          </div>
        </div>
      </section>

      {/* Board of Directors Section */}
      {/*
      <section className="px-4 mb-24">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-normal text-gray-900 mb-4 tracking-tight">
              Our board of directors
            </h2>
          </motion.div>

          <div
            ref={boardRef}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 md:gap-8"
          >
            {boardMembers
              .slice(0, 3)
              .map((member) => renderMemberCard(member, "board-member"))}
          </div>
        </div>
      </section>
      */}

      {/* Investors Section with BrandsGrid */}
      <BrandsGrid brands={investors} title="Our investors" className="py-24" />

      {/* Join Our Team CTA */}
      <section className="px-4 mt-20">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-gray-900 rounded-lg p-12 text-center text-white"
          >
            <h2 className="text-3xl md:text-4xl font-normal mb-4 tracking-tight">
              Join Our Team
            </h2>
            <p className="text-lg mb-8 opacity-90 font-light max-w-2xl mx-auto">
              We&apos;re always looking for talented individuals who share our
              passion for innovation and want to make a meaningful impact in
              healthcare technology.
            </p>
            <Link href="/careers" passHref>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="bg-white text-gray-900 px-8 py-3 rounded-lg font-medium hover:shadow-lg transition-all duration-300"
              >
                View Open Positions
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Team;
