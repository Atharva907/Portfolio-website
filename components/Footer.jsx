"use client"

import React from "react";
import { Github, Linkedin, Mail, Heart, ArrowUp } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-background/95 backdrop-blur-sm border-t border-border/50 relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.02]"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex flex-col items-center md:items-start animate-in fade-in slide-in-from-bottom-4 duration-700">
            <h3 className="text-xl font-bold mb-2 bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">Atharva Chavan</h3>
            <p className="text-sm text-muted-foreground flex items-center gap-1">
              © {currentYear} Made with <Heart className="w-4 h-4 text-red-500 fill-red-500 animate-pulse" /> by Atharva
            </p>
          </div>

          <div className="flex items-center gap-6 animate-in fade-in slide-in-from-bottom-4 duration-700" style={{animationDelay: "200ms"}}>
            <a
              href="https://github.com/Atharva907"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-secondary/50 hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-110 hover:shadow-md"
              aria-label="GitHub"
            >
              <Github size={18} />
            </a>
            <a
              href="https://linkedin.com/in/atharva-chavan-4249a5235/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-secondary/50 hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-110 hover:shadow-md"
              aria-label="LinkedIn"
            >
              <Linkedin size={18} />
            </a>
            <a
              href="mailto:atharva.chavan907@gmail.com"
              className="p-3 rounded-full bg-secondary/50 hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-110 hover:shadow-md"
              aria-label="Email"
            >
              <Mail size={18} />
            </a>
          </div>

          <button
            onClick={scrollToTop}
            className="p-3 rounded-full bg-primary/10 hover:bg-primary/20 text-primary transition-all duration-300 hover:scale-110 hover:shadow-md animate-in fade-in slide-in-from-bottom-4 duration-700"
            style={{animationDelay: "400ms"}}
            aria-label="Back to top"
          >
            <ArrowUp size={18} />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
