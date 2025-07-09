"use client";
import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { useRouter, usePathname } from "next/navigation";
import Image from "next/image";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
      const aboutSection = document.getElementById("about-section");
      if (aboutSection) {
        const rect = aboutSection.getBoundingClientRect();
        const navbarHeight = 64;
        const isAboutInView = rect.top <= navbarHeight && rect.bottom >= 0;
        setIsDarkMode(isAboutInView);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
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
    <motion.nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-in-out ${
        scrolled
          ? isDarkMode
            ? "bg-neutral-800/95 backdrop-blur-md border-b border-neutral-700"
            : "bg-white/90 backdrop-blur-md border-b border-neutral-200"
          : isDarkMode
          ? "bg-neutral-800"
          : "bg-white"
      }`}
      initial={false}
      animate={{
        backgroundColor: isDarkMode
          ? scrolled
            ? "rgba(38, 38, 38, 0.95)"
            : "rgb(38, 38, 38)"
          : scrolled
          ? "rgba(255, 255, 255, 0.9)"
          : "rgb(255, 255, 255)",
      }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-3">
            <motion.div
              animate={{
                filter: isDarkMode
                  ? "invert(1) brightness(2)"
                  : "invert(0) brightness(1)",
              }}
              transition={{ duration: 0.3 }}
            >
              <Image
                src="/Synapsis_Logo.png"
                alt="Synapsis Logo"
                className="h-8 w-auto object-contain"
                width={32}
                height={32}
              />
            </motion.div>
            <motion.span
              className={`hidden md:inline text-base font-medium transition-colors duration-500 ${
                isDarkMode ? "text-white" : "text-black"
              }`}
              animate={{
                color: isDarkMode ? "#ffffff" : "#000000",
              }}
              transition={{ duration: 0.5 }}
            >
              Synapsis Medical Technologies Inc.
            </motion.span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-8 flex items-center space-x-6">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.path}
                  className={`text-sm font-medium px-4 py-2.5 rounded-md transition-all duration-500 ${
                    pathname === item.path
                      ? isDarkMode
                        ? "bg-neutral-600 text-white shadow-lg"
                        : "bg-black text-white shadow-md"
                      : isDarkMode
                      ? "text-neutral-200 hover:text-white hover:bg-neutral-700"
                      : "text-neutral-600 hover:text-black hover:bg-neutral-100"
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Mobile menu toggle */}
          <div className="md:hidden">
            <motion.button
              onClick={() => setIsOpen(!isOpen)}
              className={`p-2 transition-colors duration-500 ${
                isDarkMode ? "text-white" : "text-black"
              }`}
              aria-label="Toggle menu"
              animate={{
                color: isDarkMode ? "#ffffff" : "#000000",
              }}
              transition={{ duration: 0.5 }}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </motion.button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className={`md:hidden transition-colors duration-500 ${
              isDarkMode
                ? "bg-neutral-800 border-t border-neutral-700"
                : "bg-white border-t border-neutral-200"
            }`}
          >
            <div className="px-4 pt-4 pb-6 space-y-2">
              {navItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => handleMobileNav(item.path)}
                  className={`block w-full text-left text-sm font-medium px-3 py-2 rounded-md transition-all duration-500 ${
                    pathname === item.path
                      ? isDarkMode
                        ? "text-white font-semibold bg-neutral-700"
                        : "text-black font-semibold bg-neutral-100"
                      : isDarkMode
                      ? "text-neutral-200 hover:text-white hover:bg-neutral-700"
                      : "text-neutral-700 hover:text-black hover:bg-neutral-100"
                  }`}
                >
                  {item.name}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navigation;
