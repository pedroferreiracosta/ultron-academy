/**
 * Mapa-múndi estilizado em pontos (decorativo, aria-hidden). Não é
 * geograficamente preciso — é uma nuvem de pontos agrupada em blobs que
 * lê como "mercado global" à distância, no mesmo espírito do moodboard.
 */
const WIDTH = 1600
const HEIGHT = 480

// PRNG determinístico (sem Math.random) para não variar entre renders/SSR.
function seeded(seed: number) {
  let s = seed
  return () => {
    s = (s * 16807) % 2147483647
    return (s - 1) / 2147483646
  }
}

interface Cluster {
  cx: number
  cy: number
  rx: number
  ry: number
  count: number
}

const clusters: Cluster[] = [
  { cx: 200, cy: 220, rx: 150, ry: 110, count: 70 }, // América do Norte
  { cx: 260, cy: 380, rx: 90, ry: 100, count: 45 }, // América do Sul
  { cx: 680, cy: 190, rx: 110, ry: 90, count: 55 }, // Europa
  { cx: 760, cy: 320, rx: 130, ry: 120, count: 60 }, // África
  { cx: 1050, cy: 200, rx: 220, ry: 130, count: 90 }, // Ásia
  { cx: 1300, cy: 400, rx: 90, ry: 60, count: 30 }, // Oceania
]

const rand = seeded(42)
const dots = clusters.flatMap((c) =>
  Array.from({ length: c.count }, () => {
    const angle = rand() * Math.PI * 2
    const r = Math.sqrt(rand())
    return {
      x: c.cx + Math.cos(angle) * c.rx * r,
      y: c.cy + Math.sin(angle) * c.ry * r,
    }
  }),
)

export default function WorldMap({ className = '' }: { className?: string }) {
  return (
    <svg
      viewBox={`0 0 ${WIDTH} ${HEIGHT}`}
      preserveAspectRatio="xMidYMid slice"
      className={`pointer-events-none ${className}`}
      aria-hidden="true"
    >
      {dots.map((d, i) => (
        <circle key={i} cx={d.x} cy={d.y} r={2.4} fill="#E5E7EB" />
      ))}
    </svg>
  )
}
