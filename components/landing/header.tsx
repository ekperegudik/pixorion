import Link from "next/link"

export function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-border/50 bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link href="/" className="flex items-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary">
            <svg
              width="18"
              height="18"
              viewBox="0 0 18 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <path
                d="M9 1L2 5v8l7 4 7-4V5L9 1z"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinejoin="round"
                className="text-primary-foreground"
              />
              <circle cx="9" cy="9" r="3" fill="currentColor" className="text-primary-foreground" />
            </svg>
          </div>
          <span className="text-lg font-semibold tracking-tight text-foreground">Pixorion.ai</span>
        </Link>
        <nav className="hidden items-center gap-8 md:flex">
          <Link href="#about" className="text-sm text-muted-foreground transition-colors hover:text-foreground">
            О продукте
          </Link>
          <Link href="#features" className="text-sm text-muted-foreground transition-colors hover:text-foreground">
            Возможности
          </Link>
          <Link href="#analysis" className="text-sm text-muted-foreground transition-colors hover:text-foreground">
            Анализ
          </Link>
          <Link href="#report" className="text-sm text-muted-foreground transition-colors hover:text-foreground">
            Отчёт
          </Link>
        </nav>
        <Link
          href="#cta"
          className="rounded-lg bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90 focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
        >
          Попробовать бесплатно
        </Link>
      </div>
    </header>
  )
}
