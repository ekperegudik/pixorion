import { Layers, Zap, TrendingDown } from "lucide-react"

export function About() {
  const points = [
    {
      icon: Layers,
      title: "Единое рабочее пространство",
      description: "Все необходимые инструменты для контента маркетплейсов в одной системе.",
    },
    {
      icon: TrendingDown,
      title: "Снижение затрат",
      description: "Сокращайте расходы на производство, убирая разрозненные инструменты.",
    },
    {
      icon: Zap,
      title: "Быстрый запуск",
      description: "Ускоряйте запуск товаров благодаря структурированному рабочему процессу.",
    },
  ]

  return (
    <section id="about" className="px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <div className="mx-auto mb-16 max-w-2xl text-center">
          <h2 className="mb-4 font-serif text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            Почему Pixorion.ai
          </h2>
          <p className="text-base leading-relaxed text-muted-foreground">
            Мы собрали все необходимые инструменты для работы с карточками товаров маркетплейсов в одной системе. Это снижает затраты на производство и ускоряет запуск товаров.
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
