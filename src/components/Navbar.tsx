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
      setScrolled(window.scrollY > 50);
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
    setTimeout(() => {
      router.push(path);
    }, 200);
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? 'bg-white/90 backdrop-blur-sm border-b border-gray-200 shadow-sm' : 'bg-white'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-3 flex-shrink-0">
            <Image
              src="/Synapsis_Logo.png"
              alt="Synapsis Medical Logo"
              className="h-10 w-auto object-contain"
              width={40}
              height={40}
            />
            <span className="hidden md:inline text-lg font-semibold text-gray-900">Synapsis Medical Technologies Inc.</span>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.path}
                  className={`px-3 py-2 text-sm font-medium transition-colors duration-200 rounded-md
                    ${pathname === item.path
                      ? 'text-blue-600 font-semibold bg-blue-50'
                      : 'text-gray-700 hover:text-blue-600 hover:bg-gray-100'}
                  `}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-blue-600 p-2"
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
            className="md:hidden bg-white/95 backdrop-blur-sm border-t border-gray-200"
          >
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => handleMobileNav(item.path)}
                  className={`block px-3 py-2 text-base font-medium w-full text-left rounded-md transition-colors duration-200
                    ${pathname === item.path
                      ? 'text-blue-600 font-semibold bg-blue-50'
                      : 'text-gray-700 hover:text-blue-600 hover:bg-gray-100'}
                  `}
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