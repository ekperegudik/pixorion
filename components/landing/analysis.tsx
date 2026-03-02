import { Eye, ListChecks, FileText, Lightbulb } from "lucide-react"

export function Analysis() {
  const bullets = [
    { icon: Eye, text: "Image evaluation" },
    { icon: ListChecks, text: "Structure check" },
    { icon: FileText, text: "Text analysis" },
    { icon: Lightbulb, text: "Improvement suggestions" },
  ]

  return (
    <section id="analysis" className="px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <div className="grid items-center gap-12 md:grid-cols-2">
          <div className="order-2 flex items-center justify-center md:order-1">
            <div className="w-full rounded-xl border border-border bg-card p-6">
              <div className="mb-4 flex items-center gap-2">
                <div className="h-2.5 w-2.5 rounded-full bg-destructive/60" />
                <div className="h-2.5 w-2.5 rounded-full bg-[#f59e0b]/60" />
                <div className="h-2.5 w-2.5 rounded-full bg-[#22c55e]/60" />
                <span className="ml-2 text-xs text-muted-foreground">card-analysis.ai</span>
              </div>
              <div className="flex flex-col gap-3">
                <div className="flex items-center justify-between rounded-lg bg-muted p-3">
                  <span className="text-xs font-medium text-foreground">Overall Score</span>
                  <span className="text-sm font-bold text-primary">87/100</span>
                </div>
                <div className="flex flex-col gap-2">
                  {[
                    { label: "Images", score: 92 },
                    { label: "Structure", score: 85 },
                    { label: "Text", score: 78 },
                    { label: "SEO", score: 91 },
                  ].map((metric) => (
                    <div key={metric.label} className="flex items-center gap-3 rounded-lg bg-muted px-3 py-2">
                      <span className="w-16 text-xs text-muted-foreground">{metric.label}</span>
                      <div className="h-1.5 flex-1 overflow-hidden rounded-full bg-background">
                        <div
                          className="h-full rounded-full bg-primary"
                          style={{ width: `${metric.score}%` }}
                        />
                      </div>
                      <span className="w-8 text-right text-xs font-medium text-foreground">{metric.score}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className="order-1 md:order-2">
            <h2 className="mb-4 font-serif text-3xl font-bold tracking-tight text-foreground md:text-4xl">
              Detailed card analysis
            </h2>
            <p className="mb-8 text-base leading-relaxed text-muted-foreground">
              The system evaluates visuals, structure and texts according to marketplace requirements and provides clear recommendations.
            </p>
            <ul className="flex flex-col gap-4">
              {bullets.map((bullet) => (
                <li key={bullet.text} className="flex items-center gap-3">
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                    <bullet.icon className="h-4 w-4 text-primary" />
                  </div>
                  <span className="text-sm font-medium text-foreground">{bullet.text}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
