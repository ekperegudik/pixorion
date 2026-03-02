import Link from "next/link"

export function CTA() {
  return (
    <section id="cta" className="px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <div className="rounded-2xl border border-primary/20 bg-card p-12 text-center md:p-16">
          <h2 className="mb-4 font-serif text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            Start working more efficiently
          </h2>
          <p className="mx-auto mb-8 max-w-md text-base leading-relaxed text-muted-foreground">
            Join marketplace sellers who have already streamlined their content production with Pixorion.ai.
          </p>
          <Link
            href="#"
            className="inline-flex rounded-lg bg-primary px-8 py-3.5 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90 focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
          >
            Try for free
          </Link>
        </div>
      </div>
    </section>
  )
}
