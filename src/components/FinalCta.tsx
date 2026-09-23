import { ArrowRight, Check } from 'lucide-react'
import Button from './ui/Button'
import Reveal from './ui/Reveal'
import { CandleChart } from './ui/ChartMockup'
import { finalCtaPoints, links } from '../content/site'
import logoIcon from '../assets/logo-ultron-icon.png'

export default function FinalCta() {
  return (
    <section className="relative py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-grafite px-6 py-16 text-center sm:px-12">
            <CandleChart seed={21} count={60} className="pointer-events-none absolute inset-x-0 bottom-0 h-1/2 w-full opacity-25" />
            <div
              className="pointer-events-none absolute inset-0"
              style={{ background: 'radial-gradient(ellipse at 50% 0%, rgba(10,47,119,0.7), transparent 65%)' }}
              aria-hidden="true"
            />

            <div className="relative">
              <img src={logoIcon} alt="" className="mx-auto h-12 w-auto" />
              <h2 className="mx-auto mt-6 max-w-2xl text-[clamp(1.9rem,4.4vw,3rem)] font-extrabold leading-tight">
                Consistência constrói autoridade. Comece a sua hoje.
              </h2>

              <ul className="mt-8 flex flex-wrap justify-center gap-x-6 gap-y-3">
                {finalCtaPoints.map((p) => (
                  <li key={p} className="flex items-center gap-2 text-sm text-prata">
                    <Check size={16} className="text-ciano" aria-hidden="true" />
                    {p}
                  </li>
                ))}
              </ul>

              <div className="mt-10 flex flex-wrap justify-center gap-4">
                <Button href={links.broker} target="_blank" rel="noopener noreferrer" variant="navy" size="lg">
                  Abrir minha conta
                  <ArrowRight size={18} aria-hidden="true" />
                </Button>
                <Button href={links.telegram} target="_blank" rel="noopener noreferrer" variant="secondary" size="lg">
                  Falar com o time
                </Button>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
