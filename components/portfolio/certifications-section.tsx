import { SectionHeading } from "./section-heading"
import { Award } from "lucide-react"

const certifications = [
  {
    title: "C for Beginners",
    issuer: "Great Learning",
    year: "2023",
  },
  {
    title: "Excel for Beginners",
    issuer: "Great Learning",
    year: "2023",
  },
  {
    title: "Joy of Computing using Python",
    issuer: "NPTEL",
    year: "2024",
  },
  {
    title: "Privacy and Security in Online Social Media",
    issuer: "NPTEL",
    year: "2024",
  },
  {
    title: "Java Programming — Beginner to Master",
    issuer: "Certification Program",
    year: "2024",
  },
  {
    title: "Mastering DSA using C & C++",
    issuer: "Udemy",
    year: "2024",
  },
]

export function CertificationsSection() {
  return (
    <section id="certifications" className="px-6 py-24 md:py-32">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          label="04 / Certifications"
          title="Professional Certifications"
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {certifications.map((cert) => (
            <div
              key={cert.title}
              className="group flex items-start gap-4 rounded-xl border border-primary/20 bg-gradient-to-br from-primary/5 via-card to-accent/5 p-5 hover:border-primary/40 hover:shadow-lg hover:shadow-primary/15 transition-all duration-300"
            >
              <div className="flex items-center justify-center size-9 rounded-lg bg-gradient-to-br from-primary/20 to-primary/30 text-primary group-hover:from-primary group-hover:to-accent group-hover:text-primary-foreground group-hover:scale-110 transition-all duration-300">
                <Award className="size-4" />
              </div>
              <div>
                <h4 className="text-sm font-semibold text-foreground group-hover:text-primary transition-colors">
                  {cert.title}
                </h4>
                <p className="text-xs text-muted-foreground mt-1 bg-primary/10 px-2 py-1 rounded inline-block">
                  {cert.issuer} &middot; {cert.year}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
