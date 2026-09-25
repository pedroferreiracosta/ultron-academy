import { ArrowRight } from 'lucide-react'
import Button from './ui/Button'
import { cta, links, steps } from '../content/site'

export default function Steps() {
  return (
    <section id="como-comecar" className="bg-fundo pb-28 pt-10 sm:pb-32">
      <div className="container-x text-center">
        <div data-reveal>
          <span className="badge">{steps.badge}</span>
          <h2 className="h-section mt-6">{steps.title}</h2>
        </div>

        <ol className="mt-16 grid gap-14 md:grid-cols-3 md:gap-10">
          {steps.items.map((s, i) => (
            <li key={s.title} data-reveal style={{ ['--reveal-delay' as string]: `${i * 120}ms` }}>
              <span className="text-gradient block font-heading text-[clamp(6rem,11vw,9rem)] font-medium leading-none">{i + 1}</span>
              <h3 className="mt-6 text-[clamp(1.4rem,2.1vw,1.85rem)] font-semibold">{s.title}</h3>
              <p className="lead mx-auto mt-4 max-w-sm text-aco">{s.body}</p>
            </li>
          ))}
        </ol>

        <div className="mt-14" data-reveal>
          <Button href={links.telegram} target="_blank" rel="noopener noreferrer">
            {cta.telegram}
            <ArrowRight size={20} aria-hidden="true" />
          </Button>
        </div>
      </div>
    </section>
  )
}
