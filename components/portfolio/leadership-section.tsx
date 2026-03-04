import { SectionHeading } from "./section-heading"
import { AnimateOnScroll } from "./animate-on-scroll"
import { Users, Award, Briefcase } from "lucide-react"

const leadershipRoles = [
  {
    title: "Department Secretary",
    organization: "Computer Science Department",
    description: "Managed departmental activities and coordinated between faculty and students",
    icon: Users,
  },
  {
    title: "Team Lead",
    organization: "2 Development Teams",
    description: "Led multiple development teams for various projects and hackathons",
    icon: Briefcase,
  },
  {
    title: "Core Developer",
    organization: "1 Project",
    description: "Served as core developer contributing to major project development",
    icon: Award,
  },
]

export function LeadershipSection() {
  return (
    <section id="leadership" className="px-6 py-24 md:py-32">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          label="Leadership"
          title="Leadership & Roles"
          description="Demonstrated leadership capabilities through various roles in academic and project environments."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {leadershipRoles.map((role, i) => (
            <AnimateOnScroll key={role.title} animation="fade-up" delay={i * 100}>
              <div className="rounded-xl border border-green-500/20 bg-gradient-to-br from-green-500/5 via-card to-emerald-500/5 p-6 hover:border-green-500/40 hover:shadow-lg hover:shadow-green-500/15 transition-all duration-300">
                <div className="flex items-center gap-3 mb-4">
                  <div className="flex items-center justify-center size-10 rounded-lg bg-gradient-to-br from-green-500/20 to-emerald-500/20 text-green-500">
                    <role.icon className="size-5" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">{role.title}</h3>
                    <p className="text-sm text-muted-foreground">{role.organization}</p>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {role.description}
                </p>
              </div>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  )
}
