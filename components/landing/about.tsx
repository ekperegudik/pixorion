import { Layers, Zap, TrendingDown } from "lucide-react"

export function About() {
  const points = [
    {
      icon: Layers,
      title: "Unified workspace",
      description: "All essential tools for marketplace content in one system.",
    },
    {
      icon: TrendingDown,
      title: "Lower costs",
      description: "Reduce production expenses by eliminating scattered tools.",
    },
    {
      icon: Zap,
      title: "Faster launches",
      description: "Speed up product launches with a structured workflow.",
    },
  ]

  return (
    <section id="about" className="px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <div className="mx-auto mb-16 max-w-2xl text-center">
          <h2 className="mb-4 font-serif text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            Why Pixorion.ai
          </h2>
          <p className="text-base leading-relaxed text-muted-foreground">
            We bring together essential tools for working with marketplace product cards into one system. This reduces production costs and speeds up product launches.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {points.map((point) => (
            <div
              key={point.title}
              className="rounded-xl border border-border bg-card p-6 transition-colors hover:border-primary/30"
            >
              <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                <point.icon className="h-5 w-5 text-primary" />
              </div>
              <h3 className="mb-2 text-base font-semibold text-foreground">{point.title}</h3>
              <p className="text-sm leading-relaxed text-muted-foreground">{point.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
