export function SectionHeading({
  index,
  title,
}: {
  index: string
  title: string
}) {
  return (
    <div className="flex items-end gap-4 border-b border-border/60 pb-5">
      <span className="font-mono text-sm text-primary text-glow-primary">{`// ${index}`}</span>
      <h2 className="font-display text-3xl font-black uppercase tracking-tight text-foreground sm:text-4xl">
        {title}
      </h2>
    </div>
  )
}
