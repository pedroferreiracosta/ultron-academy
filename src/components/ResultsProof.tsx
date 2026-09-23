import { ArrowRight } from 'lucide-react'
import Button from './ui/Button'
import Reveal from './ui/Reveal'
import SectionHeading from './ui/SectionHeading'
import ResultsCarousel from './ResultsCarousel'
import { links } from '../content/site'

export default function ResultsProof() {
  return (
    <section id="resultados" className="relative overflow-hidden py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading eyebrow="Prova de resultado" title="O que os alunos mostram no grupo">
          Prints enviados pelos próprios alunos dentro da comunidade, sem edição.
        </SectionHeading>

        <Reveal delay={0.1} className="mt-12">
          <ResultsCarousel />
        </Reveal>

        <p className="mt-6 text-center text-xs text-aco/60">
          Resultados individuais de alunos. Não representam garantia de ganhos futuros.
        </p>

        <Reveal delay={0.15} className="mt-10 flex justify-center">
          <Button href={links.broker} target="_blank" rel="noopener noreferrer" variant="navy" size="lg">
            Quero aplicar o método
            <ArrowRight size={18} aria-hidden="true" />
          </Button>
        </Reveal>
      </div>
    </section>
  )
}
