/**
 * Mockups decorativos da "plataforma" Ultron (aria-hidden): gráfico de candles
 * com a linha neon ciano do manual (seção 08 · Linguagem visual). Verde/vermelho
 * aparecem só aqui, como o manual determina para cores funcionais.
 */
import logoIcon from '../../assets/logo-ultron-icon.png'

type Candle = { o: number; c: number; h: number; l: number }

// Série determinística (sem Math.random) para o SSR/hidratação não divergir
function series(count: number, seed: number): Candle[] {
  let s = seed
  const rand = () => {
    s = (s * 9301 + 49297) % 233280
    return s / 233280
  }
  const out: Candle[] = []
  let price = 50
  for (let i = 0; i < count; i++) {
    const drift = Math.sin(i / 5) * 1.6 + 0.35
    const o = price
    const c = o + drift + (rand() - 0.5) * 5
    const h = Math.max(o, c) + rand() * 2.5
    const l = Math.min(o, c) - rand() * 2.5
    out.push({ o, c, h, l })
    price = c
  }
  return out
}

export function CandleChart({
  count = 42,
  seed = 7,
  className = '',
  mono = false,
}: {
  count?: number
  seed?: number
  className?: string
  mono?: boolean
}) {
  const data = series(count, seed)
  const max = Math.max(...data.map((d) => d.h))
  const min = Math.min(...data.map((d) => d.l))
  const W = 400
  const H = 200
  const step = W / count
  const y = (v: number) => H - ((v - min) / (max - min)) * (H - 20) - 10

  const line = data
    .map((d, i) => `${i === 0 ? 'M' : 'L'}${(i * step + step / 2).toFixed(1)},${(y((d.o + d.c) / 2) - 18).toFixed(1)}`)
    .join(' ')

  return (
    <svg viewBox={`0 0 ${W} ${H}`} className={className} preserveAspectRatio="none" aria-hidden="true">
      <defs>
        <filter id={`glow-${seed}`} x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur stdDeviation="3" result="b" />
          <feMerge>
            <feMergeNode in="b" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>
      {[0.25, 0.5, 0.75].map((f) => (
        <line key={f} x1="0" x2={W} y1={H * f} y2={H * f} stroke="#E5E7EB" strokeOpacity="0.05" />
      ))}
      {data.map((d, i) => {
        const up = d.c >= d.o
        const color = mono ? (up ? '#1E6BFF' : '#9AA3AD') : up ? '#16C784' : '#EA3943'
        const x = i * step + step / 2
        return (
          <g key={i}>
            <line x1={x} x2={x} y1={y(d.h)} y2={y(d.l)} stroke={color} strokeWidth="1" />
            <rect
              x={x - step * 0.32}
              y={y(Math.max(d.o, d.c))}
              width={step * 0.64}
              height={Math.max(1.5, Math.abs(y(d.o) - y(d.c)))}
              fill={color}
              rx="0.5"
            />
          </g>
        )
      })}
      <path d={line} fill="none" stroke="#00D4FF" strokeWidth="1.6" filter={`url(#glow-${seed})`} opacity="0.9" />
    </svg>
  )
}

export function DesktopMockup({ className = '' }: { className?: string }) {
  return (
    <div
      className={`overflow-hidden rounded-2xl border border-white/10 bg-grafite shadow-[0_40px_80px_-30px_rgba(0,0,0,0.9),0_0_60px_-20px_rgba(30,107,255,0.45)] ${className}`}
      aria-hidden="true"
    >
      <div className="flex items-center gap-2 border-b border-white/5 px-4 py-2.5">
        <span className="h-2 w-2 rounded-full bg-white/15" />
        <span className="h-2 w-2 rounded-full bg-white/15" />
        <span className="h-2 w-2 rounded-full bg-white/15" />
        <div className="ml-3 h-5 flex-1 rounded-md bg-preto/60 px-3 text-[10px] leading-5 text-aco/70">
          Buscar trilhas, aulas, setups…
        </div>
      </div>
      <div className="flex">
        <div className="hidden w-32 shrink-0 flex-col gap-1.5 border-r border-white/5 p-3 sm:flex">
          <img src={logoIcon} alt="" className="mb-3 h-6 w-auto self-start" />
          {['Início', 'Trilhas', 'Sala VIP', 'Playbook', 'Comunidade'].map((item, i) => (
            <span
              key={item}
              className={`rounded-md px-2 py-1 text-[10px] ${i === 0 ? 'bg-white/[0.06] text-branco' : 'text-aco/70'}`}
            >
              {item}
            </span>
          ))}
        </div>
        <div className="flex-1 p-4">
          <div className="flex items-end justify-between">
            <div>
              <p className="text-[10px] font-medium uppercase tracking-widest text-ciano">BTC · Live Sala VIP</p>
              <p className="font-heading text-lg font-extrabold text-branco">Leitura de fluxo</p>
            </div>
            <span className="rounded-full border border-ciano/40 px-2 py-0.5 text-[9px] font-medium text-ciano">AO VIVO</span>
          </div>
          <div className="relative mt-3 overflow-hidden rounded-xl border border-white/5 bg-preto/70">
            <div
              className="pointer-events-none absolute inset-0"
              style={{ background: 'radial-gradient(ellipse at 70% 40%, rgba(30,107,255,0.22), transparent 60%)' }}
            />
            <CandleChart className="relative h-40 w-full sm:h-48" />
          </div>
          <div className="mt-3 grid grid-cols-3 gap-2">
            {[
              ['Trilha', 'Fundamentos'],
              ['Progresso', '62%'],
              ['Próxima live', '19h'],
            ].map(([k, v]) => (
              <div key={k} className="rounded-lg border border-white/5 bg-preto/50 px-2.5 py-2">
                <p className="text-[9px] uppercase tracking-wider text-aco/70">{k}</p>
                <p className="font-heading text-xs font-bold text-branco">{v}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export function PhoneMockup({ className = '' }: { className?: string }) {
  return (
    <div
      className={`overflow-hidden rounded-[28px] border border-white/15 bg-grafite p-2 shadow-[0_30px_60px_-20px_rgba(0,0,0,0.9),0_0_40px_-15px_rgba(0,212,255,0.4)] ${className}`}
      aria-hidden="true"
    >
      <div className="rounded-[22px] bg-preto px-3 pb-4 pt-5">
        <div className="mx-auto mb-3 h-1 w-10 rounded-full bg-white/15" />
        <p className="text-[9px] uppercase tracking-widest text-aco/70">Sua evolução</p>
        <p className="font-heading text-sm font-extrabold text-branco">Trilha Análise</p>
        <div className="mt-2 h-1 w-full rounded-full bg-grafite">
          <div className="h-1 w-[62%] rounded-full bg-aco" />
        </div>
        <CandleChart count={20} seed={3} mono className="mt-3 h-24 w-full" />
        <div className="mt-3 rounded-lg bg-navy px-3 py-2 text-center text-[10px] font-medium text-branco">
          Continuar aula
        </div>
      </div>
    </div>
  )
}
