import { ArrowRight } from 'lucide-react'
import Button from './ui/Button'
import Reveal from './ui/Reveal'
import SectionHeading from './ui/SectionHeading'
import { links, steps } from '../content/site'

export default function Steps() {
  return (
    <section id="como-funciona" className="relative py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading eyebrow="Como funciona" title="Três passos até a sua primeira operação" />

        <ol className="relative mt-14 grid gap-5 md:grid-cols-3">
          <div
            className="pointer-events-none absolute left-[16%] right-[16%] top-8 hidden h-px md:block"
            style={{ background: 'linear-gradient(to right, transparent, rgba(0,212,255,0.5), transparent)' }}
            aria-hidden="true"
          />
          {steps.map((s, i) => (
            <Reveal key={s.title} delay={i * 0.1}>
              <li className="relative flex h-full flex-col items-center rounded-2xl border border-white/[0.06] bg-grafite/70 p-7 text-center">
                <span className="flex h-16 w-16 items-center justify-center rounded-2xl border border-azul/40 bg-navy font-heading text-2xl font-extrabold text-branco shadow-[0_0_30px_-8px_rgba(30,107,255,0.7)]">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <h3 className="mt-6 text-lg font-bold">{s.title}</h3>
                <p className="mt-2 text-sm text-aco">{s.description}</p>
              </li>
            </Reveal>
          ))}
        </ol>

        <Reveal className="mt-12 flex justify-center">
          <Button href={links.broker} target="_blank" rel="noopener noreferrer" variant="navy" size="lg">
            Começar agora
            <ArrowRight size={18} aria-hidden="true" />
          </Button>
        </Reveal>
      </div>
    </section>
  )
}
