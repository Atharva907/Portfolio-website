"use client";
import { motion } from "framer-motion";
import { Code, Database, Palette, Zap } from "lucide-react";

const skills = [
  {
    name: "Frontend Development",
    icon: <Palette size={24} />,
    description: "React, Next.js, Tailwind CSS, TypeScript",
    color: "bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400"
  },
  {
    name: "Backend Development",
    icon: <Database size={24} />,
    description: "Node.js, Express, MongoDB, PostgreSQL",
    color: "bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400"
  },
  {
    name: "UI/UX Design",
    icon: <Zap size={24} />,
    description: "Figma, Adobe XD, Responsive Design",
    color: "bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400"
  },
  {
    name: "Clean Code",
    icon: <Code size={24} />,
    description: "Best Practices, Testing, Documentation",
    color: "bg-orange-100 dark:bg-orange-900/30 text-orange-600 dark:text-orange-400"
  }
];

export default function AboutSection() {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            About <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-indigo-600 dark:from-purple-400 dark:to-indigo-400">Me</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-purple-600 to-indigo-600 mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-400 to-indigo-400 rounded-2xl transform rotate-3"></div>
              <div className="relative bg-white dark:bg-gray-800 p-1 rounded-2xl">
                <div className="bg-gray-100 dark:bg-gray-700 rounded-2xl p-8 h-64 flex items-center justify-center">
                  <div className="text-6xl">👨‍💻</div>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold mb-4">Full Stack Developer & UI Enthusiast</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
              I'm a developer who loves combining clean code with beautiful UI design. My expertise includes React, Next.js, TailwindCSS, and building scalable backend systems. I'm passionate about creating intuitive user experiences and solving complex problems with elegant solutions.
            </p>
            <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
              When I'm not coding, you can find me exploring new technologies, contributing to open source projects, or enjoying a good cup of coffee while reading about the latest tech trends.
            </p>
            <div className="flex flex-wrap gap-2">
              {["React", "Next.js", "TypeScript", "TailwindCSS", "Node.js", "MongoDB"].map((skill) => (
                <span key={skill} className="px-3 py-1 bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400 rounded-full text-sm font-medium">
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="bg-white dark:bg-gray-800 rounded-xl p-6 h-full shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className={`w-12 h-12 rounded-lg flex items-center justify-center mb-4 ${skill.color}`}>
                  {skill.icon}
                </div>
                <h4 className="text-lg font-semibold mb-2">{skill.name}</h4>
                <p className="text-gray-600 dark:text-gray-300 text-sm">{skill.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}