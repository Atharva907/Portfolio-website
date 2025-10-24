import React from "react";
import { Code, Database, Globe, Smartphone } from "lucide-react";

const AboutSection = () => {
  const skills = [
    {
      name: "Frontend Development",
      icon: <Globe className="h-8 w-8" />,
      items: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
    },
    {
      name: "Backend Development",
      icon: <Code className="h-8 w-8" />,
      items: ["Node.js", "Express", "Python", "Java"],
    },
    {
      name: "Database",
      icon: <Database className="h-8 w-8" />,
      items: ["MongoDB", "PostgreSQL", "MySQL", "Redis"],
    },
    {
      name: "Mobile Development",
      icon: <Smartphone className="h-8 w-8" />,
      items: ["React Native", "Flutter", "Swift", "Kotlin"],
    },
  ];

  return (
    <section className="py-20 bg-secondary/30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">About Me</h2>
        <p className="text-center text-muted-foreground max-w-3xl mx-auto mb-16">
          I'm a passionate Full Stack Developer with a keen eye for design and a love for creating
          seamless user experiences. With expertise in modern web technologies, I transform ideas into
          powerful digital solutions.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skills.map((category, index) => (
            <div key={index} className="bg-background rounded-lg p-6 shadow-md">
              <div className="text-primary mb-4 flex justify-center">
                {category.icon}
              </div>
              <h3 className="text-xl font-semibold text-center mb-4">{category.name}</h3>
              <ul className="space-y-2 text-sm">
                {category.items.map((item, i) => (
                  <li key={i} className="flex items-center">
                    <span className="w-2 h-2 bg-primary rounded-full mr-2"></span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
