import HeroSection from "@/app/components/HeroSection";
import AboutSection from "@/app/components/AboutSection";
import ProjectsSection from "@/app/components/ProjectsSection";
import ContactSection from "@/app/components/ContactSection";

export default function HomePage() {
  return (
    <main className="overflow-x-hidden">
      <section id="home"><HeroSection /></section>
      <section id="about"><AboutSection /></section>
      <section id="projects"><ProjectsSection /></section>
      <section id="contact"><ContactSection /></section>
    </main>
  );
}
