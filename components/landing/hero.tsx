import Link from "next/link"

export function Hero() {
  return (
    <section className="flex min-h-screen items-center justify-center px-6 pt-20">
      <div className="mx-auto flex max-w-3xl flex-col items-center gap-8 text-center">
        <div className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-1.5">
          <span className="h-1.5 w-1.5 rounded-full bg-primary" />
          <span className="text-xs text-muted-foreground">Рабочее пространство на базе ИИ</span>
        </div>
        <h1 className="text-balance font-serif text-4xl font-bold leading-tight tracking-tight text-foreground md:text-5xl lg:text-6xl">
          Создавайте контент для маркетплейсов в одном окне
        </h1>
        <p className="max-w-xl text-pretty text-base leading-relaxed text-muted-foreground md:text-lg">
          Pixorion.ai объединяет генерацию изображений, анализ карточек товаров и инструменты оптимизации контента в едином рабочем пространстве.
        </p>
        <div className="flex flex-col items-center gap-4 sm:flex-row">
          <Link
            href="#cta"
            className="rounded-lg bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90 focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
          >
            Попробовать бесплатно
          </Link>
          <Link
            href="#features"
            className="rounded-lg border border-border bg-card px-6 py-3 text-sm font-medium text-foreground transition-colors hover:bg-muted focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
          >
            Смотреть демо
          </Link>
        </div>
      </div>
    </section>
  )
}
