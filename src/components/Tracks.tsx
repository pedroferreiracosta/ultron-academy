import { useRef } from 'react'
import { useInView } from 'framer-motion'
import {
  BookOpen,
  LineChart,
  Waves,
  ShieldCheck,
  Bitcoin,
  Crosshair,
  Brain,
} from 'lucide-react'
import Reveal from './ui/Reveal'
import { tracks } from '../content/site'

const icons = [BookOpen, LineChart, Waves, ShieldCheck, Bitcoin, Crosshair, Brain]
const loop = [...tracks, ...tracks]

export default function Tracks() {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { margin: '200px', once: false })

  return (
    <section id="metodo" className="relative py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-medium uppercase tracking-wider text-ciano">O método</span>
          <h2 className="mt-3 text-2xl font-bold sm:text-3xl">O que você aprende na Ultron</h2>
          <p className="mt-4 text-aco">
            Sete trilhas que constroem, na ordem certa, a base de um trader consistente.
          </p>
        </Reveal>
      </div>

      <Reveal delay={0.1} className="mt-14">
        <div ref={ref} className="edge-fade overflow-hidden">
          <div
            className="marquee-track flex w-max gap-5 px-4 [animation:marquee_42s_linear_infinite] sm:px-6"
            style={{ animationPlayState: inView ? 'running' : 'paused' }}
          >
            {loop.map((track, i) => {
              const Icon = icons[i % icons.length]
              const duplicate = i >= tracks.length
              return (
                <div
                  key={`${track.title}-${i}`}
                  aria-hidden={duplicate}
                  className="glow-card group relative w-[230px] shrink-0 overflow-hidden rounded-2xl bg-grafite p-6 transition-transform duration-300 hover:-translate-y-1 sm:w-[280px]"
                >
                  <div
                    className="pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full bg-azul/0 blur-2xl transition-colors duration-500 group-hover:bg-azul/20"
                    aria-hidden="true"
                  />
                  <div className="relative flex h-11 w-11 items-center justify-center rounded-lg bg-navy/40 text-ciano">
                    <Icon size={22} strokeWidth={1.75} aria-hidden="true" />
                  </div>
                  <h3 className="relative mt-5 text-lg font-bold text-branco">{track.title}</h3>
                  <p className="relative mt-2 text-sm text-aco">{track.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </Reveal>
    </section>
  )
}
