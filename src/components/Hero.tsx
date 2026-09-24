import { ArrowRight, ArrowUpRight, Zap } from 'lucide-react'
import Button from './ui/Button'
import PlatformMockup from './PlatformMockup'
import { cta, hero, links } from '../content/site'

export default function Hero() {
  return (
    <section id="topo" className="noise relative overflow-hidden bg-fundo pt-[150px] sm:pt-[180px]">
      {/* Brilho azul da marca no lugar do laranja da referência */}
      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 -z-10 h-[70%]"
        style={{
          background:
            'radial-gradient(60% 60% at 50% 100%, rgba(30,107,255,0.35) 0%, rgba(10,47,119,0.25) 40%, transparent 75%)',
        }}
        aria-hidden="true"
      />

      <div className="container-x text-center">
        <span className="badge">
          <Zap size={15} aria-hidden="true" />
          {hero.badge}
        </span>

        <h1 className="mx-auto mt-7 max-w-[1000px] text-[clamp(2.5rem,6.2vw,5.2rem)] font-semibold leading-[1.08] tracking-[-0.025em]">
          {hero.title}
        </h1>

        <p className="lead mx-auto mt-6 max-w-[640px] text-aco">{hero.body}</p>

        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Button href={links.telegram} target="_blank" rel="noopener noreferrer" className="w-full max-w-[400px] sm:w-auto">
            {cta.telegram}
            <ArrowRight size={20} aria-hidden="true" />
          </Button>
          <Button href={links.broker} target="_blank" rel="noopener noreferrer" variant="outline" className="w-full max-w-[400px] whitespace-normal sm:w-auto">
            {cta.broker}
            <ArrowUpRight size={20} aria-hidden="true" />
          </Button>
        </div>

        <p className="mt-8 text-sm text-aco">{cta.note}</p>
      </div>

      <div className="container-x mt-14 sm:mt-20">
        <div className="relative mx-auto max-w-[1180px] translate-y-6">
          <PlatformMockup />
        </div>
      </div>
      {/* Esfuma a base do mockup para a faixa de ativos */}
      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-b from-transparent to-fundo"
        aria-hidden="true"
      />
    </section>
  )
}
