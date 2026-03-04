import { Navigation } from "@/components/portfolio/navigation"
import { Hero } from "@/components/portfolio/hero"
import { EducationSection } from "@/components/portfolio/education-section"
import { SkillsSection } from "@/components/portfolio/skills-section"
import { AchievementsSection } from "@/components/portfolio/achievements-section"
import { CertificationsSection } from "@/components/portfolio/certifications-section"
import { ContactSection } from "@/components/portfolio/contact-section"
import { ContactFormSection } from "@/components/portfolio/contact-form-section"
import { EmailJSScript } from "@/components/portfolio/emailjs-script"
import { Footer } from "@/components/portfolio/footer"
import { Divider } from "@/components/portfolio/divider"

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <EmailJSScript />
      <Navigation />
      <Hero />
      <Divider />
      <EducationSection />
      <Divider />
      <SkillsSection />
      <Divider />
      <AchievementsSection />
      <Divider />
      <CertificationsSection />
      <Divider />
      <ContactSection />
      <Divider />
      <ContactFormSection />
      <Footer />
    </div>
  )
}
