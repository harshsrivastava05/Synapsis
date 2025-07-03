"use client";
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { useRouter, usePathname } from 'next/navigation';
import Image from 'next/image';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: "Home", path: "/" },
    { name: "Projects", path: "/projects" },
    { name: "Team", path: "/team-members" },
    { name: "Contact", path: "/contacts" },
  ];

  const handleMobileNav = (path: string) => {
    setIsOpen(false);
    setTimeout(() => router.push(path), 200);
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? 'bg-white/90 backdrop-blur-md border-b border-neutral-200' : 'bg-white'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-3">
            <Image
              src="/Synapsis_Logo.png"
              alt="Synapsis Logo"
              className="h-8 w-auto object-contain"
              width={32}
              height={32}
            />
            <span className="hidden md:inline text-base font-medium text-black">
              Synapsis Medical Technologies
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-8 flex items-center space-x-6">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.path}
                  className={`text-sm font-medium transition-colors duration-200 ${
                    pathname === item.path
                      ? 'text-black border-b-2 border-black pb-1'
                      : 'text-neutral-600 hover:text-black'
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Mobile menu toggle */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-black p-2"
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t border-neutral-200"
          >
            <div className="px-4 pt-4 pb-6 space-y-2">
              {navItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => handleMobileNav(item.path)}
                  className={`block w-full text-left text-sm font-medium px-3 py-2 rounded-md transition ${
                    pathname === item.path
                      ? 'text-black font-semibold'
                      : 'text-neutral-700 hover:text-black'
                  }`}
                >
                  {item.name}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navigation;
