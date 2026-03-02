import Link from "next/link"

export function Footer() {
  return (
    <footer className="border-t border-border px-6 py-8">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 md:flex-row">
        <div className="flex items-center gap-2">
          <div className="flex h-6 w-6 items-center justify-center rounded-md bg-primary">
            <svg
              width="12"
              height="12"
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
          <span className="text-sm font-medium text-foreground">Pixorion.ai</span>
        </div>
        <nav className="flex items-center gap-6">
          <Link href="#about" className="text-xs text-muted-foreground transition-colors hover:text-foreground">
            О продукте
          </Link>
          <Link href="#features" className="text-xs text-muted-foreground transition-colors hover:text-foreground">
            Возможности
          </Link>
          <Link href="#analysis" className="text-xs text-muted-foreground transition-colors hover:text-foreground">
            Анализ
          </Link>
          <Link href="#report" className="text-xs text-muted-foreground transition-colors hover:text-foreground">
            Отчёт
          </Link>
        </nav>
        <p className="text-xs text-muted-foreground">
          {'© 2026 Pixorion.ai. Все права защищены.'}
        </p>
      </div>
    </footer>
  )
}
