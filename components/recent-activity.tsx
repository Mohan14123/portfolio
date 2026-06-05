import { Terminal } from "lucide-react"
import { SectionHeading } from "./section-heading"

type GitHubEvent = {
  id: string
  type: string
  created_at: string
  repo: { name: string }
  payload: any
}

async function getRecentEvents(): Promise<GitHubEvent[]> {
  try {
    const res = await fetch("https://api.github.com/users/Mohan14123/events/public", {
      next: { revalidate: 3600 },
    })
    
    if (!res.ok) {
      return []
    }

    const data = await res.json()
    // Return only the most recent 3 events
    return Array.isArray(data) ? data.slice(0, 3) : []
  } catch (e) {
    return []
  }
}

export async function RecentActivity() {
  const events = await getRecentEvents()

  return (
    <section id="activity" className="relative mx-auto max-w-6xl px-6 py-24 sm:py-32">
      <SectionHeading index="LOGS" title="Recent Transmissions" />

      <div className="mt-12 overflow-hidden border border-border/60 bg-[#0a0a0a] shadow-glow-primary/10">
        <div className="flex items-center gap-2 border-b border-border/60 bg-muted/20 px-4 py-2">
          <Terminal className="size-4 text-primary" />
          <span className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
            terminal@sys_log: ~
          </span>
        </div>
        
        <div className="p-6 font-mono text-sm leading-relaxed text-muted-foreground sm:text-base overflow-hidden">
          {events.length === 0 ? (
            <p className="animate-pulse text-primary/60">{">>> Waiting for signal..."}</p>
          ) : (
            <ul className="space-y-4">
              {events.map((event) => {
                let action = event.type
                let details = ""
                
                if (event.type === "PushEvent") {
                  action = "PUSH"
                  details = event.payload.commits?.[0]?.message || "Pushed to repository"
                } else if (event.type === "CreateEvent") {
                  action = "INIT"
                  details = "Created a new repository or branch"
                } else if (event.type === "WatchEvent") {
                  action = "STAR"
                  details = "Starred repository"
                } else if (event.type === "ForkEvent") {
                  action = "FORK"
                  details = "Forked repository"
                } else if (event.type === "IssuesEvent") {
                  action = "ISSUE"
                  details = `${event.payload.action} an issue`
                } else if (event.type === "PullRequestEvent") {
                  action = "PR"
                  details = `${event.payload.action} pull request`
                } else if (event.type === "DeleteEvent") {
                  action = "DEL"
                  details = `Deleted ${event.payload.ref_type}`
                }

                // Format timestamp
                const date = new Date(event.created_at)
                const formattedDate = `${date.toISOString().split('T')[0]} ${date.toTimeString().split(' ')[0]}`

                return (
                  <li key={event.id} className="group border-l-2 border-primary/20 pl-4 transition-colors hover:border-primary">
                    <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:gap-4">
                      <span className="shrink-0 text-xs text-primary/70">[{formattedDate}]</span>
                      <span className="font-bold text-primary text-glow-primary">[{action}]</span>
                      <span className="break-all font-medium text-foreground">{event.repo.name}</span>
                    </div>
                    <p className="mt-1 line-clamp-1 text-xs sm:text-sm">{details}</p>
                  </li>
                )
              })}
              <li className="animate-pulse text-primary/60 mt-4">{">>> _"}</li>
            </ul>
          )}
        </div>
      </div>
    </section>
  )
}
