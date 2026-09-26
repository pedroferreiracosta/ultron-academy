import { ArrowRight, Check } from 'lucide-react'
import Button from './ui/Button'
import RiskNotice from './ui/RiskNotice'
import { cta, finalCta, links } from '../content/site'

export default function FinalCta() {
  return (
    <section
      className="noise relative overflow-hidden py-24 sm:py-32"
      style={{ background: 'radial-gradient(80% 120% at 50% 0%, #1E6BFF 0%, #0A2F77 45%, #0B0D12 100%)' }}
    >
      <div className="container-x text-center" data-reveal>
        <h2 className="mx-auto max-w-4xl text-[clamp(2.4rem,5.4vw,4.5rem)] font-semibold leading-[1.1] tracking-[-0.02em]">
          {finalCta.title}
        </h2>
        <p className="lead mx-auto mt-6 max-w-2xl text-branco/80">{finalCta.body}</p>

        <RiskNotice className="mt-10" />

        <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Button href={links.telegram} target="_blank" rel="noopener noreferrer" className="w-full max-w-[400px] sm:w-auto">
            {cta.telegram}
            <ArrowRight size={20} aria-hidden="true" />
          </Button>
        </div>
        <p className="mt-5 text-sm text-branco/70">{cta.note}</p>

        <ul className="mx-auto mt-12 flex max-w-4xl flex-col items-center justify-center gap-5 border-t border-branco/15 pt-10 sm:flex-row sm:gap-10">
          {finalCta.checks.map((c) => (
            <li key={c} className="flex items-center gap-3 text-lg text-branco/85">
              <span className="flex h-7 w-7 items-center justify-center rounded-full bg-ciano text-preto">
                <Check size={16} strokeWidth={3} aria-hidden="true" />
              </span>
              {c}
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
