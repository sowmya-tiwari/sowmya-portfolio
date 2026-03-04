import { SectionHeading } from "./section-heading"
import { AnimateOnScroll } from "./animate-on-scroll"
import { Trophy, Code2 } from "lucide-react"

const hackathons = [
  {
    title: "1st Place \u2014 24hr Hackathon",
    org: "Google Developers Group, PSNACET",
    prize: "\u20B910,000",
    year: "2025",
  },
  {
    title: "2nd Place \u2014 24hr Hackathon",
    org: "SRM IST, Kattankulathur",
    prize: "\u20B95,000",
    year: "2025",
  },
]

const codingProfiles = [
  { platform: "LeetCode", count: "300+", label: "problems" },
  { platform: "HackerRank", count: "350+", label: "problems" },
  { platform: "CodeChef", count: "300+", label: "problems" },
  { platform: "SkillRack", count: "600+", label: "problems" },
]

export function AchievementsSection() {
  return (
    <section id="achievements" className="px-6 py-24 md:py-32">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          label="03 / Achievements"
          title="Recognition & Coding Profiles"
        />

        {/* Hackathon Wins */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          {hackathons.map((hack, i) => (
            <AnimateOnScroll key={hack.title} animation="fade-up" delay={i * 120}>
            <div
              className="relative rounded-xl border border-green-500/30 bg-gradient-to-br from-green-500/5 via-card to-emerald-500/5 p-6 overflow-hidden hover:border-green-500/50 hover:shadow-lg hover:shadow-green-500/15 transition-all duration-300"
            >
              <div className="absolute top-4 right-4">
                <div className="flex items-center justify-center size-8 rounded-lg bg-gradient-to-br from-green-500/20 to-emerald-500/20 text-green-500">
                  <Trophy className="size-4" />
                </div>
              </div>
              <div className="relative">
                <span className="text-xs text-muted-foreground font-mono bg-green-500/10 px-2 py-1 rounded inline-block">
                  {hack.year}
                </span>
                <h3 className="font-semibold text-foreground mt-2 group-hover:text-green-500 transition-colors">
                  {hack.title}
                </h3>
                <p className="text-sm text-muted-foreground mt-1">
                  {hack.org}
                </p>
                <p className="text-lg font-semibold text-green-500 mt-3">
                  {hack.prize}
                </p>
              </div>
            </div>
            </AnimateOnScroll>
          ))}
        </div>

        {/* Coding Profiles */}
        <h3 className="text-xs tracking-widest uppercase text-green-500 font-medium mb-8">
          Coding Profiles
        </h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {codingProfiles.map((profile, i) => (
            <div
              key={profile.platform}
              className="rounded-xl border border-green-500/20 bg-green-500/5 p-6 text-center"
            >
              <div className="flex items-center justify-center size-9 rounded-lg bg-green-500/10 text-green-500 mx-auto mb-3">
                <Code2 className="size-4" />
              </div>
              <p className="text-2xl font-bold text-foreground">
                {profile.count}
              </p>
              <p className="text-xs text-muted-foreground mt-1">
                {profile.label}
              </p>
              <p className="text-sm font-medium text-foreground mt-2">
                {profile.platform}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
