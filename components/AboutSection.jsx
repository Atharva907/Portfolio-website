import React from "react";
import { Code, Database, Globe, Smartphone, User } from "lucide-react";

const AboutSection = () => {
  const skills = [
    {
      name: "Frontend Development",
      icon: <Globe className="h-8 w-8" />,
      items: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
      color: "from-blue-500 to-cyan-500"
    },
    {
      name: "Backend Development",
      icon: <Code className="h-8 w-8" />,
      items: ["Node.js", "Express", "Python", "Java"],
      color: "from-green-500 to-emerald-500"
    },
    {
      name: "Database",
      icon: <Database className="h-8 w-8" />,
      items: ["MongoDB", "PostgreSQL", "MySQL", "Redis"],
      color: "from-purple-500 to-pink-500"
    },
    {
      name: "Mobile Development",
      icon: <Smartphone className="h-8 w-8" />,
      items: ["React Native", "Flutter", "Swift", "Kotlin"],
      color: "from-orange-500 to-red-500"
    },
  ];

  return (
    <section className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.03]"></div>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16 animate-in fade-in slide-in-from-bottom-4 duration-700">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">About Me</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            I'm a passionate Full Stack Developer with a keen eye for design and a love for creating
            seamless user experiences. With expertise in modern web technologies, I transform ideas into
            powerful digital solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {skills.map((category, index) => (
            <div key={index} className="group bg-background rounded-xl p-6 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-border/50 hover:border-primary/20 animate-in fade-in slide-in-from-bottom-4 duration-700" style={{animationDelay: `${index * 100}ms`}}>
              <div className={`bg-gradient-to-br ${category.color} bg-clip-text text-transparent mb-4 flex justify-center p-3 rounded-full bg-secondary/50 group-hover:scale-110 transition-transform duration-300`}>
                {category.icon}
              </div>
              <h3 className="text-xl font-semibold text-center mb-4">{category.name}</h3>
              <ul className="space-y-2 text-sm">
                {category.items.map((item, i) => (
                  <li key={i} className="flex items-center justify-center group/item hover:text-primary transition-colors duration-200">
                    <span className="w-2 h-2 bg-primary rounded-full mr-2 opacity-70 group-hover/item:opacity-100"></span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        
        <div className="mt-20 grid grid-cols-1 md:grid-cols-2 gap-10 items-center animate-in fade-in slide-in-from-bottom-4 duration-700" style={{animationDelay: "500ms"}}>
          <div className="space-y-6">
            <h3 className="text-2xl font-bold">Let's work together</h3>
            <p className="text-muted-foreground leading-relaxed">
              I'm always interested in hearing about new projects and opportunities.
              Whether you have a question or just want to say hi, feel free to get in touch!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <a href="#contact" className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background bg-primary text-primary-foreground hover:bg-primary/90 h-11 px-8 py-2 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                Get In Touch
              </a>
              <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background border border-input bg-background hover:bg-accent hover:text-accent-foreground h-11 px-8 py-2 shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105">
                Download Resume
              </a>
            </div>
          </div>
          <div className="flex justify-center md:justify-end">
            <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full bg-gradient-to-br from-primary/20 to-secondary/20 p-1 animate-pulse">
              <div className="w-full h-full rounded-full bg-background flex items-center justify-center border border-border/50">
                <User size={120} className="text-muted-foreground/30" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
