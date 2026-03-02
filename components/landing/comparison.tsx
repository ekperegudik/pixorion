import { X, Check } from "lucide-react"

export function Comparison() {
  const otherSolutions = [
    "Разрозненные инструменты",
    "Сложный рабочий процесс",
    "Высокие затраты на производство",
    "Ручной контроль качества",
    "Нет единой системы оценки",
  ]

  const pixorionFeatures = [
    "Все инструменты в одном окне",
    "Структурированный рабочий процесс",
    "Снижение затрат на контент",
    "Автоматический анализ карточек",
    "Структурированный отчёт с оценкой",
  ]

  return (
    <section className="px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <div className="mx-auto mb-16 max-w-2xl text-center">
          <h2 className="mb-4 font-serif text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            Сравнение
          </h2>
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-xl border border-border bg-card p-6 md:p-8">
            <h3 className="mb-6 text-lg font-semibold text-muted-foreground">Другие решения</h3>
            <ul className="flex flex-col gap-4">
              {otherSolutions.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <div className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-destructive/10">
                    <X className="h-3 w-3 text-destructive" />
                  </div>
                  <span className="text-sm leading-relaxed text-muted-foreground">{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-xl border border-primary/30 bg-card p-6 md:p-8">
            <h3 className="mb-6 text-lg font-semibold text-foreground">Pixorion.ai</h3>
            <ul className="flex flex-col gap-4">
              {pixorionFeatures.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <div className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary/10">
                    <Check className="h-3 w-3 text-primary" />
                  </div>
                  <span className="text-sm leading-relaxed text-foreground">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
