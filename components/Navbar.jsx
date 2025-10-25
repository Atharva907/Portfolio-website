"use client"

import React, { useState, useEffect } from "react";
import { Moon, Sun, Menu, X } from "lucide-react";
import { useTheme } from "next-themes";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);
  const toggleTheme = () => setTheme(theme === "dark" ? "light" : "dark");

  return (
    <header className="fixed top-0 w-full z-50 bg-background/95 backdrop-blur-md border-b shadow-sm transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <a href="#home" className="text-2xl font-bold bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent transition-all duration-300 hover:scale-105 inline-block">
              Atharva<span className="text-primary">.</span>
            </a>
          </div>

          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <a href="#home" className="relative group text-foreground hover:text-primary transition-colors duration-300 font-medium">Home
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
              </a>
              <a href="#about" className="relative group text-foreground hover:text-primary transition-colors duration-300 font-medium">About
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
              </a>
              <a href="#projects" className="relative group text-foreground hover:text-primary transition-colors duration-300 font-medium">Projects
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
              </a>
              <a href="#contact" className="relative group text-foreground hover:text-primary transition-colors duration-300 font-medium">Contact
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
              </a>
              <button
                onClick={toggleTheme}
                className="p-2 rounded-full hover:bg-accent transition-all duration-300 transform hover:scale-110"
                aria-label="Toggle theme"
              >
                {mounted && theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
              </button>
            </div>
          </div>

          <div className="md:hidden">
            <div className="flex items-center">
              <button
                onClick={toggleTheme}
                className="p-2 rounded-full hover:bg-accent transition-all duration-300 transform hover:scale-110 mr-2"
                aria-label="Toggle theme"
              >
                {mounted && theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
              </button>
              <button
                onClick={toggleMenu}
                className="p-2 rounded-full hover:bg-accent transition-all duration-300 transform hover:scale-110"
                aria-label="Toggle menu"
              >
                {isOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-background/95 backdrop-blur-md border-b shadow-lg animate-in slide-in-from-top-2 duration-300">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a href="#home" className="block px-3 py-2 rounded-md hover:bg-accent transition-all duration-300 font-medium">Home</a>
            <a href="#about" className="block px-3 py-2 rounded-md hover:bg-accent transition-all duration-300 font-medium">About</a>
            <a href="#projects" className="block px-3 py-2 rounded-md hover:bg-accent transition-all duration-300 font-medium">Projects</a>
            <a href="#contact" className="block px-3 py-2 rounded-md hover:bg-accent transition-all duration-300 font-medium">Contact</a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
