import { ArrowDownRight } from "lucide-react"

export function HeroSection() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden cyber-grid pt-20"
    >
      {/* glow accents */}
      <div className="pointer-events-none absolute -left-32 top-1/4 size-96 rounded-full bg-primary/20 blur-[120px]" />
      <div className="pointer-events-none absolute -right-32 bottom-1/4 size-96 rounded-full bg-accent/15 blur-[120px]" />
      {/* scanline */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden opacity-40">
        <div className="animate-scan h-24 w-full bg-gradient-to-b from-transparent via-primary/15 to-transparent" />
      </div>

      <div className="relative mx-auto w-full max-w-6xl px-6">
        <p className="mb-6 font-mono text-xs uppercase tracking-[0.4em] text-primary text-glow-primary animate-flicker">
          {"// system online — exploring ai, systems & software"}
        </p>

        <h1 className="font-display text-5xl font-black uppercase leading-[0.95] tracking-tight text-balance sm:text-7xl lg:text-8xl">
          Mohan
          <br />
          <span className="text-primary text-glow-primary">Kumar S</span>
        </h1>

        <p className="mt-8 max-w-xl text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg">
          {
            "Computer Science undergraduate at SASTRA University building at the intersection of artificial intelligence, distributed systems, and software engineering — from federated learning to LLMs and AI infrastructure."
          }
        </p>

        <div className="mt-10 flex flex-col gap-4 sm:flex-row">
          <a
            href="#work"
            className="group inline-flex items-center justify-center gap-2 cyber-clip bg-primary px-7 py-3 font-mono text-sm font-bold uppercase tracking-widest text-primary-foreground transition-shadow hover:shadow-glow-primary"
          >
            View Work
            <ArrowDownRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:translate-y-0.5" />
          </a>
          <a
            href="#contact"
            className="inline-flex items-center justify-center gap-2 border border-primary/60 px-7 py-3 font-mono text-sm font-bold uppercase tracking-widest text-primary transition-colors hover:bg-primary/10"
          >
            Get In Touch
          </a>
        </div>

        <dl className="mt-16 grid max-w-lg grid-cols-3 gap-6 border-t border-border/60 pt-8">
          {[
            { k: "AI", v: "Research & Systems" },
            { k: "5+", v: "Projects" },
            { k: "Open", v: "To Work" },
          ].map((stat) => (
            <div key={stat.v}>
              <dt className="font-display text-3xl font-bold text-foreground">{stat.k}</dt>
              <dd className="mt-1 font-mono text-xs uppercase tracking-widest text-muted-foreground">
                {stat.v}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  )
}
