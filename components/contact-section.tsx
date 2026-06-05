import { Mail } from "lucide-react"
import { SectionHeading } from "./section-heading"

const GithubIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="currentColor"
  >
    <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
  </svg>
)

const LinkedinIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
    <rect x="2" y="9" width="4" height="12"></rect>
    <circle cx="4" cy="4" r="2"></circle>
  </svg>
)

const socials = [
  { label: "GitHub", icon: GithubIcon, href: "https://github.com/Mohan14123" },
  { label: "LinkedIn", icon: LinkedinIcon, href: "https://www.linkedin.com/in/mohan141/" },
  { label: "Email", icon: Mail, href: "mailto:mohansanjayrohini@gmail.com" },
]

export function ContactSection() {
  return (
    <section id="contact" className="relative mx-auto max-w-6xl px-6 py-24 sm:py-32">
      <SectionHeading index="06" title="Contact" />

      <div className="mt-12 grid gap-12 lg:grid-cols-2">
        <div>
          <p className="font-display text-3xl font-black uppercase leading-tight text-balance text-foreground sm:text-5xl">
            Let&apos;s build
            <br />
            <span className="text-primary text-glow-primary">something.</span>
          </p>
          <p className="mt-6 max-w-md text-pretty leading-relaxed text-muted-foreground">
            Building practical systems at the intersection of AI, software engineering, and
            distributed computing. Open to roles, research, and collaboration — reach out anytime.
          </p>

          <a
            href="mailto:mohansanjayrohini@gmail.com"
            className="mt-8 inline-block font-mono text-lg text-primary underline-offset-4 hover:underline"
          >
            mohansanjayrohini@gmail.com
          </a>

          <div className="mt-8 flex gap-3">
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                aria-label={s.label}
                className="flex size-11 items-center justify-center border border-border/60 text-muted-foreground transition-colors hover:border-primary/60 hover:text-primary"
              >
                <s.icon className="size-5" />
              </a>
            ))}
          </div>
        </div>

        <form className="space-y-5 cyber-clip border border-border/60 bg-card p-7">
          <div className="grid gap-2">
            <label htmlFor="name" className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
              Name
            </label>
            <input
              id="name"
              type="text"
              placeholder="Your name"
              className="border border-border bg-background px-4 py-3 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground/60 focus:border-primary"
            />
          </div>
          <div className="grid gap-2">
            <label htmlFor="email" className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
              Email
            </label>
            <input
              id="email"
              type="email"
              placeholder="you@example.com"
              className="border border-border bg-background px-4 py-3 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground/60 focus:border-primary"
            />
          </div>
          <div className="grid gap-2">
            <label htmlFor="message" className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
              Message
            </label>
            <textarea
              id="message"
              rows={4}
              placeholder="Tell me about your project..."
              className="resize-none border border-border bg-background px-4 py-3 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground/60 focus:border-primary"
            />
          </div>
          <button
            type="submit"
            className="w-full cyber-clip bg-primary px-6 py-3 font-mono text-sm font-bold uppercase tracking-widest text-primary-foreground transition-shadow hover:shadow-glow-primary"
          >
            Transmit Message
          </button>
        </form>
      </div>

      <footer className="mt-24 flex flex-col items-center justify-between gap-4 border-t border-border/60 pt-8 sm:flex-row">
        <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
          MOHAN KUMAR S © 2026
        </p>
        <div className="flex flex-col items-center gap-2 sm:items-end">
          <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
            {"// built at the intersection of ai & systems"}
          </p>
          <p className="animate-pulse font-mono text-[10px] uppercase tracking-widest text-muted-foreground/40 transition-colors hover:text-primary">
            Press <kbd className="rounded border border-border/40 bg-muted/10 px-1.5 py-0.5">Ctrl+J</kbd> to access terminal
          </p>
        </div>
      </footer>
    </section>
  )
}
