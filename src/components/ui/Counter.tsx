import { useEffect, useRef } from 'react'

const fmt = (n: number) => Math.round(n).toLocaleString('pt-BR')

/**
 * Contador animado. O valor final já vai renderizado no HTML; a contagem só
 * acontece se houver JS, se o usuário não pediu movimento reduzido e se o
 * número ainda não estiver na tela quando a página carrega.
 */
export default function Counter({ value, suffix = '', className = '' }: { value: number; suffix?: string; className?: string }) {
  const ref = useRef<HTMLSpanElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el || !('IntersectionObserver' in window)) return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    const r = el.getBoundingClientRect()
    if (r.top < window.innerHeight && r.bottom > 0) return

    el.textContent = `0${suffix}`
    let raf = 0
    const io = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return
        io.disconnect()
        const start = performance.now()
        const dur = 1800
        const tick = (t: number) => {
          const p = Math.min(1, (t - start) / dur)
          const eased = 1 - Math.pow(1 - p, 3)
          el.textContent = `${fmt(value * eased)}${suffix}`
          if (p < 1) raf = requestAnimationFrame(tick)
        }
        raf = requestAnimationFrame(tick)
      },
      { threshold: 0.4 },
    )
    io.observe(el)
    return () => {
      io.disconnect()
      cancelAnimationFrame(raf)
      el.textContent = `${fmt(value)}${suffix}`
    }
  }, [value, suffix])

  return (
    <span ref={ref} className={className}>
      {fmt(value)}
      {suffix}
    </span>
  )
}
