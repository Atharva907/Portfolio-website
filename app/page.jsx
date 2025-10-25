import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ProjectsSection from "@/components/ProjectsSection";
import ContactSection from "@/components/ContactSection";

export default function HomePage() {
  return (
    <main className="overflow-x-hidden scroll-smooth">
      <section id="home" className="min-h-screen"><HeroSection /></section>
      <section id="about" className="py-20"><AboutSection /></section>
      <section id="projects" className="py-20 bg-secondary/30"><ProjectsSection /></section>
      <section id="contact" className="py-20"><ContactSection /></section>
    </main>
  );
}
