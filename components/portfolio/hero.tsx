"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import { ArrowDown, Code2, BarChart3, Database, Users } from "lucide-react"

export function Hero() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center px-6 pt-20 overflow-hidden"
    >
      {/* Subtle decorative elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 size-96 rounded-full bg-primary/8 blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 size-72 rounded-full bg-primary/5 blur-3xl animate-pulse" />
        <div className="absolute top-1/2 right-1/3 size-48 rounded-full bg-accent/6 blur-2xl animate-pulse" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto w-full">
        {/* Two column layout: text left, photo right */}
        <div className="flex flex-col md:flex-row items-center gap-10 md:gap-16">
          {/* Text content */}
          <div className="flex-1 text-center md:text-left order-2 md:order-1">

            {/* Name */}
            <h1
              className={`font-serif text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-foreground mb-6 text-balance transition-all duration-700 delay-100 bg-gradient-to-r from-foreground to-primary/60 bg-clip-text text-transparent ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
            >
              Sowmya Tiwari
            </h1>

            {/* Tagline */}
            <p
              className={`text-lg md:text-xl text-muted-foreground leading-relaxed mb-8 text-pretty transition-all duration-700 delay-200 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
            >
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent font-medium">
                Crafting intelligent solutions
              </span>
              {" at the intersection of business and technology."}
            </p>

            {/* Brand statement */}
            <div
              className={`max-w-xl mb-10 transition-all duration-700 delay-300 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
            >
              <div className="border-l-2 border-primary/40 pl-6 text-left space-y-3">
                <p className="text-sm text-muted-foreground leading-relaxed">
                  I operate at the intersection of business strategy and technology execution. As a Computer Science and Business Systems graduate, I bring a balanced perspective that integrates technical depth with business acumen.
                </p>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  I don't just write code, I decode business problems. I translate requirements into scalable, user-centric solutions that drive measurable impact and sustainable growth.
                </p>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  With a strong interest in Full-Stack Development, Cloud Technologies, and Business Analysis, I design systems that are not only technically robust but strategically aligned.
                </p>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  I bridge the gap between vision and execution, building solutions that are meaningful, future-ready, and built to scale.
                </p>
              </div>
            </div>

            {/* CTA Buttons */}
            <div
              className={`flex flex-col sm:flex-row items-center md:items-start gap-4 transition-all duration-700 delay-[400ms] ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
            >
              <a
                href="#skills"
                className="group inline-flex items-center gap-3 rounded-lg bg-gradient-to-r from-primary to-primary/80 px-6 py-3 text-sm font-medium text-primary-foreground hover:from-primary/90 hover:to-primary/70 hover:shadow-lg hover:shadow-primary/25 transition-all duration-300 transform hover:scale-105"
              >
                <Code2 className="size-4 group-hover:rotate-12 transition-transform duration-300" />
                Explore Skills
              </a>
              <a
                href="#experience"
                className="group inline-flex items-center gap-3 rounded-lg border border-border bg-secondary/50 px-6 py-3 text-sm font-medium text-foreground hover:bg-secondary/80 hover:border-primary/30 hover:shadow-md transition-all duration-300 transform hover:scale-105"
              >
                <BarChart3 className="size-4 group-hover:rotate-12 transition-transform duration-300" />
                View Experience
              </a>
            </div>
          </div>

          {/* Photo */}
          <div
            className={`order-1 md:order-2 shrink-0 -mt-50 transition-all duration-700 delay-150 ${
              isVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"
            }`}
          >
            <div className="relative">
              <div className="absolute -inset-4 rounded-full bg-gradient-to-r from-primary/20 via-primary/10 to-accent/20 blur-2xl animate-pulse" />
              <div className="relative size-56 md:size-72 lg:size-80 rounded-full overflow-hidden border-4 border-card shadow-2xl ring-2 ring-primary/20 hover:ring-primary/40 transition-all duration-500 group">
                <Image
                  src="/images/sowmya.png"
                  alt="Sowmya Tiwari"
                  fill
                  className="object-cover object-[center_100%] scale-140 group-hover:scale-145 transition-transform duration-500"
                  priority
                />
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div
          className={`mt-16 text-center transition-all duration-700 delay-500 ${
            isVisible ? "opacity-100" : "opacity-0"
          }`}
        >
          <a
            href="#skills"
            className="inline-flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
            aria-label="Scroll down"
          >
            <span className="text-xs tracking-widest uppercase">Scroll</span>
            <ArrowDown className="size-4 animate-bounce" />
          </a>
        </div>
      </div>
    </section>
  )
}
