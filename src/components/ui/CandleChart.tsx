// Série de candles ILUSTRATIVA (determinística, sem dado de mercado real).
// Usada só no mockup marcado como "Imagem ilustrativa".
type Candle = { o: number; c: number; h: number; l: number }

function series(count: number, seed: number): Candle[] {
  let s = seed
  const rand = () => {
    s = (s * 9301 + 49297) % 233280
    return s / 233280
  }
  const out: Candle[] = []
  let price = 50
  for (let i = 0; i < count; i++) {
    const drift = Math.sin(i / 6) * 1.4 + 0.25
    const o = price
    const c = o + drift + (rand() - 0.5) * 4.5
    out.push({ o, c, h: Math.max(o, c) + rand() * 2.2, l: Math.min(o, c) - rand() * 2.2 })
    price = c
  }
  return out
}

export default function CandleChart({ count = 70, seed = 7, className = '' }: { count?: number; seed?: number; className?: string }) {
  const data = series(count, seed)
  const max = Math.max(...data.map((d) => d.h))
  const min = Math.min(...data.map((d) => d.l))
  const W = 800
  const H = 300
  const step = W / count
  const y = (v: number) => H - ((v - min) / (max - min)) * (H - 24) - 12

  return (
    <svg viewBox={`0 0 ${W} ${H}`} className={className} preserveAspectRatio="none" aria-hidden="true">
      {[0.2, 0.4, 0.6, 0.8].map((f) => (
        <line key={f} x1="0" x2={W} y1={H * f} y2={H * f} stroke="#ffffff" strokeOpacity="0.05" />
      ))}
      {data.map((d, i) => {
        const up = d.c >= d.o
        const color = up ? '#16C784' : '#EA3943'
        const x = i * step + step / 2
        return (
          <g key={i}>
            <line x1={x} x2={x} y1={y(d.h)} y2={y(d.l)} stroke={color} strokeWidth="1.2" />
            <rect x={x - step * 0.3} y={y(Math.max(d.o, d.c))} width={step * 0.6} height={Math.max(1.5, Math.abs(y(d.o) - y(d.c)))} fill={color} />
          </g>
        )
      })}
    </svg>
  )
}
