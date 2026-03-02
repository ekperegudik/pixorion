import { Image, LayoutGrid, Sparkles, Scaling } from "lucide-react"

export function Features() {
  const bullets = [
    { icon: Image, text: "Photorealistic packshots" },
    { icon: Sparkles, text: "Lifestyle scenes" },
    { icon: LayoutGrid, text: "Marketplace-ready infographics" },
    { icon: Scaling, text: "Format adaptation" },
  ]

  return (
    <section id="features" className="px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <div className="grid items-center gap-12 md:grid-cols-2">
          <div>
            <h2 className="mb-4 font-serif text-3xl font-bold tracking-tight text-foreground md:text-4xl">
              Image generation
            </h2>
            <p className="mb-8 text-base leading-relaxed text-muted-foreground">
              Generate packshots, lifestyle scenes and infographics while keeping brand consistency and marketplace compliance.
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
          <div className="flex items-center justify-center">
            <div className="w-full rounded-xl border border-border bg-card p-6">
              <div className="mb-4 flex items-center gap-2">
                <div className="h-2.5 w-2.5 rounded-full bg-destructive/60" />
                <div className="h-2.5 w-2.5 rounded-full bg-[#f59e0b]/60" />
                <div className="h-2.5 w-2.5 rounded-full bg-[#22c55e]/60" />
                <span className="ml-2 text-xs text-muted-foreground">image-generator.ai</span>
              </div>
              <div className="flex flex-col gap-3">
                <div className="flex items-center gap-3 rounded-lg bg-muted p-3">
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-md bg-primary/20">
                    <Image className="h-4 w-4 text-primary" />
                  </div>
                  <div className="flex flex-col gap-1">
                    <div className="h-2 w-24 rounded-full bg-foreground/20" />
                    <div className="h-2 w-16 rounded-full bg-foreground/10" />
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-3">
                  <div className="aspect-square rounded-lg bg-primary/5 border border-border" />
                  <div className="aspect-square rounded-lg bg-primary/10 border border-border" />
                  <div className="aspect-square rounded-lg bg-primary/10 border border-border" />
                  <div className="aspect-square rounded-lg bg-primary/5 border border-border" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
