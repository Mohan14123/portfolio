import { GraduationCap } from "lucide-react"
import { SectionHeading } from "./section-heading"

const exploring = [
  "Multi-Agent AI Systems",
  "LLM Architecture & Training",
  "AI Infrastructure & Deployment",
  "Distributed Computing",
  "Simulation Frameworks",
  "Inference Optimization",
  "Open-Source AI Development",
]

export function EducationSection() {
  return (
    <section id="education" className="relative mx-auto max-w-6xl px-6 py-24 sm:py-32">
      <SectionHeading index="05" title="Education & Exploring" />

      <div className="mt-12 grid gap-6 lg:grid-cols-[1fr_1.2fr]">
        <div className="cyber-clip border border-border/60 bg-card p-7">
          <div className="flex items-center gap-3 text-primary text-glow-primary">
            <GraduationCap className="size-5" />
            <span className="font-mono text-xs uppercase tracking-[0.3em]">Education</span>
          </div>
          <h3 className="mt-6 font-display text-2xl font-bold uppercase tracking-tight text-foreground">
            SASTRA Deemed University
          </h3>
          <p className="mt-3 text-pretty leading-relaxed text-muted-foreground">
            Bachelor of Technology in Computer Science Engineering
          </p>
        </div>

        <div className="border border-border/60 bg-card p-7">
          <p className="font-mono text-xs uppercase tracking-[0.3em] text-primary text-glow-primary">
            {"// currently exploring"}
          </p>
          <ul className="mt-6 grid gap-3 sm:grid-cols-2">
            {exploring.map((item) => (
              <li key={item} className="flex items-center gap-3 text-sm text-foreground">
                <span className="size-1.5 shrink-0 bg-primary" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
