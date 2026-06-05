"use client"

import { useState } from "react"
import { Menu, X } from "lucide-react"

const links = [
  { label: "01 // Home", href: "#home" },
  { label: "02 // About", href: "#about" },
  { label: "03 // Work", href: "#work" },
  { label: "04 // Skills", href: "#skills" },
  { label: "05 // Education", href: "#education" },
  { label: "06 // Contact", href: "#contact" },
]

export function CyberNav() {
  const [open, setOpen] = useState(false)

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-border/60 bg-background/80 backdrop-blur-md">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a
          href="#home"
          className="font-display text-lg font-extrabold uppercase tracking-[0.2em] text-foreground"
        >
          MOHAN<span className="text-primary text-glow-primary">_</span>
        </a>

        <ul className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="font-mono text-xs uppercase tracking-widest text-muted-foreground transition-colors hover:text-primary hover:text-glow-primary"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="#contact"
          className="hidden cyber-clip bg-primary px-5 py-2 font-mono text-xs font-bold uppercase tracking-widest text-primary-foreground transition-shadow hover:shadow-glow-primary md:inline-block"
        >
          Hire Me
        </a>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="text-foreground md:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
        >
          {open ? <X className="size-6" /> : <Menu className="size-6" />}
        </button>
      </nav>

      {open && (
        <ul className="flex flex-col gap-1 border-t border-border/60 bg-background px-6 py-4 md:hidden">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={() => setOpen(false)}
                className="block py-2 font-mono text-sm uppercase tracking-widest text-muted-foreground transition-colors hover:text-primary"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      )}
    </header>
  )
}
