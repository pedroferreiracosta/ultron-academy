import { Crown, Headset, BookOpen } from 'lucide-react'
import Reveal from './ui/Reveal'
import SectionHeading from './ui/SectionHeading'
import { DesktopMockup } from './ui/ChartMockup'
import { structure } from '../content/site'

const icons = [Crown, Headset, BookOpen]

export default function Structure() {
  return (
    <section id="estrutura" className="relative py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading eyebrow="Estrutura" title="Tudo o que acontece por trás de cada aula">
          A Ultron funciona como uma mesa de operações, com traders operando, instrutores ensinando
          e um time de suporte, tudo no mesmo lugar.
        </SectionHeading>

        <div className="mt-14 grid items-center gap-8 lg:grid-cols-[1.15fr_1fr]">
          <Reveal>
            <DesktopMockup />
          </Reveal>

          <div className="flex flex-col gap-4">
            {structure.map((item, i) => {
              const Icon = icons[i]
              return (
                <Reveal key={item.title} delay={i * 0.08}>
                  <article className="glow-card flex gap-4 rounded-2xl bg-grafite p-5">
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-preto/60 text-ciano">
                      <Icon size={20} aria-hidden="true" />
                    </span>
                    <div>
                      <h3 className="text-base font-bold">{item.title}</h3>
                      <p className="mt-1 text-sm text-aco">{item.description}</p>
                    </div>
                  </article>
                </Reveal>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
