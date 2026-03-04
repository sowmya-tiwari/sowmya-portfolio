import { Badge } from "@/components/ui/badge"
import { SectionHeading } from "./section-heading"
import { AnimateOnScroll } from "./animate-on-scroll"
import {
  FileText,
  ClipboardList,
  Figma,
  GitBranch,
  Bug,
  BarChart3,
  Clock,
  Briefcase,
} from "lucide-react"

const baSkillCategories = [
  {
    icon: FileText,
    title: "Documentation",
    skills: ["BRD", "FRD", "SRS", "RTM", "Microsoft Word", "Excel", "Google Docs"],
  },
  {
    icon: ClipboardList,
    title: "Requirement & Project Management",
    skills: ["Requirement Gathering", "Jira", "User Stories", "Sprint Tracking"],
  },
  {
    icon: Figma,
    title: "Wireframing",
    skills: ["Figma"],
  },
  {
    icon: GitBranch,
    title: "Process Modeling",
    skills: ["Microsoft Visio", "Lucidchart", "Draw.io"],
  },
  {
    icon: Bug,
    title: "Testing & Quality",
    skills: ["Test Case Writing", "Bug Detection & Reporting", "Postman"],
  },
  {
    icon: BarChart3,
    title: "Data & Reporting",
    skills: ["Power BI", "Tableau", "SQL"],
  },
]

export function BusinessAnalystSection() {
  return (
    <section id="business-analyst" className="px-6 py-24 md:py-32">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          label="02 / Analyst"
          title="Business Analyst"
          description="I analyze business needs, create structured documentation, and translate requirements into actionable technical solutions. I ensure clarity between stakeholders and development teams."
        />

        {/* BA Skills Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
          {baSkillCategories.map((category, i) => (
            <AnimateOnScroll key={category.title} animation="fade-up" delay={i * 80}>
            <div
              className="group rounded-xl border border-border bg-card p-6 hover:border-primary/30 hover:shadow-md transition-all duration-300"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="flex items-center justify-center size-9 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                  <category.icon className="size-4" />
                </div>
                <h3 className="text-sm font-semibold text-foreground">
                  {category.title}
                </h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <Badge
                    key={skill}
                    variant="secondary"
                    className="text-xs font-normal"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
            </AnimateOnScroll>
          ))}
        </div>

        {/* BA Experience */}
        <AnimateOnScroll animation="fade-up">
        <div className="mb-20">
          <h3 className="text-sm font-medium tracking-widest uppercase text-muted-foreground mb-8">
            Experience
          </h3>
          <div className="rounded-xl border border-border bg-card p-8">
            <div className="flex items-start gap-4 mb-6">
              <div className="flex items-center justify-center size-12 rounded-xl bg-primary/10 text-primary shrink-0">
                <Briefcase className="size-5" />
              </div>
              <div>
                <h4 className="font-serif text-xl font-semibold text-foreground">
                  App Innovation Technologies
                </h4>
                <p className="text-sm text-muted-foreground mt-1">
                  Business Analyst Intern
                </p>
              </div>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed mb-5">
              Worked on real-time projects utilizing various BA tools and methodologies to gather requirements, create documentation, and support cross-functional teams in delivering impactful solutions.
            </p>
            <div className="flex flex-wrap gap-2">
              {["Requirement Gathering", "Jira", "User Stories", "BRD", "FRD", "Figma", "Process Mapping", "Stakeholder Communication"].map((tool) => (
                <Badge key={tool} variant="secondary" className="text-xs font-normal">
                  {tool}
                </Badge>
              ))}
            </div>
          </div>
        </div>
        </AnimateOnScroll>
      </div>
    </section>
  )
}
