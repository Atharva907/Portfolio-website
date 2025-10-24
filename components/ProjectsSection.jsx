import React, { useState } from "react";
import { ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const ProjectsSection = () => {
  const [filter, setFilter] = useState("all");

  const projects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      description: "A full-stack e-commerce solution with payment integration, user authentication, and admin dashboard.",
      image: "/project1.jpg",
      tags: ["React", "Node.js", "MongoDB", "Stripe"],
      category: "fullstack",
      githubUrl: "https://github.com/Atharva907/ecommerce-platform",
      liveUrl: "https://ecommerce-demo.example.com",
    },
    {
      id: 2,
      title: "Task Management App",
      description: "A collaborative task management application with real-time updates and team collaboration features.",
      image: "/project2.jpg",
      tags: ["Next.js", "TypeScript", "PostgreSQL", "Socket.io"],
      category: "fullstack",
      githubUrl: "https://github.com/Atharva907/task-manager",
      liveUrl: "https://tasks-demo.example.com",
    },
    {
      id: 3,
      title: "Weather Dashboard",
      description: "A responsive weather dashboard with location-based forecasts and interactive weather maps.",
      image: "/project3.jpg",
      tags: ["React", "API Integration", "Charts.js"],
      category: "frontend",
      githubUrl: "https://github.com/Atharva907/weather-dashboard",
      liveUrl: "https://weather-demo.example.com",
    },
    {
      id: 4,
      title: "Blog Platform API",
      description: "RESTful API for a blog platform with user authentication, content management, and comment system.",
      image: "/project4.jpg",
      tags: ["Node.js", "Express", "MongoDB", "JWT"],
      category: "backend",
      githubUrl: "https://github.com/Atharva907/blog-api",
      liveUrl: null,
    },
  ];

  const filteredProjects = filter === "all" 
    ? projects 
    : projects.filter(project => project.category === filter);

  return (
    <section className="py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">My Projects</h2>
        <p className="text-center text-muted-foreground max-w-3xl mx-auto mb-12">
          Here are some of my recent projects. Each one represents a unique challenge and learning experience.
        </p>

        <div className="flex justify-center mb-12">
          <div className="inline-flex rounded-md shadow-sm" role="group">
            <button
              type="button"
              className={`px-4 py-2 text-sm font-medium rounded-l-lg ${
                filter === "all" 
                  ? "bg-primary text-primary-foreground" 
                  : "bg-background text-foreground hover:bg-secondary"
              }`}
              onClick={() => setFilter("all")}
            >
              All
            </button>
            <button
              type="button"
              className={`px-4 py-2 text-sm font-medium ${
                filter === "fullstack" 
                  ? "bg-primary text-primary-foreground" 
                  : "bg-background text-foreground hover:bg-secondary"
              }`}
              onClick={() => setFilter("fullstack")}
            >
              Full Stack
            </button>
            <button
              type="button"
              className={`px-4 py-2 text-sm font-medium ${
                filter === "frontend" 
                  ? "bg-primary text-primary-foreground" 
                  : "bg-background text-foreground hover:bg-secondary"
              }`}
              onClick={() => setFilter("frontend")}
            >
              Frontend
            </button>
            <button
              type="button"
              className={`px-4 py-2 text-sm font-medium rounded-r-md ${
                filter === "backend" 
                  ? "bg-primary text-primary-foreground" 
                  : "bg-background text-foreground hover:bg-secondary"
              }`}
              onClick={() => setFilter("backend")}
            >
              Backend
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <Card key={project.id} className="overflow-hidden">
              <div className="aspect-video bg-secondary"></div>
              <CardHeader>
                <CardTitle>{project.title}</CardTitle>
                <CardDescription>{project.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2 mt-2">
                  {project.tags.map((tag, index) => (
                    <span 
                      key={index} 
                      className="inline-block bg-secondary text-secondary-foreground text-xs px-2 py-1 rounded"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </CardContent>
              <CardFooter className="flex gap-2">
                <Button asChild variant="outline" size="sm">
                  <a 
                    href={project.githubUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    <Github className="h-4 w-4 mr-2" />
                    Code
                  </a>
                </Button>
                {project.liveUrl && (
                  <Button asChild size="sm">
                    <a 
                      href={project.liveUrl} 
                      target="_blank" 
                      rel="noopener noreferrer"
                    >
                      <ExternalLink className="h-4 w-4 mr-2" />
                      Live Demo
                    </a>
                  </Button>
                )}
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
