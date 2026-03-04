import { SectionHeading } from "./section-heading"
import { AnimateOnScroll } from "./animate-on-scroll"
import { Database, GraduationCap } from "lucide-react"

export function EducationSection() {
  return (
    <section id="education" className="px-6 py-24 md:py-32">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          label="02 / Education"
          title="Academic Background"
          description="Strong foundation in Computer Science and Business Systems with consistent academic performance."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* B.Tech */}
          <AnimateOnScroll animation="fade-up">
            <div className="rounded-xl border border-primary/20 bg-gradient-to-br from-primary/5 via-card to-accent/5 p-6 hover:border-primary/40 hover:shadow-lg hover:shadow-primary/15 transition-all duration-300">
              <div className="flex items-center gap-3 mb-4">
                <div className="flex items-center justify-center size-10 rounded-lg bg-gradient-to-br from-primary/20 to-primary/30 text-primary">
                  <GraduationCap className="size-5" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">B.Tech</h3>
                  <p className="text-sm text-muted-foreground">Computer Science and Business Systems</p>
                </div>
              </div>
              <div className="space-y-3">
                <div>
                  <p className="text-sm font-medium text-foreground">Sri Eshwar College of Engineering</p>
                  <p className="text-xs text-muted-foreground">2022 - 2026</p>
                </div>
                <div className="bg-primary/10 px-3 py-2 rounded-lg inline-block">
                  <p className="text-sm font-semibold text-primary">CGPA: 8.01</p>
                </div>
              </div>
            </div>
          </AnimateOnScroll>

          {/* School Education */}
          <AnimateOnScroll animation="fade-up" delay={100}>
            <div className="rounded-xl border border-accent/20 bg-gradient-to-br from-accent/5 via-card to-primary/5 p-6 hover:border-accent/40 hover:shadow-lg hover:shadow-accent/15 transition-all duration-300">
              <div className="flex items-center gap-3 mb-4">
                <div className="flex items-center justify-center size-10 rounded-lg bg-gradient-to-br from-accent/20 to-accent/30 text-accent">
                  <Database className="size-5" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">School Education</h3>
                  <p className="text-sm text-muted-foreground">HSC & SSLC</p>
                </div>
              </div>
              <div className="space-y-3">
                <div>
                  <p className="text-sm font-medium text-foreground">Vedanta Academy</p>
                  <p className="text-xs text-muted-foreground">Completed 2020 & 2022</p>
                </div>
                <div className="flex flex-wrap gap-2">
                  <span className="bg-accent/10 px-2 py-1 rounded text-xs font-medium text-accent">
                    HSC Completed
                  </span>
                  <span className="bg-accent/10 px-2 py-1 rounded text-xs font-medium text-accent">
                    SSLC Completed
                  </span>
                </div>
              </div>
            </div>
          </AnimateOnScroll>
        </div>
      </div>
    </section>
  )
}
