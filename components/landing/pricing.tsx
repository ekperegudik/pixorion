import Link from "next/link"
import { Check } from "lucide-react"

const plans = [
  {
    name: "Пробный период",
    subtitle: "Для новых пользователей",
    price: "Бесплатно",
    features: ["100 токенов в подарок", "Хватит на 20 генераций"],
    cta: "Начать бесплатно",
    href: "#",
    highlighted: false,
  },
  {
    name: "Подписка",
    subtitle: "Для активных продавцов",
    price: "4 999 \u20BD",
    period: "/ мес",
    features: ["2400 токенов", "Хватит на 50 генераций", "На 30 дней"],
    cta: "Подключить подписку",
    href: "#",
    highlighted: true,
  },
  {
    name: "Индивидуальный",
    subtitle: "Специально для ваших задач",
    price: "По запросу",
    features: ["Неограниченные возможности", "Персональная поддержка"],
    cta: "Оставить заявку",
    href: "#",
    highlighted: false,
  },
]

const tokenPacks = [
  { amount: "500 токенов", price: "1 299 \u20BD" },
  { amount: "1 200 токенов", price: "2 799 \u20BD" },
  { amount: "3 000 токенов", price: "5 999 \u20BD" },
]

export function Pricing() {
  return (
    <section id="pricing" className="px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <div className="mx-auto mb-16 max-w-2xl text-center">
          <h2 className="mb-4 font-serif text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            Варианты использования
          </h2>
        </div>

        {/* Pricing cards */}
        <div className="grid gap-6 md:grid-cols-3">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative flex flex-col rounded-xl border p-6 md:p-8 ${
                plan.highlighted
                  ? "border-primary bg-card shadow-[0_0_24px_-6px_rgba(118,65,226,0.3)]"
                  : "border-border bg-card"
              }`}
            >
              {plan.highlighted && (
                <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 rounded-full bg-primary px-4 py-1 text-xs font-semibold text-primary-foreground">
                  Рекомендуем
                </span>
              )}

              <div className="mb-6">
                <h3 className="text-xl font-bold text-foreground">{plan.name}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{plan.subtitle}</p>
              </div>

              <div className="mb-6">
                <span className="text-3xl font-bold text-foreground">{plan.price}</span>
                {plan.period && (
                  <span className="text-sm text-muted-foreground">{plan.period}</span>
                )}
              </div>

              <ul className="mb-8 flex flex-1 flex-col gap-3">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-3">
                    <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary/10">
                      <Check className="h-3 w-3 text-primary" />
                    </div>
                    <span className="text-sm text-muted-foreground">{feature}</span>
                  </li>
                ))}
              </ul>

              <Link
                href={plan.href}
                className={`mt-auto inline-flex w-full items-center justify-center rounded-lg px-6 py-3 text-sm font-medium transition-colors focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background ${
                  plan.highlighted
                    ? "bg-primary text-primary-foreground hover:bg-primary/90"
                    : "border border-border bg-card text-foreground hover:bg-muted"
                }`}
              >
                {plan.cta}
              </Link>
            </div>
          ))}
        </div>

        {/* One-time token purchase */}
        <div className="mt-16">
          <div className="mx-auto mb-8 max-w-2xl text-center">
            <h3 className="mb-2 font-serif text-2xl font-bold tracking-tight text-foreground">
              Разовая покупка токенов
            </h3>
            <p className="text-sm text-muted-foreground">
              Без подписки -- покупайте токены по необходимости
            </p>
          </div>
          <div className="mx-auto grid max-w-3xl gap-4 sm:grid-cols-3">
            {tokenPacks.map((pack) => (
              <Link
                key={pack.amount}
                href="#"
                className="group flex flex-col items-center rounded-xl border border-border bg-card p-6 text-center transition-colors hover:border-primary/40"
              >
                <span className="mb-1 text-base font-semibold text-foreground">{pack.amount}</span>
                <span className="mb-4 text-2xl font-bold text-foreground">{pack.price}</span>
                <span className="text-xs font-medium text-muted-foreground transition-colors group-hover:text-primary">
                  Купить
                </span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
