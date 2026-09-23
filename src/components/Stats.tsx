import Button from './ui/Button'
import CountUp from './ui/CountUp'
import Reveal from './ui/Reveal'
import { kpis, links } from '../content/site'

export default function Stats() {
  return (
    <section className="relative py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <Reveal>
          <div
            className="relative overflow-hidden rounded-3xl border border-azul/25 px-6 py-12 sm:px-12"
            style={{ background: 'radial-gradient(ellipse at 20% 0%, rgba(30,107,255,0.35), transparent 55%), #0A2F77' }}
          >
            <div className="grid grid-cols-2 gap-y-10 lg:grid-cols-4">
              {kpis.map((k) => (
                <div key={k.label} className="text-center">
                  <CountUp
                    value={k.value}
                    suffix={k.suffix}
                    className="font-heading text-[clamp(2rem,5vw,3.5rem)] font-extrabold text-branco"
                  />
                  <p className="mt-1 text-xs font-medium uppercase tracking-wider text-prata/80">{k.label}</p>
                </div>
              ))}
            </div>
            <div className="mt-10 flex justify-center">
              <Button href={links.broker} target="_blank" rel="noopener noreferrer" size="lg">
                Fazer parte da Ultron
              </Button>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
