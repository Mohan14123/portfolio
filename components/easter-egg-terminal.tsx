"use client"

import { useEffect, useState, useRef } from "react"
import { Terminal, X } from "lucide-react"

type CommandEntry = {
  command: string
  output: React.ReactNode
}

export function EasterEggTerminal() {
  const [isOpen, setIsOpen] = useState(false)
  const [history, setHistory] = useState<CommandEntry[]>([])
  const [input, setInput] = useState("")
  const bottomRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Listen for Ctrl+J (or Cmd+J on Mac)
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === "j") {
        e.preventDefault() // Prevent browser default (e.g. downloads page)
        setIsOpen((prev) => !prev)
      }
    }

    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [])

  useEffect(() => {
    if (bottomRef.current) {
      bottomRef.current.scrollIntoView({ behavior: "smooth" })
    }
  }, [history, isOpen])

  const handleCommand = (cmd: string) => {
    const trimmed = cmd.trim().toLowerCase()
    let output: React.ReactNode = ""

    switch (trimmed) {
      case "help":
        output = (
          <div className="flex flex-col space-y-1">
            <span>Available commands:</span>
            <span>- <span className="text-primary">whoami</span>: Display user profile</span>
            <span>- <span className="text-primary">ls projects</span>: List project repositories</span>
            <span>- <span className="text-primary">fetch resume</span>: Download secure resume payload</span>
            <span>- <span className="text-primary">clear</span>: Clear terminal screen</span>
          </div>
        )
        break
      case "whoami":
        output = "Mohan Kumar S - Computer Science undergraduate building at the intersection of AI, systems, and software engineering."
        break
      case "ls projects":
        output = (
          <div className="flex flex-col space-y-1">
            <span>[DIR] StreetPrint          (Maps / Tracking)</span>
            <span>[DIR] Sparse-MoE-PyTorch   (Transformers)</span>
            <span>[DIR] MSGAL                (GNNs)</span>
            <span>[DIR] FedXMSPRA-GA         (Federated Learning)</span>
            <span>[DIR] Pharma-Triage-Env    (Agentic AI)</span>
          </div>
        )
        break
      case "fetch resume":
        output = "Initiating secure download protocol... Transferring resume.pdf..."
        setTimeout(() => {
          window.open('/resume.pdf', '_blank')
        }, 1000)
        break
      case "clear":
        setHistory([])
        setInput("")
        return
      case "":
        output = ""
        break
      default:
        output = `Command not found: ${trimmed}. Type 'help' for a list of commands.`
    }

    setHistory((prev) => [...prev, { command: cmd, output }])
    setInput("")
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-background/80 p-6 backdrop-blur-sm">
      <div className="flex h-[500px] w-full max-w-2xl flex-col overflow-hidden border border-primary/60 bg-[#0a0a0a] shadow-glow-primary/20 cyber-clip">
        {/* Terminal Header */}
        <div className="flex items-center justify-between border-b border-primary/30 bg-primary/10 px-4 py-2">
          <div className="flex items-center gap-2 text-primary">
            <Terminal className="size-4" />
            <span className="font-mono text-xs uppercase tracking-widest">sys_root@nova: ~</span>
          </div>
          <button
            onClick={() => setIsOpen(false)}
            className="text-muted-foreground hover:text-primary transition-colors"
          >
            <X className="size-4" />
          </button>
        </div>

        {/* Terminal Body */}
        <div className="flex-1 overflow-y-auto p-4 font-mono text-sm text-primary/80">
          <div className="mb-4 text-primary text-glow-primary">
            NOVA OS v1.0.0. Type &apos;help&apos; to view available commands.
          </div>

          <div className="flex flex-col space-y-4">
            {history.map((entry, idx) => (
              <div key={idx} className="flex flex-col space-y-1">
                <div className="flex items-center gap-2">
                  <span className="text-muted-foreground">$</span>
                  <span>{entry.command}</span>
                </div>
                {entry.output && <div className="ml-4 text-muted-foreground">{entry.output}</div>}
              </div>
            ))}
          </div>

          {/* Input Line */}
          <div className="mt-4 flex items-center gap-2">
            <span className="text-muted-foreground">$</span>
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  handleCommand(input)
                }
              }}
              autoFocus
              className="flex-1 bg-transparent text-primary outline-none"
              spellCheck={false}
              autoComplete="off"
            />
          </div>
          <div ref={bottomRef} />
        </div>
      </div>
    </div>
  )
}
