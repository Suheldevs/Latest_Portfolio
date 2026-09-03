import { useEffect } from "react";
import Navigation from "@/components/editorial/Navigation";
import HeroSection from "@/components/editorial/HeroSection";
import ExperienceSection from "@/components/editorial/ExperienceSection";
import ProjectsSection from "@/components/editorial/ProjectsSection";
import AboutSection from "@/components/editorial/AboutSection";
import SkillsSection from "@/components/editorial/SkillsSection";
import ContactSection from "@/components/editorial/ContactSection";
import Footer from "@/components/editorial/Footer";

export default function Home() {
  // The editorial theme is scoped to <html class="editorial"> so the previous
  // portfolio at /old keeps its own dark shadcn palette untouched.
  useEffect(() => {
    const root = document.documentElement;
    root.classList.add("editorial");
    return () => root.classList.remove("editorial");
  }, []);

  return (
    <div className="min-h-screen">
      <Navigation />
      <HeroSection />
      <ExperienceSection />
      <ProjectsSection />
      <AboutSection />
      <SkillsSection />
      <ContactSection />
      <Footer />
    </div>
  );
}
