import { Header } from "@/components/landing/header"
import { Hero } from "@/components/landing/hero"
import { About } from "@/components/landing/about"
import { Comparison } from "@/components/landing/comparison"
import { Features } from "@/components/landing/features"
import { Analysis } from "@/components/landing/analysis"
import { Report } from "@/components/landing/report"
import { CTA } from "@/components/landing/cta"
import { Footer } from "@/components/landing/footer"

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main role="main">
        <Hero />
        <About />
        <Comparison />
        <Features />
        <Analysis />
        <Report />
        <CTA />
      </main>
      <Footer />
    </div>
  )
}
