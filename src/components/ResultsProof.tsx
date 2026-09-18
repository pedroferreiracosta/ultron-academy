import Reveal from './ui/Reveal'
import Button from './ui/Button'
import ResultsCarousel from './ResultsCarousel'
import { revenuePlaques, links } from '../content/site'
import { stagger, fadeUp, viewportOnce } from '../lib/motion'
import { motion } from 'framer-motion'

export default function ResultsProof() {
  return (
    <section className="relative overflow-hidden py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-medium uppercase tracking-wider text-ciano">Prova de resultado</span>
          <h2 className="mt-3 text-2xl font-bold sm:text-3xl">Faturamento e relatos de quem aplica o método</h2>
        </Reveal>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          variants={stagger(0.1)}
          className="mt-12 grid gap-5 sm:grid-cols-3"
        >
          {revenuePlaques.map((p) => (
            <motion.div
              key={p.value}
              variants={fadeUp}
              className="glow-card flex h-full flex-col items-center justify-between gap-5 rounded-2xl bg-gradient-to-b from-grafite to-preto p-8 text-center transition-transform duration-300 hover:-translate-y-1"
            >
              <div>
                <p className="text-balance font-heading text-[clamp(1.5rem,4vw,2.25rem)] font-extrabold leading-tight text-branco">
                  {p.value}
                </p>
                <p className="mt-2 text-xs uppercase tracking-wider text-aco">Faturamento reconhecido</p>
              </div>
              <p className="text-sm italic leading-snug text-aco/80">&ldquo;{p.note}&rdquo;</p>
            </motion.div>
          ))}
        </motion.div>

        <p className="mt-6 text-center text-xs text-aco/60">
          Resultados individuais de alunos. Não representam garantia de ganhos futuros.
        </p>
        {/* TODO: substituir placas e relatos por valores/prints reais fornecidos pelo cliente */}
      </div>

      <Reveal delay={0.1} className="mt-16">
        <p className="mx-auto mb-6 max-w-2xl px-4 text-center text-sm text-aco sm:px-6">
          Prints reais enviados por alunos no grupo.
        </p>
        <ResultsCarousel />
      </Reveal>

      <Reveal delay={0.15} className="mt-14 text-center">
        <Button href={links.broker} target="_blank" rel="noopener noreferrer" size="lg">
          Quero resultados assim também
        </Button>
      </Reveal>
    </section>
  )
}
