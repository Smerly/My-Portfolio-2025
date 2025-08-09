import { AnimatedBackground } from "@/components/layout/animated-background"
import { Navigation } from "@/components/layout/navigation"
import { Footer } from "@/components/layout/footer"
import { HeroSection } from "@/components/sections/hero-section"
import { AboutSection } from "@/components/sections/about-section"
import { ExperienceSection } from "@/components/sections/experience-section"
import { ProjectsSection } from "@/components/sections/projects-section"
import { SkillsSection } from "@/components/sections/skills-section"
import { ContactSection } from "@/components/sections/contact-section"

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-slate-950 text-white overflow-x-hidden">
      <AnimatedBackground />
      <Navigation />
      <HeroSection />
      <AboutSection />
      <ExperienceSection />
      <ProjectsSection />
      <SkillsSection />
      <ContactSection />
      <Footer />
    </div>
  )
}
