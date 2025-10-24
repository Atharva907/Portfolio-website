

"use client";
import { motion } from "framer-motion";
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  { 
    title: "ByteCheck", 
    desc: "AI Resume Verifier for IT Recruiters", 
    tech: "Next.js + OpenAI",
    image: "🤖",
    github: "https://github.com",
    demo: "https://example.com",
    color: "from-blue-500 to-cyan-500"
  },
  { 
    title: "GameArena", 
    desc: "Esports Tournament Platform", 
    tech: "Next.js + MongoDB",
    image: "🎮",
    github: "https://github.com/Atharva907/GameArena",
    demo: "https://yt-nextjs-ecommerce.vercel.app/",
    color: "from-purple-500 to-pink-500"
  },
  { 
    title: "XAUUSD Bot", 
    desc: "Automated Forex Trading Bot", 
    tech: "Python + MT5",
    image: "💹",
    github: "https://github.com",
    demo: "https://example.com",
    color: "from-green-500 to-teal-500"
  },
  { 
    title: "Social Connect", 
    desc: "Social Media Analytics Dashboard", 
    tech: "React + D3.js",
    image: "📊",
    github: "https://github.com",
    demo: "https://example.com",
    color: "from-orange-500 to-red-500"
  },
  { 
    title: "Cloud Storage", 
    desc: "Secure File Storage Solution", 
    tech: "Node.js + AWS",
    image: "☁️",
    github: "https://github.com",
    demo: "https://example.com",
    color: "from-indigo-500 to-blue-500"
  },
  { 
    title: "Task Manager", 
    desc: "Productivity App with Team Features", 
    tech: "Vue.js + Firebase",
    image: "✅",
    github: "https://github.com",
    demo: "https://example.com",
    color: "from-pink-500 to-rose-500"
  }
];

export default function ProjectsSection() {
  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-800">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-indigo-600 dark:from-purple-400 dark:to-indigo-400">Projects</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-purple-600 to-indigo-600 mx-auto rounded-full"></div>
          <p className="mt-6 text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Here are some of my recent projects that I've worked on. Each project showcases my skills and experience in different technologies.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              <Card className="h-full overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                <div className={`h-48 bg-gradient-to-br ${project.color} flex items-center justify-center text-6xl relative overflow-hidden`}>
                  <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                  <div className="relative z-10 transform transition-transform duration-300 group-hover:scale-110">
                    {project.image}
                  </div>
                </div>
                <CardHeader className="pb-3">
                  <h3 className="text-xl font-bold">{project.title}</h3>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">{project.desc}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium text-purple-600 dark:text-purple-400">{project.tech}</span>
                    <div className="flex gap-2">
                      <a 
                        href={project.github} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="p-2 rounded-full bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
                        aria-label="View source code"
                      >
                        <Github size={16} />
                      </a>
                      <a 
                        href={project.demo} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="p-2 rounded-full bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
                        aria-label="View live demo"
                      >
                        <ExternalLink size={16} />
                      </a>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <a 
            href="https://github.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white font-medium rounded-full shadow-lg transform transition-all duration-200 hover:scale-105"
          >
            <Github size={20} />
            View More on GitHub
          </a>
        </motion.div>
      </div>
    </section>
  );
}

