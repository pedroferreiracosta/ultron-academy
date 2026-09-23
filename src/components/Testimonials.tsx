import { Quote } from 'lucide-react'
import Reveal from './ui/Reveal'
import SectionHeading from './ui/SectionHeading'
import { testimonials } from '../content/site'

export default function Testimonials() {
  return (
    <section id="depoimentos" className="relative py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading eyebrow="Comunidade" title="Quem entra na Ultron não opera sozinho" />

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((t, i) => (
            <Reveal key={t.quote} delay={(i % 3) * 0.06}>
              <figure className="glow-card flex h-full flex-col rounded-2xl bg-grafite p-6">
                <Quote size={20} className="text-ciano" aria-hidden="true" />
                <blockquote className="mt-4 flex-1 text-sm text-prata">{t.quote}</blockquote>
                <figcaption className="mt-6 flex items-center gap-3 border-t border-white/5 pt-4">
                  <span className="flex h-9 w-9 items-center justify-center rounded-full bg-navy font-heading text-xs font-bold text-branco">
                    U
                  </span>
                  <span>
                    <span className="block text-sm font-medium text-branco">{t.author}</span>
                    <span className="block text-xs text-aco">{t.role}</span>
                  </span>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
