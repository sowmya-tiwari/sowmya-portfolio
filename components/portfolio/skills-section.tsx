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
  FileText,
  ClipboardList,
  Figma,
  Bug,
  BarChart3,
  Briefcase,
  Users,
  MessageSquare
} from "lucide-react"

const technicalSkills = [
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
    icon: Database,
    title: "Database",
    skills: ["MySQL", "MongoDB", "PostgreSQL"],
  },
  {
    icon: GitBranch,
    title: "Version Control",
    skills: ["Git", "GitHub"],
  },
  {
    icon: Cloud,
    title: "Cloud & Deployment",
    skills: ["AWS", "Vercel"],
  },
  {
    icon: Layers,
    title: "Object-Oriented Programming",
    skills: [ "C++","Java"],    
  },
]

const businessSkills = [
  {
    icon: BarChart3,
    title: "Business Analysis",
    skills: [
      "Requirements Analysis",
      "Process Modeling",
      "Stakeholder Management",
      "Gap Analysis",
      "Solution Assessment",
    ],
  },
  {
    icon: FileText,
    title: "Documentation",
    skills: [
      "BRD/FRD Creation",
      "Technical Documentation",
      "User Stories",
      "Test Cases",
      "Requirement Analysis & Documentation",
    ],
  },
  {
    icon: ClipboardList,
    title: "Project Management",
    skills: ["Requirement Gathering", "Jira", "User Stories", "Sprint Tracking"],
  },
  {
    icon: Figma,
    title: "Design & Wireframing",
    skills: ["Figma", "Microsoft Visio", "Lucidchart", "Draw.io"],
  },
  {
    icon: MessageSquare,
    title: "Communication",
    skills: [
      "Technical Communication",
      "Negotiation",
    ],
  },
]

const projects = [
  {
    title: "LURNIX",
    year: "2025",
    description:
      "Smart education platform combining AI, AR, and voice assistance.",
    features: "3D/2D visualization, quizzes, interactive learning hub.",
    tools: ["React.js", "Node.js", "Express.js", "MongoDB", "Google Gemini API", "Unity", "GitHub"],
    link: "https://lurnix-swart.vercel.app/register"
  },
  {
    title: "Workout Planner",
    year: "2025",
    description: "Full-stack MERN application to plan and track workouts.",
    features: "Complete CRUD operations with user-friendly interface.",
    tools: ["React.js", "Node.js", "Express.js", "MongoDB", "GitHub"],
    link: ""
  },
  {
    title: "Railway Navigation System",
    year: "2025",
    description: "Real-time train tracking with route optimization.",
    features: "Live updates, schedule management, route alerts.",
    tools: ["Google Maps API", "Node.js", "Express.js", "JavaScript", "MongoDB", "HTML", "CSS", "Git", "GitHub"],
    link: ""
  },
  {
    title: "Queueaze",
    year: "2025",
    description: "Arduino-based queue management system with RFID.",
    features: "Real-time monitoring, SMS alerts, digital display.",
    tools: ["Arduino IDE", "RFID Module", "Embedded C", "Arduino Board", "Serial Communication"],
    link: ""
  },
  {
    title: "Shiva Textiles",
    year: "2026",
    description: "End-to-end website reconstruction with enhanced UI/UX.",
    features: "Product categorization, responsive design, BRD/FRD documentation.",
    tools: ["Figma", "Power BI", "Microsoft Excel", "Google Docs"],
    link: ""
  },
]

const experiences = [
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
    role: "Business Analyst Intern",
    company: "App Innovation Technologies",
    year: "2024",
    details: [
      "Worked on real-time projects utilizing various BA tools and methodologies",
      "Gathered requirements and created structured documentation",
      "Supported cross-functional teams in delivering impactful solutions",
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

export function SkillsSection() {
  return (
    <section id="skills" className="px-6 py-24 md:py-32">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          label="Skills & Expertise"
          title="Technical & Business Capabilities"
          description="A comprehensive blend of technical expertise and business analysis skills, enabling me to bridge the gap between strategy and execution."
        />

        {/* Technical Skills Grid */}
        <div className="mb-16">
          <h3 className="text-lg font-semibold text-foreground mb-6">Technical Skills</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {technicalSkills.map((category, i) => (
              <AnimateOnScroll key={category.title} animation="fade-up" delay={i * 80}>
              <div
                className="group rounded-xl border border-primary/20 bg-gradient-to-br from-primary/5 via-primary/8 to-accent/5 p-6 hover:border-primary/40 hover:shadow-lg hover:shadow-primary/15 hover:-translate-y-1 transition-all duration-300"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="flex items-center justify-center size-9 rounded-lg bg-gradient-to-br from-primary/20 to-primary/30 text-primary group-hover:from-primary group-hover:to-accent group-hover:text-primary-foreground group-hover:scale-110 transition-all duration-300">
                    <category.icon className="size-4" />
                  </div>
                  <h3 className="text-sm font-semibold text-foreground group-hover:text-primary transition-colors">
                    {category.title}
                  </h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <Badge
                      key={skill}
                      variant="secondary"
                      className="text-xs font-normal bg-primary/10 hover:bg-primary/25 hover:text-primary hover:scale-105 transition-all duration-200"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>

        {/* Business Skills Grid */}
        <div className="mb-20">
          <h3 className="text-lg font-semibold text-foreground mb-6">Business Analysis Skills</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {businessSkills.map((category, i) => (
              <AnimateOnScroll key={category.title} animation="fade-up" delay={i * 80}>
              <div
                className="group rounded-xl border border-accent/20 bg-gradient-to-br from-accent/5 via-accent/8 to-primary/5 p-6 hover:border-accent/40 hover:shadow-lg hover:shadow-accent/15 hover:-translate-y-1 transition-all duration-300"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="flex items-center justify-center size-9 rounded-lg bg-gradient-to-br from-accent/20 to-accent/30 text-accent group-hover:from-accent group-hover:to-primary group-hover:text-accent-foreground group-hover:scale-110 transition-all duration-300">
                    <category.icon className="size-4" />
                  </div>
                  <h3 className="text-sm font-semibold text-foreground group-hover:text-accent transition-colors">
                    {category.title}
                  </h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <Badge
                      key={skill}
                      variant="secondary"
                      className="text-xs font-normal bg-accent/10 hover:bg-accent/25 hover:text-accent hover:scale-105 transition-all duration-200"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export function ExperienceSection() {
  return (
    <section id="experience" className="px-6 py-24 md:py-32">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          label="Experience"
          title="Professional Journey"
          description="A diverse range of experiences spanning cloud computing, business analysis, and web development."
        />

        <div className="space-y-8">
          {experiences.map((experience, i) => (
            <AnimateOnScroll key={experience.role} animation="fade-up" delay={i * 120}>
            <div
              className="rounded-xl border border-primary/20 bg-gradient-to-br from-primary/5 via-card to-accent/5 p-8 hover:border-primary/40 hover:shadow-lg hover:shadow-primary/15 transition-all duration-300"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4">
                <div>
                  <div className="flex items-center gap-2">
                    <div className="flex items-center justify-center size-8 rounded-lg bg-primary/20 text-primary">
                      <Briefcase className="size-4" />
                    </div>
                    <h4 className="font-semibold text-foreground group-hover:text-primary transition-colors">
                      {experience.role}
                    </h4>
                  </div>
                  <p className="text-sm text-muted-foreground mt-1">
                    {experience.company}
                  </p>
                </div>
                <span className="text-xs text-muted-foreground font-mono bg-primary/10 px-2 py-1 rounded">
                  {experience.year}
                </span>
              </div>
              <ul className="space-y-2">
                {experience.details.map((detail, i) => (
                  <li
                    key={i}
                    className="text-sm text-muted-foreground leading-relaxed flex items-start gap-2"
                  >
                    <span className="size-1 rounded-full bg-primary shrink-0 mt-2" />
                    {detail}
                  </li>
                ))}
              </ul>
            </div>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  )
}

export function ProjectsSection() {
  return (
    <section id="projects" className="px-6 py-24 md:py-32">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          label="Projects"
          title="Featured Work"
          description="A selection of projects showcasing technical skills, problem-solving abilities, and innovative thinking."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, i) => (
            <AnimateOnScroll key={project.title} animation="fade-up" delay={i * 100}>
            <div
              className="group rounded-xl border border-primary/20 bg-gradient-to-br from-primary/5 via-card to-accent/5 p-6 hover:border-primary/40 hover:shadow-lg hover:shadow-primary/15 hover:-translate-y-1 transition-all duration-300"
            >
              <div className="flex items-start justify-between mb-3">
                <h4 className="font-semibold text-foreground group-hover:text-primary transition-colors">
                  {project.title}
                </h4>
                <span className="text-xs text-muted-foreground font-mono group-hover:text-primary transition-colors">
                  {project.year}
                </span>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed mb-3">
                {project.description}
              </p>
              <p className="text-xs text-muted-foreground/70 mb-4">
                {project.features}
              </p>
              {project.tools && (
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tools.map((tool) => (
                    <Badge
                      key={tool}
                      variant="secondary"
                      className="text-xs font-normal bg-primary/10 hover:bg-primary/25 hover:text-primary hover:scale-105 transition-all duration-200"
                    >
                      {tool}
                    </Badge>
                  ))}
                </div>
              )}

              {project.link && (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-primary to-primary/80 px-4 py-2 text-sm font-medium text-primary-foreground hover:from-primary/90 hover:to-primary/70 hover:shadow-md hover:shadow-primary/25 transition-all duration-300 transform hover:scale-105"
                >
                  <span>View Project</span>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2V8a2 2 0 00-2-2h-4m4 0v6m0-6V4a2 2 0 10-2 2H6a2 2 0 00-2 2v2m4 0v10a2 2 0 002 2h10a2 2 0 002-2V6a2 2 0 00-2-2h-4" />
                  </svg>
                </a>
              )}
            </div>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  )
}
