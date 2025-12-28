"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail } from "lucide-react";
import { useRef } from "react";
import Snowfall from "react-snowfall";

export default function HeroSection() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], [0, -200]);
  const textY = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const blobY = useTransform(scrollYProgress, [0, 1], [0, -150]);

  return (
    <section ref={ref} className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-indigo-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-indigo-900 pt-20 sm:pt-24">
      {/* Background decoration */}
      <motion.div 
        className="absolute inset-0 overflow-hidden"
        style={{ y: backgroundY }}
      >
        <motion.div 
          className="absolute -top-40 -right-40 w-80 h-80 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-30 dark:bg-purple-700 animate-blob"
          style={{ y: blobY }}
        ></motion.div>
        <motion.div 
          className="absolute -bottom-40 -left-40 w-80 h-80 bg-yellow-300 rounded-full mix-blend-multiply filter blur-xl opacity-30 dark:bg-yellow-700 animate-blob animation-delay-2000"
          style={{ y: blobY }}
        ></motion.div>
        <motion.div 
          className="absolute top-40 left-40 w-80 h-80 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-30 dark:bg-pink-700 animate-blob animation-delay-4000"
          style={{ y: blobY }}
        ></motion.div>
      </motion.div>

      <motion.div 
        className="relative z-10 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto"
        style={{ y: textY }}
      >
        <div className="flex flex-col lg:flex-row items-center justify-center gap-12 lg:gap-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="relative"
          >
            <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden shadow-2xl border-4 border-white dark:border-gray-800">
              <img 
                src="/Atharva image.png" 
                alt="Atharva Chavan" 
                className="w-full h-full object-cover"
              />
            </div>
            {/* <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-gradient-to-br from-purple-500 to-indigo-600 rounded-full flex items-center justify-center shadow-lg">
              <span className="text-white font-bold text-xl">AC</span>
            </div> */}
          </motion.div>
          
          <div className="text-center lg:text-left lg:max-w-xl">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              className="mb-6"
            >
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight">
                <span className="block">Hi, I'm</span>
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-indigo-600 dark:from-purple-400 dark:to-indigo-400">
                  Atharva Chavan
                </span>
                <span className="block text-2xl sm:text-3xl md:text-4xl mt-2 font-medium text-gray-600 dark:text-gray-300">
                  Full-Stack Developer & DevOps Engineer
                </span>
              </h1>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="mt-6 text-xl text-gray-600 dark:text-gray-300"
            >
              Building scalable web applications and automating their deployment using modern DevOps practices.
              <span className="block mt-2 text-lg">Specializing in end-to-end solutions from frontend to cloud infrastructure.</span>
            </motion.p>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="mt-10 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center"
            >
            <Button asChild size="lg" className="px-8 py-3 text-base font-medium rounded-full bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 shadow-lg transform transition-all duration-200 hover:scale-105">
              <a href="https://github.com/Atharva907" target="_blank" rel="noopener noreferrer">
                Github
              </a>
            </Button>
            <Button asChild variant="outline" size="lg" className="px-8 py-3 text-base font-medium rounded-full border-2 border-purple-600 text-purple-600 hover:bg-purple-600 hover:text-white dark:border-purple-400 dark:text-purple-400 dark:hover:bg-purple-400 dark:hover:text-gray-900 shadow-md transform transition-all duration-200 hover:scale-105">
              <a href="https://drive.google.com/file/d/11RxDpfxKSboNcwzRSLbZq5-4K-Dx4wpc/view" target="_blank" rel="noopener noreferrer">
                Resume
              </a>
            </Button>
          </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.9, duration: 0.8 }}
              className="mt-10 flex justify-center lg:justify-start space-x-6"
            >
            <a href="https://github.com/Atharva907" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-purple-600 dark:text-gray-400 dark:hover:text-purple-400 transition-colors">
              <Github size={24} />
              <span className="sr-only">GitHub</span>
            </a>
            <a href="https://www.linkedin.com/in/atharva-chavan907" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-purple-600 dark:text-gray-400 dark:hover:text-purple-400 transition-colors">
              <Linkedin size={24} />
              <span className="sr-only">LinkedIn</span>
            </a>
            <a href="mailto:atharva.chavan907@gmail.com" className="text-gray-600 hover:text-purple-600 dark:text-gray-400 dark:hover:text-purple-400 transition-colors">
              <Mail size={24} />
              <span className="sr-only">Email</span>
            </a>
            </motion.div>
          </div>
        </div>
      </motion.div>

      {/* Scroll indicator - desktop only */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="absolute bottom-2 left-1/2 transform -translate-x-1/2 hidden md:block"
      >
        <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-gray-400 rounded-full mt-2 animate-pulse"></div>
        </div>
      </motion.div>

      {/* Snowfall effect */}
      <div className="hidden dark:block">
        <Snowfall
          color="#ffffff"
          style={{
            position: 'fixed',
            width: '100vw',
            height: '100vh',
            zIndex: 5,
            pointerEvents: 'none'
          }}
        />
      </div>
      <div className="block dark:hidden">
        <Snowfall
          color="#4b5563"
          style={{
            position: 'fixed',
            width: '100vw',
            height: '100vh',
            zIndex: 5,
            pointerEvents: 'none'
          }}
        />
      </div>

      <style jsx>{`
        @keyframes blob {
          0% {
            transform: translate(0px, 0px) scale(1);
          }
          33% {
            transform: translate(30px, -50px) scale(1.1);
          }
          66% {
            transform: translate(-20px, 20px) scale(0.9);
          }
          100% {
            transform: translate(0px, 0px) scale(1);
          }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
    </section>
  );
}