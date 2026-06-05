import { SectionHeading } from "./section-heading"

const groups = [
  {
    title: "Languages",
    items: ["Python", "TypeScript", "JavaScript", "C", "C++", "Java", "SQL"],
  },
  {
    title: "AI / ML",
    items: ["PyTorch", "TensorFlow", "PyTorch Geometric", "Gymnasium", "NumPy", "Scikit-learn"],
  },
  {
    title: "Backend & Web",
    items: ["FastAPI", "Node.js", "Express.js", "Next.js", "REST APIs"],
  },
  {
    title: "Databases",
    items: ["PostgreSQL", "MongoDB", "MySQL", "Redis", "FAISS"],
  },
  {
    title: "DevOps & Cloud",
    items: ["Docker", "GitHub Actions CI/CD", "Linux", "Bash"],
  },
  {
    title: "Tools",
    items: ["Git", "Prisma ORM", "Streamlit", "Grafana", "Cursor", "Claude Code"],
  },
]

export function SkillsSection() {
  return (
    <section id="skills" className="relative mx-auto max-w-6xl px-6 py-24 sm:py-32">
      <SectionHeading index="04" title="Skills & Stack" />

      <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {groups.map((group) => (
          <div key={group.title} className="border border-border/60 bg-card p-7">
            <h3 className="font-mono text-xs uppercase tracking-[0.3em] text-primary text-glow-primary">
              {group.title}
            </h3>
            <ul className="mt-6 space-y-3">
              {group.items.map((item) => (
                <li
                  key={item}
                  className="flex items-center gap-3 text-sm text-foreground"
                >
                  <span className="size-1.5 shrink-0 bg-primary" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  )
}
