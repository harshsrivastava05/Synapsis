'use client';
import React from 'react';
import type { ComponentProps, ReactNode } from 'react';
import { motion } from 'framer-motion';
import { Facebook, Instagram, Youtube, Linkedin } from 'lucide-react';
import Image from 'next/image';

interface FooterLink {
  title: string;
  href: string;
  icon?: React.ComponentType<{ className?: string }>;
}

interface FooterSection {
  label: string;
  links: FooterLink[];
}

const footerLinks: FooterSection[] = [
  {
    label: 'Company',
    links: [
      { title: 'About Us', href: '/' },
      { title: 'Team', href: '/team-members' },
      { title: 'Careers', href: '/careers' },
      { title: 'Privacy Policy', href: '/privacy' },
    ],
  },
  {
    label: 'Projects',
    links: [
      { title: 'Maskwa - Land Approval System', href: '/projects/Maskwa' },
      { title: 'MyTeal - Mental Health AI', href: '/projects/MyTeal' },
      { title: 'Clinic AI - Hospital Management', href: '/projects/ClinicAI' },
      { title: 'Spyk Health - Lifestyle Tracker', href: '/projects/SPYK' },
    ],
  },
  {
    label: 'Resources',
    links: [
      { title: 'Blog', href: '/blog' },
      { title: 'Changelog', href: '/changelog' },
      { title: 'Help Center', href: '/help' },
      { title: 'Contact', href: '/contact' },
    ],
  },
  {
    label: 'Social',
    links: [
      { title: 'Facebook', href: '#', icon: Facebook },
      { title: 'Instagram', href: '#', icon: Instagram },
      { title: 'Youtube', href: '#', icon: Youtube },
      { title: 'LinkedIn', href: 'https://www.linkedin.com/company/synapsis-medical/', icon: Linkedin },
    ],
  },
];

export function Footer() {
  return (
    <footer className="relative w-full  mx-auto flex flex-col items-center justify-center border border-neutral-200 bg-gray-50 dark:bg-black px-6 py-12 lg:py-16 mt-20">
      <div className="grid w-full gap-12 xl:grid-cols-3 xl:gap-16">
        <AnimatedContainer className="space-y-6">
          <div className="flex items-center space-x-2">
            <Image
              src="/Synapsis_Logo.png"
              alt="Synapsis Medical Logo"
              width={32}
              height={32}
              className="rounded"
            />
            <span className="text-xl font-semibold text-black dark:text-white">
              Synapsis
            </span>
          </div>
          <p className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed max-w-sm">
            Building intelligent systems that improve lives. Our solutions span healthcare, sustainability, and enterprise innovation.
          </p>
          <p className="text-xs text-neutral-500 dark:text-neutral-500">
            © {new Date().getFullYear()} Synapsis Medical Technologies. All rights reserved.
          </p>
        </AnimatedContainer>

        <div className="grid grid-cols-2 gap-8 md:grid-cols-4 xl:col-span-2">
          {footerLinks.map((section, index) => (
            <AnimatedContainer key={section.label} delay={0.1 + index * 0.1}>
              <div className="space-y-4">
                <h3 className="text-xs font-semibold text-neutral-800 dark:text-neutral-200 uppercase tracking-wider">
                  {section.label}
                </h3>
                <ul className="space-y-3">
                  {section.links.map((link) => (
                    <li key={link.title}>
                      <a
                        href={link.href}
                        className="inline-flex items-center text-sm text-neutral-600 dark:text-neutral-400 hover:text-black dark:hover:text-white transition"
                      >
                        {link.icon && (
                          <link.icon className="me-2 size-4" />
                        )}
                        {link.title}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </AnimatedContainer>
          ))}
        </div>
      </div>

      <AnimatedContainer delay={0.6} className="mt-4 pt-8 border-t border-neutral-200 dark:border-neutral-800 w-full text-center">
        <p className="text-xs text-neutral-500 dark:text-neutral-500">
          Empowering healthcare through artificial intelligence. Building the future of medical technology.
        </p>
      </AnimatedContainer>
    </footer>
  );
}

type ViewAnimationProps = {
  delay?: number;
  className?: ComponentProps<typeof motion.div>['className'];
  children: ReactNode;
};

function AnimatedContainer({ className, delay = 0.1, children }: ViewAnimationProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{
        delay,
        duration: 0.6,
        ease: [0.25, 0.46, 0.45, 0.94]
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
