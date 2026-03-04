import { SectionHeading } from "./section-heading"
import { Mail, Linkedin, Github, MapPin } from "lucide-react"

const contactLinks = [
  {
    icon: Mail,
    label: "Email",
    value: "sowmyatiwari11@gmail.com",
    href: "mailto:sowmyatiwari11@gmail.com",
    logo: null,
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "linkedin.com/in/sowmya-tiwari-498a52291",
    href: "https://www.linkedin.com/in/sowmya-tiwari-498a52291/",
    logo: "🔗",
  },
  {
    icon: Github,
    label: "GitHub",
    value: "github.com/sowmya-tiwari",
    href: "https://github.com/sowmya-tiwari",
    logo: "💻",
  },
]

export function ContactSection() {
  return (
    <section id="contact" className="px-6 py-24 md:py-32">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          label="05 / Contact"
          title="Let's Connect"
          description="Open to collaborations, freelance opportunities, or a conversation about technology and business."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact links */}
          <div className="space-y-4">
            {contactLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 rounded-xl border border-primary/20 bg-primary/5 p-5"
              >
                <div className="flex items-center justify-center size-10 rounded-lg bg-primary/10 text-primary">
                  {link.logo ? (
                    <span className="text-lg">{link.logo}</span>
                  ) : (
                    <link.icon className="size-4" />
                  )}
                </div>
                <div>
                  <p className="text-xs text-muted-foreground">{link.label}</p>
                  <p className="text-sm font-medium text-foreground">
                    {link.value}
                  </p>
                </div>
              </a>
            ))}

            {/* Location */}
            <div className="flex items-center gap-4 rounded-xl border border-accent/20 bg-accent/5 p-5">
              <div className="flex items-center justify-center size-10 rounded-lg bg-accent/10 text-accent">
                <MapPin className="size-4" />
              </div>
              <div>
                <p className="text-xs text-muted-foreground">Location</p>
                <p className="text-sm font-medium text-foreground">
                  Tamil Nadu, India
                </p>
              </div>
            </div>
          </div>

          {/* Right side quote */}
          <div className="flex items-center">
            <div className="border-l-2 border-primary/30 pl-8">
              <p className="font-serif text-2xl md:text-3xl text-foreground/90 leading-relaxed text-balance">
                {"Strategic. Capable. Leadership-ready."}
              </p>
              <p className="text-muted-foreground mt-4 text-sm">
                {"\u2014 Building systems that bridge strategy and execution."}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
