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
      name: "Amit",
      bio: "Amit is CTO and senior developer at Synapsis Medical Technologies. Leading AI research and development with 15+ years in machine learning and healthcare technology innovation.",
      linkedin: "https://www.linkedin.com/in/devamitch/",
      avatar: "/members/amit.png",
    },
    {
      name: "Preetam",
      bio: "Preetam leads R&D, including Product, gamer, Engineering, and Design. Expert in scalable system architecture and IoT solutions, driving technical excellence across all projects.",
      linkedin: "https://www.linkedin.com/in/preetamanbukarasu/",
      avatar: "/members/preetam.png",
    },
    {
      name: "Harsh",
      bio: "Harsh oversees operations and business development at Synapsis Medical Technologies Inc. With 12+ years in healthcare operations, he ensures seamless execution of our innovative solutions.",
      linkedin: "https://www.linkedin.com/in/harsh-srivastava-a4ab8a273/",
      avatar: "/members/harsh.png",
    },
  ];

  const boardMembers = [
    {
      name: "Amit",
      bio: "Amit is CTO and senior developer at Synapsis Medical Technologies. Leading AI research and development with 15+ years in machine learning and healthcare technology innovation.",
      linkedin: "https://www.linkedin.com/in/devamitch/",
      avatar: "/members/amit.png",
    },
    {
      name: "Preetam",
      bio: "Preetam leads R&D, including Product, gamer, Engineering, and Design. Expert in scalable system architecture and IoT solutions, driving technical excellence across all projects.",
      linkedin: "https://www.linkedin.com/in/preetamanbukarasu/",
      avatar: "/members/preetam.png",
    },
    {
      name: "Harsh",
      bio: "Harsh oversees operations and business development at Synapsis Medical Technologies Inc. With 12+ years in healthcare operations, he ensures seamless execution of our innovative solutions.",
      linkedin: "https://www.linkedin.com/in/harsh-srivastava-a4ab8a273/",
      avatar: "/members/harsh.png",
    },
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
      className={`${className} text-left`}
      whileHover={{ y: -2 }}
      transition={{ duration: 0.3 }}
    >
      <div className="mb-6">
        <div className="w-full aspect-square bg-gray-100 rounded-lg overflow-hidden relative">
          <Image
            src={member.avatar}
            alt={member.name}
            fill
            style={{ objectFit: "cover" }}
            className="rounded-lg"
            sizes="(max-width: 768px) 100vw, 33vw"
          />
        </div>
      </div>

      <div>
        <h3 className="text-xl font-semibold text-gray-900 mb-1">
          {member.name}
        </h3>
        <p className="text-gray-700 leading-relaxed mb-6 text-sm">
          {member.bio}
        </p>

        <motion.a
          href={member.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="inline-flex items-center text-gray-600 hover:text-gray-900 transition-colors duration-200"
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
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-normal text-gray-900 mb-4 tracking-tight">
              Our leadership
            </h2>
          </motion.div>

          <div
            ref={teamRef}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 md:gap-8"
          >
            {/* First 3 members */}
            {teamMembers
              .slice(0, 3)
              .map((member) => renderMemberCard(member, "team-member"))}

            {/* Last 2 members - centered */}
            <div className="lg:col-span-3 flex justify-center">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-8 max-w-2xl">
                {teamMembers
                  .slice(3, 5)
                  .map((member) => renderMemberCard(member, "team-member"))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Board of Directors Section */}
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
            {/* First 3 members */}
            {boardMembers
              .slice(0, 3)
              .map((member) => renderMemberCard(member, "board-member"))}

            {/* Last 2 members - centered */}
          </div>
        </div>
      </section>

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
