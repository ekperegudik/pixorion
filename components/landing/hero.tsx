"use client"

import Link from "next/link"
import { useEffect, useRef } from "react"

function HeroBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    let animationId: number
    let time = 0

    const resize = () => {
      canvas.width = canvas.offsetWidth * window.devicePixelRatio
      canvas.height = canvas.offsetHeight * window.devicePixelRatio
      ctx.scale(window.devicePixelRatio, window.devicePixelRatio)
    }

    resize()
    window.addEventListener("resize", resize)

    const w = () => canvas.width / window.devicePixelRatio
    const h = () => canvas.height / window.devicePixelRatio

    const draw = () => {
      time += 0.003
      const width = w()
      const height = h()

      ctx.clearRect(0, 0, width, height)

      // Subtle dot grid
      const spacing = 40
      const dotRadius = 0.8
      for (let x = spacing; x < width; x += spacing) {
        for (let y = spacing; y < height; y += spacing) {
          const dist = Math.sqrt(
            (x - width / 2) ** 2 + (y - height / 2) ** 2
          )
          const maxDist = Math.sqrt((width / 2) ** 2 + (height / 2) ** 2)
          const fade = 1 - dist / maxDist
          const pulse = 0.3 + 0.2 * Math.sin(time * 2 + dist * 0.008)
          const alpha = fade * pulse

          ctx.beginPath()
          ctx.arc(x, y, dotRadius, 0, Math.PI * 2)
          ctx.fillStyle = `rgba(118, 65, 226, ${alpha})`
          ctx.fill()
        }
      }

      // Floating glow orbs
      const orbs = [
        { cx: 0.3, cy: 0.35, r: 250, speed: 0.7, color: "118, 65, 226" },
        { cx: 0.7, cy: 0.55, r: 200, speed: 1.1, color: "87, 35, 191" },
        { cx: 0.5, cy: 0.7, r: 180, speed: 0.5, color: "190, 150, 255" },
      ]

      for (const orb of orbs) {
        const ox = width * orb.cx + Math.sin(time * orb.speed) * 60
        const oy = height * orb.cy + Math.cos(time * orb.speed * 0.8) * 40
        const gradient = ctx.createRadialGradient(ox, oy, 0, ox, oy, orb.r)
        gradient.addColorStop(0, `rgba(${orb.color}, 0.08)`)
        gradient.addColorStop(0.5, `rgba(${orb.color}, 0.03)`)
        gradient.addColorStop(1, `rgba(${orb.color}, 0)`)
        ctx.fillStyle = gradient
        ctx.fillRect(0, 0, width, height)
      }

      animationId = requestAnimationFrame(draw)
    }

    draw()

    return () => {
      cancelAnimationFrame(animationId)
      window.removeEventListener("resize", resize)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-none absolute inset-0 h-full w-full"
      aria-hidden="true"
    />
  )
}

export function Hero() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden px-6 pt-20">
      <HeroBackground />
      {/* Radial vignette overlay */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 70% 60% at 50% 50%, transparent 40%, var(--background) 100%)",
        }}
        aria-hidden="true"
      />
      <div className="relative z-10 mx-auto flex max-w-3xl flex-col items-center gap-8 text-center">
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
