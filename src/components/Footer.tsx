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
      { title: 'About Us', href: '/home' },
      { title: 'Team', href: '/team-members' },
      { title: 'Careers', href: '/careers' },
      { title: 'Privacy Policy', href: '/privacy' },
    ],
  },
  {
    label: 'Projects',
    links: [
      { title: 'Maskwa - Land Approval System', href: '/projects/maskwa' },
      { title: 'MyTeal - Mental Health AI', href: '/projects/myteal' },
      { title: 'Clinic AI - Hospital Management', href: '/projects/clinic-ai' },
      { title: 'Spyk Health - Lifestyle Tracker', href: '/projects/spyk' },
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
      { title: 'LinkedIn', href: '#', icon: Linkedin },
    ],
  },
];

export function Footer() {
  return (
    <footer className="relative w-full max-w-6xl mx-auto flex flex-col items-center justify-center rounded-t-3xl md:rounded-t-[3rem] border-t bg-gradient-to-b from-slate-50/50 to-white dark:from-slate-900/50 dark:to-slate-950 px-6 py-12 lg:py-16 mt-20">
      {/* Top gradient line */}
      <div className="absolute top-0 right-1/2 left-1/2 h-px w-1/3 -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-r from-transparent via-blue-500/50 to-transparent blur-sm" />

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
            <span className="text-xl font-bold text-black">
              Synapsis
            </span>
          </div>
          <p className="text-muted-foreground text-sm leading-relaxed max-w-sm">
            Building intelligent systems that improve lives through AI. Our solutions span healthcare, sustainability, and enterprise innovation.
          </p>
          <p className="text-muted-foreground text-xs">
            © {new Date().getFullYear()} Synapsis Medical Technologies. All rights reserved.
          </p>
        </AnimatedContainer>

        <div className="grid grid-cols-2 gap-8 md:grid-cols-4 xl:col-span-2">
          {footerLinks.map((section, index) => (
            <AnimatedContainer key={section.label} delay={0.1 + index * 0.1}>
              <div className="space-y-4">
                <h3 className="text-sm font-semibold text-foreground tracking-wide uppercase">
                  {section.label}
                </h3>
                <ul className="space-y-3">
                  {section.links.map((link) => (
                    <li key={link.title}>
                      <a
                        href={link.href}
                        className="text-muted-foreground hover:text-blue-600 dark:hover:text-blue-400 inline-flex items-center text-sm transition-all duration-300 hover:translate-x-1 group"
                      >
                        {link.icon && (
                          <link.icon className="me-2 size-4 group-hover:scale-110 transition-transform duration-300" />
                        )}
                        <span className="relative">
                          {link.title}
                          <span className="absolute -bottom-1 left-0 w-0 h-px bg-gradient-to-r from-blue-600 to-blue-400 transition-all duration-300 group-hover:w-full" />
                        </span>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </AnimatedContainer>
          ))}
        </div>
      </div>

      {/* Bottom section with additional branding */}
      <AnimatedContainer delay={0.6} className="mt-4 pt-8 border-t border-muted w-full text-center">
        <p className="text-xs text-muted-foreground">
          Empowering healthcare through artificial intelligence • Building the future of medical technology
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
      initial={{ filter: 'blur(4px)', translateY: 16, opacity: 0 }}
      whileInView={{ filter: 'blur(0px)', translateY: 0, opacity: 1 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ 
        delay, 
        duration: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94]
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}