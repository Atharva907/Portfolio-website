

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function ProjectsPage() {
  const projects = [
    {
      title: "Portfolio Website",
      description: "Built with Next.js, Tailwind, and ShadCN UI.",
      color: "from-pink-400 to-purple-600",
      tags: ["Next.js", "Tailwind", "ShadCN UI"]
    },
    {
      title: "E-Commerce Platform",
      description: "A full-stack online shopping experience with React and Node.js.",
      color: "from-blue-400 to-cyan-600",
      tags: ["React", "Node.js", "MongoDB"]
    },
    {
      title: "Weather Dashboard",
      description: "Beautiful weather app with real-time data and animations.",
      color: "from-yellow-400 to-orange-600",
      tags: ["JavaScript", "API", "Charts.js"]
    },
    {
      title: "Task Management App",
      description: "Collaborative project management tool with real-time updates.",
      color: "from-green-400 to-teal-600",
      tags: ["Vue.js", "Firebase", "Vuex"]
    },
    {
      title: "Social Media Analytics",
      description: "Dashboard for tracking and visualizing social media metrics.",
      color: "from-purple-400 to-indigo-600",
      tags: ["Python", "Django", "D3.js"]
    },
    {
      title: "Mobile Game",
      description: "Fun and addictive puzzle game built with React Native.",
      color: "from-red-400 to-pink-600",
      tags: ["React Native", "Redux", "Animation"]
    }
  ];

  return (
    <main className="p-10 min-h-screen bg-gradient-to-br from-teal-400 via-blue-500 to-purple-600">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-12 text-white drop-shadow-lg">My Projects</h1>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <div key={index} className="transform transition-all duration-300 hover:scale-105">
              <Card className={`h-full overflow-hidden bg-gradient-to-br ${project.color} shadow-xl border-0`}>
                <CardHeader className="pb-4">
                  <div className="h-40 rounded-lg bg-white/20 backdrop-blur-sm flex items-center justify-center">
                    <div className="w-24 h-24 rounded-full bg-white/30 backdrop-blur-sm"></div>
                  </div>
                  <CardTitle className="text-white text-2xl font-bold drop-shadow-md">{project.title}</CardTitle>
                </CardHeader>
                <CardContent className="pt-0">
                  <p className="text-white/90 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, tagIndex) => (
                      <span key={tagIndex} className="px-3 py-1 rounded-full bg-white/30 backdrop-blur-sm text-white text-sm font-medium">
                        {tag}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}

