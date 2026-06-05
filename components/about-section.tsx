import { SectionHeading } from "./section-heading"

const interests = [
  "Artificial Intelligence",
  "Distributed Systems",
  "Agentic AI",
  "Machine Learning",
  "Software Engineering",
  "AI Infrastructure",
  "Federated Learning",
  "Graph Neural Networks",
]

export function AboutSection() {
  return (
    <section id="about" className="relative mx-auto max-w-6xl px-6 py-24 sm:py-32">
      <SectionHeading index="02" title="About" />

      <div className="mt-12 grid gap-12 lg:grid-cols-[1.4fr_1fr]">
        <div className="space-y-6 text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg">
          <p>
            I&apos;m a Computer Science undergraduate at SASTRA University with a strong interest in
            artificial intelligence, distributed systems, and software engineering.
          </p>
          <p>
            I enjoy building projects that combine machine learning, intelligent agents, scalable
            architectures, and real-world problem solving. My work spans federated learning, graph
            neural networks, large language models, retrieval-augmented generation, and AI
            infrastructure.
          </p>
          <p className="text-foreground">
            I&apos;m particularly interested in understanding how modern AI systems work under the
            hood and transforming research ideas into practical applications.
          </p>

          <ul className="flex flex-wrap gap-2 pt-2">
            {interests.map((item) => (
              <li
                key={item}
                className="border border-primary/40 px-3 py-1.5 font-mono text-[0.65rem] uppercase tracking-widest text-primary"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>

        <ul className="h-fit space-y-px overflow-hidden border border-border/60">
          {[
            { k: "Role", v: "B.Tech CSE Student" },
            { k: "Location", v: "Tamil Nadu, India" },
            { k: "University", v: "SASTRA Deemed Univ." },
            { k: "Status", v: "Open to Work" },
          ].map((row) => (
            <li
              key={row.k}
              className="flex items-center justify-between gap-4 bg-card px-5 py-4"
            >
              <span className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
                {row.k}
              </span>
              <span className="text-right text-sm font-medium text-foreground">{row.v}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
