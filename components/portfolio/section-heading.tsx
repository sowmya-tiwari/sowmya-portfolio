import { AnimateOnScroll } from "./animate-on-scroll"

interface SectionHeadingProps {
  label: string
  title: string
  description?: string
}

export function SectionHeading({ label, title, description }: SectionHeadingProps) {
  return (
    <div className="mb-12 md:mb-16">
      <AnimateOnScroll animation="fade-up">
        <span className="text-xs tracking-widest uppercase text-primary font-medium">{label}</span>
      </AnimateOnScroll>
      <AnimateOnScroll animation="fade-up" delay={100}>
        <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mt-2 text-balance">{title}</h2>
      </AnimateOnScroll>
      {description && (
        <AnimateOnScroll animation="fade-up" delay={200}>
          <p className="text-muted-foreground mt-4 max-w-2xl leading-relaxed">{description}</p>
        </AnimateOnScroll>
      )}
    </div>
  )
}
