import { CyberNav } from "@/components/cyber-nav"
import { HeroSection } from "@/components/hero-section"
import { AboutSection } from "@/components/about-section"
import { ProjectsSection } from "@/components/projects-section"
import { RecentActivity } from "@/components/recent-activity"
import { SkillsSection } from "@/components/skills-section"
import { EducationSection } from "@/components/education-section"
import { ContactSection } from "@/components/contact-section"

export default function Page() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <CyberNav />
      <HeroSection />
      <AboutSection />
      <ProjectsSection />
      <RecentActivity />
      <SkillsSection />
      <EducationSection />
      <ContactSection />
    </main>
  )
}
