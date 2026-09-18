import { useRef } from 'react'
import { useInView } from 'framer-motion'
import {
  BookOpen,
  LineChart,
  Waves,
  Bitcoin,
  ShieldCheck,
  Crosshair,
  Brain,
  Target,
} from 'lucide-react'
import Reveal from './ui/Reveal'

const CONTAINER = 360
const OUTER_RADIUS = 180
const INNER_SIZE = 170
const INNER_RADIUS = 85

const outerItems = [
  { title: 'Fundamentos', icon: BookOpen, angle: 0 },
  { title: 'Análise Técnica', icon: LineChart, angle: 90 },
  { title: 'Leitura de Fluxo', icon: Waves, angle: 180 },
  { title: 'Cripto', icon: Bitcoin, angle: 270 },
]

const innerItems = [
  { title: 'Gestão de Risco', icon: ShieldCheck, angle: 30 },
  { title: 'Setups', icon: Crosshair, angle: 150 },
  { title: 'Psicologia', icon: Brain, angle: 270 },
]

function Pill({ title, icon: Icon }: { title: string; icon: typeof BookOpen }) {
  return (
    <div className="glow-card flex w-[86px] flex-col items-center gap-1.5 rounded-xl bg-grafite px-2 py-2.5 text-center sm:w-[96px]">
      <Icon size={16} strokeWidth={1.75} className="text-ciano" aria-hidden="true" />
      <span className="text-[10px] font-medium leading-tight text-prata sm:text-[11px]">{title}</span>
    </div>
  )
}

export default function OrbitMethod() {
  const ref = useRef<HTMLElement>(null)
  const inView = useInView(ref, { margin: '200px', once: false })
  const playState = inView ? 'running' : 'paused'

  return (
    <section ref={ref} className="relative overflow-hidden py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-medium uppercase tracking-wider text-ciano">O ecossistema</span>
          <h2 className="mt-3 text-2xl font-bold sm:text-3xl">Tudo gira em torno do método</h2>
          <p className="mt-4 text-aco">
            As sete trilhas não são módulos soltos: funcionam como um sistema único, com o
            método no centro de cada decisão.
          </p>
        </Reveal>

        <Reveal delay={0.15} className="mt-20 flex justify-center sm:mt-24">
          <div
            className="relative scale-[0.72] sm:scale-90 lg:scale-100"
            style={{ width: CONTAINER, height: CONTAINER }}
            aria-hidden="true"
          >
            <div className="absolute inset-0 rounded-full border border-white/10" />
            <div
              className="absolute rounded-full border border-ciano/20"
              style={{ width: INNER_SIZE, height: INNER_SIZE, left: (CONTAINER - INNER_SIZE) / 2, top: (CONTAINER - INNER_SIZE) / 2 }}
            />

            <div
              className="absolute inset-0"
              style={{ animation: 'orbit-cw 50s linear infinite', animationPlayState: playState }}
            >
              {outerItems.map((item) => (
                <div
                  key={item.title}
                  className="absolute left-1/2 top-1/2"
                  style={{ transform: `rotate(${item.angle}deg) translateY(-${OUTER_RADIUS}px)` }}
                >
                  <div style={{ transform: `translate(-50%, -50%) rotate(${-item.angle}deg)` }}>
                    <div style={{ animation: 'orbit-ccw 50s linear infinite', animationPlayState: playState }}>
                      <Pill title={item.title} icon={item.icon} />
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div
              className="absolute"
              style={{
                width: INNER_SIZE,
                height: INNER_SIZE,
                left: (CONTAINER - INNER_SIZE) / 2,
                top: (CONTAINER - INNER_SIZE) / 2,
                animation: 'orbit-ccw 36s linear infinite',
                animationPlayState: playState,
              }}
            >
              {innerItems.map((item) => (
                <div
                  key={item.title}
                  className="absolute left-1/2 top-1/2"
                  style={{ transform: `rotate(${item.angle}deg) translateY(-${INNER_RADIUS}px)` }}
                >
                  <div style={{ transform: `translate(-50%, -50%) rotate(${-item.angle}deg)` }}>
                    <div style={{ animation: 'orbit-cw 36s linear infinite', animationPlayState: playState }}>
                      <Pill title={item.title} icon={item.icon} />
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div
              className="absolute left-1/2 top-1/2 flex h-28 w-28 -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center gap-1 rounded-full text-center"
              style={{
                background: 'radial-gradient(circle at 35% 30%, #00d4ff 0%, #1e6bff 55%, #0a2f77 100%)',
                boxShadow: '0 0 60px -10px rgba(0,212,255,0.6)',
              }}
            >
              <Target size={20} strokeWidth={2} className="text-preto" aria-hidden="true" />
              <span className="font-heading text-xs font-extrabold uppercase tracking-wide text-preto">
                Método
              </span>
            </div>
          </div>
        </Reveal>

        <p className="sr-only">
          As sete trilhas do método: Fundamentos, Análise Técnica, Leitura de Fluxo, Gestão de
          Risco, Cripto, Setups e Psicologia, detalhadas na seção anterior.
        </p>
      </div>
    </section>
  )
}
