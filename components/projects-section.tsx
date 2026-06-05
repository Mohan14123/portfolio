import { ArrowUpRight } from "lucide-react"
import { SectionHeading } from "./section-heading"

const projects = [
  {
    name: "StreetPrint",
    desc: "A route tracking and travel visualization application that records journeys and generates interactive map-based visualizations of traveled routes.",
    tags: ["Node.js", "TypeScript", "Express.js", "MongoDB", "Redis", "Docker"],
    href: "https://github.com/Mohan14123/streetprint",
    year: "Maps",
  },
  {
    name: "Sparse MoE PyTorch",
    desc: "Implementation of a Sparse Mixture of Experts architecture from scratch, exploring expert routing, sparse activation, token dispatching, and scalable neural network design.",
    tags: ["Python", "PyTorch"],
    href: "https://github.com/Mohan14123/sparse-moe-pytorch",
    year: "MoE",
  },
  {
    name: "MSGAL",
    desc: "A Multi-Scale Graph Attention Learning framework for learning hierarchical relationships and complex structures from graph-based data.",
    tags: ["PyTorch", "PyTorch Geometric", "GRU", "GAT"],
    href: "https://github.com/Mohan14123/MSGAL",
    year: "GNN",
  },
  {
    name: "FedXMSPRA-GA",
    desc: "A federated healthcare resource allocation framework combining Federated Learning, Genetic Algorithms, MQTT-based communication, and Byzantine fault tolerance to optimize scheduling and decision-making across distributed healthcare environments.",
    tags: ["Python", "SimPy", "Genetic Algorithms", "BFT Consensus"],
    href: "https://github.com/Mohan14123/FedXMSPRA-GA",
    year: "FL",
  },
  {
    name: "Pharma Triage Environment",
    desc: "An agentic AI environment for pharmaceutical and healthcare triage workflows, combining reasoning, retrieval, and multi-step decision-making processes.",
    tags: ["Gymnasium", "FastAPI", "Docker"],
    href: "https://github.com/Mohan14123/pharma-triage-env",
    year: "Agent",
  },
]

export function ProjectsSection() {
  return (
    <section id="work" className="relative mx-auto max-w-6xl px-6 py-24 sm:py-32">
      <SectionHeading index="03" title="Selected Work" />

      <div className="mt-12 grid gap-6 sm:grid-cols-2">
        {projects.map((p) => (
          <a
            key={p.name}
            href={p.href}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative flex h-full flex-col cyber-clip border border-border/60 bg-card p-7 transition-colors hover:border-primary/60"
          >
            <div className="pointer-events-none absolute inset-0 cyber-clip opacity-0 transition-opacity group-hover:opacity-100 group-hover:shadow-glow-primary" />
            <div className="mb-6 flex items-start justify-between gap-4">
              <span className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
                {p.year}
              </span>
              <ArrowUpRight className="size-5 text-muted-foreground transition-colors group-hover:text-primary" />
            </div>

            <div className="flex flex-col flex-grow">
              <h3 className="font-display text-2xl font-bold uppercase tracking-tight text-foreground transition-colors group-hover:text-primary group-hover:text-glow-primary">
                {p.name}
              </h3>
              <p className="mt-3 text-pretty text-sm leading-relaxed text-muted-foreground">
                {p.desc}
              </p>
              <ul className="mt-auto pt-6 flex flex-wrap gap-2">
                {p.tags.map((t) => (
                  <li
                    key={t}
                    className="border border-primary/40 px-2.5 py-1 font-mono text-[0.65rem] uppercase tracking-widest text-primary"
                  >
                    {t}
                  </li>
                ))}
              </ul>
            </div>
          </a>
        ))}
      </div>

      <div className="mt-12 flex justify-center">
        <a
          href="https://github.com/Mohan14123?tab=repositories"
          target="_blank"
          rel="noopener noreferrer"
          className="group inline-flex items-center justify-center gap-2 border border-primary/60 px-7 py-3 font-mono text-sm font-bold uppercase tracking-widest text-primary transition-colors hover:bg-primary/10"
        >
          View More Projects
          <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </a>
      </div>
    </section>
  )
}
