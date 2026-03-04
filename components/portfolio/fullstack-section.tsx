import { Badge } from "@/components/ui/badge"
import { SectionHeading } from "./section-heading"
import { AnimateOnScroll } from "./animate-on-scroll"
import {
  Code2,
  Server,
  Database,
  Cloud,
  GitBranch,
  Layers,
  Briefcase,
  Users,
  ExternalLink,
} from "lucide-react"

const skillCategories = [
  {
    icon: Code2,
    title: "Frontend",
    skills: ["HTML", "CSS", "JavaScript", "React", "Next.js", "Tailwind CSS", "Context API"],
  },
  {
    icon: Server,
    title: "Backend",
    skills: ["Node.js", "Express.js", "Django"],
  },
  {
    icon: Layers,
    title: "APIs & Testing",
    skills: ["REST APIs", "Postman"],
  },
  {
    icon: Database,
    title: "Databases",
    skills: ["MySQL", "MongoDB"],
  },
  {
    icon: GitBranch,
    title: "Version Control",
    skills: ["Git", "GitHub"],
  },
  {
    icon: Cloud,
    title: "Deployment & Cloud",
    skills: ["AWS", "Vercel"],
  },
]

const projects = [
  {
    title: "LURNIX",
    year: "2025",
    description:
      "Smart education platform combining AI, AR, and voice assistance.",
    features: "3D/2D visualization, quizzes, interactive learning hub.",
  },
  {
    title: "Workout Planner",
    year: "2025",
    description: "Full-stack MERN application to plan and track workouts.",
    features: "Complete CRUD operations with user-friendly interface.",
  },
  {
    title: "Railway Navigation System",
    year: "2024",
    description:
      "Multi-platform navigation system providing real-time directions inside railway stations.",
    features: "Smart India Hackathon project with real-time wayfinding.",
  },
  {
    title: "Queue Eaze",
    year: "2024",
    description:
      "Queue management system for trial rooms allowing time-slot scheduling.",
    features: "Smart slot booking with real-time availability.",
  },
]

const internships = [
  {
    role: "Cloud Computing Intern",
    company: "Synopsys India Pvt Ltd & Vsphere Tech",
    year: "2025",
    details: [
      "Worked with AWS EC2, VPC, RDS, S3, CloudWatch",
      "Deployed secure and scalable architectures",
      "Monitored infrastructure and implemented best practices",
    ],
  },
  {
    role: "Web Development Intern",
    company: "InternPe",
    year: "2024",
    details: [
      "Worked on web projects and contributed as an active development team member",
    ],
  },
]

export function FullStackSection() {
  return (
    <section id="fullstack" className="px-6 py-24 md:py-32">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          label="01 / Developer"
          title="Full Stack Developer"
          description="I design and develop scalable web applications using modern frontend, backend, and cloud technologies. My focus is performance, usability, and real-world deployment."
        />

        {/* Skills Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
          {skillCategories.map((category, i) => (
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

        {/* Core Concepts */}
        <AnimateOnScroll animation="fade-up">
        <div className="mb-20">
          <div className="flex items-center gap-3 mb-4">
            <Layers className="size-4 text-primary" />
            <h3 className="text-sm font-semibold text-foreground uppercase tracking-wide">
              Core Concepts
            </h3>
          </div>
          <div className="flex flex-wrap gap-2">
            {["Data Structures & Algorithms", "Object-Oriented Programming"].map(
              (concept) => (
                <Badge
                  key={concept}
                  variant="outline"
                  className="text-xs font-normal"
                >
                  {concept}
                </Badge>
              )
            )}
          </div>
        </div>
        </AnimateOnScroll>

        {/* Projects */}
        <div className="mb-20">
          <h3 className="text-xs tracking-widest uppercase text-primary font-medium mb-8">
            Projects
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {projects.map((project, i) => (
              <AnimateOnScroll key={project.title} animation="fade-up" delay={i * 100}>
              <div
                className="group rounded-xl border border-border bg-card p-6 hover:border-primary/30 hover:shadow-md transition-all duration-300"
              >
                <div className="flex items-start justify-between mb-3">
                  <h4 className="font-semibold text-foreground group-hover:text-primary transition-colors">
                    {project.title}
                  </h4>
                  <span className="text-xs text-muted-foreground font-mono">
                    {project.year}
                  </span>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed mb-3">
                  {project.description}
                </p>
                <p className="text-xs text-muted-foreground/70">
                  {project.features}
                </p>
              </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>

        {/* Internships */}
        <div className="mb-12">
          <h3 className="text-xs tracking-widest uppercase text-primary font-medium mb-8">
            Experience
          </h3>
          <div className="space-y-6">
            {internships.map((internship, i) => (
              <AnimateOnScroll key={internship.role} animation="fade-up" delay={i * 120}>
              <div
                className="rounded-xl border border-border bg-card p-6 hover:shadow-md transition-shadow duration-300"
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4">
                  <div>
                    <div className="flex items-center gap-2">
                      <Briefcase className="size-4 text-primary" />
                      <h4 className="font-semibold text-foreground">
                        {internship.role}
                      </h4>
                    </div>
                    <p className="text-sm text-muted-foreground mt-1">
                      {internship.company}
                    </p>
                  </div>
                  <span className="text-xs text-muted-foreground font-mono">
                    {internship.year}
                  </span>
                </div>
                <ul className="space-y-2">
                  {internship.details.map((detail, i) => (
                    <li
                      key={i}
                      className="text-sm text-muted-foreground leading-relaxed flex items-start gap-2"
                    >
                      <span className="size-1 rounded-full bg-primary/60 mt-2 shrink-0" />
                      {detail}
                    </li>
                  ))}
                </ul>
              </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
